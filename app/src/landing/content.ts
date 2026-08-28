/* ============================================================================
 *  🪧  LANDING PAGE — EDIT ALL COPY HERE (English + Croatian)
 * ----------------------------------------------------------------------------
 *  This is the single file you edit to change the owner-facing landing page:
 *  the headline, the "how it works" steps, the demo preview ("Apartmani Mila —
 *  Njivice"), the value points, the prices, the contact details and the tiny
 *  inquiry form.
 *
 *  • Submission settings (where the inquiry goes) live in `inquiryConfig`.
 *  • Every visible string is bilingual: `{ en: '...', hr: '...' }`. The page
 *    picks a language automatically from the visitor's browser/OS locale and
 *    lets them switch via the flag toggle in the header — see `./i18n.tsx`.
 * ========================================================================== */

import type { IconName } from '../components/Icon'
import { formDelivery } from '../lib/forms'
import type { LText } from './i18n'

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
export const inquiryConfig = {
  ...formDelivery,
  /** URL of the live guest guide opened by the "live demo" button. Defaults to
   *  the bundled demo property at /mila; override with VITE_DEMO_URL. */
  demoUrl: (import.meta.env.VITE_DEMO_URL as string | undefined)?.trim() || '/mila',
}

/* ---------- Brand + top navigation ---------- */

export const brand = {
  name: 'Welcome Book',
  tagline: { en: 'Digital guides for private accommodation', hr: 'Digitalni vodiči za privatni smještaj' } as LText,
}

export const nav: { label: LText; href: string }[] = [
  { label: { en: 'Demo', hr: 'Demo' }, href: '#demo' },
  { label: { en: 'How it works', hr: 'Kako radi' }, href: '#kako' },
  { label: { en: 'Pricing', hr: 'Cijene' }, href: '#cijene' },
  { label: { en: 'Contact', hr: 'Kontakt' }, href: '#kontakt' },
]

/* ---------- 1. Hero ---------- */

export const hero = {
  eyebrow: { en: 'Digital guest guide', hr: 'Digitalni vodič za goste' } as LText,
  /** The headline is split so one word can be set in italic serif. */
  titleLead: { en: 'Everything your guests need,', hr: 'Sve što vaši gosti trebaju,' } as LText,
  titleEmphasis: { en: 'in one place.', hr: 'na jednom mjestu.' } as LText,
  subtitle: {
    en: 'An elegant digital guide guests open via a link before arrival or by scanning a QR code in the apartment — Wi-Fi, house rules, beaches, restaurants and local tips, plus a gentle nudge to leave a review. No app, no sign-up.',
    hr: 'Elegantan digitalni vodič koji gosti otvaraju linkom prije dolaska ili skeniranjem QR koda u apartmanu — Wi-Fi, kućni red, plaže, restorani i lokalni savjeti, i nježan podsjetnik gostima da ostave recenziju. Bez aplikacije, bez prijave.',
  } as LText,
  primaryCta: { en: 'Try the demo', hr: 'Isprobaj demo' } as LText,
  secondaryCta: { en: 'Contact me', hr: 'Kontaktirajte me' } as LText,
  trust: {
    en: 'From €99 per season · QR code included · multiple languages',
    hr: 'Izrada od €99 po sezoni · QR kod uključen · više jezika',
  } as LText,
}

/* ---------- 2. Value lede ---------- */

