import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { LANGUAGES, LANGUAGE_LABELS } from '../i18n/types'
import { Flag } from './Flag'

/** Compact dropdown language switcher that lives in the sticky header. */
export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-sea-800 shadow-sm ring-1 ring-sea-100 active:scale-95"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Flag code={lang} />
        <span className="uppercase">{lang}</span>
        <span className="text-xs text-sea-400" aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl bg-white py-1 shadow-card ring-1 ring-sea-100"
        >
          {LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === lang}
                onClick={() => {
                  setLang(code)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm font-semibold transition-colors ${
                  code === lang ? 'bg-sea-50 text-sea-700' : 'text-slate-600 hover:bg-sand-50'
                }`}
              >
                <Flag code={code} />
                {LANGUAGE_LABELS[code].label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
