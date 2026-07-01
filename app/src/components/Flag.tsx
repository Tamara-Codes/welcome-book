import { useId } from 'react'
import type { Lang } from '../i18n/types'

/**
 * Inline SVG flags for the language switcher.
 *
 * We deliberately avoid emoji flags (🇬🇧, 🇩🇪, …): Windows has no flag-emoji
 * glyphs, so they degrade to bare regional-indicator letters ("GB", "DE").
 * Inline SVGs render identically on every platform with no network request.
 */
export function Flag({ code, className = 'h-4 w-6' }: { code: Lang; className?: string }) {
  const id = useId()
  const common = {
    viewBox: '0 0 60 40',
    className: `inline-block shrink-0 rounded-[2px] ring-1 ring-black/10 ${className}`,
    preserveAspectRatio: 'xMidYMid slice' as const,
    'aria-hidden': true,
  }

  switch (code) {
    case 'en': // United Kingdom (Union Jack)
      return (
        <svg {...common} viewBox="0 0 60 30">
          <clipPath id={`${id}-c`}>
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <clipPath id={`${id}-t`}>
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
          </clipPath>
          <g clipPath={`url(#${id}-c)`}>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}-t)`} stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      )
    case 'hr': // Croatia — red / white / blue with the checkerboard (šahovnica)
      return (
        <svg {...common}>
          <rect width="60" height="13.33" fill="#FF0000" />
          <rect y="13.33" width="60" height="13.34" fill="#fff" />
          <rect y="26.67" width="60" height="13.33" fill="#171796" />
          <g transform="translate(24 11)">
            <rect width="12" height="18" fill="#fff" />
            <rect width="3" height="3" fill="#D71920" />
            <rect x="6" width="3" height="3" fill="#D71920" />
            <rect x="3" y="3" width="3" height="3" fill="#D71920" />
            <rect x="9" y="3" width="3" height="3" fill="#D71920" />
            <rect y="6" width="3" height="3" fill="#D71920" />
            <rect x="6" y="6" width="3" height="3" fill="#D71920" />
            <rect x="3" y="9" width="3" height="3" fill="#D71920" />
            <rect x="9" y="9" width="3" height="3" fill="#D71920" />
            <rect y="12" width="3" height="3" fill="#D71920" />
            <rect x="6" y="12" width="3" height="3" fill="#D71920" />
            <rect x="3" y="15" width="3" height="3" fill="#D71920" />
            <rect x="9" y="15" width="3" height="3" fill="#D71920" />
          </g>
        </svg>
      )
    case 'de': // Germany — black / red / gold
      return (
        <svg {...common}>
          <rect width="60" height="40" fill="#000" />
          <rect y="13.33" width="60" height="13.34" fill="#DD0000" />
          <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
        </svg>
      )
    case 'it': // Italy — green / white / red
      return (
        <svg {...common}>
          <rect width="20" height="40" fill="#009246" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#CE2B37" />
        </svg>
      )
    case 'sl': // Slovenia — white / blue / red
      return (
        <svg {...common}>
          <rect width="60" height="40" fill="#fff" />
          <rect y="13.33" width="60" height="13.34" fill="#0000A0" />
          <rect y="26.67" width="60" height="13.33" fill="#D50000" />
        </svg>
      )
    case 'pl': // Poland — white / red
      return (
        <svg {...common}>
          <rect width="60" height="40" fill="#fff" />
          <rect y="20" width="60" height="20" fill="#DC143C" />
        </svg>
      )
    case 'cs': // Czechia — white / red with blue hoist triangle
      return (
        <svg {...common}>
          <rect width="60" height="20" fill="#fff" />
          <rect y="20" width="60" height="20" fill="#D7141A" />
          <path d="M0,0 L30,20 L0,40 z" fill="#11457E" />
        </svg>
      )
    case 'hu': // Hungary — red / white / green
      return (
        <svg {...common}>
          <rect width="60" height="13.33" fill="#CD2A3E" />
          <rect y="13.33" width="60" height="13.34" fill="#fff" />
          <rect y="26.67" width="60" height="13.33" fill="#436F4D" />
        </svg>
      )
  }
}
