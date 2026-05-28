# ParentPass — Resume Version

---

## Option A: Project entry (standard resume format)

**ParentPass** — Bilingual Travel PWA · [parentpass.vercel.app](https://parentpass.vercel.app)
*React 18 · Vite · Tailwind CSS v4 · Vercel Serverless · Anthropic Claude API · PWA / Workbox*

- Built a mobile-first Progressive Web App for Chinese-speaking parents navigating US travel — bilingual (zh/en) throughout, installable as a home-screen app with full offline support via Workbox service worker precaching
- Integrated Claude Haiku AI for real-time Chinese-to-English translation of trip event fields; context-aware prompts (`title` / `details` / `address`) yield translation in under 1 second via Vercel serverless functions
- Implemented a zero-backend trip-sharing system: entire itinerary JSON base64-encoded into URL query params — no database, no auth, no server state
- Designed a global bilingual architecture using React Context and a centralized `translations.js` object, enabling instant language switching across all pages without rerenders

---

## Option B: Bullet points to drop under a "Projects" section

- **ParentPass** ([parentpass.vercel.app](https://parentpass.vercel.app)) — Mobile PWA travel guide for Chinese-speaking parents; features AI-powered auto-translation (Claude Haiku), offline-first service worker caching, shareable itineraries via base64-encoded URLs, and full zh/en bilingual UI built with React 18, Vite, and Tailwind CSS v4

---

## Option C: One-liner for a skills/projects summary

> Shipped *ParentPass*, a bilingual PWA travel companion (React + Vite + Vercel) with Claude AI translation, offline support, and URL-based trip sharing — designed for non-English-speaking parents visiting the US.

---

## Option D: For a software engineering role emphasizing AI/LLM experience

**ParentPass** — AI-Assisted Travel Companion PWA
*React 18 · Vite · Tailwind CSS v4 · Anthropic Claude API · Vercel Serverless · PWA*

- Designed and shipped a production PWA serving Chinese-speaking travelers, incorporating Claude Haiku (claude-haiku-4-5) via Vercel serverless functions for context-sensitive translation of user-generated trip content
- Engineered prompt variants by input type (event title vs. detail vs. address) to maximize translation accuracy within an 80-token budget, optimizing for latency and cost
- Architected a stateless sharing mechanism (base64 URL encoding of full trip JSON) eliminating the need for user accounts or a persistent backend
- Built offline-first with vite-plugin-pwa and Workbox precaching; app functions fully without network after first load — critical for users traveling internationally

---

## Keywords (ATS-friendly)

React · React Router · Vite · Tailwind CSS · Progressive Web App (PWA) · Service Worker · Workbox · Vercel · Serverless Functions · Anthropic API · LLM Integration · i18n · Bilingual · TypeScript-adjacent (JSX) · REST API · localStorage · Context API · Mobile-first

