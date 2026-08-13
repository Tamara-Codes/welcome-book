import { useMemo, useState, type FormEvent } from 'react'
import { upload } from '@vercel/blob/client'
import type { IslandContent, Property } from '../data/content'
import { PickerRow } from './PickerRow'
import { copy, extraTabs, OWNER_LANG, sections } from './pickerContent'
import { apartmentFields, houseRules, islandRows, propertyFields, seedOverrides } from './rows'
import { copyPicks, submitPicks, type SubmitMode } from './submitPicks'
import type { NewPlace, PicksPayload, SectionKey } from './types'

/* ============================================================================
 *  ✅  PICKER PAGE  —  /pick/<slug>
 * ----------------------------------------------------------------------------
 *  Owner-facing. Everything starts TICKED: the owner unticks what they don't
 *  want, edits what's wrong, adds what's missing. The result is emailed as
 *  PicksPayload JSON (see types.ts) and applied to their property file.
 *
 *  📑  TABS — one island section per tab, then the property details, then the
 *  send step. It stays a SINGLE <form> with all state at this level, so every
 *  answer survives switching tabs; only the active panel is rendered. Owners
 *  fill this in on a phone, and one scroll through five sections plus house
 *  rules was too much to face at once.
 * ========================================================================== */

const input =
  'w-full rounded-lg border border-ink/15 bg-white px-3 py-2 font-hanken text-[15px] text-ink ' +
  'placeholder:text-ink/35 transition focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-400/25'

const EMPTY_PLACE: NewPlace = { name: '', note: '' }

/** Island sections first, then the property details, then the send step. */
type TabKey = SectionKey | (typeof extraTabs)[number]['key']
const TAB_KEYS: TabKey[] = [...sections.map((s) => s.key), ...extraTabs.map((t) => t.key)]

interface Props {
  slug: string
  property: Property
  island: IslandContent
}

