/* ============================================================================
 *  🪧  LANDING PAGE — EDIT ALL CROATIAN COPY HERE
 * ----------------------------------------------------------------------------
 *  This is the single file you edit to change the owner-facing landing page:
 *  the headline, the "how it works" steps, the demo preview ("Apartmani Mila —
 *  Njivice"), the value points, the prices, the contact details and the tiny
 *  inquiry form.
 *
 *  • Submission settings (where the inquiry goes) live in `inquiryConfig`.
 *  • The page is always in Croatian — the visitor is the apartment OWNER.
 * ========================================================================== */

import type { IconName } from '../components/Icon'

/* ---------- Where inquiries are sent ----------
 *
 *  The form is delivered via Web3Forms (https://web3forms.com): the message is
 *  POSTed in the background and arrives in your inbox — no email app opens for
 *  the visitor.
 *
 *  👉 PASTE YOUR WEB3FORMS ACCESS KEY BELOW.
 *     1. Go to https://web3forms.com
 *     2. Enter the email that should receive inquiries → you get an access key
 *        (a UUID like "a1b2c3d4-...").
 *     3. Paste it into WEB3FORMS_ACCESS_KEY here (or set VITE_WEB3FORMS_KEY in
 *        a `.env` file / Vercel env var — that takes precedence).
 *
 *  The access key is safe to keep in this file: Web3Forms keys are designed to
 *  live in front-end code and only allow submitting the form to your inbox.
 *
 *  If no key is configured, the form falls back to opening the visitor's email
 *  app with a pre-filled message (and says so honestly on submit).
 */
const WEB3FORMS_ACCESS_KEY = '9e0122d0-526c-4631-bb70-b3cfe8d96fc0' // 👈 PASTE YOUR WEB3FORMS ACCESS KEY HERE
const FALLBACK_EMAIL = 'codewithtamara@gmail.com' // address used by the mailto fallback

