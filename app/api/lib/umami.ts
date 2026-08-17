/** Minimal client for a self-hosted Umami instance's reporting API.
 *  Auth is the self-hosted username/password login flow (not an API key —
 *  this Umami install doesn't expose one), so every cron run logs in fresh
 *  rather than trying to persist a token across invocations. */

interface Range {
  startAt: number
  endAt: number
}

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing env var ${name}`)
  return value
}

async function umamiFetch(path: string, token: string): Promise<unknown> {
  const url = `${requireEnv('UMAMI_URL')}${path}`
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  if (!res.ok) throw new Error(`Umami ${path} failed: ${res.status} ${await res.text()}`)
  return res.json()
}

export async function umamiLogin(): Promise<string> {
  const res = await fetch(`${requireEnv('UMAMI_URL')}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: requireEnv('UMAMI_USERNAME'),
      password: requireEnv('UMAMI_PASSWORD'),
    }),
  })
  if (!res.ok) throw new Error(`Umami login failed: ${res.status} ${await res.text()}`)
  const { token } = (await res.json()) as { token: string }
  return token
}

export interface UmamiStats {
  pageviews: number
  visitors: number
  visits: number
  bounces: number
  totaltime: number
}

/** A stat field comes back either as a bare number or `{ value }` depending on version. */
function statValue(field: unknown): number {
  if (typeof field === 'number') return field
  if (field && typeof field === 'object' && 'value' in field) return Number((field as { value: unknown }).value) || 0
  return 0
}

export async function getStats(token: string, websiteId: string, range: Range): Promise<UmamiStats> {
  const raw = (await umamiFetch(
    `/api/websites/${websiteId}/stats?startAt=${range.startAt}&endAt=${range.endAt}`,
    token,
  )) as Record<string, unknown>
  return {
    pageviews: statValue(raw.pageviews),
    visitors: statValue(raw.visitors),
    visits: statValue(raw.visits),
    bounces: statValue(raw.bounces),
    totaltime: statValue(raw.totaltime),
  }
}

/** Top values for a metric type (`path`, `referrer`, `event`, ...), as [name, count] pairs. */
export async function getMetrics(
  token: string,
  websiteId: string,
  range: Range,
  type: 'path' | 'referrer' | 'event',
  limit = 10,
): Promise<Array<[string, number]>> {
  const raw = (await umamiFetch(
    `/api/websites/${websiteId}/metrics?type=${type}&startAt=${range.startAt}&endAt=${range.endAt}`,
    token,
  )) as Array<{ x: string; y: number }>
  return raw
    .slice()
    .sort((a, b) => b.y - a.y)
    .slice(0, limit)
    .map((row) => [row.x, row.y])
}

/** Named event counts for the range, keyed by event name — zero-filled for names not returned. */
export async function getEventCounts(
  token: string,
  websiteId: string,
  range: Range,
  names: readonly string[],
): Promise<Record<string, number>> {
  const rows = await getMetrics(token, websiteId, range, 'event', 100)
  const counts: Record<string, number> = {}
  for (const name of names) counts[name] = 0
  for (const [name, count] of rows) if (name in counts) counts[name] = count
  return counts
}
