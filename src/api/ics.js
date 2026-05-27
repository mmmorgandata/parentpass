function formatICSDate(dateStr, timeStr) {
  // dateStr: "2026-06-10", timeStr: "14:30"
  const [y, m, d] = dateStr.split('-')
  const [hh, mm] = timeStr.split(':')
  return `${y}${m}${d}T${hh}${mm}00`
}

function escapeICS(str) {
  return str.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
}

export function generateICS(events, travelerName) {
  const now = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z'

  const veventBlocks = events.map(event => {
    const dtstart = formatICSDate(event.date, event.time)
    // Default duration: 2 hours
    const [hh, mm] = event.time.split(':').map(Number)
    const endHH = String((hh + 2) % 24).padStart(2, '0')
    const dtend = formatICSDate(event.date, `${endHH}:${mm.toString().padStart(2, '0')}`)

    return [
      'BEGIN:VEVENT',
      `UID:${event.id}-parentpass@app`,
      `DTSTAMP:${now}`,
      `DTSTART:${dtstart}`,
      `DTEND:${dtend}`,
      `SUMMARY:${escapeICS(event.titleZh)}`,
      `DESCRIPTION:${escapeICS(event.details)}`,
      `LOCATION:${escapeICS(event.addressEn)}`,
      'BEGIN:VALARM',
      'TRIGGER:-PT2H',
      'ACTION:DISPLAY',
      `DESCRIPTION:提醒：${escapeICS(event.titleZh)}`,
      'END:VALARM',
      'END:VEVENT',
    ].join('\r\n')
  })

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ParentPass//CN',
    `X-WR-CALNAME:${escapeICS(travelerName)}的美国行程`,
    'X-WR-TIMEZONE:America/Los_Angeles',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    ...veventBlocks,
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadICS(content, filename) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  // On mobile browsers (WeChat, Safari iOS) programmatic a.click() is blocked.
  // Opening the blob URL directly lets the browser handle it natively —
  // iOS will show "Add to Calendar", Android will offer to open with Calendar app.
  const isDesktop = !('ontouchstart' in window)

  if (isDesktop) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  } else {
    // Mobile: open in new tab so the OS can intercept and offer "Add to Calendar"
    window.open(url, '_blank')
    // Don't revoke immediately — the tab needs time to read the blob
    setTimeout(() => URL.revokeObjectURL(url), 10000)
  }
}
