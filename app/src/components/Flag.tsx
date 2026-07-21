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
    case 'sk': // Slovakia — white / blue / red tricolor with the coat of arms
      return (
        <svg {...common}>
          <rect width="60" height="13.33" fill="#fff" />
          <rect y="13.33" width="60" height="13.34" fill="#0B4EA2" />
          <rect y="26.67" width="60" height="13.33" fill="#EE1C25" />
          {/* Coat of arms — red shield, white double cross on three blue hills */}
          <g transform="translate(9 7)">
            <path d="M0,1.5 a1.5,1.5 0 0 1 1.5,-1.5 h10 a1.5,1.5 0 0 1 1.5,1.5 v13 c0,6.5 -6.5,9 -6.5,9 c0,0 -6.5,-2.5 -6.5,-9 z" fill="#EE1C25" stroke="#fff" strokeWidth="0.7" />
            {/* three blue hills */}
            <path d="M0.8,17 c1.2,-2.6 3.4,-2.6 4.6,0 c1.2,-3 3.6,-3 4.8,0 c1.1,2.2 -0.2,4.6 -4.7,6.3 c-4.3,-1.6 -5.8,-4 -4.7,-6.3 z" fill="#0B4EA2" />
            {/* white double (patriarchal) cross */}
            <g fill="#fff">
              <rect x="5.7" y="3" width="1.6" height="13" rx="0.4" />
              <rect x="3.4" y="6" width="6.2" height="1.5" rx="0.4" />
              <rect x="2.6" y="9.3" width="7.8" height="1.5" rx="0.4" />
            </g>
          </g>
        </svg>
      )
  }
}
