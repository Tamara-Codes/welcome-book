import type { Localized } from '../../i18n/types'
import type { Property } from '../content'
import { apartmaniHosnjak } from './apartmanihosnjak'

/* ============================================================================
 *  PROPERTY: Beach Villa Selce  (slug: "beach-villa-selce")
 * ---------------------------------------------------------------------------
 *  Public details verified from beachvillaselce.com in August 2026.
 *  Wi-Fi credentials, room photos, operational notes and seasonal prices can
 *  still be refined through the owner picker.
 * ========================================================================== */

const toConfirm: Localized = {
  en: 'Please confirm the details with the host.',
  hr: 'Molimo potvrdite detalje s domaćinom.',
}

// The rules are intentionally aligned with Apartmani Hošnjak.  The one
// property-specific reference is renamed for this guide.
const beachVillaHouseRules: Localized[] = apartmaniHosnjak.apartmentInfo.houseRules.map(
  (rule) =>
    Object.fromEntries(
      Object.entries(rule).map(([language, text]) => [
        language,
        text
          .replace(/Apartments Hošnjak/g, 'Beach Villa Selce')
          .replace(/Apartmana Hošnjak/g, 'Beach Villa Selce')
          .replace(/Apartmani Hošnjak/g, 'Beach Villa Selce'),
      ]),
    ) as Localized,
)

// The inventory/removal charge and outside-visitor restriction are not rules
// for this property.
const beachVillaHouseRulesForSelce = beachVillaHouseRules.filter(
  (_, index) => index !== 2 && index !== 3,
)

export const beachVillaSelce: Property = {
  island: 'selce',
  demo: false,
  published: true,
  hostFirst: true,

  property: {
    name: 'Beach Villa Selce',
    town: 'Selce',
    tagline: {
      en: 'Your peaceful retreat right by the sea in Selce.',
      hr: 'Vaše mirno utočište uz more u Selcu.',
    },
    intro: {
      en: 'Beach Villa Selce is right on the promenade, just steps from the beach and the sea.',
      hr: 'Beach Villa Selce nalazi se uz samu šetnicu, na nekoliko koraka od plaže i mora.',
    },
  },

  host: {
    name: 'Beach Villa Selce',
    phone: '+385 99 303 3828',
    whatsapp: '385993033828',
    email: 'beachvillaselce@gmail.com',
  },

  apartmentInfo: {
    wifi: { network: '', password: '' },
    checkIn: '15:00',
    checkOut: '10:00',
    parking: {
      en: 'Private parking is available on the property.',
      hr: 'Privatni parking dostupan je u sklopu objekta.',
    },
    trash: toConfirm,
    ac: apartmaniHosnjak.apartmentInfo.ac,
    houseRules: beachVillaHouseRulesForSelce,
  },

  apartments: [
    {
      id: 'standard-double',
      name: 'Standard double room',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv'],
      description: {
        en: 'A comfortable double room with a double bed or two separate beds, private bathroom and refrigerator.',
        hr: 'Udobna dvokrevetna soba s bračnim krevetom ili dva odvojena kreveta, privatnom kupaonicom i hladnjakom.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 90 },
        { season: 'julyAugust', pricePerNight: 90 },
        { season: 'september', pricePerNight: 90 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'superior-double-sea-view',
      name: 'Superior double room with sea view',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A superior double room with sea view, private bathroom and refrigerator.',
        hr: 'Superior dvokrevetna soba s pogledom na more, privatnom kupaonicom i hladnjakom.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 120 },
        { season: 'julyAugust', pricePerNight: 120 },
        { season: 'september', pricePerNight: 120 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'superior-triple',
      name: 'Superior triple room',
      capacity: 3,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv'],
      description: {
        en: 'A spacious triple room with a double and single bed, or three separate beds, private bathroom and refrigerator.',
        hr: 'Prostrana trokrevetna soba s bračnim i pojedinačnim krevetom ili tri odvojena kreveta, privatnom kupaonicom i hladnjakom.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 150 },
        { season: 'julyAugust', pricePerNight: 150 },
        { season: 'september', pricePerNight: 150 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'superior-triple-sea-view',
      name: 'Superior triple room with sea view',
      capacity: 3,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A superior triple room with sea view, private bathroom and refrigerator.',
        hr: 'Superior trokrevetna soba s pogledom na more, privatnom kupaonicom i hladnjakom.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 140 },
        { season: 'julyAugust', pricePerNight: 140 },
        { season: 'september', pricePerNight: 140 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-400 to-sea-700',
    },
    {
      id: 'superior-quadruple-sea-view',
      name: 'Superior quadruple room with sea view',
      capacity: 4,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A spacious room for families or small groups, with a sea view, private bathroom and refrigerator.',
        hr: 'Prostrana soba za obitelji ili manje grupe, s pogledom na more, privatnom kupaonicom i hladnjakom.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 160 },
        { season: 'julyAugust', pricePerNight: 160 },
        { season: 'september', pricePerNight: 160 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-600 to-sea-800',
    },
  ],

  reviews: [
    {
      id: 'booking',
      label: 'Booking.com',
      url: 'https://www.booking.com/hotel/hr/beach-villa-selce.en-gb.html',
    },
  ],
}
