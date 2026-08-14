import type { Property } from '../content'
import { adria } from './adria'

/* ============================================================================
 *  📖  PROPERTY: Apartmani Selce  (slug: "selce")  —  SELCE DEMO
 * ----------------------------------------------------------------------------
 *  Public demo for the Selce guide. It intentionally reuses the standard demo
 *  apartments, Wi-Fi/house information and host details from Apartmani Adria;
 *  only the welcome copy and surrounding location change here.
 * ========================================================================== */

export const selceDemo: Property = {
  ...adria,
  island: 'selce',
  property: {
    name: 'Apartmani Selce',
    town: 'Selce',
    tagline: {
      en: 'Your home by the sea in Selce, on the Kvarner coast.',
      hr: 'Vaš dom uz more u Selcu, na kvarnerskoj obali.',
      de: 'Ihr Zuhause am Meer in Selce, an der Kvarner-Küste.',
      it: 'La vostra casa sul mare a Selce, sulla costa del Quarnero.',
      sl: 'Vaš dom ob morju v Selcah, na kvarnerski obali.',
      pl: 'Wasz dom nad morzem w Selce, na wybrzeżu Kvarneru.',
      cs: 'Váš domov u moře v Selci, na pobřeží Kvarneru.',
      hu: 'Az Ön otthona a tenger partján, Selcében, a Kvarner-öböl partvidékén.',
      sk: 'Váš domov pri mori v Selciach, na pobreží Kvarneru.',
    },
    intro: {
      en: 'We are glad to have you. Everything you need for a relaxed stay in Selce is right here.',
      hr: 'Drago nam je što ste kod nas. Sve što vam treba za opušten boravak u Selcu nalazi se ovdje.',
      de: 'Schön, dass Sie da sind. Alles für einen entspannten Aufenthalt in Selce finden Sie hier.',
      it: 'Siamo felici di avervi qui. Tutto ciò che serve per un soggiorno rilassante a Selce è qui.',
      sl: 'Veseli smo, da ste pri nas. Vse za sproščen oddih v Selcah je tukaj.',
      pl: 'Cieszymy się, że jesteście. Wszystko, czego potrzebujecie na spokojny pobyt w Selce, jest tutaj.',
      cs: 'Jsme rádi, že jste u nás. Vše pro klidný pobyt v Selci najdete zde.',
      hu: 'Örülünk, hogy nálunk vannak. Minden, amire szüksége van egy kellemes selcei tartózkodáshoz, itt megtalálható.',
      sk: 'Tešíme sa, že ste u nás. Všetko, čo potrebujete na pokojný pobyt v Selciach, nájdete tu.',
    },
  },
}
