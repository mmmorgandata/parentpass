import { useState, useRef, useCallback } from 'react'
import { useTrip } from '../context/TripContext'
import { generateICS, downloadICS } from '../api/ics'
import { useLang } from '../context/LanguageContext'
import { t } from '../i18n/translations'
import EditModal from '../components/EditModal'
import ConfirmDialog from '../components/ConfirmDialog'

const ACTION_W = 144   // px width of the two action buttons combined
const SNAP_THRESHOLD = 60

const typeColor = {
  flight:     'bg-blue-50 border-blue-200',
  hotel:      'bg-purple-50 border-purple-200',
  activity:   'bg-green-50 border-green-200',
  restaurant: 'bg-orange-50 border-orange-200',
}

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
    month: 'long', day: 'numeric', weekday: 'short',
  })
}

function groupByDate(events) {
  return events.reduce((acc, e) => {
    acc[e.date] = acc[e.date] || []
    acc[e.date].push(e)
    return acc
  }, {})
}

// ── Toast ──────────────────────────────────────────────────────────────────
function Toast({ message }) {
  if (!message) return null
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg pointer-events-none">
      {message}
    </div>
  )
}

// ── SwipeCard ──────────────────────────────────────────────────────────────
function SwipeCard({ children, onEdit, onDelete }) {
  const [open, setOpen] = useState(false)
  const [dragX, setDragX] = useState(0)
  const startX = useRef(null)
  const isDragging = useRef(false)

  const currentX = isDragging.current ? dragX : (open ? -ACTION_W : 0)

  function onTouchStart(e) {
    startX.current = e.touches[0].clientX
    isDragging.current = true
    setDragX(open ? -ACTION_W : 0)
  }

  function onTouchMove(e) {
    if (startX.current === null) return
    const delta = e.touches[0].clientX - startX.current
    const base = open ? -ACTION_W : 0
    setDragX(Math.max(-ACTION_W, Math.min(0, base + delta)))
  }

  function onTouchEnd() {
    isDragging.current = false
    const threshold = open ? -ACTION_W + SNAP_THRESHOLD : -SNAP_THRESHOLD
    if (dragX < threshold) {
      setOpen(true)
    } else {
      setOpen(false)
    }
    startX.current = null
  }

  function close() { setOpen(false) }

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Action buttons (revealed when card slides left) */}
      <div
        className="absolute right-0 top-0 bottom-0 flex"
        style={{ width: ACTION_W }}
      >
        <button
          onClick={() => { close(); onEdit() }}
          className="flex-1 bg-indigo-500 text-white text-sm font-semibold flex flex-col items-center justify-center gap-1"
        >
          <span className="text-lg">✏️</span>
          <span>修改</span>
        </button>
        <button
          onClick={() => { close(); onDelete() }}
          className="flex-1 bg-red-500 text-white text-sm font-semibold flex flex-col items-center justify-center gap-1 rounded-r-xl"
        >
          <span className="text-lg">🗑️</span>
          <span>删除</span>
        </button>
      </div>

      {/* Sliding card content */}
      <div
        style={{
          transform: `translateX(${currentX}px)`,
          transition: isDragging.current ? 'none' : 'transform 0.2s ease',
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={() => { if (open) close() }}
      >
        {children}
      </div>
    </div>
  )
}

