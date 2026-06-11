/* ============================================================================
 *  🪧  LANDING PAGE — EDIT ALL CROATIAN COPY HERE
 * ----------------------------------------------------------------------------
 *  This is the single file you edit to change the owner-facing landing/demo
 *  page: the headline, the demo guide preview ("Apartman Sanja — Pašman"),
 *  the value points, the prices, the inquiry form and the footer.
 *
 *  • Submission settings (where the inquiry goes) live in `inquiryConfig`.
 *  • The page is always in Croatian — the visitor is the apartment OWNER.
 * ========================================================================== */

import type { IconName } from '../components/Icon'

/* ---------- Where inquiries are sent ----------
 *
 *  Two ways to receive inquiries — set EITHER one in a `.env` file
 *  (copy `.env.example` to `.env`):
 *
 *  1. ENDPOINT (preferred for production): set VITE_INQUIRY_FORM_ENDPOINT to a
 *     URL that accepts a POST with JSON (Formspree / Formspark / Basin / a
 *     Google Apps Script, …). The form posts there and shows the success
 *     message in-page.
 *         VITE_INQUIRY_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
 *
 *  2. EMAIL FALLBACK: if no endpoint is set, submitting opens the visitor's
 *     email app with a pre-filled message to the address below
 *     (or VITE_INQUIRY_EMAIL).
 */
const FALLBACK_EMAIL = 'tamara@algorise.co.uk' // 👈 address that should receive inquiries

export const inquiryConfig = {
  /** POST endpoint; empty string ⇒ use the mailto fallback. */
  endpoint: (import.meta.env.VITE_INQUIRY_FORM_ENDPOINT as string | undefined)?.trim() ?? '',
  /** Recipient for the mailto fallback. */
  email: (import.meta.env.VITE_INQUIRY_EMAIL as string | undefined)?.trim() || FALLBACK_EMAIL,
  /** URL of the live guest guide opened by the "live demo" button. Defaults to
   *  the bundled demo property at /danica; override with VITE_DEMO_URL. */
  demoUrl: (import.meta.env.VITE_DEMO_URL as string | undefined)?.trim() || '/danica',
}

/* ---------- 1. Top demo banner ---------- */

export const banner = {
  badge: 'DEMO',
  title: 'Demo digitalnog vodiča za apartmane',
  subtitle:
    'Ovako može izgledati vodič koji vaši gosti otvaraju linkom prije dolaska ili skeniranjem QR koda u apartmanu.',
  explanation:
    'U vodiču su Wi‑Fi, kućni red, check‑in/check‑out, parking, plaže, restorani, trajekti, hitni brojevi, lokalne preporuke i link za recenziju nakon boravka. Bez aplikacije i bez prijave za gosta.',
  primaryCta: 'Želim ovakav vodič',
  priceNote: 'Izrada od €149 po sezoni. Posebne cijene za kuće s više apartmana.',
}

/* ---------- 2. Demo guest guide ("Apartman Sanja — Pašman") ----------
 *  Fictional, anonymised sample content. It should read like a REAL apartment
 *  guide. Edit freely — each entry becomes a card in the phone preview.
 */