export const value = {
  eyebrow: { en: 'Why a guide', hr: 'Zašto vodič' } as LText,
  title: { en: 'Fewer questions. A better first impression.', hr: 'Manje pitanja. Bolji prvi dojam.' } as LText,
  intro: {
    en: 'Instead of messages at all hours and papers scattered in drawers, guests get one tidy link with every answer. You get more time back, and the stay feels considered from the first minute.',
    hr: 'Umjesto poruka u svako doba i papira po ladicama, gosti dobiju jedan uredan link s odgovorima na sve. Vama ostaje više vremena, a boravak djeluje promišljeno od prve minute.',
  } as LText,
  points: [
    {
      icon: 'chat' as IconName,
      text: { en: 'Fewer repeat questions', hr: 'Manje ponavljanja' } as LText,
      desc: {
        en: 'Guests find Wi-Fi, parking and house rules themselves — no messages at all hours of the day and night.',
        hr: 'Gosti sami nađu Wi-Fi, parking i kućni red — bez poruka u svako doba dana i noći.',
      } as LText,
    },
    {
      icon: 'sparkles' as IconName,
      text: { en: 'A more professional impression', hr: 'Profesionalniji dojam' } as LText,
      desc: {
        en: 'A tidy, branded guide instead of papers in drawers and PDFs buried in email.',
        hr: 'Uredan, brendiran vodič umjesto papira po ladicama i PDF-ova u mailu.',
      } as LText,
    },
    {
      icon: 'globe' as IconName,
      text: { en: 'Multiple languages', hr: 'Više jezika' } as LText,
      desc: {
        en: 'Foreign guests get the content in their own language — English, German, Italian and others.',
        hr: 'Strani gosti dobiju sadržaj na svom jeziku — engleski, njemački, talijanski i drugi.',
      } as LText,
    },
    {
      icon: 'star' as IconName,
      text: { en: 'An easier path to a review', hr: 'Lakši put do recenzije' } as LText,
      desc: {
        en: 'A gentle reminder at the end of the stay guides the guest to a review on Booking, Airbnb or Google.',
        hr: 'Nježan podsjetnik na kraju boravka vodi gosta do recenzije na Booking, Airbnb ili Google.',
      } as LText,
    },
  ] as { icon: IconName; text: LText; desc: LText }[],
}

/* ---------- 3. How it works ---------- */

export const howItWorks = {
  eyebrow: { en: 'How it works', hr: 'Kako radi' } as LText,
  title: { en: 'From your details to a finished guide in three steps.', hr: 'Od podataka do gotovog vodiča u tri koraka.' } as LText,
  steps: [
    {
      icon: 'chat' as IconName,
      title: { en: 'You pick what goes in', hr: 'Odaberete što ide u vodič' } as LText,
      body: {
        en: 'You get a personal link to a simple form: check the boxes for what you want in your guide (Wi-Fi, house rules, beaches, restaurants…), add anything of your own, and upload your photos.',
        hr: 'Dobijete osobni link na jednostavan obrazac: označite što želite u vodiču (Wi-Fi, kućni red, plaže, restorani…), dodate svoje stavke i učitate fotografije.',
      } as LText,
    },
    {
      icon: 'sparkles' as IconName,
      title: { en: 'The guide is built', hr: 'Izrada vodiča' } as LText,
      body: {
        en: 'Based on your picks, I put together a tidy, clear guide and prepare a QR code for the apartment — a fridge magnet, ready for your guests.',
        hr: 'Na temelju vašeg odabira slažem uredan, pregledan vodič te pripremam QR kod za apartman — magnet za hladnjak, spreman za vaše goste.',
      } as LText,
    },
    {
      icon: 'qr' as IconName,
      title: { en: 'Guests scan it', hr: 'Gost skenira' } as LText,
      body: {
        en: 'Guests open the link or scan the QR code and instantly have everything in front of them — no app, no sign-up.',
        hr: 'Gosti otvore link ili skeniraju QR kod i odmah imaju sve pred sobom — bez aplikacije i bez prijave.',
      } as LText,
    },
  ] as { icon: IconName; title: LText; body: LText }[],
}

/* ---------- 4. Demo guest guide ("Apartmani Mila — Njivice") ----------
 *  Fictional, anonymised sample content. It should read like a REAL apartment
 *  guide. Edit freely — each entry becomes a card in the phone preview.
 */

