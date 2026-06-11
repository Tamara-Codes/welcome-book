import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
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

  return (
    <div>
      <SectionHeader icon="bike" title={t('activities.title')} subtitle={t('activities.subtitle')} />
      <div className="space-y-4">
        {activities.map((place) => (
          <PlaceCardView key={place.id} place={place} icon={CATEGORY_ICON[place.category] ?? 'compass'} />
        ))}
      </div>
    </div>
  )
}
