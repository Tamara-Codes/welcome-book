import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { PlaceholderImage } from '../components/PlaceholderImage'
import { Icon } from '../components/Icon'
import type { Apartment } from '../data/content'
import { useProperty } from '../property'
import type { UIKey } from '../i18n/ui'

function eur(amount: number): string {
  return `€${amount}`
}

function ApartmentCard({ apt }: { apt: Apartment }) {
  const { t, tc } = useLang()

  return (
    <article className="card">
      {apt.image ? (
        <img
          src={apt.image}
          alt={apt.name}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
      ) : (
        <PlaceholderImage gradient={apt.gradient} icon="bed" label={t('apts.photo')} className="h-44 w-full" />
      )}

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-slate-800">{apt.name}</h3>
        </div>

        {/* Capacity & bedrooms */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="pill">
            <Icon name="users" className="h-3.5 w-3.5" /> {t('apts.capacity')}: {apt.capacity} {t('apts.guests')}
          </span>
          <span className="pill">
            <Icon name="bed" className="h-3.5 w-3.5" /> {t('apts.bedrooms')}: {apt.bedrooms}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">{tc(apt.description)}</p>

        {/* Amenities */}
        <h4 className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-400">{t('apts.amenities')}</h4>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {apt.amenities.map((a) => (
            <span key={a} className="tag">
              {t(`amenity.${a}` as UIKey)}
            </span>
          ))}
        </div>

        {/* Seasonal price table */}
        <div className="mt-4 overflow-hidden rounded-xl border border-sand-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sea-50 text-left text-xs uppercase tracking-wide text-sea-700">
                <th className="px-3 py-2 font-bold">{t('apts.season')}</th>
                <th className="px-3 py-2 text-right font-bold">{t('apts.pricePerNight')}</th>
              </tr>
            </thead>
            <tbody>
              {apt.prices.map((row, i) => (
                <tr key={row.season} className={i % 2 ? 'bg-white' : 'bg-sand-50/40'}>
                  <td className="px-3 py-2 text-slate-600">{t(`season.${row.season}` as UIKey)}</td>
                  <td className="px-3 py-2 text-right font-bold text-slate-800">
                    {eur(row.pricePerNight)} <span className="font-normal text-slate-400">{t('apts.perNight')}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
}

export function Apartments() {
  const { t } = useLang()
  const { apartments } = useProperty()

  return (
    <div>
      <SectionHeader icon="bed" title={t('apts.title')} subtitle={t('apts.subtitle')} />

      <div className="space-y-5">
        {apartments.map((apt) => (
          <ApartmentCard key={apt.id} apt={apt} />
        ))}
      </div>

      <p className="mt-5 flex items-start gap-2 rounded-2xl bg-sand-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0 text-sand-500" />
        <span>{t('apts.priceNote')}</span>
      </p>
    </div>
  )
}
