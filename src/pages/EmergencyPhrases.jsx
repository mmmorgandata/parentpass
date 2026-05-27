import { useState } from 'react'
import { phraseCategories } from '../data/emergencyPhrases'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'en-US'
  utter.rate = 0.9
  window.speechSynthesis.speak(utter)
}

export default function EmergencyPhrases() {
  const { lang } = useLang()
  const d = t.phrases
  const [activeCategory, setActiveCategory] = useState(phraseCategories[0].id)
  const [speaking, setSpeaking] = useState(null)

  const category = phraseCategories.find(c => c.id === activeCategory)

  function handleSpeak(phrase, index) {
    setSpeaking(index)
    speak(phrase.en)
    setTimeout(() => setSpeaking(null), 3000)
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-1">{d.title[lang]}</h2>
      <p className="text-gray-500 text-sm mb-4">{d.subtitle[lang]}</p>

      {/* Category tabs — label switches with lang */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {phraseCategories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-none flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors
              ${activeCategory === cat.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            <span>{cat.icon}</span>
            <span>{lang === 'zh' ? cat.label : cat.labelEn}</span>
          </button>
        ))}
      </div>

      {/* Phrase cards */}
      <div className="flex flex-col gap-3">
        {category.phrases.map((phrase, i) => {
          const isActive = speaking === i
          const primaryText   = lang === 'zh' ? phrase.zh : phrase.en
          const secondaryText = lang === 'zh' ? phrase.en : phrase.zh

          return (
            <button
              key={i}
              onClick={() => handleSpeak(phrase, i)}
              className={`w-full text-left border rounded-xl p-4 transition-all active:scale-[0.98]
                ${isActive ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
            >
              {/* Primary — large */}
              <p className="font-semibold text-base">
                {isActive ? (lang === 'zh' ? d.speaking.zh : d.speaking.en) : primaryText}
              </p>
              {/* Secondary — small */}
              {!isActive && (
                <p className={`text-sm mt-1 ${isActive ? 'text-indigo-200' : 'text-gray-400'}`}>
                  {secondaryText}
                </p>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
