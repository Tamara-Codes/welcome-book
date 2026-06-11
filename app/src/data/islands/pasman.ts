import type { IslandContent } from '../content'

/* ============================================================================
 *  🏝️  ISLAND: Pašman  (id: "pasman")
 * ----------------------------------------------------------------------------
 *  Shared amenities for EVERY property on Pašman — restaurants, beaches,
 *  activities, shops, useful contacts and ferry links. Edit this one file and
 *  the change shows up in every building's guide on the island.
 *
 *  • Phone numbers: full international format, e.g. "+385 91 123 4567".
 *  • WhatsApp: digits only with country code, no "+", e.g. "385911234567".
 *  • Map links: paste a Google Maps link, OR a place name — both work.
 *  • Descriptions use { en: "..." } and fall back to English. To translate,
 *    add more keys, e.g. { en: "Great pizza", de: "Tolle Pizza" }.
 *
 *  To add another island: copy this file to a new id (e.g. ugljan.ts), edit
 *  it, and register it in `islands` in src/data/content.ts.
 * ========================================================================== */

export const pasman: IslandContent = {
  name: 'Pašman',

  /* ---------- Restaurants & bars ---------- */
  restaurants: [
    {
      id: 'riva',
      name: 'Riva Restaurant Ždrelac',
      category: 'restaurant',
      description: {
        en: 'Waterfront restaurant in Ždrelac serving fresh fish, grilled meat and local specialities right by the sea.',
        de: 'Restaurant direkt am Wasser in Ždrelac mit frischem Fisch, Grillgerichten und lokalen Spezialitäten am Meer.',
      },
      phone: '+385 23 000 001',
      maps: 'Riva Ždrelac Pašman',
      tags: ['seafood'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'dispet',
      name: 'Dišpet Ždrelac',
      category: 'konoba',
      description: {
        en: 'A friendly konoba with a relaxed terrace — homemade Dalmatian dishes, local wine and a warm welcome.',
        de: 'Eine gemütliche Konoba mit entspannter Terrasse — hausgemachte dalmatinische Gerichte, lokaler Wein und herzlicher Empfang.',
      },
      phone: '+385 23 000 002',
      maps: 'Dišpet Ždrelac',
      tags: ['konoba'],
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'maslina',
      name: 'Pizzeria Maslina Ždrelac',
      category: 'pizzeria',
      description: {
        en: 'Wood-fired pizza and pasta, loved by families. Great for a casual dinner after the beach.',
        de: 'Pizza aus dem Holzofen und Pasta, beliebt bei Familien. Ideal für ein lockeres Abendessen nach dem Strand.',
      },
      phone: '+385 23 000 003',
      maps: 'Pizzeria Maslina Ždrelac',
      tags: ['pizzeria'],
      gradient: 'from-sea-300 to-sand-400',
    },
  ],

  /* ---------- Beaches ---------- */
  beaches: [
    {
      id: 'beach-zdrelac',
      name: 'Ždrelac Bay',
      category: 'barCafe',
      description: {
        en: 'A shallow, calm bay near the bridge — ideal for small children, with a beach bar close by.',
        de: 'Eine flache, ruhige Bucht nahe der Brücke — ideal für kleine Kinder, mit einer Strandbar in der Nähe.',
      },
      maps: 'Ždrelac beach Pašman',
      tags: ['familyFriendly', 'parkingNearby', 'beachBar'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'beach-mali-pasman',
      name: 'Mali Pašman Cove',
      category: 'barCafe',
      description: {
        en: 'A quiet pebble cove with crystal-clear water and natural pine shade — bring water shoes.',
        de: 'Eine ruhige Kieselbucht mit kristallklarem Wasser und natürlichem Pinienschatten — Badeschuhe empfohlen.',
      },
      maps: 'Pašman beach',
      tags: ['quiet', 'pebble', 'crystalWater', 'shade'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'beach-preko',
      name: 'Preko / Galovac (Ugljan)',
      category: 'barCafe',
      description: {
        en: 'Popular sandy-pebble beach in Preko on Ugljan, looking out to the tiny islet of Galovac. Great for sunset.',
        de: 'Beliebter Sand-Kies-Strand in Preko auf Ugljan mit Blick auf die kleine Insel Galovac. Schön bei Sonnenuntergang.',
      },
      maps: 'Preko beach Ugljan',
      tags: ['familyFriendly', 'sandy', 'goodForSunset'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'beach-kukljica',
      name: 'Kukljica (Ugljan)',
      category: 'barCafe',
      description: {
        en: 'Pine-fringed pebble beaches around Kukljica with shade and clear water — a local favourite for a full beach day.',
        de: 'Von Pinien gesäumte Kieselstrände rund um Kukljica mit Schatten und klarem Wasser — beliebt für einen ganzen Strandtag.',
      },
      maps: 'Kukljica beach Ugljan',
      tags: ['pebble', 'shade', 'crystalWater', 'snorkeling'],
      gradient: 'from-sea-500 to-sea-700',
    },
  ],

  /* ---------- Activities & rentals ---------- */
  activities: [
    {
      id: 'bike',
      name: 'Bike rental',
      category: 'bikeRental',
      description: {
        en: 'Explore the island roads and olive groves on two wheels. Helmets and child seats available.',
        de: 'Erkunden Sie die Inselstraßen und Olivenhaine auf zwei Rädern. Helme und Kindersitze verfügbar.',
      },
      price: { en: 'from €10 / day' },
      phone: '+385 91 000 0010',
      maps: 'bike rental Pašman',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'ebike',
      name: 'E-bike rental',
      category: 'bikeRental',
      description: {
        en: 'Electric bikes make the hills easy — reach quiet coves and viewpoints without breaking a sweat.',
        de: 'Mit E-Bikes werden die Hügel zum Kinderspiel — erreichen Sie ruhige Buchten und Aussichtspunkte ganz entspannt.',
      },
      price: { en: 'from €25 / day' },
      phone: '+385 91 000 0010',
      maps: 'e-bike rental Ugljan',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'scooter',
      name: 'Scooter rental',
      category: 'scooterRental',
      description: {
        en: 'A fun, easy way to get around both islands. Valid driving licence required.',
        de: 'Eine unterhaltsame, einfache Art, beide Inseln zu erkunden. Gültiger Führerschein erforderlich.',
      },
      price: { en: 'from €30 / day' },
      phone: '+385 91 000 0011',
      maps: 'scooter rental Pašman',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'sup-kayak',
      name: 'SUP & kayak rental',
      category: 'waterRental',
      description: {
        en: 'Paddle along the calm coastline at your own pace. Stand-up paddleboards and kayaks for all levels.',
        de: 'Paddeln Sie in Ihrem eigenen Tempo entlang der ruhigen Küste. SUP-Boards und Kajaks für alle Niveaus.',
      },
      price: { en: 'SUP from €15 / hour, kayak from €12 / hour' },
      phone: '+385 91 000 0012',
      maps: 'SUP kayak rental Pašman',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'boat',
      name: 'Boat rental',
      category: 'boatRental',
      description: {
        en: 'Rent a small boat (no licence needed for some models) and discover hidden bays at your own pace.',
        de: 'Mieten Sie ein kleines Boot (für einige Modelle ohne Führerschein) und entdecken Sie versteckte Buchten in Ihrem Tempo.',
      },
      price: { en: 'from €70 / day + fuel' },
      phone: '+385 91 000 0013',
      maps: 'boat rental Pašman',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'kornati',
      name: 'Boat trips & Kornati excursions',
      category: 'excursion',
      description: {
        en: 'Full-day excursions to the Kornati National Park and nearby islands, often including lunch and swimming stops.',
        de: 'Ganztagesausflüge in den Nationalpark Kornati und zu nahen Inseln, oft inklusive Mittagessen und Badestopps.',
      },
      price: { en: 'from €55 / person' },
      phone: '+385 91 000 0014',
      maps: 'Kornati excursion Zadar',
      gradient: 'from-sea-400 to-sand-400',
    },
    {
      id: 'jetski',
      name: 'Jet ski & water sports',
      category: 'waterRental',
      description: {
        en: 'Jet skis, towables and other water sports available at nearby beaches during the summer season.',
        de: 'Jetskis, Reifenfahren und weitere Wassersportarten an nahegelegenen Stränden in der Sommersaison.',
      },
      price: { en: 'ask on site' },
      phone: '+385 91 000 0015',
      maps: 'water sports Zadar',
      gradient: 'from-sea-300 to-sea-600',
    },
  ],

  /* ---------- Shops & groceries ----------
   *  Pašman has a grocery shop in nearly every village. Listed roughly from
   *  Ždrelac (our end of the island) south-east towards Tkon. Map pins for the
   *  smaller village shops use coordinates, as they aren't searchable by name. */
  shops: [
    {
      id: 'studenac-zdrelac',
      name: 'Studenac Ždrelac',
      category: 'supermarket',
      description: {
        en: 'The local Studenac supermarket in Ždrelac — fresh bread, groceries, drinks and everyday essentials within walking distance.',
        de: 'Der örtliche Studenac-Supermarkt in Ždrelac — frisches Brot, Lebensmittel, Getränke und alles für den täglichen Bedarf, fußläufig erreichbar.',
        it: 'Il supermercato Studenac di Ždrelac — pane fresco, alimentari, bevande e prodotti di tutti i giorni a pochi passi.',
        sl: 'Lokalni supermarket Studenac v Ždrelcu — svež kruh, živila, pijača in vsakdanje potrebščine peš oddaljeni.',
        pl: 'Lokalny supermarket Studenac w Ždrelacu — świeże pieczywo, artykuły spożywcze, napoje i codzienne potrzeby w zasięgu spaceru.',
        cs: 'Místní supermarket Studenac ve Ždrelaci — čerstvé pečivo, potraviny, nápoje a věci denní potřeby v dosahu pěšky.',
      },
      maps: 'Studenac Ždrelac',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'lito-zdrelac',
      name: 'Lito Ždrelac',
      category: 'grocery',
      description: {
        en: 'A small local grocery shop in Ždrelac, handy for everyday items, fresh produce and a quick top-up close to the apartments.',
        de: 'Ein kleines örtliches Lebensmittelgeschäft in Ždrelac, praktisch für den täglichen Bedarf, frische Produkte und schnelle Einkäufe in der Nähe der Apartments.',
        it: 'Un piccolo negozio di alimentari a Ždrelac, comodo per la spesa quotidiana, prodotti freschi e un rapido rifornimento vicino agli appartamenti.',
        sl: 'Manjša lokalna trgovina z živili v Ždrelcu, priročna za vsakdanje nakupe, svežo zelenjavo in hiter nakup blizu apartmajev.',
        pl: 'Mały lokalny sklep spożywczy w Ždrelacu, wygodny na codzienne zakupy, świeże produkty i szybkie uzupełnienie zapasów blisko apartamentów.',
        cs: 'Malý místní obchod s potravinami ve Ždrelaci, praktický pro každodenní nákupy, čerstvé produkty a rychlé doplnění zásob blízko apartmánů.',
      },
      maps: 'Lito Ždrelac',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'bure-banj',
      name: 'Bure market — Banj',
      category: 'grocery',
      description: {
        en: 'Village mini-market in Banj, the next bay along from Ždrelac — bread, basics and cold drinks for the beach.',
        de: 'Dorf-Minimarkt in Banj, der nächsten Bucht von Ždrelac — Brot, Grundnahrungsmittel und kühle Getränke für den Strand.',
      },
      maps: '44.0013,15.2967',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'shop-dobropoljana',
      name: 'Grocery shop — Dobropoljana',
      category: 'grocery',
      description: {
        en: 'A small grocery in the centre of Dobropoljana for everyday shopping if you are exploring that side of the island.',
        de: 'Ein kleiner Lebensmittelladen im Zentrum von Dobropoljana für den täglichen Einkauf, wenn Sie diese Seite der Insel erkunden.',
      },
      maps: '43.9921,15.3252',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'll-market-nevidane',
      name: 'L&L Market — Neviđane',
      category: 'supermarket',
      description: {
        en: 'Well-stocked supermarket in Neviđane, open daily through the season — a good stop for a bigger shop. Typically open Mon–Sat 7:00–21:00.',
        de: 'Gut sortierter Supermarkt in Neviđane, in der Saison täglich geöffnet — ideal für den Großeinkauf. Üblicherweise Mo–Sa 7:00–21:00 geöffnet.',
      },
      maps: 'L&L Market Neviđane Pašman',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'shop-mrljane',
      name: 'Mini-market — Mrljane',
      category: 'grocery',
      description: {
        en: 'Small village shop serving Mrljane and Cimera with daily essentials, bread and drinks.',
        de: 'Kleiner Dorfladen für Mrljane und Cimera mit Dingen des täglichen Bedarfs, Brot und Getränken.',
      },
      maps: '43.9677,15.3541',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'plodine-mali-pasman',
      name: 'Plodine — Mali Pašman',
      category: 'supermarket',
      description: {
        en: 'Larger supermarket on the main island road at Mali Pašman / Barotul — the best choice for a full weekly shop.',
        de: 'Größerer Supermarkt an der Inselhauptstraße bei Mali Pašman / Barotul — die beste Wahl für den großen Wocheneinkauf.',
      },
      maps: 'Plodine Mali Pašman',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'studenac-pasman',
      name: 'Studenac — Pašman',
      category: 'supermarket',
      description: {
        en: 'Studenac in Pašman village, the island’s central settlement — handy when visiting the harbour, restaurants or the health centre.',
        de: 'Studenac im Dorf Pašman, dem zentralen Ort der Insel — praktisch beim Besuch von Hafen, Restaurants oder Gesundheitsstation.',
      },
      maps: 'Studenac Pašman',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'studenac-tkon',
      name: 'Studenac — Tkon',
      category: 'supermarket',
      description: {
        en: 'Tkon, by the Biograd ferry, has the most shops on the island — a Studenac, a Bure market and the Pekarna “Hajduk” bakery, all close together.',
        de: 'Tkon, an der Fähre nach Biograd, hat die meisten Geschäfte der Insel — einen Studenac, einen Bure-Markt und die Bäckerei Pekarna „Hajduk“, alle nah beieinander.',
      },
      maps: 'Studenac Tkon',
      gradient: 'from-sea-400 to-sea-600',
    },
  ],

  /* ---------- Useful contacts ---------- */
  contacts: [
    { id: 'emergency', labelKey: 'contacts.emergency', phone: '112', icon: 'alert' },
    { id: 'ambulance', labelKey: 'contacts.ambulance', phone: '194', icon: 'ambulance' },
    {
      id: 'pharmacy-tkon',
      labelKey: 'contacts.pharmacyTkon',
      phone: '+385 23 000 100',
      maps: 'pharmacy Tkon',
      icon: 'pill',
    },
    {
      id: 'pharmacy-preko',
      labelKey: 'contacts.pharmacyPreko',
      phone: '+385 23 000 101',
      maps: 'pharmacy Preko Ugljan',
      icon: 'pill',
    },
    {
      id: 'ferry-biograd-tkon',
      labelKey: 'contacts.ferryBiogradTkon',
      website: 'https://www.jadrolinija.hr/en/ferry-croatia/local-lines/timetable',
      icon: 'ferry',
    },
    {
      id: 'ferry-zadar-preko',
      labelKey: 'contacts.ferryZadarPreko',
      website: 'https://www.jadrolinija.hr/en/ferry-croatia/local-lines/timetable',
      icon: 'ferry',
    },
    {
      id: 'taxi',
      labelKey: 'contacts.taxi',
      phone: '+385 91 000 0020',
      whatsapp: '385910000020',
      icon: 'taxi',
    },
  ],

  /* ---------- Ferry & arrival links ---------- */
  ferryLinks: {
    biogradTkon: 'https://www.jadrolinija.hr/en/ferry-croatia/local-lines/timetable',
    zadarPreko: 'https://www.jadrolinija.hr/en/ferry-croatia/local-lines/timetable',
  },
}
