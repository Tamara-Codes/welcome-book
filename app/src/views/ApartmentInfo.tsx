import { useState, type ReactNode } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { SectionHeader } from '../components/SectionHeader'
import { Icon, type IconName } from '../components/Icon'
import { useProperty } from '../property'
import { telHref, whatsappHref } from '../lib/links'
import type { Localized } from '../i18n/types'

/** A copyable value (used for Wi-Fi network & password). */
function CopyField({ label, value }: { label: string; value: string }) {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard not available — ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-center justify-between gap-3 rounded-xl bg-sand-50 px-4 py-3 text-left active:scale-[0.98]"
      title={t('info.tapToCopy')}
    >
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
        <span className="block font-bold text-slate-800">{value}</span>
      </span>
      <span className={`text-xs font-bold ${copied ? 'text-sea-600' : 'text-sea-400'}`}>
        {copied ? t('common.copied') : t('common.copy')}
      </span>
    </button>
  )
}

function InfoCard({
  icon,
  title,
  children,
  id,
}: {
  icon: IconName
  title: string
  children: ReactNode
  id?: string
}) {
  return (
    <article id={id} className="card scroll-mt-24 p-4">
      <h3 className="flex items-center gap-2.5 font-display text-base font-bold text-slate-800">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sea-50 text-sea-600">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </article>
  )
}

export function ApartmentInfo() {
  const { t, tc } = useLang()
  const { apartmentInfo, host } = useProperty()

  return (
    <div>
      <SectionHeader icon="info" title={t('info.title')} subtitle={t('info.subtitle')} />

      <div className="space-y-3">
        {/* Wi-Fi */}
        <InfoCard id="info-wifi" icon="wifi" title={t('info.wifi')}>
          <div className="space-y-2">
            <CopyField label={t('info.wifiName')} value={apartmentInfo.wifi.network} />
            <CopyField label={t('info.wifiPassword')} value={apartmentInfo.wifi.password} />
          </div>
        </InfoCard>

        {/* Check-in / out */}
        <div className="grid grid-cols-2 gap-3">
          <InfoCard icon="key" title={t('info.checkIn')}>
            <span className="text-lg font-bold text-sea-700">{apartmentInfo.checkIn}</span>
          </InfoCard>
          <InfoCard icon="checkout" title={t('info.checkOut')}>
            <span className="text-lg font-bold text-sea-700">{apartmentInfo.checkOut}</span>
          </InfoCard>
        </div>

        <InfoCard icon="parking" title={t('info.parking')}>
          {tc(apartmentInfo.parking)}
        </InfoCard>

        <InfoCard icon="trash" title={t('info.trash')}>
          {tc(apartmentInfo.trash)}
        </InfoCard>

        <InfoCard icon="snowflake" title={t('info.ac')}>
          {tc(apartmentInfo.ac)}
        </InfoCard>

        <InfoCard icon="moon" title={t('info.quietHours')}>
          {tc(apartmentInfo.quietHours)}
        </InfoCard>

        {/* House rules */}
        <InfoCard id="info-houseRules" icon="rules" title={t('info.houseRules')}>
          <ul className="list-disc space-y-1.5 pl-5">
            {apartmentInfo.houseRules.map((rule: Localized, i) => (
              <li key={i}>{tc(rule)}</li>
            ))}
          </ul>
        </InfoCard>

        {/* Contact host */}
        <article className="card bg-gradient-to-br from-sea-500 to-sea-700 p-5 text-white">
          <h3 className="font-display text-lg font-bold">{t('info.contactHost')}</h3>
          <p className="mt-1 text-sm text-sea-50">{t('info.contactHostDesc')}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={telHref(host.phone)} className="btn bg-white text-sea-700">
              <Icon name="phone" className="h-5 w-5" /> {t('common.call')}
            </a>
            <a
              href={whatsappHref(host.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-sea-800/40 text-white ring-1 ring-white/30"
            >
              <Icon name="whatsapp" className="h-5 w-5" /> {t('common.whatsapp')}
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}
