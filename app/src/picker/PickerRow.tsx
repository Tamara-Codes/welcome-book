import { useState } from 'react'
import { copy } from './pickerContent'
import type { RowItem } from './types'

const input =
  'w-full rounded-lg border border-ink/15 bg-white px-3 py-2 font-hanken text-[15px] text-ink ' +
  'transition focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-400/25'

interface Props {
  row: RowItem
  checked: boolean
  onToggle: (checked: boolean) => void
  /** Only the fields the owner actually changed, keyed by field name. */
  edits: Record<string, string>
  onEdit: (key: string, value: string) => void
}

/**
 * One island card as a checkbox row, with an inline editor behind "Uredi".
 * Ticked by default (the parent seeds the state) so the owner only has to
 * touch what they want gone — the common case is keeping almost everything.
 */
export function PickerRow({ row, checked, onToggle, edits, onEdit }: Props) {
  const [open, setOpen] = useState(false)
  const editCount = Object.keys(edits).length

  return (
    <li
      className={`rounded-xl border transition ${
        checked ? 'border-ink/12 bg-white' : 'border-ink/8 bg-shell-100/60'
      }`}
    >
      <div className="flex items-start gap-3 p-3.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onToggle(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-clay-600"
          aria-label={row.title}
        />

        <div className="min-w-0 flex-1">
          <p
            className={`font-hanken text-[15px] font-semibold leading-tight ${
              checked ? 'text-ink' : 'text-ink/40 line-through'
            }`}
          >
            {row.title}
          </p>
          {row.subtitle && (
            <p
              className={`mt-1 line-clamp-2 font-hanken text-[13px] leading-snug ${
                checked ? 'text-ink/55' : 'text-ink/30'
              }`}
            >
              {row.subtitle}
            </p>
          )}
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {row.own && (
              <span className="rounded-full bg-ink/8 px-2 py-0.5 font-hanken text-[11px] font-semibold text-ink/60">
                {copy.own}
              </span>
            )}
            {editCount > 0 && (
              <span className="rounded-full bg-clay-500/12 px-2 py-0.5 font-hanken text-[11px] font-semibold text-clay-600">
                {editCount} {copy.edited}
              </span>
            )}
          </div>
        </div>

        {checked && row.fields.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="shrink-0 rounded-lg px-2.5 py-1 font-hanken text-[13px] font-semibold text-clay-600 transition hover:bg-clay-500/10"
          >
            {open ? copy.editClose : copy.edit}
          </button>
        )}
      </div>

      {open && checked && (
        <div className="space-y-3 border-t border-ink/8 px-3.5 py-3.5">
          {row.fields.map((field) => {
            const value = edits[field.key] ?? field.value
            return (
              <label key={field.key} className="block">
                <span className="mb-1 block font-hanken text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                  {field.label}
                </span>
                {field.multiline ? (
                  <textarea
                    rows={4}
                    value={value}
                    onChange={(e) => onEdit(field.key, e.target.value)}
                    className={`${input} resize-y`}
                  />
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => onEdit(field.key, e.target.value)}
                    className={input}
                  />
                )}
              </label>
            )
          })}
        </div>
      )}
    </li>
  )
}
