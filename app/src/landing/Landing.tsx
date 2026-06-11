import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { PhonePreview } from './DemoGuide'
import { InquiryForm } from './InquiryForm'
import {
  brand,
  nav,
  hero,
  value,
  howItWorks,
  demoCta,
  gallery,
  pricing,
  reviewFeature,
  contact,
  socials,
  footer,
  inquiryConfig,
} from './content'

const DEMO_URL = inquiryConfig.demoUrl
const CONTACT = '#kontakt'

/* ---------- layout helpers ---------- */

function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>{children}</div>
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-hanken text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? 'text-shell/70' : 'text-clay-600'
      }`}
    >
      <span className={`h-px w-7 ${light ? 'bg-shell/40' : 'bg-clay-400'}`} />
      {children}
    </span>
  )
}

/** Fade/rise in when scrolled into view. */
function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section'
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    // Safety net: never leave content permanently hidden, even if the observer
    // doesn't fire (off-screen renders, prerender, flaky scroll events).
    const fallback = window.setTimeout(() => setShown(true), 1400)
    return () => {
      io.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])
  return (
    <Tag
      ref={ref as never}
      className={`lp-reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default function Landing() {
  useEffect(() => {
    document.title = `${brand.name} · Digitalni vodič za goste`
  }, [])

  // The landing is a lazy-loaded chunk, so when arriving from another page with
  // a hash (e.g. /#kontakt from the /mila guide), the target section doesn't
  // exist yet at the browser's initial scroll attempt. Scroll to it once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) requestAnimationFrame(() => el.scrollIntoView())
  }, [])

  return (
    <div className="min-h-screen bg-shell font-hanken text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <HowItWorks />
        <DemoBand />
        <Gallery />
        <Pricing />
        <ReviewBand />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* ---------- Header ---------- */

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? 'bg-shell text-ink' : 'bg-ink text-shell'}`}>
        <Icon name="waves" className="h-5 w-5" />
      </span>
      <span className={`font-fraunces text-xl font-medium tracking-tight ${light ? 'text-shell' : 'text-ink'}`}>
        {brand.name}
      </span>
    </a>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-ink/10 bg-shell/85 py-3 backdrop-blur-md' : 'py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-hanken text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-hanken text-sm font-semibold text-shell transition-all hover:bg-ink-700 active:scale-[0.98]"
        >
          {hero.primaryCta}
          <Icon name="chevronRight" className="h-4 w-4" />
        </a>
      </Container>
    </header>
  )
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* soft atmospheric background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 90% at 85% 0%, rgba(14,165,233,0.14), transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(2,132,199,0.08), transparent 60%)',
        }}
      />
      <div aria-hidden className="lp-grain pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* copy */}
        <div>
          <div className="lp-rise" style={{ animationDelay: '40ms' }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </div>
          <h1
            className="lp-rise mt-6 font-fraunces text-[2.6rem] font-medium leading-[1.05] tracking-[-0.01em] text-ink sm:text-6xl"
            style={{ animationDelay: '120ms' }}
          >
            {hero.titleLead}{' '}
            <span className="italic text-clay-600">{hero.titleEmphasis}</span>
          </h1>
          <p
            className="lp-rise mt-6 max-w-xl font-hanken text-lg leading-relaxed text-ink/70"
            style={{ animationDelay: '220ms' }}
          >
            {hero.subtitle}
          </p>

          <div className="lp-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '320ms' }}>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 font-hanken text-base font-semibold text-shell shadow-[0_16px_30px_-12px_rgba(18,48,59,0.6)] transition-all hover:bg-ink-700 active:scale-[0.98]"
            >
              <Icon name="link" className="h-5 w-5" /> {hero.primaryCta}
            </a>
            <a
              href={CONTACT}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/20 bg-transparent px-7 py-4 font-hanken text-base font-semibold text-ink transition-all hover:border-ink/40 hover:bg-ink/5 active:scale-[0.98]"
            >
              <Icon name="mail" className="h-5 w-5" /> {hero.secondaryCta}
            </a>
          </div>

          <p
            className="lp-rise mt-7 flex items-center gap-2.5 font-hanken text-sm font-medium text-ink/55"
            style={{ animationDelay: '420ms' }}
          >
            <Icon name="check" className="h-4 w-4 shrink-0 text-clay-500" strokeWidth={2.5} />
            {hero.trust}
          </p>
        </div>

        {/* product visual — phone on a soft blue glow */}
        <div className="lp-rise relative flex justify-center" style={{ animationDelay: '300ms' }}>
          {/* layered glow + ring decoration behind the device */}
          <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="h-[24rem] w-[24rem] rounded-full bg-clay-400/30 blur-[90px]" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <div className="h-[20rem] w-[20rem] rounded-full border border-clay-400/20" />
            <div className="absolute h-[26rem] w-[26rem] rounded-full border border-clay-400/10" />
          </div>
          <div className="relative drop-shadow-[0_40px_60px_rgba(12,74,110,0.25)]">
            <PhonePreview />
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ---------- Value ---------- */

function ValueSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow light>{value.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-shell sm:text-[2.6rem]">
              {value.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-hanken text-lg leading-relaxed text-shell/70">{value.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {value.points.map((p, i) => (
            <Reveal
              as="li"
              key={p.text}
              delay={i * 90}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sea-200 hover:shadow-[0_26px_44px_-22px_rgba(12,74,110,0.4)]"
            >
              {/* accent bar that grows in on hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-sea-500 to-sea-700 transition-transform duration-300 group-hover:scale-x-100" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-sea-50 text-sea-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-sea-600 group-hover:text-white">
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-fraunces text-lg font-medium text-ink">{p.text}</h3>
              <p className="mt-2 font-hanken text-sm leading-relaxed text-ink/60">{p.desc}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

/* ---------- How it works ---------- */

function HowItWorks() {
  return (
    <section id="kako" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-ink sm:text-[2.6rem]">
            {howItWorks.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {howItWorks.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 110} className="relative">
              <span className="font-fraunces text-5xl font-medium text-clay-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 flex items-center gap-2.5 font-fraunces text-xl font-medium text-ink">
                <Icon name={s.icon} className="h-5 w-5 text-sea-600" /> {s.title}
              </h3>
              <p className="mt-3 font-hanken text-[15px] leading-relaxed text-ink/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------- Demo band (the demo = a button) ---------- */

function DemoBand() {
  return (
    <section id="demo" className="scroll-mt-24 pb-4">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 sm:px-14 sm:py-20">
          {/* coastal house photo as the band background */}
          <img
            src="/coast.png"
            alt=""
            aria-hidden
            className="lp-kenburns absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/40"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Eyebrow light>{demoCta.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-shell sm:text-[2.5rem]">
                {demoCta.title}
              </h2>
              <p className="mt-4 max-w-lg font-hanken text-[15px] leading-relaxed text-shell/70">{demoCta.body}</p>
            </div>
            <div className="lg:justify-self-end">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-hanken text-base font-semibold text-ink shadow-[0_16px_30px_-12px_rgba(2,8,20,0.6)] transition-all hover:bg-clay-500 hover:text-white active:scale-[0.98]"
              >
                <Icon name="link" className="h-5 w-5" /> {demoCta.button}
                <Icon
                  name="chevronRight"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------- Gallery ---------- */

function Gallery() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{gallery.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-ink sm:text-[2.6rem]">
            {gallery.title}
          </h2>
          <p className="mt-4 font-hanken text-lg leading-relaxed text-ink/70">{gallery.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
              <span className="absolute bottom-4 left-4 font-hanken text-sm font-semibold text-shell">
                {img.caption}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------- Pricing ---------- */

function Pricing() {
  return (
    <section id="cijene" className="scroll-mt-24 border-y border-ink/10 bg-shell-100 py-20 sm:py-28">
      <Container>
        <Reveal className="max-w-2xl">
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-ink sm:text-[2.6rem]">
            {pricing.title}
          </h2>
          <p className="mt-4 font-hanken text-lg leading-relaxed text-ink/70">{pricing.intro}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 90}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                tier.highlight
                  ? 'border-ink bg-ink text-shell shadow-[0_28px_48px_-24px_rgba(12,74,110,0.7)] hover:shadow-[0_38px_56px_-22px_rgba(12,74,110,0.85)]'
                  : 'border-ink/10 bg-white text-ink hover:border-sea-200 hover:shadow-[0_26px_44px_-22px_rgba(12,74,110,0.4)]'
              }`}
            >
              {/* accent bar that grows in on hover */}
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  tier.highlight ? 'bg-clay-400' : 'bg-gradient-to-r from-sea-500 to-sea-700'
                }`}
              />
              <div className="mb-5 flex items-start justify-between gap-2">
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                    tier.highlight
                      ? 'bg-white/12 text-white'
                      : 'bg-sea-50 text-sea-600 group-hover:bg-sea-600 group-hover:text-white'
                  }`}
                >
                  <Icon name="home" className="h-6 w-6" />
                </span>
                {tier.highlight && (
                  <span className="rounded-full bg-clay-500 px-2.5 py-1 font-hanken text-[10px] font-bold uppercase tracking-wider text-white">
                    Najčešći izbor
                  </span>
                )}
              </div>
              <p className={`font-hanken text-sm font-semibold leading-snug ${tier.highlight ? 'text-shell/80' : 'text-ink/70'}`}>
                {tier.name}
              </p>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className={`font-fraunces text-3xl font-medium ${tier.highlight ? 'text-shell' : 'text-ink'}`}>
                  {tier.price}
                </span>
                {tier.unit && (
                  <span className={`font-hanken text-xs font-medium ${tier.highlight ? 'text-shell/55' : 'text-ink/40'}`}>
                    {tier.unit}
                  </span>
                )}
              </p>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  )
}

