import type { Localized } from '../../i18n/types'
import type { Property } from '../content'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Danica  (slug: "danica")
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you edit to customise THIS building's guide. It holds
 *  just what's unique to the building — host, wifi/check-in, apartments and
 *  prices. Everything around it (restaurants, beaches, activities, shops,
 *  contacts, ferries) comes from its ISLAND: see the `island` field below and
 *  src/data/islands/pasman.ts.
 *
 *  • Phone numbers: full international format, e.g. "+385 91 123 4567".
 *  • WhatsApp: digits only with country code, no "+", e.g. "385911234567".
 *  • Descriptions use { en: "..." } and fall back to English. To translate,
 *    add more keys, e.g. { en: "Sea view", de: "Meerblick" }.
 *
 *  To add ANOTHER building on Pašman: copy this file to a new slug
 *  (e.g. galeb.ts), keep `island: 'pasman'`, edit it, and register it in
 *  src/data/content.ts — it inherits all of Pašman's amenities for free.
 * ========================================================================== */

export const danica: Property = {
  /* The island this building sits on — a key in `islands` (src/data/content.ts).
     Its amenities are merged into this guide automatically. */
  island: 'pasman',

  /* ---------- Property & host ---------- */
  property: {
    name: 'Apartmani Danica',
    tagline: {
      en: 'Your home by the Adriatic in Ždrelac, on the island of Pašman.',
      de: 'Ihr Zuhause an der Adria in Ždrelac, auf der Insel Pašman.',
      it: 'La vostra casa sull’Adriatico a Ždrelac, sull’isola di Pašman.',
      sl: 'Vaš dom ob Jadranu v Ždrelcu, na otoku Pašman.',
      pl: 'Wasz dom nad Adriatykiem w Ždrelacu, na wyspie Pašman.',
      cs: 'Váš domov u Jaderského moře ve Ždrelaci, na ostrově Pašman.',
    },
  },

  host: {
    name: 'Family host',
    phone: '+385 91 000 0000', // TODO: replace with the real number
    whatsapp: '385910000000', // TODO: digits only, no "+"
    email: 'host@example.com', // TODO: replace or remove
  },

  /* ---------- Apartment info / house rules ---------- */
  apartmentInfo: {
    wifi: {
      network: 'FamilyApartments-WiFi', // TODO
      password: 'welcome2024', // TODO
    },
    checkIn: '15:00',
    checkOut: '10:00',
    parking: {
      en: 'Free private parking is available in front of the house — one space per apartment. Please do not block the neighbours’ entrances.',
      de: 'Kostenlose private Parkplätze befinden sich vor dem Haus — ein Platz pro Apartment. Bitte blockieren Sie nicht die Einfahrten der Nachbarn.',
    } as Localized,
    trash: {
      en: 'General waste goes in the grey bins by the road. Please separate paper, plastic and glass into the labelled containers. Collection is early morning.',
      de: 'Restmüll kommt in die grauen Tonnen an der Straße. Bitte trennen Sie Papier, Plastik und Glas in die beschrifteten Behälter. Die Abholung erfolgt am frühen Morgen.',
    } as Localized,
    ac: {
      en: 'Air conditioning is free to use. Please close windows and doors while it runs, and switch it off when you leave the apartment to save energy.',
      de: 'Die Klimaanlage können Sie kostenlos nutzen. Bitte schließen Sie Fenster und Türen während des Betriebs und schalten Sie sie beim Verlassen aus, um Energie zu sparen.',
    } as Localized,
    quietHours: {
      en: 'Please keep noise down between 22:00 and 08:00 out of respect for neighbours and other guests.',
      de: 'Bitte halten Sie zwischen 22:00 und 08:00 Uhr Ruhe — aus Rücksicht auf Nachbarn und andere Gäste.',
    } as Localized,
    houseRules: [
      {
        en: 'No smoking inside the apartments. You are welcome to smoke on the terrace.',
        de: 'Rauchen in den Apartments ist nicht gestattet. Auf der Terrasse dürfen Sie gerne rauchen.',
      },
      {
        en: 'Please remove sandy or wet shoes before entering.',
        de: 'Bitte ziehen Sie sandige oder nasse Schuhe vor dem Betreten aus.',
      },
      {
        en: 'Pets are welcome on request — please ask the host in advance.',
        de: 'Haustiere sind auf Anfrage willkommen — bitte fragen Sie vorab beim Gastgeber.',
      },
    ] as Localized[],
  },

  /* ---------- Apartments & prices ---------- */
  apartments: [
    {
      id: 'a',
      name: 'Apartment A',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'seaView', 'terrace', 'kitchen', 'parking', 'tv'],
      description: {
        en: 'A cosy apartment for two with a sunny terrace and a lovely view over the sea — perfect for couples.',
        de: 'Ein gemütliches Apartment für zwei mit sonniger Terrasse und schönem Meerblick — ideal für Paare.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 70 },
        { season: 'julyAugust', pricePerNight: 110 },
        { season: 'september', pricePerNight: 80 },
      ],
      cleaningFee: 40,
      image: '/properties/danica/apartment-a.png',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'b',
      name: 'Apartment B',
      capacity: 4,
      bedrooms: 2,
      amenities: ['wifi', 'ac', 'terrace', 'kitchen', 'parking', 'tv', 'washingMachine'],
      description: {
        en: 'A comfortable two-bedroom apartment for families or small groups, with a fully equipped kitchen and a shaded terrace.',
        de: 'Ein komfortables Apartment mit zwei Schlafzimmern für Familien oder kleine Gruppen, mit voll ausgestatteter Küche und schattiger Terrasse.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 80 },
        { season: 'julyAugust', pricePerNight: 130 },
        { season: 'september', pricePerNight: 90 },
      ],
      cleaningFee: 45,
      image: '/properties/danica/apartment-b.png',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'c',
      name: 'Apartment C',
      capacity: 6,
      bedrooms: 3,
      amenities: ['wifi', 'ac', 'seaView', 'balcony', 'kitchen', 'parking', 'tv', 'washingMachine', 'dishwasher'],
      description: {
        en: 'Our largest apartment with three bedrooms and a balcony overlooking the bay — plenty of space for the whole family.',
        de: 'Unser größtes Apartment mit drei Schlafzimmern und Balkon mit Blick auf die Bucht — viel Platz für die ganze Familie.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 100 },
        { season: 'julyAugust', pricePerNight: 160 },
        { season: 'september', pricePerNight: 120 },
      ],
      cleaningFee: 50,
      image: '/properties/danica/apartment-c.png',
      gradient: 'from-sea-500 to-sea-700',
    },
  ],
}
