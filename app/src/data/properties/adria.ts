import type { Localized } from '../../i18n/types'
import type { Property } from '../content'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Adria  (slug: "adria")  —  CRIKVENICA RIVIERA DEMO
 * ----------------------------------------------------------------------------
 *  Public demo objekt for the Crikvenica Riviera. Holds only what's unique to
 *  the building — host, wifi/check-in, apartments and prices. Everything around
 *  it (restaurants, beaches, activities, shops, contacts, arrival) comes from
 *  its location: see `island: 'crikvenica'` and src/data/islands/crikvenica.ts.
 *
 *  Prices are mid-market Crikvenica level (~€60–130/night), not premium.
 *
 *  To turn this into a real customer's guide: copy to a new slug, set
 *  `demo: false` (or remove it), fill in their host/wifi/apartments, and
 *  register it in src/data/content.ts. It inherits the whole riviera for free.
 * ========================================================================== */

export const adria: Property = {
  island: 'crikvenica',

  /* Public demo — shows the "Demo" tag + "request your own guide" CTA. */
  demo: true,

  /* ---------- Property & host ---------- */
  property: {
    name: 'Apartmani Adria',
    tagline: {
      en: 'Your home by the sea in Crikvenica, on the Kvarner coast.',
      hr: 'Vaš dom uz more u Crikvenici, na kvarnerskoj obali.',
      de: 'Ihr Zuhause am Meer in Crikvenica, an der Kvarner-Küste.',
      it: 'La vostra casa sul mare a Crikvenica, sulla costa del Quarnero.',
      sl: 'Vaš dom ob morju v Crikvenici, na kvarnerski obali.',
      pl: 'Wasz dom nad morzem w Crikvenicy, na wybrzeżu Kvarneru.',
      cs: 'Váš domov u moře v Crikvenici, na pobřeží Kvarneru.',
    },
    intro: {
      en: 'We are glad to have you. Everything you need for a relaxed stay in Crikvenica is right here.',
      hr: 'Drago nam je što ste kod nas. Sve što vam treba za opušten boravak u Crikvenici nalazi se ovdje.',
      de: 'Schön, dass Sie da sind. Alles für einen entspannten Aufenthalt in Crikvenica finden Sie hier.',
      it: 'Siamo felici di avervi qui. Tutto ciò che serve per un soggiorno rilassante a Crikvenica è qui.',
      sl: 'Veseli smo, da ste pri nas. Vse za sproščen oddih v Crikvenici je tukaj.',
      pl: 'Cieszymy się, że jesteście. Wszystko, czego potrzebujecie na spokojny pobyt w Crikvenicy, jest tutaj.',
      cs: 'Jsme rádi, že jste u nás. Vše pro klidný pobyt v Crikvenici najdete zde.',
    },
  },

  host: {
    name: 'Ivana Kovačić',
    phone: '+385 91 234 5678',
    whatsapp: '385912345678',
    email: 'info@apartmani-adria.hr',
  },

  /* ---------- Apartment info / house rules ---------- */
  apartmentInfo: {
    wifi: {
      network: 'ApartmaniAdria',
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
        en: 'Please remove wet or sandy shoes before entering.',
        hr: 'Molimo da prije ulaska izujete mokru ili pješčanu obuću.',
        de: 'Bitte ziehen Sie nasse oder sandige Schuhe vor dem Betreten aus.',
      },
      {
        en: 'Pets are welcome on request — please ask the host in advance.',
        hr: 'Kućni ljubimci su dobrodošli uz najavu — molimo da se unaprijed dogovorite s domaćinom.',
        de: 'Haustiere sind auf Anfrage willkommen — bitte fragen Sie vorab beim Gastgeber.',
      },
    ] as Localized[],
  },

  /* ---------- Apartments & prices (mid-market Crikvenica) ---------- */
  apartments: [
    {
      id: 'murva',
      name: 'Murva',
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'terrace', 'kitchen', 'parking', 'tv'],
      description: {
        en: 'A cosy one-bedroom apartment for two with a sunny terrace, a short walk from the seafront promenade — perfect for couples.',
        hr: 'Ugodan jednosobni apartman za dvoje sa sunčanom terasom, na kratkoj šetnji od obalne rive — savršen za parove.',
        de: 'Ein gemütliches Apartment mit einem Schlafzimmer für zwei mit sonniger Terrasse, nur einen kurzen Spaziergang von der Strandpromenade — ideal für Paare.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 60 },
        { season: 'julyAugust', pricePerNight: 95 },
        { season: 'september', pricePerNight: 70 },
      ],
      cleaningFee: 35,
      image: '/properties/mila/apartment-a.png',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'borik',
      name: 'Borik',
      capacity: 4,
      bedrooms: 2,
      amenities: ['wifi', 'ac', 'seaView', 'terrace', 'kitchen', 'parking', 'tv', 'washingMachine'],
      description: {
        en: 'A comfortable two-bedroom apartment for families or small groups, with a sea-view terrace and a fully equipped kitchen.',
        hr: 'Udoban dvosobni apartman za obitelji ili manje grupe, s terasom s pogledom na more i potpuno opremljenom kuhinjom.',
        de: 'Ein komfortables Apartment mit zwei Schlafzimmern für Familien oder kleine Gruppen, mit Terrasse und Meerblick und voll ausgestatteter Küche.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 80 },
        { season: 'julyAugust', pricePerNight: 120 },
        { season: 'september', pricePerNight: 90 },
      ],
      cleaningFee: 45,
      image: '/properties/mila/apartment-b.png',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'galeb',
      name: 'Galeb',
      capacity: 6,
      bedrooms: 3,
      amenities: ['wifi', 'ac', 'seaView', 'balcony', 'kitchen', 'parking', 'tv', 'washingMachine', 'dishwasher'],
      description: {
        en: 'Our largest apartment with three bedrooms and a balcony overlooking the sea — plenty of room for the whole family.',
        hr: 'Naš najveći apartman s tri spavaće sobe i balkonom s pogledom na more — dovoljno prostora za cijelu obitelj.',
        de: 'Unser größtes Apartment mit drei Schlafzimmern und Balkon mit Meerblick — viel Platz für die ganze Familie.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 100 },
        { season: 'julyAugust', pricePerNight: 130 },
        { season: 'september', pricePerNight: 110 },
      ],
      cleaningFee: 55,
      image: '/properties/mila/apartment-c.png',
      gradient: 'from-sea-500 to-sea-700',
    },
  ],

  /* ---------- Review links ---------- */
  reviews: [
    { id: 'booking', label: 'Booking.com', url: 'https://www.booking.com' },
    { id: 'airbnb', label: 'Airbnb', url: 'https://www.airbnb.com' },
    { id: 'google', label: 'Google', url: 'https://www.google.com/maps' },
  ],
}
