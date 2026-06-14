import { useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import type { UIKey } from '../i18n/ui'
import type { PlaceCard } from '../data/content'

/** Which field to filter a list of places by. */
type Dimension = 'category' | 'tags'

interface FilterOption {
  key: string
  label: string
}

/**
 * Derive single-select filter state + options from a list of places.
 * Options are built from the data actually present (categories, or tags),
 * so the filter bar stays correct automatically as places are added/removed.
 */
export function useFilteredPlaces(places: PlaceCard[], dimension: Dimension) {
  const { t } = useLang()
  const [active, setActive] = useState('all')

  const options: FilterOption[] = useMemo(() => {
    const keys =
      dimension === 'category'
        ? Array.from(new Set(places.map((p) => p.category)))
        : Array.from(new Set(places.flatMap((p) => p.tags ?? [])))
    return keys.map((key) => ({
      key,
      label: t((dimension === 'category' ? `cat.${key}` : `tag.${key}`) as UIKey),
    }))
  }, [places, dimension, t])

  const filtered = useMemo(() => {
    if (active === 'all') return places
    return dimension === 'category'
      ? places.filter((p) => p.category === active)
      : places.filter((p) => (p.tags ?? []).includes(active))
  }, [places, dimension, active])

  return { active, setActive, options, filtered }
}

/**
 * Horizontal, thumb-scrollable row of single-select filter chips, with a
 * leading "All". Renders nothing when there's nothing meaningful to filter.
 */
export function FilterChips({
  options,
  active,
  onChange,
}: {
  options: FilterOption[]
  active: string
  onChange: (key: string) => void
}) {
  const { t } = useLang()
  if (options.length < 2) return null

  const chips: FilterOption[] = [{ key: 'all', label: t('filter.all') }, ...options]

  return (
    <div className="mb-4 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {chips.map((c) => {
        const isActive = active === c.key
        return (
          <button
            key={c.key}
            type="button"
            onClick={() => onChange(c.key)}
            aria-pressed={isActive}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              isActive ? 'bg-sea-600 text-white shadow-sm' : 'border border-sand-100 bg-white text-slate-500'
            }`}
          >
            {c.label}
          </button>
        )
      })}
    </div>
  )
}
