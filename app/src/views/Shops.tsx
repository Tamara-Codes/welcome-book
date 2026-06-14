import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { FilterChips, useFilteredPlaces } from '../components/PlaceFilter'
import { useProperty } from '../property'

export function Shops() {
  const { t } = useLang()
  const { shops } = useProperty()
  const { active, setActive, options, filtered } = useFilteredPlaces(shops, 'category')

  return (
    <div>
      <SectionHeader icon="shop" title={t('shops.title')} subtitle={t('shops.subtitle')} />
      <FilterChips options={options} active={active} onChange={setActive} />
      <div className="space-y-4">
        {filtered.map((place) => (
          <PlaceCardView key={place.id} place={place} icon="shop" />
        ))}
      </div>
    </div>
  )
}
