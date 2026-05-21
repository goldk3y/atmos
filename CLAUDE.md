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

## Design System (Apple HIG-Aligned)

All colors are defined as CSS custom properties in `app/globals.css` with light and dark mode variants.

### Background Hierarchy

Use these tokens for backgrounds. **Never use Tailwind color classes** (e.g., `bg-gray-100`) for backgrounds.

| Token | Purpose | Light | Dark |
|-------|---------|-------|------|
| `--atmos-page` | Base page, odd sections | #F5F5F7 | #000000 |
| `--atmos-canvas` | Even sections, containers | #FDFDFD | #1C1C1E |
| `--atmos-surface` | Cards on canvas, form inputs | #FFFFFF | #2C2C2E |
| `--atmos-elevated-bg` | Footer, dark CTA sections | #0F1012 | #1C1C1E |

**Section Alternation Pattern:**
```
Hero → canvas → page → canvas → page → canvas → elevated
```

**Card Elevation Rules:**
- Cards on `--atmos-page` background → use `bg-[var(--atmos-canvas)]`
- Cards on `--atmos-canvas` background → use `bg-[var(--atmos-surface)]`
- Always pair cards with `border-[var(--atmos-border)]`

### Semantic Accent Colors

Use these for UI accents. **Never use Tailwind color classes** (e.g., `text-red-600`, `bg-green-100`).

| Token | Purpose | Usage |
|-------|---------|-------|
| `--atmos-red` | Errors, destructive | `text-[var(--atmos-red)]` |
| `--atmos-orange` | Warnings | `text-[var(--atmos-orange)]` |
| `--atmos-yellow` | Caution, highlights | `text-[var(--atmos-yellow)]` |
| `--atmos-green` | Success, positive | `text-[var(--atmos-green)]` |
| `--atmos-blue` | Links, primary actions | `text-[var(--atmos-blue)]`, `bg-[var(--atmos-blue)]` |
| `--atmos-blue-hover` | Blue hover state | `hover:bg-[var(--atmos-blue-hover)]` |

**Examples:**
```tsx
// Error message
<p className="text-[var(--atmos-red)]">{error}</p>

// Success indicator
<div className="bg-[var(--atmos-green)]/10 text-[var(--atmos-green)]">✓</div>

// Primary button
<button className="bg-[var(--atmos-blue)] hover:bg-[var(--atmos-blue-hover)]">

// Link
<a className="text-[var(--atmos-blue)] hover:underline">
```

### Text Colors (Apple HIG Label System)

| Token | Light Mode | Dark Mode | Purpose |
|-------|------------|-----------|---------|
| `--atmos-ink` | #000000 | #FFFFFF | Primary text (Label) |
| `--atmos-secondary` | rgba(60,60,67,0.6) | rgba(235,235,245,0.6) | Body text (Secondary Label) |
| `--atmos-muted` | rgba(60,60,67,0.3) | rgba(235,235,245,0.3) | Hints/placeholders (Tertiary Label) |
| `--atmos-quaternary` | rgba(60,60,67,0.18) | rgba(235,235,245,0.18) | Disabled text (Quaternary Label) |

**Usage:**
```tsx
<h1 className="text-[var(--atmos-ink)]">Primary heading</h1>
<p className="text-[var(--atmos-secondary)]">Body text</p>
<span className="text-[var(--atmos-muted)]">Placeholder</span>
<span className="text-[var(--atmos-quaternary)]">Disabled</span>
```

**Exception - `text-white`:** Acceptable on dark backgrounds only:
- Buttons with `bg-[var(--atmos-blue)]`
- Hero image overlays
- Elevated sections (prefer `text-[var(--atmos-elevated-fg)]` when available)

### Focus States

Use for form inputs and interactive elements:
```tsx
className="focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_var(--atmos-focus-ring)]"
```

### Elevated Sections (Dark Backgrounds)

For footer and dark CTA sections, use the elevated token family:
```tsx
className="bg-[var(--atmos-elevated-bg)] text-[var(--atmos-elevated-fg)]"
// Muted text: text-[var(--atmos-elevated-muted)]
// Borders: border-[var(--atmos-elevated-border)]
```

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