export const demoGuide = {
  eyebrow: { en: 'Sample guide', hr: 'Primjer vodiča' } as LText,
  sectionTitle: { en: "This is how your guests see the guide", hr: 'Ovako vaši gosti vide vodič' } as LText,
  sectionIntro: {
    en: 'This is a sample guide for "Apartmani Mila" in Njivice on Krk. Yours is built from your details, photos and recommendations — this is just an illustration.',
    hr: 'Ovo je primjer vodiča za „Apartmani Mila“ u Njivicama na Krku. Vaš radim s vašim podacima, fotografijama i preporukama — ovo je samo prikaz.',
  } as LText,
  /** Short bullets shown beside the phone preview. */
  highlights: [
    { en: 'Welcome and house rules', hr: 'Dobrodošlica i kućni red' },
    { en: 'Wi-Fi and check-in / check-out', hr: 'Wi-Fi i check-in / check-out' },
    { en: 'Beaches, restaurants and shops', hr: 'Plaže, restorani i trgovine' },
    { en: 'Arrival, transport and emergency numbers', hr: 'Dolazak, prijevoz i hitni brojevi' },
  ] as LText[],
  /** Header inside the phone frame. */
  propertyName: 'Apartmani Mila',
  propertyPlace: { en: 'Njivice, island of Krk', hr: 'Njivice, otok Krk' } as LText,
  propertyTagline: {
    en: 'Your home on the Adriatic in Njivice, on the island of Krk.',
    hr: 'Vaš dom uz Jadran u Njivicama, na otoku Krku.',
  } as LText,
  /** Each section shown inside the demo guide. `icon` ∈ IconName. */
  sections: [
    {
      icon: 'sun' as IconName,
      title: { en: 'Welcome', hr: 'Dobrodošli' } as LText,
      body: {
        en: "Welcome to Apartmani Mila! We're delighted to have you. All the important information for a pleasant stay is in this guide — feel free to open it whenever you need it.",
        hr: 'Dobro došli u Apartmani Mila! Drago nam je što ste tu. Sve važne informacije za ugodan boravak nalaze se u ovom vodiču — slobodno ga otvorite kad god vam zatreba.',
      } as LText,
    },
    {
      icon: 'wifi' as IconName,
      title: { en: 'Wi-Fi', hr: 'Wi‑Fi' } as LText,
      body: {
        en: 'Network: ApartmaniMila · Password: more2026. The signal covers the whole apartment and the terrace.',
        hr: 'Mreža: ApartmaniMila · Lozinka: more2026. Signal pokriva cijeli apartman i terasu.',
      } as LText,
    },
    {
      icon: 'key' as IconName,
      title: { en: 'Check-in / Check-out', hr: 'Check‑in / Check‑out' } as LText,
      body: {
        en: 'Arrival from 3:00 PM, departure by 10:00 AM. Keys are collected on the ground floor — let us know your approximate arrival time so we can welcome you.',
        hr: 'Dolazak od 15:00, odlazak do 10:00. Ključeve preuzimate u prizemlju — javite okvirno vrijeme dolaska da vas dočekamo.',
      } as LText,
    },
    {
      icon: 'rules' as IconName,
      title: { en: 'House rules', hr: 'Kućni red' } as LText,
      body: {
        en: 'Quiet hours from 10 PM to 8 AM · Please no smoking indoors · Sort waste according to the labels · Pets by prior arrangement.',
        hr: 'Tišina od 22:00 do 8:00 · Molimo ne pušiti u zatvorenom · Otpad odvojite prema oznakama · Kućni ljubimci uz prethodni dogovor.',
      } as LText,
    },
    {
      icon: 'parking' as IconName,
      title: { en: 'Parking', hr: 'Parking' } as LText,
      body: {
        en: 'Free parking space in front of the house, marked with the number 2. Let us know if you need a second spot.',
        hr: 'Besplatno parkirno mjesto ispred kuće, označeno brojem 2. Za drugi automobil javite nam se.',
      } as LText,
    },
    {
      icon: 'beach' as IconName,
      title: { en: 'Nearby beaches', hr: 'Plaže u blizini' } as LText,
      body: {
        en: 'Kijac beach — a Blue Flag pebble beach with a shallow entry ideal for kids, a 10-minute walk. Jadran beach along the promenade — 5 minutes.',
        hr: 'Plaža Kijac — šljunčana plaža s plavom zastavom, plitki ulaz idealan za djecu, 10 min hoda. Plaža Jadran uz šetnicu — 5 min.',
      } as LText,
    },
    {
      icon: 'restaurant' as IconName,
      title: { en: 'Restaurants and cafés', hr: 'Restorani i kafići' } as LText,
      body: {
        en: 'Restaurant Rivica — a well-known seafood restaurant on the waterfront. Konoba Njivice — home cooking and šurlice pasta. Beach Bar Insula — cocktails at sunset.',
        hr: 'Restaurant Rivica — poznati riblji restoran na rivi. Konoba Njivice — domaća kuhinja i šurlice. Beach Bar Insula — koktel uz zalazak sunca.',
      } as LText,
    },
    {
      icon: 'shop' as IconName,
      title: { en: 'Shops, pharmacy and ATM', hr: 'Trgovine, ljekarna i bankomat' } as LText,
      body: {
        en: 'Krk store in Njivice — a few minutes on foot. A larger Lidl in Omišalj (5 km). Pharmacy and ATMs in the centre of Njivice.',
        hr: 'Trgovina Krk u Njivicama — par minuta hoda. Veći Lidl u Omišlju (5 km). Ljekarna i bankomati u centru Njivica.',
      } as LText,
    },
    {
      icon: 'compass' as IconName,
      title: { en: 'Arrival and transport', hr: 'Dolazak i prijevoz' } as LText,
      body: {
        en: 'The Krk Bridge is toll-free — you can drive right to the door. Rijeka Airport is on the island near Omišalj (about 15 minutes). Arriva buses run around the island.',
        hr: 'Krčki most je besplatan — dolazite autom do vrata. Zračna luka Rijeka je na otoku kod Omišlja (cca 15 min). Otokom voze Arriva autobusi.',
      } as LText,
    },
    {
      icon: 'alert' as IconName,
      title: { en: 'Emergency numbers', hr: 'Hitni brojevi' } as LText,
      body: {
        en: '112 — the single number for all emergency services. 192 police · 193 fire brigade · 194 ambulance.',
        hr: '112 — jedinstveni broj za sve hitne službe. 192 policija · 193 vatrogasci · 194 hitna pomoć.',
      } as LText,
    },
    {
      icon: 'star' as IconName,
      title: { en: 'A review after your stay', hr: 'Recenzija nakon boravka' } as LText,
      body: {
        en: "If you enjoyed staying with us, we'd be grateful for a few words. Here you'd find a link to Booking, Airbnb or Google — whichever suits you.",
        hr: 'Ako vam je kod nas bilo lijepo, bit ćemo zahvalni na nekoliko riječi. Ovdje stoji link na Booking, Airbnb ili Google — kako vama odgovara.',
      } as LText,
    },
  ],
  /** Button that opens the live guide (./app), shown only if demoUrl is set. */
  liveButton: { en: 'Open the live demo guide', hr: 'Otvori živi demo vodiča' } as LText,
}

