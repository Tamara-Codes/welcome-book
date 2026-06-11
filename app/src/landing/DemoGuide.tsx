import { Icon, type IconName } from '../components/Icon'
import { demoGuide } from './content'

/** Six representative section cards for the product mockup. */
const PREVIEW = demoGuide.sections.slice(0, 6)

/** Bottom-nav items, mirroring the real guest app. */
const NAV: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: 'home', label: 'Početna', active: true },
  { icon: 'bed', label: 'Apartmani' },
  { icon: 'compass', label: 'Otkrij' },
  { icon: 'phone', label: 'Kontakt' },
]

/**
 * A realistic, full-height phone mockup used as the hero product visual — it
 * shows what a finished guest guide looks like in the app. It is NOT the
 * interactive demo; the live demo opens at /mila via the "Isprobaj demo" buttons.
 */
export function PhonePreview() {
  return (
    <div className="w-[19rem] sm:w-[20.5rem]">
      <div className="relative rounded-[3rem] border-[11px] border-ink bg-ink shadow-[0_40px_70px_-25px_rgba(12,74,110,0.55)]">
        {/* physical side buttons */}
        <span className="absolute -left-[14px] top-[7rem] h-9 w-[3px] rounded-l bg-ink" />
        <span className="absolute -left-[14px] top-[9.5rem] h-14 w-[3px] rounded-l bg-ink" />
        <span className="absolute -right-[14px] top-[8.5rem] h-20 w-[3px] rounded-r bg-ink" />

        <div className="relative overflow-hidden rounded-[2.25rem] bg-shell">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-[1.4rem] w-24 -translate-x-1/2 rounded-full bg-ink" />

          {/* status bar */}
          <div className="flex items-center justify-between px-6 pb-1 pt-3 text-ink">
            <span className="font-hanken text-xs font-semibold">9:41</span>
            <span className="flex items-center gap-1.5">
              <Icon name="wifi" className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="flex h-3 w-6 items-center rounded-[3px] border border-ink/60 px-[1.5px]">
                <span className="h-[6px] w-full rounded-[1px] bg-ink" />
              </span>
            </span>
          </div>

          {/* app header — solid sea blue, like the real guide */}
          <div className="relative overflow-hidden bg-sea-600 px-5 pb-5 pt-3 text-white">
            <Icon name="waves" className="absolute -right-3 -top-3 h-24 w-24 text-white/10" strokeWidth={1.5} />
            <p className="font-hanken text-[10px] font-bold uppercase tracking-[0.22em] text-sea-100">
              Vodič za goste
            </p>
            <h4 className="mt-1 font-fraunces text-2xl font-medium leading-tight">{demoGuide.propertyName}</h4>
            <p className="mt-1 flex items-center gap-1 font-hanken text-xs text-sea-50">
              <Icon name="pin" className="h-3.5 w-3.5" /> {demoGuide.propertyPlace}
            </p>
          </div>

          {/* section list */}
          <div className="space-y-2.5 px-4 pb-3 pt-4">
            {PREVIEW.map((s) => (
              <div
                key={s.title}
                className="flex items-center gap-3 rounded-xl border border-ink/[0.07] bg-white px-3 py-2.5 shadow-[0_2px_8px_-4px_rgba(12,74,110,0.25)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sea-50 text-sea-600">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="font-hanken text-[13px] font-semibold text-ink">{s.title}</span>
                <Icon name="chevronRight" className="ml-auto h-4 w-4 text-ink/25" />
              </div>
            ))}
          </div>

          {/* bottom navigation */}
          <div className="flex items-stretch justify-around border-t border-ink/10 bg-white px-2 pb-4 pt-2.5">
            {NAV.map((n) => (
              <span
                key={n.label}
                className={`flex flex-1 flex-col items-center gap-1 ${n.active ? 'text-sea-600' : 'text-ink/35'}`}
              >
                <Icon name={n.icon} className="h-5 w-5" strokeWidth={n.active ? 2.5 : 2} />
                <span className="font-hanken text-[9px] font-semibold">{n.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
