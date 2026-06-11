import { inquiryConfig, buildEmailBody, emailSubject, type InquiryData } from './content'

/** How the inquiry was delivered, so the UI can tailor the success copy. */
export type SubmitMode = 'endpoint' | 'mailto'

/**
 * Send an inquiry. If VITE_INQUIRY_FORM_ENDPOINT is configured we POST JSON to
 * it; otherwise we fall back to opening the visitor's email client with a
 * pre-filled message. Throws on failure so the caller can show an error.
 */
export async function submitInquiry(data: InquiryData): Promise<SubmitMode> {
  if (inquiryConfig.endpoint) {
    const res = await fetch(inquiryConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error(`Submission failed with status ${res.status}`)
    return 'endpoint'
  }

  // Fallback: open the user's email client with a pre-filled message.
  const href =
    `mailto:${inquiryConfig.email}` +
    `?subject=${encodeURIComponent(emailSubject)}` +
    `&body=${encodeURIComponent(buildEmailBody(data))}`
  window.location.href = href
  return 'mailto'
}
