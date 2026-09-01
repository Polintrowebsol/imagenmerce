# Imagenmerce cinematic website

## Goal
Build a premium, monochrome, image-first website that makes the core transformation immediately visible: one ordinary product reference becomes a consistent six-image product system.

## Visual system
- Use a warm-white, ink-black, and neutral-gray palette with one restrained signal accent.
- Pair strong editorial display typography with a clean sans-serif interface face.
- Keep layouts spacious and cinematic; use sharp or subtly rounded geometry, fine rules, and controlled shadows.
- Use one fictional hero product throughout the main story so every transformation feels credible and consistent.
- Generate the complete cohesive product image set: ordinary reference, refined hero, angle, detail, two lifestyle scenes, and technical/dimension presentation.

## Build sequence
1. Establish global design tokens, typography, motion rules, and responsive behavior.
2. Build the transparent-to-floating sticky navigation and transformation hero with a draggable mouse/touch comparison.
3. Build the scroll-led reference-to-ready sequence and visual product-image standards for background, framing, camera angle, and catalog consistency.
4. Build the six-image full-screen narrative with fixed progress, followed by the one-to-six image explosion.
5. Add product accuracy, visual fixes, quality checklist, and interactive fictional product-detail gallery.
6. Add workflow comparison, catalog scaling animation and calculator, five-step process, client input requirements, project gallery/case-study modal, audience strip, service options, and final transformation CTA.
7. Add responsive interactions, restrained motion with reduced-motion support, accessibility labels, keyboard controls, and route-specific metadata.
8. Verify build health and test desktop/mobile rendering and the key comparison, gallery, calculator, and modal interactions.

## Technical details
- TanStack Start route at `/` with focused React components and semantic HTML.
- Tailwind CSS v4 utilities backed by semantic OKLCH tokens in `src/styles.css`.
- Native pointer events for before/after sliders, IntersectionObserver for progress states, and CSS transforms for cinematic scroll choreography.
- Generated images imported from `src/assets`; no stock imagery, real brands, client names, testimonials, logos, prices, dimensions, or performance claims.
- Dimension labels remain clearly marked examples until client-supplied data is available.
