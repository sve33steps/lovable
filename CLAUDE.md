# Agent Notes — 33steps

This file gives you the context you need to work on this project without breaking things.

---

## What this project is

A single-page marketing landing page for a leadership course. One long scrolling page, 17 sections rendered top to bottom. No routing, no state management library, no backend.

---

## Running locally

```bash
npm run dev      # dev server (Vite HMR)
npm run build    # type-check + build — run this to verify no errors before committing
```

---

## How the page is assembled

`App.tsx` is the root. It:
1. Imports all 18 CSS files
2. Renders all 17 components in page order
3. Runs a single `useEffect` for GA4 + Clarity tracking

Components are in `src/components/`. Each is a single default export function with no props — they are pure layout/HTML. The section order in `App.tsx` is intentional and matches the designed scroll flow.

---

## CSS rules — important

- **Do not change CSS class names.** The CSS files use specific selectors that match the JSX. Renaming classes in TSX without updating CSS (or vice versa) will silently break layout.
- **Do not add Tailwind or CSS modules.** All styles are plain `.css` files in `src/styles/`, imported globally in `App.tsx`.
- **Media query breakpoints:** Mobile is `max-width: 768px`, tablet is `max-width: 1100px`.
- **CSS variables** are defined in `src/styles/global.css`. Use them (`var(--primary)`, `var(--white)`, etc.) rather than hardcoding colours.

---

## Assets

All assets live in `public/assets/`. Reference them with absolute paths starting with `/assets/...`:

```tsx
<img src="/assets/images/logos/logo.svg" />
<video src="/assets/videos/hero-video.mp4" />
```

Never use relative paths like `../assets/` in TSX files — Vite serves `public/` at the root.

---

## Email form

`src/hooks/useKitForm.ts` handles all email subscription logic. It is used by both `Newsletter.tsx` and `Footer.tsx` — any form changes should go in the hook, not in the components.

The hook submits to Kit's public endpoint (no API key needed):
```
POST https://app.convertkit.com/forms/{VITE_KIT_FORM_ID}/subscriptions
```

Form states: `idle | sending | subscribed | already | error`

Button CSS classes for each state: `.btn-subscribed` (green), `.btn-already-subscribed` (teal), `.btn-error` (red) — defined in `src/styles/global.css`.

---

## Special components

**`Topics.tsx`** — runs a vanilla JS scroll animation via `useEffect`. It splits heading text into individual letter spans and reveals them as the section scrolls into view. The effect has a cleanup function — don't remove it.

**`Nav.tsx`** — the CTA button has two spans: `.nav-cta-desktop` ("I'm ready to lead") and `.nav-cta-mobile` ("Join now"), toggled by CSS at 768px.

**`GetReal.tsx`** — background is a static image (`/assets/images/getreal-bg.jpg`), no video overlay.

**`Founder.tsx`** — background is a photo (`founder-photo.avif`/`.png`) with a CSS gradient overlay (`linear-gradient(to right, transparent 28%, #141414 64%)`).

**`public/success.html`** — static HTML, not a React component. Used as Stripe's post-payment redirect URL. Do not convert it to TSX.

---

## Environment variables

Stored in `.env` (gitignored). Template in `.env.example`.

| Variable | Used in |
|---|---|
| `VITE_KIT_API_KEY` | `useKitForm.ts` |
| `VITE_KIT_FORM_ID` | `useKitForm.ts` |

All `VITE_` variables are bundled into the client JS — never put secrets here.

When deploying to Lovable, set these in Lovable's project environment settings.

---

## Tracking

GA4 and Microsoft Clarity are initialised in `App.tsx`'s `useEffect`. The effect also sets up:
- A click event delegation listener for `begin_checkout` (fires on `.btn-dark` clicks)
- An `IntersectionObserver` on `#getreal` for `view_item`

Do not move tracking to individual components — keep it centralised in `App.tsx`.

---

## Before committing

1. Run `npm run build` — must complete with zero TypeScript errors
2. Check that `.env` is NOT in `git status` (it's gitignored)
3. Do not commit `dist/` or `node_modules/`
