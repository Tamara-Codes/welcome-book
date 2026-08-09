import { createContext, useContext } from 'react'

/** All navigable views in the app. */
export type View =
  | 'home'
  | 'info'
  | 'apartments'
  | 'explore'
  | 'restaurants'
  | 'beaches'
  | 'activities'
  | 'shops'
  | 'contacts'
  | 'ferry'

interface NavContextValue {
  view: View
  go: (view: View, options?: { scrollToTop?: boolean }) => void
}

export const NavContext = createContext<NavContextValue | null>(null)

export function useNav(): NavContextValue {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavContext')
  return ctx
}
