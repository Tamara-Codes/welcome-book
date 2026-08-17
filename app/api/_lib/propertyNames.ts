/** slug → display name, for turning Umami page paths into readable property
 *  names in the report. Deliberately NOT imported from src/data/content —
 *  Vercel's Node runtime can't resolve relative imports that reach outside
 *  api/ (an ESM extension-resolution issue), so this is kept as its own tiny,
 *  manually-updated map instead. Update this alongside `properties` in
 *  src/data/content.ts whenever a property is added, renamed, or removed. */
export const PROPERTY_NAMES: Record<string, string> = {
  mila: 'Apartmani Mila',
  apartmanihosnjak: 'Apartmani Hošnjak',
  adria: 'Apartmani Adria',
  selce: 'Apartmani Selce',
  'apartmani-sonia': 'Apartmani Sonia',
  'beach-villa-selce': 'Beach Villa Selce',
  zdrelac: 'Apartmani Zdrelac',
}
