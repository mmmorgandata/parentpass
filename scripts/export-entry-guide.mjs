/**
 * Generates a self-contained HTML entry guide for WeChat sharing.
 * Run: node scripts/export-entry-guide.mjs
 * Output: dist-export/入境须知.html
 */
import { writeFileSync, mkdirSync } from 'fs'

// ── Data (mirrored from EntryGuide.jsx) ───────────────────────────────────

const STEPS = [
  {
    icon: '🛬',
    titleZh: '下机',
    titleEn: 'Deplane',
    descZh: '跟着人流走，找头顶的 "Baggage Claim" 标识，沿指示牌一直走。',
    descEn: 'Follow the crowd. Look for "Baggage Claim" overhead signs and keep walking.',
  },
  {
    icon: '🧳',
    titleZh: '取行李',
    titleEn: 'Baggage Claim',
    descZh: '看大屏幕，找到自己的航班号，走到对应的行李转盘（Carousel）旁等候。',
    descEn: 'Find your flight number on the screen. Go to the matching carousel number and wait.',
  },
  {
    icon: '🛂',
    titleZh: '护照检查',
    titleEn: 'Passport Control',
    descZh: '取完行李后排队过护照检查，把护照递给移民官，回答几个简单问题。',
    descEn: 'After collecting bags, queue for passport control. Hand your passport to the officer and answer a few questions.',
    qa: [
      { qZh: '来美国的目的？',          qEn: 'Purpose of your visit?',       aZh: '探望女儿',               aEn: '"Visiting my daughter"' },
      { qZh: '打算住多久？',            qEn: 'How long will you stay?',      aZh: '说具体时间，如"3 weeks"', aEn: '"3 weeks" / "One month"' },
      { qZh: '住在哪里？',              qEn: 'Where are you staying?',       aZh: '报出女儿地址或酒店名称',  aEn: "Your daughter's address or hotel name" },
    ],
  },
  {
    icon: '🚪',
    titleZh: '出口接机',
    titleEn: 'Exit & Meet',
    descZh: '通过检查后进入到达大厅。女儿会在这里等你，或按约定找接机牌。',
    descEn: 'Once through, you enter the arrivals hall. Your daughter will be waiting for you here.',
  },
]

const PROHIBITED = [
  { zh: '新鲜水果、蔬菜（包括自带的）',   en: 'Fresh fruits and vegetables' },
  { zh: '生肉、熟肉、腊肠、腊肉、火腿', en: 'Raw or cooked meat, sausage, cured meats' },
  { zh: '自制食品（饺子、咸蛋、月饼等）', en: 'Homemade food (dumplings, salted eggs, etc.)' },
  { zh: '土壤、带根植物、种子',           en: 'Soil, rooted plants, or seeds' },
]

const ALLOWED = [
  { zh: '密封包装零食（饼干、糖果、薯片）', en: 'Factory-sealed snacks (cookies, candy, chips)' },
  { zh: '茶叶（少量，非粉末状）',           en: 'Tea leaves (small amounts, not powdered)' },
  { zh: '密封干货（干蘑菇、枸杞、红枣）',   en: 'Sealed dried goods (dried mushrooms, goji berries)' },
  { zh: '自用药品（最好携带处方）',          en: 'Personal medication (carry prescription if possible)' },
]

const NOTES = [
  { zh: '携带现金超过 $10,000 必须申报',                          en: 'Cash over $10,000 must be declared' },
  { zh: '不确定的食品申报表选"是"——如实申报不会被罚', en: 'Unsure about food? Mark "yes" — declaring honestly has no penalty' },
  { zh: '中药材大部分可以；含濒危动物成分（熊胆、虎骨）严格禁止', en: 'Most herbal medicine OK; items with endangered animal parts strictly banned' },
]

// ── HTML builders ──────────────────────────────────────────────────────────

function stepCard(step, index, total) {
  const isLast = index === total - 1

  const qaBlock = step.qa ? `
    <div style="margin-top:10px;border-radius:8px;overflow:hidden;border:1px solid #c7d2fe">
      <div style="background:#e0e7ff;padding:7px 12px;font-size:12px;font-weight:700;color:#4338ca">
        💬 移民官常见问题
      </div>
      ${step.qa.map(item => `
        <div style="padding:8px 12px;border-top:1px solid #e0e7ff;background:#f5f7ff">
          <p style="font-size:12px;font-weight:600;color:#4338ca;margin-bottom:3px">Q: ${item.qZh}</p>
          <p style="font-size:12px;color:#1e293b;margin-bottom:2px">→ ${item.aZh}</p>
          <p style="font-size:11px;color:#6b7280;font-style:italic">"${item.aEn}"</p>
        </div>
      `).join('')}
    </div>` : ''

  return `
  <div style="display:flex;gap:12px;${isLast ? '' : 'margin-bottom:4px'}">
    <!-- Timeline dot + line -->
    <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
      <div style="width:32px;height:32px;border-radius:50%;background:#4f46e5;color:white;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">${index + 1}</div>
      ${!isLast ? '<div style="width:2px;flex:1;background:#e0e7ff;margin:4px 0;min-height:16px"></div>' : ''}
    </div>
    <!-- Card -->
    <div style="flex:1;${isLast ? '' : 'padding-bottom:12px'}">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:12px;padding:12px;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <p style="font-size:15px;font-weight:700;color:#1e293b;margin-bottom:4px">${step.icon} ${step.titleZh} <span style="font-size:12px;color:#94a3b8;font-weight:400">${step.titleEn}</span></p>
        <p style="font-size:13px;color:#4b5563;line-height:1.6;margin:0">${step.descZh}</p>
        <p style="font-size:11px;color:#9ca3af;line-height:1.5;margin-top:3px">${step.descEn}</p>
        ${qaBlock}
      </div>
    </div>
  </div>`
}

