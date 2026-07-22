import { createContext, useContext, useState } from 'react'
import { defaultTripData } from '../data/tripData'

const TripContext = createContext(null)

function loadInitialData() {
  const params = new URLSearchParams(window.location.search)
  const encoded = params.get('trip')
  if (encoded) {
    try {
      const data = JSON.parse(atob(encoded))
      localStorage.setItem('parentpass_trip', encoded)
      return data
    } catch {}
  }
  const cached = localStorage.getItem('parentpass_trip')
  if (cached) {
    try {
      const data = JSON.parse(atob(cached))
      if (data?.events?.length > 0) return data
    } catch {}
  }
  return defaultTripData
}

function persist(data) {
  try { localStorage.setItem('parentpass_trip', btoa(JSON.stringify(data))) } catch {}
}

export function TripProvider({ children }) {
  const [tripData, setTripDataState] = useState(loadInitialData)

  function setTripData(data) {
    setTripDataState(data)
    persist(data)
  }

  function addEvent(event) {
    setTripData({ ...tripData, events: [...tripData.events, event] })
  }

  function updateEvent(id, updated) {
    setTripData({
      ...tripData,
      events: tripData.events.map(e => e.id === id ? { ...updated, id } : e),
    })
  }

  function deleteEvent(id) {
    setTripData({ ...tripData, events: tripData.events.filter(e => e.id !== id) })
  }

  function generateShareUrl() {
    return `${window.location.origin}/?trip=${btoa(JSON.stringify(tripData))}`
  }

  return (
    <TripContext.Provider value={{ tripData, setTripData, addEvent, updateEvent, deleteEvent, generateShareUrl }}>
      {children}
    </TripContext.Provider>
  )
}

export function useTrip() {
  return useContext(TripContext)
}
