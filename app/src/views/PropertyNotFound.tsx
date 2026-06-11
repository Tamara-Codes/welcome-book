import { properties } from '../data/content'
import { PRODUCT_NAME } from '../product'

/**
 * Shown when the URL path doesn't match any known property slug. Lists the
 * available properties as a simple directory (also handy during development).
 */
export function PropertyNotFound({ slug }: { slug: string }) {
  const known = Object.keys(properties)

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-sea-800">{PRODUCT_NAME}</h1>
      <p className="mt-3 text-slate-600">
        {slug
          ? <>We couldn’t find a guide at <span className="font-mono font-bold">/{slug}</span>.</>
          : 'Please open this guide using the link or QR code from your apartment.'}
      </p>

      {known.length > 0 && (
        <div className="mt-6 w-full">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Available guides</p>
          <div className="space-y-2">
            {known.map((s) => (
              <a
                key={s}
                href={`/${s}`}
                className="block rounded-xl bg-sea-50 px-4 py-3 font-bold text-sea-700 active:scale-[0.98]"
              >
                /{s} — {properties[s].property.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
