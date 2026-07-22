import { NavLink } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'

const tabs = [
  { to: '/',          icon: '🗂️', key: 'trip'     },
  { to: '/translate', icon: '✈️', key: 'translate' },
  { to: '/phrases',   icon: '🔊', key: 'phrases'   },
  { to: '/city',      icon: '🏙️', key: 'city'      },
  { to: '/sos',       icon: '🆘', key: 'sos'       },
]

export default function BottomNav() {
  const { lang } = useLang()

  return (
    <nav className="w-full bg-white border-t border-gray-200 flex z-50">
      {tabs.map(({ to, icon, key }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center justify-center py-2 text-xs gap-0.5 transition-colors
            ${isActive ? 'text-indigo-600 font-semibold' : 'text-gray-400'}`
          }
        >
          <span className="text-xl leading-none">{icon}</span>
          <span>{t.nav[key][lang]}</span>
        </NavLink>
      ))}
    </nav>
  )
}
