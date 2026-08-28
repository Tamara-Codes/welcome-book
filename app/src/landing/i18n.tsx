import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

/* ============================================================================
 *  🌐  LANDING PAGE — LANGUAGE SUPPORT (English / Croatian only)
 * ----------------------------------------------------------------------------
 *  The landing page has its own tiny i18n system, separate from the guest
 *  guide's (app/src/i18n) — different audience, different content, only two
 *  languages. On first visit the language is picked from the visitor's
 *  browser/OS locale (Croatian → hr, everything else → en); after that their
 *  explicit choice is remembered in localStorage.
 * ========================================================================== */

export type LandingLang = 'en' | 'hr'

/** A piece of landing-page copy, in both supported languages. */
export interface LText {
  en: string
  hr: string
}

const STORAGE_KEY = 'landing.lang'

function detectInitialLang(): LandingLang {
  if (typeof window === 'undefined') return 'en'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'hr') return saved

  // Croatian browser/OS locale → open in Croatian; everything else → English.
  const browser = window.navigator.language?.slice(0, 2).toLowerCase()
  return browser === 'hr' ? 'hr' : 'en'
}

interface LandingLanguageValue {
  lang: LandingLang
  setLang: (lang: LandingLang) => void
  /** Resolve a piece of bilingual copy for the active language. */
  t: (value: LText) => string
}

const LandingLanguageContext = createContext<LandingLanguageValue | null>(null)

export function LandingLanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LandingLang>(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: LandingLang) => setLangState(next), [])
  const t = useCallback((value: LText) => value[lang], [lang])
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LandingLanguageContext.Provider value={value}>{children}</LandingLanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLandingLang(): LandingLanguageValue {
  const ctx = useContext(LandingLanguageContext)
  if (!ctx) throw new Error('useLandingLang must be used within a LandingLanguageProvider')
  return ctx
}