// ── EventCard ──────────────────────────────────────────────────────────────
function EventCard({ event, lang, onEdit, onDelete }) {
  const d = t.dashboard
  const colorClass = typeColor[event.type] || 'bg-gray-50 border-gray-200'
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.addressEn)}`

  return (
    <SwipeCard onEdit={onEdit} onDelete={onDelete}>
      <div className={`border rounded-xl p-4 ${colorClass}`}>
        <p className="font-semibold text-base text-gray-800">
          {lang === 'zh' ? event.titleZh : event.titleEn}
        </p>
        <p className="text-sm text-gray-500 mt-0.5">
          {event.time} · {lang === 'zh' ? event.detailsZh : event.detailsEn}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          {lang === 'zh' ? event.addressZh : event.addressEn}
        </p>
        <div className="flex gap-2 mt-3">
          <a
            href={mapsUrl} target="_blank" rel="noreferrer"
            className="flex-1 bg-white border border-gray-300 text-gray-700 text-sm text-center py-2 rounded-lg font-medium"
            onClick={e => e.stopPropagation()}
          >
            {d.navigate[lang]}
          </a>
          {event.bookingUrl && event.bookingUrl !== '#' && (
            <a
              href={event.bookingUrl} target="_blank" rel="noreferrer"
              className="flex-1 bg-white border border-gray-300 text-gray-700 text-sm text-center py-2 rounded-lg font-medium"
              onClick={e => e.stopPropagation()}
            >
              {d.booking[lang]}
            </a>
          )}
        </div>
      </div>
    </SwipeCard>
  )
}

// ── Dashboard ──────────────────────────────────────────────────────────────
export default function Dashboard() {
  const { tripData, updateEvent, deleteEvent } = useTrip()
  const { lang } = useLang()
  const d = t.dashboard

  const [exportState, setExportState] = useState('idle')
  const [editingEvent, setEditingEvent] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 2500)
  }, [])

  const allEvents = [...tripData.events].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date)
    return a.time.localeCompare(b.time)
  })
  const grouped = groupByDate(allEvents)

  function handleExportCalendar() {
    const ics = generateICS(tripData.events, tripData.traveler)
    downloadICS(ics, 'parentpass_trip.ics')
    setExportState('done')
    setTimeout(() => setExportState('idle'), 4000)
  }

  function handleSaveEdit(updated) {
    updateEvent(updated.id, updated)
    setEditingEvent(null)
    showToast('修改成功！')
  }

  function handleConfirmDelete() {
    deleteEvent(deletingId)
    setDeletingId(null)
    showToast('删除成功！')
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="bg-indigo-600 text-white rounded-2xl p-4 mb-4">
        <h1 className="text-2xl font-bold">Enjoy Your Trip ✈️</h1>
        <p className="text-indigo-200 text-sm mt-0.5">your trip 小助手!</p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="text-indigo-200 text-xs">{d.contactLabel[lang]}</p>
            <a href={`tel:${tripData.daughter.phone}`} className="text-white font-semibold text-base">
              📞 {lang === 'zh' ? tripData.daughter.name : tripData.daughter.nameEn}
            </a>
          </div>
          <button
            onClick={handleExportCalendar}
            className={`text-sm font-semibold px-3 py-2 rounded-xl transition-colors
              ${exportState === 'done' ? 'bg-green-100 text-green-700' : 'bg-white text-indigo-600'}`}
          >
            {exportState === 'done' ? d.exported[lang] : d.exportCalendar[lang]}
          </button>
        </div>
      </div>

      {exportState === 'done' && (
        <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-3 text-sm text-green-800">
          {lang === 'zh'
            ? '📅 日历文件已生成——在弹出的页面中点击"添加到日历"即可'
            : '📅 Calendar file opened — tap "Add to Calendar" in the new tab'}
        </div>
      )}

      {/* Swipe hint */}
      {allEvents.length > 0 && (
        <p className="text-xs text-gray-400 text-center mb-3">
          {lang === 'zh' ? '← 向左滑动行程可修改或删除' : '← Swipe left on an event to edit or delete'}
        </p>
      )}

      {/* Events */}
      {Object.keys(grouped).length === 0 ? (
        <p className="text-center text-gray-400 mt-10">{d.noEvents[lang]}</p>
      ) : (
        Object.entries(grouped).map(([date, events]) => (
          <div key={date} className="mb-5">
            <p className="text-sm font-semibold text-gray-500 mb-2 px-1">
              {formatDate(date, lang)}
            </p>
            <div className="flex flex-col gap-3">
              {events.map(event => (
                <EventCard
                  key={event.id}
                  event={event}
                  lang={lang}
                  onEdit={() => setEditingEvent(event)}
                  onDelete={() => setDeletingId(event.id)}
                />
              ))}
            </div>
          </div>
        ))
      )}

      {/* Modals */}
      {editingEvent && (
        <EditModal
          event={editingEvent}
          onSave={handleSaveEdit}
          onClose={() => setEditingEvent(null)}
        />
      )}
      {deletingId && (
        <ConfirmDialog
          message="确认删除这条行程吗？"
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeletingId(null)}
        />
      )}

      <Toast message={toast} />
    </div>
  )
}