/* ---------- Review reminder ---------- */

function ReviewBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="flex flex-col items-start gap-5 rounded-2xl border border-clay-400/30 bg-clay-500/[0.06] p-7 sm:flex-row sm:items-center sm:p-8">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-clay-500 text-white">
            <Icon name="star" className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-fraunces text-xl font-medium text-ink">{reviewFeature.title}</h3>
            <p className="mt-1.5 max-w-2xl font-hanken text-[15px] leading-relaxed text-ink/65">
              {reviewFeature.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

/* ---------- Contact ---------- */

function ContactMethod({
  icon,
  label,
  value,
  href,
}: {
  icon: IconName
  label: string
  value: string
  href: string
}) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-4 py-3.5"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-shell/[0.07] text-clay-400 transition-colors group-hover:bg-clay-500 group-hover:text-white">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-hanken text-[11px] font-semibold uppercase tracking-[0.12em] text-shell/45">
          {label}
        </span>
        <span className="block truncate font-hanken text-[15px] font-medium text-shell transition-colors group-hover:text-clay-300">
          {value}
        </span>
      </span>
      <Icon
        name="chevronRight"
        className="h-4 w-4 shrink-0 text-shell/25 transition-all group-hover:translate-x-0.5 group-hover:text-shell/50"
      />
    </a>
  )
}

