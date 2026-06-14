import { useLang } from '../i18n/LanguageContext'
import { useNav, type View } from '../navigation'
import { SectionHeader } from '../components/SectionHeader'
import { Icon, type IconName } from '../components/Icon'
import type { UIKey } from '../i18n/ui'

interface ExploreItem {
  view: View
  labelKey: UIKey
  icon: IconName
  /** Soft, color-coded icon-tile classes — one calm accent per category. */
  accent: string
}

const ITEMS: ExploreItem[] = [
  { view: 'restaurants', labelKey: 'quick.restaurants', icon: 'restaurant', accent: 'bg-amber-100 text-amber-700' },
  { view: 'beaches', labelKey: 'quick.beaches', icon: 'beach', accent: 'bg-sea-100 text-sea-700' },
  { view: 'activities', labelKey: 'quick.activities', icon: 'bike', accent: 'bg-emerald-100 text-emerald-700' },
  { view: 'shops', labelKey: 'quick.shops', icon: 'shop', accent: 'bg-rose-100 text-rose-700' },
  { view: 'ferry', labelKey: 'quick.ferry', icon: 'ferry', accent: 'bg-slate-100 text-slate-600' },
]

export function Explore() {
  const { t } = useLang()
  const { go } = useNav()

  return (
    <div>
      <SectionHeader icon="compass" title={t('explore.title')} subtitle={t('explore.subtitle')} />
      <div className="space-y-3">
        {ITEMS.map((item) => (
          <button
            key={item.view}
            type="button"
            onClick={() => go(item.view)}
            className="card flex w-full items-center gap-4 p-4 text-left transition-transform active:scale-[0.98]"
          >
            <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${item.accent}`}>
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <span className="font-display text-lg font-bold text-slate-800">{t(item.labelKey)}</span>
            <Icon name="chevronRight" className="ml-auto h-5 w-5 shrink-0 text-slate-300" />
          </button>
        ))}
      </div>
    </div>
  )
}
