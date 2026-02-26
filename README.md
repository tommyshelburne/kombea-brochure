# KomBea Executive Brochure

An interactive 7-page executive brochure for KomBea, built with React + TypeScript + Vite + Tailwind CSS v4.

## Development

```bash
npm i          # Install dependencies
npm run dev    # Start dev server (http://localhost:5173)
npm run build  # Production build → dist/
```

## Architecture

The brochure renders a fixed **1920 × 1080** canvas centered in the viewport. Seven slides are displayed via CSS opacity transitions — no routing, no scrolling.

```
src/
  constants/
    brochure.ts             # TOTAL_PAGES, PDF_SKIP_PAGES, canvas dimensions
  types/
    brochure.ts             # TypeScript interfaces (BrochureNavState, PdfDownloadState)
  hooks/
    useBrochureNav.ts       # Page state + keyboard navigation (arrow keys)
    usePdfDownload.ts       # PDF export via html-to-image + jsPDF
  app/
    App.tsx                 # Error boundary wrapper
    components/
      KomBeaBrochure.tsx    # Orchestrator (~35 lines) — wires hooks + components
      BrochureCanvas.tsx    # 1920×1080 page container (forwardRef)
      BrochureNav.tsx       # Download button + arrows + dot indicators (forwardRef)
      BrochureErrorBoundary.tsx
      primitives/           # Shared sub-components (PainPoint, MetricRow, ProofCard, …)
      pages/                # One file per brochure slide (Page1Cover … Page7Vision)
  styles/
    index.css               # Style entry point
    fonts.css               # Inter from Google Fonts
    tailwind.css            # Tailwind v4 + tw-animate-css
    theme.css               # CSS custom properties + KomBea brand tokens
```

## PDF Export

Clicking **Download PDF** captures each page (skipping the video page) via `html-to-image` and assembles a 1920 × 1080 landscape PDF with `jsPDF`. During capture the canvas is temporarily pinned to `position:fixed; top:0; left:0` to avoid viewport clipping.

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `→` / `↓` | Next page |
| `←` / `↑` | Previous page |