export function Picker({ slug, property, island }: Props) {
  const rows = useMemo(() => islandRows(island, OWNER_LANG, property.extra), [island, property])
  const propFields = useMemo(() => propertyFields(property, OWNER_LANG), [property])
  const roomFields = useMemo(() => apartmentFields(property, OWNER_LANG), [property])
  const propertyFieldTitles = useMemo(
    () => Object.fromEntries([...propFields, ...roomFields].map((field) => [field.path, field.label])),
    [propFields, roomFields],
  )
  const rules = useMemo(() => houseRules(property, OWNER_LANG), [property])

  /** id → title, for the readable summary in the e-mail. */
  const titles = useMemo(() => {
    const map: Record<string, string> = {}
    Object.values(rows).forEach((list) => list.forEach((r) => (map[r.id] = r.title)))
    property.apartments.forEach((a) => (map[a.id] = typeof a.name === 'string' ? a.name : a.name.en))
    return map
  }, [rows, property.apartments])

  /** id → field → original value + whether it needs translating. */
  const fieldMeta = useMemo(() => {
    const map: Record<string, Record<string, { value: string; translated: boolean }>> = {}
    Object.values(rows).forEach((list) =>
      list.forEach((r) => {
        map[r.id] = {}
        r.fields.forEach((f) => (map[r.id][f.key] = { value: f.value, translated: !!f.translated }))
      }),
    )
    return map
  }, [rows])

  // Seeded from the property's stored customisation, so a returning owner opens
  // on their CURRENT guide. A submission is therefore a full snapshot of what
  // they want — the apply step replaces exclude/override/extra, never merges.
  const [removed, setRemoved] = useState<Set<string>>(() => new Set(property.exclude ?? []))
  const [overrides, setOverrides] = useState<Record<string, Record<string, string>>>(() =>
    seedOverrides(property, OWNER_LANG),
  )
  const [extras, setExtras] = useState<Partial<Record<SectionKey, NewPlace[]>>>({})
  const [propChanged, setPropChanged] = useState<Record<string, string>>({})
  const [removedPropertyFields, setRemovedPropertyFields] = useState<Set<string>>(new Set())
  // Apartment id → uploaded Blob URL, and its in-flight status. Seeded empty —
  // the existing apt.image (if any) is shown as a preview until replaced.
  const [photos, setPhotos] = useState<Record<string, string>>({})
  const [photoStatus, setPhotoStatus] = useState<
    Record<string, 'uploading' | 'done' | 'error'>
  >({})
  const [removedRules, setRemovedRules] = useState<Set<number>>(new Set())
  const [newRules, setNewRules] = useState<string[]>([])
  const [notes, setNotes] = useState('')

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [mode, setMode] = useState<SubmitMode>('endpoint')
  const [copied, setCopied] = useState(false)

  const [tab, setTab] = useState<TabKey>(TAB_KEYS[0])
  const tabIndex = TAB_KEYS.indexOf(tab)
  const isLastTab = tabIndex === TAB_KEYS.length - 1
  const activeSection = sections.find((s) => s.key === tab)

  /** Move to another tab and start it from the top — mid-panel is disorienting. */
  function goToTab(next: TabKey) {
    setTab(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function toggle(id: string, checked: boolean) {
    setRemoved((prev) => {
      const next = new Set(prev)
      if (checked) next.delete(id)
      else next.add(id)
      return next
    })
  }

  /** Record an edit only while it differs from the island's value. */
  function edit(id: string, key: string, value: string) {
    setOverrides((prev) => {
      const original = fieldMeta[id]?.[key]?.value ?? ''
      const forId = { ...(prev[id] ?? {}) }
      if (value === original) delete forId[key]
      else forId[key] = value
      const next = { ...prev }
      if (Object.keys(forId).length) next[id] = forId
      else delete next[id]
      return next
    })
  }

  function editProperty(path: string, value: string, original: string) {
    setPropChanged((prev) => {
      const next = { ...prev }
      if (value === original) delete next[path]
      else next[path] = value
      return next
    })
  }

  /** Upload straight to Vercel Blob from the browser — file bytes never touch
   *  our own server. Overwrites any earlier upload for the same apartment. */
  async function handlePhoto(apartmentId: string, file: File) {
    setPhotoStatus((prev) => ({ ...prev, [apartmentId]: 'uploading' }))
    try {
      const blob = await upload(`${slug}/${apartmentId}-${file.name}`, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      })
      setPhotos((prev) => ({ ...prev, [apartmentId]: blob.url }))
      setPhotoStatus((prev) => ({ ...prev, [apartmentId]: 'done' }))
    } catch {
      setPhotoStatus((prev) => ({ ...prev, [apartmentId]: 'error' }))
    }
  }

  function addPlace(section: SectionKey) {
    setExtras((prev) => ({ ...prev, [section]: [...(prev[section] ?? []), { ...EMPTY_PLACE }] }))
  }

  function editPlace(section: SectionKey, index: number, key: keyof NewPlace, value: string) {
    setExtras((prev) => {
      const list = [...(prev[section] ?? [])]
      list[index] = { ...list[index], [key]: value }
      return { ...prev, [section]: list }
    })
  }

  function removePlace(section: SectionKey, index: number) {
    setExtras((prev) => ({
      ...prev,
      [section]: (prev[section] ?? []).filter((_, i) => i !== index),
    }))
  }

  function buildPayload(): PicksPayload {
    // Only places with a name are worth sending.
    const cleanExtras: Partial<Record<SectionKey, NewPlace[]>> = {}
    ;(Object.keys(extras) as SectionKey[]).forEach((section) => {
      const list = (extras[section] ?? []).filter((p) => p.name.trim())
      if (list.length) cleanExtras[section] = list
    })

    const rulesToAdd = newRules.map((rule) => rule.trim()).filter(Boolean)

    // The translation gate: every single-language string, listed explicitly.
    const needsTranslation: string[] = []
    Object.entries(overrides).forEach(([id, fields]) =>
      Object.keys(fields).forEach((key) => {
        if (fieldMeta[id]?.[key]?.translated) needsTranslation.push(`override/${id}/${key}`)
      }),
    )
    propFields.forEach((f) => {
      if (f.translated && propChanged[f.path] !== undefined) {
        needsTranslation.push(`property/${f.path}`)
      }
    })
    roomFields.forEach((f) => {
      if (f.translated && propChanged[f.path] !== undefined) {
        needsTranslation.push(`property/${f.path}`)
      }
    })
    ;(Object.keys(cleanExtras) as SectionKey[]).forEach((section) =>
      cleanExtras[section]?.forEach((_, i) => needsTranslation.push(`extra/${section}/${i}/note`)),
    )
    rulesToAdd.forEach((_, i) => needsTranslation.push(`property/newRules/${i}`))

    return {
      slug,
      island: property.island,
      lang: OWNER_LANG,
      exclude: [...removed],
      override: overrides,
      extra: cleanExtras,
      property: {
        changed: propChanged,
        removedFields: [...removedPropertyFields],
        removedRules: [...removedRules],
        newRules: rulesToAdd,
      },
      photos,
      needsTranslation,
      notes,
      owner: { name: property.host.name, email: property.host.email },
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    // Enter inside a field on any earlier tab means "next", not "send".
    if (!isLastTab) {
      goToTab(TAB_KEYS[tabIndex + 1])
      return
    }
    setStatus('submitting')
    try {
      setMode(await submitPicks(buildPayload(), titles))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  async function handleCopy() {
    setCopied(await copyPicks(buildPayload(), titles))
  }

  if (status === 'success') {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 text-center">
        <h1 className="font-fraunces text-3xl font-medium text-ink">{copy.successTitle}</h1>
        <p className="mt-3 font-hanken text-[15px] leading-relaxed text-ink/70">
          {mode === 'mailto' ? copy.successMailto : copy.successBody}
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-shell pb-24">
      {/* 4xl, not 2xl: the tab strip needs ~800px to keep all seven tabs on one
          row, and the wider column also lets the property fields pair up. */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <header>
          <p className="font-hanken text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
            {copy.eyebrow}
          </p>
          <h1 className="mt-2 font-fraunces text-3xl font-medium leading-tight text-ink sm:text-4xl">
            {copy.title}
          </h1>
          <p className="mt-1.5 font-hanken text-[15px] font-semibold text-ink/70">
            {property.property.name} ·{' '}
            {property.property.town && property.property.town !== island.name
              ? `${property.property.town}, ${island.name}`
              : property.property.town || island.name}
          </p>
        </header>

        {/* ---------- Tab strip ----------
            One card, sticky while you scroll. On a phone it swipes sideways
            (bar hidden via .no-scrollbar); from `sm` up there's room for all
            seven, so they wrap onto two lines instead of scrolling at all. */}
        <nav
          aria-label={copy.title}
          className="sticky top-0 z-10 -mx-4 mt-8 bg-shell/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6"
        >
          <ul className="no-scrollbar flex gap-1.5 overflow-x-auto rounded-2xl border border-ink/10 bg-white p-2 shadow-card sm:flex-wrap sm:overflow-visible">
            {TAB_KEYS.map((key) => {
              const section = sections.find((s) => s.key === key)
              const label = section?.tab ?? extraTabs.find((t) => t.key === key)?.tab ?? key
              const kept = section
                ? rows[section.key].filter((r) => !removed.has(r.id)).length
                : undefined
              const active = key === tab
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => goToTab(key)}
                    aria-current={active ? 'step' : undefined}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 font-hanken text-[14px] font-semibold transition sm:text-[15px] ${
                      active
                        ? 'bg-clay-600 text-white shadow-sm'
                        : 'text-ink/60 hover:bg-shell-100 hover:text-ink'
                    }`}
                  >
                    {label}
                    {kept !== undefined && (
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[11px] font-bold tabular-nums ${
                          active ? 'bg-white/25 text-white' : 'bg-ink/10 text-ink/50'
                        }`}
                      >
                        {kept}
                      </span>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <form onSubmit={handleSubmit} noValidate className="mt-8">
          {activeSection &&
            (({ key, title }) => {
              const list = rows[key]
              const kept = list.filter((r) => !removed.has(r.id)).length
              return (
                <section>
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-fraunces text-xl font-medium text-ink">{title}</h2>
                    <span className="shrink-0 font-hanken text-[12px] font-semibold text-ink/45">
                      {copy.summary(kept, list.length)}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {list.map((row) => (
                      <PickerRow
                        key={row.id}
                        row={row}
                        checked={!removed.has(row.id)}
                        onToggle={(checked) => toggle(row.id, checked)}
                        edits={overrides[row.id] ?? {}}
                        onEdit={(field, value) => edit(row.id, field, value)}
                      />
                    ))}
                  </ul>

                  <div className="mt-4 rounded-xl border border-dashed border-ink/20 p-3.5">
                    <p className="font-hanken text-[13px] font-semibold text-ink/70">
                      {copy.addTitle}
                    </p>
                    <div className="mt-3 space-y-4">
                      {(extras[key] ?? []).map((place, i) => (
                        <div key={i} className="space-y-2 rounded-lg bg-white p-3">
                          {(Object.keys(copy.newPlace) as (keyof NewPlace)[]).map((field) => (
                            <input
                              key={field}
                              type="text"
                              value={place[field]}
                              placeholder={copy.newPlace[field]}
                              onChange={(e) => editPlace(key, i, field, e.target.value)}
                              className={input}
                            />
                          ))}
                          <button
                            type="button"
                            onClick={() => removePlace(key, i)}
                            className="font-hanken text-[12px] font-semibold text-ink/45 hover:text-clay-600"
                          >
                            {copy.remove}
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => addPlace(key)}
                      className="mt-3 font-hanken text-[13px] font-semibold text-clay-600"
                    >
                      {copy.addAnother}
                    </button>
                  </div>
                </section>
              )
            })(activeSection)}

          {/* ---------- Property details + house rules: one tab, edited directly ---------- */}
          {tab === 'property' && (
            <div className="space-y-12">
              <section>
                <h2 className="font-fraunces text-xl font-medium text-ink">{copy.propertyTitle}</h2>
                <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.propertyHint}</p>
                <ul className="mt-4 space-y-2">
                  {propFields.map((field) => (
                    <PickerRow
                      key={field.path}
                      row={{
                        id: field.path,
                        title: field.label,
                        subtitle: propChanged[field.path] ?? field.value,
                        fields: [{ ...field, key: field.path }],
                      }}
                      checked={!removedPropertyFields.has(field.path)}
                      onToggle={(checked) =>
                        setRemovedPropertyFields((prev) => {
                          const next = new Set(prev)
                          if (checked) next.delete(field.path)
                          else next.add(field.path)
                          return next
                        })
                      }
                      edits={
                        propChanged[field.path] === undefined
                          ? {}
                          : { [field.path]: propChanged[field.path] }
                      }
                      onEdit={(_, value) => editProperty(field.path, value, field.value)}
                    />
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="font-fraunces text-xl font-medium text-ink">{copy.roomsTitle}</h2>
                <div className="mt-4 space-y-5">
                  {property.apartments.map((apt) => {
                    const apartmentName = typeof apt.name === 'string' ? apt.name : apt.name.en
                    const fields = roomFields.filter((field) =>
                      field.path.startsWith(`apartments.${apt.id}.`),
                    )
                    return (
                      <div key={apt.id} className="rounded-xl border border-ink/12 bg-white p-3.5">
                        <p className="font-hanken text-[13px] font-semibold text-ink/70">
                          {apartmentName}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {fields.map((field) => (
                            <PickerRow
                              key={field.path}
                              row={{
                                id: field.path,
                                title: field.label,
                                subtitle: propChanged[field.path] ?? field.value,
                                fields: [{ ...field, key: field.path }],
                              }}
                              checked={!removedPropertyFields.has(field.path)}
                              onToggle={(checked) =>
                                setRemovedPropertyFields((prev) => {
                                  const next = new Set(prev)
                                  if (checked) next.delete(field.path)
                                  else next.add(field.path)
                                  return next
                                })
                              }
                              edits={
                                propChanged[field.path] === undefined
                                  ? {}
                                  : { [field.path]: propChanged[field.path] }
                              }
                              onEdit={(_, value) => editProperty(field.path, value, field.value)}
                            />
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </section>

              <section>
                <h2 className="font-fraunces text-xl font-medium text-ink">{copy.rulesTitle}</h2>
                <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.rulesHint}</p>
                <ul className="mt-4 space-y-2">
                  {rules.map((rule, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-ink/12 bg-white p-3.5"
                    >
                      <input
                        type="checkbox"
                        checked={!removedRules.has(i)}
                        onChange={(e) =>
                          setRemovedRules((prev) => {
                            const next = new Set(prev)
                            if (e.target.checked) next.delete(i)
                            else next.add(i)
                            return next
                          })
                        }
                        className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-clay-600"
                      />
                      <span
                        className={`font-hanken text-[14px] leading-snug ${
                          removedRules.has(i) ? 'text-ink/35 line-through' : 'text-ink/80'
                        }`}
                      >
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 space-y-2">
                  {newRules.map((rule, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={rule}
                        placeholder={copy.newRule}
                        onChange={(e) =>
                          setNewRules((prev) => prev.map((item, i) => (i === index ? e.target.value : item)))
                        }
                        className={input}
                      />
                      <button
                        type="button"
                        onClick={() => setNewRules((prev) => prev.filter((_, i) => i !== index))}
                        className="shrink-0 font-hanken text-[12px] font-semibold text-ink/45 hover:text-clay-600"
                      >
                        {copy.remove}
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setNewRules((prev) => [...prev, ''])}
                  className="mt-3 font-hanken text-[13px] font-semibold text-clay-600"
                >
                  {copy.addRule}
                </button>
              </section>

              <section>
                <h2 className="font-fraunces text-xl font-medium text-ink">{copy.photosTitle}</h2>
                <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.photosHint}</p>
                <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                  {property.apartments.map((apt) => {
                    const preview = photos[apt.id] ?? apt.image
                    const status = photoStatus[apt.id]
                    const apartmentName = typeof apt.name === 'string' ? apt.name : apt.name.en
                    return (
                      <div key={apt.id} className="rounded-xl border border-ink/12 bg-white p-3.5">
                        <p className="font-hanken text-[13px] font-semibold text-ink/70">
                          {apartmentName}
                        </p>
                        {preview && (
                          <img
                            src={preview}
                            alt={apartmentName}
                            className="mt-2 h-32 w-full rounded-lg object-cover"
                          />
                        )}
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/webp"
                          disabled={status === 'uploading'}
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) void handlePhoto(apt.id, file)
                          }}
                          className="mt-2.5 block w-full font-hanken text-[13px] text-ink/70"
                        />
                        {status === 'uploading' && (
                          <p className="mt-1.5 font-hanken text-[12px] text-ink/45">
                            {copy.photoUploading}
                          </p>
                        )}
                        {status === 'error' && (
                          <p className="mt-1.5 font-hanken text-[12px] font-semibold text-clay-600">
                            {copy.photoUploadError}
                          </p>
                        )}
                        {status === 'done' && (
                          <p className="mt-1.5 font-hanken text-[12px] font-semibold text-ink/45">
                            {copy.photoUploadDone}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>
          )}

          {/* ---------- Last tab: notes, who sent it, send ---------- */}
          {tab === 'send' && (
            <section>
              <div className="rounded-xl border border-ink/12 bg-white p-3.5">
                <h2 className="font-fraunces text-xl font-medium text-ink">{copy.reviewTitle}</h2>
                {removed.size ? (
                  <>
                    <p className="mt-1 font-hanken text-[13px] font-semibold text-clay-600">
                      {copy.reviewRemoved(removed.size)}
                    </p>
                    <ul className="mt-2 space-y-1 font-hanken text-[14px] text-ink/70">
                      {[...removed].map((id) => (
                        <li key={id}>– {titles[id] ?? id}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.reviewEmpty}</p>
                )}
                <h3 className="mt-5 font-hanken text-[13px] font-semibold text-ink">
                  {copy.reviewHiddenFields}
                </h3>
                {removedPropertyFields.size ? (
                  <ul className="mt-2 space-y-1 font-hanken text-[14px] text-ink/70">
                    {[...removedPropertyFields].map((path) => (
                      <li key={path}>– {propertyFieldTitles[path] ?? path}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 font-hanken text-[13px] text-ink/55">
                    {copy.reviewNoHiddenFields}
                  </p>
                )}
              </div>

              <h2 className="mt-6 font-fraunces text-xl font-medium text-ink">{copy.notesTitle}</h2>
              <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.notesHint}</p>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`${input} mt-3 resize-y`}
              />
              {status === 'error' && (
                <p className="mt-3 font-hanken text-[13px] font-semibold text-clay-600">
                  {copy.error}
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="rounded-xl bg-clay-600 px-6 py-3 font-hanken text-[15px] font-semibold text-white transition hover:bg-ink disabled:opacity-60"
                >
                  {status === 'submitting' ? copy.submitting : copy.submit}
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="font-hanken text-[13px] font-semibold text-ink/55 hover:text-clay-600"
                >
                  {copied ? copy.copied : copy.copy}
                </button>
              </div>
            </section>
          )}

          {/* ---------- Step through the tabs without hunting the strip ---------- */}
          <nav className="mt-10 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
            {tabIndex > 0 ? (
              <button
                type="button"
                onClick={() => goToTab(TAB_KEYS[tabIndex - 1])}
                className="font-hanken text-[13px] font-semibold text-ink/55 hover:text-clay-600"
              >
                ← {copy.back}
              </button>
            ) : (
              <span />
            )}
            <span className="font-hanken text-[12px] font-semibold uppercase tracking-wide text-ink/40">
              {copy.step(tabIndex + 1, TAB_KEYS.length)}
            </span>
            {!isLastTab ? (
              <button
                type="button"
                onClick={() => goToTab(TAB_KEYS[tabIndex + 1])}
                className="rounded-xl bg-clay-600 px-5 py-2.5 font-hanken text-[14px] font-semibold text-white transition hover:bg-ink"
              >
                {copy.next} →
              </button>
            ) : (
              <span />
            )}
          </nav>
        </form>
      </div>
    </main>
  )
}
