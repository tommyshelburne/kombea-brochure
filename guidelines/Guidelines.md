# KomBea Brochure — Development Guidelines

## Design system

- **Canvas size:** Always target 1920 × 1080. Content must be fully visible within this fixed canvas.
- **Font:** Inter (400–800 weight). Never introduce a second typeface.
- **Color palette:**
  - Background: `#0B0F1A` (deep navy-black)
  - Primary text: `#E6EAF2` (near-white)
  - Muted text: `#6E7A99` (slate)
  - Accent blue: `#4DA3FF`
  - Accent purple: `#7A5CFF`

## Layout rules

- Page containers use `flex flex-col justify-center` — content must fit within 1080px height without scrolling.
- Horizontal padding: `px-32` (128px each side) on all pages.
- Reduce font sizes before reducing padding — padding provides visual breathing room.
- Never add overflow-y scroll to pages; the brochure is intentionally non-scrollable.

## PDF export rules

- Never add a page index to `PDF_SKIP_PAGES` without a comment explaining why.
- Keep `pixelRatio: 1` — higher values produce excessive file sizes.
- Page 4 (video demo, index 3) is always skipped from the PDF.

## Adding a new page

1. Create `src/app/components/pages/PageNTitle.tsx`.
2. Export it from `src/app/components/pages/index.ts`.
3. Add it to the `pages` array in `BrochureCanvas.tsx`.
4. Increment `TOTAL_PAGES` in `src/constants/brochure.ts`.
5. If it should be skipped in the PDF, add its 0-based index to `PDF_SKIP_PAGES` with a comment.

## Coding conventions

- Primitive components that are used by only one page live in `primitives/` for discoverability, not co-location.
- Hooks accept refs as parameters rather than creating them internally — refs are owned by the orchestrator (`KomBeaBrochure.tsx`).
- Do not install additional component libraries. Use or extend `src/app/components/ui/` (shadcn/ui, Radix UI based).