/* ---------- Demo call-to-action band ---------- */

export const demoCta = {
  eyebrow: { en: 'See for yourself', hr: 'Uvjerite se sami' } as LText,
  title: { en: 'See a finished guide, live.', hr: 'Pogledajte gotov vodič uživo.' } as LText,
  body: {
    en: 'Open the sample guide for "Apartmani Mila" on Krk and see exactly what your guests would see.',
    hr: 'Otvorite primjer vodiča za „Apartmani Mila“ na Krku i pogledajte točno ono što bi vidjeli vaši gosti.',
  } as LText,
  button: { en: 'Try the demo', hr: 'Isprobaj demo' } as LText,
}

/* ---------- Gallery (real demo photography) ---------- */

export const gallery = {
  eyebrow: { en: 'Real apartments, real guide', hr: 'Pravi apartmani, pravi vodič' } as LText,
  title: { en: 'Your photos, presented the way they deserve.', hr: 'Vaše fotografije, predstavljene kako zaslužuju.' } as LText,
  intro: {
    en: "The guide isn't a dry list — your space and surroundings look inviting, just as guests remember them.",
    hr: 'Vodič nije suhi popis — vaš prostor i okolica izgledaju primamljivo, baš onako kako ih gosti pamte.',
  } as LText,
  images: [
    { src: '/properties/mila/apartment-a.png', caption: { en: 'Terrace with a sea view', hr: 'Terasa s pogledom na more' } as LText },
    { src: '/properties/mila/apartment-b.png', caption: { en: 'Living room and kitchen', hr: 'Dnevni boravak i kuhinja' } as LText },
    { src: '/properties/mila/apartment-c.png', caption: { en: 'Open-plan space by the coast', hr: 'Otvoreni prostor uz obalu' } as LText },
  ],
}