export const demoGuide = {
  /** Small label above the preview, so owners know this is illustrative. */
  sectionLabel: 'Primjer vodiča',
  sectionTitle: 'Ovako vaši gosti vide vodič',
  sectionIntro:
    'Ovo je primjer za izmišljeni „Apartman Sanja“ na Pašmanu. Vaš vodič radim s vašim podacima, fotografijama i preporukama.',
  /** Header inside the phone frame. */
  propertyName: 'Apartman Sanja',
  propertyPlace: 'Pašman, Hrvatska',
  propertyTagline: 'Vaš mirni kutak uz more.',
  /** Each section shown inside the demo guide. `icon` ∈ IconName. */
  sections: [
    {
      icon: 'sun' as IconName,
      title: 'Dobrodošli',
      body: 'Dobro došli u Apartman Sanja! Drago nam je što ste tu. Sve važne informacije za ugodan boravak nalaze se u ovom vodiču — slobodno ga otvorite kad god vam zatreba.',
    },
    {
      icon: 'wifi' as IconName,
      title: 'Wi‑Fi',
      body: 'Mreža: Apartman_Sanja · Lozinka: more2024. Signal pokriva cijeli apartman i terasu.',
    },
    {
      icon: 'key' as IconName,
      title: 'Check‑in / Check‑out',
      body: 'Dolazak od 15:00, odlazak do 10:00. Ključeve preuzimate u prizemlju — javite okvirno vrijeme dolaska da vas dočekamo.',
    },
    {
      icon: 'rules' as IconName,
      title: 'Kućni red',
      body: 'Tišina od 22:00 do 8:00 · Molimo ne pušiti u zatvorenom · Otpad odvojite prema oznakama · Kućni ljubimci uz prethodni dogovor.',
    },
    {
      icon: 'parking' as IconName,
      title: 'Parking',
      body: 'Besplatno parkirno mjesto ispred kuće, označeno brojem 2. Za drugi automobil javite nam se.',
    },
    {
      icon: 'beach' as IconName,
      title: 'Plaže u blizini',
      body: 'Šljunčana plaža Sovinje — 5 min hoda. Mirna uvala s plitkim ulazom, idealna za djecu — 10 min vožnje.',
    },
    {
      icon: 'restaurant' as IconName,
      title: 'Restorani i kafići',
      body: 'Konoba Pašman — domaća riba i janjetina ispod peke. Caffe bar Val — jutarnja kava uz more, 3 min hoda.',
    },
    {
      icon: 'shop' as IconName,
      title: 'Trgovine, ljekarna i bankomat',
      body: 'Trgovina Studenac — 200 m. Najbliža ljekarna i bankomat u Tkonu (oko 8 km). Preporuka: podignite gotovinu prije dolaska.',
    },
    {
      icon: 'ferry' as IconName,
      title: 'Trajekti i prijevoz',
      body: 'Trajekt Tkon–Biograd vozi više puta dnevno. Vozni red provjerite kod Jadrolinije prije polaska, ljeti zna biti gužve.',
    },
    {
      icon: 'alert' as IconName,
      title: 'Hitni brojevi',
      body: '112 — jedinstveni broj za sve hitne službe. 192 policija · 193 vatrogasci · 194 hitna pomoć.',
    },
    {
      icon: 'star' as IconName,
      title: 'Recenzija nakon boravka',
      body: 'Ako vam je kod nas bilo lijepo, bit ćemo zahvalni na nekoliko riječi. Ovdje stoji link na Booking, Airbnb ili Google — kako vama odgovara.',
    },
  ],
  /** Button that opens the live guide (./app), shown only if demoUrl is set. */
  liveButton: 'Otvori živi demo vodiča',
}

/* ---------- 3. Mid-page CTA ---------- */

export const midCta = {
  title: 'Želite ovakav vodič za svoje goste?',
  body: 'Pripremim vam vodič, QR kod i tekstove tako da gosti sve važne informacije imaju na jednom mjestu.',
  button: 'Pošalji upit',
}

/* ---------- 4. Value section ---------- */

export const value = {
  title: 'Zašto digitalni vodič za apartmane?',
  intro:
    'Manje pitanja, profesionalniji dojam i gosti koji se brže snađu — sve s jednim linkom koji pripremim za vas.',
  points: [
    { icon: 'chat' as IconName, text: 'Manje ponavljanja istih odgovora gostima' },
    { icon: 'sparkles' as IconName, text: 'Profesionalniji prvi dojam' },
    { icon: 'link' as IconName, text: 'Link koji možete poslati prije dolaska' },
    { icon: 'qr' as IconName, text: 'QR kod ili magnet za apartman' },
    { icon: 'pin' as IconName, text: 'Lokalni savjeti koji gostima stvarno trebaju' },
    { icon: 'star' as IconName, text: 'Jednostavan put do recenzije nakon boravka' },
    { icon: 'globe' as IconName, text: 'Mogućnost više jezika' },
  ] as { icon: IconName; text: string }[],
}

/* ---------- 5. Pricing ---------- */

export const pricing = {
  title: 'Cijene izrade',
  intro: 'Jednostavno i bez skrivenih troškova. Plaćate izradu vodiča po sezoni.',
  tiers: [
    { name: 'Jedan apartman', price: 'od €149', unit: '/ sezona', highlight: false },
    { name: 'Kuća s 2–3 apartmana', price: 'od €249', unit: '/ sezona', highlight: true },
    { name: 'Kuća s 4–5 apartmana', price: 'od €349', unit: '/ sezona', highlight: false },
    { name: 'Kuća sa 6+ apartmana', price: 'Ponuda po dogovoru', unit: '', highlight: false },
  ],
  note: 'Točna cijena ovisi o broju apartmana, jezicima i količini sadržaja.',
}

