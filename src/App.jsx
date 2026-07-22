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

  // Scale the original 393×852 frame to fit 88% of viewport height
  const scale = Math.min(1, (window.innerHeight * 0.88) / 852)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* zoom shrinks layout footprint too, not just visual size */}
      <div style={{ zoom: scale }}>
        <div
          style={{
            width: 393,
            height: 852,
            borderRadius: 54,
            border: '10px solid #1c1c1e',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
            background: 'white',
          }}
        >
          {/* Notch */}
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: 112, height: 28,
            background: '#1c1c1e',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            zIndex: 50,
          }} />
          {children}
        </div>
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
