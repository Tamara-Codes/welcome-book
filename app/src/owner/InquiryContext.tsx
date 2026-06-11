import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { InquiryModal } from './InquiryModal'

interface InquiryContextValue {
  /** Open the "request your own guide" inquiry form. */
  open: () => void
}

const InquiryContext = createContext<InquiryContextValue | null>(null)

/** Holds the inquiry-modal state and renders it once, so any component
 *  (e.g. the header CTA) can open it via `useInquiry()`. */
export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryModal open={isOpen} onClose={() => setIsOpen(false)} />
    </InquiryContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useInquiry(): InquiryContextValue {
  const ctx = useContext(InquiryContext)
  if (!ctx) throw new Error('useInquiry must be used within InquiryProvider')
  return ctx
}
