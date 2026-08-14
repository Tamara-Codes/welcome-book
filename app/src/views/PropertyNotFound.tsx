import { PRODUCT_NAME } from '../product'

/**
 * Shown when the URL path doesn't match any known property slug.
 */
export function PropertyNotFound({ slug }: { slug: string }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-sm flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-2xl font-bold text-sea-800">{PRODUCT_NAME}</h1>
      <p className="mt-3 text-slate-600">
        {slug
          ? <>We couldn’t find a guide at <span className="font-mono font-bold">/{slug}</span>.</>
          : 'Please open this guide using the link or QR code from your apartment.'}
      </p>

    </div>
  )
}
