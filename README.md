# ParentPass 🇺🇸

**A bilingual PWA travel companion for Chinese-speaking parents visiting the US.**

Live demo → [parentpass.vercel.app](https://parentpass.vercel.app)

---

## What it does

My parents were flying from China to attend my graduation at the University of Washington — their first time in the US, no English, unfamiliar with American airports and cities. I built ParentPass so they'd have everything they need in one place, in Chinese, without needing me to be on the phone.

**Core features:**

| Feature | Description |
|---|---|
| 📅 Trip Timeline | Day-by-day itinerary with flights, hotels, and activities. Swipe to edit or delete. One-tap Google Maps navigation per event. |
| ✈️ Airport Entry Guide | Step-by-step instructions for deplaning, baggage claim, and passport control — with a collapsible Q&A of real immigration officer questions. |
| 🔊 Common Phrases | Curated English phrases for everyday situations (taxi, hotel, restaurant, emergency) with TTS audio playback. |
| 🏙️ City Guide | Per-city info: neighborhoods, transport, weather, and local tips. |
| 🆘 Emergency Help | One-tap call to 911, nearest hospital, and Chinese consulate. Includes a show-to-locals English card. |
| ➕ Add Custom Events | Form to add trips in Chinese — Claude AI auto-translates title, details, and address to English in real time. |
| 📲 Installable PWA | Add to home screen on iOS or Android. Looks and works like a native app. Fully offline after first load. |
| 🔗 Share Link | Entire itinerary encoded as base64 in the URL — no account or database needed. Send one link, they open a fully populated trip. |

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 8 |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, no config file) |
| Routing | React Router v6 (Layout + Outlet pattern) |
| State | React Context API — `TripContext` (CRUD + localStorage + URL share), `LanguageContext` (zh/en toggle) |
| PWA | vite-plugin-pwa + Workbox (autoUpdate, precaches all static assets) |
| AI | Anthropic Claude Haiku via Vercel serverless function (`/api/text-translate`) |
| Deployment | Vercel (auto-deploy on push, serverless functions in `/api`) |

---

## Project structure

```
parentpass/
├── api/
│   └── text-translate.js       # Vercel serverless — Claude Haiku translation
├── public/
│   ├── favicon.svg
│   ├── pwa-192x192.png         # PWA icons (generated via scripts/gen-icons.mjs)
│   └── pwa-512x512.png
├── scripts/
│   ├── gen-icons.mjs           # Generates PNG icons using Node.js built-in zlib
│   ├── export-itinerary.mjs    # Exports full trip as self-contained HTML (for WeChat)
│   └── export-entry-guide.mjs  # Exports airport guide as self-contained HTML
├── src/
│   ├── App.jsx                 # Route definitions
│   ├── components/
│   │   ├── EditModal.jsx       # Edit event bottom sheet
│   │   ├── EventForm.jsx       # Add/edit form with auto-translate
│   │   └── Layout/
│   │       ├── BottomNav.jsx   # 5-tab bottom navigation
│   │       └── Layout.jsx      # App shell (top bar + outlet)
│   ├── context/
│   │   ├── LanguageContext.jsx # Global zh/en toggle
│   │   └── TripContext.jsx     # Trip state: CRUD, localStorage, URL base64
│   ├── data/
│   │   ├── tripData.js         # Default itinerary + getUpcomingEvents()
│   │   ├── cityData.js         # City guide content
│   │   └── emergencyPhrases.js # Common phrases content
│   ├── i18n/
│   │   └── translations.js     # All UI strings as { zh, en } objects
│   └── pages/
│       ├── Dashboard.jsx       # Home — welcome header + timeline
│       ├── EntryGuide.jsx      # Airport entry steps + customs
│       ├── EmergencyPhrases.jsx
│       ├── CityGuide.jsx
│       ├── SOSPage.jsx
│       └── TripBuilder.jsx     # Add event (/setup route, no bottom nav)
├── docs/
│   ├── ARCHITECTURE.md         # Full architecture + account reference
│   ├── SOP_CN.md               # Developer SOP (Chinese)
│   ├── SOP_EN.md               # Developer SOP (English)
│   ├── INTRO_WEBSITE.md        # Personal website project write-up
│   └── INTRO_RESUME.md         # Resume bullet points (4 formats)
├── index.html                  # PWA meta tags, apple-touch-icon
├── vercel.json                 # SPA rewrite (excludes /api/*)
└── vite.config.js              # Vite + Tailwind + PWA config
```

---

## Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Dashboard | Trip timeline |
| `/setup` | TripBuilder | Standalone — no bottom nav |
| `/translate` | EntryGuide | Airport + customs guide |
| `/phrases` | EmergencyPhrases | Common phrases with TTS |
| `/city` | CityGuide | City info |
| `/sos` | SOSPage | Emergency contacts |

---

## How AI translation works

When a user types a Chinese event title or address in the add-event form, an `onBlur` handler calls `/api/text-translate` with the text and a `context` field (`title` | `details` | `address`). The serverless function sends a context-specific prompt to Claude Haiku (max 80 tokens) and returns the English translation, which auto-fills the corresponding English field.

```
User types Chinese title
  → onBlur fires
    → POST /api/text-translate { text, context: "title" }
      → Claude Haiku
        → { translation: "..." }
          → English field auto-filled
```

---

## How trip sharing works

No backend, no auth. The entire trip JSON is:
1. `JSON.stringify`'d
2. `btoa`'d (base64)
3. Appended to the URL as `?d=<base64>`

The recipient opens the URL → `TripContext` reads `?d=`, decodes it, and renders the full itinerary. Nothing is stored server-side.

---

## i18n pattern

All UI strings live in `src/i18n/translations.js` as `{ zh, en }` objects:

```js
export const t = {
  nav: {
    trip: { zh: '行程', en: 'Trip' },
  },
  dashboard: {
    welcomeTo: { zh: '欢迎来到', en: 'Welcome to' },
  }
}
```

Any component:
```jsx
const { lang } = useLang()
<p>{t.nav.trip[lang]}</p>
```

---

## Trip event schema

```js
{
  id: 'unique-kebab-id',
  type: 'flight' | 'hotel' | 'activity',
  titleZh: '🎓 UW 毕业典礼',
  titleEn: '🎓 UW Graduation Ceremony',
  date: '2026-06-13',       // YYYY-MM-DD
  time: '10:00',            // HH:MM 24h
  detailsZh: '...',
  detailsEn: '...',
  addressZh: '华盛顿大学哈士奇体育场',
  addressEn: 'Husky Stadium, 3800 Montlake Blvd NE, Seattle, WA 98195',
  bookingUrl: null | 'https://...',
}
```

---

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

For AI translation to work locally, create `.env.local`:
```
ANTHROPIC_API_KEY=sk-ant-...
```

```bash
npm run build      # production build + PWA service worker
npm run preview    # preview the build
```

---

## Deploy

Pushing to `main` triggers an automatic Vercel deployment.

```bash
git add .
git commit -m "your message"
git push
```

> The committer git email must match the GitHub account email connected to Vercel, otherwise the deploy is blocked.

---

## Docs

Full developer reference in [`/docs`](./docs):

- [`ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — complete architecture, accounts, and gotchas
- [`SOP_CN.md`](./docs/SOP_CN.md) — developer SOP in Chinese
- [`SOP_EN.md`](./docs/SOP_EN.md) — developer SOP in English