export const inquiryConfig = {
  /** Web3Forms access key; empty string ⇒ use the mailto fallback. */
  accessKey: (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() || WEB3FORMS_ACCESS_KEY,
  /** Web3Forms submit endpoint. */
  endpoint: 'https://api.web3forms.com/submit',
  /** Recipient for the mailto fallback. */
  email: (import.meta.env.VITE_INQUIRY_EMAIL as string | undefined)?.trim() || FALLBACK_EMAIL,
  /** URL of the live guest guide opened by the "live demo" button. Defaults to
   *  the bundled demo property at /mila; override with VITE_DEMO_URL. */
  demoUrl: (import.meta.env.VITE_DEMO_URL as string | undefined)?.trim() || '/mila',
}

/* ---------- Brand + top navigation ---------- */

export const brand = {
  name: 'Welcome Book',
  tagline: 'Digitalni vodiči za privatni smještaj',
}

export const nav = [
  { label: 'Demo', href: '#demo' },
  { label: 'Kako radi', href: '#kako' },
  { label: 'Cijene', href: '#cijene' },
  { label: 'Kontakt', href: '#kontakt' },
]

/* ---------- 1. Hero ---------- */

export const hero = {
  eyebrow: 'Digitalni vodič za goste',
  /** The headline is split so one word can be set in italic serif. */
  titleLead: 'Sve što vaši gosti trebaju,',
  titleEmphasis: 'na jednom mjestu.',
  subtitle:
    'Elegantan digitalni vodič koji gosti otvaraju linkom prije dolaska ili skeniranjem QR koda u apartmanu — Wi-Fi, kućni red, plaže, restorani i lokalni savjeti, i nježan podsjetnik gostima da ostave recenziju. Bez aplikacije, bez prijave.',
  primaryCta: 'Isprobaj demo',
  secondaryCta: 'Kontaktirajte me',
  trust: 'Izrada od €149 po sezoni · QR kod uključen · više jezika',
}

/* ---------- 2. Value lede ---------- */

export const value = {
  eyebrow: 'Zašto vodič',
  title: 'Manje pitanja. Bolji prvi dojam.',
  intro:
    'Umjesto poruka u svako doba i papira po ladicama, gosti dobiju jedan uredan link s odgovorima na sve. Vama ostaje više vremena, a boravak djeluje promišljeno od prve minute.',
  points: [
    {
      icon: 'chat' as IconName,
      text: 'Manje ponavljanja',
      desc: 'Gosti sami nađu Wi-Fi, parking i kućni red — bez poruka u svako doba dana i noći.',
    },
    {
      icon: 'sparkles' as IconName,
      text: 'Profesionalniji dojam',
      desc: 'Uredan, brendiran vodič umjesto papira po ladicama i PDF-ova u mailu.',
    },
    {
      icon: 'globe' as IconName,
      text: 'Više jezika',
      desc: 'Strani gosti dobiju sadržaj na svom jeziku — engleski, njemački, talijanski i drugi.',
    },
    {
      icon: 'star' as IconName,
      text: 'Lakši put do recenzije',
      desc: 'Nježan podsjetnik na kraju boravka vodi gosta do recenzije na Booking, Airbnb ili Google.',
    },
  ] as { icon: IconName; text: string; desc: string }[],
}

/* ---------- 3. How it works ---------- */

export const howItWorks = {
  eyebrow: 'Kako radi',
  title: 'Od podataka do gotovog vodiča u tri koraka.',
  steps: [
    {
      icon: 'chat' as IconName,
      title: 'Unos podataka',
      body: 'Javite mi osnovne informacije o apartmanu. Ako već imate tekstove i slike, pošaljete i njih. Ako ne, nema problema, pomoći ću i s tim.',
    },
    {
      icon: 'sparkles' as IconName,
      title: 'Izrada vodiča',
      body: 'Složim uredan, pregledan vodič s vašim podacima i fotografijama te pripremam QR kod za apartman.',
    },
    {
      icon: 'qr' as IconName,
      title: 'Gost skenira',
      body: 'Gosti otvore link ili skeniraju QR kod i odmah imaju sve pred sobom — bez aplikacije i bez prijave.',
    },
  ],
}

/* ---------- 4. Demo guest guide ("Apartmani Mila — Njivice") ----------
 *  Fictional, anonymised sample content. It should read like a REAL apartment
 *  guide. Edit freely — each entry becomes a card in the phone preview.
 */

export const demoGuide = {
  eyebrow: 'Primjer vodiča',
  sectionTitle: 'Ovako vaši gosti vide vodič',
  sectionIntro:
    'Ovo je primjer vodiča za „Apartmani Mila“ u Njivicama na Krku. Vaš radim s vašim podacima, fotografijama i preporukama — ovo je samo prikaz.',
  /** Short bullets shown beside the phone preview. */
  highlights: [
    'Dobrodošlica i kućni red',
    'Wi-Fi i check-in / check-out',
    'Plaže, restorani i trgovine',
    'Dolazak, prijevoz i hitni brojevi',
  ],
  /** Header inside the phone frame. */
  propertyName: 'Apartmani Mila',
  propertyPlace: 'Njivice, otok Krk',
  propertyTagline: 'Vaš dom uz Jadran u Njivicama, na otoku Krku.',
  /** Each section shown inside the demo guide. `icon` ∈ IconName. */
  sections: [
    {
      icon: 'sun' as IconName,
      title: 'Dobrodošli',
      body: 'Dobro došli u Apartmani Mila! Drago nam je što ste tu. Sve važne informacije za ugodan boravak nalaze se u ovom vodiču — slobodno ga otvorite kad god vam zatreba.',
    },
    {
      icon: 'wifi' as IconName,
      title: 'Wi‑Fi',
      body: 'Mreža: ApartmaniMila · Lozinka: more2026. Signal pokriva cijeli apartman i terasu.',
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
      body: 'Plaža Kijac — šljunčana plaža s plavom zastavom, plitki ulaz idealan za djecu, 10 min hoda. Plaža Jadran uz šetnicu — 5 min.',
    },
    {
      icon: 'restaurant' as IconName,
      title: 'Restorani i kafići',
      body: 'Restaurant Rivica — poznati riblji restoran na rivi. Konoba Njivice — domaća kuhinja i šurlice. Beach Bar Insula — koktel uz zalazak sunca.',
    },
    {
      icon: 'shop' as IconName,
      title: 'Trgovine, ljekarna i bankomat',
      body: 'Studenac u Njivicama — par minuta hoda. Veći Konzum u Omišlju (5 km). Ljekarna i bankomati u centru Njivica.',
    },
    {
      icon: 'compass' as IconName,
      title: 'Dolazak i prijevoz',
      body: 'Krčki most je besplatan — dolazite autom do vrata. Zračna luka Rijeka je na otoku kod Omišlja (cca 15 min). Otokom voze Arriva autobusi.',
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

/* ---------- Demo call-to-action band ---------- */

export const demoCta = {
  eyebrow: 'Uvjerite se sami',
  title: 'Pogledajte gotov vodič uživo.',
  body: 'Otvorite primjer vodiča za „Apartmani Mila“ na Krku i pogledajte točno ono što bi vidjeli vaši gosti.',
  button: 'Isprobaj demo',
}

/* ---------- Gallery (real demo photography) ---------- */

export const gallery = {
  eyebrow: 'Pravi apartmani, pravi vodič',
  title: 'Vaše fotografije, predstavljene kako zaslužuju.',
  intro:
    'Vodič nije suhi popis — vaš prostor i okolica izgledaju primamljivo, baš onako kako ih gosti pamte.',
  images: [
    { src: '/properties/mila/apartment-a.png', caption: 'Terasa s pogledom na more' },
    { src: '/properties/mila/apartment-b.png', caption: 'Dnevni boravak i kuhinja' },
    { src: '/properties/mila/apartment-c.png', caption: 'Otvoreni prostor uz obalu' },
  ],
}

/* ---------- 5. Pricing ---------- */

export const pricing = {
  eyebrow: 'Cijene',
  title: 'Jasna cijena, bez skrivenih troškova.',
  intro: 'Plaćate izradu vodiča po sezoni. Točna cijena ovisi o broju apartmana.',
  tiers: [
    { name: 'Jedan apartman', price: '€149', unit: '/ sezona', highlight: false },
    { name: 'Dva apartmana', price: '€199', unit: '/ sezona', highlight: false },
    { name: 'Tri ili više apartmana', price: '€249', unit: '/ sezona', highlight: false },
  ],
  note: 'Za objekte sa 6+ apartmana cijena je po dogovoru — javite mi se za točnu ponudu.',
}

/* ---------- 6. Review reminder (ethical wording) ---------- */

export const reviewFeature = {
  title: 'Nježan podsjetnik za recenziju',
  body: 'Na kraju vodiča može stajati jednostavan podsjetnik za recenziju, s linkom na Booking, Airbnb, Google ili drugi kanal koji koristite — bez pritiska na goste.',
}

/* ---------- 7. Contact ---------- */

export const contact = {
  eyebrow: 'Kontakt',
  title: 'Razgovarajmo o vašem vodiču.',
  /** Direct-contact methods. Each renders as a tappable card. */
  methods: [
    { icon: 'mail' as IconName, label: 'E-mail', value: 'codewithtamara@gmail.com', href: 'mailto:codewithtamara@gmail.com' },
    { icon: 'phone' as IconName, label: 'Telefon', value: '099 214 2439', href: 'tel:+385992142439' },
    { icon: 'globe' as IconName, label: 'Web', value: 'tamara.rocks', href: 'https://tamara.rocks' },
  ],
  signature: 'Tamara',
}

/** Social profiles — shown as contact rows in the contact section + footer.
 *  `value` is the handle shown under the label, mirroring contact.methods. */
export const socials: { icon: IconName; label: string; value: string; href: string }[] = [
  { icon: 'linkedin', label: 'LinkedIn', value: 'tamaracodes', href: 'https://www.linkedin.com/in/tamaracodes' },
  { icon: 'twitter', label: 'X', value: '@codewithtamara', href: 'https://x.com/codewithtamara' },
]

/* ---------- 8. Tiny inquiry form ---------- */

export const formCopy = {
  title: 'Pošaljite kratku poruku',
  description: 'Dovoljno je ime, e-mail i par riječi o vašem objektu. Javit ću vam se kroz 24h.',
  submit: 'Pošalji poruku',
  submitting: 'Šaljem…',
  success: 'Hvala! Poruka je poslana. Javit ću vam se kroz 24h.',
  successMailto: 'Otvorit će se vaša aplikacija za e-mail s pripremljenom porukom — samo je pošaljite i javit ću vam se kroz 24h.',
  error: 'Nešto je pošlo po zlu. Pokušajte ponovno ili pišite izravno na e-mail.',
  requiredHint: 'Polja označena s * su obavezna.',
}

export const formLabels = {
  fullName: 'Ime',
  email: 'E-mail',
  message: 'Poruka',
}

/** The data captured by the (tiny) form. */
export interface InquiryData {
  fullName: string
  email: string
  message: string
}

/* ---------- Email fallback (mailto) ---------- */

export const emailSubject = 'Upit za digitalni vodič za apartman'

/** Build the pre-filled email body for the mailto fallback. */
export function buildEmailBody(data: InquiryData): string {
  return [
    'Bok, zanima me digitalni vodič za apartman.',
    '',
    `Ime: ${data.fullName}`,
    `E-mail: ${data.email}`,
    '',
    'Poruka:',
    data.message || '—',
    '',
  ].join('\n')
}

/* ---------- 9. Footer ---------- */

export const footer = {
  name: brand.name,
  tagline: 'Digitalni vodiči za privatni smještaj u Hrvatskoj.',
  email: 'codewithtamara@gmail.com',
  phone: '099 214 2439',
  web: 'tamara.rocks',
  webHref: 'https://tamara.rocks',
}
