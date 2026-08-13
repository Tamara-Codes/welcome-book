import { submitConfig } from './pickerContent'
import type { PicksPayload } from './types'

/** How the submission was delivered, so the UI can tailor the success copy. */
export type SubmitMode = 'endpoint' | 'mailto'

const subject = 'Welcome Book — odabir sadržaja'

const fieldLabels: Record<string, string> = {
  name: 'Naziv',
  label: 'Naziv',
  description: 'Opis',
  phone: 'Telefon',
  email: 'E-mail',
  website: 'Web stranica',
  price: 'Cijena',
  'apartmentInfo.wifi.network': 'Wi-Fi mreža',
  'apartmentInfo.wifi.password': 'Wi-Fi lozinka',
  'apartmentInfo.checkIn': 'Prijava',
  'apartmentInfo.checkOut': 'Odjava',
  'apartmentInfo.quietHours': 'Noćni mir',
  'apartmentInfo.parking': 'Parking',
  'apartmentInfo.trash': 'Otpad',
  'apartmentInfo.ac': 'Klima',
  'host.name': 'Ime domaćina',
  'host.phone': 'Telefon domaćina',
  'host.email': 'E-mail domaćina',
}

const label = (key: string) => fieldLabels[key] ?? key

/**
 * The e-mail body is a human-readable Croatian change summary.
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
        lines.push(`      ${label(key)}: ${value}`),
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
    propertyChanges.forEach(([path, value]) => lines.push(`  – ${label(path)}: ${value}`))
    lines.push('')
  }

  const photoEntries = Object.entries(payload.photos)
  if (photoEntries.length) {
    lines.push(`FOTOGRAFIJE (${photoEntries.length}):`)
    photoEntries.forEach(([id, url]) => lines.push(`  – ${name(id)}: ${url}`))
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
