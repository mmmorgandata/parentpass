import { useState } from 'react'
import { useTrip } from '../context/TripContext'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'
import { CITIES, cityData } from '../data/cityData'

export default function CityGuide() {
  const { tripData } = useTrip()
  const { lang } = useLang()
  const d = t.city

  // Default to the trip's city, fallback to New York
  const defaultKey = CITIES.find(c => c.en === tripData.city)?.key ?? 'NewYork'
  const [selectedKey, setSelectedKey] = useState(defaultKey)

  const data = cityData[selectedKey]
  const cityMeta = CITIES.find(c => c.key === selectedKey)

  return (
    <div>
      {/* City selector — horizontal scroll */}
      <div className="px-4 pt-2 pb-1">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {CITIES.map(c => (
            <button
              key={c.key}
              onClick={() => setSelectedKey(c.key)}
              className={`flex-none flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap border transition-colors
                ${selectedKey === c.key
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-200'}`}
            >
              <span>{c.emoji}</span>
              <span>{lang === 'zh' ? c.zh : c.en}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        {/* City header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">{cityMeta.emoji}</span>
          <div>
            <h2 className="text-xl font-bold">{lang === 'zh' ? cityMeta.zh : cityMeta.en}</h2>
            <p className="text-gray-400 text-xs">{d.guide[lang]}</p>
          </div>
        </div>

        {/* Intro */}
        <div className="bg-indigo-50 rounded-2xl p-4 mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">{data.intro[lang]}</p>
        </div>

        {/* Landmarks */}
        <CitySection title={d.landmarks[lang]}>
          {data.landmarks.map((l, i) => {
            const item = l[lang]
            return (
              <div key={i} className="border border-gray-200 rounded-xl p-3 bg-white">
                <div className="flex justify-between items-start gap-2">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <span className="flex-none text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{item.walk}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            )
          })}
        </CitySection>

        {/* Food */}
        <CitySection title={d.food[lang]}>
          {data.food.map((f, i) => {
            const item = f[lang]
            return (
              <div key={i} className="border border-gray-200 rounded-xl p-3 bg-white">
                <div className="flex justify-between items-start gap-2">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <span className="flex-none text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{item.type}</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">📍 {item.area}</p>
                <p className="text-sm text-gray-500 mt-1">{item.tip}</p>
              </div>
            )
          })}
        </CitySection>

        {/* Shopping */}
        <CitySection title={d.shopping[lang]}>
          {data.shopping.map((s, i) => {
            const item = s[lang]
            return (
              <div key={i} className="border border-gray-200 rounded-xl p-3 bg-white">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            )
          })}
        </CitySection>

        {/* Tips */}
        <CitySection title={d.tips[lang]}>
          <div className="flex flex-col gap-2">
            {data.tips[lang].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-indigo-400 mt-0.5 flex-none">•</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </CitySection>
      </div>
    </div>
  )
}

function CitySection({ title, children }) {
  return (
    <div className="mb-5">
      <p className="font-bold text-base text-gray-800 mb-2">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}
