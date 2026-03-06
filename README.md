# 33steps — Landing Page

Marketing landing page for the 33steps leadership course. Built with React + Vite + TypeScript, deployed via Lovable.

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI | React 18 |
| Build | Vite 5 |
| Language | TypeScript (strict: false) |
| Styling | Plain CSS (no framework) |
| Email | Kit (ConvertKit) v3 public API |
| Analytics | GA4 + Microsoft Clarity |
| Hosting | Lovable |

---

## Local Development

```bash
npm install
npm run dev        # starts at http://localhost:5173
npm run build      # type-check + build to dist/
npm run preview    # preview the dist/ build locally
```

### Environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

| Variable | Where to find it |
|---|---|
| `VITE_KIT_API_KEY` | Kit → Settings → Advanced → API Key |
| `VITE_KIT_FORM_ID` | Kit → Forms → [your form] → URL |

> **Note:** `VITE_` prefix means these values are bundled into the client JS and visible in DevTools. Only use public/embed keys here — never API secrets or payment credentials.

---

## Project Structure

```
33steps/
├── public/
│   ├── assets/          # images + videos (served as-is)
│   └── success.html     # Stripe post-payment redirect (static)
├── src/
│   ├── main.tsx         # React entry point
│   ├── App.tsx          # Root: imports all CSS, renders all sections, tracking
│   ├── components/      # 17 TSX components, one per page section
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Steps.tsx
│   │   ├── Belief.tsx
│   │   ├── Comparison.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Mission.tsx
│   │   ├── ForYou.tsx
│   │   ├── Focus.tsx
│   │   ├── Founder.tsx
│   │   ├── Topics.tsx
│   │   ├── Time.tsx
│   │   ├── Guarantee.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Testimonials.tsx
│   │   ├── GetReal.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useKitForm.ts  # email subscription logic (shared by Newsletter + Footer)
│   └── styles/            # 18 CSS files, one per section + global
├── .env                   # gitignored — local secrets
├── .env.example           # committed — template with placeholder values
├── index.html             # Vite HTML shell
├── vite.config.ts
└── tsconfig*.json
```

---

## Key Decisions

**CSS:** All styles live in `src/styles/`. No CSS modules, no Tailwind — plain `.css` files imported in `App.tsx`. This keeps the visual output identical to the original static site.

**Assets:** Everything under `public/assets/` is served at `/assets/...` paths. Reference them as absolute paths in code (e.g. `/assets/images/hero-photo.jpg`).

**Email form:** Uses Kit's public form submission endpoint (`app.convertkit.com/forms/{id}/subscriptions`) — no API key required, no CORS issues. The `useKitForm` hook is shared between `Newsletter.tsx` and `Footer.tsx`.

**Scroll animation (Topics section):** Vanilla JS letter-splitting + IntersectionObserver runs inside `Topics.tsx` via `useEffect` with cleanup.

**Tracking (GA4 + Clarity):** Initialised in `App.tsx` via `useEffect`. Includes `begin_checkout` click delegation and `view_item` IntersectionObserver on the pricing section.

**`success.html`:** A static HTML page in `public/` used as the Stripe post-payment redirect. Vite copies it to `dist/` as-is — no React involved.

---

## Deployment (Lovable)

1. Connect the GitHub repo (`sve33steps/lovable`) in Lovable
2. Add environment variables in Lovable project settings:
   ```
   VITE_KIT_API_KEY=...
   VITE_KIT_FORM_ID=...
   ```
3. Lovable auto-detects Vite and runs `npm run build` on every push to `main`
