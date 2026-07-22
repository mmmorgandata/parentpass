import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import BottomNav from './BottomNav'
import { useLang } from '../../context/LanguageContext'

export default function Layout() {
  const { lang, toggle } = useLang()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="h-screen md:h-full flex flex-col max-w-md mx-auto bg-white relative">
      {/* Top bar: setup icon (left) + language toggle (right) */}
      <div className="z-40 flex items-center justify-between px-3 pt-3 pb-1 md:pt-8 bg-white/80 backdrop-blur-sm">
        <div>
          {pathname === '/' && (
            <button
              onClick={() => navigate('/setup')}
              className="bg-white border border-gray-200 shadow-sm text-sm px-3 py-1.5 rounded-full text-gray-500 active:bg-gray-50 transition-colors"
            >
              {lang === 'zh' ? '+ 添加行程' : '+ Add Trip'}
            </button>
          )}
        </div>
        <button
          onClick={toggle}
          className="bg-white border border-gray-200 shadow-sm text-sm font-semibold px-3 py-1.5 rounded-full text-gray-600 active:bg-gray-50 transition-colors"
          aria-label="切换语言 / Toggle language"
        >
          {lang === 'zh' ? '🇺🇸 EN' : '🇨🇳 中文'}
        </button>
      </div>

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
