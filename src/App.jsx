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

export default function App() {
  return (
    <LanguageProvider>
      <TripProvider>
        {/* Desktop: center the app inside a phone mockup frame */}
        <div className="md:min-h-screen md:bg-gray-100 md:flex md:items-center md:justify-center">
          {/* Sizing wrapper — proportional to iPhone 14 */}
          <div
            className="relative"
            style={{
              height: 'min(852px, 88vh)',
              width: 'calc(min(852px, 88vh) * 393 / 852)',
            }}
          >
            {/* Screen content — clipped to phone screen shape */}
            <div className="absolute inset-0 rounded-[7%] overflow-hidden bg-white">
              {/* Notch */}
              <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[28%] h-[3.5%] bg-gray-900 rounded-b-3xl z-[100]" />
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
            </div>
            {/* Phone border frame — overlay on top so rounded corners are always visible */}
            <div className="hidden md:block absolute inset-0 rounded-[7%] border-[10px] border-gray-900 shadow-[0_30px_80px_rgba(0,0,0,0.35)] pointer-events-none z-[200]" />
          </div>
        </div>
      </TripProvider>
    </LanguageProvider>
  )
}
