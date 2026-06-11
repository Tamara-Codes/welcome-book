import type { IslandContent } from '../content'

/* ============================================================================
 *  🏝️  ISLAND: Krk — Njivice & around  (id: "krk")
 * ----------------------------------------------------------------------------
 *  Shared amenities for EVERY property on Krk — restaurants, beaches,
 *  activities, shops, useful contacts and arrival links. Edit this one file and
 *  the change shows up in every building's guide on the island.
 *
 *  Focus is the village of NJIVICE (north-west Krk), with a few nearby spots in
 *  Omišalj and Malinska noted by town. Krk is reached by the toll-free Krk
 *  Bridge — there is no ferry — so the "arrival" section covers the bridge,
 *  Rijeka Airport (on the island near Omišalj) and island buses.
 *
 *  • Phone numbers: full international format, e.g. "+385 51 846 101".
 *  • WhatsApp: digits only with country code, no "+", e.g. "385911234567".
 *  • Map links: paste a Google Maps link, OR a place name — both work.
 *  • Descriptions use { en: "..." } and fall back to English. To translate,
 *    add more keys, e.g. { en: "Great pizza", de: "Tolle Pizza" }.
 *
 *  Sources for this content are real, verified businesses (June 2026). Phone
 *  numbers are only included where publicly listed; check before printing.
 * ========================================================================== */

