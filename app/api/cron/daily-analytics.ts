import type { VercelRequest, VercelResponse } from '@vercel/node'
import { properties } from '../../src/data/content'
import { zagrebDayRange, zagrebTrailingRange } from '../lib/dates'
import { generateReport } from '../lib/gemini'
import { sendTelegramMessage } from '../lib/telegram'
import { getEventCounts, getMetrics, getStats, umamiLogin } from '../lib/umami'

/* ============================================================================
 *  📊  DAILY ANALYTICS — Vercel Cron → Umami → Gemini → Telegram
 * ----------------------------------------------------------------------------
 *  Runs once a day (see vercel.json). Pulls yesterday's Umami stats + events,
 *  reduces them to a small JSON summary (the LLM gets clean facts, not raw
 *  rows), asks Gemini Flash for a short write-up, and pushes it to Telegram.
 *  Any failure still sends a short alert to Telegram instead of failing silently.
 * ========================================================================== */

const TRACKED_EVENTS = ['demo_opened', 'picker_opened', 'picker_completed', 'contact_clicked', 'pricing_viewed']

/** First path segment of a page URL is the property slug, e.g. "/pick/selce" → "selce",
 *  or "/selce#beaches" → "selce" once the hash is stripped. */
function propertyLabel(path: string): string {
  const clean = path.split('#')[0].split('?')[0]
  const slug = clean.split('/').filter(Boolean).pop()
  const name = slug ? properties[slug]?.property.name : undefined
  return name ?? path
}

async function buildSummary() {
  const websiteId = process.env.UMAMI_WEBSITE_ID
  if (!websiteId) throw new Error('Missing env var UMAMI_WEBSITE_ID')

  const token = await umamiLogin()
  const yesterday = zagrebDayRange(1)
  const dayBefore = zagrebDayRange(2)
  const sevenDays = zagrebTrailingRange(7)

  const [statsYesterday, statsDayBefore, statsSevenDays, events, topPages, topReferrers] = await Promise.all([
    getStats(token, websiteId, yesterday),
    getStats(token, websiteId, dayBefore),
    getStats(token, websiteId, sevenDays),
    getEventCounts(token, websiteId, yesterday, TRACKED_EVENTS),
    getMetrics(token, websiteId, yesterday, 'path', 5),
    getMetrics(token, websiteId, yesterday, 'referrer', 5),
  ])

  const pickerOpened = events.picker_opened
  const pickerCompleted = events.picker_completed

  return {
    date: yesterday.dateLabel,
    visitors: statsYesterday.visitors,
    previous_day: statsDayBefore.visitors,
    seven_day_daily_average: Math.round((statsSevenDays.visitors / 7) * 10) / 10,
    bounce_rate: statsYesterday.visits ? Math.round((statsYesterday.bounces / statsYesterday.visits) * 1000) / 10 : 0,
    avg_visit_duration_seconds: statsYesterday.visits
      ? Math.round(statsYesterday.totaltime / statsYesterday.visits)
      : 0,
    events,
    conversion: {
      picker_completion_rate: pickerOpened ? Math.round((pickerCompleted / pickerOpened) * 1000) / 10 : null,
    },
    top_pages: topPages.map(([path, count]) => [propertyLabel(path), count] as [string, number]),
    top_referrers: topReferrers,
  }
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const secret = process.env.CRON_SECRET
  if (secret && request.headers.authorization !== `Bearer ${secret}`) {
    return response.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const summary = await buildSummary()
    const report = await generateReport(summary)
    await sendTelegramMessage(report)
    return response.status(200).json({ ok: true, summary })
  } catch (error) {
    const message = (error as Error).message
    await sendTelegramMessage(`⚠️ daily-analytics job failed: ${message}`).catch(() => {})
    return response.status(500).json({ ok: false, error: message })
  }
}
