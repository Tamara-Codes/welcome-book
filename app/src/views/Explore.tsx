import { useLang } from '../i18n/LanguageContext'
import { useNav, type View } from '../navigation'
import { SectionHeader } from '../components/SectionHeader'
import { Icon, type IconName } from '../components/Icon'
import type { UIKey } from '../i18n/ui'

interface ExploreItem {
  view: View
  labelKey: UIKey
  icon: IconName
  gradient: string
}

const ITEMS: ExploreItem[] = [
  { view: 'restaurants', labelKey: 'quick.restaurants', icon: 'restaurant', gradient: 'from-sea-400 to-sea-600' },
  { view: 'beaches', labelKey: 'quick.beaches', icon: 'beach', gradient: 'from-sea-300 to-sand-400' },
  { view: 'activities', labelKey: 'quick.activities', icon: 'bike', gradient: 'from-sand-300 to-sand-500' },
  { view: 'shops', labelKey: 'quick.shops', icon: 'shop', gradient: 'from-sea-400 to-sand-400' },
  { view: 'ferry', labelKey: 'quick.ferry', icon: 'ferry', gradient: 'from-sea-500 to-sea-700' },
]

export function Explore() {
  const { t } = useLang()
  const { go } = useNav()

  return (
    <div>
      <SectionHeader icon="compass" title={t('explore.title')} subtitle={t('explore.subtitle')} />
      <div className="grid grid-cols-1 gap-3">
        {ITEMS.map((item) => (
          <button
            key={item.view}
            type="button"
            onClick={() => go(item.view)}
            className={`flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-5 text-left text-white shadow-card active:scale-[0.98]`}
          >
            <Icon name={item.icon} className="h-7 w-7 shrink-0" />
            <span className="font-display text-lg font-bold">{t(item.labelKey)}</span>
            <Icon name="chevronRight" className="ml-auto h-6 w-6 text-white/80" />
          </button>
        ))}
      </div>
    </div>
  )
}
