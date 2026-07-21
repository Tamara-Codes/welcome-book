import type { Localized } from '../../i18n/types'
import type { Property } from '../content'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Hošnjak  (slug: "apartmanihosnjak")
 *  Owner: Barbara Hošnjak
 * ----------------------------------------------------------------------------
 *  Per Barbara's requests:
 *    • NO apartments/prices page         (apartments: [])
 *    • NO check-in / check-out cards     (omitted)
 *    • NO parking card                   (omitted)
 *    • NO separate quiet-hours card      (covered in house rules instead)
 *    • Only a Google review link         (no Booking / Airbnb)
 *
 *  ⚠️ STILL PLACEHOLDER — replace before going live:
 *    • host phone / whatsapp / email
 *    • AC card text (generic default kept)
 *    • Google review URL (currently a name search, not her real listing)
 *  ℹ️ HR/DE translations of the house rules & trash text were added by Claude
 *    from Barbara's English/Croatian originals — please review.
 * ========================================================================== */

export const apartmaniHosnjak: Property = {
  /* The island this building sits on — a key in `islands` (src/data/content.ts).
     Its amenities are merged into this guide automatically. */
  island: 'krk',

  /* ---------- Property & host ---------- */
  property: {
    name: 'Apartmani Hošnjak',
    tagline: {
      en: 'Your home by the Adriatic on the island of Krk.',
      hr: 'Vaš dom uz Jadran na otoku Krku.',
      de: 'Ihr Zuhause an der Adria auf der Insel Krk.',
      it: 'La vostra casa sull’Adriatico sull’isola di Krk.',
      sl: 'Vaš dom ob Jadranu na otoku Krk.',
      pl: 'Wasz dom nad Adriatykiem na wyspie Krk.',
      cs: 'Váš domov u Jaderského moře na ostrově Krk.',
      hu: 'Az Ön otthona az Adria partján, Krk szigetén.',
      sk: 'Váš domov pri Jadranskom mori na ostrove Krk.',
    },
  },

  host: {
    name: 'Andreja',
    phone: '+385 98 656 667',
    whatsapp: '38598656667',
    email: 'info@apartmani-hosnjak.hr',
    note: {
      en: 'When you get in touch, please mention your apartment number and your name.',
      hr: 'Molimo Vas da prilikom javljanja navedete broj apartmana i Vaše ime.',
      de: 'Bitte nennen Sie bei der Kontaktaufnahme Ihre Apartmentnummer und Ihren Namen.',
      hu: 'Kapcsolatfelvételkor kérjük, adja meg az apartman számát és a nevét.',
      sk: 'Pri kontaktovaní nás prosím uveďte číslo svojho apartmánu a svoje meno.',
      it: 'Quando ci contattate, vi preghiamo di indicare il numero del vostro appartamento e il vostro nome.',
      sl: 'Ko nas kontaktirate, prosimo navedite številko svojega apartmaja in svoje ime.',
      pl: 'Kontaktując się z nami, prosimy o podanie numeru apartamentu oraz imienia i nazwiska.',
      cs: 'Při kontaktování nás prosím uveďte číslo vašeho apartmánu a své jméno.',
    },
  },

  /* ---------- Apartment info / house rules ---------- */
  apartmentInfo: {
    wifi: {
      network: 'APPHošnjak',
      password: 'DORIAN23',
    },
    // check-in / check-out / parking / quiet-hours intentionally omitted (hidden).

    trash: {
      en: 'The island of Krk is an Eco Island with an environmentally based municipal waste system. Please separate your waste into the designated bins in the yard, following the guide you have in the kitchen.',
      hr: 'Otok Krk je Eko Otok, sa ekološki zasnovanim sustavom zbrinjavanja komunalnog otpada. Molimo da odvajate otpad u određene kante u dvorištu, prema vodiču koji imate u kuhinji.',
      de: 'Die Insel Krk ist eine Öko-Insel mit einem umweltfreundlichen System der kommunalen Abfallentsorgung. Bitte trennen Sie den Abfall in die dafür vorgesehenen Tonnen im Hof, gemäß der Anleitung, die Sie in der Küche finden.',
      hu: 'Krk szigete Öko-sziget, környezetbarát szemétgazdálkodási rendszerrel. Kérjük, a hulladékot a konyhában található útmutató szerint válogassa szét az udvaron kijelölt kukákba.',
      sk: 'Ostrov Krk je Eko ostrov s ekologicky založeným systémom nakladania s komunálnym odpadom. Prosíme, triedťe odpad do určených nádob na dvore podľa návodu, ktorý máte v kuchyni.',
      it: 'L\'isola di Krk è un\'Isola Ecologica con un sistema di gestione dei rifiuti urbani basato su criteri ambientali. Vi preghiamo di separare i rifiuti nei bidoni designati in cortile, seguendo la guida che trovate in cucina.',
      sl: 'Otok Krk je Eko otok z okolju prijaznim sistemom ravnanja s komunalnimi odpadki. Prosimo, ločujte odpadke v za to namenjene zabojnike na dvorišču, po navodilih, ki jih imate v kuhinji.',
      pl: 'Wyspa Krk jest Wyspą Ekologiczną z systemem gospodarki odpadami komunalnymi opartym na zasadach ekologicznych. Prosimy o segregację odpadów do wyznaczonych pojemników na podwórku, zgodnie z instrukcją dostępną w kuchni.',
      cs: 'Ostrov Krk je Eko ostrov s ekologicky založeným systémem nakládání s komunálním odpadem. Prosíme, třiďte odpad do určených nádob na dvoře podle návodu, který máte v kuchyni.',
    } as Localized,
    ac: {
      en: 'Air conditioning is free to use. Please close windows and doors while it runs, and switch it off when you leave the apartment to save energy.',
      hr: 'Klima uređaj možete koristiti besplatno. Molimo zatvorite prozore i vrata dok radi te ga isključite kad izlazite iz apartmana radi uštede energije.',
      de: 'Die Klimaanlage können Sie kostenlos nutzen. Bitte schließen Sie Fenster und Türen während des Betriebs und schalten Sie sie beim Verlassen aus, um Energie zu sparen.',
      hu: 'A légkondicionáló használata ingyenes. Kérjük, működés közben tartsa csukva az ablakokat és az ajtókat, és energiatakarékosság érdekében kapcsolja ki, amikor elhagyja az apartmant.',
      sk: 'Klimatizáciu môžete používať bezplatne. Prosíme, počas prevádzky zatvárajte okná a dvere a pri odchode z apartmánu ju vypnite, aby ste šetrili energiu.',
      it: 'L\'aria condizionata è gratuita. Vi preghiamo di tenere chiuse porte e finestre mentre è in funzione e di spegnerla quando uscite dall\'appartamento per risparmiare energia.',
      sl: 'Klimatska naprava je brezplačna. Prosimo, med delovanjem zaprite okna in vrata ter jo ob odhodu iz apartmaja izklopite zaradi varčevanja z energijo.',
      pl: 'Klimatyzacja jest bezpłatna. Prosimy zamykać okna i drzwi podczas jej pracy oraz wyłączać ją przy wychodzeniu z apartamentu, aby oszczędzać energię.',
      cs: 'Klimatizace je k dispozici zdarma. Prosíme, během provozu zavírejte okna a dveře a při odchodu z apartmánu ji vypínejte, abyste šetřili energii.',
    } as Localized,
    houseRules: [
      {
        en: 'Please, no smoking inside the apartment. You are welcome to smoke at the terrace/balcony.',
        hr: 'Molimo, pušenje unutar apartmana nije dopušteno. Slobodno pušite na terasi/balkonu.',
        de: 'Bitte rauchen Sie nicht im Inneren des Apartments. Auf der Terrasse/dem Balkon dürfen Sie gerne rauchen.',
        hu: 'Kérjük, ne dohányozzon az apartman belsejében. A teraszon/erkélyen szívesen elszívhat egy cigarettát.',
        sk: 'Prosíme, nefajčite vo vnútri apartmánu. Na terase/balkóne môžete pokojne fajčiť.',
        it: 'Vi preghiamo di non fumare all\'interno dell\'appartamento. Siete invece benvenuti a fumare in terrazza/sul balcone.',
        sl: 'Prosimo, ne kadite v notranjosti apartmaja. Kajenje na terasi/balkonu je dobrodošlo.',
        pl: 'Uprzejmie prosimy o niepalenie wewnątrz apartamentu. Zapraszamy do palenia na tarasie/balkonie.',
        cs: 'Prosíme, nekuřte uvnitř apartmánu. Na terase/balkonu můžete klidně kouřit.',
      },
      {
        en: 'Please do not enter to the house/apartment with sandy or wet shoes, in the respect to other guests please keep the hallway/staircase clean.',
        hr: 'Molimo da ne ulazite u kuću/apartman s pješčanom ili mokrom obućom; iz poštovanja prema drugim gostima molimo održavajte hodnik/stubište čistim.',
        de: 'Bitte betreten Sie das Haus/Apartment nicht mit sandigen oder nassen Schuhen; aus Rücksicht auf andere Gäste halten Sie bitte Flur/Treppenhaus sauber.',
        hu: 'Kérjük, ne lépjen be a házba/apartmanba homokos vagy vizes cipőben; a többi vendég tiszteletben tartása érdekében tartsa tisztán a folyosót/lépcsőházat.',
        sk: 'Prosíme, nevstupujte do domu/apartmánu s piesočnatou alebo mokrou obuvou; z úcty k ostatným hosťom udržiavajte chodbu/schodisko čisté.',
        it: 'Vi preghiamo di non entrare in casa/nell\'appartamento con scarpe sabbiose o bagnate; per rispetto degli altri ospiti, vi chiediamo di mantenere pulito il corridoio/le scale.',
        sl: 'Prosimo, ne vstopajte v hišo/apartma s peščenimi ali mokrimi čevlji; iz spoštovanja do drugih gostov prosimo, da hodnik/stopnišče ohranjate čisto.',
        pl: 'Prosimy nie wchodzić do domu/apartamentu w zapiaszczonym lub mokrym obuwiu; z szacunku dla innych gości prosimy o utrzymywanie korytarza/klatki schodowej w czystości.',
        cs: 'Prosíme, nevstupujte do domu/apartmánu v písečné nebo mokré obuvi; z ohledu na ostatní hosty udržujte prosím chodbu/schodiště čisté.',
      },
      {
        en: 'We kindly remind our dear guests that the inventory and equipment of apartment are the property of „Apartments Hošnjak“, so kitchenware, bed linen, blankets and towels are intended for use exclusively within the apartment. Any taking and usage inventory / equipment out of the building (e.g. at the beach) will be charged extra.',
        hr: 'Ljubazno podsjećamo naše drage goste da su inventar i oprema apartmana vlasništvo „Apartmana Hošnjak“, stoga su posuđe, posteljina, deke i ručnici namijenjeni korištenju isključivo unutar apartmana. Svako iznošenje i korištenje inventara/opreme izvan zgrade (npr. na plaži) bit će dodatno naplaćeno.',
        de: 'Wir erinnern unsere lieben Gäste freundlich daran, dass Inventar und Ausstattung des Apartments Eigentum von „Apartments Hošnjak“ sind. Geschirr, Bettwäsche, Decken und Handtücher sind ausschließlich zur Nutzung innerhalb des Apartments bestimmt. Das Mitnehmen und Verwenden von Inventar/Ausstattung außerhalb des Gebäudes (z. B. am Strand) wird zusätzlich berechnet.',
        hu: 'Szeretnénk kedves vendégeinket emlékeztetni, hogy az apartman berendezése és felszerelése az „Apartmani Hošnjak” tulajdona, ezért az edények, ágynemű, takarók és törölközők kizárólag az apartmanon belüli használatra szolgálnak. Ezek épületen kívüli (pl. strandra) elvitele és használata külön díjköteles.',
        sk: 'Radi by sme našich milých hostí upozornili, že vybavenie a zariadenie apartmánu je majetkom spoločnosti „Apartmani Hošnjak”, a preto sú riad, posteľná bielizeň, deky a uteráky určené výhradne na použitie vnútri apartmánu. Akékoľvek vynášanie a používanie vybavenia/zariadenia mimo budovy (napr. na pláži) bude účtované osobitne.',
        it: 'Ricordiamo gentilmente ai nostri cari ospiti che l\'inventario e le attrezzature dell\'appartamento sono di proprietà di „Apartmani Hošnjak”, pertanto stoviglie, biancheria da letto, coperte e asciugamani sono destinati esclusivamente all\'uso all\'interno dell\'appartamento. Qualsiasi prelievo e utilizzo dell\'inventario/delle attrezzature al di fuori dell\'edificio (ad es. in spiaggia) sarà addebitato separatamente.',
        sl: 'Naše drage goste prijazno opozarjamo, da sta inventar in oprema apartmaja last podjetja „Apartmani Hošnjak”, zato so posoda, posteljnina, odeje in brisače namenjeni izključno uporabi znotraj apartmaja. Vsakršno odnašanje in uporabo inventarja/opreme izven stavbe (npr. na plažo) bomo dodatno zaračunali.',
        pl: 'Uprzejmie przypominamy naszym drogim gościom, że wyposażenie apartamentu jest własnością „Apartmani Hošnjak”, dlatego naczynia, pościel, koce i ręczniki są przeznaczone wyłącznie do użytku wewnątrz apartamentu. Wynoszenie i używanie wyposażenia poza budynkiem (np. na plaży) będzie dodatkowo płatne.',
        cs: 'Rádi bychom naše milé hosty upozornili, že vybavení apartmánu je majetkem společnosti „Apartmani Hošnjak”, a proto je nádobí, ložní prádlo, deky a ručníky určeno výhradně k použití uvnitř apartmánu. Jakékoli vynášení a používání vybavení mimo budovu (např. na pláž) bude účtováno zvlášť.',
      },
      {
        en: 'Outside visitors (friends, relatives) are allowed with the permission of the landlord, but not from 10pm to 8am.',
        hr: 'Posjetitelji izvana (prijatelji, rodbina) dopušteni su uz dopuštenje vlasnika, ali ne od 22:00 do 08:00.',
        de: 'Besucher von außerhalb (Freunde, Verwandte) sind mit Erlaubnis des Vermieters gestattet, jedoch nicht von 22:00 bis 08:00 Uhr.',
        hu: 'Kívülről érkező látogatók (barátok, rokonok) a tulajdonos engedélyével fogadhatók, kivéve 22:00 és 08:00 óra között.',
        sk: 'Návštevy zvonku (priatelia, príbuzní) sú povolené so súhlasom majiteľa, avšak nie v čase od 22:00 do 08:00.',
        it: 'I visitatori esterni (amici, parenti) sono ammessi con il permesso del proprietario, ma non dalle 22:00 alle 08:00.',
        sl: 'Zunanji obiskovalci (prijatelji, sorodniki) so dovoljeni z dovoljenjem lastnika, vendar ne med 22:00 in 08:00.',
        pl: 'Goście z zewnątrz (przyjaciele, rodzina) są dozwoleni za zgodą właściciela, ale nie w godzinach od 22:00 do 08:00.',
        cs: 'Návštěvy zvenčí (přátelé, příbuzní) jsou povoleny se svolením majitele, avšak ne v době od 22:00 do 08:00.',
      },
      {
        en: 'For pleasant stay of all our guests, peace and quiet should be from 10pm to 8am.',
        hr: 'Za ugodan boravak svih naših gostiju, mir i tišina trebaju biti od 22:00 do 08:00.',
        de: 'Für einen angenehmen Aufenthalt aller Gäste sollte von 22:00 bis 08:00 Uhr Ruhe herrschen.',
        hu: 'Minden vendégünk kellemes tartózkodása érdekében 22:00 és 08:00 óra között csendet kérünk.',
        sk: 'Pre príjemný pobyt všetkých našich hostí prosíme o pokoj a ticho od 22:00 do 08:00.',
        it: 'Per un soggiorno piacevole di tutti i nostri ospiti, vi preghiamo di mantenere silenzio dalle 22:00 alle 08:00.',
        sl: 'Za prijetno bivanje vseh naših gostov naj bo mir in tišina od 22:00 do 08:00.',
        pl: 'Dla przyjemnego pobytu wszystkich naszych gości prosimy o zachowanie ciszy w godzinach od 22:00 do 08:00.',
        cs: 'Pro příjemný pobyt všech našich hostů prosíme o klid a ticho od 22:00 do 08:00.',
      },
      {
        en: 'Pets are not allowed.',
        hr: 'Kućni ljubimci nisu dozvoljeni.',
        de: 'Haustiere sind nicht erlaubt.',
        hu: 'Háziállatok nem megengedettek.',
        sk: 'Domáce zvieratá nie sú povolené.',
        it: 'Gli animali domestici non sono ammessi.',
        sl: 'Hišni ljubljenčki niso dovoljeni.',
        pl: 'Zwierzęta domowe nie są dozwolone.',
        cs: 'Domácí mazlíčci nejsou povoleni.',
      },
    ] as Localized[],
  },

  /* ---------- Apartments & prices ----------
     Barbara opted OUT of the prices/apartments page. Leaving this empty hides
     the "Prices" tab and the home-screen tile automatically. */
  apartments: [],

  /* ---------- Review links ----------
     Only Google, per Barbara's request (no Booking / Airbnb).
     ⚠️ TODO: replace the URL with Barbara's real Google place/review link so it
     points straight to Apartmani Hošnjak's listing. */
  reviews: [
    { id: 'google', label: 'Google', url: 'https://www.google.com/maps/search/?api=1&query=Apartmani+Ho%C5%A1njak+Krk' },
  ],
}
