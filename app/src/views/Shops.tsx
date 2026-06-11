import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { useProperty } from '../property'

export function Shops() {
  const { t } = useLang()
  const { shops } = useProperty()

  return (
    <div>
      <SectionHeader icon="shop" title={t('shops.title')} subtitle={t('shops.subtitle')} />
      <div className="space-y-4">
        {shops.map((place) => (
          <PlaceCardView key={place.id} place={place} icon="shop" />
        ))}
      </div>
    </div>
  )
}
