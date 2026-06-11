import { Icon, type IconName } from './Icon'

/** Title + subtitle block shown at the top of each section view. */
export function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: IconName
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sea-50 text-sea-600">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <div>
        <h2 className="section-title leading-tight">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>}
      </div>
    </div>
  )
}
