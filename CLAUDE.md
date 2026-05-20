# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm start      # Run production build
pnpm lint       # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **shadcn/ui** (radix-nova style) - add components via `pnpm dlx shadcn@latest add <component>`
- **Motion** (Framer Motion v12) for animations
- **Swiper** for carousels
- **react-calendly** for booking embeds

## Architecture

This is a B2B marketing site for cryotherapy equipment. Key architectural pattern:

### Data-Driven Vertical Pages

Market-specific pages (clinics, equine, medspa, sports-recovery) use a template + data pattern:

1. **Data files** in `data/verticals/*.ts` define content as typed objects implementing `VerticalPageData`
2. **Single template** `components/vertical-page/vertical-page-template.tsx` renders all verticals
3. **Modules** in `components/vertical-page/modules/` are reusable across verticals

To add a new vertical: create data file in `data/verticals/`, add route in `app/cryotherapy/[name]/page.tsx`.

### Component Organization

- `components/sections/` - Homepage modules (hero, testimonials, FAQ, etc.)
- `components/vertical-page/modules/` - Vertical page modules
- `components/layout/` - NavBar, Footer, MainNavigation
- `components/ui/` - shadcn base components

### Animation Patterns

- Use `LazyMotionProvider` wrapper from `components/ui/lazy-motion.tsx` for deferred loading
- Standard easing: `EASE_OUT = [0.23, 1, 0.32, 1]` (defined in section components)
- Respect `useReducedMotion()` for accessibility
- Trigger animations via `useInView()` intersection observer

### Navigation

- NavBar hides on scroll (homepage) or stays visible (`alwaysVisible` prop on vertical pages)
- Smooth scroll via `document.getElementById().scrollIntoView()`

## Path Aliases

Use `@/` for imports: `@/components`, `@/lib`, `@/data`

## SEO & Crawlability Files

When to update these files:

| Change | Update Required |
|--------|-----------------|
| **Add/remove a page** | `app/sitemap.ts`, `public/llms.txt` |
| **Add/change FAQ section** | Add `getFAQPageSchema()` to page, or update existing FAQ data |
| **New vertical page** | Add Service + FAQ + Breadcrumb schemas to page, update sitemap & llms.txt |
| **Change site URL** | Update `NEXT_PUBLIC_SITE_URL` env var (used by all SEO files) |
| **Block/allow AI crawler** | `app/robots.ts` |
| **Product info changes** | `lib/structured-data.ts` → `getCryoGunProductSchema()` |

Key files:
- `app/robots.ts` - Crawler directives
- `app/sitemap.ts` - XML sitemap
- `public/llms.txt` - AI content navigation
- `public/ai.txt` - AI training permissions
- `lib/structured-data.ts` - JSON-LD schema generators
- `components/seo/json-ld.tsx` - Schema component

## Next.js Version Notice

This uses Next.js 16 which may have breaking changes from training data. Check `node_modules/next/dist/docs/` for current API documentation when uncertain.
