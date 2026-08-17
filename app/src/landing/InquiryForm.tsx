import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { track } from '../lib/analytics'
import { submitInquiry, type SubmitMode } from './submitInquiry'
import { formCopy, formLabels, type InquiryData } from './content'

const EMPTY: InquiryData = { fullName: '', email: '', message: '' }

/** Required field keys — validated before submit. */
const REQUIRED: (keyof InquiryData)[] = ['fullName', 'email']

/** Field styling tuned for the cream contact card. */
const field =
  'w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 font-hanken text-[15px] text-ink ' +
  'placeholder:text-ink/35 transition focus:border-clay-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-clay-400/30'
const fieldError = 'border-clay-600 focus:border-clay-600 focus:ring-clay-500/30'

/**
 * Tiny inquiry form — name, e-mail and a message. Self-contained: manages its
 * own state, validation and submission, and shows the success state inline.
 */
export function InquiryForm() {
  const [data, setData] = useState<InquiryData>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [mode, setMode] = useState<SubmitMode>('endpoint')

  function set<K extends keyof InquiryData>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof InquiryData, boolean>> = {}
    for (const key of REQUIRED) {
      if (!data[key].trim()) next[key] = true
    }
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = true
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    if (!validate()) return
    setStatus('submitting')
    try {
      const submitMode = await submitInquiry(data)
      setMode(submitMode)
      setStatus('success')
      track('inquiry_submitted', { source: 'landing' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-clay-500 text-white">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <p className="mt-5 max-w-xs font-hanken text-[15px] font-medium leading-relaxed text-ink">
          {mode === 'mailto' ? formCopy.successMailto : formCopy.success}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className="font-fraunces text-2xl font-medium text-ink">{formCopy.title}</h3>
      <p className="mt-2 font-hanken text-sm leading-relaxed text-ink/65">{formCopy.description}</p>

      <div className="mt-6 space-y-3.5">
        <label className="block">
          <span className="mb-1.5 block font-hanken text-xs font-semibold uppercase tracking-wide text-ink/55">
            {formLabels.fullName} <span className="text-clay-500">*</span>
          </span>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            className={`${field} ${errors.fullName ? fieldError : ''}`}
            autoComplete="name"
            placeholder="Vaše ime"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-hanken text-xs font-semibold uppercase tracking-wide text-ink/55">
            {formLabels.email} <span className="text-clay-500">*</span>
          </span>
          <input
            type="email"
            value={data.email}
            onChange={(e) => set('email', e.target.value)}
            className={`${field} ${errors.email ? fieldError : ''}`}
            autoComplete="email"
            inputMode="email"
            placeholder="vas@email.com"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block font-hanken text-xs font-semibold uppercase tracking-wide text-ink/55">
            {formLabels.message}
          </span>
          <textarea
            value={data.message}
            onChange={(e) => set('message', e.target.value)}
            rows={4}
            className={`${field} resize-none`}
            placeholder="Par riječi o vašem objektu i lokaciji…"
          />
        </label>
      </div>

      {status === 'error' && (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-clay-500/10 px-4 py-3 font-hanken text-sm leading-relaxed text-clay-600">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{formCopy.error}</span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3.5 font-hanken text-[15px] font-semibold text-shell transition-all hover:bg-ink-700 active:scale-[0.99] disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Spinner /> {formCopy.submitting}
          </>
        ) : (
          <>
            <Icon name="mail" className="h-[18px] w-[18px]" /> {formCopy.submit}
          </>
        )}
      </button>
      <p className="mt-3 text-center font-hanken text-xs text-ink/45">{formCopy.requiredHint}</p>
    </form>
  )
}

function Spinner() {
  return (
    <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4z" />
    </svg>
  )
}
