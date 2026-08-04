import { useMemo, useState, type FormEvent } from 'react'
import type { IslandContent, Property } from '../data/content'
import { PickerRow } from './PickerRow'
import { copy, extraTabs, OWNER_LANG, sections } from './pickerContent'
import { houseRules, islandRows, propertyFields, seedOverrides } from './rows'
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

const EMPTY_PLACE: NewPlace = { name: '', note: '', phone: '', maps: '', website: '' }

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
  const rules = useMemo(() => houseRules(property, OWNER_LANG), [property])

  /** id → title, for the readable summary in the e-mail. */
  const titles = useMemo(() => {
    const map: Record<string, string> = {}
    Object.values(rows).forEach((list) => list.forEach((r) => (map[r.id] = r.title)))
    return map
  }, [rows])

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
  const [removedRules, setRemovedRules] = useState<Set<number>>(new Set())
  const [newRules, setNewRules] = useState('')
  const [notes, setNotes] = useState('')
  const [owner, setOwner] = useState({ name: '', email: '' })

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

    const rulesToAdd = newRules
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean)

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
        removedRules: [...removedRules],
        newRules: rulesToAdd,
      },
      needsTranslation,
      notes,
      owner,
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
    if (!owner.name.trim() || !owner.email.trim()) {
      setStatus('error')
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
            {property.property.town ? `${property.property.town}, ${island.name}` : island.name}
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
            (({ key, title, hint }) => {
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
                  <p className="mt-1 font-hanken text-[13px] text-ink/55">{hint}</p>

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
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {propFields.map((field) => (
                    <label
                      key={field.path}
                      className={`block ${field.multiline ? 'sm:col-span-2' : ''}`}
                    >
                      <span className="mb-1 block font-hanken text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                        {field.label}
                      </span>
                      {field.multiline ? (
                        <textarea
                          rows={3}
                          value={propChanged[field.path] ?? field.value}
                          onChange={(e) => editProperty(field.path, e.target.value, field.value)}
                          className={`${input} resize-y`}
                        />
                      ) : (
                        <input
                          type="text"
                          value={propChanged[field.path] ?? field.value}
                          onChange={(e) => editProperty(field.path, e.target.value, field.value)}
                          className={input}
                        />
                      )}
                    </label>
                  ))}
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
                <textarea
                  rows={3}
                  value={newRules}
                  placeholder={copy.newRules}
                  onChange={(e) => setNewRules(e.target.value)}
                  className={`${input} mt-3 resize-y`}
                />
              </section>
            </div>
          )}

          {/* ---------- Last tab: notes, who sent it, send ---------- */}
          {tab === 'send' && (
            <section>
              <h2 className="font-fraunces text-xl font-medium text-ink">{copy.notesTitle}</h2>
              <p className="mt-1 font-hanken text-[13px] text-ink/55">{copy.notesHint}</p>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`${input} mt-3 resize-y`}
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  value={owner.name}
                  placeholder={copy.ownerName}
                  onChange={(e) => setOwner((o) => ({ ...o, name: e.target.value }))}
                  className={input}
                />
                <input
                  type="email"
                  value={owner.email}
                  placeholder={copy.ownerEmail}
                  onChange={(e) => setOwner((o) => ({ ...o, email: e.target.value }))}
                  className={input}
                />
              </div>

              {status === 'error' && (
                <p className="mt-3 font-hanken text-[13px] font-semibold text-clay-600">
                  {!owner.name.trim() || !owner.email.trim() ? copy.required : copy.error}
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
