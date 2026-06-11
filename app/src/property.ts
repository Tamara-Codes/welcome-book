import { createContext, useContext } from 'react'
import type { PropertyContent } from './data/content'

/**
 * The active property's content, selected from the URL path at startup
 * (see main.tsx). Views read their data through `useProperty()` instead of
 * importing a single property directly, which is what makes the app
 * multi-tenant.
 */
export const PropertyContext = createContext<PropertyContent | null>(null)

export function useProperty(): PropertyContent {
  const ctx = useContext(PropertyContext)
  if (!ctx) throw new Error('useProperty must be used within PropertyContext')
  return ctx
}
