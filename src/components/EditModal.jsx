import { useState } from 'react'
import EventForm from './EventForm'

export default function EditModal({ event, onSave, onClose }) {
  const [draft, setDraft] = useState({ ...event })

  function handleSave() {
    if (!draft.titleZh && !draft.titleEn) return
    onSave(draft)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Sheet — extra bottom padding so content clears the fixed nav bar */}
      <div className="relative w-full max-w-md bg-white rounded-t-2xl p-5 pb-28 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold">修改行程</h3>
            <p className="text-xs text-gray-400 mt-0.5">只修改这一条行程</p>
          </div>
          <button onClick={onClose} className="text-gray-400 text-2xl leading-none">×</button>
        </div>

        <EventForm event={draft} onChange={setDraft} />

        <div className="flex gap-3 mt-5">
          <button onClick={onClose} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold">
            取消
          </button>
          <button onClick={handleSave} className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold">
            保存修改
          </button>
        </div>
      </div>
    </div>
  )
}
