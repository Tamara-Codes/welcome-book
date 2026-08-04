import { submitConfig } from './pickerContent'
import type { PicksPayload } from './types'

/** How the submission was delivered, so the UI can tailor the success copy. */
export type SubmitMode = 'endpoint' | 'mailto'

const subject = 'Welcome Book — odabir sadržaja'

/**
 * The e-mail body: a human-readable Croatian summary you can skim on a phone,
 * followed by the exact JSON payload that gets applied to the property file.
 * Both, deliberately — the summary is for deciding, the JSON is for doing.
 */
export function buildMessage(payload: PicksPayload, titles: Record<string, string>): string {
  const name = (id: string) => titles[id] ?? id
  const lines: string[] = []

  lines.push(`Smještaj: ${payload.slug} (otok/lokacija: ${payload.island})`)
  lines.push(`Poslao: ${payload.owner.name} <${payload.owner.email}>`)
  lines.push('')

  if (payload.exclude.length) {
    lines.push(`UKLONJENO (${payload.exclude.length}):`)
    payload.exclude.forEach((id) => lines.push(`  – ${name(id)}`))
    lines.push('')
  }

  const edited = Object.keys(payload.override)
  if (edited.length) {
    lines.push(`IZMIJENJENO (${edited.length}):`)
    edited.forEach((id) => {
      lines.push(`  – ${name(id)}`)
      Object.entries(payload.override[id]).forEach(([key, value]) =>
        lines.push(`      ${key}: ${value}`),
      )
    })
    lines.push('')
  }

  const added = Object.entries(payload.extra).filter(([, places]) => places?.length)
  if (added.length) {
    lines.push('DODANO:')
    added.forEach(([section, places]) => {
      places?.forEach((p) => lines.push(`  – [${section}] ${p.name} — ${p.note}`))
    })
    lines.push('')
  }

  const propertyChanges = Object.entries(payload.property.changed)
  if (propertyChanges.length) {
    lines.push('PODACI O SMJEŠTAJU:')
    propertyChanges.forEach(([path, value]) => lines.push(`  – ${path}: ${value}`))
    lines.push('')
  }

  if (payload.property.removedRules.length || payload.property.newRules.length) {
    lines.push('KUĆNI RED:')
    payload.property.removedRules.forEach((i) => lines.push(`  – uklonjeno pravilo #${i + 1}`))
    payload.property.newRules.forEach((rule) => lines.push(`  + ${rule}`))
    lines.push('')
  }

  if (payload.notes.trim()) {
    lines.push('NAPOMENA:')
    lines.push(payload.notes.trim())
    lines.push('')
  }

  if (payload.needsTranslation.length) {
    lines.push(
      `⚠️ ZA PRIJEVOD: ${payload.needsTranslation.length} polja upisana su na "${payload.lang}" ` +
        'i moraju se prevesti na sve jezike prije objave.',
    )
    lines.push('')
  }

  lines.push('--- JSON (za primjenu u property datoteci) ---')
  lines.push(JSON.stringify(payload, null, 2))

  return lines.join('\n')
}

/**
 * Send the owner's picks. Posts through Web3Forms when a key is configured;
 * otherwise opens the owner's mail client with the message pre-filled.
 * Throws on failure so the caller can show the copy-to-clipboard fallback.
 */
export async function submitPicks(
  payload: PicksPayload,
  titles: Record<string, string>,
): Promise<SubmitMode> {
  const message = buildMessage(payload, titles)

  if (submitConfig.accessKey) {
    const res = await fetch(submitConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: submitConfig.accessKey,
        subject: `${subject} — ${payload.slug}`,
        from_name: payload.owner.name || 'Welcome Book',
        name: payload.owner.name,
        email: payload.owner.email,
        message,
      }),
    })
    const json = await res.json().catch(() => null)
    if (!res.ok || !json?.success) throw new Error(`Submission failed with status ${res.status}`)
    return 'endpoint'
  }

  // Fallback: pre-filled mail client. Long payloads can exceed what some mail
  // clients accept in a mailto URL, which is why the UI also offers "copy".
  window.location.href =
    `mailto:${submitConfig.email}` +
    `?subject=${encodeURIComponent(`${subject} — ${payload.slug}`)}` +
    `&body=${encodeURIComponent(message)}`
  return 'mailto'
}

/** Clipboard fallback for when e-mail delivery fails entirely. */
export async function copyPicks(
  payload: PicksPayload,
  titles: Record<string, string>,
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(buildMessage(payload, titles))
    return true
  } catch {
    return false
  }
}

