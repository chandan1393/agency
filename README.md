# Nebula Studio — Premium Digital Agency Landing Page

A modern, responsive, single-page digital-agency website built with **Angular 20**
(standalone components + signals), **Tailwind CSS**, and **SCSS**. Frontend-only:
no backend, no database, no APIs — all content is served from typed mock data.

## Quick start

```bash
npm install
npm start                 # dev server at http://localhost:4200
npm run build             # SSR build + prerender -> dist/agency
npm run serve:ssr:agency  # run the SSR server (after build) at http://localhost:4000
```

Requires Node 18.19+ (tested on Node 22).

## What's inside

A single scrolling page with sticky in-page navigation and 13 sections:

1. Sticky navbar — transparent at top, glass on scroll, active-link tracking, dark-mode toggle, mobile menu
2. Hero — animated aurora background, floating blur orbs, glass browser mockup, floating tech chips, animated counters
3. Trusted companies — infinite marquee
4. Services — 20 gradient-border glow cards with 3D tilt on hover
5. Why choose us — animated icon cards
6. Process — alternating timeline with an animated connector
7. Portfolio — filterable grid with hover overlays (Live Demo / View Details)
8. Pricing — three cards with a "Most Popular" badge
9. Tech stack — animated icon grid
10. Testimonials — auto-sliding carousel (pause on hover, dots + arrows)
11. FAQ — accessible accordion (smooth grid-rows animation)
12. Contact — reactive form with full client-side validation + success state, WhatsApp / Call CTAs
13. Footer — four columns, social icons, copyright

Plus: page loader, scroll-progress back-to-top, and a cursor-glow trail.

## Architecture

```
src/app/
├─ app.ts / app.html            # root: composes all sections
├─ app.config.ts                # router w/ anchor scrolling + view transitions
├─ core/
│  ├─ models/site.models.ts     # all content interfaces (strongly typed)
│  ├─ data/site.data.ts         # mock data (single source of truth)
│  ├─ services/theme.service.ts # dark mode via signals + persistence
│  └─ directives/
│     ├─ reveal.directive.ts    # scroll-reveal (IntersectionObserver)
│     ├─ count-up.directive.ts  # animated counters
│     └─ tilt.directive.ts      # 3D card tilt
├─ shared/section-heading/      # reusable heading block
└─ components/                  # one folder per section (standalone)
```

Conventions: standalone components, OnPush change detection everywhere, Angular
signals for local state, strict TypeScript, no inline CSS/JS, reusable interfaces
and constants, and SSR-safe guards (isPlatformBrowser) around all DOM access.

## Notable implementation choices

- **SSR + prerendering** via `@angular/ssr`. The landing route is prerendered to
  static HTML at build time (great for SEO and first paint) and hydrated on the
  client with event replay. Run `npm run serve:ssr:agency` for the Node server, or
  just deploy the prerendered `dist/agency/browser` as static files.
- **GSAP** powers the hero: a ScrollTrigger-driven parallax on the aurora background
  and browser mockup, plus an entrance tween. It's lazily imported inside
  `afterNextRender`, so it's code-split out of the main bundle and never runs during
  SSR. Lighter effects (reveal, marquee, tilt, count-up) stay as CSS + IntersectionObserver.
- **Lottie** via `lottie-web`, wrapped in a reusable `<app-lottie-player>` (also
  lazily imported, browser-only). It plays an animated success checkmark in the
  contact form. Drop any LottieFiles `.json` into `public/assets/lottie/` and point
  the component's `src` at it.
- **Contact form is wired to a real endpoint.** Set `CONTACT_ENDPOINT` in
  `src/app/core/config/site.config.ts` to your API / serverless function / hosted
  form service (Formspree, Getform, Web3Forms, …). The form POSTs a JSON body and
  shows submitting / success / error states. Left empty, it falls back to the
  original frontend-only success message with no network call.
- **Mock data** lives in `core/data/site.data.ts` as typed constants.
- **Dark mode** uses Tailwind's `class` strategy via `ThemeService`, persisted to
  `localStorage` and seeded from the OS preference.
- **Accessibility**: semantic landmarks, ARIA labels, visible focus rings, and every
  animation (CSS, GSAP and Lottie) respects `prefers-reduced-motion`.
- **SEO**: title/description/keywords, Open Graph + Twitter cards, JSON-LD schema,
  canonical URL, `robots.txt` and `sitemap.xml` (in `public/`).

### Build note
Font inlining is disabled in `angular.json` (`optimization.fonts: false`) so the
project builds in offline/sandboxed environments. Google Fonts and Font Awesome load
from their CDNs at runtime via `index.html`. Re-enable inlining if you prefer fonts
bundled at build time.

## Customizing

- Brand, copy, services, pricing, etc. -> edit core/data/site.data.ts
- Colors & animations -> tailwind.config.js (palette tokens + keyframes)
- Global styles / component classes -> src/styles.scss
