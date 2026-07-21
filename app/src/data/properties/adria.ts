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
      hu: 'Az Ön otthona a tenger partján, Crikvenicában, a Kvarner-öböl partvidékén.',
      sk: 'Váš domov pri mori v Crikvenici, na pobreží Kvarneru.',
    },
    intro: {
      en: 'We are glad to have you. Everything you need for a relaxed stay in Crikvenica is right here.',
      hr: 'Drago nam je što ste kod nas. Sve što vam treba za opušten boravak u Crikvenici nalazi se ovdje.',
      de: 'Schön, dass Sie da sind. Alles für einen entspannten Aufenthalt in Crikvenica finden Sie hier.',
      it: 'Siamo felici di avervi qui. Tutto ciò che serve per un soggiorno rilassante a Crikvenica è qui.',
      sl: 'Veseli smo, da ste pri nas. Vse za sproščen oddih v Crikvenici je tukaj.',
      pl: 'Cieszymy się, że jesteście. Wszystko, czego potrzebujecie na spokojny pobyt w Crikvenicy, jest tutaj.',
      cs: 'Jsme rádi, že jste u nás. Vše pro klidný pobyt v Crikvenici najdete zde.',
      hu: 'Örülünk, hogy nálunk vannak. Minden, amire szüksége van egy kellemes crikvenicai tartózkodáshoz, itt megtalálható.',
      sk: 'Tešíme sa, že ste u nás. Všetko, čo potrebujete na pokojný pobyt v Crikvenici, nájdete tu.',
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
      hu: 'A ház előtt ingyenes, privát parkolóhely áll rendelkezésre — apartmanonként egy hely. Kérjük, ne torlaszolja el a szomszédok bejáratait.',
      sk: 'Pred domom je k dispozícii bezplatné súkromné parkovisko — jedno miesto na apartmán. Prosíme, neblokujte vjazdy susedom.',
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
      sk: 'Zmiešaný odpad patrí do sivých nádob pri ceste. Prosíme, trieďte papier, plasty a sklo do označených kontajnerov. Odvoz je skoro ráno.',
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
      sk: 'Klimatizáciu môžete používať zadarmo. Prosíme, počas jej chodu zatvárajte okná a dvere a pri odchode z apartmánu ju vypnite, aby ste šetrili energiu.',
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
      sk: 'Prosíme, medzi 22:00 a 08:00 zachovávajte ticho, z úcty k susedom a ostatným hosťom.',
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
        sk: 'Fajčenie vo vnútri apartmánov nie je povolené. Na terase si však môžete zafajčiť.',
        it: 'È vietato fumare all\'interno degli appartamenti. Siete invece benvenuti a fumare in terrazza.',
        sl: 'Kajenje v apartmajih ni dovoljeno. Kajenje na terasi je dobrodošlo.',
        pl: 'Palenie w apartamentach jest zabronione. Zapraszamy do palenia na tarasie.',
        cs: 'Kouření uvnitř apartmánů není povoleno. Na terase můžete klidně kouřit.',
      },
      {
        en: 'Please remove wet or sandy shoes before entering.',
        hr: 'Molimo da prije ulaska izujete mokru ili pješčanu obuću.',
        de: 'Bitte ziehen Sie nasse oder sandige Schuhe vor dem Betreten aus.',
        hu: 'Kérjük, belépés előtt vegye le a vizes vagy homokos cipőjét.',
        sk: 'Prosíme, pred vstupom si vyzujte mokrú alebo zapieskovanú obuv.',
        it: 'Vi preghiamo di togliervi le scarpe bagnate o sabbiose prima di entrare.',
        sl: 'Prosimo, da si pred vstopom snamete mokre ali peščene čevlje.',
        pl: 'Prosimy o zdjęcie mokrego lub zapiaszczonego obuwia przed wejściem.',
        cs: 'Prosíme, před vstupem si zujte mokrou nebo písečnou obuv.',
      },
      {
        en: 'Pets are welcome on request — please ask the host in advance.',
        hr: 'Kućni ljubimci su dobrodošli uz najavu — molimo da se unaprijed dogovorite s domaćinom.',
        de: 'Haustiere sind auf Anfrage willkommen — bitte fragen Sie vorab beim Gastgeber.',
        hu: 'Háziállatok előzetes egyeztetés alapján fogadhatók — kérjük, előre jelezze ezt a házigazdának.',
        sk: 'Domáce zvieratá sú vítané po dohode — prosíme, dohodnite sa vopred s hostiteľom.',
        it: 'Gli animali domestici sono benvenuti su richiesta — vi preghiamo di avvisare in anticipo l\'host.',
        sl: 'Hišni ljubljenčki so dobrodošli na zahtevo — prosimo, da se vnaprej dogovorite z gostiteljem.',
        pl: 'Zwierzęta domowe są mile widziane po wcześniejszym zgłoszeniu — prosimy uzgodnić to wcześniej z gospodarzem.',
        cs: 'Domácí mazlíčci jsou vítáni po předchozí domluvě — kontaktujte prosím hostitele předem.',
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
        hu: 'Hangulatos, egy hálószobás apartman két fő számára, napos terasszal, néhány perces sétára a tengerparti sétánytól — tökéletes pároknak.',
        sk: 'Útulný jednoizbový apartmán pre dvoch so slnečnou terasou, na krátkej prechádzke od pobrežnej promenády — ideálny pre páry.',
        it: 'Un accogliente monolocale per due con una terrazza soleggiata, a pochi passi dalla passeggiata sul lungomare — perfetto per le coppie.',
        sl: 'Prijeten enosobni apartma za dve osebi s sončno teraso, le nekaj minut hoje od obalne promenade — popoln za pare.',
        pl: 'Przytulny jednopokojowy apartament dla dwojga ze słonecznym tarasem, tuż obok nadmorskiej promenady — idealny dla par.',
        cs: 'Útulný jednopokojový apartmán pro dva se slunnou terasou, jen kousek od přímořské promenády — ideální pro páry.',
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
        hu: 'Kényelmes, két hálószobás apartman családok vagy kisebb csoportok számára, tengerre néző terasszal és teljesen felszerelt konyhával.',
        sk: 'Pohodlný dvojizbový apartmán pre rodiny alebo menšie skupiny, s terasou s výhľadom na more a plne vybavenou kuchyňou.',
        it: 'Un comodo appartamento con due camere da letto per famiglie o piccoli gruppi, con terrazza vista mare e cucina completamente attrezzata.',
        sl: 'Udoben dvosobni apartma za družine ali manjše skupine, s teraso s pogledom na morje in popolnoma opremljeno kuhinjo.',
        pl: 'Komfortowy apartament z dwiema sypialniami dla rodzin lub małych grup, z tarasem z widokiem na morze i w pełni wyposażoną kuchnią.',
        cs: 'Pohodlný apartmán se dvěma ložnicemi pro rodiny nebo menší skupiny, s terasou s výhledem na moře a plně vybavenou kuchyní.',
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
        hu: 'Legnagyobb apartmanunk három hálószobával és tengerre néző erkéllyel — bőséges hely az egész családnak.',
        sk: 'Náš najväčší apartmán s tromi spálňami a balkónom s výhľadom na more — dostatok priestoru pre celú rodinu.',
        it: 'Il nostro appartamento più grande con tre camere da letto e un balcone affacciato sul mare — tanto spazio per tutta la famiglia.',
        sl: 'Naš največji apartma s tremi spalnicami in balkonom s pogledom na morje — dovolj prostora za vso družino.',
        pl: 'Nasz największy apartament z trzema sypialniami i balkonem z widokiem na morze — mnóstwo miejsca dla całej rodziny.',
        cs: 'Náš největší apartmán se třemi ložnicemi a balkonem s výhledem na moře — dostatek prostoru pro celou rodinu.',
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
