import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import type { VercelRequest, VercelResponse } from '@vercel/node'

/* ============================================================================
 *  📷  TOKEN ENDPOINT — owner apartment-photo uploads (/pick/<slug>)
 * ----------------------------------------------------------------------------
 *  The browser uploads the file straight to Vercel Blob; this endpoint only
 *  issues a short-lived, scoped upload token — file bytes never pass through
 *  it. Requires Blob storage connected to this Vercel project (adds the
 *  BLOB_READ_WRITE_TOKEN env var automatically — see Vercel dashboard →
 *  Storage).
 * ========================================================================== */

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const body = request.body as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ['image/jpeg', 'image/png', 'image/webp'],
        addRandomSuffix: true,
        maximumSizeInBytes: 15 * 1024 * 1024,
      }),
    })
    return response.status(200).json(jsonResponse)
  } catch (error) {
    return response.status(400).json({ error: (error as Error).message })
  }
}
