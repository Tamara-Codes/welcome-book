import { Icon } from '../components/Icon'
import { demoGuide, inquiryConfig } from './content'

/**
 * The embedded sample guest guide ("Apartman Sanja — Pašman"), rendered inside
 * a phone frame so it reads as "this is what your guests see on their phone".
 * Deliberately styled differently from the sales sections around it.
 */
export function DemoGuide() {
  return (
    <div className="mx-auto max-w-[20rem]">
      {/* Phone frame */}
      <div className="rounded-[2.25rem] border-[6px] border-slate-800 bg-slate-800 shadow-soft">
        <div className="overflow-hidden rounded-[1.75rem] bg-sand-50">
          {/* Status-bar-ish notch */}
          <div className="flex items-center justify-center bg-slate-800 py-1.5">
            <span className="h-1.5 w-16 rounded-full bg-slate-600" />
          </div>

          {/* Scrollable guide content */}
          <div className="max-h-[28rem] overflow-y-auto px-3.5 pb-4 pt-3.5">
            {/* Guide hero */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sea-500 to-sea-700 px-4 py-4 text-white">
              <Icon name="waves" className="absolute -right-3 -top-2 h-20 w-20 text-white/10" strokeWidth={1.5} />
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-sea-100">Vodič za goste</p>
              <h4 className="mt-0.5 font-display text-lg font-bold leading-tight">{demoGuide.propertyName}</h4>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-sea-50">
                <Icon name="pin" className="h-3.5 w-3.5" /> {demoGuide.propertyPlace}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-sea-50/90">{demoGuide.propertyTagline}</p>
            </div>

            {/* Guide section cards */}
            <div className="mt-3 space-y-2.5">
              {demoGuide.sections.map((s) => (
                <div key={s.title} className="rounded-2xl border border-sand-100 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-sea-50 text-sea-600">
                      <Icon name={s.icon} className="h-4 w-4" />
                    </span>
                    <h5 className="text-sm font-bold text-slate-800">{s.title}</h5>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optional: open the live interactive guide (the ./app project) */}
      {inquiryConfig.demoUrl && (
        <a
          href={inquiryConfig.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-soft mt-4 w-full"
        >
          <Icon name="link" className="h-5 w-5" /> {demoGuide.liveButton}
        </a>
      )}
    </div>
  )
}
