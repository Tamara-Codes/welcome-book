import { Icon, type IconName } from '../components/Icon'
import { demoGuide } from './content'

/** Quick-access tiles, mirroring the real guest app's home grid (Home.tsx). */
const TILES: { icon: IconName; label: string }[] = [
  { icon: 'wifi', label: 'Wi-Fi' },
  { icon: 'rules', label: 'Kućni red' },
  { icon: 'bed', label: 'Apartmani' },
  { icon: 'beach', label: 'Plaže' },
  { icon: 'restaurant', label: 'Restorani' },
  { icon: 'shop', label: 'Trgovine' },
]

/** Bottom-nav items, mirroring the real guest app (BottomNav.tsx). */
const NAV: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: 'home', label: 'Početna', active: true },
  { icon: 'info', label: 'Info' },
  { icon: 'bed', label: 'Apartmani' },
  { icon: 'compass', label: 'Otkrij' },
  { icon: 'phone', label: 'Kontakt' },
]

/**
 * A realistic, full-height phone mockup used as the hero product visual — it
 * mirrors the real guest app's home screen (Home.tsx): a gradient hero card, a
 * "Brzi pristup" grid of tiles and the bottom navigation. It is NOT the
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

        <div className="relative overflow-hidden rounded-[2.25rem] bg-sand-50">
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

          {/* sticky app header — solid sea blue, like the real guide */}
          <div className="flex items-center justify-between bg-sea-600 px-4 py-2.5 text-white">
            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
              Demo
            </span>
            <span className="flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold">
              <Icon name="globe" className="h-3 w-3" /> HR
            </span>
          </div>

          {/* scrollable content */}
          <div className="px-3 pt-3">
            {/* gradient hero card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sea-500 via-sea-600 to-sea-800 px-5 py-6 text-white shadow-card">
              <Icon name="waves" className="absolute -right-3 -top-2 h-24 w-24 text-white/10" strokeWidth={1.5} />
              <h4 className="font-display text-2xl font-bold leading-tight drop-shadow-sm">
                {demoGuide.propertyName}
              </h4>
              <p className="mt-1.5 font-sans text-[12px] leading-relaxed text-sea-50">
                {demoGuide.propertyTagline}
              </p>
              <div className="mt-4 rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                <p className="font-sans text-[11px] leading-relaxed text-white/90">
                  <span className="font-bold text-white">Dobrodošli! </span>
                  Drago nam je što ste tu. Sve što vam treba za opušten boravak u Njivicama nalazi se ovdje — samo dotaknite gumb ispod.
                </p>
              </div>
            </div>

            {/* quick-access grid */}
            <h5 className="mb-2 mt-4 px-1 font-display text-sm font-bold text-sea-800">Brzi pristup</h5>
            <div className="grid grid-cols-2 gap-2.5 pb-4">
              {TILES.map((tile, i) => (
                <div
                  key={tile.label}
                  className={`flex-col items-start gap-2 rounded-2xl border border-sand-100/80 bg-white p-3 shadow-card ${
                    i >= 4 ? 'hidden sm:flex' : 'flex'
                  }`}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sea-50 text-sea-600">
                    <Icon name={tile.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-sans text-[12px] font-bold leading-snug text-slate-700">
                    {tile.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* bottom navigation */}
          <div className="flex items-stretch justify-around border-t border-sand-100 bg-white px-2 pb-4 pt-2.5">
            {NAV.map((n) => (
              <span
                key={n.label}
                className={`flex flex-1 flex-col items-center gap-1 ${n.active ? 'text-sea-600' : 'text-slate-400'}`}
              >
                <Icon name={n.icon} className={`h-5 w-5 ${n.active ? 'scale-110' : ''}`} strokeWidth={2} />
                <span className="font-sans text-[9px] font-semibold">{n.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
