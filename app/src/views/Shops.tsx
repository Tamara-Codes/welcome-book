import { Fragment } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { FilterChips, useFilteredPlaces } from '../components/PlaceFilter'
import { useProperty } from '../property'

export function Shops() {
  const { t, tc } = useLang()
  const { shops } = useProperty()
  const { active, setActive, options, filtered } = useFilteredPlaces(shops, 'category')

  return (
    <div>
      <SectionHeader icon="shop" title={t('shops.title')} subtitle={t('shops.subtitle')} />
      <FilterChips options={options} active={active} onChange={setActive} />
      <div className="space-y-4">
        {filtered.map((place) => (
          <Fragment key={place.id}>
            {active === 'all' && place.section && (
              <h3 className="px-1 pt-3 font-display text-sm font-bold text-sea-800 first:pt-0">
                {tc(place.section)}
              </h3>
            )}
            <PlaceCardView place={place} icon="shop" />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
