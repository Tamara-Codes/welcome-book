import { inquiryConfig, buildEmailBody, emailSubject, type InquiryData } from './content'

/** How the inquiry was delivered, so the UI can tailor the success copy. */
export type SubmitMode = 'endpoint' | 'mailto'

/**
 * Send an inquiry. If a Web3Forms access key is configured we POST it in the
 * background (the message lands in the inbox, no email app opens); otherwise we
 * fall back to opening the visitor's email client with a pre-filled message.
 * Throws on failure so the caller can show an error.
 */
export async function submitInquiry(data: InquiryData): Promise<SubmitMode> {
  if (inquiryConfig.accessKey) {
    const res = await fetch(inquiryConfig.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: inquiryConfig.accessKey,
        subject: emailSubject,
        from_name: data.fullName,
        name: data.fullName,
        email: data.email,
        message: data.message,
      }),
    })
    const json = await res.json().catch(() => null)
    if (!res.ok || !json?.success) {
      throw new Error(`Submission failed with status ${res.status}`)
    }
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
