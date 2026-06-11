/* ============================================================================
 *  🪧  OWNER-FACING CONVERSION FLOW  — EDIT ALL CROATIAN COPY HERE
 * ----------------------------------------------------------------------------
 *  This is the demo's "sales" layer, shown to the APARTMENT OWNER who is
 *  viewing the demo (not to the guest). It is intentionally kept separate from
 *  the guest guide's multi-language system (src/i18n) because the owner is
 *  always Croatian — everything here is in Croatian, regardless of the guest
 *  language switcher.
 *
 *  Change any wording, the price note, or the form options below in one place.
 *  Submission settings (where the inquiry goes) live in `inquiryConfig`.
 * ========================================================================== */

/* ---------- Where inquiries are sent ----------
 *
 *  Two ways to receive inquiries — set EITHER one:
 *
 *  1. ENDPOINT (preferred for production): set the env var
 *     VITE_INQUIRY_FORM_ENDPOINT to a URL that accepts a POST with JSON.
 *     e.g. a Formspree / Formspark / Basin / Google Apps Script endpoint.
 *     Create a `.env` file in the project root:
 *         VITE_INQUIRY_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
 *
 *  2. EMAIL FALLBACK: if no endpoint is set, submitting opens the owner's
 *     email app with a pre-filled message to the address below.
 *     👉 PUT YOUR EMAIL HERE (or set VITE_INQUIRY_EMAIL in .env):
 */
const FALLBACK_EMAIL = 'tamara@algorise.co.uk' // TODO: change to the address that should receive inquiries

export const inquiryConfig = {
  /** POST endpoint; empty string ⇒ use the mailto fallback. */
  endpoint: (import.meta.env.VITE_INQUIRY_FORM_ENDPOINT as string | undefined)?.trim() ?? '',
  /** Recipient for the mailto fallback. */
  email: (import.meta.env.VITE_INQUIRY_EMAIL as string | undefined)?.trim() || FALLBACK_EMAIL,
}

/* ---------- Intro banner & CTA copy ---------- */

export const ownerCopy = {
  /** Small label shown in the header to signal this is a demo. */
  demoTag: 'Demo',
  cta: {
    primary: 'Želim ovakav vodič',
  },
  form: {
    title: 'Upit za QR vodič',
    description:
      'Ispunite nekoliko osnovnih informacija i javit ću vam se s prijedlogom za vaš QR vodič.',
    submit: 'Pošalji upit',
    submitting: 'Šaljem…',
    close: 'Zatvori',
    success: 'Hvala! Upit je poslan. Javit ću vam se uskoro s prijedlogom i cijenom.',
    error: 'Nešto je pošlo po zlu. Pokušajte ponovno ili nam pišite izravno na e‑mail.',
  },
}

/* ---------- Form field definitions ----------
 *  `name` is the key sent to the endpoint / used in the email body.
 *  `label` is the Croatian label shown to the owner.
 */

export interface FieldOption {
  value: string
  label: string
}

export const formLabels = {
  fullName: 'Ime i prezime',
  email: 'Email',
  phone: 'Mobitel',
  location: 'Otok',
  apartmentCount: 'Broj apartmana',
  propertyType: 'Tip objekta',
  message: 'Poruka',
  optional: 'nije obavezno',
}

export const propertyTypeOptions: FieldOption[] = [
  { value: 'Jedan apartman', label: 'Jedan apartman' },
  { value: 'Kuća s više apartmana', label: 'Kuća s više apartmana' },
  { value: 'Vila / kuća za odmor', label: 'Vila / kuća za odmor' },
  { value: 'Agencija / više objekata', label: 'Agencija / više objekata' },
]

/** Islands we currently serve — shown as a dropdown for the location field. */
export const locationOptions: FieldOption[] = [
  { value: 'Pašman', label: 'Pašman' },
  { value: 'Ugljan', label: 'Ugljan' },
  { value: 'Krk', label: 'Krk' },
  { value: 'Ostalo', label: 'Ostalo' },
]

/* ---------- The data shape captured by the form ---------- */

export interface InquiryData {
  fullName: string
  email: string
  phone: string
  location: string
  apartmentCount: string
  propertyType: string
  message: string
}

/* ---------- Email fallback (mailto) ---------- */

export const emailSubject = 'Upit za QR vodič za apartman'

/** Build the pre-filled email body for the mailto fallback. */
export function buildEmailBody(data: InquiryData): string {
  return [
    'Bok, zanima me QR vodič za apartman.',
    '',
    `Ime i prezime: ${data.fullName}`,
    `Email: ${data.email}`,
    `Mobitel: ${data.phone}`,
    `Otok: ${data.location}`,
    `Broj apartmana: ${data.apartmentCount}`,
    `Tip objekta: ${data.propertyType}`,
    `Poruka: ${data.message}`,
    '',
  ].join('\n')
}