function customsSection({ icon, titleZh, titleEn, items, bg, borderColor, titleColor, dotColor }) {
  const rows = items.map(item => `
    <div style="display:flex;gap:8px;padding:7px 0;border-bottom:1px solid ${borderColor}">
      <span style="font-size:14px;flex-shrink:0;margin-top:1px">${icon}</span>
      <div>
        <p style="font-size:13px;color:#1e293b;margin:0;line-height:1.5">${item.zh}</p>
        <p style="font-size:11px;color:#6b7280;margin:2px 0 0;line-height:1.4">${item.en}</p>
      </div>
    </div>
  `).join('')

  return `
  <div style="border-radius:12px;overflow:hidden;border:1px solid ${borderColor};margin-bottom:12px">
    <div style="background:${bg};padding:10px 14px;border-bottom:1px solid ${borderColor}">
      <p style="font-size:13px;font-weight:700;color:${titleColor};margin:0">${icon} ${titleZh} <span style="font-weight:400;font-size:12px">${titleEn}</span></p>
    </div>
    <div style="background:white;padding:0 14px">
      ${rows}
    </div>
  </div>`
}

// ── Assemble HTML ──────────────────────────────────────────────────────────

const stepsHtml = STEPS.map((s, i) => stepCard(s, i, STEPS.length)).join('')

const customsHtml = [
  customsSection({
    icon: '❌', titleZh: '绝对不能带', titleEn: 'Prohibited Items',
    items: PROHIBITED,
    bg: '#fef2f2', borderColor: '#fecaca', titleColor: '#dc2626', dotColor: '#ef4444',
  }),
  customsSection({
    icon: '✅', titleZh: '通常可以带', titleEn: 'Generally Allowed',
    items: ALLOWED,
    bg: '#f0fdf4', borderColor: '#bbf7d0', titleColor: '#16a34a', dotColor: '#22c55e',
  }),
  customsSection({
    icon: '⚠️', titleZh: '注意事项', titleEn: 'Things to Note',
    items: NOTES,
    bg: '#fffbeb', borderColor: '#fde68a', titleColor: '#d97706', dotColor: '#f59e0b',
  }),
].join('')

const html = `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>入境须知 · 美国</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif; background: #f1f5f9; color: #1e293b; }
  .page { max-width: 520px; margin: 0 auto; padding: 16px; }
  @media print {
    body { background: white; }
    .page { max-width: 100%; padding: 20px; }
  }
</style>
</head>
<body>
<div class="page">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#4f46e5,#7c3aed);color:white;border-radius:16px;padding:20px;margin-bottom:20px;text-align:center">
    <div style="font-size:32px;margin-bottom:8px">✈️</div>
    <h1 style="font-size:22px;font-weight:800;margin-bottom:4px">入境须知</h1>
    <p style="font-size:13px;opacity:0.85">美国海关 · 一步一步跟着走</p>
  </div>

  <!-- Section: Entry Steps -->
  <div style="background:white;border-radius:14px;padding:16px;margin-bottom:16px;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
    <p style="font-size:14px;font-weight:700;color:#4f46e5;margin-bottom:14px">🚶 入境流程</p>
    ${stepsHtml}
    <div style="margin-top:14px;background:#eef2ff;border-radius:10px;padding:10px 14px">
      <p style="font-size:12px;color:#4338ca;line-height:1.6">💡 全程跟着人流和标识走即可，机场工作人员随时可以协助。Just follow the crowd and the signs — airport staff are happy to help.</p>
    </div>
  </div>

  <!-- Section: Customs -->
  <div style="background:white;border-radius:14px;padding:16px;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.06)">
    <p style="font-size:14px;font-weight:700;color:#4f46e5;margin-bottom:14px">📦 海关须知</p>
    ${customsHtml}
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:16px;color:#94a3b8;font-size:11px;margin-top:8px">
    <p>在线版本：https://parentpass.vercel.app</p>
  </div>

</div>
</body>
</html>`

mkdirSync('dist-export', { recursive: true })
writeFileSync('dist-export/入境须知.html', html, 'utf-8')
console.log('✅ 生成完成：dist-export/入境须知.html')
