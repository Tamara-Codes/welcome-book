import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceCardView } from '../components/PlaceCardView'
import { useProperty } from '../property'

export function Beaches() {
  const { t } = useLang()
  const { beaches } = useProperty()

  return (
    <div>
      <SectionHeader icon="beach" title={t('beaches.title')} subtitle={t('beaches.subtitle')} />
      <div className="space-y-4">
        {beaches.map((place) => (
          <PlaceCardView key={place.id} place={place} icon="beach" />
        ))}
      </div>
    </div>
  )
}
