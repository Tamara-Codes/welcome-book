import { useLang } from '../i18n/LanguageContext'
import type { PlaceCard } from '../data/content'
import type { UIKey } from '../i18n/ui'
import { ActionButtons } from './ActionButtons'
import type { IconName } from './Icon'
import { PlaceholderImage } from './PlaceholderImage'

/** Generic card for a restaurant, beach or activity. */
export function PlaceCardView({ place, icon }: { place: PlaceCard; icon: IconName }) {
  const { t, tc } = useLang()

  return (
    <article className="card">
      <PlaceholderImage gradient={place.gradient} icon={icon} className="h-32 w-full" />

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-slate-800">{place.name}</h3>
          <span className="pill shrink-0">{t(`cat.${place.category}` as UIKey)}</span>
        </div>

        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{tc(place.description)}</p>

        {place.tags && place.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {place.tags.map((tag) => (
              <span key={tag} className="tag">
                {t(`tag.${tag}` as UIKey)}
              </span>
            ))}
          </div>
        )}

        {place.price && (
          <p className="mt-3 text-sm font-bold text-sea-700">
            {t('activities.price')}: <span className="font-semibold text-slate-700">{tc(place.price)}</span>
          </p>
        )}

        <div className="mt-4">
          <ActionButtons
            phone={place.phone}
            whatsapp={place.whatsapp}
            maps={place.maps}
            website={place.website}
            compact
          />
        </div>
      </div>
    </article>
  )
}
