import { useLang } from '../i18n/LanguageContext'
import { mapsHref, telHref, whatsappHref } from '../lib/links'
import { Icon } from './Icon'

/**
 * Row of contextual action buttons (Call / WhatsApp / Maps / Website) built
 * from whatever fields a place or contact provides. Only present fields render.
 */
export function ActionButtons({
  phone,
  whatsapp,
  maps,
  compact = false,
}: {
  phone?: string
  whatsapp?: string
  maps?: string
  website?: string
  compact?: boolean
}) {
  const { t } = useLang()
  const size = compact ? 'btn !px-3 !py-2 text-xs' : ''
  const iconClass = compact ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <div className="flex flex-wrap gap-2">
      {phone && (
        <a href={telHref(phone)} className={`btn-primary ${size}`} aria-label={`${t('common.call')} ${phone}`}>
          <Icon name="phone" className={iconClass} /> {t('common.call')}
        </a>
      )}
      {whatsapp && (
        <a
          href={whatsappHref(whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-soft ${size}`}
        >
          <Icon name="whatsapp" className={iconClass} /> {t('common.whatsapp')}
        </a>
      )}
      {maps && (
        <a
          href={mapsHref(maps)}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-sand ${size}`}
        >
          <Icon name="pin" className={iconClass} /> {t('common.openMaps')}
        </a>
      )}
    </div>
  )
}
