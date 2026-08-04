/* ============================================================================
 *  ✉️  FORM DELIVERY — shared by every form in the app
 * ----------------------------------------------------------------------------
 *  Both owner-facing forms (the landing-page inquiry and the /pick/<slug>
 *  content picker) deliver through Web3Forms: the message is POSTed in the
 *  background and lands in the inbox — no email app opens for the visitor.
 *
 *  👉 One key, one place. Set VITE_WEB3FORMS_KEY (env / Vercel) to override.
 *     1. Go to https://web3forms.com
 *     2. Enter the email that should receive submissions → you get an access
 *        key (a UUID like "a1b2c3d4-...").
 *
 *  The access key is safe in front-end code: Web3Forms keys are designed to
 *  live there and only allow submitting to your inbox.
 * ========================================================================== */

const WEB3FORMS_ACCESS_KEY = '9e0122d0-526c-4631-bb70-b3cfe8d96fc0'
const FALLBACK_EMAIL = 'codewithtamara@gmail.com'

export const formDelivery = {
  /** Web3Forms access key; empty string ⇒ use the mailto fallback. */
  accessKey:
    (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined)?.trim() || WEB3FORMS_ACCESS_KEY,
  /** Web3Forms submit endpoint. */
  endpoint: 'https://api.web3forms.com/submit',
  /** Recipient for the mailto fallback. */
  email: (import.meta.env.VITE_INQUIRY_EMAIL as string | undefined)?.trim() || FALLBACK_EMAIL,
}
