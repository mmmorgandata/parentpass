import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

// ── Data ──────────────────────────────────────────────────────────────────

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
      {
        qZh: '来美国的目的？',         qEn: 'Purpose of your visit?',
        aZh: '探望女儿 / 儿子',        aEn: '"Visiting my daughter / son"',
      },
      {
        qZh: '打算住多久？',           qEn: 'How long will you stay?',
        aZh: '说具体时间，如"3 weeks"', aEn: '"3 weeks" / "One month"',
      },
      {
        qZh: '住在哪里？',             qEn: 'Where are you staying?',
        aZh: '报出女儿地址或酒店名称',  aEn: 'Give your daughter\'s address or hotel name',
      },
    ],
  },
  {
    icon: '🚪',
    titleZh: '出口接机',
    titleEn: 'Exit & Meet',
    descZh: '通过海关后进入到达大厅。女儿会在这里等你，或按约定找接机牌。',
    descEn: 'Once through customs you enter the arrivals hall. Your daughter will be waiting for you here.',
  },
]

const PROHIBITED = [
  { zh: '新鲜水果、蔬菜（包括自带的）',     en: 'Fresh fruits and vegetables'                },
  { zh: '生肉、熟肉、腊肠、腊肉、火腿',     en: 'Raw or cooked meat, sausage, cured meats'   },
  { zh: '自制食品（饺子、咸蛋、月饼等）',   en: 'Homemade food (dumplings, salted eggs, etc.)'},
  { zh: '土壤、带根植物、种子',             en: 'Soil, rooted plants, or seeds'               },
]

const ALLOWED = [
  { zh: '密封包装零食（饼干、糖果、薯片）', en: 'Factory-sealed snacks (cookies, candy, chips)'        },
  { zh: '茶叶（少量，非粉末状）',           en: 'Tea leaves (small amounts, not powdered)'             },
  { zh: '密封干货（干蘑菇、枸杞、红枣）',   en: 'Sealed dried goods (dried mushrooms, goji berries)'   },
  { zh: '自用药品（最好携带处方）',          en: 'Personal medication (carry prescription if possible)' },
]

const NOTES = [
  { zh: '携带现金或有价证券超过 $10,000 必须申报',                     en: 'Cash or monetary instruments over $10,000 must be declared' },
  { zh: '不确定的食品，申报表选"是"——让海关决定，如实申报不会被罚', en: 'Unsure about a food item? Mark "yes" — declaring honestly has no penalty' },
  { zh: '中药材大部分可以；含濒危动物成分（熊胆、虎骨）严格禁止',     en: 'Most herbal medicine is OK; items with endangered animal parts are strictly banned' },
]

// ── Sub-components ────────────────────────────────────────────────────────

function StepCard({ step, index, lang }) {
  const [showQA, setShowQA] = useState(false)
  const isLast = index === STEPS.length - 1

  return (
    <div className="flex gap-3">
      {/* Left: number + connector line */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {index + 1}
        </div>
        {!isLast && <div className="w-0.5 bg-indigo-100 flex-1 my-1" />}
      </div>

      {/* Right: card */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-4'}`}>
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="font-bold text-gray-800 text-base">
            {step.icon} {lang === 'zh' ? step.titleZh : step.titleEn}
          </p>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            {lang === 'zh' ? step.descZh : step.descEn}
          </p>

          {/* Q&A toggle for Passport Control step */}
          {step.qa && (
            <div className="mt-3">
              <button
                onClick={() => setShowQA(v => !v)}
                className="text-xs font-semibold text-indigo-500 flex items-center gap-1"
              >
                {lang === 'zh' ? '💬 移民官常见问题' : '💬 Common officer questions'}
                <span className="ml-1">{showQA ? '▲' : '▼'}</span>
              </button>
              {showQA && (
                <div className="mt-2 flex flex-col gap-2">
                  {step.qa.map((item, i) => (
                    <div key={i} className="bg-indigo-50 rounded-lg px-3 py-2">
                      <p className="text-xs text-indigo-700 font-semibold">
                        {lang === 'zh' ? item.qZh : item.qEn}
                      </p>
                      <p className="text-xs text-indigo-500 mt-0.5">
                        → {lang === 'zh' ? item.aZh : item.aEn}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CustomsSection({ icon, titleZh, titleEn, items, bgClass, textClass, lang }) {
  return (
    <div className={`rounded-xl p-4 ${bgClass}`}>
      <p className={`font-bold text-sm mb-3 ${textClass}`}>
        {icon} {lang === 'zh' ? titleZh : titleEn}
      </p>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-base leading-snug">{icon}</span>
            <p className="text-sm text-gray-700 leading-snug">
              {lang === 'zh' ? item.zh : item.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function EntryGuide() {
  const { lang } = useLang()
  const [tab, setTab] = useState('steps')

  return (
    <div className="p-4 pb-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800">
        {lang === 'zh' ? '✈️ 入境须知' : '✈️ Entry Guide'}
      </h2>
      <p className="text-sm text-gray-400 mt-0.5">
        {lang === 'zh'
          ? '西雅图塔科马机场 · 一步一步跟着走'
          : 'Seattle-Tacoma International Airport · Step by step'}
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mt-4 mb-5">
        <button
          onClick={() => setTab('steps')}
          className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors
            ${tab === 'steps' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}
        >
          {lang === 'zh' ? '🚶 入境流程' : '🚶 Entry Steps'}
        </button>
        <button
          onClick={() => setTab('customs')}
          className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors
            ${tab === 'customs' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-500'}`}
        >
          {lang === 'zh' ? '📦 海关须知' : '📦 Customs'}
        </button>
      </div>

      {/* Tab: Entry Steps */}
      {tab === 'steps' && (
        <div>
          {STEPS.map((step, i) => (
            <StepCard key={i} step={step} index={i} lang={lang} />
          ))}
          <div className="mt-4 bg-indigo-50 rounded-xl px-4 py-3 text-sm text-indigo-700">
            {lang === 'zh'
              ? '💡 全程跟着人流和标识走即可，机场工作人员可以协助。'
              : '💡 Just follow the crowd and the signs. Airport staff are happy to help.'}
          </div>
        </div>
      )}

      {/* Tab: Customs */}
      {tab === 'customs' && (
        <div className="flex flex-col gap-4">
          <CustomsSection
            icon="❌" lang={lang}
            titleZh="绝对不能带" titleEn="Prohibited Items"
            items={PROHIBITED}
            bgClass="bg-red-50" textClass="text-red-600"
          />
          <CustomsSection
            icon="✅" lang={lang}
            titleZh="通常可以带" titleEn="Generally Allowed"
            items={ALLOWED}
            bgClass="bg-green-50" textClass="text-green-700"
          />
          <CustomsSection
            icon="⚠️" lang={lang}
            titleZh="注意事项" titleEn="Things to Note"
            items={NOTES}
            bgClass="bg-amber-50" textClass="text-amber-700"
          />
        </div>
      )}
    </div>
  )
}
