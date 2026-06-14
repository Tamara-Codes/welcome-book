import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { FilterChips, useFilteredPlaces } from '../components/PlaceFilter'
import { useProperty } from '../property'

export function Restaurants() {
  const { t } = useLang()
  const { restaurants } = useProperty()
  const { active, setActive, options, filtered } = useFilteredPlaces(restaurants, 'category')

  return (
    <div>
      <SectionHeader icon="restaurant" title={t('restaurants.title')} subtitle={t('restaurants.subtitle')} />
      <FilterChips options={options} active={active} onChange={setActive} />
      <div className="space-y-4">
        {filtered.map((place) => (
          <PlaceCardView key={place.id} place={place} icon="restaurant" />
        ))}
      </div>
    </div>
  )
}
