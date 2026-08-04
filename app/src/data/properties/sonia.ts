import type { Localized } from '../../i18n/types'
import type { Property } from '../content'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Sonia  (slug: "sonia-nj4k")
 * ----------------------------------------------------------------------------
 *  Real customer — Sonja, Njivice (Krk), 4 sea-view apartments.
 *
 *  PLACEHOLDER DATA: wifi/check-in/host details and the 4 apartments below
 *  are placeholders. Wifi, check-in/out, host contact and house rules can be
 *  fixed by the owner herself via /pick/sonia-nj4k (the "Smještaj" tab).
 *  Apartment names/prices/photos are NOT editable through the picker — fill
 *  those in here once she sends them over.
 * ========================================================================== */

export const sonia: Property = {
  island: 'krk',

  // Real customer — no demo badge / CTA.
  demo: false,

  // Guide isn't ready yet — keep /sonia-nj4k offline. The picker (/pick/sonia-nj4k)
  // works regardless. Flip to true (or remove) once the guide is ready to go live.
  published: false,

  property: {
    name: 'Apartmani Sonia',
    town: 'Njivice',
    tagline: {
      en: 'Sea-view apartments in Njivice, on the island of Krk.',
      hr: 'Apartmani s pogledom na more u Njivicama, na otoku Krku.',
      de: 'Apartments mit Meerblick in Njivice, auf der Insel Krk.',
      it: 'Appartamenti con vista mare a Njivice, sull’isola di Krk.',
      sl: 'Apartmaji z razgledom na morje v Njivicah, na otoku Krk.',
      pl: 'Apartamenty z widokiem na morze w Njivicach, na wyspie Krk.',
      cs: 'Apartmány s výhledem na moře v Njivicích, na ostrově Krk.',
      hu: 'Tengerre néző apartmanok Njivicében, Krk szigetén.',
      sk: 'Apartmány s výhľadom na more v Njiviciach, na ostrove Krk.',
    },
  },

  host: {
    name: 'Sonja',
    phone: '+385 91 524 3224',
    whatsapp: '385915243224',
    email: 'info@apartmani-sonia.hr',
  },

  apartmentInfo: {
    wifi: {
      network: 'ApartmaniSonia',
      password: 'promijeni-me',
    },
    checkIn: '15:00',
    checkOut: '10:00',
    trash: { en: 'To be confirmed with the host.', hr: 'Provjerite s domaćinom.' },
    ac: { en: 'To be confirmed with the host.', hr: 'Provjerite s domaćinom.' },
    houseRules: [] as Localized[],
  },

  apartments: [
    {
      id: 'apartman-1',
      name: 'Apartman 1',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'seaView', 'tv'],
      description: { en: 'Sea-view apartment.', hr: 'Apartman s pogledom na more.' },
      prices: [
        { season: 'mayJune', pricePerNight: 0 },
        { season: 'julyAugust', pricePerNight: 0 },
        { season: 'september', pricePerNight: 0 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'apartman-2',
      name: 'Apartman 2',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'seaView', 'tv'],
      description: { en: 'Sea-view apartment.', hr: 'Apartman s pogledom na more.' },
      prices: [
        { season: 'mayJune', pricePerNight: 0 },
        { season: 'julyAugust', pricePerNight: 0 },
        { season: 'september', pricePerNight: 0 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'apartman-3',
      name: 'Apartman 3',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'seaView', 'tv'],
      description: { en: 'Sea-view apartment.', hr: 'Apartman s pogledom na more.' },
      prices: [
        { season: 'mayJune', pricePerNight: 0 },
        { season: 'julyAugust', pricePerNight: 0 },
        { season: 'september', pricePerNight: 0 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'apartman-4',
      name: 'Apartman 4',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'seaView', 'tv'],
      description: { en: 'Sea-view apartment.', hr: 'Apartman s pogledom na more.' },
      prices: [
        { season: 'mayJune', pricePerNight: 0 },
        { season: 'julyAugust', pricePerNight: 0 },
        { season: 'september', pricePerNight: 0 },
      ],
      cleaningFee: 0,
      gradient: 'from-sea-600 to-sea-800',
    },
  ],

  reviews: [
    { id: 'booking', label: 'Booking.com', url: 'https://www.booking.com' },
    { id: 'airbnb', label: 'Airbnb', url: 'https://www.airbnb.com' },
    { id: 'google', label: 'Google', url: 'https://www.google.com/maps' },
  ],
}
