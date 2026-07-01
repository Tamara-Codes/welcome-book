import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { Icon, type IconName } from '../components/Icon'
import { useProperty } from '../property'
import type { UIKey } from '../i18n/ui'
import { mailHref, mapsHref, telHref, whatsappHref } from '../lib/links'

function ContactRow({
  icon,
  label,
  phone,
  whatsapp,
  maps,
  email,
  highlight,
}: {
  icon: IconName
  label: string
  phone?: string
  whatsapp?: string
  maps?: string
  website?: string
  email?: string
  highlight?: boolean
}) {
  const { t } = useLang()

  return (
    <article className={`card flex items-center gap-3 p-3.5 ${highlight ? 'ring-2 ring-red-300' : ''}`}>
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
          highlight ? 'bg-red-50 text-red-500' : 'bg-sea-50 text-sea-600'
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold leading-tight text-slate-800">{label}</p>
        {phone && <p className="text-sm text-slate-500">{phone}</p>}
      </div>
      <div className="flex shrink-0 gap-1.5">
        {phone && (
          <a
            href={telHref(phone)}
            className="grid h-10 w-10 place-items-center rounded-full bg-sea-600 text-white active:scale-95"
            aria-label={`${t('common.call')} ${label}`}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
        )}
        {whatsapp && (
          <a
            href={whatsappHref(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-sea-50 text-sea-700 active:scale-95"
            aria-label={`${t('common.whatsapp')} ${label}`}
          >
            <Icon name="whatsapp" className="h-5 w-5" />
          </a>
        )}
        {email && (
          <a
            href={mailHref(email)}
            className="grid h-10 w-10 place-items-center rounded-full bg-sand-100 text-slate-600 active:scale-95"
            aria-label={`Email ${label}`}
          >
            <Icon name="mail" className="h-5 w-5" />
          </a>
        )}
        {maps && (
          <a
            href={mapsHref(maps)}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full bg-sand-100 text-slate-600 active:scale-95"
            aria-label={`${t('common.openMaps')} ${label}`}
          >
            <Icon name="pin" className="h-5 w-5" />
          </a>
        )}
      </div>
    </article>
  )
}

export function Contacts() {
  const { t, tc } = useLang()
  const { contacts, host } = useProperty()

  return (
    <div>
      <SectionHeader icon="phone" title={t('contacts.title')} subtitle={t('contacts.subtitle')} />

      <div className="space-y-2.5">
        {contacts.map((c) => (
          <ContactRow
            key={c.id}
            icon={c.icon}
            label={typeof c.label === 'object' ? tc(c.label) : (c.label ?? t(c.labelKey as UIKey))}
            phone={c.phone}
            whatsapp={c.whatsapp}
            maps={c.maps}
            website={c.website}
            email={c.email}
            highlight={c.id === 'emergency'}
          />
        ))}

        {/* Host — always last, pulled from the host config */}
        <ContactRow
          icon="home"
          label={`${t('contacts.host')} — ${host.name}`}
          phone={host.phone}
          whatsapp={host.whatsapp}
        />
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-2xl bg-red-50 px-4 py-3 text-xs leading-relaxed text-red-700">
        <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{t('contacts.emergencyNote')}</span>
      </p>
    </div>
  )
}
