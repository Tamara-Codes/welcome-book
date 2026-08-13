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
      de: 'Ihr ruhiger Rückzugsort direkt am Meer in Selce.',
      it: 'Il vostro tranquillo rifugio proprio sul mare a Selce.',
      sl: 'Vaše mirno zatočišče tik ob morju v Selcah.',
      pl: 'Wasza spokojna przystań tuż nad morzem w Selce.',
      cs: 'Vaše klidné útočiště přímo u moře v Selci.',
      hu: 'Nyugodt menedékhelye közvetlenül a tenger mellett, Selcében.',
      sk: 'Vaše pokojné útočisko priamo pri mori v Selciach.',
    },
    intro: {
      en: 'Beach Villa Selce is right on the promenade, just steps from the beach and the sea.',
      hr: 'Beach Villa Selce nalazi se uz samu šetnicu, na nekoliko koraka od plaže i mora.',
      de: 'Die Beach Villa Selce liegt direkt an der Promenade, nur wenige Schritte vom Strand und Meer entfernt.',
      it: 'Beach Villa Selce si trova proprio sul lungomare, a pochi passi dalla spiaggia e dal mare.',
      sl: 'Beach Villa Selce stoji ob sami promenadi, le nekaj korakov od plaže in morja.',
      pl: 'Beach Villa Selce znajduje się tuż przy promenadzie, zaledwie kilka kroków od plaży i morza.',
      cs: 'Beach Villa Selce se nachází přímo u promenády, jen pár kroků od pláže a moře.',
      hu: 'A Beach Villa Selce közvetlenül a sétányon található, csupán néhány lépésre a strandtól és a tengertől.',
      sk: 'Beach Villa Selce sa nachádza priamo pri promenáde, len pár krokov od pláže a mora.',
    },
  },

  host: {
    name: 'Darko',
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
      name: { en: 'Standard double room', hr: 'Standardna dvokrevetna soba', de: 'Standard-Doppelzimmer', it: 'Camera matrimoniale standard', sl: 'Standardna dvoposteljna soba', pl: 'Standardowy pokój dwuosobowy', cs: 'Standardní dvoulůžkový pokoj', hu: 'Standard kétágyas szoba', sk: 'Štandardná dvojlôžková izba' },
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv'],
      description: {
        en: 'A comfortable double room with a double bed or two separate beds, private bathroom and refrigerator.',
        hr: 'Udobna dvokrevetna soba s bračnim krevetom ili dva odvojena kreveta, privatnom kupaonicom i hladnjakom.',
        de: 'Ein komfortables Doppelzimmer mit Doppelbett oder zwei Einzelbetten, eigenem Bad und Kühlschrank.',
        it: 'Una confortevole camera matrimoniale con letto matrimoniale o due letti separati, bagno privato e frigorifero.',
        sl: 'Udobna dvoposteljna soba z zakonsko posteljo ali dvema ločenima posteljama, zasebno kopalnico in hladilnikom.',
        pl: 'Komfortowy pokój dwuosobowy z łóżkiem podwójnym lub dwoma oddzielnymi łóżkami, prywatną łazienką i lodówką.',
        cs: 'Pohodlný dvoulůžkový pokoj s manželskou postelí nebo dvěma oddělenými lůžky, vlastní koupelnou a lednicí.',
        hu: 'Kényelmes kétágyas szoba franciaággyal vagy két külön ággyal, saját fürdőszobával és hűtőszekrénnyel.',
        sk: 'Pohodlná dvojlôžková izba s manželskou posteľou alebo dvoma oddelenými lôžkami, vlastnou kúpeľňou a chladničkou.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 90 },
        { season: 'julyAugust', pricePerNight: 90 },
        { season: 'september', pricePerNight: 90 },
      ],
      priceFrom: 90,
      cleaningFee: 0,
      image: '/properties/beach-villa-selce/standard-double.jpg',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'superior-double-sea-view',
      name: { en: 'Superior double room with sea view', hr: 'Superior dvokrevetna soba s pogledom na more', de: 'Superior-Doppelzimmer mit Meerblick', it: 'Camera matrimoniale superior con vista mare', sl: 'Superior dvoposteljna soba s pogledom na morje', pl: 'Pokój dwuosobowy superior z widokiem na morze', cs: 'Dvoulůžkový pokoj superior s výhledem na moře', hu: 'Superior kétágyas szoba tengerre néző kilátással', sk: 'Superior dvojlôžková izba s výhľadom na more' },
      capacity: 2,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A superior double room with sea view, private bathroom and refrigerator.',
        hr: 'Superior dvokrevetna soba s pogledom na more, privatnom kupaonicom i hladnjakom.',
        de: 'Ein Superior-Doppelzimmer mit Meerblick, eigenem Bad und Kühlschrank.',
        it: 'Una camera matrimoniale superior con vista mare, bagno privato e frigorifero.',
        sl: 'Superior dvoposteljna soba s pogledom na morje, zasebno kopalnico in hladilnikom.',
        pl: 'Pokój dwuosobowy superior z widokiem na morze, prywatną łazienką i lodówką.',
        cs: 'Dvoulůžkový pokoj superior s výhledem na moře, vlastní koupelnou a lednicí.',
        hu: 'Superior kétágyas szoba tengerre néző kilátással, saját fürdőszobával és hűtőszekrénnyel.',
        sk: 'Superior dvojlôžková izba s výhľadom na more, vlastnou kúpeľňou a chladničkou.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 120 },
        { season: 'julyAugust', pricePerNight: 120 },
        { season: 'september', pricePerNight: 120 },
      ],
      priceFrom: 120,
      cleaningFee: 0,
      image: '/properties/beach-villa-selce/superior-double-sea-view.jpg',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'superior-triple',
      name: { en: 'Superior triple room', hr: 'Superior trokrevetna soba', de: 'Superior-Dreibettzimmer', it: 'Camera tripla superior', sl: 'Superior triposteljna soba', pl: 'Pokój trzyosobowy superior', cs: 'Třílůžkový pokoj superior', hu: 'Superior háromágyas szoba', sk: 'Superior trojlôžková izba' },
      capacity: 3,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv'],
      description: {
        en: 'A spacious triple room with a double and single bed, or three separate beds, private bathroom and refrigerator.',
        hr: 'Prostrana trokrevetna soba s bračnim i pojedinačnim krevetom ili tri odvojena kreveta, privatnom kupaonicom i hladnjakom.',
        de: 'Ein geräumiges Dreibettzimmer mit einem Doppel- und einem Einzelbett oder drei Einzelbetten, eigenem Bad und Kühlschrank.',
        it: 'Una spaziosa camera tripla con letto matrimoniale e singolo oppure tre letti separati, bagno privato e frigorifero.',
        sl: 'Prostorna triposteljna soba z zakonsko in enojno posteljo ali tremi ločenimi posteljami, zasebno kopalnico in hladilnikom.',
        pl: 'Przestronny pokój trzyosobowy z łóżkiem podwójnym i pojedynczym lub trzema oddzielnymi łóżkami, prywatną łazienką i lodówką.',
        cs: 'Prostorný třílůžkový pokoj s manželskou a jednolůžkovou postelí nebo třemi oddělenými lůžky, vlastní koupelnou a lednicí.',
        hu: 'Tágas háromágyas szoba franciaággyal és egyszemélyes ággyal vagy három külön ággyal, saját fürdőszobával és hűtőszekrénnyel.',
        sk: 'Priestranná trojlôžková izba s manželskou a samostatnou posteľou alebo troma oddelenými lôžkami, vlastnou kúpeľňou a chladničkou.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 150 },
        { season: 'julyAugust', pricePerNight: 150 },
        { season: 'september', pricePerNight: 150 },
      ],
      priceFrom: 150,
      cleaningFee: 0,
      image: '/properties/beach-villa-selce/superior-triple.jpg',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'superior-triple-sea-view',
      name: { en: 'Superior triple room with sea view', hr: 'Superior trokrevetna soba s pogledom na more', de: 'Superior-Dreibettzimmer mit Meerblick', it: 'Camera tripla superior con vista mare', sl: 'Superior triposteljna soba s pogledom na morje', pl: 'Pokój trzyosobowy superior z widokiem na morze', cs: 'Třílůžkový pokoj superior s výhledem na moře', hu: 'Superior háromágyas szoba tengerre néző kilátással', sk: 'Superior trojlôžková izba s výhľadom na more' },
      capacity: 3,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A superior triple room with sea view, private bathroom and refrigerator.',
        hr: 'Superior trokrevetna soba s pogledom na more, privatnom kupaonicom i hladnjakom.',
        de: 'Ein Superior-Dreibettzimmer mit Meerblick, eigenem Bad und Kühlschrank.',
        it: 'Una camera tripla superior con vista mare, bagno privato e frigorifero.',
        sl: 'Superior triposteljna soba s pogledom na morje, zasebno kopalnico in hladilnikom.',
        pl: 'Pokój trzyosobowy superior z widokiem na morze, prywatną łazienką i lodówką.',
        cs: 'Třílůžkový pokoj superior s výhledem na moře, vlastní koupelnou a lednicí.',
        hu: 'Superior háromágyas szoba tengerre néző kilátással, saját fürdőszobával és hűtőszekrénnyel.',
        sk: 'Superior trojlôžková izba s výhľadom na more, vlastnou kúpeľňou a chladničkou.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 140 },
        { season: 'julyAugust', pricePerNight: 140 },
        { season: 'september', pricePerNight: 140 },
      ],
      priceFrom: 140,
      cleaningFee: 0,
      image: '/properties/beach-villa-selce/superior-triple-sea-view.jpg',
      gradient: 'from-sea-400 to-sea-700',
    },
    {
      id: 'superior-quadruple-sea-view',
      name: { en: 'Superior quadruple room with sea view', hr: 'Superior četverokrevetna soba s pogledom na more', de: 'Superior-Vierbettzimmer mit Meerblick', it: 'Camera quadrupla superior con vista mare', sl: 'Superior štiriposteljna soba s pogledom na morje', pl: 'Pokój czteroosobowy superior z widokiem na morze', cs: 'Čtyřlůžkový pokoj superior s výhledem na moře', hu: 'Superior négyágyas szoba tengerre néző kilátással', sk: 'Superior štvorlôžková izba s výhľadom na more' },
      capacity: 4,
      bedrooms: 1,
      amenities: ['wifi', 'ac', 'tv', 'seaView'],
      description: {
        en: 'A spacious room for families or small groups, with a sea view, private bathroom and refrigerator.',
        hr: 'Prostrana soba za obitelji ili manje grupe, s pogledom na more, privatnom kupaonicom i hladnjakom.',
        de: 'Ein geräumiges Zimmer für Familien oder kleine Gruppen mit Meerblick, eigenem Bad und Kühlschrank.',
        it: 'Una spaziosa camera per famiglie o piccoli gruppi, con vista mare, bagno privato e frigorifero.',
        sl: 'Prostorna soba za družine ali manjše skupine s pogledom na morje, zasebno kopalnico in hladilnikom.',
        pl: 'Przestronny pokój dla rodzin lub małych grup, z widokiem na morze, prywatną łazienką i lodówką.',
        cs: 'Prostorný pokoj pro rodiny nebo malé skupiny s výhledem na moře, vlastní koupelnou a lednicí.',
        hu: 'Tágas szoba családoknak vagy kisebb csoportoknak, tengerre néző kilátással, saját fürdőszobával és hűtőszekrénnyel.',
        sk: 'Priestranná izba pre rodiny alebo menšie skupiny s výhľadom na more, vlastnou kúpeľňou a chladničkou.',
      },
      prices: [
        { season: 'mayJune', pricePerNight: 160 },
        { season: 'julyAugust', pricePerNight: 160 },
        { season: 'september', pricePerNight: 160 },
      ],
      priceFrom: 160,
      cleaningFee: 0,
      image: '/properties/beach-villa-selce/superior-quadruple-sea-view.jpg',
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
