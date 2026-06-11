import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LANGUAGES, type Lang, type Localized, tx } from './types'
import { baseUI, ui, type UIKey } from './ui'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Translate a UI key, falling back to English. */
  t: (key: UIKey) => string
  /** Resolve a Localized content value for the active language. */
  tc: (value: Localized) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'guestbook.lang'

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'

  // 1. Previously chosen language
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null
  if (saved && LANGUAGES.includes(saved)) return saved

  // 2. Browser language (so a German phone opens in German automatically)
  const browser = window.navigator.language?.slice(0, 2).toLowerCase() as Lang
  if (browser && LANGUAGES.includes(browser)) return browser

  // 3. Default
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])

  const t = useCallback(
    (key: UIKey) => ui[lang]?.[key] ?? baseUI[key] ?? key,
    [lang],
  )

  const tc = useCallback((value: Localized) => tx(value, lang), [lang])

  const value = useMemo(() => ({ lang, setLang, t, tc }), [lang, setLang, t, tc])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
