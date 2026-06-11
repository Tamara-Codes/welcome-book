import { useLang } from '../i18n/LanguageContext'
import type { PlaceCard } from '../data/content'
import type { UIKey } from '../i18n/ui'
import { ActionButtons } from './ActionButtons'
import { Icon, type IconName } from './Icon'

/**
 * Generic card for a restaurant, beach, activity or shop.
 *
 * A small square chip sits to the left of the name. When `place.image` is set
 * it shows that logo (contained, never cropped); otherwise it falls back to the
 * section icon — e.g. the beach umbrella for beaches, a fork for restaurants.
 */
export function PlaceCardView({ place, icon }: { place: PlaceCard; icon: IconName }) {
  const { t, tc } = useLang()

  return (
    <article className="card p-4">
      <div className="flex items-start gap-3">
        <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          {place.image ? (
            <img
              src={place.image}
              alt={`${place.name} logo`}
              loading="lazy"
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <Icon name={icon} className="h-7 w-7 text-sea-500" strokeWidth={1.75} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold leading-tight text-slate-800">{place.name}</h3>
            <span className="pill shrink-0">{t(`cat.${place.category}` as UIKey)}</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{tc(place.description)}</p>

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
    </article>
  )
}
