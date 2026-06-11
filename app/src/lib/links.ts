/** Helpers that turn raw content values into safe, tappable links. */

/** tel: link from a phone number in any format. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

/** wa.me link from a WhatsApp number (digits only, country code, no "+"). */
export function whatsappHref(number: string, text?: string): string {
  const digits = number.replace(/[^\d]/g, '')
  const query = text ? `?text=${encodeURIComponent(text)}` : ''
  return `https://wa.me/${digits}${query}`
}

/** mailto: link. */
export function mailHref(email: string): string {
  return `mailto:${email}`
}

/**
 * Google Maps link. Accepts either a full URL (returned as-is) or a free-text
 * place query, which is turned into a Maps search URL.
 */
export function mapsHref(query: string): string {
  if (/^https?:\/\//i.test(query)) return query
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
