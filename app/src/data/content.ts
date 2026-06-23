import type { Localized } from '../i18n/types'
import type { IconName } from '../components/Icon'
import { mila } from './properties/mila'
import { apartmaniHosnjak } from './properties/apartmanihosnjak'
import { adria } from './properties/adria'
import { krk } from './islands/krk'
import { crikvenica } from './islands/crikvenica'

/* ============================================================================
 *  📖  GUEST GUIDE — TYPES & REGISTRIES
 * ----------------------------------------------------------------------------
 *  This app is MULTI-TENANT and content lives at TWO levels:
 *
 *    ISLAND   — the shared "what's around you": restaurants, beaches,
 *               activities, shops, useful contacts, ferry links. Every
 *               property on the same island reuses ONE island file.
 *
 *    PROPERTY — one apartment building: its host, wifi/check-in, apartments
 *               and prices. A property points at an island by id and inherits
 *               all of that island's amenities.
 *
 *  Guests open a property by the first segment of the URL path:
 *
 *      https://your-domain.com/mila          → the "mila" property guide
 *      https://your-domain.com/mila#beaches  → its Beaches section
 *
 *  The guide a guest sees = the property's own info MERGED with its island's
 *  amenities (see `resolveProperty` below). Views read the merged result, so
 *  they don't care about the split.
 *
 *  Apartments in the SAME building share one URL — print the same QR for each.
 *  A different building gets a different slug and its own QR.
 *
 *  • To add a building on an existing island: create
 *    src/data/properties/<slug>.ts (copy mila.ts), set its `island`, edit
 *    ONLY that file, then register it in `properties` below.
 *  • To add a new island: create src/data/islands/<id>.ts (copy krk.ts),
 *    then register it in `islands` below.
 *  • This file holds the shared TYPES — no per-owner content lives here.
 * ========================================================================== */

/* ---------- Per-card / per-row types ---------- */

export type SeasonKey = 'mayJune' | 'julyAugust' | 'september'

export interface PriceRow {
  season: SeasonKey
  pricePerNight: number // in EUR
}

export interface Apartment {
  id: string
  name: string
  capacity: number
  bedrooms: number
  /** Amenity keys — see amenity.* in src/i18n/ui.ts. Add your own freely. */
  amenities: string[]
  description: Localized
  prices: PriceRow[]
  cleaningFee: number // in EUR
  /** Photo URL (e.g. "/properties/<slug>/apartment-a.png" from the public folder). */
  image?: string
  /** Tailwind gradient classes for the placeholder shown when there's no image. */
  gradient: string
}

export interface PlaceCard {
  id: string
  /** Business name. Use a plain string for proper brand names; use a Localized
   *  object when the name is a generic word that should translate (e.g. a
   *  bakery/butcher with no real brand). */
  name: string | Localized
  /** Category key — see cat.* in src/i18n/ui.ts. */
  category: string
  description: Localized
  phone?: string
  whatsapp?: string
  /** Google Maps query or full URL. */
  maps?: string
  /** External website / booking link. */
  website?: string
  /** Tag keys — see tag.* in src/i18n/ui.ts. */
  tags?: string[]
  /** Free-text price, kept as Localized so units/notes can be localized. */
  price?: Localized
  /** Business logo URL (e.g. "/islands/<id>/logos/<card>.png" from the public folder). Shown in the card's chip; falls back to the section icon when absent. */
  image?: string
  /** Optional icon override for the chip when there's no logo image (e.g. a cocktail glass for bars, an ice-cream cone for slastičarne). Defaults to the section icon. */
  icon?: IconName
  /** @deprecated No longer rendered on place cards (kept for data compatibility). */
  gradient: string
}

export interface Contact {
  id: string
  /** UI key for the label — see contacts.* in src/i18n/ui.ts. */
  labelKey: string
  /** Override the label with free text instead of a translation key. */
  label?: string
  phone?: string
  whatsapp?: string
  maps?: string
  website?: string
  email?: string
  /** Icon name — see IconName in src/components/Icon.tsx. */
  icon: IconName
}

/* ---------- Property-level types ---------- */

export interface PropertyMeta {
  name: string
  /** Short, friendly welcome line shown on the home screen, under "Welcome!". */
  tagline: Localized
  /** Optional intro paragraph in the welcome box. Omit to use the shared
   *  `home.intro` string (currently Njivice-worded), so existing guides are
   *  unchanged. Set it for properties in another town (e.g. "...u Crikvenici"). */
  intro?: Localized
}

export interface Host {
  name: string
  phone: string
  /** WhatsApp: digits only with country code, no "+", e.g. "385911234567". */
  whatsapp: string
  email: string
  /** Optional instruction shown on the "Contact host" card (e.g. "mention your apartment number"). */
  note?: Localized
}

export interface ApartmentInfo {
  wifi: { network: string; password: string }
  /** Check-in time. Omit to hide the check-in card. */
  checkIn?: string
  /** Check-out time. Omit to hide the check-out card. */
  checkOut?: string
  /** Parking info. Omit to hide the parking card. */
  parking?: Localized
  trash: Localized
  ac: Localized
  /** Quiet hours info. Omit to hide the quiet-hours card. */
  quietHours?: Localized
  /** Extra free-form house rules, one bullet each. */
  houseRules: Localized[]
}

