import { useLang } from '../i18n/LanguageContext'
import { useNav } from '../navigation'
import { ownerCopy } from '../owner/ownerContent'
import { useProperty } from '../property'
import { Icon } from './Icon'
import { LanguageSwitcher } from './LanguageSwitcher'

/** Sticky top header. On home: a "Demo" tag + a "request your own guide" CTA.
 *  On inner views: a back button + the product name. */
export function Header() {
  const { view, go } = useNav()
  const { t } = useLang()
  const { property, demo } = useProperty()
  const isHome = view === 'home'

  return (
    <header className="sticky top-0 z-40 bg-sea-600/95 backdrop-blur supports-[backdrop-filter]:bg-sea-600/85">
      <div
        className="mx-auto flex max-w-screen-sm items-center gap-2 px-4 py-3"
        style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
      >
        {isHome ? (
          demo ? (
            <>
              <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {ownerCopy.demoTag}
              </span>
              <a
                href="/#kontakt"
                className="ml-auto flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-sea-700 shadow-sm active:scale-95"
              >
                <Icon name="sparkles" className="h-4 w-4" /> {ownerCopy.cta.primary}
              </a>
            </>
          ) : (
            <h1 className="min-w-0 flex-1 truncate font-display text-base font-bold text-white">
              {property.name}
            </h1>
          )
        ) : (
          <>
            <button
              type="button"
              onClick={() => go('home')}
              className="flex items-center gap-1 rounded-full bg-white/15 py-1.5 pl-2 pr-3 text-sm font-bold text-white active:scale-95"
              aria-label={t('common.back')}
            >
              <Icon name="chevronRight" className="h-4 w-4 rotate-180" /> {t('common.back')}
            </button>
            <h1 className="min-w-0 flex-1 truncate text-center font-display text-base font-bold text-white">
              {property.name}
            </h1>
          </>
        )}

        <LanguageSwitcher />
      </div>
    </header>
  )
}
