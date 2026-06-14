import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { FilterChips, useFilteredPlaces } from '../components/PlaceFilter'
import type { IconName } from '../components/Icon'
import { useProperty } from '../property'

/** Pick a fitting icon for each activity from its category. */
const CATEGORY_ICON: Record<string, IconName> = {
  bikeRental: 'bike',
  scooterRental: 'scooter',
  waterRental: 'paddle',
  boatRental: 'boat',
  excursion: 'ferry',
}

export function Activities() {
  const { t } = useLang()
  const { activities } = useProperty()
  const { active, setActive, options, filtered } = useFilteredPlaces(activities, 'category')

  return (
    <div>
      <SectionHeader icon="bike" title={t('activities.title')} subtitle={t('activities.subtitle')} />
      <FilterChips options={options} active={active} onChange={setActive} />
      <div className="space-y-4">
        {filtered.map((place) => (
          <PlaceCardView key={place.id} place={place} icon={CATEGORY_ICON[place.category] ?? 'compass'} />
        ))}
      </div>
    </div>
  )
}
