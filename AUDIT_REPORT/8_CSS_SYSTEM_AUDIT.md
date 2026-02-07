# CSS SYSTEM AUDIT

Generated: 2026-02-06

## CSS Files Actually Imported

| File | Size | Lines | Import Chain |
|------|------|-------|--------------|
| `src/styles/globals.css` | 0.43 KB | 17 | Entry point (imported in layout.tsx) |
| `src/styles/design-system.css` | 6.31 KB | 213 | Imported by globals.css |
| `src/styles/core.css` | 81 KB | 3,783 | Imported by globals.css |

**Import hierarchy:**
```
layout.tsx
└── @/styles/globals.css
    ├── ./design-system.css (tokens only)
    └── ./core.css (all selectors)
```

## Token System Status

| Category | Status | Token Count | Example |
|----------|--------|-------------|---------|
| Typography | ✓ Complete | 25+ | `--font-size-md`, `--font-weight-medium` |
| Colors | ✓ Complete | 30+ | `--color-brand-gold`, `--color-gray-500` |
| Spacing | ✓ Complete | 12 | `--space-1` through `--space-11` |
| Layout | ✓ Complete | 8 | `--container-max`, `--sidebar-width` |
| Borders | ✓ Complete | 5 | `--border-light`, `--radius-none` |
| Shadows | ✓ Complete | 4 | `--shadow-card-hover`, `--shadow-dropdown` |
| Motion | ✓ Complete | 10+ | `--motion-fast`, `--ease-zoom` |
| Z-index | ✓ Complete | 5 | `--z-dropdown`, `--z-lightbox` |

## Font System Status

| Property | Value |
|----------|-------|
| Primary font | Jost (Google Font) |
| Load method | `next/font/google` in layout.tsx |
| CSS variable | `--font-jost` |
| Fallback | `'Jost', sans-serif` |
| Weights loaded | 300, 400, 500, 600 |
| Subsets | latin, latin-ext |

**Font weight tokens:**
- `--font-weight-light`: 300
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600

## Duplicate Selector Hotspots

| Pattern | Occurrences | Notes |
|---------|-------------|-------|
| `.gallery-card` | 5+ | Card hover, image, title, brand |
| `.content-page` | 10+ | Multiple page types |
| `.mobile-*` | 20+ | Mobile menu, filters, nav |
| `.dropdown-*` | 15+ | Navigation dropdowns |
| `.pdp-*` | 10+ | Product detail page |
| `.brand-*` | 10+ | Brand page elements |

**Not a problem:** These are intentional BEM-style naming, not duplicates.

## Override Chains Detected

| Selector Chain | Context |
|----------------|---------|
| `.nav-item-dropdown:hover .dropdown-panel` | Desktop dropdown visibility |
| `.mobile-menu-drawer.open` | Mobile menu state |
| `.gallery-filter-drawer.open` | Mobile filter state |
| `@media (max-width: 768px)` overrides | Responsive breakpoints |
| `@media (max-width: 640px)` overrides | Mobile-specific |

**No !important usage detected (0 occurrences)**

## Hover Animation Rules Map

| Selector | Property | Value |
|----------|----------|-------|
| `.gallery-card:hover` | transform | scale(1.03) |
| `.gallery-card:hover .gallery-card-image img` | transform | scale(1.05) |
| `.gallery-card:hover` | box-shadow | var(--shadow-card-hover) |
| `.nav-link:hover` | color | var(--color-brand-gold) |
| `.outlet-category-btn:hover` | background | var(--color-brand-gold) |
| `.outlet-product-cta:hover` | background | transparent |
| `.content-cta-button:hover` | background | transparent |
| `.brand-cta:hover` | background | transparent |
| `.footer-social-link:hover` | color | var(--color-brand-gold) |
| Brand cards hover | overlay opacity | Transition |

**Total hover rules: 53**

## Radius / Shadow Rules Map

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Default for all cards/buttons |
| `--radius-button-pill` | 9999px | NOT USED in current code |
| `--radius-input-sm` | 4px | Form inputs |

**Explicit border-radius in core.css: 6 occurrences**
- Most are `0` or `var(--radius-none)`
- Pill radius for specific buttons (if any)

### Box Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card-hover` | 0 4px 16px rgba(0,0,0,0.08) | Gallery card hover |
| `--shadow-dropdown` | 0 4px 12px rgba(0,0,0,0.1) | Navigation dropdowns |
| `--shadow-drawer` | -4px 0 20px rgba(0,0,0,0.15) | Mobile drawer (right) |
| `--shadow-drawer-left` | 4px 0 20px rgba(0,0,0,0.15) | Mobile filter (left) |

**Explicit box-shadow in core.css: 6 occurrences**

## Transition Rules

| Property | Duration | Easing |
|----------|----------|--------|
| opacity | 0.3s | ease-out |
| color | 0.3s | ease-out |
| background | 0.3s | ease-out |
| transform | 0.6s | cubic-bezier(0.25, 0.1, 0.25, 1) |
| border-color | 0.3s | ease-out |

**Total transition/animation rules: 50**

## Color Usage Summary

| Semantic Token | Raw Value | Usage |
|----------------|-----------|-------|
| `--color-bg` | #f4f1ef | Page backgrounds |
| `--color-surface` | #f4f1ef | Card backgrounds |
| `--color-text` | #777 | Body text |
| `--color-heading` | #777 | Headings |
| `--color-brand-gold` | #967f65 | Accents, hover states |
| `--color-white` | #fff | Card surfaces, text on dark |
| `--color-gray-700` | #333 | Dark text elements |

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| > 1024px | Desktop |
| 769px - 1024px | Tablet |
| <= 768px | Mobile |
| <= 640px | Small mobile |

**Media query distribution:**
- @media (max-width: 1024px): ~15 rules
- @media (max-width: 768px): ~40 rules
- @media (max-width: 640px): ~10 rules

## CSS Architecture Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| Token-based design | ✓ Good | All values via CSS vars |
| No inline styles | ✓ Good | Styles in CSS files |
| No !important | ✓ Good | Clean cascade |
| BEM-like naming | ✓ Good | Consistent patterns |
| Responsive design | ✓ Good | Mobile-first considered |
| Dark mode | ✗ None | No dark theme tokens |
| CSS-in-JS | ✗ None | Pure CSS approach |
| Tailwind | ✗ None | Custom CSS only |

## Known Issues

1. core.css is large (81KB, 3783 lines) - could be split
2. Some inline styles in components (objectFit in Image)
3. No CSS minification in development
4. No critical CSS extraction
5. All styles load on every page (no code splitting)
