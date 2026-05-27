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
      </TripProvider>
    </LanguageProvider>
  )
}
