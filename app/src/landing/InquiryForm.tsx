import { useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { submitInquiry } from './submitInquiry'
import {
  formCopy,
  formLabels,
  propertyTypeOptions,
  languageOptions,
  materialsOptions,
  type FieldOption,
  type InquiryData,
} from './content'

const EMPTY: InquiryData = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  apartmentCount: '',
  propertyType: '',
  languages: '',
  materials: '',
  message: '',
}

/** Required field keys — validated before submit. */
const REQUIRED: (keyof InquiryData)[] = ['fullName', 'email', 'location', 'apartmentCount', 'propertyType']

const errorClass = 'border-red-300 focus:border-red-400 focus:ring-red-200'

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <span className="mb-1 block text-xs font-bold text-slate-600">
      {text}
      {required ? (
        <span className="text-red-500"> *</span>
      ) : (
        <span className="font-normal text-slate-400"> ({formCopy.optional})</span>
      )}
    </span>
  )
}

/**
 * The inquiry form. Self-contained: manages its own state, validation and
 * submission, and shows the success state inline once sent.
 */
export function InquiryForm() {
  const [data, setData] = useState<InquiryData>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

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
    if (!validate()) {
      // Bring the first error into view on mobile.
      document.querySelector('[data-invalid="true"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setStatus('submitting')
    try {
      await submitInquiry(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card px-6 py-12 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sea-100 text-sea-600">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.5} />
        </span>
        <p className="mx-auto mt-5 max-w-sm text-base font-semibold leading-relaxed text-slate-700">
          {formCopy.success}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-5 sm:p-6">
      <p className="text-sm leading-relaxed text-slate-600">{formCopy.description}</p>

      <div className="mt-5 space-y-3.5">
        <label className="block">
          <Label text={formLabels.fullName} required />
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => set('fullName', e.target.value)}
            className={`input ${errors.fullName ? errorClass : ''}`}
            data-invalid={errors.fullName ? 'true' : undefined}
            autoComplete="name"
          />
        </label>

        <label className="block">
          <Label text={formLabels.email} required />
          <input
            type="email"
            value={data.email}
            onChange={(e) => set('email', e.target.value)}
            className={`input ${errors.email ? errorClass : ''}`}
            data-invalid={errors.email ? 'true' : undefined}
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
            className="input"
            autoComplete="tel"
            inputMode="tel"
          />
        </label>

        <label className="block">
          <Label text={formLabels.location} required />
          <input
            type="text"
            value={data.location}
            onChange={(e) => set('location', e.target.value)}
            className={`input ${errors.location ? errorClass : ''}`}
            data-invalid={errors.location ? 'true' : undefined}
          />
        </label>

        <label className="block">
          <Label text={formLabels.apartmentCount} required />
          <input
            type="number"
            min={1}
            value={data.apartmentCount}
            onChange={(e) => set('apartmentCount', e.target.value)}
            className={`input ${errors.apartmentCount ? errorClass : ''}`}
            data-invalid={errors.apartmentCount ? 'true' : undefined}
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
          <Label text={formLabels.languages} />
          <Select value={data.languages} onChange={(v) => set('languages', v)} options={languageOptions} />
        </label>

        <label className="block">
          <Label text={formLabels.materials} />
          <Select value={data.materials} onChange={(v) => set('materials', v)} options={materialsOptions} />
        </label>

        <label className="block">
          <Label text={formLabels.message} />
          <textarea
            value={data.message}
            onChange={(e) => set('message', e.target.value)}
            rows={3}
            className="input resize-none"
          />
        </label>
      </div>

      <p className="mt-3 text-xs text-slate-400">{formCopy.requiredHint}</p>

      {status === 'error' && (
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-red-50 px-3.5 py-3 text-sm leading-relaxed text-red-700">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{formCopy.error}</span>
        </p>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-5 w-full disabled:opacity-60">
        {status === 'submitting' ? (
          <>
            <Spinner /> {formCopy.submitting}
          </>
        ) : (
          <>
            <Icon name="mail" className="h-5 w-5" /> {formCopy.submit}
          </>
        )}
      </button>
    </form>
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
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-invalid={invalid ? 'true' : undefined}
      className={`input ${invalid ? errorClass : ''} ${value ? 'text-slate-800' : 'text-slate-400'}`}
    >
      <option value="">—</option>
      {options.map((o) => (
        <option key={o.value} value={o.value} className="text-slate-800">
          {o.label}
        </option>
      ))}
    </select>
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