/* ---------- 5. Pricing ---------- */

export const pricing = {
  eyebrow: { en: 'Pricing', hr: 'Cijene' } as LText,
  title: { en: 'Clear pricing, no hidden costs.', hr: 'Jasna cijena, bez skrivenih troškova.' } as LText,
  intro: {
    en: 'You pay for the guide once per season. The exact price depends on the number of apartments.',
    hr: 'Plaćate izradu vodiča po sezoni. Točna cijena ovisi o broju apartmana.',
  } as LText,
  tiers: [
    { name: { en: '1–3 apartments', hr: '1–3 apartmana' } as LText, price: '€99', unit: { en: '/ year', hr: '/ godišnje' } as LText, highlight: false },
    { name: { en: '4–6 apartments', hr: '4–6 apartmana' } as LText, price: '€149', unit: { en: '/ year', hr: '/ godišnje' } as LText, highlight: false },
    { name: { en: '7–10 apartments', hr: '7–10 apartmana' } as LText, price: '€199', unit: { en: '/ year', hr: '/ godišnje' } as LText, highlight: false },
  ],
  mostPopular: { en: 'Most popular', hr: 'Najčešći izbor' } as LText,
  note: {
    en: 'The price is per property, per year — everything in one app. For agencies and larger properties, pricing is by arrangement.',
    hr: 'Cijena je po objektu, godišnje — sve u jednoj aplikaciji. Za agencije i veće objekte cijena je po dogovoru.',
  } as LText,
}

/* ---------- 6. Review reminder (ethical wording) ---------- */

export const reviewFeature = {
  title: { en: 'A gentle review reminder', hr: 'Nježan podsjetnik za recenziju' } as LText,
  body: {
    en: 'The end of the guide can include a simple review reminder, linking to Booking, Airbnb, Google or another channel you use — with no pressure on guests.',
    hr: 'Na kraju vodiča može stajati jednostavan podsjetnik za recenziju, s linkom na Booking, Airbnb, Google ili drugi kanal koji koristite — bez pritiska na goste.',
  } as LText,
}

/* ---------- 7. Contact ---------- */

