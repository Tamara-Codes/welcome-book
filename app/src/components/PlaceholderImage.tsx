import { Icon, type IconName } from './Icon'

/**
 * Gradient placeholder used wherever a real photo will go later.
 * Swap this out for an <img> when real photos are available.
 */
export function PlaceholderImage({
  gradient,
  icon = 'sun',
  label,
  className = '',
}: {
  gradient: string
  icon?: IconName
  label?: string
  className?: string
}) {
  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={label ?? 'Photo placeholder'}
    >
      {/* subtle wave texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.6) 0, transparent 35%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0, transparent 30%)',
        }}
      />
      <Icon name={icon} className="relative h-10 w-10 text-white/90 drop-shadow-sm" strokeWidth={1.75} />
      {label && (
        <span className="absolute bottom-2 right-3 text-[11px] font-semibold text-white/90 drop-shadow">
          {label}
        </span>
      )}
    </div>
  )
}
