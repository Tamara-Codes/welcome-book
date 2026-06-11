import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { useProperty } from '../property'

export function Restaurants() {
  const { t } = useLang()
  const { restaurants } = useProperty()

  return (
    <div>
      <SectionHeader icon="restaurant" title={t('restaurants.title')} subtitle={t('restaurants.subtitle')} />
      <div className="space-y-4">
        {restaurants.map((place) => (
          <PlaceCardView key={place.id} place={place} icon="restaurant" />
        ))}
      </div>
    </div>
  )
}
