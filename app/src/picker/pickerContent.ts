import { formDelivery } from '../lib/forms'
import type { Lang } from '../i18n/types'
import type { SectionKey } from './types'

/* ============================================================================
 *  ✅  PICKER — COPY & CONFIG
 * ----------------------------------------------------------------------------
 *  The picker is always in Croatian: the visitor is the apartment OWNER, not a
 *  guest. (Same reasoning as the landing page.)
 * ========================================================================== */

/** The language owners type in. Drives which translations are prefilled and
 *  what gets flagged for translation on submit. */
export const OWNER_LANG: Lang = 'hr'

/** Where submissions go — the shared Web3Forms setup (see src/lib/forms.ts).
 *  Without a key we fall back to the owner's mail client, pre-filled. */
export const submitConfig = formDelivery

/** `tab` is the short label for the tab strip; `title` is the panel heading. */
export const sections: { key: SectionKey; tab: string; title: string; hint: string }[] = [
  {
    key: 'restaurants',
    tab: 'Restorani',
    title: 'Restorani, konobe i barovi',
    hint: 'Odznačite one koje ne želite preporučiti svojim gostima.',
  },
  {
    key: 'beaches',
    tab: 'Plaže',
    title: 'Plaže',
    hint: 'Ostavite označene samo plaže koje preporučujete.',
  },
  {
    key: 'activities',
    tab: 'Aktivnosti',
    title: 'Aktivnosti i izleti',
    hint: 'Najam bicikla, izleti, ronjenje…',
  },
  {
    key: 'shops',
    tab: 'Trgovine',
    title: 'Trgovine i pekare',
    hint: 'Trgovine, pekare, tržnica.',
  },
  {
    key: 'contacts',
    tab: 'Kontakti',
    title: 'Korisni kontakti',
    hint: 'Ljekarna, ambulanta, policija, taksi i slično.',
  },
]

/** The two tabs that aren't island sections, in the order they appear. */
export const extraTabs = [
  { key: 'property', tab: 'Smještaj' },
  { key: 'send', tab: 'Pošaljite' },
] as const

export const copy = {
  eyebrow: 'Welcome Book',
  title: 'Što želite u svom vodiču?',
  edit: 'Uredi',
  editClose: 'Zatvori',
  edited: 'uređeno',
  own: 'vaše',
  addTitle: 'Dodajte svoje mjesto',
  addAnother: '+ Dodaj još jedno',
  remove: 'Ukloni',
  newPlace: {
    name: 'Naziv',
    note: 'Kratak opis',
  },
  propertyTitle: 'Podaci o vašem smještaju',
  propertyHint: 'Ispravite sve što nije točno. Prazno polje znači da se ne prikazuje.',
  photosTitle: 'Fotografije apartmana',
  photosHint: 'Dodajte po jednu fotografiju za svaki apartman. Zamjenjuje postojeću fotografiju.',
  photoUploading: 'Učitavanje…',
  photoUploadError: 'Slanje fotografije nije uspjelo. Pokušajte ponovno.',
  photoUploadDone: 'Spremljeno',
  rulesTitle: 'Kućni red',
  rulesHint: 'Odznačite pravila koja ne želite, i dopišite svoja.',
  newRules: 'Dodajte svoja pravila — jedno pravilo po retku',
  notesTitle: 'Još nešto?',
  notesHint: 'Sve što niste mogli upisati u prethodnim koracima — slobodno napišite ovdje.',
  reviewTitle: 'Pregled uklonjenih mjesta',
  reviewEmpty: 'Niste uklonili nijedno mjesto.',
  reviewRemoved: (count: number) => `Uklonjeno: ${count}`,
  back: 'Natrag',
  next: 'Dalje',
  step: (current: number, total: number) => `Korak ${current} od ${total}`,
  ownerName: 'Vaše ime',
  ownerEmail: 'Vaš e-mail',
  submit: 'Pošaljite odabir',
  submitting: 'Šaljem…',
  required: 'Molimo upišite ime i e-mail.',
  error: 'Slanje nije uspjelo. Pokušajte ponovno ili kopirajte odabir gumbom ispod.',
  copy: 'Kopiraj odabir',
  copied: 'Kopirano!',
  successTitle: 'Hvala!',
  successBody:
    'Zaprimili smo vaš odabir. Vodič ćemo prilagoditi i javiti vam se kad bude spreman.',
  successMailto:
    'Otvorili smo vaš e-mail program s ispunjenom porukom — pošaljite je i gotovi ste.',
  summary: (kept: number, total: number) => `${kept} od ${total} odabrano`,
}
