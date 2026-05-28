# ParentPass — Personal Website Introduction

---

## ParentPass

**A mobile-first PWA travel companion for Chinese-speaking parents visiting the US**

[Live Demo](https://parentpass.vercel.app) · [GitHub](https://github.com/mmmorgandata/parentpass)

---

### The Problem

My parents were coming from China to attend my graduation at the University of Washington — their first time in the US, no English, no familiarity with American airports or cities. I needed something more than a PDF itinerary. I needed something that felt like having me in their pocket.

---

### What I Built

ParentPass is a bilingual Progressive Web App that guides Chinese-speaking parents through every step of a US trip — from clearing customs at the airport to finding the best photo spot in a new city.

**Core features:**

- **Bilingual trip timeline** — A chronological view of every flight, hotel check-in, and activity. Each card shows Chinese and English details, a one-tap navigation button to Google Maps, and optional booking links. Swipe left on any card to edit or delete.

- **US airport entry guide** — Step-by-step instructions for deplaning, baggage claim, and passport control — with a collapsible Q&A of real questions immigration officers ask and how to answer them. Tabs for prohibited and allowed customs items.

- **Common phrases with TTS** — A curated set of English phrases for everyday situations (taxi, restaurant, hotel, emergency). Each phrase plays back audio on tap so parents can play it to a local.

- **City guide** — Curated info per destination: neighborhoods, weather, transport tips, local etiquette.

- **Emergency help** — One-tap calls to 911, the nearest hospital, and the Chinese consulate. A simple English card parents can show in an emergency.

- **Add custom events** — A form where you type in Chinese and Claude AI (Haiku) auto-translates the title, details, and address to English in real time.

- **Installable as an app** — Full PWA support means parents tap "Add to Home Screen" and it looks and feels like a native app, with offline access to all cached content.

---

### Technical Highlights

**Frontend**: React 18 + Vite + Tailwind CSS v4, mobile-first layout constrained to 448px max-width

**PWA**: vite-plugin-pwa with Workbox precaching — all assets cached on first load, works fully offline afterward

**AI translation**: When a user types a Chinese event title or address, an `onBlur` handler calls a Vercel serverless function that passes the text to Claude Haiku with context-aware prompts (`title` / `details` / `address`) and fills in the English fields automatically

**Trip sharing**: The entire trip JSON is base64-encoded and embedded in the URL query string — no backend database needed, no accounts, no login. Share a link and the recipient opens a fully-populated itinerary

**Bilingual architecture**: A global `LanguageContext` provides a `lang` toggle (`zh` | `en`). All UI strings live in a single `translations.js` file as `{ zh: '...', en: '...' }` objects, keeping every component clean

**Deployment**: GitHub push → Vercel auto-deploy with serverless functions. SPA routing handled by a `vercel.json` rewrite rule that excludes `/api/*`

---

### Stack

`React 18` · `Vite` · `Tailwind CSS v4` · `React Router v6` · `vite-plugin-pwa` · `Workbox` · `Vercel` · `Anthropic Claude API`

---

### Context

Built as a personal project for my parents' visit for my UW graduation in June 2026. Designed with one real user in mind: someone who reads Chinese, has never used Google Maps, and needs confidence navigating an unfamiliar country alone.
