import type { Lang } from '../i18n/types'

/* ============================================================================
 *  ✅  PICKER — TYPES & PAYLOAD CONTRACT
 * ----------------------------------------------------------------------------
 *  The picker (/pick/<slug>) is OWNER-facing: an apartment owner ticks what
 *  they want to keep from the island guide, retypes anything that's wrong, and
 *  adds their own places. The result is emailed as `PicksPayload` JSON, which
 *  is then applied to their property file (exclude / override / extra).
 *
 *  ⚠️  TRANSLATION GATE — the single most important rule here.
 *  The owner types in ONE language (`lang`, in practice Croatian). Guest-facing
 *  text is `Localized` and falls back to ENGLISH only (see tx() in
 *  src/i18n/types.ts), so pasting a Croatian string in as `en` would show
 *  Croatian to every German, Italian and Polish guest. Every field flagged
 *  `translated` must be translated into all LANGUAGES before it reaches a
 *  property file. `needsTranslation` lists those paths explicitly so the step
 *  that applies the payload cannot miss one.
 * ========================================================================== */

/** Island sections the owner can curate. */
export type SectionKey = 'restaurants' | 'beaches' | 'activities' | 'shops' | 'contacts'

/** One field of an existing card the owner can retype. */
export interface EditField {
  /** Field name on PlaceCard / Contact — becomes the override key. */
  key: string
  label: string
  value: string
  multiline?: boolean
  /** True when the underlying field is `Localized` — see the translation gate. */
  translated?: boolean
}

/** One checkbox row: an island card flattened for display + editing. */
export interface RowItem {
  id: string
  title: string
  subtitle: string
  fields: EditField[]
  /** True for a place the owner added themselves in an earlier round — it lives
   *  in their property file's `extra`, not in the island. */
  own?: boolean
}

/** A place the owner adds that isn't in the island guide yet. */
export interface NewPlace {
  name: string
  note: string
  phone: string
  maps: string
  website: string
}

/** Property-level edits: wifi, check-in, parking, house rules… */
export interface PropertyPicks {
  /** Changed property fields only, keyed by the path used in the property file
   *  (e.g. "apartmentInfo.wifi.network", "apartmentInfo.parking"). */
  changed: Record<string, string>
  /** Indices of `apartmentInfo.houseRules` the owner unticked. */
  removedRules: number[]
  /** Extra house rules the owner typed, one per line. */
  newRules: string[]
}

/** What gets emailed. This is the contract the apply step reads. */
export interface PicksPayload {
  slug: string
  island: string
  /** Language the owner typed in. NEVER ship these strings as `en`. */
  lang: Lang
  /** Island card ids to drop → `exclude` in the property file. */
  exclude: string[]
  /** Field-level edits, keyed by card id → `override` in the property file. */
  override: Record<string, Record<string, string>>
  /** New places per section → `extra` in the property file. */
  extra: Partial<Record<SectionKey, NewPlace[]>>
  property: PropertyPicks
  /** Apartment photo URLs uploaded via the picker (Vercel Blob), keyed by
   *  apartment id → `apartments[i].image` in the property file. Only
   *  apartments the owner actually uploaded a photo for. No translation
   *  needed — these are URLs, not guest-facing text. */
  photos: Record<string, string>
  /** Paths whose value is single-language and MUST be translated before use.
   *  Format: "override/<cardId>/<field>" or "property/<path>" or
   *  "extra/<section>/<index>/note" or "property/newRules/<index>". */
  needsTranslation: string[]
  /** Anything the owner wanted to say that the form didn't cover. */
  notes: string
  /** Who filled it in, so a reply can go back to the right person. */
  owner: { name: string; email: string }
}
