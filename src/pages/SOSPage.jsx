import { useTrip } from '../context/TripContext'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

export default function SOSPage() {
  const { tripData } = useTrip()
  const { lang } = useLang()
  const d = t.sos

  const hotel = tripData.events.find(e => e.type === 'hotel')

  const contacts = [
    {
      icon: '📞',
      label: d.daughter[lang],
      value: tripData.daughter.phone,
      action: `tel:${tripData.daughter.phone}`,
      actionLabel: d.dialBtn[lang],
      color: 'bg-indigo-50 border-indigo-200',
      btnColor: 'bg-indigo-600',
    },
    {
      icon: '🚨',
      label: d.emergency[lang],
      value: '911',
      action: 'tel:911',
      actionLabel: d.dial911[lang],
      color: 'bg-red-50 border-red-200',
      btnColor: 'bg-red-600',
    },
    {
      icon: '🏨',
      label: d.hotel[lang],
      value: lang === 'zh' ? (hotel?.addressZh ?? '见订单') : (hotel?.addressEn ?? 'See booking'),
      action: null,
      color: 'bg-yellow-50 border-yellow-200',
      btnColor: null,
    },
    {
      icon: '🇨🇳',
      label: d.consulate[lang],
      value: '+1 (202) 495-2266',
      action: 'tel:+12024952266',
      actionLabel: d.dial[lang],
      color: 'bg-green-50 border-green-200',
      btnColor: 'bg-green-600',
    },
  ]

  return (
    <div className="p-4">
      <div className="bg-red-600 text-white rounded-2xl p-4 mb-5 text-center">
        <p className="text-4xl mb-1">🆘</p>
        <h2 className="text-xl font-bold">{d.title[lang]}</h2>
        <p className="text-red-200 text-sm mt-1">{d.offlineNote[lang]}</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {contacts.map((c, i) => (
          <div key={i} className={`border rounded-xl p-4 ${c.color}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 font-medium">{c.icon} {c.label}</p>
                <p className="text-lg font-bold text-gray-800 mt-1">{c.value}</p>
              </div>
              {c.action && (
                <a href={c.action} className={`${c.btnColor} text-white text-sm font-semibold px-4 py-2 rounded-xl`}>
                  {c.actionLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="font-semibold text-red-700 mb-3">📋 {d.howTo911[lang]}</p>
        <ol className="space-y-2">
          {d.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center flex-none mt-0.5">
                {i + 1}
              </span>
              <span className="text-sm text-gray-700">{step[lang]}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