export const krk: IslandContent = {
  name: 'Krk',

  /* ---------- Restaurants & bars ---------- */
  restaurants: [
    {
      id: 'rivica',
      name: 'Restaurant Rivica',
      category: 'seafood',
      description: {
        en: 'Famous waterfront fish restaurant on the Njivice harbour promenade, run by the Lesica family since 1934. The menu follows the daily catch from local fishermen; large sea-view terrace and a long-standing reputation for quality.',
        de: 'Bekanntes Fischrestaurant an der Hafenpromenade von Njivice, seit 1934 von der Familie Lesica geführt. Die Karte richtet sich nach dem täglichen Fang der Fischer; große Terrasse mit Meerblick und ein langjähriger Ruf für Qualität.',
      },
      phone: '+385 51 846 101',
      maps: 'Restaurant Rivica Njivice',
      website: 'https://rivica.hr/',
      tags: ['seafood'],
      price: { en: 'Upscale — fresh fish priced by the daily catch', de: 'Gehoben — frischer Fisch nach Tagesfang' },
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'konoba-nora',
      name: 'Konoba Nora',
      category: 'konoba',
      description: {
        en: 'Cosy family-run tavern near the harbour (Ribarska obala 15), known for fresh seafood and homemade šurlice — the hand-rolled pasta that is a Krk speciality.',
        de: 'Gemütliche, familiengeführte Taverne nahe dem Hafen (Ribarska obala 15), bekannt für frischen Fisch und hausgemachte Šurlice — die handgerollte Pasta, eine Spezialität von Krk.',
      },
      phone: '+385 91 544 6712',
      maps: 'Konoba Nora Njivice',
      tags: ['konoba', 'seafood'],
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'konoba-njivice',
      name: 'Konoba Njivice',
      category: 'konoba',
      description: {
        en: 'Highly rated konoba right by the Njivice marina. The owners bake their own bread and make pasta fresh daily, with peka (slow-cooked under the bell) at weekends.',
        de: 'Sehr gut bewertete Konoba direkt am Yachthafen von Njivice. Die Inhaber backen ihr eigenes Brot und machen täglich frische Pasta, am Wochenende gibt es Peka (unter der Glocke gegart).',
      },
      maps: 'Konoba Njivice marina Krk',
      tags: ['konoba'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'maxi',
      name: 'Pizzeria Grill Maxi',
      category: 'pizzeria',
      description: {
        en: 'Casual pizzeria and grill, a good-value family favourite. Reviewers single out the seafood pizza and the grilled meat.',
        de: 'Lockere Pizzeria mit Grill, ein preiswerter Familienliebling. Gäste loben besonders die Meeresfrüchte-Pizza und das Grillfleisch.',
      },
      maps: 'Pizzeria Grill Maxi Njivice',
      tags: ['pizzeria'],
      price: { en: 'Budget to mid-range', de: 'Günstig bis mittel' },
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'bella-vista',
      name: 'Pizzeria Bella Vista',
      category: 'pizzeria',
      description: {
        en: 'Well-reviewed pizzeria with fresh, nicely presented food and friendly staff — a reliable family option in the centre of Njivice.',
        de: 'Gut bewertete Pizzeria mit frischen, hübsch angerichteten Gerichten und freundlichem Personal — eine zuverlässige Wahl für Familien im Zentrum von Njivice.',
      },
      maps: 'Pizzeria Bella Vista Njivice',
      tags: ['pizzeria'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'insula',
      name: 'Beach Bar Insula',
      category: 'barCafe',
      description: {
        en: 'Beach bar on the Njivice shoreline since 2006 — cocktails, draft beer, sunset views and the odd live-music night. Relaxed, pet-friendly and fairly priced.',
        de: 'Strandbar an der Küste von Njivice seit 2006 — Cocktails, Bier vom Fass, Sonnenuntergänge und gelegentlich Livemusik. Entspannt, haustierfreundlich und fair im Preis.',
      },
      maps: 'Beach Bar Insula Njivice',
      tags: ['beachBar', 'goodForSunset'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'sunset-bar',
      name: 'Sunset Beach Bar',
      category: 'barCafe',
      description: {
        en: 'A favourite spot on the Njivice waterfront for an evening drink as the sun goes down over Kvarner Bay.',
        de: 'Ein beliebter Platz an der Uferpromenade von Njivice für einen Drink am Abend, wenn die Sonne über der Kvarner-Bucht untergeht.',
      },
      maps: 'Sunset Beach Bar Njivice',
      tags: ['beachBar', 'goodForSunset'],
      gradient: 'from-sand-300 to-sand-500',
    },
  ],

  /* ---------- Beaches ---------- */
  beaches: [
    {
      id: 'kijac',
      name: 'Kijac Beach',
      category: 'barCafe',
      description: {
        en: 'The most family-friendly beach in Njivice — about 320 m of fine pebbles with a gradual, shallow entry, natural shade, showers, bars, pedal boats and an inflatable trampoline. Blue Flag for over a decade, with a dog-friendly section at the eastern end.',
        de: 'Der familienfreundlichste Strand von Njivice — rund 320 m feiner Kiesel mit flachem Einstieg, natürlichem Schatten, Duschen, Bars, Tretbooten und einem aufblasbaren Trampolin. Seit über zehn Jahren Blaue Flagge, mit einem hundefreundlichen Abschnitt am Ostende.',
      },
      maps: 'Kijac beach Njivice',
      tags: ['familyFriendly', 'pebble', 'shade', 'beachBar', 'blueFlag', 'dogFriendly'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'jadran',
      name: 'Jadran Beach',
      category: 'barCafe',
      description: {
        en: 'Blue Flag beach along the Njivice waterfront, an easy walk from the town’s bars and restaurants — handy for a quick swim between other plans.',
        de: 'Strand mit Blauer Flagge an der Uferpromenade von Njivice, nur einen kurzen Spaziergang von Bars und Restaurants entfernt — ideal für ein schnelles Bad zwischendurch.',
      },
      maps: 'Plaza Jadran Njivice',
      tags: ['pebble', 'blueFlag', 'parkingNearby'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'rosulje',
      name: 'Rosulje Beach',
      category: 'barCafe',
      description: {
        en: 'The main resort beach just south of the centre: a mix of pebbles, concrete sunbathing terraces and rock, with WC, showers, natural shade and disabled access. Lively and very family-friendly.',
        de: 'Der Hauptstrand des Ortes südlich des Zentrums: eine Mischung aus Kiesel, Beton-Sonnenterrassen und Fels, mit WC, Duschen, natürlichem Schatten und barrierefreiem Zugang. Lebhaft und sehr familienfreundlich.',
      },
      maps: 'Rosulje beach Njivice',
      tags: ['familyFriendly', 'concrete', 'shade', 'parkingNearby'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'pod-crkvu',
      name: 'Pod Crkvu Beach',
      category: 'barCafe',
      description: {
        en: 'Beach below the church in Njivice, with bars and restaurants nearby plus a children’s trampoline and an inflatable water park in season — good for a family day out.',
        de: 'Strand unterhalb der Kirche von Njivice, mit Bars und Restaurants in der Nähe sowie einem Kindertrampolin und einem aufblasbaren Wasserpark in der Saison — schön für einen Familientag.',
      },
      maps: 'Pod crkvu beach Njivice',
      tags: ['familyFriendly', 'pebble', 'beachBar'],
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'pesja',
      name: 'Pesja Beach (Omišalj)',
      category: 'barCafe',
      description: {
        en: 'Omišalj’s best-known beach, in the bay below the old town — a Blue Flag beach with sea access for visitors with reduced mobility. About 5 km from Njivice.',
        de: 'Der bekannteste Strand von Omišalj, in der Bucht unterhalb der Altstadt — ein Strand mit Blauer Flagge und Meerzugang für Menschen mit eingeschränkter Mobilität. Etwa 5 km von Njivice entfernt.',
      },
      maps: 'Pesja beach Omisalj',
      tags: ['pebble', 'blueFlag', 'familyFriendly'],
      gradient: 'from-sand-300 to-sea-400',
    },
  ],

  /* ---------- Activities & rentals ---------- */
  activities: [
    {
      id: 'oto-nautika',
      name: 'Oto Nautika — water sports',
      category: 'waterRental',
      description: {
        en: 'Water-sports base in the centre of Njivice: Sea-Doo jet skis, jet-ski safaris, parasailing, tube and sofa rides, plus kayak and paddle rental.',
        de: 'Wassersport-Station im Zentrum von Njivice: Sea-Doo-Jetskis, Jetski-Safaris, Parasailing, Reifen- und Sofafahren sowie Kajak- und Paddelverleih.',
      },
      price: { en: 'Jet ski from ~€40 / 10 min', de: 'Jetski ab ~40 € / 10 Min.' },
      phone: '+385 98 988 7458',
      maps: 'Oto Nautika Njivice',
      website: 'https://oto-nautika.hr/en/rental-center-njivice',
      gradient: 'from-sea-300 to-sea-600',
    },
    {
      id: 'pelagos',
      name: 'Pelagos Diving Center',
      category: 'diving',
      description: {
        en: 'Dive centre in Njivice (Primorska cesta 30) offering discovery dives, courses, snorkelling and boat dives to local wrecks such as the Peltastis and Lina. Free parking nearby.',
        de: 'Tauchzentrum in Njivice (Primorska cesta 30) mit Schnuppertauchen, Kursen, Schnorcheln und Bootstauchgängen zu lokalen Wracks wie der Peltastis und der Lina. Kostenlose Parkplätze in der Nähe.',
      },
      maps: 'Pelagos Diving Center Njivice',
      website: 'https://www.pelagos-diving.com/',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'sportmar-sup',
      name: 'Sportmar — SUP & pedal boats',
      category: 'waterRental',
      description: {
        en: 'Beach rental point in Njivice for stand-up paddleboards and pedal boats — an easy way to get out on the calm morning sea.',
        de: 'Verleihstation am Strand von Njivice für Stand-up-Paddleboards und Tretboote — eine einfache Möglichkeit, das ruhige Morgenmeer zu genießen.',
      },
      price: { en: 'SUP from ~€8 / hour, ~€40 / day', de: 'SUP ab ~8 € / Stunde, ~40 € / Tag' },
      maps: 'Sportmar Njivice',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'boat-charter',
      name: 'BI-Boatcharter — motorboats',
      category: 'boatRental',
      description: {
        en: 'Boat charter based in Njivice renting powerboats and sports boats — bareboat if you hold a licence, or with a skipper.',
        de: 'Bootsverleih in Njivice mit Motor- und Sportbooten — ohne Crew mit Bootsführerschein oder mit Skipper.',
      },
      price: { en: 'from ~€230 / day', de: 'ab ~230 € / Tag' },
      maps: 'BI Boatcharter Njivice',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'rent-boat-malinska',
      name: 'Rent a Boat Malinska',
      category: 'boatRental',
      description: {
        en: 'Small motorboats in nearby Malinska (about 6 km away). No boat licence? A skipper can be arranged for the day.',
        de: 'Kleine Motorboote im nahen Malinska (etwa 6 km entfernt). Kein Bootsführerschein? Ein Skipper kann für den Tag organisiert werden.',
      },
      maps: 'Rent a boat Malinska',
      website: 'https://rentaboatmalinska.com/',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'ebike-malinska',
      name: 'E-Bike & scooter rental (Malinska)',
      category: 'bikeRental',
      description: {
        en: 'Rental shop by the Malinska waterfront hiring e-bikes, scooters and mopeds, daily 8:00–20:00; helmet, lock, charger and insurance included.',
        de: 'Verleih an der Promenade von Malinska für E-Bikes, Roller und Mopeds, täglich 8:00–20:00 Uhr; Helm, Schloss, Ladegerät und Versicherung inklusive.',
      },
      price: { en: 'E-bike from ~€25 / day', de: 'E-Bike ab ~25 € / Tag' },
      maps: 'E Bike Malinska',
      website: 'https://ebikemalinska.com/',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'go2bike',
      name: 'Go2Bike — public e-bikes',
      category: 'bikeRental',
      description: {
        en: 'Island-wide e-bike sharing with charging stations in eight towns, including Njivice and Omišalj. Rent 24/7 by card through the Go2Bike app.',
        de: 'Inselweites E-Bike-Sharing mit Ladestationen in acht Orten, darunter Njivice und Omišalj. Rund um die Uhr per Karte über die Go2Bike-App ausleihbar.',
      },
      maps: 'Go2Bike e-bike station Njivice',
      gradient: 'from-sea-300 to-sea-500',
    },
  ],

  /* ---------- Shops & groceries ---------- */
  shops: [
    {
      id: 'trgovina-krk-njivice',
      name: 'Trgovina Krk — Njivice',
      category: 'supermarket',
      description: {
        en: 'Local Trgovina Krk shop in Njivice for daily groceries, drinks and everyday essentials, within walking distance of the apartments.',
        de: 'Lokaler Trgovina-Krk-Markt in Njivice für täglichen Einkauf, Getränke und Dinge des täglichen Bedarfs, fußläufig von den Apartments.',
      },
      maps: 'Trgovina Krk Njivice',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'pekara-vrbnik',
      name: 'Pekara Vrbnik — Njivice',
      category: 'bakery',
      description: {
        en: 'Branch of Krk’s well-known bakery (Plaća 7) for fresh bread, burek, pastries and cakes. Typically Mon–Sat 7:00–14:00, Sun 7:00–13:00.',
        de: 'Filiale der bekannten Bäckerei von Krk (Plaća 7) für frisches Brot, Burek, Gebäck und Kuchen. In der Regel Mo–Sa 7:00–14:00, So 7:00–13:00 Uhr.',
      },
      phone: '+385 51 440 774',
      maps: 'Pekara Vrbnik Njivice',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'lidl-omisalj',
      name: 'Lidl — Omišalj',
      category: 'supermarket',
      description: {
        en: 'Large Lidl near the Omišalj roundabout, just after the Krk Bridge, with a wide range, fresh bakery and good prices — one of the nearest big supermarkets to Njivice.',
        de: 'Großer Lidl beim Kreisverkehr von Omišalj, kurz hinter der Krk-Brücke, mit großer Auswahl, frischer Backstube und guten Preisen — einer der nächsten großen Supermärkte zu Njivice.',
      },
      maps: 'Lidl Omisalj Krk',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'plodine-malinska',
      name: 'Plodine — Malinska',
      category: 'supermarket',
      description: {
        en: 'Full-size Plodine supermarket on the edge of Malinska, about a 10-minute drive from Njivice — best choice for a big weekly shop.',
        de: 'Großer Plodine-Supermarkt am Rand von Malinska, etwa 10 Autominuten von Njivice — die beste Wahl für den großen Wocheneinkauf.',
      },
      maps: 'Plodine Malinska',
      website: 'https://www.plodine.hr/supermarketi/34/supermarket-malinska',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'tommy-malinska',
      name: 'Tommy — Malinska',
      category: 'supermarket',
      description: {
        en: 'Tommy supermarket in Malinska, about a 10-minute drive from Njivice, with a full grocery range for the weekly shop.',
        de: 'Tommy-Supermarkt in Malinska, etwa 10 Autominuten von Njivice, mit komplettem Lebensmittelangebot für den Wocheneinkauf.',
      },
      maps: 'Tommy Malinska',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'trgovina-krk-malinska',
      name: 'Trgovina Krk — Malinska',
      category: 'supermarket',
      description: {
        en: 'Trgovina Krk shop in Malinska for daily groceries, drinks and everyday essentials, about a 10-minute drive from Njivice.',
        de: 'Trgovina-Krk-Markt in Malinska für täglichen Einkauf, Getränke und Dinge des täglichen Bedarfs, etwa 10 Autominuten von Njivice.',
      },
      maps: 'Trgovina Krk Malinska',
      gradient: 'from-sand-300 to-sand-500',
    },
  ],

  /* ---------- Useful contacts ---------- */
  contacts: [
    { id: 'emergency', labelKey: 'contacts.emergency', phone: '112', icon: 'alert' },
    { id: 'ambulance', labelKey: 'contacts.ambulance', phone: '194', icon: 'ambulance' },
    {
      id: 'pharmacy-njivice',
      labelKey: 'contacts.pharmacy',
      label: 'Ljekarna Njivice',
      phone: '+385 51 847 030',
      maps: 'Ljekarna Njivice',
      icon: 'pill',
    },
    {
      id: 'pharmacy-omisalj',
      labelKey: 'contacts.pharmacy',
      label: 'Ljekarna Omišalj',
      phone: '+385 51 842 127',
      maps: 'Ljekarna Omisalj',
      icon: 'pill',
    },
    {
      id: 'taxi',
      labelKey: 'contacts.taxi',
      label: 'OZ Taxi & Travel',
      phone: '+385 99 340 6329',
      website: 'https://oztravel.hr/en/taxi-services/',
      icon: 'taxi',
    },
    {
      id: 'tourist-office',
      labelKey: 'contacts.touristOffice',
      label: 'TZ Omišalj–Njivice',
      phone: '+385 51 261 083',
      website: 'https://visit-omisalj-njivice.hr/en/',
      icon: 'info',
    },
  ],

  /* ---------- Arrival & getting around ---------- */
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
      url: 'https://www.arriva.com.hr/en-us/bus-rijeka-krk',
      icon: 'bus',
    },
    {
      id: 'krk-info',
      labelKey: 'ferry.krkInfo',
      url: 'https://visit-omisalj-njivice.hr/en/',
      icon: 'compass',
    },
  ],
}
