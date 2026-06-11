import { useLang } from '../i18n/LanguageContext'
import { useNav, type View } from '../navigation'
import type { UIKey } from '../i18n/ui'
import { useProperty } from '../property'
import { Icon, type IconName } from '../components/Icon'

interface QuickButton {
  view: View
  labelKey: UIKey
  icon: IconName
  /** Optional element id to scroll to within the target view. */
  section?: string
}

const QUICK_BUTTONS: QuickButton[] = [
  { view: 'info', labelKey: 'quick.wifi', icon: 'wifi', section: 'info-wifi' },
  { view: 'info', labelKey: 'quick.houseRules', icon: 'rules', section: 'info-houseRules' },
  { view: 'apartments', labelKey: 'quick.prices', icon: 'bed' },
  { view: 'beaches', labelKey: 'quick.beaches', icon: 'beach' },
  { view: 'restaurants', labelKey: 'quick.restaurants', icon: 'restaurant' },
  { view: 'activities', labelKey: 'quick.activities', icon: 'bike' },
  { view: 'shops', labelKey: 'quick.shops', icon: 'shop' },
  { view: 'contacts', labelKey: 'quick.contacts', icon: 'phone' },
  { view: 'ferry', labelKey: 'quick.ferry', icon: 'ferry' },
]

export function Home() {
  const { t, tc } = useLang()
  const { go } = useNav()
  const { property, reviews } = useProperty()

  function open(b: QuickButton) {
    go(b.view)
    // If the tile targets a specific section, scroll to it once the view renders
    // (e.g. "House Rules" lands on house rules, not the top of the info page).
    if (b.section) {
      const id = b.section
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-500 via-sea-600 to-sea-800 px-6 py-8 text-white shadow-card">
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sand-200/25 blur-2xl" />
        <Icon name="waves" className="absolute -right-4 -top-3 h-28 w-28 text-white/10" strokeWidth={1.5} />

        <h2 className="font-display text-3xl font-bold leading-tight drop-shadow-sm">{property.name}</h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-sea-50">{tc(property.tagline)}</p>

        <div className="mt-5 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm">
          <p className="max-w-prose text-sm leading-relaxed text-white/90">
            <span className="font-bold text-white">{t('home.welcome')} </span>
            {t('home.intro')}
          </p>
        </div>
      </section>

      {/* Quick access grid */}
      <h3 className="mb-3 mt-7 px-1 font-display text-lg font-bold text-sea-800">{t('home.quickAccess')}</h3>
      <div className="grid grid-cols-2 gap-3">
        {QUICK_BUTTONS.map((b, i) => (
          <button
            key={`${b.labelKey}-${i}`}
            type="button"
            onClick={() => open(b)}
            className="card flex flex-col items-start gap-3 p-4 text-left active:scale-[0.97]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-sea-50 text-sea-600">
              <Icon name={b.icon} className="h-6 w-6" />
            </span>
            <span className="text-sm font-bold leading-snug text-slate-700">{t(b.labelKey)}</span>
          </button>
        ))}
      </div>

      {/* Gentle review reminder — only when the property has review links */}
      {reviews && reviews.length > 0 && (
        <section className="mt-7 rounded-3xl border border-sea-100 bg-sea-50 p-5 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-sea-600 text-white">
            <Icon name="star" className="h-6 w-6" />
          </span>
          <h3 className="mt-3 font-display text-lg font-bold text-sea-900">{t('home.review.title')}</h3>
          <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-slate-600">{t('home.review.body')}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {reviews.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-soft px-4 py-2.5 text-sm"
              >
                <Icon name="star" className="h-4 w-4" /> {r.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
