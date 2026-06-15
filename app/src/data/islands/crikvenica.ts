import type { IslandContent } from '../content'

/* ============================================================================
 *  🏖️  LOCATION: Crikvenica Riviera  (id: "crikvenica")
 * ----------------------------------------------------------------------------
 *  Shared amenities for EVERY property on the Crikvenica Riviera — the ~15 km
 *  mainland coastal strip made up of FOUR resorts, north to south:
 *  Jadranovo → Dramalj → Crikvenica (the hub) → Selce. Guests treat it as one
 *  place (a seaside promenade links all four), so this single file covers the
 *  whole riviera, with every entry noted by town.
 *
 *  No ferry: Crikvenica is on the mainland, reached by the Adriatic highway.
 *  Nearest airport is Rijeka Airport (on the island of Krk, ~45 min away).
 *
 *  • Phone numbers: full international format, e.g. "+385 51 765 462".
 *  • WhatsApp: digits only with country code, no "+", e.g. "385911234567".
 *  • Map links: paste a Google Maps link, OR a place name — both work.
 *  • Descriptions use { en: "..." } and fall back to English.
 *
 *  Content checked against public sources (June 2026). Phone numbers are only
 *  included where publicly listed — verify before printing for a real owner.
 * ========================================================================== */

export const crikvenica: IslandContent = {
  name: 'Crikvenica Riviera',

  /* ---------- Restaurants & bars ---------- */
  restaurants: [
    {
      id: 'karoca',
      name: 'Konoba Karoca',
      category: 'restaurant',
      description: {
        en: 'Quaint, heartfelt konoba in Crikvenica listed in the Falstaff guide — oven-baked fish with calamari, potatoes and vegetables, crispy fritto misto and a top-notch braised beef.',
        hr: 'Šarmantna konoba u Crikvenici uvrštena u Falstaff vodič — riba iz pećnice s lignjama, krumpirom i povrćem, hrskavi fritto misto i izvrsna pašticada.',
        de: 'Charmante, herzliche Konoba in Crikvenica, im Falstaff-Guide gelistet — Ofenfisch mit Calamari, Kartoffeln und Gemüse, knuspriges Fritto misto und hervorragendes Schmorfleisch.',
      },
      maps: 'Konoba Karoca Crikvenica',
      tags: ['konoba', 'seafood'],
      price: { en: 'Mid-range', hr: 'Srednje cijene', de: 'Mittleres Preisniveau' },
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'zrinski',
      name: 'Gostionica Zrinski',
      category: 'restaurant',
      description: {
        en: 'Long-standing, highly rated seafood and Mediterranean restaurant in Crikvenica — generous seafood pasta and fresh fish, friendly service.',
        hr: 'Dugogodišnji, visoko ocijenjeni riblji i mediteranski restoran u Crikvenici — izdašna tjestenina s plodovima mora i svježa riba, ljubazna usluga.',
        de: 'Langjähriges, sehr gut bewertetes Fisch- und Mittelmeerrestaurant in Crikvenica — großzügige Meeresfrüchte-Pasta und frischer Fisch, freundlicher Service.',
      },
      maps: 'Gostionica Zrinski Crikvenica',
      tags: ['seafood'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'pandora',
      name: 'Konoba Pandora',
      category: 'restaurant',
      description: {
        en: 'Friendly konoba in Crikvenica known for big portions and a very good price-to-value ratio — a reliable choice for fish and grilled dishes.',
        hr: 'Ljubazna konoba u Crikvenici poznata po velikim porcijama i odličnom omjeru cijene i kvalitete — pouzdan izbor za ribu i jela s roštilja.',
        de: 'Freundliche Konoba in Crikvenica, bekannt für große Portionen und ein sehr gutes Preis-Leistungs-Verhältnis — eine zuverlässige Wahl für Fisch und Grillgerichte.',
      },
      maps: 'Konoba Pandora Crikvenica',
      tags: ['konoba', 'seafood'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'bodulka',
      name: 'Bistro Bodulka',
      category: 'restaurant',
      description: {
        en: 'Relaxed bistro in Crikvenica with tasty risotto and pasta and a welcoming, family-friendly feel.',
        hr: 'Opušteni bistro u Crikvenici s ukusnim rižotima i tjesteninama te ugodnim, obiteljskim ozračjem.',
        de: 'Entspanntes Bistro in Crikvenica mit schmackhaftem Risotto und Pasta und einladender, familienfreundlicher Atmosphäre.',
      },
      maps: 'Bistro Bodulka Crikvenica',
      tags: ['familyFriendly'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'ulika',
      name: 'Konoba Ulika',
      category: 'restaurant',
      description: {
        en: 'Traditional konoba in the heart of Selce serving Kvarner specialities on the waterfront — local, seasonal and homely.',
        hr: 'Tradicionalna konoba u srcu Selca s kvarnerskim specijalitetima uz more — domaće, sezonsko i ugodno.',
        de: 'Traditionelle Konoba im Herzen von Selce mit Kvarner-Spezialitäten an der Uferpromenade — lokal, saisonal und gemütlich.',
      },
      maps: 'Konoba Ulika Selce',
      tags: ['konoba'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'riva-selce',
      name: 'Konoba Riva',
      category: 'restaurant',
      description: {
        en: 'Cosy seafood konoba on the Selce waterfront with lovely sea views — fresh fish and Adriatic classics.',
        hr: 'Ugodna riblja konoba na rivi u Selcu s prekrasnim pogledom na more — svježa riba i jadranski klasici.',
        de: 'Gemütliche Fisch-Konoba an der Uferpromenade von Selce mit schönem Meerblick — frischer Fisch und adriatische Klassiker.',
      },
      maps: 'Konoba Riva Selce',
      tags: ['konoba', 'seafood'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'kantunic',
      name: 'Restaurant Kantunić',
      category: 'restaurant',
      description: {
        en: 'Family-friendly restaurant in Selce with rooftop seating, an extensive menu including vegetarian options, and cocktails.',
        hr: 'Obiteljski restoran u Selcu s krovnom terasom, opsežnim jelovnikom uključujući vegetarijanska jela te koktelima.',
        de: 'Familienfreundliches Restaurant in Selce mit Dachterrasse, umfangreicher Speisekarte inklusive vegetarischer Gerichte und Cocktails.',
      },
      maps: 'Restaurant Kantunić Selce',
      tags: ['familyFriendly'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'feral-jadranovo',
      name: 'Konoba Feral',
      category: 'restaurant',
      description: {
        en: 'Charming coastal konoba in the village of Jadranovo serving regional specialities — a quiet, authentic spot away from the crowds.',
        hr: 'Šarmantna konoba uz more u mjestu Jadranovo s domaćim specijalitetima — mirno, autentično mjesto daleko od gužve.',
        de: 'Charmante Konoba am Meer im Dorf Jadranovo mit regionalen Spezialitäten — ein ruhiger, authentischer Ort abseits des Trubels.',
      },
      maps: 'Konoba Feral Jadranovo',
      tags: ['konoba', 'seafood'],
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'sabbia',
      name: 'Sabbia Beach & Lounge Bar',
      category: 'barCafe',
      icon: 'cocktail',
      description: {
        en: 'Stylish beach and lounge bar on the riviera for cocktails by the sea, sunsets and the occasional live-music night.',
        hr: 'Moderan beach i lounge bar na rivijeri za koktele uz more, zalaske sunca i povremene večeri uživo.',
        de: 'Stilvolle Beach- und Loungebar an der Riviera für Cocktails am Meer, Sonnenuntergänge und gelegentliche Livemusik.',
      },
      maps: 'Sabbia Crikvenica',
      tags: ['beachBar', 'goodForSunset'],
      gradient: 'from-sea-400 to-sea-600',
    },
  ],

  /* ---------- Beaches ---------- */
  beaches: [
    {
      id: 'balustrada',
      name: 'Balustrada Beach',
      category: 'barCafe',
      description: {
        en: 'Crikvenica’s central Blue Flag beach, running from the main square along the seafront — pebbles, sun loungers and parasols for hire, pedal boats and bars within steps.',
        hr: 'Središnja crikvenička plaža s Plavom zastavom, proteže se od glavnog trga uz rivu — šljunak, najam ležaljki i suncobrana, pedaline i barovi na korak.',
        de: 'Crikvenicas zentraler Strand mit Blauer Flagge, vom Hauptplatz entlang der Promenade — Kiesel, Liegen- und Sonnenschirmverleih, Tretboote und Bars in wenigen Schritten.',
      },
      maps: 'Balustrada beach Crikvenica',
      tags: ['pebble', 'blueFlag', 'familyFriendly', 'parkingNearby'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'gradska-plaza',
      name: 'Crikvenica City Beach (sandy)',
      category: 'barCafe',
      description: {
        en: 'A genuinely sandy beach — rare on the Adriatic — with a gentle shallow entry, about 1.5 km from the centre. Ideal for families with small children; showers, shade and beach bars nearby.',
        hr: 'Prava pješčana plaža — rijetkost na Jadranu — s blagim, plitkim ulazom, oko 1,5 km od centra. Idealna za obitelji s malom djecom; tuševi, hlad i beach barovi u blizini.',
        de: 'Ein echter Sandstrand — an der Adria selten — mit flachem Einstieg, etwa 1,5 km vom Zentrum. Ideal für Familien mit kleinen Kindern; Duschen, Schatten und Strandbars in der Nähe.',
      },
      maps: 'Gradska plaža Crikvenica',
      tags: ['sandy', 'familyFriendly', 'shade'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'selce-bay',
      name: 'Selce Beach',
      category: 'barCafe',
      description: {
        en: 'The main beach in the centre of Selce, set in a beautiful clean bay that has held the Blue Flag for years — pebbles, easy entry and a lively promenade behind it.',
        hr: 'Glavna plaža u centru Selca, u prekrasnoj čistoj uvali koja godinama nosi Plavu zastavu — šljunak, lagan ulaz i živahno šetalište iza.',
        de: 'Der Hauptstrand im Zentrum von Selce, in einer schönen, sauberen Bucht, die seit Jahren die Blaue Flagge trägt — Kiesel, einfacher Einstieg und eine lebhafte Promenade dahinter.',
      },
      maps: 'Plaža Selce centar',
      tags: ['pebble', 'blueFlag', 'familyFriendly'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'omorika-dramalj',
      name: 'Omorika Beach (Dramalj)',
      category: 'barCafe',
      description: {
        en: 'Family beach below the Omorika hotel in Dramalj — a mix of pebbles and concrete sunbathing slabs, gentle entry and facilities close by.',
        hr: 'Obiteljska plaža ispod hotela Omorika u Dramlju — mješavina šljunka i betonskih ploča za sunčanje, blag ulaz i sadržaji u blizini.',
        de: 'Familienstrand unterhalb des Hotels Omorika in Dramalj — eine Mischung aus Kiesel und Beton-Sonnenplattformen, flacher Einstieg und Einrichtungen in der Nähe.',
      },
      maps: 'Plaža Omorika Dramalj',
      tags: ['pebble', 'concrete', 'familyFriendly'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'kacjak-dramalj',
      name: 'Kačjak Beach (Dramalj)',
      category: 'barCafe',
      description: {
        en: 'An insider favourite on the wooded Kačjak peninsula near Dramalj — clear water, pine shade right to the shore and a calmer, more natural feel.',
        hr: 'Tajni favorit na pošumljenom poluotoku Kačjak kraj Dramlja — bistro more, borov hlad do same obale i mirniji, prirodniji ugođaj.',
        de: 'Ein Geheimtipp auf der bewaldeten Halbinsel Kačjak bei Dramalj — klares Wasser, Pinienschatten bis ans Ufer und eine ruhigere, naturnahe Atmosphäre.',
      },
      maps: 'Kačjak beach Dramalj',
      tags: ['pebble', 'shade', 'crystalWater', 'quiet'],
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'havisce-jadranovo',
      name: 'Havišće Beach (Jadranovo)',
      category: 'barCafe',
      description: {
        en: 'A quiet, picturesque pebble beach in Jadranovo with clear turquoise water — an insider tip for a peaceful swim away from the busier resorts.',
        hr: 'Mirna, slikovita šljunčana plaža u Jadranovu s bistrim tirkiznim morem — tajni savjet za opušteno kupanje daleko od gužve.',
        de: 'Ein ruhiger, malerischer Kiesstrand in Jadranovo mit klarem, türkisfarbenem Wasser — ein Geheimtipp zum entspannten Baden abseits der belebteren Orte.',
      },
      maps: 'Plaža Havišće Jadranovo',
      tags: ['pebble', 'crystalWater', 'quiet', 'snorkeling'],
      gradient: 'from-sea-400 to-sea-600',
    },
  ],

  /* ---------- Activities & rentals ---------- */
  activities: [
    {
      id: 'watersport-selce',
      name: 'Watersport Center Selce',
      category: 'waterRental',
      description: {
        en: 'Water-sports base in Selce: parasailing, tube and banana rides, plus motorboat rental to explore the riviera by sea.',
        hr: 'Baza za vodene sportove u Selcu: parasailing, vožnja gumama i bananom te najam motornih brodica za istraživanje rivijere s mora.',
        de: 'Wassersport-Station in Selce: Parasailing, Reifen- und Bananenfahrten sowie Motorbootverleih, um die Riviera vom Meer aus zu erkunden.',
      },
      maps: 'Watersport Center Selce',
      gradient: 'from-sea-300 to-sea-600',
    },
    {
      id: 'mihuric-diving',
      name: 'Diving Center Mihurić — Selce',
      category: 'diving',
      description: {
        en: 'Dive centre in Selce (Šetalište Ivana Jeličića, Uvala Slana) running daily diving adventures with boat excursions included — courses and discovery dives for all levels.',
        hr: 'Ronilački centar u Selcu (Šetalište Ivana Jeličića, Uvala Slana) s dnevnim ronjenjima i izletima brodom — tečajevi i probna ronjenja za sve razine.',
        de: 'Tauchzentrum in Selce (Šetalište Ivana Jeličića, Uvala Slana) mit täglichen Tauchausflügen inklusive Bootstouren — Kurse und Schnuppertauchen für alle Niveaus.',
      },
      phone: '+385 51 765 462',
      maps: 'Diving Center Mihurić Selce',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'nb-sailing',
      name: 'NB Sailing — boat charter (Selce)',
      category: 'boatRental',
      description: {
        en: 'Boat charter based in Selce (by the Hotel Katarina pools) — motorboats for day trips and excursions along the Crikvenica Riviera, with or without a skipper.',
        hr: 'Najam plovila sa sjedištem u Selcu (kod bazena hotela Katarina) — motorne brodice za dnevne izlete uz Crikveničku rivijeru, sa skiperom ili bez njega.',
        de: 'Bootscharter in Selce (an den Pools des Hotels Katarina) — Motorboote für Tagesausflüge entlang der Riviera von Crikvenica, mit oder ohne Skipper.',
      },
      phone: '+385 98 9696 569',
      maps: 'NB Sailing Selce',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'promenade-cycling',
      name: 'Seaside promenade — walking & cycling',
      category: 'bikeRental',
      description: {
        en: 'A flat seaside promenade links Jadranovo, Dramalj, Crikvenica and Selce — perfect for a stroll or a bike ride. Bikes and e-bikes can be rented in town, with inland routes into the Vinodol valley for the more adventurous.',
        hr: 'Ravno šetalište uz more povezuje Jadranovo, Dramalj, Crikvenicu i Selce — savršeno za šetnju ili vožnju biciklom. Bicikli i e-bicikli mogu se unajmiti u mjestu, a za avanturiste tu su i rute prema Vinodolskoj dolini.',
        de: 'Eine flache Strandpromenade verbindet Jadranovo, Dramalj, Crikvenica und Selce — ideal zum Spazieren oder Radfahren. Fahrräder und E-Bikes können im Ort gemietet werden, für Abenteuerlustige gibt es Routen ins Vinodol-Tal.',
      },
      maps: 'Šetalište Crikvenica',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'aquarium-crikvenica',
      name: 'Aquarium Crikvenica',
      category: 'excursion',
      description: {
        en: 'A small aquarium near the centre of Crikvenica showcasing Adriatic sea life — an easy, fun stop for families on a cloudy day.',
        hr: 'Mali akvarij blizu centra Crikvenice s prikazom jadranskog podmorja — zgodno i zabavno odredište za obitelji po oblačnom danu.',
        de: 'Ein kleines Aquarium nahe dem Zentrum von Crikvenica mit Einblick in die Unterwasserwelt der Adria — ein netter Familienausflug für bewölkte Tage.',
      },
      maps: 'Aquarium Crikvenica',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'boat-excursions',
      name: 'Crikvenica boat excursions',
      category: 'excursion',
      description: {
        en: 'Daily boat trips leave from the Crikvenica and Selce harbours — panorama cruises, hidden coves and day trips to nearby islands such as Krk.',
        hr: 'Dnevni izleti brodom polaze iz luka Crikvenice i Selca — panoramske vožnje, skrivene uvale i izleti do obližnjih otoka poput Krka.',
        de: 'Tägliche Bootsausflüge ab den Häfen von Crikvenica und Selce — Panoramafahrten, versteckte Buchten und Tagesausflüge zu nahen Inseln wie Krk.',
      },
      maps: 'Crikvenica harbour boat excursions',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'playground-promenade',
      name: "Children's playground — promenade",
      category: 'playground',
      description: {
        en: 'Children’s playgrounds dot the Crikvenica seafront promenade — handy spots to let the kids play between swims.',
        hr: 'Dječja igrališta nižu se uz crikveničku rivu — zgodna mjesta za igru djece između kupanja.',
        de: 'Entlang der Strandpromenade von Crikvenica gibt es Kinderspielplätze — praktische Orte zum Spielen zwischen dem Baden.',
      },
      maps: 'Dječje igralište šetalište Crikvenica',
      gradient: 'from-sea-300 to-sea-500',
    },
  ],

  /* ---------- Shops & groceries ---------- */
  shops: [
    {
      id: 'konzum-duga-mall',
      name: 'Super Konzum — Duga Mall',
      category: 'supermarket',
      description: {
        en: 'Large Super Konzum inside the Duga Mall shopping centre in Crikvenica — a wide range of groceries plus shops, a pharmacy and cafés under one roof.',
        hr: 'Veliki Super Konzum u trgovačkom centru Duga Mall u Crikvenici — širok izbor namirnica te trgovine, ljekarna i kafići pod istim krovom.',
        de: 'Großer Super Konzum im Einkaufszentrum Duga Mall in Crikvenica — großes Lebensmittelangebot sowie Geschäfte, eine Apotheke und Cafés unter einem Dach.',
      },
      maps: 'Duga Mall Crikvenica',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'plodine-crikvenica',
      name: 'Plodine',
      category: 'supermarket',
      description: {
        en: 'Full-size Plodine supermarket in Crikvenica (Kotorska) — a good choice for the big weekly shop.',
        hr: 'Veliki supermarket Plodine u Crikvenici (Kotorska) — dobar izbor za veću tjednu kupnju.',
        de: 'Großer Plodine-Supermarkt in Crikvenica (Kotorska) — eine gute Wahl für den großen Wocheneinkauf.',
      },
      maps: 'Plodine Crikvenica',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'lidl-crikvenica',
      name: 'Lidl',
      category: 'supermarket',
      description: {
        en: 'Lidl in Crikvenica, next to the Duga Mall centre — wide range, fresh bakery and good prices.',
        hr: 'Lidl u Crikvenici, uz centar Duga Mall — širok asortiman, svježa pekarnica i dobre cijene.',
        de: 'Lidl in Crikvenica, neben dem Duga-Mall-Zentrum — große Auswahl, frische Backwaren und gute Preise.',
      },
      maps: 'Lidl Crikvenica',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'trznica-crikvenica',
      name: 'Crikvenica Market (Tržnica)',
      category: 'grocery',
      description: {
        en: 'The town market in central Crikvenica for fresh fruit, vegetables, local cheese, olive oil and fish — best in the morning.',
        hr: 'Gradska tržnica u centru Crikvenice za svježe voće, povrće, domaći sir, maslinovo ulje i ribu — najbolje ujutro.',
        de: 'Der Markt im Zentrum von Crikvenica für frisches Obst, Gemüse, lokalen Käse, Olivenöl und Fisch — am besten morgens.',
      },
      maps: 'Tržnica Crikvenica',
      gradient: 'from-sand-300 to-sea-400',
    },
  ],

  /* ---------- Useful contacts ---------- */
  contacts: [
    { id: 'emergency', labelKey: 'contacts.emergency', phone: '112', icon: 'alert' },
    { id: 'ambulance', labelKey: 'contacts.ambulance', phone: '194', icon: 'ambulance' },
    {
      id: 'pharmacy-crikvenica',
      labelKey: 'contacts.pharmacy',
      label: 'Ljekarna',
      maps: 'Ljekarna Crikvenica',
      icon: 'pill',
    },
    {
      id: 'thalassotherapia',
      labelKey: 'contacts.medical',
      label: 'Thalassotherapia Crikvenica',
      maps: 'Thalassotherapia Crikvenica',
      icon: 'ambulance',
    },
    {
      id: 'taxi-crikvenica',
      labelKey: 'contacts.taxi',
      label: 'Taxi Crikvenica',
      maps: 'Taxi Crikvenica',
      icon: 'taxi',
    },
    {
      id: 'tz-crikvenica',
      labelKey: 'contacts.touristOffice',
      label: 'Turistička zajednica Crikvenice',
      maps: 'Turistička zajednica Crikvenica, Trg Stjepana Radića 1c',
      website: 'https://www.rivieracrikvenica.com/',
      icon: 'compass',
    },
  ],

  /* ---------- Arrival & getting around ---------- */
  arrival: {
    subtitle: {
      en: 'Getting to the Crikvenica Riviera & around',
      hr: 'Kako doći na Crikveničku rivijeru i kretati se',
      de: 'Anreise an die Riviera von Crikvenica & unterwegs',
    },
    description: {
      en: 'Crikvenica is on the mainland coast, an easy drive down the Adriatic highway — no ferry needed. The nearest airport is Rijeka Airport, on the island of Krk, about 45 minutes away. A seaside promenade links Jadranovo, Dramalj, Crikvenica and Selce, and Arriva buses run along the coast. Useful links below for flights, buses and what’s on.',
      hr: 'Crikvenica je na kopnu, lako dostupna Jadranskom magistralom — bez trajekta. Najbliža zračna luka je Zračna luka Rijeka, na otoku Krku, oko 45 minuta vožnje. Šetalište uz more povezuje Jadranovo, Dramalj, Crikvenicu i Selce, a Arriva autobusi voze uz obalu. Korisne poveznice za letove, autobuse i događanja su niže.',
      de: 'Crikvenica liegt an der Festlandküste, bequem über die Adria-Magistrale erreichbar — keine Fähre nötig. Der nächste Flughafen ist der Flughafen Rijeka auf der Insel Krk, etwa 45 Minuten entfernt. Eine Strandpromenade verbindet Jadranovo, Dramalj, Crikvenica und Selce, und Arriva-Busse fahren entlang der Küste. Nützliche Links zu Flügen, Bussen und Veranstaltungen unten.',
    },
    note: {
      en: 'Tip: the whole ~15 km riviera — Jadranovo, Dramalj, Crikvenica and Selce — is linked by one seaside walking-and-cycling promenade.',
      hr: 'Savjet: cijela ~15 km rivijera — Jadranovo, Dramalj, Crikvenica i Selce — povezana je jednim šetalištem uz more za šetnju i bicikl.',
      de: 'Tipp: Die gesamte ~15 km lange Riviera — Jadranovo, Dramalj, Crikvenica und Selce — ist durch eine Strandpromenade zum Spazieren und Radfahren verbunden.',
    },
  },

  arrivalLinks: [
    {
      id: 'airport',
      labelKey: 'ferry.airport',
      url: 'https://rijeka-airport.hr/',
      icon: 'plane',
    },
    {
      id: 'bus',
      labelKey: 'ferry.bus',
      url: 'https://www.arriva.com.hr/',
      icon: 'bus',
    },
    {
      id: 'crikvenica-info',
      label: {
        en: 'Visit Crikvenica (tourist board)',
        hr: 'Turistička zajednica Crikvenice',
        de: 'Crikvenica Tourist-Info',
      },
      url: 'https://www.rivieracrikvenica.com/',
      icon: 'compass',
    },
  ],
}
