import { useState, useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'

export default function PhotoTranslate() {
  const { lang } = useLang()
  const d = t.translate
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      setImage({ src: ev.target.result, file })
      setResult(null)
      setError(null)
    }
    reader.readAsDataURL(file)
  }

  async function handleTranslate() {
    if (!image) return
    setLoading(true)
    setError(null)
    try {
      const base64 = image.src.split(',')[1]
      const mediaType = image.file.type || 'image/jpeg'

      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ base64, mediaType }),
      })

      if (!response.ok) throw new Error(d.error[lang])
      const data = await response.json()
      setResult(data.translation)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-1">{d.title[lang]}</h2>
      <p className="text-gray-500 text-sm mb-4">{d.subtitle[lang]}</p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
      />

      {!image ? (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full h-48 border-2 border-dashed border-indigo-300 rounded-2xl flex flex-col items-center justify-center gap-2 text-indigo-400 bg-indigo-50 active:bg-indigo-100"
        >
          <span className="text-5xl">📷</span>
          <span className="text-base font-medium">{d.cta[lang]}</span>
        </button>
      ) : (
        <div className="space-y-3">
          <div className="relative">
            <img src={image.src} alt="preview" className="w-full rounded-2xl object-cover max-h-64" />
            <button
              onClick={() => { setImage(null); setResult(null) }}
              className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>
          <button
            onClick={handleTranslate}
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-base disabled:opacity-50"
          >
            {loading ? d.loading[lang] : d.btn[lang]}
          </button>
        </div>
      )}

      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-green-700 mb-2">{d.resultLabel[lang]}</p>
          <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">{result}</p>
          <button
            onClick={() => inputRef.current?.click()}
            className="mt-3 w-full border border-green-300 text-green-700 py-2 rounded-xl text-sm font-medium"
          >
            {d.retake[lang]}
          </button>
        </div>
      )}
    </div>
  )
}
