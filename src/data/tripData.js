export const defaultTripData = {
  traveler: '爸爸妈妈',
  daughter: {
    name: '小美',
    nameEn: 'Xiao Mei',
    phone: '+1 (206) 555-0192',
    wechat: 'xiaomei_us',
  },
  city: 'Seattle',
  cityZh: '西雅图',
  events: [
    {
      id: 'flight-1',
      type: 'flight',
      titleZh: '✈️ 抵达西雅图',
      titleEn: '✈️ Arrive Seattle',
      date: '2026-06-10',
      time: '14:30',
      detailsZh: 'AA 2341 · 北京 → 西雅图',
      detailsEn: 'AA 2341 · Beijing → Seattle',
      addressZh: '西雅图-塔科马国际机场',
      addressEn: 'Seattle-Tacoma International Airport, Seattle, WA',
      bookingUrl: '#',
    },
    {
      id: 'hotel-1',
      type: 'hotel',
      titleZh: '🏨 入住酒店',
      titleEn: '🏨 Hotel Check-in',
      date: '2026-06-10',
      time: '16:00',
      detailsZh: '入住 · 3晚',
      detailsEn: 'Check-in · 3 nights',
      addressZh: '西雅图市中心希尔顿酒店',
      addressEn: 'Hilton Seattle, 1301 6th Ave, Seattle, WA 98101',
      bookingUrl: '#',
    },
    {
      id: 'activity-1',
      type: 'activity',
      titleZh: '🌊 参观派克市场',
      titleEn: '🌊 Pike Place Market',
      date: '2026-06-11',
      time: '10:00',
      detailsZh: '世界上最古老的农贸市场，可以看扔鱼表演',
      detailsEn: "One of the oldest farmers markets in the US — don't miss the fish-throwing show",
      addressZh: '派克市场',
      addressEn: 'Pike Place Market, Seattle, WA 98101',
      bookingUrl: null,
    },
  ],
}

export function getUpcomingEvents(events) {
  const today = new Date().toISOString().split('T')[0]
  return events.filter(e => e.date >= today).sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date)
    return a.time.localeCompare(b.time)
  })
}
