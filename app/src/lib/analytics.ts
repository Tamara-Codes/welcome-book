/** Thin wrapper around the Umami script tag — no-ops if it hasn't loaded. */

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void
    }
  }
}

export function track(event: string, data?: Record<string, unknown>): void {
  window.umami?.track(event, data)
}
