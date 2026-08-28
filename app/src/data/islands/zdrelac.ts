import type { IslandContent } from '../content'

/* ============================================================================
 *  🏝️  ISLAND: Zdrelac, Pašman  (id: "zdrelac")
 * ----------------------------------------------------------------------------
 *  Placeholder island file — created ahead of real content. Restaurants,
 *  beaches, activities and shops are intentionally empty for now; they'll be
 *  researched and filled in later the same way krk.ts / crikvenica.ts were.
 *
 *  Pašman is reached either via the Biograd na Moru–Tkon car ferry (then a
 *  short drive north to Zdrelac), or by the Zadar–Preko (Ugljan) ferry
 *  followed by the Ždrelac bridge connecting Ugljan to Pašman. Confirm the
 *  current timetable before printing for guests — Jadrolinija schedules
 *  change by season.
 * ========================================================================== */

export const zdrelac: IslandContent = {
  name: 'Zdrelac, Pašman',

  restaurants: [],
  beaches: [],
  activities: [],
  shops: [],
  contacts: [],

  arrivalLinks: [
    {
      id: 'jadrolinija-biograd-tkon',
      label: { en: 'Ferry timetable: Biograd na Moru – Tkon (Jadrolinija)', hr: 'Raspored trajekta: Biograd na Moru – Tkon (Jadrolinija)' },
      url: 'https://www.jadrolinija.hr/',
      icon: 'ferry',
    },
  ],

  arrival: {
    subtitle: {
      en: 'Getting to Zdrelac, Pašman',
      hr: 'Dolazak u Zdrelac, Pašman',
    },
    description: {
      en: 'The most direct route is the car ferry from Biograd na Moru to Tkon, then a short drive north along the island to Zdrelac. Pašman can also be reached by land via Zadar and the island of Ugljan, crossing the Ždrelac bridge.',
      hr: 'Najizravniji put je trajekt za vozila od Biograda na Moru do Tkona, a zatim kratka vožnja prema sjeveru otoka do Zdrelca. Pašman je moguće doseći i kopnenim putem preko Zadra i otoka Ugljana, preko mosta Ždrelac.',
    },
    note: {
      en: 'Ferry schedules change by season — check Jadrolinija before you travel.',
      hr: 'Raspored trajekta mijenja se ovisno o sezoni — provjerite kod Jadrolinije prije putovanja.',
    },
  },
}
