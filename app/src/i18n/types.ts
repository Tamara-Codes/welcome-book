// Supported interface languages. English is the default + fallback.
export const LANGUAGES = ['en', 'hr', 'de', 'it', 'sl', 'pl', 'cs', 'hu', 'sk'] as const

export type Lang = (typeof LANGUAGES)[number]

// Native-language display names. Flags are rendered as inline SVGs (see Flag.tsx),
// not emoji — Windows lacks flag-emoji glyphs and would show "GB", "DE", etc.
export const LANGUAGE_LABELS: Record<Lang, { label: string }> = {
  en: { label: 'English' },
  hr: { label: 'Hrvatski' },
  de: { label: 'Deutsch' },
  it: { label: 'Italiano' },
  sl: { label: 'Slovenščina' },
  pl: { label: 'Polski' },
  cs: { label: 'Čeština' },
  hu: { label: 'Magyar' },
  sk: { label: 'Slovenčina' },
}

/**
 * A piece of content text that may be translated into several languages.
 * Only `en` is required — any missing language falls back to English.
 * Owners can add more languages later by filling in the optional keys.
 */
export type Localized = { en: string } & Partial<Record<Lang, string>>

/** Resolve a Localized value for the active language, falling back to English. */
export function tx(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en
}
