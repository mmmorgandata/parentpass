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
          <div className="relative md:w-[393px] md:h-[852px] md:rounded-[54px] md:border-[10px] md:border-gray-900 md:shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:overflow-hidden">
            {/* Notch — desktop only */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-3xl z-[100]" />
        <BrowserRouter>
          <Routes>
            {/* Parent-facing pages (with bottom nav) */}
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/translate" element={<EntryGuide />} />
              <Route path="/phrases" element={<EmergencyPhrases />} />
              <Route path="/sos" element={<SOSPage />} />
              <Route path="/city" element={<CityGuide />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
            {/* Student setup page — no bottom nav */}
            <Route path="/setup" element={<TripBuilder />} />
          </Routes>
        </BrowserRouter>
          </div>
        </div>
      </TripProvider>
    </LanguageProvider>
  )
}
