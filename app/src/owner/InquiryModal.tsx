import { useEffect, useRef, useState } from 'react'
import { Icon } from '../components/Icon'
import { track } from '../lib/analytics'
import { submitInquiry } from './submitInquiry'
import {
  ownerCopy,
  formLabels,
  propertyTypeOptions,
  locationOptions,
  type FieldOption,
  type InquiryData,
} from './ownerContent'

const EMPTY: InquiryData = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  apartmentCount: '',
  propertyType: '',
  message: '',
}

/** Required field keys — validated before submit. */
const REQUIRED: (keyof InquiryData)[] = ['fullName', 'email', 'location', 'apartmentCount', 'propertyType']

const inputClass =
  'w-full rounded-xl border border-sand-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 ' +
  'placeholder:text-slate-400 focus:border-sea-400 focus:outline-none focus:ring-2 focus:ring-sea-200'
const errorClass = 'border-red-300 focus:border-red-400 focus:ring-red-200'

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="mb-1 block text-xs font-bold text-slate-600">
      {text}
      {required ? <span className="text-red-500"> *</span> : <span className="font-normal text-slate-400"> ({formLabels.optional})</span>}
    </span>
  )
}

export function InquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [data, setData] = useState<InquiryData>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  // Reset to a clean form each time the modal is (re)opened.
  useEffect(() => {
    if (open) {
      setData(EMPTY)
      setErrors({})
      setStatus('idle')
    }
  }, [open])

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  function set<K extends keyof InquiryData>(key: K, value: string) {
    setData((d) => ({ ...d, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof InquiryData, boolean>> = {}
    for (const key of REQUIRED) {
      if (!data[key].trim()) next[key] = true
    }
    // Basic email sanity check.
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = true
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return
    if (!validate()) return
    setStatus('submitting')
    try {
      await submitInquiry(data)
      setStatus('success')
      track('owner_inquiry_submitted', { source: 'guide' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/50 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={ownerCopy.form.title}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-screen-sm overflow-y-auto rounded-t-3xl bg-sand-50 shadow-2xl sm:rounded-3xl"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-sand-100 bg-sand-50/95 px-5 py-4 backdrop-blur">
          <div>
            <h2 className="font-display text-xl font-bold text-sea-800">{ownerCopy.form.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={ownerCopy.form.close}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-slate-500 shadow-sm active:scale-95"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="px-6 py-12 text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sea-100 text-sea-600">
              <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <p className="mx-auto mt-5 max-w-sm text-base font-semibold leading-relaxed text-slate-700">
              {ownerCopy.form.success}
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-7 px-6">
              {ownerCopy.form.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="px-5 py-5">
            <p className="text-sm leading-relaxed text-slate-600">{ownerCopy.form.description}</p>

            <div className="mt-5 space-y-3.5">
              <label className="block">
                <Label text={formLabels.fullName} required />
                <input
                  type="text"
                  value={data.fullName}
                  onChange={(e) => set('fullName', e.target.value)}
                  className={`${inputClass} ${errors.fullName ? errorClass : ''}`}
                  autoComplete="name"
                />
              </label>

              <label className="block">
                <Label text={formLabels.email} required />
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => set('email', e.target.value)}
                  className={`${inputClass} ${errors.email ? errorClass : ''}`}
                  autoComplete="email"
                  inputMode="email"
                />
              </label>

              <label className="block">
                <Label text={formLabels.phone} />
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className={inputClass}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className="block">
                <Label text={formLabels.location} required />
                <Select
                  value={data.location}
                  onChange={(v) => set('location', v)}
                  options={locationOptions}
                  invalid={errors.location}
                />
              </label>

              <label className="block">
                <Label text={formLabels.apartmentCount} required />
                <input
                  type="number"
                  min={1}
                  value={data.apartmentCount}
                  onChange={(e) => set('apartmentCount', e.target.value)}
                  className={`${inputClass} ${errors.apartmentCount ? errorClass : ''}`}
                  inputMode="numeric"
                />
              </label>

              <label className="block">
                <Label text={formLabels.propertyType} required />
                <Select
                  value={data.propertyType}
                  onChange={(v) => set('propertyType', v)}
                  options={propertyTypeOptions}
                  invalid={errors.propertyType}
                />
              </label>

              <label className="block">
                <Label text={formLabels.message} />
                <textarea
                  value={data.message}
                  onChange={(e) => set('message', e.target.value)}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            {status === 'error' && (
              <p className="mt-3 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm leading-relaxed text-red-700">
                <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{ownerCopy.form.error}</span>
              </p>
            )}

            <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-5 w-full disabled:opacity-60">
              {status === 'submitting' ? (
                <>
                  <Spinner /> {ownerCopy.form.submitting}
                </>
              ) : (
                <>
                  <Icon name="mail" className="h-5 w-5" /> {ownerCopy.form.submit}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Select({
  value,
  onChange,
  options,
  invalid,
}: {
  value: string
  onChange: (value: string) => void
  options: FieldOption[]
  invalid?: boolean
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    if (!open) return
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.stopPropagation()
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-3.5 py-2.5 text-left text-sm
          focus:outline-none focus:ring-2 focus:ring-sea-200
          ${invalid ? 'border-red-300 focus:border-red-400 focus:ring-red-200' : open ? 'border-sea-400' : 'border-sand-200'}
          ${selected ? 'text-slate-800' : 'text-slate-400'}`}
      >
        <span className="truncate">{selected ? selected.label : '—'}</span>
        <Icon
          name="chevronRight"
          className={`ml-2 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${open ? '-rotate-90' : 'rotate-90'}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1.5 max-h-60 w-full overflow-y-auto rounded-xl border border-sand-200 bg-white p-1 shadow-lg shadow-slate-900/10"
        >
          {options.map((o) => {
            const active = o.value === value
            return (
              <li key={o.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(o.value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors
                    ${active ? 'bg-sea-50 font-semibold text-sea-700' : 'text-slate-700 hover:bg-sand-50'}`}
                >
                  <span className="truncate">{o.label}</span>
                  {active && <Icon name="check" className="h-4 w-4 shrink-0 text-sea-600" strokeWidth={2.5} />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
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
