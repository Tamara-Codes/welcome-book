import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { Icon } from '../components/Icon'
import { useProperty } from '../property'
import type { UIKey } from '../i18n/ui'

export function Ferry() {
  const { t, tc } = useLang()
  const { arrivalLinks, arrival } = useProperty()

  return (
    <div>
      <SectionHeader
        icon="compass"
        title={t('ferry.title')}
        subtitle={arrival ? tc(arrival.subtitle) : t('ferry.subtitle')}
      />

      <article className="card p-5">
        <p className="text-sm leading-relaxed text-slate-600">
          {arrival ? tc(arrival.description) : t('ferry.description')}
        </p>

        <div className="mt-5 space-y-3">
          {arrivalLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Icon name={link.icon ?? 'ferry'} className="h-5 w-5" />{' '}
                {link.label ? tc(link.label) : link.labelKey ? t(link.labelKey as UIKey) : ''}
              </span>
              <Icon name="chevronRight" className="h-5 w-5" />
            </a>
          ))}
        </div>
      </article>

      <p className="mt-4 flex items-start gap-2 rounded-2xl bg-sand-100 px-4 py-3 text-xs leading-relaxed text-slate-600">
        <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-sand-500" />
        <span>{arrival?.note ? tc(arrival.note) : t('ferry.checkNote')}</span>
      </p>
    </div>
  )
}
