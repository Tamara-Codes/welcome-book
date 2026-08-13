import type { Contact, IslandContent, PlaceCard, Property, PropertyExtras } from '../data/content'
import { tx, type Lang, type Localized } from '../i18n/types'
import { baseUI, ui, type UIKey } from '../i18n/ui'
import type { EditField, RowItem, SectionKey } from './types'

/* ============================================================================
 *  Flattening island content into checkbox rows.
 *  Every section renders through the same RowItem shape, so the UI needs one
 *  row component instead of one per section.
 * ========================================================================== */

/** Resolve a UI key in the owner's language, falling back to English. */
function uiText(key: string, lang: Lang): string {
  return ui[lang]?.[key as UIKey] ?? baseUI[key as UIKey] ?? key
}

/** A card `name` is a plain string for real brands, Localized for generic words. */
function nameText(name: string | Localized, lang: Lang): string {
  return typeof name === 'string' ? name : tx(name, lang)
}

/** Drop fields with no current value — an empty box invites noise. */
function present(fields: (EditField | null)[]): EditField[] {
  return fields.filter((f): f is EditField => f !== null && f.value.trim() !== '')
}

function placeRow(card: PlaceCard, lang: Lang): RowItem {
  return {
    id: card.id,
    title: nameText(card.name, lang),
    subtitle: tx(card.description, lang),
    fields: present([
      { key: 'name', label: 'Naziv', value: nameText(card.name, lang) },
      {
        key: 'description',
        label: 'Opis',
        value: tx(card.description, lang),
        multiline: true,
        translated: true,
      },
      { key: 'phone', label: 'Telefon', value: card.phone ?? '' },
      { key: 'website', label: 'Web stranica', value: card.website ?? '' },
      card.price
        ? { key: 'price', label: 'Cijena', value: tx(card.price, lang), translated: true }
        : null,
    ]),
  }
}

function contactRow(contact: Contact, lang: Lang): RowItem {
  const label =
    typeof contact.label === 'object'
      ? tx(contact.label, lang)
      : (contact.label ?? uiText(contact.labelKey, lang))

  return {
    id: contact.id,
    title: label,
    subtitle: contact.phone ?? contact.website ?? '',
    fields: present([
      { key: 'label', label: 'Naziv', value: label },
      { key: 'phone', label: 'Telefon', value: contact.phone ?? '' },
      { key: 'email', label: 'E-mail', value: contact.email ?? '' },
      { key: 'website', label: 'Web stranica', value: contact.website ?? '' },
    ]),
  }
}

/**
 * All rows the owner can tick, keyed by section: the island's cards followed by
 * anything they added themselves in an earlier round (flagged `own`, so they
 * can untick or edit their own additions too).
 */
export function islandRows(
  island: IslandContent,
  lang: Lang,
  extra?: PropertyExtras,
): Record<SectionKey, RowItem[]> {
  const own = (row: RowItem): RowItem => ({ ...row, own: true })
  const places = (base: PlaceCard[], added?: PlaceCard[]) => [
    ...base.map((c) => placeRow(c, lang)),
    ...(added ?? []).map((c) => own(placeRow(c, lang))),
  ]

  return {
    restaurants: places(island.restaurants, extra?.restaurants),
    beaches: places(island.beaches, extra?.beaches),
    activities: places(island.activities, extra?.activities),
    shops: places(island.shops, extra?.shops),
    contacts: [
      ...island.contacts.map((c) => contactRow(c, lang)),
      ...(extra?.contacts ?? []).map((c) => own(contactRow(c, lang))),
    ],
  }
}

/**
 * Turn a property's stored `override` back into display strings, so a returning
 * owner opens the picker on their CURRENT guide rather than the raw island.
 */
export function seedOverrides(
  property: Property,
  lang: Lang,
): Record<string, Record<string, string>> {
  const seeded: Record<string, Record<string, string>> = {}
  Object.entries(property.override ?? {}).forEach(([id, fields]) => {
    const display: Record<string, string> = {}
    Object.entries(fields).forEach(([key, value]) => {
      if (typeof value === 'string') display[key] = value
      else if (value && typeof value === 'object' && 'en' in value) {
        display[key] = tx(value as Localized, lang)
      }
      // Non-text overrides (tags, gradient, icon…) aren't editable in the picker.
    })
    if (Object.keys(display).length) seeded[id] = display
  })
  return seeded
}

/* ---------- Property-level fields ----------
 *
 *  These already live per-owner in the property file, so they need no override
 *  machinery — the owner edits them directly. `path` is the dotted location in
 *  the property file, which is what the apply step writes to.
 */

export interface PropertyField {
  path: string
  label: string
  value: string
  multiline?: boolean
  translated?: boolean
}

export function propertyFields(property: Property, lang: Lang): PropertyField[] {
  const info = property.apartmentInfo
  const text = (v: Localized | undefined) => (v ? tx(v, lang) : '')

  return [
    { path: 'apartmentInfo.wifi.network', label: 'WiFi mreža', value: info.wifi.network },
    { path: 'apartmentInfo.wifi.password', label: 'WiFi lozinka', value: info.wifi.password },
    { path: 'apartmentInfo.checkIn', label: 'Prijava (check-in)', value: info.checkIn ?? '' },
    { path: 'apartmentInfo.checkOut', label: 'Odjava (check-out)', value: info.checkOut ?? '' },
    { path: 'host.name', label: 'Ime domaćina', value: property.host.name },
    { path: 'host.phone', label: 'Telefon domaćina', value: property.host.phone },
    { path: 'host.email', label: 'E-mail domaćina', value: property.host.email },
    {
      path: 'apartmentInfo.parking',
      label: 'Parking',
      value: text(info.parking),
      multiline: true,
      translated: true,
    },
    {
      path: 'apartmentInfo.trash',
      label: 'Otpad i recikliranje',
      value: text(info.trash),
      multiline: true,
      translated: true,
    },
    {
      path: 'apartmentInfo.ac',
      label: 'Klima uređaj',
      value: text(info.ac),
      multiline: true,
      translated: true,
    },
    {
      path: 'apartmentInfo.quietHours',
      label: 'Noćni mir',
      value: text(info.quietHours),
      multiline: true,
      translated: true,
    },
  ]
}

/** Editable information for one apartment. Paths use the stable apartment id,
 * so a submitted change remains unambiguous even when rooms are reordered. */
export function apartmentFields(property: Property, lang: Lang): PropertyField[] {
  return property.apartments.flatMap((apartment) => {
    const path = `apartments.${apartment.id}`
    const name = typeof apartment.name === 'string' ? apartment.name : tx(apartment.name, lang)
    return [
      { path: `${path}.name`, label: 'Naziv sobe', value: name, translated: true },
      {
        path: `${path}.description`,
        label: 'Opis',
        value: tx(apartment.description, lang),
        multiline: true,
        translated: true,
      },
      { path: `${path}.capacity`, label: 'Broj gostiju', value: apartment.capacity.toString() },
      { path: `${path}.bedrooms`, label: 'Spavaće sobe', value: apartment.bedrooms.toString() },
      { path: `${path}.amenities`, label: 'Sadržaji', value: apartment.amenities.join(', ') },
      { path: `${path}.priceFrom`, label: 'Cijena od (€ / noć)', value: apartment.priceFrom?.toString() ?? '' },
    ]
  })
}

/** The property's existing house rules, resolved for display. */
export function houseRules(property: Property, lang: Lang): string[] {
  return property.apartmentInfo.houseRules.map((rule) => tx(rule, lang))
}
