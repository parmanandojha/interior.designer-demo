# Atelier Maison — Interior Design Studio

Next.js 14 (App Router) + Tailwind + GSAP + Lenis. Editorial, 12-column grid.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages
- `/` Home
- `/work` Selected work
- `/services` Residential / Commercial / Developer
- `/about`
- `/process`
- `/contact` Booking form

## Tech
- **Next.js 14** App Router, server components by default.
- **Tailwind** 12-col grid via `.grid-12` utility; editorial type scale.
- **GSAP** + ScrollTrigger for reveals, parallax, counters (`components/Reveal.tsx`).
- **Lenis** smooth scroll (`components/LenisProvider.tsx`).
- Images served from Unsplash via `next/image`.
