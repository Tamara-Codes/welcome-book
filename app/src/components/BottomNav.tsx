import { useLang } from '../i18n/LanguageContext'
import { useNav, type View } from '../navigation'
import type { UIKey } from '../i18n/ui'
import { Icon, type IconName } from './Icon'

interface NavItem {
  view: View
  labelKey: UIKey
  icon: IconName
  /** Other views that should highlight this tab as active. */
  related?: View[]
}

const NAV_ITEMS: NavItem[] = [
  { view: 'home', labelKey: 'nav.home', icon: 'home' },
  { view: 'info', labelKey: 'nav.info', icon: 'info' },
  { view: 'apartments', labelKey: 'nav.prices', icon: 'bed' },
  { view: 'explore', labelKey: 'nav.explore', icon: 'compass', related: ['restaurants', 'beaches', 'activities', 'ferry'] },
  { view: 'contacts', labelKey: 'nav.contacts', icon: 'phone' },
]

/** Fixed, thumb-friendly bottom navigation bar. */
export function BottomNav() {
  const { view, go } = useNav()
  const { t } = useLang()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-sand-100 bg-white/95 shadow-nav backdrop-blur"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-screen-sm items-stretch justify-between px-2">
        {NAV_ITEMS.map((item) => {
          const active = view === item.view || item.related?.includes(view)
          return (
            <li key={item.view} className="flex-1">
              <button
                type="button"
                onClick={() => go(item.view)}
                className={`flex w-full flex-col items-center gap-0.5 px-1 py-2 text-[11px] font-semibold transition-colors ${
                  active ? 'text-sea-600' : 'text-slate-400'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <Icon
                  name={item.icon}
                  className={`h-6 w-6 transition-transform ${active ? 'scale-110' : ''}`}
                />
                <span className="truncate">{t(item.labelKey)}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
