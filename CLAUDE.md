# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start Vite development server
npm run build  # Production build
```

There is no test or lint setup.

## Architecture

This is a **Figma Make** export — a React + TypeScript + Vite + Tailwind CSS v4 single-page app generated from a Figma design file.

**Entry point:** `src/main.tsx` → `src/app/App.tsx` → `src/app/components/KomBeaBrochure.tsx`

The entire brochure lives in `KomBeaBrochure.tsx` (~32KB). It renders a **fixed 1920×1080 canvas** centered on the viewport using absolute positioning. Six page components (`Page1Cover` through `Page6Vision`) are defined in this same file and toggled via CSS `opacity` transitions (not routing or transforms).

```
src/
  main.tsx                          # React root mount
  app/
    App.tsx                         # Thin wrapper, renders KomBeaBrochure
    components/
      KomBeaBrochure.tsx            # All 6 brochure pages + navigation UI
      figma/
        ImageWithFallback.tsx       # Figma-generated image helper
      ui/                           # shadcn/ui components (Radix UI based)
  styles/
    index.css                       # Imports fonts, tailwind, theme
    fonts.css                       # Inter from Google Fonts
    tailwind.css                    # Tailwind v4 + tw-animate-css
    theme.css                       # CSS custom properties (design tokens)
```

## Styling

- **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config` file; configuration is in CSS.
- Design tokens are CSS custom properties in `src/styles/theme.css`, exposed to Tailwind via `@theme inline {}`. Use `bg-primary`, `text-foreground`, etc. rather than raw colors.
- Font: Inter (400–800 weight). Base font size: 16px (from `--font-size`).
- Path alias `@` maps to `src/`.
- Raw imports supported for `.svg` and `.csv` files.

## Vite config note

The `vite.config.ts` comment explicitly states: **do not remove the React or Tailwind plugins** — both are required even if Tailwind is not actively used. Never add `.css`, `.tsx`, or `.ts` to `assetsInclude`.

## UI Components

`src/app/components/ui/` contains shadcn/ui components (MIT licensed, from Radix UI primitives). Add or modify these rather than installing additional component libraries.

## Guidelines file

`guidelines/Guidelines.md` is a template for project-specific AI guidelines. It currently contains only placeholder comments — add real rules there if needed.
