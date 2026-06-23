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
      category: 'restaurant',
      description: {
        en: 'Famous waterfront fish restaurant on the Njivice harbour promenade, run by the Lesica family since 1934. The menu follows the daily catch from local fishermen; large sea-view terrace and a long-standing reputation for quality.',
        hr: 'Poznati riblji restoran uz more na njivičkoj lučkoj rivi, koji obitelj Lesica vodi od 1934. Jelovnik prati dnevni ulov lokalnih ribara; velika terasa s pogledom na more i dugogodišnji ugled za kvalitetu.',
        de: 'Bekanntes Fischrestaurant an der Hafenpromenade von Njivice, seit 1934 von der Familie Lesica geführt. Die Karte richtet sich nach dem täglichen Fang der Fischer; große Terrasse mit Meerblick und ein langjähriger Ruf für Qualität.',
      },
      phone: '+385 51 846 101',
      maps: 'Restaurant Rivica Njivice',
      website: 'https://rivica.hr/',
      tags: ['seafood'],
      price: { en: 'Upscale — fresh fish priced by the daily catch', hr: 'Više cijene — svježa riba prema dnevnom ulovu', de: 'Gehoben — frischer Fisch nach Tagesfang' },
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'konoba-njivice',
      name: 'Konoba Njivice',
      category: 'restaurant',
      description: {
        en: 'Highly rated konoba right by the Njivice marina. The owners bake their own bread and make pasta fresh daily, with peka (slow-cooked under the bell) at weekends.',
        hr: 'Visoko ocijenjena konoba odmah uz njivičku marinu. Vlasnici sami peku kruh i svakodnevno rade svježu tjesteninu, a vikendom poslužuju jela ispod peke.',
        de: 'Sehr gut bewertete Konoba direkt am Yachthafen von Njivice. Die Inhaber backen ihr eigenes Brot und machen täglich frische Pasta, am Wochenende gibt es Peka (unter der Glocke gegart).',
      },
      phone: '+385 51 210 058',
      maps: 'Konoba Njivice marina Krk',
      tags: ['konoba'],
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'vijon',
      name: 'Konoba Vijon',
      category: 'restaurant',
      description: {
        en: 'Konoba on the Njivice harbour (Ribarska obala 8) with a varied Mediterranean menu — tasty fish, pasta and grilled dishes, plus good ice cream to finish.',
        hr: 'Konoba na njivičkoj rivi (Ribarska obala 8) s raznovrsnom mediteranskom ponudom — ukusna riba, tjestenine i jela s roštilja, a za kraj i dobar sladoled.',
        de: 'Konoba an der Hafenpromenade von Njivice (Ribarska obala 8) mit abwechslungsreicher mediterraner Karte — schmackhafter Fisch, Pasta und Grillgerichte, zum Abschluss gutes Eis.',
      },
      phone: '+385 51 846 842',
      maps: 'Konoba Vijon Njivice',
      tags: ['konoba', 'seafood'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'bella-vista',
      name: 'Pizzeria Bella Vista',
      category: 'restaurant',
      description: {
        en: 'Well-reviewed pizzeria with fresh, nicely presented food and friendly staff — a reliable family option in the centre of Njivice.',
        hr: 'Dobro ocijenjena pizzeria sa svježom, lijepo posluženom hranom i ljubaznim osobljem — pouzdan obiteljski izbor u centru Njivica.',
        de: 'Gut bewertete Pizzeria mit frischen, hübsch angerichteten Gerichten und freundlichem Personal — eine zuverlässige Wahl für Familien im Zentrum von Njivice.',
      },
      phone: '+385 51 502 530',
      maps: 'Pizzeria Bella Vista Njivice',
      tags: ['pizzeria'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'insula',
      name: 'Beach Bar Insula',
      category: 'barCafe',
      icon: 'cocktail',
      description: {
        en: 'Beach bar on the Njivice shoreline since 2006 — cocktails, draft beer, sunset views and the odd live-music night. Relaxed, pet-friendly and fairly priced.',
        hr: 'Beach bar na njivičkoj obali od 2006. — kokteli, točeno pivo, pogled na zalazak sunca i povremene večeri uživo. Opušteno, prijateljski prema ljubimcima i pristupačnih cijena.',
        de: 'Strandbar an der Küste von Njivice seit 2006 — Cocktails, Bier vom Fass, Sonnenuntergänge und gelegentlich Livemusik. Entspannt, haustierfreundlich und fair im Preis.',
      },
      maps: 'Beach Bar Insula Njivice',
      tags: ['beachBar'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'sunset-bar',
      name: 'Sunset Beach Bar',
      category: 'barCafe',
      icon: 'cocktail',
      description: {
        en: 'A favourite spot on the Njivice waterfront for an evening drink as the sun goes down over Kvarner Bay.',
        hr: 'Omiljeno mjesto na njivičkoj rivi za večernje piće dok sunce zalazi nad Kvarnerskim zaljevom.',
        de: 'Ein beliebter Platz an der Uferpromenade von Njivice für einen Drink am Abend, wenn die Sonne über der Kvarner-Bucht untergeht.',
      },
      maps: 'Sunset Beach Bar Njivice',
      tags: ['beachBar'],
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'vinea',
      name: 'Bistro Vinea',
      category: 'restaurant',
      description: {
        en: 'Relaxed bistro in Njivice with Mediterranean dishes, grilled meat and fish, salads and daily specials — a solid all-round choice.',
        hr: 'Opušteni bistro u Njivicama s mediteranskim jelima, mesom i ribom s roštilja, salatama i dnevnom ponudom — dobar izbor za svakoga.',
        de: 'Entspanntes Bistro in Njivice mit mediterranen Gerichten, Fleisch und Fisch vom Grill, Salaten und Tagesangeboten — eine solide Wahl.',
      },
      phone: '+385 51 847 075',
      maps: 'https://www.google.com/maps/place/Bistro+Vinea/@45.1643734,14.54224,20z/data=!4m14!1m7!3m6!1s0x476365e9796572bf:0x56cfa6542f081791!2sKonoba+Vijon+pizzeria!8m2!3d45.1648067!4d14.5411592!16s%2Fg%2F11s617lznp!3m5!1s0x4763656157b070b7:0x71d07da9c0df1c95!8m2!3d45.1643869!4d14.5421459!16s%2Fg%2F11h4qbzkm6',
      tags: ['familyFriendly'],
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'kod-dide',
      name: 'Restoran Kod Dide',
      category: 'restaurant',
      description: {
        en: 'Homely restaurant in Njivice serving traditional Croatian and grilled dishes in generous portions — welcoming for the whole family.',
        hr: 'Domaći restoran u Njivicama s tradicionalnim hrvatskim jelima i roštiljem u izdašnim porcijama — ugodno mjesto za cijelu obitelj.',
        de: 'Gemütliches Restaurant in Njivice mit traditionellen kroatischen und gegrillten Gerichten in großzügigen Portionen — einladend für die ganze Familie.',
      },
      phone: '+385 99 333 8429',
      maps: 'Restoran Kod Dide Njivice',
      tags: ['familyFriendly'],
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'chill-beach-bar',
      name: 'Chill Beach Bar',
      category: 'barCafe',
      icon: 'cocktail',
      description: {
        en: 'Laid-back beach bar in Njivice for coffee, drinks and cocktails by the sea.',
        hr: 'Opušteni beach bar u Njivicama za kavu, piće i koktele uz more.',
        de: 'Entspannte Strandbar in Njivice für Kaffee, Drinks und Cocktails am Meer.',
      },
      maps: 'Chill Beach Bar Njivice',
      tags: ['beachBar'],
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'slasticarna-stric',
      name: 'Slastičarna Stric',
      category: 'barCafe',
      icon: 'iceCream',
      description: {
        en: 'Popular ice-cream parlour and patisserie in Njivice — homemade ice cream, cakes and coffee.',
        hr: 'Omiljena slastičarnica u Njivicama — domaći sladoled, kolači i kava.',
        de: 'Beliebte Eisdiele und Konditorei in Njivice — hausgemachtes Eis, Kuchen und Kaffee.',
      },
      phone: '+385 51 846 577',
      maps: 'Slastičarna Stric Njivice',
      tags: ['familyFriendly'],
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'slasticarna-fontana',
      name: 'Slastičarna Fontana',
      category: 'barCafe',
      icon: 'iceCream',
      description: {
        en: 'Ice-cream parlour and café in Njivice for ice cream, cakes and a relaxed coffee break.',
        hr: 'Slastičarnica i kafić u Njivicama za sladoled, kolače i opuštenu kavu.',
        de: 'Eisdiele und Café in Njivice für Eis, Kuchen und eine entspannte Kaffeepause.',
      },
      phone: '+385 51 846 898',
      maps: 'Slastičarna Fontana Njivice',
      tags: ['familyFriendly'],
      gradient: 'from-sea-300 to-sand-400',
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
        hr: 'Najobiteljskija plaža u Njivicama — oko 320 m sitnog šljunka s blagim, plitkim ulazom, prirodnim hladom, tuševima, barovima, pedalinama i napuhanim trampolinom. Plava zastava više od desetljeća, s dijelom za pse na istočnom kraju.',
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
        hr: 'Plaža s Plavom zastavom uz njivičku rivu, na kratkoj šetnji od mjesnih barova i restorana — zgodna za brzo kupanje između drugih planova.',
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
        hr: 'Glavna mjesna plaža odmah južno od centra: mješavina šljunka, betonskih terasa za sunčanje i stijena, s WC-om, tuševima, prirodnim hladom i pristupom za osobe s invaliditetom. Živahna i vrlo prikladna za obitelji.',
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
        hr: 'Plaža ispod crkve u Njivicama, s barovima i restoranima u blizini te dječjim trampolinom i napuhanim vodenim parkom u sezoni — odlična za obiteljski dan.',
        de: 'Strand unterhalb der Kirche von Njivice, mit Bars und Restaurants in der Nähe sowie einem Kindertrampolin und einem aufblasbaren Wasserpark in der Saison — schön für einen Familientag.',
      },
      maps: 'Pod crkvu beach Njivice',
      tags: ['familyFriendly', 'pebble', 'beachBar'],
      gradient: 'from-sea-500 to-sea-700',
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
        hr: 'Baza za vodene sportove u centru Njivica: Sea-Doo jet-skijevi, jet-ski safari, parasailing, vožnja gumama i sofama te najam kajaka i SUP-ova.',
        de: 'Wassersport-Station im Zentrum von Njivice: Sea-Doo-Jetskis, Jetski-Safaris, Parasailing, Reifen- und Sofafahren sowie Kajak- und Paddelverleih.',
      },
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
        hr: 'Ronilački centar u Njivicama (Primorska cesta 30) nudi probna ronjenja, tečajeve, ronjenje s maskom i ronjenja s broda do lokalnih olupina poput Peltastisa i Line. Besplatan parking u blizini.',
        de: 'Tauchzentrum in Njivice (Primorska cesta 30) mit Schnuppertauchen, Kursen, Schnorcheln und Bootstauchgängen zu lokalen Wracks wie der Peltastis und der Lina. Kostenlose Parkplätze in der Nähe.',
      },
      maps: 'Pelagos Diving Center Njivice',
      website: 'https://www.pelagos-diving.com/',
      gradient: 'from-sea-500 to-sea-700',
    },
    {
      id: 'boat-charter',
      name: 'BI-Boatcharter — motorboats',
      category: 'boatRental',
      description: {
        en: 'Boat charter based in Njivice renting powerboats and sports boats — bareboat if you hold a licence, or with a skipper.',
        hr: 'Najam plovila sa sjedištem u Njivicama nudi motorne i sportske brodice — bez posade ako imate dozvolu ili sa skiperom.',
        de: 'Bootsverleih in Njivice mit Motor- und Sportbooten — ohne Crew mit Bootsführerschein oder mit Skipper.',
      },
      maps: 'BI Boatcharter Njivice',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'rent-boat-malinska',
      name: 'Rent a Boat Malinska',
      category: 'boatRental',
      description: {
        en: 'Small motorboats in nearby Malinska (about 6 km away). No boat licence? A skipper can be arranged for the day.',
        hr: 'Manje motorne brodice u obližnjoj Malinskoj (oko 6 km). Nemate dozvolu za upravljanje? Može se organizirati skiper za taj dan.',
        de: 'Kleine Motorboote im nahen Malinska (etwa 6 km entfernt). Kein Bootsführerschein? Ein Skipper kann für den Tag organisiert werden.',
      },
      maps: 'Rent a boat Malinska',
      website: 'https://rentaboatmalinska.com/',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'uo-riki',
      name: 'U.O. Riki — scooter & bike rental',
      category: 'scooterRental',
      description: {
        en: 'Scooter and bicycle rental in Njivice — an easy way to explore the coast and the nearby villages.',
        hr: 'Najam skutera i bicikala u Njivicama — jednostavan način za istraživanje obale i okolnih mjesta.',
        de: 'Roller- und Fahrradverleih in Njivice — eine einfache Möglichkeit, die Küste und die umliegenden Orte zu erkunden.',
      },
      maps: 'U.O. Riki Njivice',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'ev-charging-njivice',
      name: 'Go2charge EV charging — Njivice',
      category: 'evCharging',
      description: {
        en: 'Two electric-vehicle charging stations at the G2B parking in Njivice (Ribarska obala 8).',
        hr: 'Dvije punionice za električne automobile na parkiralištu G2B u Njivicama (Ribarska obala 8).',
        de: 'Zwei Ladestationen für Elektrofahrzeuge am G2B-Parkplatz in Njivice (Ribarska obala 8).',
      },
      maps: 'Go2charge Charging Station Ribarska obala 8 Njivice',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'playground-rosulje',
      name: "Children's playground — Rosulje",
      category: 'playground',
      description: {
        en: 'Children’s playground in the Rosulje area of Njivice — a handy spot to let the kids play.',
        hr: 'Dječje igralište u Rosuljama u Njivicama — zgodno mjesto za igru djece.',
        de: 'Kinderspielplatz im Bereich Rosulje in Njivice — ein praktischer Ort zum Spielen.',
      },
      maps: 'Dječje igralište Rosulje Njivice',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'playground-njivice',
      name: "Children's playground — Njivice centre",
      category: 'playground',
      description: {
        en: 'Children’s playground in Njivice, between the Jadran beach and the 7 Seas restaurant.',
        hr: 'Dječje igralište u Njivicama, između plaže Jadran i restorana 7 Seas.',
        de: 'Kinderspielplatz in Njivice, zwischen dem Strand Jadran und dem Restaurant 7 Seas.',
      },
      maps: 'https://maps.app.goo.gl/VCnzjYG71CSEPVSY7',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'playground-kamp',
      name: "Children's playground — Kamp",
      category: 'playground',
      description: {
        en: 'Children’s playground by the campsite (Kamp) in Njivice.',
        hr: 'Dječje igralište kod kampa u Njivicama.',
        de: 'Kinderspielplatz beim Campingplatz (Kamp) in Njivice.',
      },
      maps: 'https://maps.app.goo.gl/Ujf6DhKFHftFeuL2A',
      gradient: 'from-sea-500 to-sea-700',
    },
  ],

  /* ---------- Shops & groceries ---------- */
  shops: [
    {
      id: 'erste-atm-njivice',
      name: 'Erste Bank ATM',
      category: 'atm',
      description: {
        en: 'ATM at Ribarska obala 4 (inside the Miramare building), Njivice — open 24 hours.',
        hr: 'Bankomat na Ribarskoj obali 4 (u zgradi Miramare), Njivice — otvoreno 0–24.',
        de: 'Geldautomat an der Ribarska obala 4 (im Gebäude Miramare), Njivice — rund um die Uhr geöffnet.',
      },
      maps: 'Erste Bank ATM Ribarska obala 4 Njivice',
      website: 'https://www.erstebank.hr',
      gradient: 'from-sea-300 to-sea-500',
    },
    {
      id: 'euronet-atm-njivice',
      name: 'Euronet ATM',
      category: 'atm',
      description: {
        en: 'ATM at Ribarska obala bb, Njivice — open 24 hours. Support line: 0800 686 868.',
        hr: 'Bankomat na Ribarskoj obali bb, Njivice — otvoreno 0–24. Podrška: 0800 686 868.',
        de: 'Geldautomat an der Ribarska obala bb, Njivice — rund um die Uhr geöffnet. Hotline: 0800 686 868.',
      },
      maps: 'Euronet ATM Ribarska obala Njivice',
      website: 'https://www.euronetatms.com',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'trgovina-krk-njivice',
      name: 'Trgovina Krk',
      category: 'supermarket',
      description: {
        en: 'Local Trgovina Krk shop in Njivice for daily groceries, drinks and everyday essentials.',
        hr: 'Lokalna trgovina Trgovina Krk u Njivicama za dnevne namirnice, piće i osnovne potrepštine.',
        de: 'Lokaler Trgovina-Krk-Markt in Njivice für täglichen Einkauf, Getränke und Dinge des täglichen Bedarfs.',
      },
      maps: 'https://maps.app.goo.gl/4etFNnNFNE6yaa5i6',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'pekara-vrbnik',
      name: {
        en: 'Vrbnik Bakery',
        hr: 'Pekara Vrbnik',
        de: 'Bäckerei Vrbnik',
        it: 'Panificio Vrbnik',
        sl: 'Pekarna Vrbnik',
        pl: 'Piekarnia Vrbnik',
        cs: 'Pekárna Vrbnik',
      },
      category: 'bakery',
      description: {
        en: 'Branch of Krk’s well-known bakery (Placa) for fresh bread, burek, pastries and cakes.',
        hr: 'Podružnica poznate krčke pekarnice (Placa) za svježi kruh, burek, peciva i kolače.',
        de: 'Filiale der bekannten Bäckerei von Krk (Placa) für frisches Brot, Burek, Gebäck und Kuchen.',
      },
      maps: 'Pekara Vrbnik Njivice',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'mesnica-njivice',
      name: {
        en: 'Butcher',
        hr: 'Mesnica',
        de: 'Metzgerei',
        it: 'Macelleria',
        sl: 'Mesnica',
        pl: 'Sklep mięsny',
        cs: 'Řeznictví',
      },
      category: 'butcher',
      description: {
        en: 'Local butcher in Njivice for fresh meat, sausages and cold cuts — handy for stocking up if you plan to grill on the terrace.',
        hr: 'Lokalna mesnica u Njivicama za svježe meso, kobasice i suhomesnate proizvode — zgodna za opskrbu ako planirate roštilj na terasi.',
        de: 'Lokale Metzgerei in Njivice für frisches Fleisch, Würste und Aufschnitt — praktisch zum Eindecken, wenn Sie auf der Terrasse grillen möchten.',
      },
      maps: 'Mesnica Njivice Draga 33',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'croatian-original',
      name: 'Croatian Original',
      category: 'crafts',
      description: {
        en: 'Shop in Njivice (Draga 1) for handmade local crafts and souvenirs — lavender, olive-wood pieces and gifts to take home.',
        hr: 'Trgovina u Njivicama (Draga 1) s domaćim rukotvorinama i suvenirima — lavanda, predmeti od maslinova drva i pokloni za ponijeti kući.',
        de: 'Laden in Njivice (Draga 1) mit handgefertigtem lokalem Kunsthandwerk und Souvenirs — Lavendel, Olivenholzartikel und Geschenke für zu Hause.',
      },
      maps: 'Croatian Original Draga 1 Njivice',
      gradient: 'from-sea-300 to-sand-400',
    },
    {
      id: 'lidl-omisalj',
      name: 'Lidl — Omišalj',
      category: 'supermarket',
      description: {
        en: 'Large Lidl near the Omišalj roundabout, just after the Krk Bridge, with a wide range, fresh bakery and good prices — one of the nearest big supermarkets to Njivice.',
        hr: 'Veliki Lidl kraj omišaljskog kružnog toka, odmah nakon Krčkog mosta, sa širokim asortimanom, svježom pekarnicom i dobrim cijenama — jedan od najbližih velikih supermarketa Njivicama.',
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
        hr: 'Veliki supermarket Plodine na rubu Malinske, oko 10 minuta vožnje od Njivica — najbolji izbor za veću tjednu kupnju.',
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
        hr: 'Supermarket Tommy u Malinskoj, oko 10 minuta vožnje od Njivica, s potpunim asortimanom namirnica za tjednu kupnju.',
        de: 'Tommy-Supermarkt in Malinska, etwa 10 Autominuten von Njivice, mit komplettem Lebensmittelangebot für den Wocheneinkauf.',
      },
      maps: 'Tommy Malinska',
      gradient: 'from-sea-400 to-sea-600',
    },
    {
      id: 'ivic-voce-povrce',
      name: 'Ivić — fruit & vegetables',
      category: 'grocery',
      description: {
        en: 'Greengrocer in Njivice for fresh fruit and vegetables.',
        hr: 'Voćarna u Njivicama za svježe voće i povrće.',
        de: 'Obst- und Gemüsehändler in Njivice für frisches Obst und Gemüse.',
      },
      maps: 'Ivić voće i povrće Njivice',
      gradient: 'from-sand-300 to-sea-400',
    },
    {
      id: 'pekara-toni',
      name: {
        en: 'Toni Bakery',
        hr: 'Pekara Toni',
        de: 'Bäckerei Toni',
        it: 'Panificio Toni',
        sl: 'Pekarna Toni',
        pl: 'Piekarnia Toni',
        cs: 'Pekárna Toni',
      },
      category: 'bakery',
      description: {
        en: 'Bakery in Njivice for fresh bread and pastries, located just behind Ivić’s greengrocer.',
        hr: 'Pekarnica u Njivicama za svježi kruh i peciva, smještena odmah iza voćarne Ivić.',
        de: 'Bäckerei in Njivice für frisches Brot und Gebäck, direkt hinter dem Obstladen Ivić.',
      },
      maps: 'Ivić voće i povrće Njivice',
      gradient: 'from-sand-300 to-sand-500',
    },
    {
      id: 'mlinar-njivice',
      name: 'Mlinar',
      category: 'bakery',
      description: {
        en: 'Mlinar bakery in Njivice for bread, burek and pastries.',
        hr: 'Pekarnica Mlinar u Njivicama za kruh, burek i peciva.',
        de: 'Mlinar-Bäckerei in Njivice für Brot, Burek und Gebäck.',
      },
      maps: 'Mlinar Njivice',
      gradient: 'from-sand-300 to-sea-400',
    },
  ],

  /* ---------- Useful contacts ---------- */
  contacts: [
    { id: 'emergency', labelKey: 'contacts.emergency', phone: '112', icon: 'alert' },
    { id: 'ambulance', labelKey: 'contacts.ambulance', phone: '194', icon: 'ambulance' },
    {
      id: 'pharmacy-njivice',
      labelKey: 'contacts.pharmacy',
      label: 'Ljekarna',
      phone: '+385 51 847 030',
      maps: 'Ljekarna Njivice',
      icon: 'pill',
    },
    {
      id: 'mip-taxi',
      labelKey: 'contacts.taxi',
      label: 'MIP Taxi (Marinko Ivanković)',
      phone: '+385 98 258 995',
      maps: 'MIP Taxi Njivice',
      icon: 'taxi',
    },
    {
      id: 'tourist-clinic-krk',
      labelKey: 'contacts.medical',
      label: 'Turistička ambulanta Krk',
      phone: '+385 98 410 680',
      maps: 'Turistička ambulanta Krk, Ulica Josipa Pupačića 1, Krk',
      icon: 'ambulance',
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