export const contact = {
  eyebrow: { en: 'Contact', hr: 'Kontakt' } as LText,
  title: { en: "Let's talk about your guide.", hr: 'Razgovarajmo o vašem vodiču.' } as LText,
  /** Direct-contact methods. Each renders as a tappable card. */
  methods: [
    { icon: 'mail' as IconName, label: { en: 'Email', hr: 'E-mail' } as LText, value: 'codewithtamara@gmail.com', href: 'mailto:codewithtamara@gmail.com' },
    { icon: 'globe' as IconName, label: { en: 'Website', hr: 'Web' } as LText, value: 'tamara.rocks', href: 'https://tamara.rocks' },
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
  title: { en: 'Send a short message', hr: 'Pošaljite kratku poruku' } as LText,
  description: {
    en: "Just your name, email and a few words about your property is enough. I'll get back to you within 24h.",
    hr: 'Dovoljno je ime, e-mail i par riječi o vašem objektu. Javit ću vam se kroz 24h.',
  } as LText,
  submit: { en: 'Send message', hr: 'Pošalji poruku' } as LText,
  submitting: { en: 'Sending…', hr: 'Šaljem…' } as LText,
  success: { en: "Thank you! Your message has been sent. I'll get back to you within 24h.", hr: 'Hvala! Poruka je poslana. Javit ću vam se kroz 24h.' } as LText,
  successMailto: {
    en: "Your email app will open with a pre-filled message — just send it and I'll get back to you within 24h.",
    hr: 'Otvorit će se vaša aplikacija za e-mail s pripremljenom porukom — samo je pošaljite i javit ću vam se kroz 24h.',
  } as LText,
  error: { en: 'Something went wrong. Please try again or email me directly.', hr: 'Nešto je pošlo po zlu. Pokušajte ponovno ili pišite izravno na e-mail.' } as LText,
  requiredHint: { en: 'Fields marked with * are required.', hr: 'Polja označena s * su obavezna.' } as LText,
  namePlaceholder: { en: 'Your name', hr: 'Vaše ime' } as LText,
  emailPlaceholder: { en: 'you@email.com', hr: 'vas@email.com' } as LText,
  messagePlaceholder: { en: 'A few words about your property and location…', hr: 'Par riječi o vašem objektu i lokaciji…' } as LText,
}

export const formLabels = {
  fullName: { en: 'Name', hr: 'Ime' } as LText,
  email: { en: 'Email', hr: 'E-mail' } as LText,
  message: { en: 'Message', hr: 'Poruka' } as LText,
}

/** The data captured by the (tiny) form. */
export interface InquiryData {
  fullName: string
  email: string
  message: string
}

/* ---------- Email fallback (mailto) ---------- */

export const emailSubject = { en: 'Inquiry about a digital apartment guide', hr: 'Upit za digitalni vodič za apartman' } as LText

/** Build the pre-filled email body for the mailto fallback. */
export function buildEmailBody(data: InquiryData, lang: 'en' | 'hr'): string {
  return lang === 'hr'
    ? [
        'Bok, zanima me digitalni vodič za apartman.',
        '',
        `Ime: ${data.fullName}`,
        `E-mail: ${data.email}`,
        '',
        'Poruka:',
        data.message || '—',
        '',
      ].join('\n')
    : [
        "Hi, I'm interested in a digital apartment guide.",
        '',
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        '',
        'Message:',
        data.message || '—',
        '',
      ].join('\n')
}

/* ---------- 9. Footer ---------- */

export const footer = {
  name: brand.name,
  tagline: { en: 'Digital guides for private accommodation.', hr: 'Digitalni vodiči za privatni smještaj.' } as LText,
  email: 'codewithtamara@gmail.com',
  web: 'tamara.rocks',
  webHref: 'https://tamara.rocks',
  copyright: { en: 'All rights reserved.', hr: 'Sva prava pridržana.' } as LText,
  madeBy: { en: 'Made by Tamara ·', hr: 'Izrađuje Tamara ·' } as LText,
}

/* ---------- Phone preview (mirrors the real guest app's home screen) ---------- */

export const phonePreview = {
  tiles: [
    { icon: 'wifi' as IconName, label: { en: 'Wi-Fi', hr: 'Wi-Fi' } as LText },
    { icon: 'rules' as IconName, label: { en: 'House rules', hr: 'Kućni red' } as LText },
    { icon: 'bed' as IconName, label: { en: 'Apartments', hr: 'Apartmani' } as LText },
    { icon: 'beach' as IconName, label: { en: 'Beaches', hr: 'Plaže' } as LText },
    { icon: 'restaurant' as IconName, label: { en: 'Restaurants', hr: 'Restorani' } as LText },
    { icon: 'shop' as IconName, label: { en: 'Shops', hr: 'Trgovine' } as LText },
  ] as { icon: IconName; label: LText }[],
  nav: [
    { icon: 'home' as IconName, label: { en: 'Home', hr: 'Početna' } as LText, active: true },
    { icon: 'info' as IconName, label: { en: 'Info', hr: 'Info' } as LText },
    { icon: 'bed' as IconName, label: { en: 'Apartments', hr: 'Apartmani' } as LText },
    { icon: 'compass' as IconName, label: { en: 'Explore', hr: 'Otkrij' } as LText },
    { icon: 'phone' as IconName, label: { en: 'Contact', hr: 'Kontakt' } as LText },
  ] as { icon: IconName; label: LText; active?: boolean }[],
  quickAccess: { en: 'Quick access', hr: 'Brzi pristup' } as LText,
  welcomeBold: { en: 'Welcome! ', hr: 'Dobrodošli! ' } as LText,
  welcomeBody: {
    en: 'We are glad you are here. Everything you need for a relaxed stay in Njivice is right here — just tap the button below.',
    hr: 'Drago nam je što ste tu. Sve što vam treba za opušten boravak u Njivicama nalazi se ovdje — samo dotaknite gumb ispod.',
  } as LText,
}