/* ---------- 7. Review feature (ethical wording) ---------- */

export const reviewFeature = {
  title: 'Podsjetnik za recenziju',
  body: 'Na kraju vodiča može se dodati jednostavan podsjetnik za recenziju, s linkom na Booking, Airbnb, Google ili drugi kanal koji koristite.',
}

/* ---------- 6. Inquiry form ---------- */

export const formCopy = {
  sectionTitle: 'Zatražite svoj vodič',
  title: 'Upit za digitalni vodič',
  description:
    'Ispunite nekoliko informacija i javit ću vam se s prijedlogom i cijenom. Cijena ovisi o broju apartmana, lokaciji i količini sadržaja.',
  submit: 'Pošalji upit',
  submitting: 'Šaljem…',
  success: 'Hvala! Upit je poslan. Javit ću vam se uskoro s prijedlogom i cijenom.',
  error: 'Nešto je pošlo po zlu. Pokušajte ponovno ili nam pišite izravno na e‑mail.',
  requiredHint: 'Polja označena s * su obavezna.',
  optional: 'nije obavezno',
}

export const formLabels = {
  fullName: 'Ime i prezime',
  email: 'Email',
  phone: 'Mobitel',
  location: 'Mjesto / otok',
  apartmentCount: 'Broj apartmana',
  propertyType: 'Tip objekta',
  languages: 'Željeni jezici',
  materials: 'Imate li već tekstove i slike?',
  message: 'Poruka',
}

export interface FieldOption {
  value: string
  label: string
}

export const propertyTypeOptions: FieldOption[] = [
  { value: 'Jedan apartman', label: 'Jedan apartman' },
  { value: 'Kuća s više apartmana', label: 'Kuća s više apartmana' },
  { value: 'Vila / kuća za odmor', label: 'Vila / kuća za odmor' },
]

export const languageOptions: FieldOption[] = [
  { value: 'Hrvatski + engleski', label: 'Hrvatski + engleski' },
  { value: 'Hrvatski + engleski + njemački', label: 'Hrvatski + engleski + njemački' },
  { value: 'Hrvatski + engleski + talijanski', label: 'Hrvatski + engleski + talijanski' },
  { value: 'Nisam siguran/sigurna', label: 'Nisam siguran/sigurna' },
]

export const materialsOptions: FieldOption[] = [
  { value: 'Da, imam većinu materijala', label: 'Da, imam većinu materijala' },
  { value: 'Imam nešto, ali trebam pomoć', label: 'Imam nešto, ali trebam pomoć' },
  { value: 'Nemam, želim da se sve pripremi za mene', label: 'Nemam, želim da se sve pripremi za mene' },
]

/** The data captured by the form. */
export interface InquiryData {
  fullName: string
  email: string
  phone: string
  location: string
  apartmentCount: string
  propertyType: string
  languages: string
  materials: string
  message: string
}

/* ---------- Email fallback (mailto) ---------- */

export const emailSubject = 'Upit za digitalni vodič za apartman'

/** Build the pre-filled email body for the mailto fallback. */
export function buildEmailBody(data: InquiryData): string {
  return [
    'Bok, zanima me digitalni vodič za apartman.',
    '',
    `Ime i prezime: ${data.fullName}`,
    `Email: ${data.email}`,
    `Mobitel: ${data.phone}`,
    `Mjesto / otok: ${data.location}`,
    `Broj apartmana: ${data.apartmentCount}`,
    `Tip objekta: ${data.propertyType}`,
    `Željeni jezici: ${data.languages}`,
    `Materijali: ${data.materials}`,
    `Poruka: ${data.message}`,
    '',
  ].join('\n')
}

/* ---------- 8. Footer ---------- */

export const footer = {
  // 👇 Replace these placeholders with your real contact details.
  name: '[IME]',
  email: '[EMAIL]',
  phone: '[TELEFON OPCIONALNO]',
  tagline: 'Digitalni vodiči za privatni smještaj u Hrvatskoj.',
}