function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-ink py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: invitation + direct methods */}
          <Reveal>
            <Eyebrow light>{contact.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-fraunces text-3xl font-medium leading-tight text-shell sm:text-[2.7rem]">
              {contact.title}
            </h2>

            <div className="mt-8 divide-y divide-shell/10 border-y border-shell/10">
              {contact.methods.map((m) => (
                <ContactMethod key={m.label} icon={m.icon} label={m.label} value={m.value} href={m.href} />
              ))}
              {socials.map((s) => (
                <ContactMethod key={s.label} icon={s.icon} label={s.label} value={s.value} href={s.href} />
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <p className="font-fraunces text-lg italic text-shell/75">— {contact.signature}</p>
              <span className="h-px flex-1 bg-shell/10" />
            </div>
          </Reveal>

          {/* right: tiny form */}
          <Reveal delay={120} className="rounded-[1.75rem] bg-shell p-7 shadow-soft sm:p-9">
            <InquiryForm />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* ---------- Footer ---------- */

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-shell/10 bg-ink pb-10 pt-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Wordmark light />
            <p className="mt-3 max-w-xs font-hanken text-sm leading-relaxed text-shell/45">{footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 font-hanken text-sm text-shell/60">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-shell">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-shell/[0.06] text-shell/60 transition-all hover:bg-clay-500 hover:text-white"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-shell/10 pt-6 font-hanken text-xs text-shell/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brand.name}. Sva prava pridržana.</p>
          <a href={footer.webHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-shell/70">
            Izrađuje Tamara · {footer.web}
          </a>
        </div>
      </Container>
    </footer>
  )
}
