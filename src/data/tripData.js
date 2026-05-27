export const defaultTripData = {
  traveler: '爸爸妈妈',
  daughter: {
    name: 'Morgan',
    nameEn: 'Morgan',
    phone: '+1 (206) 941-2779',
    wechat: 'morgan_lan',
  },
  city: 'Seattle',
  cityZh: '西雅图',
  events: [
    {
      id: 'flight-1-dep',
      type: 'flight',
      titleZh: '✈️ 广州出发',
      titleEn: '✈️ Depart Guangzhou',
      date: '2026-06-12',
      time: '12:25',
      detailsZh: '韩亚航空 OZ370 · 广州白云T2 → 首尔仁川T2 · 经济舱 · 3h35m',
      detailsEn: 'Asiana OZ370 · CAN T2 → ICN T2 · Economy · 3h 35m',
      addressZh: '广州白云国际机场 T2',
      addressEn: 'Guangzhou Baiyun International Airport Terminal 2',
      bookingUrl: null,
    },
    {
      id: 'flight-2-dep',
      type: 'flight',
      titleZh: '✈️ 首尔转机飞西雅图',
      titleEn: '✈️ Seoul → Seattle (Connecting)',
      date: '2026-06-12',
      time: '21:20',
      detailsZh: '韩亚航空 OZ272 · 首尔仁川T2 → 西雅图塔科马 · 经济舱 · 9h55m · 中转等待4h20m',
      detailsEn: 'Asiana OZ272 · ICN T2 → SEA · Economy · 9h 55m · Layover 4h 20m',
      addressZh: '首尔仁川国际机场 T2',
      addressEn: 'Incheon International Airport Terminal 2, Seoul, South Korea',
      bookingUrl: null,
    },
    {
      id: 'flight-arrive',
      type: 'flight',
      titleZh: '🛬 抵达西雅图',
      titleEn: '🛬 Arrive Seattle',
      date: '2026-06-13',
      time: '15:15',
      detailsZh: '韩亚航空 OZ272 抵达 · Morgan 会在机场等候',
      detailsEn: 'Asiana OZ272 arrives · Morgan will meet you at the airport',
      addressZh: '西雅图-塔科马国际机场',
      addressEn: 'Seattle-Tacoma International Airport, 17801 International Blvd, SeaTac, WA 98158',
      bookingUrl: null,
    },
    {
      id: 'hotel-1',
      type: 'hotel',
      titleZh: '🏠 入住 Airbnb',
      titleEn: '🏠 Airbnb Check-in',
      date: '2026-06-13',
      time: '15:30',
      detailsZh: '入住 · 住到6月17日 · 房东：Vivien Liu · 下午12点后可入住',
      detailsEn: 'Check-in · Stay until Jun 17 · Host: Vivien Liu · After 12:00 PM',
      addressZh: '华盛顿州伦顿市 Southeast 4th Place 6523号',
      addressEn: '6523 Southeast 4th Place, Renton, WA 98059',
      bookingUrl: null,
    },
    {
      id: 'hotel-checkout',
      type: 'hotel',
      titleZh: '🧳 Airbnb 退房',
      titleEn: '🧳 Airbnb Check-out',
      date: '2026-06-17',
      time: '11:00',
      detailsZh: '上午11点前退房 · 记得带走所有行李',
      detailsEn: 'Check out before 11:00 AM · Don\'t forget your belongings',
      addressZh: '华盛顿州伦顿市 Southeast 4th Place 6523号',
      addressEn: '6523 Southeast 4th Place, Renton, WA 98059',
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
