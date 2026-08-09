/**
 * Creates a reviewable candidate list for the Selce guest guide using Places
 * API (New). It intentionally does not edit guide content: a human still
 * decides which places deserve a recommendation.
 *
 * Run locally (the key is never stored in this repo):
 *   GOOGLE_MAPS_API_KEY='your-key' npm run audit:selce
 *
 * Output: tmp/selce-places-audit.json
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const apiKey = process.env.GOOGLE_MAPS_API_KEY
if (!apiKey) {
  throw new Error('Missing GOOGLE_MAPS_API_KEY. Set it only for this command; do not commit it.')
}

const endpoint = 'https://places.googleapis.com/v1/places:searchText'
const fieldMask = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.location',
  'places.primaryType',
  'places.types',
  'places.rating',
  'places.userRatingCount',
  'places.googleMapsUri',
  'places.websiteUri',
  'places.nationalPhoneNumber',
  'places.regularOpeningHours',
  'places.businessStatus',
  'nextPageToken',
].join(',')

const selce = { latitude: 45.1569, longitude: 14.5725 }
const searches = [
  ['restaurants', 'restaurants in Selce, Croatia'],
  ['cafes-bars', 'cafes and bars in Selce, Croatia'],
  ['bakeries', 'bakeries in Selce, Croatia'],
  ['groceries', 'supermarkets and grocery stores in Selce, Croatia'],
  ['health-essentials', 'pharmacies, doctors and essential services in Selce, Croatia'],
  ['beaches', 'beaches in Selce, Croatia'],
  ['activities', 'things to do, attractions and activities in Selce, Croatia'],
  ['water-activities', 'water sports, diving and boat rentals in Selce, Croatia'],
]

async function search(label, textQuery) {
  const places = []
  let pageToken

  // A category can return several result pages. Three pages is enough for a
  // compact town while keeping a full audit inexpensive.
  for (let page = 0; page < 3; page += 1) {
    const body = {
      textQuery,
      languageCode: 'en',
      pageSize: 20,
      // A restriction, rather than a bias, prevents the text search from
      // returning distant lookalike results on Krk or elsewhere in Croatia.
      locationRestriction: { circle: { center: selce, radius: 2000 } },
      ...(pageToken ? { pageToken } : {}),
    }
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fieldMask,
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`${label}: Places API returned ${response.status} ${await response.text()}`)
    }
    const result = await response.json()
    places.push(...(result.places ?? []))
    pageToken = result.nextPageToken
    if (!pageToken) break
    await new Promise((done) => setTimeout(done, 1500))
  }
  return { label, query: textQuery, places }
}

const rawCategories = await Promise.all(searches.map(([label, query]) => search(label, query)))
const byId = new Map()
for (const category of rawCategories) {
  for (const place of category.places) {
    const previous = byId.get(place.id)
    byId.set(place.id, {
      ...place,
      categories: [...new Set([...(previous?.categories ?? []), category.label])],
    })
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  searchArea: { name: 'Selce, Croatia', radiusMetres: 2000, centre: selce },
  searches: rawCategories.map(({ label, query, places }) => ({ label, query, resultCount: places.length })),
  places: [...byId.values()].sort(
    (a, b) => (b.userRatingCount ?? 0) - (a.userRatingCount ?? 0) || (b.rating ?? 0) - (a.rating ?? 0),
  ),
}

const outputFile = resolve('tmp/selce-places-audit.json')
await mkdir(resolve('tmp'), { recursive: true })
await writeFile(outputFile, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${output.places.length} unique candidates to ${outputFile}`)
