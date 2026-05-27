import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrip } from '../context/TripContext'
import { useLang } from '../context/LanguageContext'
import EventForm, { blankEvent } from '../components/EventForm'

const S = {
  title:    { zh: '添加行程',               en: 'Add Event'                       },
  subtitle: { zh: '填写后点击添加，可多次添加', en: 'Fill in details, then tap Add'  },
  back:     { zh: '返回首页',               en: 'Back to Home'                    },
  add:      { zh: '+ 添加行程',             en: '+ Add Event'                     },
  success:  { zh: '添加成功！',             en: 'Event added!'                    },
}

export default function TripBuilder() {
  const { addEvent } = useTrip()
  const { lang, toggle } = useLang()
  const navigate = useNavigate()
  const [event, setEvent] = useState(blankEvent)
  const [success, setSuccess] = useState(false)

  function handleAdd() {
    if (!event.titleZh && !event.titleEn) return
    addEvent(event)
    setEvent(blankEvent())
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  const t = (key) => S[key][lang]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen p-4 pb-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold">{t('title')}</h2>
            <p className="text-xs text-gray-400 mt-0.5">{t('subtitle')}</p>
          </div>
          <button
            onClick={toggle}
            className="bg-white border border-gray-200 shadow-sm text-sm font-semibold px-3 py-1.5 rounded-full text-gray-600 active:bg-gray-50 transition-colors"
          >
            {lang === 'zh' ? '🇺🇸 EN' : '🇨🇳 中文'}
          </button>
        </div>

        <EventForm event={event} onChange={setEvent} />

        <button
          onClick={handleAdd}
          className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-base"
        >
          {t('add')}
        </button>

        {success && (
          <p className="text-center text-green-600 text-sm font-medium mt-3">{t('success')}</p>
        )}

        <button
          onClick={() => navigate('/')}
          className="mt-3 w-full border border-gray-200 text-gray-500 py-3 rounded-xl font-semibold text-base"
        >
          {t('back')}
        </button>
      </div>
    </div>
  )
}