/**
 * A review channel shown in the gentle "leave a review" reminder on the home
 * screen — e.g. Booking, Airbnb or a Google review link.
 */
export interface ReviewLink {
  id: string
  /** Channel name shown on the button, e.g. "Booking.com", "Airbnb", "Google". */
  label: string
  url: string
}

/**
 * One "how to get here / get around" link shown in the Arrival section —
 * e.g. an airport page, a bus timetable or a ferry schedule.
 */
export interface ArrivalLink {
  id: string
  /** UI key for the label — see ferry.* in src/i18n/ui.ts. Used when `label` is absent. */
  labelKey?: string
  /** Free-text label for the active language, used instead of `labelKey` when set. */
  label?: Localized
  url: string
  /** Icon name — see IconName in src/components/Icon.tsx. Defaults to "ferry". */
  icon?: IconName
}

/**
 * Per-location text for the Arrival section. Optional — when a location omits it,
 * the section falls back to the shared `ferry.*` UI strings (currently Krk-worded),
 * so existing island files keep rendering exactly as before. Provide this for any
 * new location so guests don't see another town's arrival text.
 */
export interface ArrivalInfo {
  /** Subtitle under the "Arrival & Getting Around" header. */
  subtitle: Localized
  /** Intro paragraph: how to reach this location and get around. */
  description: Localized
  /** Optional highlighted tip shown at the bottom (e.g. nearest airport, toll note). */
  note?: Localized
}

/* ---------- Island-level type ---------- */

/**
 * The shared "what's around you" for one island. Reused by every property on
 * that island. Add a new island by creating src/data/islands/<id>.ts and
 * registering it in `islands` below.
 */
export interface IslandContent {
  /** Display name, e.g. "Krk". */
  name: string
  restaurants: PlaceCard[]
  beaches: PlaceCard[]
  activities: PlaceCard[]
  shops: PlaceCard[]
  contacts: Contact[]
  arrivalLinks: ArrivalLink[]
  /** Optional per-location Arrival text. Omit to use the shared `ferry.*` strings. */
  arrival?: ArrivalInfo
}

/* ---------- Property-level type ---------- */

/**
 * One apartment building. Holds only what's unique to it; everything about the
 * surrounding island comes from the island it points at via `island`.
 */
export interface Property {
  /** Id of the island this building sits on — a key in `islands` below. */
  island: string
  property: PropertyMeta
  host: Host
  apartmentInfo: ApartmentInfo
  apartments: Apartment[]
  /** Optional review links — when set, a gentle review reminder shows on Home. */
  reviews?: ReviewLink[]
  /** When true, the header shows the "Demo" tag + "request your own guide" CTA.
   *  Leave unset/false for real customers so their guests never see the promo. */
  demo?: boolean
}

/**
 * The fully-resolved guide a guest sees: a property merged with its island's
 * amenities. This is what the views consume (via `useProperty()`).
 */
export interface PropertyContent {
  property: PropertyMeta
  host: Host
  apartmentInfo: ApartmentInfo
  apartments: Apartment[]
  reviews?: ReviewLink[]
  demo?: boolean
  restaurants: PlaceCard[]
  beaches: PlaceCard[]
  activities: PlaceCard[]
  shops: PlaceCard[]
  contacts: Contact[]
  arrivalLinks: ArrivalLink[]
  arrival?: ArrivalInfo
}

/* ---------- Registries ---------- */

/**
 * Every island the app knows about. The key is the id properties reference
 * via their `island` field.
 */
export const islands: Record<string, IslandContent> = {
  krk,
  crikvenica,
}

/**
 * Every property the app can serve. The slug (the key) is the first segment
 * of the URL path. Add a new property by importing its file and adding it here.
 */
export const properties: Record<string, Property> = {
  mila,
  apartmanihosnjak: apartmaniHosnjak,
  adria,
}

/** Used at the bare root path (no slug) — handy during local development. */
export const DEFAULT_PROPERTY_SLUG = 'mila'

/** Resolve a property slug from a URL pathname (e.g. "/mila" → "mila"). */
export function slugFromPath(pathname: string): string {
  return pathname.split('/').filter(Boolean)[0]?.toLowerCase() ?? ''
}

/**
 * Look up a property by slug and merge it with its island's amenities into the
 * guide the views render. Returns undefined for an unknown slug; throws if a
 * property points at an island that isn't registered (a content bug).
 */
export function resolveProperty(slug: string): PropertyContent | undefined {
  const property = properties[slug]
  if (!property) return undefined

  const island = islands[property.island]
  if (!island) {
    throw new Error(
      `Property "${slug}" references unknown island "${property.island}". ` +
        `Register it in src/data/content.ts.`,
    )
  }

  return {
    property: property.property,
    host: property.host,
    apartmentInfo: property.apartmentInfo,
    apartments: property.apartments,
    reviews: property.reviews,
    demo: property.demo,
    restaurants: island.restaurants,
    beaches: island.beaches,
    activities: island.activities,
    shops: island.shops,
    contacts: island.contacts,
    arrivalLinks: island.arrivalLinks,
    arrival: island.arrival,
  }
}
