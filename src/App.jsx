import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import { TripProvider } from './context/TripContext'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import EntryGuide from './pages/EntryGuide'
import EmergencyPhrases from './pages/EmergencyPhrases'
import SOSPage from './pages/SOSPage'
import CityGuide from './pages/CityGuide'
import TripBuilder from './pages/TripBuilder'

function PhoneFrame({ children }) {
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768
  if (!isDesktop) return <>{children}</>

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="relative rounded-[7%] overflow-hidden bg-white"
        style={{
          height: 'min(852px, 88vh)',
          width: 'calc(min(852px, 88vh) * 393 / 852)',
          // box-shadow acts as the phone border — drawn outside, follows border-radius
          boxShadow: '0 0 0 10px #1c1c1e, 0 0 0 11px #3a3a3c, 0 30px 70px rgba(0,0,0,0.4)',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1c1c1e] rounded-b-3xl z-50"
          style={{ width: '28%', height: '3.5%' }}
        />
        {children}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <TripProvider>
        <PhoneFrame>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/translate" element={<EntryGuide />} />
                <Route path="/phrases" element={<EmergencyPhrases />} />
                <Route path="/sos" element={<SOSPage />} />
                <Route path="/city" element={<CityGuide />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
              <Route path="/setup" element={<TripBuilder />} />
            </Routes>
          </BrowserRouter>
        </PhoneFrame>
      </TripProvider>
    </LanguageProvider>
  )
}
