/**
 * Generates a self-contained HTML itinerary file for WeChat sharing.
 * Run: node scripts/export-itinerary.mjs
 * Output: dist-export/行程手册.html
 */
import { writeFileSync, mkdirSync } from 'fs'
import { defaultTripData } from '../src/data/tripData.js'

const { daughter, events } = defaultTripData

// ── Helpers ────────────────────────────────────────────────────────────────

const DAYS_ZH = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const MONTHS_ZH = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']

function formatDateHeader(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  const m = MONTHS_ZH[d.getMonth()]
  const day = d.getDate()
  const weekday = DAYS_ZH[d.getDay()]
  return `${m}${day}日 ${weekday}`
}

function typeColor(type) {
  if (type === 'flight') return '#6366f1'
  if (type === 'hotel')  return '#0891b2'
  return '#059669'
}

function typeBg(type) {
  if (type === 'flight') return '#eef2ff'
  if (type === 'hotel')  return '#ecfeff'
  return '#ecfdf5'
}

function typeLabel(type) {
  if (type === 'flight') return '✈️ 航班'
  if (type === 'hotel')  return '🏠 住宿'
  return '📍 活动'
}

// Sort and group by date
const sorted = [...events].sort((a, b) => {
  if (a.date !== b.date) return a.date.localeCompare(b.date)
  return a.time.localeCompare(b.time)
})

const byDate = {}
for (const e of sorted) {
  if (!byDate[e.date]) byDate[e.date] = []
  byDate[e.date].push(e)
}

// ── Card HTML ──────────────────────────────────────────────────────────────

function eventCard(e) {
  const color = typeColor(e.type)
  const bg = typeBg(e.type)
  const label = typeLabel(e.type)

  const addressLine = e.addressZh ? `
    <div style="margin-top:8px;padding:8px 10px;background:#f8fafc;border-radius:8px;border-left:3px solid ${color}">
      <span style="font-size:12px;color:#64748b">📍 ${e.addressZh}</span><br>
      <span style="font-size:11px;color:#94a3b8">${e.addressEn}</span>
    </div>` : ''

  const bookingLine = e.bookingUrl ? `
    <div style="margin-top:6px">
      <a href="${e.bookingUrl}" style="font-size:12px;color:${color}">🔗 预订链接</a>
    </div>` : ''

  return `
  <div style="margin-bottom:12px;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
    <div style="background:${bg};padding:10px 14px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #e2e8f0">
      <span style="font-size:11px;font-weight:600;color:${color};background:white;padding:2px 8px;border-radius:20px;border:1px solid ${color}">${label}</span>
      <span style="font-size:13px;font-weight:700;color:#1e293b">${e.titleZh}</span>
      <span style="margin-left:auto;font-size:13px;font-weight:600;color:${color}">${e.time}</span>
    </div>
    <div style="padding:10px 14px">
      <p style="margin:0 0 4px;font-size:13px;color:#374151;line-height:1.5">${e.detailsZh}</p>
      <p style="margin:0 0 6px;font-size:11px;color:#9ca3af;line-height:1.5">${e.detailsEn}</p>
      ${addressLine}
      ${bookingLine}
    </div>
  </div>`
}

// ── Full HTML ──────────────────────────────────────────────────────────────

const dayBlocks = Object.entries(byDate).map(([date, dayEvents]) => `
  <div style="margin-bottom:24px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <div style="background:#4f46e5;color:white;font-size:13px;font-weight:700;padding:4px 14px;border-radius:20px">${formatDateHeader(date)}</div>
      <div style="flex:1;height:1px;background:#e2e8f0"></div>
    </div>
    ${dayEvents.map(eventCard).join('')}
  </div>
`).join('')

const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>爸妈美国行程手册</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; background: #f1f5f9; color: #1e293b; }
  .page { max-width: 520px; margin: 0 auto; padding: 16px; }
  @media print {
    body { background: white; }
    .page { max-width: 100%; padding: 20px; }
    .no-print { display: none; }
  }
</style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);color:white;border-radius:16px;padding:20px;margin-bottom:20px;text-align:center">
    <div style="font-size:32px;margin-bottom:8px">🇺🇸</div>
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">欢迎来到美国</h1>
    <p style="font-size:13px;opacity:0.85">爸妈美国行程手册 · 2026年6月</p>
  </div>

  <!-- Contact card -->
  <div style="background:white;border-radius:12px;padding:16px;margin-bottom:20px;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
    <p style="font-size:12px;color:#64748b;margin-bottom:8px;font-weight:600">📞 紧急联系</p>
    <div style="display:flex;justify-content:space-between;align-items:center">
      <div>
        <p style="font-size:16px;font-weight:700;color:#4f46e5">${daughter.name} (${daughter.nameEn})</p>
        <p style="font-size:15px;color:#1e293b;margin-top:2px">${daughter.phone}</p>
      </div>
      <a href="tel:${daughter.phone}" style="background:#4f46e5;color:white;text-decoration:none;padding:8px 16px;border-radius:10px;font-size:13px;font-weight:600">拨打</a>
    </div>
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid #f1f5f9;display:flex;gap:16px">
      <div style="text-align:center;flex:1">
        <p style="font-size:11px;color:#94a3b8">美国紧急救援</p>
        <p style="font-size:18px;font-weight:800;color:#dc2626">911</p>
      </div>
      <div style="width:1px;background:#e2e8f0"></div>
      <div style="text-align:center;flex:1">
        <p style="font-size:11px;color:#94a3b8">中国驻美大使馆</p>
        <p style="font-size:14px;font-weight:700;color:#dc2626">+1 202-495-2266</p>
      </div>
    </div>
  </div>

  <!-- Legend -->
  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
    <span style="font-size:11px;padding:3px 10px;border-radius:20px;background:#eef2ff;color:#6366f1;font-weight:600">✈️ 航班</span>
    <span style="font-size:11px;padding:3px 10px;border-radius:20px;background:#ecfeff;color:#0891b2;font-weight:600">🏠 住宿</span>
    <span style="font-size:11px;padding:3px 10px;border-radius:20px;background:#ecfdf5;color:#059669;font-weight:600">📍 活动</span>
  </div>

  <!-- Itinerary -->
  ${dayBlocks}

  <!-- Footer -->
  <div style="text-align:center;padding:16px;color:#94a3b8;font-size:11px;margin-top:8px">
    <p>有问题随时联系 ${daughter.name} ${daughter.phone}</p>
    <p style="margin-top:4px">在线版本：https://parentpass.vercel.app</p>
  </div>

</div>
</body>
</html>`

mkdirSync('dist-export', { recursive: true })
writeFileSync('dist-export/行程手册.html', html, 'utf-8')
console.log('✅ 生成完成：dist-export/行程手册.html')
console.log(`   共 ${sorted.length} 条行程，${Object.keys(byDate).length} 天`)
