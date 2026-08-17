/** Local-day boundaries in Europe/Zagreb, converted to UTC epoch millis. */

const TZ = 'Europe/Zagreb'

function zagrebDateLabel(instant: Date): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(
    instant,
  )
}

function zagrebOffsetMinutes(instant: Date): number {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: TZ, timeZoneName: 'shortOffset' }).formatToParts(
    instant,
  )
  const tzName = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+1'
  const match = /GMT([+-]\d+)(?::(\d+))?/.exec(tzName)
  const hours = match ? parseInt(match[1], 10) : 1
  const minutes = match?.[2] ? parseInt(match[2], 10) : 0
  return hours * 60 + (hours < 0 ? -minutes : minutes)
}

/** Start/end (UTC ms) of the Zagreb calendar day `daysAgo` days before today, plus its label. */
export function zagrebDayRange(daysAgo: number): { startAt: number; endAt: number; dateLabel: string } {
  const now = new Date()
  const [y, m, d] = zagrebDateLabel(now).split('-').map(Number)
  const guess = new Date(Date.UTC(y, m - 1, d - daysAgo, 0, 0, 0))
  const offsetMin = zagrebOffsetMinutes(guess)
  const startAt = guess.getTime() - offsetMin * 60_000
  const endAt = startAt + 24 * 60 * 60 * 1000 - 1
  return { startAt, endAt, dateLabel: zagrebDateLabel(new Date(startAt)) }
}

/** Start of `daysAgo` days back through the end of yesterday. */
export function zagrebTrailingRange(days: number): { startAt: number; endAt: number } {
  return { startAt: zagrebDayRange(days).startAt, endAt: zagrebDayRange(1).endAt }
}
