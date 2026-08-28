import type { Property } from '../content'
import { adria } from './adria'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Zdrelac  (slug: "zdrelac")  —  ZDRELAC, PAŠMAN DEMO
 * ----------------------------------------------------------------------------
 *  Public demo for the Zdrelac guide. It intentionally reuses the standard
 *  demo apartments, Wi-Fi/house information and host details from Apartmani
 *  Adria as placeholders — only the welcome copy and surrounding location
 *  change here. Replace the placeholder wifi/houseRules once real details are
 *  known; the island file (src/data/islands/zdrelac.ts) still needs real
 *  restaurants, beaches, activities and shops.
 * ========================================================================== */

export const zdrelacDemo: Property = {
  ...adria,
  island: 'zdrelac',
  property: {
    name: 'Apartmani Zdrelac',
    town: 'Zdrelac',
    tagline: {
      en: 'Your home by the sea in Zdrelac, on the island of Pašman.',
      hr: 'Vaš dom uz more u Zdrelcu, na otoku Pašmanu.',
      de: 'Ihr Zuhause am Meer in Zdrelac, auf der Insel Pašman.',
      it: 'La vostra casa sul mare a Zdrelac, sull’isola di Pašman.',
      sl: 'Vaš dom ob morju v Zdrelcu, na otoku Pašman.',
      pl: 'Wasz dom nad morzem w Zdrelacu, na wyspie Pašman.',
      cs: 'Váš domov u moře ve Zdrelaci, na ostrově Pašman.',
      hu: 'Az Ön otthona a tenger partján, Zdrelacban, Pašman szigetén.',
      sk: 'Váš domov pri mori v Zdrelaci, na ostrove Pašman.',
    },
    intro: {
      en: 'We are glad to have you. Everything you need for a relaxed stay in Zdrelac is right here.',
      hr: 'Drago nam je što ste kod nas. Sve što vam treba za opušten boravak u Zdrelcu nalazi se ovdje.',
      de: 'Schön, dass Sie da sind. Alles für einen entspannten Aufenthalt in Zdrelac finden Sie hier.',
      it: 'Siamo felici di avervi qui. Tutto ciò che serve per un soggiorno rilassante a Zdrelac è qui.',
      sl: 'Veseli smo, da ste pri nas. Vse za sproščen oddih v Zdrelcu je tukaj.',
      pl: 'Cieszymy się, że jesteście. Wszystko, czego potrzebujecie na spokojny pobyt w Zdrelacu, jest tutaj.',
      cs: 'Jsme rádi, že jste u nás. Vše pro klidný pobyt ve Zdrelaci najdete zde.',
      hu: 'Örülünk, hogy nálunk vannak. Minden, amire szüksége van egy kellemes zdrelaci tartózkodáshoz, itt megtalálható.',
      sk: 'Tešíme sa, že ste u nás. Všetko, čo potrebujete na pokojný pobyt v Zdrelaci, nájdete tu.',
    },
  },
}
