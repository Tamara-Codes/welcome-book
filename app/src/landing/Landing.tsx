import { useEffect, type ReactNode } from 'react'
import { Icon } from '../components/Icon'
import { DemoGuide } from './DemoGuide'
import { InquiryForm } from './InquiryForm'
import { banner, demoGuide, midCta, value, pricing, reviewFeature, formCopy, footer } from './content'

/** Smooth-scroll anchor target for every CTA on the page. */
const FORM_ANCHOR = '#upit'

export default function Landing() {
  // The shared index.html title is the guest guide's; set the sales-page title.
  useEffect(() => {
    document.title = `${banner.title} · Welcome Book`
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-screen-sm px-4 pb-4">
        <Banner />
        <DemoSection />
        <MidCta />
        <ValueSection />
        <ReviewFeature />
        <Pricing />
        <FormSection />
      </main>
      <Footer />
    </div>
  )
}

/* ---------- 1. Top demo banner ---------- */

function Banner() {
  return (
    <section className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-to-br from-sea-500 to-sea-700 px-5 py-7 text-white shadow-soft">
      <Icon name="waves" className="absolute -right-5 -top-4 h-32 w-32 text-white/10" strokeWidth={1.5} />
      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
        <Icon name="sparkles" className="h-3.5 w-3.5" /> {banner.badge}
      </span>

      <h1 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">{banner.title}</h1>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-sea-50">{banner.subtitle}</p>
      <p className="mt-3 max-w-prose text-sm leading-relaxed text-sea-100/90">{banner.explanation}</p>

      <a href={FORM_ANCHOR} className="btn mt-5 w-full bg-white text-sea-700 shadow-sm hover:bg-sea-50">
        <Icon name="sparkles" className="h-5 w-5" /> {banner.primaryCta}
      </a>
      <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-sea-50/90">
        <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" /> {banner.priceNote}
      </p>
    </section>
  )
}

/* ---------- 2. Demo guest guide ---------- */

function DemoSection() {
  return (
    <section className="mt-10">
      <SectionLabel>{demoGuide.sectionLabel}</SectionLabel>
      <h2 className="mt-1 font-display text-xl font-bold text-sea-800">{demoGuide.sectionTitle}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{demoGuide.sectionIntro}</p>
      <div className="mt-6">
        <DemoGuide />
      </div>
    </section>
  )
}

/* ---------- 3. Mid-page CTA ---------- */

function MidCta() {
  return (
    <section className="mt-10 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-sand-100 px-5 py-6 text-center">
      <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-amber-400/90 text-amber-950">
        <Icon name="sparkles" className="h-6 w-6" />
      </span>
      <h2 className="mt-3 font-display text-xl font-bold text-slate-800">{midCta.title}</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">{midCta.body}</p>
      <a href={FORM_ANCHOR} className="btn-accent mx-auto mt-5 px-6">
        <Icon name="mail" className="h-5 w-5" /> {midCta.button}
      </a>
    </section>
  )
}

/* ---------- 4. Value section ---------- */

function ValueSection() {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold text-sea-800">{value.title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{value.intro}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {value.points.map((p) => (
          <div key={p.text} className="card flex items-center gap-3 p-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sea-50 text-sea-600">
              <Icon name={p.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold leading-snug text-slate-700">{p.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- 7. Review feature (ethical wording) ---------- */

function ReviewFeature() {
  return (
    <section className="mt-6">
      <div className="card flex items-start gap-3 border-sea-100 bg-sea-50/60 p-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-sea-600">
          <Icon name="star" className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-sea-800">{reviewFeature.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{reviewFeature.body}</p>
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. Pricing ---------- */

function Pricing() {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold text-sea-800">{pricing.title}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{pricing.intro}</p>

      <div className="mt-5 space-y-3">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex items-center justify-between gap-3 rounded-2xl border p-4 ${
              tier.highlight
                ? 'border-sea-300 bg-sea-50 shadow-card'
                : 'border-sand-100 bg-white shadow-card'
            }`}
          >
            <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Icon name="bed" className="h-5 w-5 text-sea-600" />
              {tier.name}
            </span>
            <span className="shrink-0 text-right">
              <span className="font-display text-lg font-bold text-sea-700">{tier.price}</span>
              {tier.unit && <span className="ml-1 text-xs font-semibold text-slate-400">{tier.unit}</span>}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-xs leading-relaxed text-slate-500">
        <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0" />
        {pricing.note}
      </p>
    </section>
  )
}

/* ---------- 6. Inquiry form ---------- */

function FormSection() {
  return (
    <section id="upit" className="mt-12 scroll-mt-4">
      <SectionLabel>{formCopy.sectionTitle}</SectionLabel>
      <h2 className="mt-1 font-display text-xl font-bold text-sea-800">{formCopy.title}</h2>
      <div className="mt-5">
        <InquiryForm />
      </div>
    </section>
  )
}

/* ---------- 8. Footer ---------- */

function Footer() {
  return (
    <footer className="mt-12 border-t border-sand-100 bg-sand-50 px-4 py-8">
      <div className="mx-auto max-w-screen-sm text-center">
        <p className="font-display text-base font-bold text-sea-800">{footer.name}</p>
        <p className="mt-1 text-sm text-slate-600">{footer.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="mail" className="h-4 w-4 text-sea-600" /> {footer.email}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Icon name="phone" className="h-4 w-4 text-sea-600" /> {footer.phone}
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- shared bits ---------- */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="pill">
      <Icon name="compass" className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}
