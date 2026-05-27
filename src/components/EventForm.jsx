import { useState, useRef, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const EVENT_TYPES = [
  { value: 'flight',     zh: '✈️ 航班',  en: '✈️ Flight'     },
  { value: 'hotel',      zh: '🏨 住宿',  en: '🏨 Hotel'      },
  { value: 'activity',   zh: '🌟 活动',  en: '🌟 Activity'   },
  { value: 'restaurant', zh: '🍽️ 餐厅', en: '🍽️ Restaurant' },
]

const F = {
  type:        { zh: '类型',               en: 'Type'         },
  date:        { zh: '日期',               en: 'Date'         },
  time:        { zh: '时间',               en: 'Time'         },
  title:       { zh: '标题',               en: 'Title'        },
  details:     { zh: '详情（航班号、预约信息等）', en: 'Details (flight no., booking info, etc.)' },
  location:    { zh: '地点',               en: 'Location'     },
  booking:     { zh: '订单链接（可选）',    en: 'Booking Link (optional)' },
  autoEn:      { zh: '输入后自动生成英文',  en: 'Enter in Chinese — English auto-generated' },
  autoMaps:    { zh: '输入地点名称，谷歌地图导航地址自动生成', en: 'Enter in Chinese — Google Maps address auto-generated' },
  translating: { zh: '正在翻译...',         en: 'Translating...' },
  genMaps:     { zh: '正在生成导航地址...',  en: 'Generating Maps address...' },
  mapsLabel:   { zh: '📍 谷歌地图将搜索：', en: '📍 Google Maps will search: ' },
  enLabel:     { zh: 'EN: ',               en: 'EN: ' },
}

const PH = {
  title:   { zh: '如：抵达西雅图、入住酒店', en: 'e.g. Arrive Seattle, Hotel check-in' },
  details: { zh: '如：AA 2341 · 北京→西雅图', en: 'e.g. AA 2341 · Beijing → Seattle' },
  address: { zh: '如：西雅图派克市场、西雅图塔科马机场', en: 'e.g. Pike Place Market, Seattle-Tacoma Airport' },
}

export function blankEvent() {
  return {
    id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type: 'flight',
    titleZh: '', titleEn: '',
    date: '', time: '',
    detailsZh: '', detailsEn: '',
    addressZh: '', addressEn: '',
    bookingUrl: '',
  }
}

async function callTranslate(text, context) {
  if (!text.trim()) return null
  try {
    const res = await fetch('/api/text-translate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text, context }),
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.translation || null
  } catch {
    return null
  }
}

export default function EventForm({ event, onChange }) {
  const { lang } = useLang()
  const set = (field, val) => onChange({ ...event, [field]: val })
  const [loadingField, setLoadingField] = useState(null)
  const eventRef = useRef(event)
  useEffect(() => { eventRef.current = event }, [event])

  async function autoTranslate(zhField, enField, context) {
    const text = eventRef.current[zhField]
    if (!text.trim()) return
    setLoadingField(enField)
    const translation = await callTranslate(text, context)
    if (translation) onChange({ ...eventRef.current, [enField]: translation })
    setLoadingField(null)
  }

  const t = (key) => F[key][lang]
  const ph = (key) => PH[key][lang]

  return (
    <div className="flex flex-col gap-4">
      {/* Type + Date + Time */}
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="field-label">{t('type')}</label>
          <select value={event.type} onChange={e => set('type', e.target.value)} className="input">
            {EVENT_TYPES.map(opt => (
              <option key={opt.value} value={opt.value}>
                {lang === 'zh' ? opt.zh : opt.en}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="field-label">{t('date')}</label>
          <input type="date" value={event.date} onChange={e => set('date', e.target.value)} className="input" />
        </div>
        <div className="w-24">
          <label className="field-label">{t('time')}</label>
          <input type="time" value={event.time} onChange={e => set('time', e.target.value)} className="input" />
        </div>
      </div>

      {/* Title */}
      <div>
        <label className="field-label">{t('title')}</label>
        <input
          value={event.titleZh}
          onChange={e => set('titleZh', e.target.value)}
          onBlur={() => autoTranslate('titleZh', 'titleEn', 'title')}
          className="input"
          placeholder={ph('title')}
        />
        <p className="text-xs mt-1 px-0.5 h-4">
          {loadingField === 'titleEn'
            ? <span className="text-indigo-400">{t('translating')}</span>
            : event.titleEn
              ? <span className="text-gray-400">{t('enLabel')}{event.titleEn}</span>
              : <span className="text-gray-300">{t('autoEn')}</span>
          }
        </p>
      </div>

      {/* Details */}
      <div>
        <label className="field-label">{t('details')}</label>
        <input
          value={event.detailsZh}
          onChange={e => set('detailsZh', e.target.value)}
          onBlur={() => autoTranslate('detailsZh', 'detailsEn', 'details')}
          className="input"
          placeholder={ph('details')}
        />
        <p className="text-xs mt-1 px-0.5 h-4">
          {loadingField === 'detailsEn'
            ? <span className="text-indigo-400">{t('translating')}</span>
            : event.detailsEn
              ? <span className="text-gray-400">{t('enLabel')}{event.detailsEn}</span>
              : <span className="text-gray-300">{t('autoEn')}</span>
          }
        </p>
      </div>

      {/* Address */}
      <div>
        <label className="field-label">{t('location')}</label>
        <input
          value={event.addressZh}
          onChange={e => set('addressZh', e.target.value)}
          onBlur={() => autoTranslate('addressZh', 'addressEn', 'address')}
          className="input"
          placeholder={ph('address')}
        />
        <p className="text-xs mt-1 px-0.5 h-4">
          {loadingField === 'addressEn'
            ? <span className="text-indigo-400">{t('genMaps')}</span>
            : event.addressEn
              ? <span className="text-gray-400">{t('mapsLabel')}{event.addressEn}</span>
              : <span className="text-gray-300">{t('autoMaps')}</span>
          }
        </p>
      </div>

      {/* Booking URL */}
      <div>
        <label className="field-label">{t('booking')}</label>
        <input
          value={event.bookingUrl || ''}
          onChange={e => set('bookingUrl', e.target.value)}
          className="input"
          placeholder="https://..."
          type="url"
        />
      </div>
    </div>
  )
}
