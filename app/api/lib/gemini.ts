/** One cheap Gemini Flash call — turns the compact analytics summary into a
 *  short Telegram-ready report. No tool use, no chat history, one shot. */

const MODEL = 'gemini-flash-latest'

const SYSTEM_PROMPT = `You are analysing daily analytics for Welcome Book, a SaaS product for vacation-rental hosts.

Write a very short Telegram morning report from the JSON summary you're given.
Report traffic, key events and conversion rates. Compare today with yesterday
and the previous 7-day average. Highlight anything unusual or potentially
important. Do not invent explanations — if you cannot tell why something
changed, say so. Keep the response under 150 words. Plain text only, no
markdown headers, a few emoji is fine. Write in English.`

export async function generateReport(summary: unknown): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('Missing env var GEMINI_API_KEY')

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${SYSTEM_PROMPT}\n\nSummary JSON:\n${JSON.stringify(summary)}` }] }],
      }),
    },
  )
  if (!res.ok) throw new Error(`Gemini request failed: ${res.status} ${await res.text()}`)

  const data = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
  }
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error('Gemini returned no text')
  return text.trim()
}
