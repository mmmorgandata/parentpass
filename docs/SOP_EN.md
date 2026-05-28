# ParentPass — Development SOP (English)

> For future Claude Code sessions or new contributors. Read this and you're ready to ship.

---

## What is ParentPass?

ParentPass is a **mobile-first PWA travel companion** built for Chinese-speaking parents visiting their children in the US. It provides:
- Bilingual trip timeline (swipe-to-delete, edit, export to calendar)
- US airport entry guide (step-by-step + customs rules)
- Common English phrases with TTS playback
- City guide for each destination
- Emergency help page (911, hospitals, embassy)
- Custom event builder with Claude AI auto-translation (Chinese → English)

**Live URL**: https://parentpass.vercel.app  
**GitHub**: https://github.com/mmmorgandata/parentpass  
Full architecture reference: `docs/ARCHITECTURE.md`

---

## Local Setup

```bash
git clone https://github.com/mmmorgandata/parentpass.git
cd parentpass
npm install
npm run dev        # → http://localhost:5173
```

> The translation feature (`/api/text-translate`) requires `ANTHROPIC_API_KEY`.  
> For local testing: create `.env.local` with `ANTHROPIC_API_KEY=sk-ant-...`

---

## Key Files at a Glance

| File | Purpose |
|------|---------|
| `src/data/tripData.js` | **All trip content** — add/edit events here |
| `src/i18n/translations.js` | **All UI strings** — every button/label in zh + en |
| `src/pages/Dashboard.jsx` | **Home page** — welcome header, event timeline |
| `src/pages/EntryGuide.jsx` | **Airport guide** — steps & customs info |
| `src/components/EventForm.jsx` | **Add/edit form** — fields + auto-translate logic |
| `src/context/TripContext.jsx` | **Trip state** — CRUD, localStorage, share URL |
| `src/context/LanguageContext.jsx` | **Language toggle** — global zh/en state |

---

## Common Tasks

### Add or edit a trip event

Open `src/data/tripData.js` and add an object to the `events` array:

```js
{
  id: 'unique-kebab-id',              // must be unique
  type: 'flight' | 'hotel' | 'activity',
  titleZh: '🎓 中文标题',
  titleEn: '🎓 English Title',
  date: '2026-06-13',                 // YYYY-MM-DD
  time: '10:00',                      // HH:MM (24h)
  detailsZh: '中文详情',
  detailsEn: 'English details',
  addressZh: '中文地址',
  addressEn: '3800 Montlake Blvd NE, Seattle, WA 98195',  // Google Maps searchable
  bookingUrl: null,                   // or 'https://...'
}
```

`getUpcomingEvents()` auto-sorts by date + time — no need to order manually.

---

### Update UI text

All UI strings live in `src/i18n/translations.js`:
```js
keyName: { zh: '中文', en: 'English' }
```

In any component:
```jsx
const { lang } = useLang()
<p>{t.section.keyName[lang]}</p>
```

---

### Add a new page

1. Create component in `src/pages/`
2. Add `<Route>` in `src/App.jsx`
3. Add tab to `tabs` array in `src/components/Layout/BottomNav.jsx`
4. Add nav label to `t.nav` in `src/i18n/translations.js`

---

### Add a new API endpoint

Create `api/your-endpoint.js` using ESM:

```js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  // your logic
  res.json({ result: '...' })
}
```

Vercel automatically exposes `api/xxx.js` as `/api/xxx`.

---

## Deploy

```bash
git add <changed files>
git commit -m "your message"
git push
# Vercel auto-deploys in ~1-2 minutes
```

**⚠️ Git email must be `ranscut0915@gmail.com`** — Vercel blocks deploys if the committer email can't be associated with the GitHub account:
```bash
git config --global user.email "ranscut0915@gmail.com"
```

---

## Architecture Notes

### Language switching
- Global `LanguageContext` provides `lang` (`'zh'` | `'en'`) and `toggle`
- Any component: `const { lang, toggle } = useLang()`
- Toggle button lives in `Layout.jsx` top-right (and independently in `/setup`)

### Trip data persistence (3-layer priority)
```
URL ?d= param (base64 encoded JSON)   ← highest priority (share links)
  ↓ else
localStorage key "parentpass-trip"
  ↓ else
default data from tripData.js
```

### Routing
- All routes except `/setup` render inside `Layout` (with bottom nav)
- `/setup` is standalone — no bottom nav, independent language toggle
- The "+ Add Trip" button only renders on `/` (checked via `useLocation`)

### Tailwind v4 gotcha
- No `tailwind.config.js` needed
- `src/index.css` starts with `@import "tailwindcss"`
- Custom values use CSS `@layer base { :root { --color-xxx: ... } }`

---

## Troubleshooting

| Symptom | Check |
|---------|-------|
| Events not showing | Is `date` in `YYYY-MM-DD` format? `getUpcomingEvents` filters out past dates |
| Bottom nav covers modal | Does `EditModal.jsx` container have `pb-28`? |
| Language toggle drifts left | Is the conditional "+ Add Trip" button wrapped in an empty `<div>` in `Layout.jsx`? |
| Vercel deploy blocked | Is git email set to `ranscut0915@gmail.com`? |
| Translation not working | Is `ANTHROPIC_API_KEY` set in Vercel environment variables? |
| PWA not installing | Check `vite.config.js` manifest icons path and run `npm run build` to verify SW generation |
