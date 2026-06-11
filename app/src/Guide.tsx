import { LanguageProvider } from './i18n/LanguageContext'
import { PropertyContext } from './property'
import App from './App'
import type { PropertyContent } from './data/content'

/**
 * The guest guide for a single property. Kept in its own module so it can be
 * code-split away from the owner landing page — a guest who opens a guide URL
 * never downloads the marketing page, and vice versa.
 */
export default function Guide({ content }: { content: PropertyContent }) {
  return (
    <PropertyContext.Provider value={content}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </PropertyContext.Provider>
  )
}
