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
    },
  },

  host: {
    name: 'Barbara Hošnjak',
    phone: '+385 98 656 667',
    whatsapp: '38598656667',
    email: 'info@apartmani-hosnjak.hr',
    note: {
      en: 'When you get in touch, please mention your apartment number and your name.',
      hr: 'Molimo Vas da prilikom javljanja navedete broj apartmana i Vaše ime.',
      de: 'Bitte nennen Sie bei der Kontaktaufnahme Ihre Apartmentnummer und Ihren Namen.',
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
    } as Localized,
    ac: {
      en: 'Air conditioning is free to use. Please close windows and doors while it runs, and switch it off when you leave the apartment to save energy.',
      hr: 'Klima uređaj možete koristiti besplatno. Molimo zatvorite prozore i vrata dok radi te ga isključite kad izlazite iz apartmana radi uštede energije.',
      de: 'Die Klimaanlage können Sie kostenlos nutzen. Bitte schließen Sie Fenster und Türen während des Betriebs und schalten Sie sie beim Verlassen aus, um Energie zu sparen.',
    } as Localized,
    houseRules: [
      {
        en: 'Please, no smoking inside the apartment. You are welcome to smoke at the terrace/balcony.',
        hr: 'Molimo, pušenje unutar apartmana nije dopušteno. Slobodno pušite na terasi/balkonu.',
        de: 'Bitte rauchen Sie nicht im Inneren des Apartments. Auf der Terrasse/dem Balkon dürfen Sie gerne rauchen.',
      },
      {
        en: 'Please do not enter to the house/apartment with sandy or wet shoes, in the respect to other guests please keep the hallway/staircase clean.',
        hr: 'Molimo da ne ulazite u kuću/apartman s pješčanom ili mokrom obućom; iz poštovanja prema drugim gostima molimo održavajte hodnik/stubište čistim.',
        de: 'Bitte betreten Sie das Haus/Apartment nicht mit sandigen oder nassen Schuhen; aus Rücksicht auf andere Gäste halten Sie bitte Flur/Treppenhaus sauber.',
      },
      {
        en: 'We kindly remind our dear guests that the inventory and equipment of apartment are the property of „Apartments Hošnjak“, so kitchenware, bed linen, blankets and towels are intended for use exclusively within the apartment. Any taking and usage inventory / equipment out of the building (e.g. at the beach) will be charged extra.',
        hr: 'Ljubazno podsjećamo naše drage goste da su inventar i oprema apartmana vlasništvo „Apartmana Hošnjak“, stoga su posuđe, posteljina, deke i ručnici namijenjeni korištenju isključivo unutar apartmana. Svako iznošenje i korištenje inventara/opreme izvan zgrade (npr. na plaži) bit će dodatno naplaćeno.',
        de: 'Wir erinnern unsere lieben Gäste freundlich daran, dass Inventar und Ausstattung des Apartments Eigentum von „Apartments Hošnjak“ sind. Geschirr, Bettwäsche, Decken und Handtücher sind ausschließlich zur Nutzung innerhalb des Apartments bestimmt. Das Mitnehmen und Verwenden von Inventar/Ausstattung außerhalb des Gebäudes (z. B. am Strand) wird zusätzlich berechnet.',
      },
      {
        en: 'Outside visitors (friends, relatives) are allowed with the permission of the landlord, but not from 10pm to 8am.',
        hr: 'Posjetitelji izvana (prijatelji, rodbina) dopušteni su uz dopuštenje vlasnika, ali ne od 22:00 do 08:00.',
        de: 'Besucher von außerhalb (Freunde, Verwandte) sind mit Erlaubnis des Vermieters gestattet, jedoch nicht von 22:00 bis 08:00 Uhr.',
      },
      {
        en: 'For pleasant stay of all our guests, peace and quiet should be from 10pm to 8am.',
        hr: 'Za ugodan boravak svih naših gostiju, mir i tišina trebaju biti od 22:00 do 08:00.',
        de: 'Für einen angenehmen Aufenthalt aller Gäste sollte von 22:00 bis 08:00 Uhr Ruhe herrschen.',
      },
      {
        en: 'Pets are not allowed.',
        hr: 'Kućni ljubimci nisu dozvoljeni.',
        de: 'Haustiere sind nicht erlaubt.',
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
