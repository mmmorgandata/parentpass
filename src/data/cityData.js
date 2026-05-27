export const CITIES = [
  { key: 'NewYork',      zh: '纽约',   en: 'New York',      emoji: '🗽' },
  { key: 'LosAngeles',   zh: '洛杉矶', en: 'Los Angeles',   emoji: '🎬' },
  { key: 'SanFrancisco', zh: '旧金山', en: 'San Francisco', emoji: '🌉' },
  { key: 'Seattle',      zh: '西雅图', en: 'Seattle',       emoji: '🌧️' },
  { key: 'Boston',       zh: '波士顿', en: 'Boston',        emoji: '🦞' },
  { key: 'WashingtonDC', zh: '华盛顿DC', en: 'Washington DC', emoji: '🏛️' },
]

export const cityData = {
  NewYork: {
    intro: {
      zh: '纽约是美国最大的城市，也是全球最著名的都市之一。曼哈顿的摩天大楼、自由女神像、中央公园……每一处都令人叹为观止。这里融合了来自全球的文化，唐人街就在市中心，中文菜单餐厅随处可见。纽约节奏快，但只要安排得当，中年游客完全可以悠然享受。',
      en: 'New York is the largest city in the US and one of the most iconic in the world. Manhattan\'s skyscrapers, the Statue of Liberty, Central Park — every corner is breathtaking. With a huge Chinatown in the heart of the city, Chinese restaurants are everywhere.',
    },
    landmarks: [
      {
        zh: { name: '自由女神像', desc: '乘渡轮前往自由岛，全程约3小时，建议提前网上购票', walk: '步行较少，乘船为主' },
        en: { name: 'Statue of Liberty', desc: 'Take the ferry to Liberty Island — about 3 hours total. Book tickets online in advance.', walk: 'Mostly by ferry' },
      },
      {
        zh: { name: '中央公园', desc: '843英亩的城市绿肺，可租单车游览，草坪宽阔适合休息', walk: '可步行或租车' },
        en: { name: 'Central Park', desc: '843-acre urban park — rent a bike or stroll at your own pace. Great for resting on the grass.', walk: 'Walk or bike' },
      },
      {
        zh: { name: '帝国大厦观景台', desc: '俯瞰整个曼哈顿，日落时分最美，建议买跳队票节省时间', walk: '乘电梯，轻松' },
        en: { name: 'Empire State Building', desc: 'Panoramic views of Manhattan — most stunning at sunset. Buy skip-the-line tickets.', walk: 'Elevator, easy' },
      },
      {
        zh: { name: '时代广场', desc: '24小时不夜城，霓虹灯璀璨，白天和晚上风格截然不同', walk: '步行友好' },
        en: { name: 'Times Square', desc: 'The city that never sleeps — neon lights everywhere, very different by day and night.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '布鲁克林大桥', desc: '步行过桥约30分钟，桥上风景绝佳，可俯瞰曼哈顿天际线', walk: '步行约30分钟' },
        en: { name: 'Brooklyn Bridge', desc: '30-minute walk across the bridge with stunning views of the Manhattan skyline.', walk: '~30 min walk' },
      },
    ],
    food: [
      { zh: { name: '金丰大酒楼', type: '粤菜点心', area: '曼哈顿唐人街', tip: '纽约最大的点心楼，周末早茶需排队' }, en: { name: 'Golden Unicorn', type: 'Cantonese Dim Sum', area: 'Manhattan Chinatown', tip: 'NYC\'s biggest dim sum hall — expect a wait on weekends' } },
      { zh: { name: '新荣记', type: '台州海鲜', area: '曼哈顿唐人街', tip: '本地华人推荐，价格实惠，海鲜新鲜' }, en: { name: 'New Wing Wah', type: 'Chinese Seafood', area: 'Manhattan Chinatown', tip: 'Local favorite — fresh seafood at fair prices' } },
      { zh: { name: '乔氏熟食店', type: '纽约熟食', area: '曼哈顿中城', tip: '纽约最出名的熟食三明治，排队但值得' }, en: { name: 'Katz\'s Delicatessen', type: 'NYC Deli', area: 'Lower East Side', tip: 'Iconic pastrami sandwich — always a line, always worth it' } },
      { zh: { name: 'Joe\'s Pizza', type: '纽约披萨', area: '西村', tip: '正宗纽约折叠式薄饼，$3一片，站着吃' }, en: { name: 'Joe\'s Pizza', type: 'NY Pizza', area: 'West Village', tip: 'Authentic NY-style thin crust — $3/slice, eat standing up' } },
    ],
    shopping: [
      { zh: { name: '第五大道', desc: '苹果店、Tiffany、Saks等奢侈品云集，适合逛街观光' }, en: { name: 'Fifth Avenue', desc: 'Apple Store, Tiffany, Saks Fifth Avenue — luxury shopping central' } },
      { zh: { name: 'Woodbury Common Premium Outlets', desc: '距市区1小时车程，300+品牌折扣，建议包车一日游' }, en: { name: 'Woodbury Common Premium Outlets', desc: '1 hr from NYC, 300+ brands at deep discounts — consider a day-tour bus' } },
      { zh: { name: 'Macy\'s Herald Square旗舰店', desc: '全球最大百货公司之一，楼层众多，品牌齐全，有退税服务' }, en: { name: 'Macy\'s Herald Square', desc: 'One of the world\'s largest department stores — tax refund service available' } },
    ],
    tips: {
      zh: ['地铁通达但站台复杂，建议用Google Maps导航，别坐错方向', '唐人街在Canal Street附近，粤语、普通话都能沟通', '小费文化：餐厅一般给18-20%', '曼哈顿步行距离较长，舒适鞋子必备'],
      en: ['The subway is comprehensive but confusing — use Google Maps to avoid wrong direction', 'Chinatown is near Canal St — Cantonese and Mandarin widely spoken', 'Tipping culture: 18–20% at restaurants', 'Manhattan involves a lot of walking — wear comfortable shoes'],
    },
  },

  LosAngeles: {
    intro: {
      zh: '洛杉矶是美国第二大城市，好莱坞的故乡，阳光充足，全年温暖。这里地域辽阔，景点分散，非常依赖驾车出行。蒙特利公园、圣盖博谷是华人聚居地，中餐水准全美顶尖。比佛利山庄、圣莫妮卡海滩、环球影城……适合不同喜好的游客。',
      en: 'Los Angeles is the entertainment capital of the world — Hollywood, year-round sunshine, and gorgeous beaches. The city is very car-dependent, but the San Gabriel Valley has some of the best Chinese food in the US.',
    },
    landmarks: [
      {
        zh: { name: '好莱坞星光大道', desc: '2600多颗明星手印脚印，TCL中国剧院旁，步行即可游览', walk: '步行友好' },
        en: { name: 'Hollywood Walk of Fame', desc: '2,600+ celebrity stars on the sidewalk near TCL Chinese Theatre — all walkable.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '圣莫妮卡海滩', desc: '著名的海滨步道，有游乐场、餐厅，日落时分景色绝美', walk: '步行友好，地面平坦' },
        en: { name: 'Santa Monica Beach', desc: 'Famous boardwalk with an amusement pier, restaurants, and spectacular sunsets.', walk: 'Flat, easy walk' },
      },
      {
        zh: { name: '盖蒂中心', desc: '免费入场的世界级艺术博物馆，建筑本身也是艺术品，俯瞰整个LA', walk: '室内为主，缆车接送' },
        en: { name: 'Getty Center', desc: 'Free world-class art museum with stunning architecture and panoramic LA views.', walk: 'Mostly indoor, tram access' },
      },
      {
        zh: { name: '环球影城', desc: '影视主题公园，哈利波特区域必去，全天约需8小时', walk: '全天步行较多' },
        en: { name: 'Universal Studios Hollywood', desc: 'Movie theme park — the Harry Potter area is unmissable. Allow a full day.', walk: 'Full day, lots of walking' },
      },
      {
        zh: { name: '比佛利山庄', desc: '豪宅区，Rodeo Drive名品街，适合拍照打卡', walk: '步行友好' },
        en: { name: 'Beverly Hills', desc: 'Luxury neighborhood with Rodeo Drive designer boutiques — great for photos.', walk: 'Walking-friendly' },
      },
    ],
    food: [
      { zh: { name: '顺发点心', type: '港式点心', area: '圣盖博谷', tip: '当地公认最正宗的港式点心，周末需排队' }, en: { name: 'Elite Restaurant', type: 'Hong Kong Dim Sum', area: 'San Gabriel Valley', tip: 'Locals say it\'s the most authentic dim sum in LA — weekend waits expected' } },
      { zh: { name: '梅州老家', type: '客家菜', area: '蒙特利公园', tip: '华人聚居区，家常客家风味，价格实惠' }, en: { name: 'Mei Zhou Dongpo', type: 'Hakka Chinese', area: 'Monterey Park', tip: 'In the heart of the Chinese community — homestyle cooking at good prices' } },
      { zh: { name: 'In-N-Out Burger', type: '西岸汉堡', area: '全市多家', tip: '西海岸最经典的汉堡，物美价廉，必尝' }, en: { name: 'In-N-Out Burger', type: 'West Coast Burgers', area: 'Multiple locations', tip: 'Iconic West Coast burger chain — cheap and delicious, a must-try' } },
      { zh: { name: 'Providence', type: '海鲜fine dining', area: '好莱坞', tip: '米其林二星，海鲜极鲜，适合家庭正式聚餐' }, en: { name: 'Providence', desc: '2-Michelin-star seafood — great for a special family dinner', area: 'Hollywood', tip: '2 Michelin stars — splurge-worthy seafood dinner' } },
    ],
    shopping: [
      { zh: { name: 'Citadel Outlets', desc: '距市区20分钟，主流品牌折扣，交通便利' }, en: { name: 'Citadel Outlets', desc: '20 min from downtown — mainstream brands at discounted prices, easy to reach' } },
      { zh: { name: 'The Grove', desc: '露天购物广场，环境优美，有喷泉广场，旁边有著名的农贸市场' }, en: { name: 'The Grove', desc: 'Beautiful open-air mall with a fountain plaza, next to the famous Farmers Market' } },
      { zh: { name: 'Rodeo Drive', desc: '全球最奢华的购物街之一，路易威登、爱马仕等旗舰店均在此' }, en: { name: 'Rodeo Drive', desc: 'One of the world\'s most luxurious shopping streets — LV, Hermès, and more' } },
    ],
    tips: {
      zh: ['洛杉矶地广，景点间距大，必须开车或打Uber', '圣盖博谷是华人聚居地，中文完全够用', '防晒很重要，阳光强烈', '高峰时段路况极差，尽量避开早晚高峰'],
      en: ['LA is huge — Uber or rental car is essential between attractions', 'San Gabriel Valley is the Chinese hub — Mandarin/Cantonese widely spoken', 'Sunscreen is a must — the LA sun is intense', 'Traffic is brutal during rush hour — plan around it'],
    },
  },

  SanFrancisco: {
    intro: {
      zh: '旧金山是美国西海岸最具魅力的城市之一，以金门大桥、叮当车和唐人街闻名。城市地势起伏，坡道众多，体力有限的游客需注意规划路线。这里海风习习，夏季凉爽，与国内夏天截然不同，需带外套。唐人街是全美最古老的华人社区，中文氛围浓厚。',
      en: 'San Francisco is one of the most charming cities on the West Coast — Golden Gate Bridge, cable cars, and the oldest Chinatown in America. The city is hilly, so plan routes carefully. Even in summer it\'s cool and foggy — bring a jacket.',
    },
    landmarks: [
      {
        zh: { name: '金门大桥', desc: '步行或骑行过桥，也可在Vista Point远眺，建议避开大雾天', walk: '步行过桥约1小时' },
        en: { name: 'Golden Gate Bridge', desc: 'Walk or cycle across, or view from Vista Point. Check fog conditions before going.', walk: '~1 hour walk across' },
      },
      {
        zh: { name: '渔人码头', desc: '新鲜海鲜、螃蟹摊、海狮聚集地，Pier 39是热门打卡点', walk: '步行友好，地面平坦' },
        en: { name: 'Fisherman\'s Wharf', desc: 'Fresh seafood stalls, sea lions at Pier 39, and great waterfront views.', walk: 'Flat, easy walk' },
      },
      {
        zh: { name: '恶魔岛监狱', desc: '乘渡轮前往，历史感极强，中文语音导览可提前下载', walk: '步行较多，有坡道' },
        en: { name: 'Alcatraz Island', desc: 'Take the ferry to this legendary former prison. Download the Chinese audio tour in advance.', walk: 'Hilly paths on island' },
      },
      {
        zh: { name: '唐人街', desc: '全美最古老华人社区，Grant Ave是主街，茶馆、点心店云集', walk: '步行友好，有坡道' },
        en: { name: 'Chinatown', desc: 'America\'s oldest Chinatown on Grant Ave — tea houses, bakeries, and authentic atmosphere.', walk: 'Walkable, some hills' },
      },
      {
        zh: { name: '叮当车', desc: '旧金山标志，乘坐Powell-Hyde线可欣赏全城风景，需排队', walk: '乘坐交通工具' },
        en: { name: 'Cable Cars', desc: 'SF\'s iconic cable car — ride the Powell-Hyde line for the best city views. Expect a line.', walk: 'Ride, no walking' },
      },
    ],
    food: [
      { zh: { name: '大观园', type: '港式点心', area: '唐人街附近', tip: '旧金山最受华人欢迎的点心楼' }, en: { name: 'Lai Hong Lounge', type: 'Cantonese Dim Sum', area: 'Richmond District', tip: 'Most popular dim sum among local Chinese community' } },
      { zh: { name: 'Yank Sing', type: '精致点心', area: '金融区', tip: '高档点心，品质极佳，适合家庭聚餐' }, en: { name: 'Yank Sing', type: 'Upscale Dim Sum', area: 'Financial District', tip: 'High-end dim sum — excellent quality, great for a family meal out' } },
      { zh: { name: 'Boudin Bakery', type: '酸面包', area: '渔人码头', tip: '旧金山特色酸面包，可看现场烘焙过程' }, en: { name: 'Boudin Bakery', type: 'Sourdough Bread', area: 'Fisherman\'s Wharf', tip: 'SF\'s famous sourdough — watch bread being baked through the window' } },
      { zh: { name: 'Swan Oyster Depot', type: '新鲜生蚝', area: '波尔克街', tip: '1912年开业，站着吃生蚝，需排队，绝对值得' }, en: { name: 'Swan Oyster Depot', type: 'Fresh Oysters', area: 'Polk Street', tip: 'Open since 1912 — stand-up oyster bar, always a line, absolutely worth it' } },
    ],
    shopping: [
      { zh: { name: 'Union Square', desc: '旧金山市中心购物区，Nordstrom、Macy\'s均在此，交通便利' }, en: { name: 'Union Square', desc: 'SF\'s main shopping district — Nordstrom, Macy\'s, and more, all walkable' } },
      { zh: { name: 'San Francisco Premium Outlets', desc: '距市区约40分钟，品牌折扣齐全' }, en: { name: 'San Francisco Premium Outlets', desc: '~40 min from downtown — good range of discounted brands' } },
      { zh: { name: 'Ferry Building Marketplace', desc: '农贸市场+精品食品店，在海边，周六早市特别热闹' }, en: { name: 'Ferry Building Marketplace', desc: 'Gourmet food market on the waterfront — Saturday morning market is especially lively' } },
    ],
    tips: {
      zh: ['旧金山夏天多雾，即使7月也要带厚外套', '城市坡道多，体力有限建议多乘叮当车或Uber', '唐人街普通话粤语都通', '渔人码头停车贵，建议乘公共交通前往'],
      en: ['Even in July, SF can be cold and foggy — always bring a warm jacket', 'The hills are steep — take cable cars or Uber if you tire easily', 'Chinatown: both Mandarin and Cantonese spoken', 'Parking at Fisherman\'s Wharf is expensive — take public transit'],
    },
  },

  Seattle: {
    intro: {
      zh: '西雅图是美国西北太平洋地区最大的城市，以咖啡文化、科技公司（亚马逊、微软）和壮观的自然风光著称。城市三面环水，背靠雪山，空气清新，非常适合中年游客休闲漫步。唐人街（International District）步行可达，中餐水准颇高。',
      en: 'Seattle is the largest city in the Pacific Northwest, famous for coffee culture, tech giants (Amazon, Microsoft), and stunning natural scenery. The city is surrounded by water and backed by snow-capped mountains — perfect for a leisurely visit.',
    },
    landmarks: [
      {
        zh: { name: '派克市场', desc: '建于1907年，全美最古老的农贸市场，可以看到著名的"飞鱼"表演', walk: '步行友好' },
        en: { name: 'Pike Place Market', desc: 'Built in 1907 — one of the oldest farmers markets in the US. Don\'t miss the fish-throwing show.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '太空针塔', desc: '西雅图地标，登顶可俯瞰整座城市和雪山，建议购票提前预订', walk: '需乘电梯' },
        en: { name: 'Space Needle', desc: 'Seattle\'s iconic landmark — panoramic views of the city and mountains from the top.', walk: 'Elevator ride' },
      },
      {
        zh: { name: '奇胡利玻璃艺术花园', desc: '色彩绚丽的玻璃艺术展，室内展馆，老人小孩均适合', walk: '室内，轻松' },
        en: { name: 'Chihuly Garden and Glass', desc: 'Stunning colorful glass art — all indoors, easy for all ages.', walk: 'Indoor, easy' },
      },
      {
        zh: { name: '西雅图水族馆', desc: '太平洋海洋生物展览，有海豹、章鱼等，非常适合休闲游览', walk: '步行友好' },
        en: { name: 'Seattle Aquarium', desc: 'Pacific marine life with seals, octopuses, and more.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '华盛顿大学校园', desc: '美丽的百年校园，春天樱花盛开，免费参观', walk: '步行约1小时' },
        en: { name: 'University of Washington', desc: 'Beautiful historic campus — cherry blossoms in spring, free to visit.', walk: '~1 hour walk' },
      },
    ],
    food: [
      { zh: { name: '好运来海鲜', type: '港式点心', area: 'International District', tip: '周末早茶很受欢迎，建议早点去' }, en: { name: 'Harbor City Restaurant', type: 'Dim Sum', area: 'International District', tip: 'Weekend dim sum is popular — arrive early' } },
      { zh: { name: 'Din Tai Fung', type: '台湾小笼包', area: 'University Village', tip: '正宗小笼包，稍贵但值得' }, en: { name: 'Din Tai Fung', type: 'Soup Dumplings', area: 'University Village', tip: 'Authentic xiao long bao — pricey but worth it' } },
      { zh: { name: '派克市场海鲜摊', type: '新鲜螃蟹龙虾', area: 'Pike Place Market', tip: '当场料理，非常新鲜' }, en: { name: 'Pike Place Seafood', type: 'Fresh Crab & Lobster', area: 'Pike Place Market', tip: 'Cooked on the spot, incredibly fresh' } },
      { zh: { name: 'Ivar\'s Acres of Clams', type: '西北海鲜', area: '海滨', tip: '西雅图最老的海鲜餐厅，炸鱼薯条一绝' }, en: { name: 'Ivar\'s Acres of Clams', type: 'Pacific Northwest Seafood', area: 'Waterfront', tip: 'Seattle\'s oldest seafood restaurant — fish & chips are legendary' } },
    ],
    shopping: [
      { zh: { name: 'Premium Outlets', desc: '距市区约40分钟，奢侈品折扣最多六折' }, en: { name: 'Seattle Premium Outlets', desc: '~40 min from downtown — luxury brands up to 40% off' } },
      { zh: { name: 'Westfield Southcenter', desc: '大型购物中心，品牌齐全，有中餐厅' }, en: { name: 'Westfield Southcenter', desc: 'Large mall, wide range of brands, Chinese restaurant inside' } },
      { zh: { name: 'University Village', desc: '户外购物广场，环境优美，有Apple Store' }, en: { name: 'University Village', desc: 'Open-air plaza with great atmosphere and an Apple Store' } },
    ],
    tips: {
      zh: ['西雅图多雨，建议每天携带雨伞', '唐人街（International District）步行可达，中文菜单餐厅集中', 'ORCA Card一张通用地铁和公交', '景点之间打Uber/Lyft方便'],
      en: ['Seattle is rainy — bring an umbrella every day', 'International District (Chinatown) is walkable, many Chinese-menu restaurants', 'ORCA Card works on both subway and buses', 'Uber/Lyft are the easiest way between attractions'],
    },
  },

  LasVegas: {
    intro: {
      zh: '拉斯维加斯是美国最独特的城市之一，24小时灯火通明，是娱乐、表演和美食的天堂。著名的"拉斯维加斯大道"（The Strip）上云集了众多豪华酒店和表演。不赌博也没关系——免费的喷泉表演、气派的酒店大堂、世界级的美食，已经足够让人流连忘返。',
      en: 'Las Vegas is one of America\'s most unique cities — open 24 hours, packed with entertainment, shows, and world-class food. You don\'t need to gamble to enjoy it. Free fountain shows, spectacular hotel lobbies, and amazing restaurants are more than enough.',
    },
    landmarks: [
      {
        zh: { name: '拉斯维加斯大道夜景', desc: '夜晚步行The Strip，灯光璀璨，各大酒店外观本身就是景点', walk: '步行友好，但距离长' },
        en: { name: 'The Las Vegas Strip (Night)', desc: 'Walk the Strip at night — the hotel exteriors alone are jaw-dropping.', walk: 'Long but flat walk' },
      },
      {
        zh: { name: '百乐宫喷泉表演', desc: '免费！每15-30分钟一场，配合音乐的水舞表演，全球最美之一', walk: '站立观看，轻松' },
        en: { name: 'Bellagio Fountain Show', desc: 'FREE — runs every 15–30 min, a world-class water and music show.', walk: 'Stand and watch, easy' },
      },
      {
        zh: { name: '大峡谷一日游', desc: '距拉斯维加斯约4-5小时车程，可参加中文一日游团，世界自然奇观', walk: '参加团游，中等强度' },
        en: { name: 'Grand Canyon Day Trip', desc: '4–5 hr drive — join a Chinese-language guided tour. One of the world\'s great natural wonders.', walk: 'Tour group, moderate' },
      },
      {
        zh: { name: '米高梅大酒店游览', desc: '全球最大酒店之一，内部有购物中心、餐厅和表演场所', walk: '室内，轻松' },
        en: { name: 'MGM Grand', desc: 'One of the world\'s largest hotels — shopping, restaurants, and shows all inside.', walk: 'Indoor, easy' },
      },
      {
        zh: { name: '内华达州立博物馆（旧式西部小镇）', desc: '可参观内华达州历史文化，了解美国西部开拓史', walk: '室内为主' },
        en: { name: 'Fremont Street Experience', desc: 'Old downtown Vegas with a massive LED canopy light show overhead — very different vibe from the Strip.', walk: 'Walkable, mostly flat' },
      },
    ],
    food: [
      { zh: { name: '鼎泰丰（威尼斯人）', type: '台湾小笼包', area: '威尼斯人酒店内', tip: '赌城内最知名的亚洲餐厅之一，品质稳定' }, en: { name: 'Din Tai Fung (Venetian)', type: 'Soup Dumplings', area: 'Inside The Venetian', tip: 'One of the most reliable Asian restaurants on the Strip' } },
      { zh: { name: '百乐宫美食广场', type: '各国料理', area: '百乐宫酒店内', tip: '性价比极高的各国美食，比酒店正餐便宜很多' }, en: { name: 'Bellagio Buffet', type: 'International Buffet', area: 'Bellagio Hotel', tip: 'Famous Vegas buffet — great value for the variety' } },
      { zh: { name: '金银岛酒店中餐厅', type: '中式料理', area: 'The Strip', tip: '针对亚裔游客，中文服务，口味正宗' }, en: { name: 'Cathay House', type: 'Chinese', area: 'Spring Mountain Rd (Chinatown)', tip: 'Authentic Chinese in the Vegas Chinatown area — Chinese-speaking staff' } },
      { zh: { name: 'Gordon Ramsay Fish & Chips', type: '英式炸鱼', area: '巴黎酒店', tip: '明星厨师餐厅，分量足，适合体验西式料理' }, en: { name: 'Gordon Ramsay Fish & Chips', type: 'British Fish & Chips', area: 'Paris Las Vegas', tip: 'Celebrity chef restaurant — generous portions, fun experience' } },
    ],
    shopping: [
      { zh: { name: 'Las Vegas Premium Outlets North', desc: '大型奥特莱斯，Coach、Kate Spade、Burberry折扣多' }, en: { name: 'Las Vegas Premium Outlets North', desc: 'Large outlet mall — Coach, Kate Spade, Burberry with great discounts' } },
      { zh: { name: '时装秀购物中心', desc: '在The Strip上，无需出酒店区就能大型购物' }, en: { name: 'Fashion Show Mall', desc: 'Right on the Strip — large shopping center without leaving the hotel zone' } },
      { zh: { name: '威尼斯人大运河购物中心', desc: '室内仿威尼斯运河，有贡多拉，奢侈品牌云集，值得观光' }, en: { name: 'Grand Canal Shoppes (Venetian)', desc: 'Indoor replica of Venice\'s Grand Canal with gondolas — luxury brands and worth seeing even if not shopping' } },
    ],
    tips: {
      zh: ['拉斯维加斯夏季极热（可达45°C），避免正午户外活动', '酒店间距离远，步行虽可但推荐Uber', '所有大型酒店内部都有空调，可穿越酒店内部行走', '中文导游团资源丰富，大峡谷等景点强烈推荐参团'],
      en: ['Summer heat can reach 113°F (45°C) — avoid outdoor midday activity', 'Hotels are far apart — Uber beats walking even though it looks close', 'Walk through air-conditioned hotel interiors to stay cool', 'Chinese-language tour groups are widely available for Grand Canyon etc.'],
    },
  },

  Boston: {
    intro: {
      zh: '波士顿是美国最古老的城市之一，是美国历史和教育的象征。哈佛大学、麻省理工就在附近，历史遗迹众多。城市不大，很多景点步行可达，节奏舒适，非常适合中年游客慢游。海鲜是当地一绝，龙虾和蛤蜊浓汤举世闻名。',
      en: 'Boston is one of America\'s oldest and most historic cities — home to Harvard, MIT, and the Freedom Trail. It\'s compact and very walkable, with a relaxed pace perfect for middle-aged visitors. The seafood here, especially lobster and clam chowder, is world-famous.',
    },
    landmarks: [
      {
        zh: { name: '自由之路', desc: '全长4公里的历史步行路线，途经16处美国独立战争遗址，建议跟随导游', walk: '步行全程约2-3小时' },
        en: { name: 'Freedom Trail', desc: '2.5-mile walking route past 16 Revolutionary War sites — consider a guided tour.', walk: '2–3 hour walk' },
      },
      {
        zh: { name: '哈佛大学', desc: '世界顶级名校，校园免费参观，有中文导览，学术氛围浓厚', walk: '步行友好，校园平坦' },
        en: { name: 'Harvard University', desc: 'Free campus tours available — Chinese-language tours exist. Impressive academic atmosphere.', walk: 'Flat, easy campus walk' },
      },
      {
        zh: { name: '法纽尔厅与昆西市场', desc: '历史悠久的市场建筑，现有各式餐饮，是感受波士顿生活的好去处', walk: '步行友好' },
        en: { name: 'Faneuil Hall & Quincy Market', desc: 'Historic market building now filled with food stalls and shops — great for a meal and a stroll.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '波士顿公共花园', desc: '美丽的城市公园，天鹅船非常有名，春天郁金香盛开', walk: '步行友好，地面平坦' },
        en: { name: 'Boston Public Garden', desc: 'Beautiful urban park with famous Swan Boats — especially lovely in spring.', walk: 'Flat, easy walk' },
      },
      {
        zh: { name: '新英格兰水族馆', desc: '大型圆柱形鱼缸令人叹为观止，企鹅展区也很受欢迎', walk: '室内，轻松' },
        en: { name: 'New England Aquarium', desc: 'Stunning four-story cylindrical fish tank — the penguin exhibit is also a highlight.', walk: 'Indoor, easy' },
      },
    ],
    food: [
      { zh: { name: 'Legal Sea Foods', type: '波士顿海鲜', area: '市中心多家', tip: '波士顿最著名的海鲜连锁，龙虾和蛤蜊浓汤必点' }, en: { name: 'Legal Sea Foods', type: 'Boston Seafood', area: 'Multiple locations', tip: 'Boston\'s most famous seafood chain — lobster and clam chowder are must-orders' } },
      { zh: { name: '龙凤酒楼', type: '粤菜', area: '唐人街', tip: '波士顿唐人街老字号，点心和晚餐均佳' }, en: { name: 'Hei La Moon', type: 'Cantonese', area: 'Chinatown', tip: 'Long-standing Boston Chinatown institution — good for dim sum and dinner' } },
      { zh: { name: 'Mike\'s Pastry', type: '意大利甜点', area: '北端意大利街区', tip: '波士顿最有名的甜点店，cannoli必买，需排队' }, en: { name: 'Mike\'s Pastry', type: 'Italian Pastries', area: 'North End', tip: 'Boston\'s most famous pastry shop — the cannoli is legendary, expect a line' } },
      { zh: { name: 'Yankee Lobster', type: '龙虾', area: '海港区', tip: '码头直供，新鲜龙虾价格合理，座位简单但味道一流' }, en: { name: 'Yankee Lobster', type: 'Lobster', area: 'Seaport District', tip: 'Straight off the dock — fresh lobster at fair prices, no-frills but delicious' } },
    ],
    shopping: [
      { zh: { name: 'Wrentham Village Premium Outlets', desc: '距波士顿约1小时，奥特莱斯规模大，品牌齐全' }, en: { name: 'Wrentham Village Premium Outlets', desc: '~1 hr from Boston — large outlet with a wide range of brands' } },
      { zh: { name: 'Copley Place', desc: '高档室内购物中心，Louis Vuitton、Tiffany均在此' }, en: { name: 'Copley Place', desc: 'Upscale indoor mall — Louis Vuitton, Tiffany and other luxury brands' } },
      { zh: { name: '唐人街购物街', desc: '中国食材、特产、纪念品，价格实惠，中文通行' }, en: { name: 'Chinatown Shopping', desc: 'Chinese groceries, specialty foods, and souvenirs — great prices, Chinese spoken' } },
    ],
    tips: {
      zh: ['波士顿冬季极寒，夏秋季节最舒适', '城市不大，很多景点步行可达，地铁也方便', '哈佛和MIT在剑桥，乘地铁红线约20分钟可达', '海鲜必吃，价格比国内便宜很多'],
      en: ['Boston winters are brutal — visit in summer or fall for best weather', 'The city is compact — many sights are walkable or a short metro ride', 'Harvard & MIT are in Cambridge — 20 min on the Red Line', 'The seafood is exceptional and cheaper than you might expect'],
    },
  },

  Chicago: {
    intro: {
      zh: '芝加哥是美国第三大城市，素有"风城"之称，以壮观的城市天际线和建筑著称。密歇根湖边风景如画，夏季气候宜人。芝加哥的美食文化非常丰富，深盘披萨是这里的发明。华人社区主要集中在布里吉波特一带，中餐选择多。',
      en: 'Chicago is America\'s third-largest city, nicknamed the "Windy City." Its stunning skyline along Lake Michigan is world-famous. The city has incredible food culture — deep-dish pizza was invented here. The Chinatown near Bridgeport has excellent Chinese food.',
    },
    landmarks: [
      {
        zh: { name: '千禧公园与云门', desc: '"豆子"雕塑是芝加哥最标志性的打卡点，免费参观', walk: '步行友好，地面平坦' },
        en: { name: 'Millennium Park & Cloud Gate', desc: 'The famous "Bean" sculpture is Chicago\'s most iconic photo spot — free entry.', walk: 'Flat, easy walk' },
      },
      {
        zh: { name: '海军码头', desc: '芝加哥最受欢迎的景点，有摩天轮、餐厅、游船，湖边风景绝佳', walk: '步行友好' },
        en: { name: 'Navy Pier', desc: 'Chicago\'s most popular attraction — Ferris wheel, restaurants, and boat tours with stunning lake views.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '芝加哥建筑游船', desc: '从密歇根河游览芝加哥著名建筑，约90分钟，有中文讲解', walk: '乘船，无需步行' },
        en: { name: 'Chicago Architecture Boat Tour', desc: '90-min river cruise past Chicago\'s iconic buildings — Chinese audio guide available.', walk: 'Boat tour, no walking' },
      },
      {
        zh: { name: '威利斯大厦天空甲板', desc: '前西尔斯大厦，103层玻璃平台可俯瞰四州，视野震撼', walk: '乘电梯' },
        en: { name: 'Willis Tower Skydeck', desc: 'The former Sears Tower — step onto the glass ledge 103 floors up for views of 4 states.', walk: 'Elevator ride' },
      },
      {
        zh: { name: '芝加哥艺术学院', desc: '世界顶级艺术博物馆，收藏丰富，体力有限建议选重点展厅参观', walk: '室内，步行较多' },
        en: { name: 'Art Institute of Chicago', desc: 'World-class art museum — if energy is limited, focus on the Impressionist galleries.', walk: 'Indoor, moderate walking' },
      },
    ],
    food: [
      { zh: { name: 'Lou Malnati\'s', type: '芝加哥深盘披萨', area: '市中心多家', tip: '芝加哥最著名的深盘披萨，厚实多汁，必吃' }, en: { name: 'Lou Malnati\'s', type: 'Chicago Deep-Dish Pizza', area: 'Multiple locations', tip: 'Chicago\'s most iconic deep-dish pizza — thick, saucy, and unmissable' } },
      { zh: { name: '三联餐厅', type: '粤菜', area: '芝加哥唐人街（Bridgeport）', tip: '芝加哥华人最爱的粤菜馆，价格实惠' }, en: { name: 'Three Happiness Restaurant', type: 'Cantonese', area: 'Chicago Chinatown (Bridgeport)', tip: 'Local Chinese community favorite — great value Cantonese food' } },
      { zh: { name: 'Portillo\'s', type: '芝加哥热狗', area: '市中心多家', tip: '正宗芝加哥热狗，配料独特，不含番茄酱（当地传统）' }, en: { name: 'Portillo\'s', type: 'Chicago Hot Dog', area: 'Multiple locations', tip: 'Authentic Chicago-style hot dog — never with ketchup (local tradition!)' } },
      { zh: { name: 'Gibson\'s Bar & Steakhouse', type: '牛排', area: '黄金海岸', tip: '芝加哥顶级牛排馆，适合家庭正式聚餐' }, en: { name: 'Gibson\'s Bar & Steakhouse', type: 'Steakhouse', area: 'Gold Coast', tip: 'Top-tier Chicago steakhouse — ideal for a special family dinner' } },
    ],
    shopping: [
      { zh: { name: '密歇根大道（壮丽大道）', desc: '芝加哥最繁华的购物街，Apple、Nike、Zara等旗舰店林立' }, en: { name: 'Michigan Avenue (Magnificent Mile)', desc: 'Chicago\'s premier shopping street — Apple, Nike, Zara flagships and more' } },
      { zh: { name: 'Chicago Premium Outlets', desc: '距市区约1小时，品牌折扣齐全' }, en: { name: 'Chicago Premium Outlets', desc: '~1 hr from downtown — good range of discounted brands' } },
      { zh: { name: '唐人街商业街', desc: '中国食材、特产和纪念品，价格实惠' }, en: { name: 'Chinatown Square', desc: 'Chinese groceries, specialty items, and souvenirs at good prices' } },
    ],
    tips: {
      zh: ['芝加哥冬季极寒，强烈建议夏秋季出行', '风城名副其实，湖边风大，务必带外套', '地铁（The L）覆盖主要景点，方便实用', '深盘披萨份量很大，两人可以分一份'],
      en: ['Chicago winters are brutal — strongly recommend visiting in summer or fall', 'The "Windy City" nickname is real — always bring a windproof jacket near the lake', 'The L train covers all major sights — easy to use', 'Deep-dish pizza is enormous — two people can easily share one'],
    },
  },

  WashingtonDC: {
    intro: {
      zh: '华盛顿DC是美国首都，集中了美国最重要的政治、历史和文化地标。国家广场沿线的史密森尼博物馆群全部免费开放，适合整天游览。白宫、国会大厦、林肯纪念堂……每一处都承载着美国历史。城市规划整齐，步行体验极佳。',
      en: 'Washington DC is the US capital, home to the most important political, historic, and cultural landmarks in the country. The Smithsonian museums along the National Mall are all FREE — you could spend days here. Clean, well-planned, and very walkable.',
    },
    landmarks: [
      {
        zh: { name: '国家广场与林肯纪念堂', desc: '从华盛顿纪念碑到林肯纪念堂的壮阔大道，步行感受美国历史', walk: '步行较多，地面平坦' },
        en: { name: 'National Mall & Lincoln Memorial', desc: 'The grand avenue from the Washington Monument to Lincoln Memorial — a walk through American history.', walk: 'Long flat walk' },
      },
      {
        zh: { name: '史密森尼国家自然历史博物馆', desc: '免费！恐龙化石、蓝钻石、动物标本，内容丰富，可游览半天', walk: '室内，步行较多' },
        en: { name: 'Smithsonian Natural History Museum', desc: 'FREE — dinosaur fossils, the Hope Diamond, wildlife exhibits. Easy half-day visit.', walk: 'Indoor, moderate walking' },
      },
      {
        zh: { name: '白宫外景观赏', desc: '可在宾夕法尼亚大道拍照，进入内部需提前申请，普通游客看外观即可', walk: '步行友好' },
        en: { name: 'White House', desc: 'View from Pennsylvania Ave — interior visits require advance booking. The exterior is impressive enough.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '国会大厦', desc: '美国立法机构，外观宏伟，可参加免费导览（需提前预约）', walk: '步行友好，有坡道' },
        en: { name: 'US Capitol Building', desc: 'America\'s legislative building — impressive exterior, free guided tours available (book ahead).', walk: 'Some hills, walkable' },
      },
      {
        zh: { name: '越战纪念墙', desc: '58,000+阵亡将士名字刻于黑色花岗岩墙上，庄严肃穆，非常感人', walk: '步行友好，地面平坦' },
        en: { name: 'Vietnam Veterans Memorial', desc: '58,000+ names carved in black granite — a deeply moving and solemn experience.', walk: 'Flat, easy walk' },
      },
    ],
    food: [
      { zh: { name: '北京烤鸭坊', type: '北京菜', area: '维吉尼亚Falls Church', tip: 'DC华人圈最受好评的中餐馆，烤鸭正宗' }, en: { name: 'Peking Duck House', type: 'Beijing Cuisine', area: 'Falls Church, VA', tip: 'Most praised Chinese restaurant in the DC metro area — authentic Peking duck' } },
      { zh: { name: 'Old Ebbitt Grill', type: '美式经典', area: '白宫附近', tip: '1856年开业，靠近白宫，美式料理经典，历史感十足' }, en: { name: 'Old Ebbitt Grill', type: 'Classic American', area: 'Near White House', tip: 'Open since 1856, close to the White House — classic American with great atmosphere' } },
      { zh: { name: 'Ben\'s Chili Bowl', type: '华盛顿名食', area: '14街', tip: 'DC最著名的小吃，辣椒狗60年历史，总统也来光顾' }, en: { name: 'Ben\'s Chili Bowl', type: 'DC Institution', area: '14th Street', tip: 'DC\'s most famous snack spot — chili dogs with 60 years of history, even presidents have eaten here' } },
      { zh: { name: '史密森尼国家广场咖啡馆', type: '简餐', area: '国家广场内', tip: '博物馆内简餐，价格合理，游览中途用餐方便' }, en: { name: 'Smithsonian Museum Cafes', type: 'Light Meals', area: 'National Mall', tip: 'Convenient and reasonably priced lunch while sightseeing on the Mall' } },
    ],
    shopping: [
      { zh: { name: 'Leesburg Corner Premium Outlets', desc: '距DC约1小时，规模大，品牌全' }, en: { name: 'Leesburg Corner Premium Outlets', desc: '~1 hr from DC — large outlet with comprehensive brand selection' } },
      { zh: { name: 'Georgetown购物区', desc: '历史街区，精品店、咖啡馆和餐厅云集，适合漫步购物' }, en: { name: 'Georgetown Shopping District', desc: 'Historic neighborhood with boutiques, cafes, and restaurants — lovely for a shopping stroll' } },
      { zh: { name: '国家广场纪念品商店', desc: '各博物馆礼品店，美国国旗、历史文化纪念品，价格合理' }, en: { name: 'Smithsonian Museum Gift Shops', desc: 'US flag merchandise, historical souvenirs — reasonable prices right on the Mall' } },
    ],
    tips: {
      zh: ['史密森尼系列博物馆全部免费，非常超值', 'DC规划整齐，地铁（Metro）方便，主要景点都在步行范围内', '夏季炎热潮湿，秋季最舒适', '博物馆人多，建议早上开门时入场'],
      en: ['All Smithsonian museums are FREE — incredible value', 'DC\'s Metro is reliable and covers all major sights', 'Summer is hot and humid — fall is the best season', 'Arrive at museums right when they open to avoid crowds'],
    },
  },

  Miami: {
    intro: {
      zh: '迈阿密是美国最南端的大城市，阳光明媚，海滩美丽，充满拉丁风情。南海滩（South Beach）是全球最知名的海滩之一，装饰艺术建筑风格独特。这里气候热带，全年适合出行。迈阿密也是邮轮出发的热门港口，可以安排加勒比海邮轮。华人社区相对较小，但餐厅选择尚可。',
      en: 'Miami is America\'s southernmost major city — sunshine, beautiful beaches, and Latin flair. South Beach is one of the world\'s most famous beaches with iconic Art Deco architecture. Tropical climate makes it a year-round destination. Miami is also a major cruise port.',
    },
    landmarks: [
      {
        zh: { name: '南海滩（South Beach）', desc: '世界顶级海滩，白沙碧水，装饰艺术建筑风格，Ocean Drive是打卡圣地', walk: '步行友好，沙滩散步' },
        en: { name: 'South Beach', desc: 'World-famous white sand beach and Art Deco buildings — Ocean Drive is the place to see and be seen.', walk: 'Beach walk, easy' },
      },
      {
        zh: { name: '大沼泽地国家公园', desc: '美国独有的热带湿地，可乘坐气垫船游览，观看短吻鳄，全天游', walk: '乘气垫船，少量步行' },
        en: { name: 'Everglades National Park', desc: 'America\'s unique tropical wetlands — take an airboat tour to see alligators. Full-day trip.', walk: 'Airboat tour, minimal walking' },
      },
      {
        zh: { name: '文顿艺术区（Wynwood）', desc: '全球最著名的街头艺术区，色彩斑斓的壁画占满整个街区，免费参观', walk: '步行友好' },
        en: { name: 'Wynwood Walls', desc: 'World-famous outdoor street art district — vibrant murals covering entire buildings. Free to walk.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '小哈瓦那', desc: '古巴文化聚居地，雪茄店、古巴咖啡、多米诺骨牌，感受拉美风情', walk: '步行友好' },
        en: { name: 'Little Havana', desc: 'Cuban cultural hub — cigar shops, Cuban coffee, and dominoes in Maximo Gomez Park.', walk: 'Walking-friendly' },
      },
      {
        zh: { name: '维斯卡亚博物馆', desc: '欧式庄园式博物馆，花园美丽，海湾景色绝佳，建筑本身就是艺术', walk: '室内外均有，步行适中' },
        en: { name: 'Vizcaya Museum & Gardens', desc: 'European-style mansion and gardens with stunning bay views — a beautiful and unusual museum.', walk: 'Indoor + outdoor, moderate' },
      },
    ],
    food: [
      { zh: { name: '荣华楼', type: '粤菜', area: '里士满高地华人区', tip: '迈阿密华人聚集区最受欢迎的中餐馆' }, en: { name: 'Tropical Chinese', type: 'Cantonese', area: 'Richmond Heights (Chinese area)', tip: 'Most popular Chinese restaurant in Miami\'s Chinese community area' } },
      { zh: { name: 'Joe\'s Stone Crab', type: '佛罗里达石蟹', area: '南海滩', tip: '迈阿密最著名的海鲜餐厅，石蟹爪举世闻名，10月-5月限定' }, en: { name: 'Joe\'s Stone Crab', type: 'Florida Stone Crab', area: 'South Beach', tip: 'Miami\'s most famous seafood restaurant — stone crab claws are legendary, Oct–May season only' } },
      { zh: { name: 'Versailles Restaurant', type: '古巴菜', area: '小哈瓦那', tip: '迈阿密最出名的古巴餐厅，古巴三明治和咖啡必点' }, en: { name: 'Versailles Restaurant', type: 'Cuban', area: 'Little Havana', tip: 'Miami\'s most famous Cuban restaurant — Cuban sandwich and café con leche are must-orders' } },
      { zh: { name: '海滩餐厅区', type: '各类海鲜', area: 'South Beach Ocean Drive', tip: '坐在路边品尝海鲜，一边看海一边用餐，体验迈阿密生活方式' }, en: { name: 'Ocean Drive Restaurants', type: 'Seafood & International', area: 'South Beach', tip: 'Dine alfresco by the beach — the experience is as good as the food' } },
    ],
    shopping: [
      { zh: { name: 'Sawgrass Mills', desc: '佛罗里达最大的奥特莱斯，350+品牌，是美国最大购物中心之一' }, en: { name: 'Sawgrass Mills', desc: 'Florida\'s largest outlet mall with 350+ brands — one of the biggest in the US' } },
      { zh: { name: 'Bal Harbour Shops', desc: '豪华露天购物中心，Chanel、Prada、Gucci均在此' }, en: { name: 'Bal Harbour Shops', desc: 'Luxury open-air mall — Chanel, Prada, Gucci and more' } },
      { zh: { name: 'Lincoln Road Mall', desc: '南海滩步行购物街，餐厅购物结合，氛围轻松' }, en: { name: 'Lincoln Road Mall', desc: 'South Beach pedestrian shopping street — a relaxed mix of shops and restaurants' } },
    ],
    tips: {
      zh: ['迈阿密全年炎热潮湿，做好防晒准备', '海滩游泳时注意安全，观察旗帜颜色（红旗禁止游泳）', '大沼泽地是独特体验，强烈推荐参加半日游', '餐厅一般下午2点后才开始晚餐服务'],
      en: ['Miami is hot and humid year-round — sunscreen and hydration are essential', 'Check beach flags before swimming — red flag means no swimming', 'The Everglades half-day tour is unique and highly recommended', 'Most restaurants don\'t start dinner service until 6–7pm'],
    },
  },

  Orlando: {
    intro: {
      zh: '奥兰多是美国最著名的主题公园之地，迪士尼世界、环球影城、海洋世界……这里集中了全球密度最高的主题公园。对于有孙子孙女或喜欢热闹的中年父母，这里是梦想目的地。注意：主题公园步行量极大，体力有限者需合理规划行程，不必一天游完所有项目。',
      en: 'Orlando is America\'s theme park capital — Walt Disney World, Universal Studios, SeaWorld and more are all here. For grandparents with grandchildren, or parents who love excitement, this is a dream destination. Note: theme parks involve massive amounts of walking — pace yourselves and don\'t try to do everything in one day.',
    },
    landmarks: [
      {
        zh: { name: '迪士尼世界魔法王国', desc: '全球最著名的主题公园，灰姑娘城堡、烟花表演必看，建议购买快速通道', walk: '全天步行极多' },
        en: { name: 'Walt Disney World - Magic Kingdom', desc: 'The most famous theme park in the world — Cinderella\'s Castle and the fireworks show are unmissable. Buy Lightning Lane.', walk: 'Full day, very heavy walking' },
      },
      {
        zh: { name: '环球影城奥兰多', desc: '哈利波特魔法世界是亮点，建议分两天游览两个园区', walk: '全天步行较多' },
        en: { name: 'Universal Studios Orlando', desc: 'The Wizarding World of Harry Potter is the highlight — two parks worth two days.', walk: 'Full day, heavy walking' },
      },
      {
        zh: { name: 'EPCOT中心', desc: '迪士尼旗下，世界各国文化展示+未来科技，更适合成年人', walk: '全天步行较多' },
        en: { name: 'EPCOT', desc: 'Disney\'s world culture and future technology park — more suited to adults than Magic Kingdom.', walk: 'Full day, heavy walking' },
      },
      {
        zh: { name: '肯尼迪航天中心', desc: '距奥兰多约1小时，火箭和航天展览，可近距离参观发射台', walk: '室内外结合，步行适中' },
        en: { name: 'Kennedy Space Center', desc: '~1 hr from Orlando — rockets and space exhibits, with a real launch pad tour option.', walk: 'Mix of indoor/outdoor, moderate' },
      },
      {
        zh: { name: '迪士尼泉', desc: '免费入场的购物娱乐区，餐厅、购物、表演，适合休息日', walk: '步行友好，休闲节奏' },
        en: { name: 'Disney Springs', desc: 'Free to enter — shopping, dining, and entertainment zone, perfect for a rest day.', walk: 'Leisurely walk, relaxed pace' },
      },
    ],
    food: [
      { zh: { name: '迪士尼乐园内餐厅', type: '主题餐厅', area: '各主题公园内', tip: '预订热门餐厅需提前60天，Magic Kingdom的Be Our Guest餐厅非常受欢迎' }, en: { name: 'Disney Themed Restaurants', type: 'Character Dining', area: 'Inside theme parks', tip: 'Book popular restaurants 60 days ahead — Be Our Guest at Magic Kingdom is especially popular' } },
      { zh: { name: 'B-BBQ Chicken', type: '韩式炸鸡', area: '奥兰多市区', tip: '受亚裔游客欢迎，炸鸡口味多样，解乡愁' }, en: { name: 'B-BBQ Chicken', type: 'Korean Fried Chicken', area: 'Orlando area', tip: 'Popular among Asian visitors — variety of fried chicken flavors, a taste of home' } },
      { zh: { name: 'Aashirwad Indian & Chinese', type: '亚洲料理', area: '国际驾车路', tip: '奥兰多华人推荐的亚洲融合餐厅' }, en: { name: 'Ming\'s Bistro', type: 'Chinese', area: 'Orlando area', tip: 'Recommended by local Chinese community for authentic Chinese flavors' } },
      { zh: { name: '环球影城三把扫帚', type: '黄油啤酒', area: '哈利波特区', tip: '哈利波特园区内标志性饮品，奶油口味，无酒精' }, en: { name: 'The Three Broomsticks', type: 'Butterbeer & British Food', area: 'Wizarding World of Harry Potter', tip: 'Get a Butterbeer — the iconic non-alcoholic butterscotch drink from the Harry Potter world' } },
    ],
    shopping: [
      { zh: { name: 'Orlando Premium Outlets', desc: '两家奥特莱斯，一家在国际驾车路，一家在Vineland，品牌折扣力度大' }, en: { name: 'Orlando Premium Outlets', desc: 'Two outlet locations — International Drive and Vineland Ave — both with great brand discounts' } },
      { zh: { name: '迪士尼泉购物区', desc: '免费入场，迪士尼官方商品、高端品牌、纪念品应有尽有' }, en: { name: 'Disney Springs', desc: 'Free to enter — official Disney merchandise, upscale brands, and souvenirs' } },
      { zh: { name: 'International Drive购物街', desc: '奥兰多最热闹的购物和餐饮大街，餐厅、礼品店集中' }, en: { name: 'International Drive', desc: 'Orlando\'s main tourist strip with shops, restaurants, and attractions all in a row' } },
    ],
    tips: {
      zh: ['主题公园步行量极大，建议穿最舒适的运动鞋', '提前在官网购票，现场价格更贵且可能售罄', '夏季午后雷雨频繁，带雨衣或雨伞', '一天只游一个园区，不要贪多，会很疲惫'],
      en: ['Theme parks involve enormous amounts of walking — wear your most comfortable shoes', 'Buy tickets online in advance — gate prices are higher and can sell out', 'Summer afternoons bring frequent thunderstorms — pack a poncho', 'One park per day is enough — trying to do multiple parks in one day is exhausting'],
    },
  },
}
