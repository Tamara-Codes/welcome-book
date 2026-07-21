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

  /* This is the public demo — show the "Demo" tag + "request your own guide"
     CTA in the header. Real customers omit this so their guests never see it. */
  demo: true,

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
      hu: 'Az Ön otthona az Adria partján, Njivicében, Krk szigetén.',
      sk: 'Váš domov pri Jadrane v Njiviciach, na ostrove Krk.',
    },
  },

  host: {
    name: 'Tamara Martinović',
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
      hu: 'A ház előtt ingyenes, privát parkolóhely áll rendelkezésre — apartmanonként egy hely. Kérjük, ne torlaszolja el a szomszédok bejáratait.',
      sk: 'Pred domom je k dispozícii bezplatné súkromné parkovanie — jedno miesto na apartmán. Prosíme, neblokujte vjazdy susedom.',
      it: 'Il parcheggio privato è gratuito ed è disponibile davanti alla casa — un posto per appartamento. Vi preghiamo di non bloccare gli ingressi dei vicini.',
      sl: 'Brezplačno zasebno parkirišče je na voljo pred hišo — eno mesto na apartma. Prosimo, ne blokirajte dovozov sosedom.',
      pl: 'Przed domem dostępny jest bezpłatny prywatny parking — jedno miejsce na apartament. Prosimy nie blokować wjazdów sąsiadom.',
      cs: 'Před domem je k dispozici bezplatné soukromé parkoviště — jedno místo na apartmán. Prosíme, neblokujte vjezdy sousedům.',
    } as Localized,
    trash: {
      en: 'General waste goes in the grey bins by the road. Please separate paper, plastic and glass into the labelled containers. Collection is early morning.',
      hr: 'Miješani otpad odlaže se u sive kante uz cestu. Molimo odvajajte papir, plastiku i staklo u označene spremnike. Odvoz je rano ujutro.',
      de: 'Restmüll kommt in die grauen Tonnen an der Straße. Bitte trennen Sie Papier, Plastik und Glas in die beschrifteten Behälter. Die Abholung erfolgt am frühen Morgen.',
      hu: 'A vegyes hulladék az út menti szürke kukákba kerül. Kérjük, a papírt, a műanyagot és az üveget a feliratozott tárolókba válogatva helyezze el. Az elszállítás kora reggel történik.',
      sk: 'Zmiešaný odpad patrí do sivých nádob pri ceste. Prosíme, triedte papier, plast a sklo do označených nádob. Odvoz je skoro ráno.',
      it: 'I rifiuti generici vanno nei bidoni grigi lungo la strada. Vi preghiamo di separare carta, plastica e vetro negli appositi contenitori contrassegnati. La raccolta avviene la mattina presto.',
      sl: 'Mešani odpadki gredo v sive zabojnike ob cesti. Prosimo, ločujte papir, plastiko in steklo v označene zabojnike. Odvoz je zgodaj zjutraj.',
      pl: 'Odpady zmieszane wyrzucamy do szarych pojemników przy drodze. Prosimy segregować papier, plastik i szkło do oznaczonych pojemników. Odbiór odbywa się wcześnie rano.',
      cs: 'Směsný odpad patří do šedých popelnic u silnice. Prosíme, třiďte papír, plast a sklo do označených nádob. Svoz probíhá brzy ráno.',
    } as Localized,
    ac: {
      en: 'Air conditioning is free to use. Please close windows and doors while it runs, and switch it off when you leave the apartment to save energy.',
      hr: 'Klima uređaj možete koristiti besplatno. Molimo zatvorite prozore i vrata dok radi te ga isključite kad izlazite iz apartmana radi uštede energije.',
      de: 'Die Klimaanlage können Sie kostenlos nutzen. Bitte schließen Sie Fenster und Türen während des Betriebs und schalten Sie sie beim Verlassen aus, um Energie zu sparen.',
      hu: 'A légkondicionáló használata ingyenes. Kérjük, működés közben tartsa csukva az ablakokat és az ajtókat, és energiatakarékosság érdekében kapcsolja ki, amikor elhagyja az apartmant.',
      sk: 'Klimatizáciu môžete používať bezplatne. Prosíme, počas jej chodu zatvárajte okná a dvere a pri odchode z apartmánu ju vypnite, aby ste šetrili energiu.',
      it: 'L\'aria condizionata è gratuita. Vi preghiamo di tenere chiuse porte e finestre mentre è in funzione e di spegnerla quando uscite dall\'appartamento per risparmiare energia.',
      sl: 'Klimatska naprava je brezplačna. Prosimo, med delovanjem zaprite okna in vrata ter jo ob odhodu iz apartmaja izklopite zaradi varčevanja z energijo.',
      pl: 'Klimatyzacja jest bezpłatna. Prosimy zamykać okna i drzwi podczas jej pracy oraz wyłączać ją przy wychodzeniu z apartamentu, aby oszczędzać energię.',
      cs: 'Klimatizace je k dispozici zdarma. Prosíme, během provozu zavírejte okna a dveře a při odchodu z apartmánu ji vypínejte, abyste šetřili energii.',
    } as Localized,
    quietHours: {
      en: 'Please keep noise down between 22:00 and 08:00 out of respect for neighbours and other guests.',
      hr: 'Molimo da između 22:00 i 08:00 budete tihi, iz poštovanja prema susjedima i drugim gostima.',
      de: 'Bitte halten Sie zwischen 22:00 und 08:00 Uhr Ruhe — aus Rücksicht auf Nachbarn und andere Gäste.',
      hu: 'Kérjük, 22:00 és 08:00 óra között tartózkodjon a zajos tevékenységektől, a szomszédok és a többi vendég tiszteletben tartása érdekében.',
      sk: 'Prosíme, medzi 22:00 a 08:00 zachovávajte ticho, z ohľaduplnosti k susedom a ostatným hosťom.',
      it: 'Vi preghiamo di fare silenzio tra le 22:00 e le 08:00, per rispetto dei vicini e degli altri ospiti.',
      sl: 'Prosimo, da ste med 22:00 in 08:00 tiho, iz spoštovanja do sosedov in drugih gostov.',
      pl: 'Prosimy o zachowanie ciszy między 22:00 a 08:00, z szacunku dla sąsiadów i innych gości.',
      cs: 'Prosíme o klid mezi 22:00 a 08:00 z ohledu na sousedy a ostatní hosty.',
    } as Localized,
    houseRules: [
      {
        en: 'No smoking inside the apartments. You are welcome to smoke on the terrace.',
        hr: 'Pušenje u apartmanima nije dopušteno. Slobodno pušite na terasi.',
        de: 'Rauchen in den Apartments ist nicht gestattet. Auf der Terrasse dürfen Sie gerne rauchen.',
        hu: 'Az apartmanokban tilos a dohányzás. A teraszon szívesen elszívhat egy cigarettát.',
        sk: 'V apartmánoch je fajčenie zakázané. Na terase si pokojne môžete zapáliť.',
        it: 'È vietato fumare all\'interno degli appartamenti. Siete invece benvenuti a fumare in terrazza.',
        sl: 'Kajenje v apartmajih ni dovoljeno. Kajenje na terasi je dobrodošlo.',
        pl: 'Palenie w apartamentach jest zabronione. Zapraszamy do palenia na tarasie.',
        cs: 'Kouření uvnitř apartmánů není povoleno. Na terase můžete klidně kouřit.',
      },
      {
        en: 'Please remove sandy or wet shoes before entering.',
        hr: 'Molimo da prije ulaska izujete pješčanu ili mokru obuću.',
        de: 'Bitte ziehen Sie sandige oder nasse Schuhe vor dem Betreten aus.',
        hu: 'Kérjük, belépés előtt vegye le a homokos vagy vizes cipőjét.',
        sk: 'Prosíme, pred vstupom si vyzujte zapiesočenú alebo mokrú obuv.',
        it: 'Vi preghiamo di togliervi le scarpe sabbiose o bagnate prima di entrare.',
        sl: 'Prosimo, da si pred vstopom snamete peščene ali mokre čevlje.',
        pl: 'Prosimy o zdjęcie zapiaszczonego lub mokrego obuwia przed wejściem.',
        cs: 'Prosíme, před vstupem si zujte písečnou nebo mokrou obuv.',
      },
      {
        en: 'Pets are welcome on request — please ask the host in advance.',
        hr: 'Kućni ljubimci su dobrodošli uz najavu — molimo da se unaprijed dogovorite s domaćinom.',
        de: 'Haustiere sind auf Anfrage willkommen — bitte fragen Sie vorab beim Gastgeber.',
        hu: 'Háziállatok előzetes egyeztetés alapján fogadhatók — kérjük, előre jelezze ezt a házigazdának.',
        sk: 'Domáce zvieratá sú vítané na požiadanie — prosíme, vopred sa dohodnite s hostiteľom.',
        it: 'Gli animali domestici sono benvenuti su richiesta — vi preghiamo di avvisare in anticipo l\'host.',
        sl: 'Hišni ljubljenčki so dobrodošli na zahtevo — prosimo, da se vnaprej dogovorite z gostiteljem.',
        pl: 'Zwierzęta domowe są mile widziane po wcześniejszym zgłoszeniu — prosimy uzgodnić to wcześniej z gospodarzem.',
        cs: 'Domácí mazlíčci jsou vítáni po předchozí domluvě — kontaktujte prosím hostitele předem.',
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
        hu: 'Egy hangulatos apartman két fő számára, napos terasszal és gyönyörű kilátással az öbölre — tökéletes pároknak.',
        sk: 'Útulný apartmán pre dvoch so slnečnou terasou a nádherným výhľadom na zátoku — ideálny pre páry.',
        it: 'Un accogliente appartamento per due con una terrazza soleggiata e una splendida vista sulla baia — perfetto per le coppie.',
        sl: 'Prijeten apartma za dve osebi s sončno teraso in čudovitim razgledom na zaliv — popoln za pare.',
        pl: 'Przytulny apartament dla dwojga ze słonecznym tarasem i pięknym widokiem na zatokę — idealny dla par.',
        cs: 'Útulný apartmán pro dva se slunnou terasou a nádherným výhledem na zátoku — ideální pro páry.',
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
        hu: 'Kényelmes, két hálószobás apartman családok vagy kisebb csoportok számára, teljesen felszerelt konyhával és árnyékos terasszal.',
        sk: 'Pohodlný apartmán s dvomi spálňami pre rodiny alebo menšie skupiny, s plne vybavenou kuchyňou a zatienenou terasou.',
        it: 'Un comodo appartamento con due camere da letto per famiglie o piccoli gruppi, con cucina completamente attrezzata e terrazza ombreggiata.',
        sl: 'Udoben apartma z dvema spalnicama za družine ali manjše skupine, s popolnoma opremljeno kuhinjo in senčno teraso.',
        pl: 'Komfortowy apartament z dwiema sypialniami dla rodzin lub małych grup, z w pełni wyposażoną kuchnią i zacienionym tarasem.',
        cs: 'Pohodlný apartmán se dvěma ložnicemi pro rodiny nebo menší skupiny, s plně vybavenou kuchyní a zastíněnou terasou.',
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
        hu: 'Legnagyobb apartmanunk három hálószobával és tengerre néző erkéllyel — bőséges hely az egész családnak.',
        sk: 'Náš najväčší apartmán s tromi spálňami a balkónom s výhľadom na more — dostatok priestoru pre celú rodinu.',
        it: 'Il nostro appartamento più grande con tre camere da letto e un balcone affacciato sul mare — tanto spazio per tutta la famiglia.',
        sl: 'Naš največji apartma s tremi spalnicami in balkonom s pogledom na morje — dovolj prostora za vso družino.',
        pl: 'Nasz największy apartament z trzema sypialniami i balkonem z widokiem na morze — mnóstwo miejsca dla całej rodziny.',
        cs: 'Náš největší apartmán se třemi ložnicemi a balkonem s výhledem na moře — dostatek prostoru pro celou rodinu.',
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
