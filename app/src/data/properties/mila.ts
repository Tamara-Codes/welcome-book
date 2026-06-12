import type { Localized } from '../../i18n/types'
import type { Property } from '../content'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Mila  (slug: "mila")
 * ----------------------------------------------------------------------------
 *  This is the ONLY file you edit to customise THIS building's guide. It holds
 *  just what's unique to the building — host, wifi/check-in, apartments and
 *  prices. Everything around it (restaurants, beaches, activities, shops,
 *  contacts, arrival) comes from its ISLAND: see the `island` field below and
 *  src/data/islands/krk.ts.
 *
 *  • Phone numbers: full international format, e.g. "+385 91 123 4567".
 *  • WhatsApp: digits only with country code, no "+", e.g. "385911234567".
 *  • Descriptions use { en: "..." } and fall back to English. To translate,
 *    add more keys, e.g. { en: "Sea view", de: "Meerblick" }.
 *
 *  To add ANOTHER building on Krk: copy this file to a new slug
 *  (e.g. galeb.ts), keep `island: 'krk'`, edit it, and register it in
 *  src/data/content.ts — it inherits all of Krk's amenities for free.
 * ========================================================================== */

export const mila: Property = {
  /* The island this building sits on — a key in `islands` (src/data/content.ts).
     Its amenities are merged into this guide automatically. */
  island: 'krk',

  /* ---------- Property & host ---------- */
  property: {
    name: 'Apartmani Mila',
    tagline: {
      en: 'Your home by the Adriatic in Njivice, on the island of Krk.',
      hr: 'Vaš dom uz Jadran u Njivicama, na otoku Krku.',
      de: 'Ihr Zuhause an der Adria in Njivice, auf der Insel Krk.',
      it: 'La vostra casa sull’Adriatico a Njivice, sull’isola di Krk.',
      sl: 'Vaš dom ob Jadranu v Njivicah, na otoku Krk.',
      pl: 'Wasz dom nad Adriatykiem w Njivicach, na wyspie Krk.',
      cs: 'Váš domov u Jaderského moře v Njivicích, na ostrově Krk.',
    },
  },

  host: {
    name: 'Marija Matijević',
    phone: '+385 91 234 5678',
    whatsapp: '385912345678',
    email: 'info@apartmani-mila.hr',
  },

  /* ---------- Apartment info / house rules ---------- */
  apartmentInfo: {
    wifi: {
      network: 'ApartmaniMila',
      password: 'more2026',
    },
    checkIn: '15:00',
    checkOut: '10:00',
    parking: {
      en: 'Free private parking is available in front of the house — one space per apartment. Please do not block the neighbours’ entrances.',
      hr: 'Besplatan privatni parking dostupan je ispred kuće — jedno mjesto po apartmanu. Molimo da ne blokirate ulaze susjedima.',
      de: 'Kostenlose private Parkplätze befinden sich vor dem Haus — ein Platz pro Apartment. Bitte blockieren Sie nicht die Einfahrten der Nachbarn.',
    } as Localized,
    trash: {
      en: 'General waste goes in the grey bins by the road. Please separate paper, plastic and glass into the labelled containers. Collection is early morning.',
      hr: 'Miješani otpad odlaže se u sive kante uz cestu. Molimo odvajajte papir, plastiku i staklo u označene spremnike. Odvoz je rano ujutro.',
      de: 'Restmüll kommt in die grauen Tonnen an der Straße. Bitte trennen Sie Papier, Plastik und Glas in die beschrifteten Behälter. Die Abholung erfolgt am frühen Morgen.',
    } as Localized,
    ac: {
      en: 'Air conditioning is free to use. Please close windows and doors while it runs, and switch it off when you leave the apartment to save energy.',
      hr: 'Klima uređaj možete koristiti besplatno. Molimo zatvorite prozore i vrata dok radi te ga isključite kad izlazite iz apartmana radi uštede energije.',
      de: 'Die Klimaanlage können Sie kostenlos nutzen. Bitte schließen Sie Fenster und Türen während des Betriebs und schalten Sie sie beim Verlassen aus, um Energie zu sparen.',
    } as Localized,
    quietHours: {
      en: 'Please keep noise down between 22:00 and 08:00 out of respect for neighbours and other guests.',
      hr: 'Molimo da između 22:00 i 08:00 budete tihi, iz poštovanja prema susjedima i drugim gostima.',
      de: 'Bitte halten Sie zwischen 22:00 und 08:00 Uhr Ruhe — aus Rücksicht auf Nachbarn und andere Gäste.',
    } as Localized,
    houseRules: [
      {
        en: 'No smoking inside the apartments. You are welcome to smoke on the terrace.',
        hr: 'Pušenje u apartmanima nije dopušteno. Slobodno pušite na terasi.',
        de: 'Rauchen in den Apartments ist nicht gestattet. Auf der Terrasse dürfen Sie gerne rauchen.',
      },
      {
        en: 'Please remove sandy or wet shoes before entering.',
        hr: 'Molimo da prije ulaska izujete pješčanu ili mokru obuću.',
        de: 'Bitte ziehen Sie sandige oder nasse Schuhe vor dem Betreten aus.',
      },
      {
        en: 'Pets are welcome on request — please ask the host in advance.',
        hr: 'Kućni ljubimci su dobrodošli uz najavu — molimo da se unaprijed dogovorite s domaćinom.',
        de: 'Haustiere sind auf Anfrage willkommen — bitte fragen Sie vorab beim Gastgeber.',
      },
    ] as Localized[],
  },

  /* ---------- Apartments & prices ---------- */
  apartments: [
    {
      id: 'lavanda',
      name: 'Lavanda',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'seaView', 'terrace', 'kitchen', 'parking', 'tv'],
      description: {
        en: 'A cosy apartment for two with a sunny terrace and a lovely view over the bay — perfect for couples.',
        hr: 'Ugodan apartman za dvoje sa sunčanom terasom i prekrasnim pogledom na uvalu — savršen za parove.',
        de: 'Ein gemütliches Apartment für zwei mit sonniger Terrasse und schönem Blick über die Bucht — ideal für Paare.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 75 },
        { season: 'julyAugust', pricePerNight: 115 },
        { season: 'september', pricePerNight: 85 },
      ],
      cleaningFee: 40,
      image: '/properties/mila/apartment-a.png',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'maslina',
      name: 'Maslina',
      capacity: 4,
      bedrooms: 2,
      amenities: ['wifi', 'ac', 'terrace', 'kitchen', 'parking', 'tv', 'washingMachine'],
      description: {
        en: 'A comfortable two-bedroom apartment for families or small groups, with a fully equipped kitchen and a shaded terrace.',
        hr: 'Udoban apartman s dvije spavaće sobe za obitelji ili manje grupe, s potpuno opremljenom kuhinjom i natkrivenom terasom.',
        de: 'Ein komfortables Apartment mit zwei Schlafzimmern für Familien oder kleine Gruppen, mit voll ausgestatteter Küche und schattiger Terrasse.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 85 },
        { season: 'julyAugust', pricePerNight: 135 },
        { season: 'september', pricePerNight: 95 },
      ],
      cleaningFee: 45,
      image: '/properties/mila/apartment-b.png',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'more',
      name: 'More',
      capacity: 6,
      bedrooms: 3,
      amenities: ['wifi', 'ac', 'seaView', 'balcony', 'kitchen', 'parking', 'tv', 'washingMachine', 'dishwasher'],
      description: {
        en: 'Our largest apartment with three bedrooms and a balcony overlooking the sea — plenty of space for the whole family.',
        hr: 'Naš najveći apartman s tri spavaće sobe i balkonom s pogledom na more — dovoljno prostora za cijelu obitelj.',
        de: 'Unser größtes Apartment mit drei Schlafzimmern und Balkon mit Meerblick — viel Platz für die ganze Familie.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 105 },
        { season: 'julyAugust', pricePerNight: 165 },
        { season: 'september', pricePerNight: 125 },
      ],
      cleaningFee: 50,
      image: '/properties/mila/apartment-c.png',
      gradient: 'from-sea-500 to-sea-700',
    },
  ],

  /* ---------- Review links ----------
     Shown as a gentle "leave a review" reminder on the home screen. Replace
     these demo URLs with your real Booking / Airbnb / Google review links;
     remove a line to hide that channel, or delete `reviews` entirely to hide
     the reminder. */
  reviews: [
    { id: 'booking', label: 'Booking.com', url: 'https://www.booking.com' },
    { id: 'airbnb', label: 'Airbnb', url: 'https://www.airbnb.com' },
    { id: 'google', label: 'Google', url: 'https://www.google.com/maps' },
  ],
}
