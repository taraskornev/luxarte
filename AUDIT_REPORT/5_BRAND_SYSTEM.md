# BRAND SYSTEM AUDIT

Generated: 2026-02-06

## Brands Count

| Metric | Count |
|--------|-------|
| Total brands defined | 18 |
| Tier 1 (Premium) | 7 |
| Tier 2 (Specialist) | 11 |
| Brands with products | 15 |
| Brands with 0 products | 3 (Bugatti Home, Roberto Cavalli, Gaggenau) |

## Brand List

| # | Brand | Slug | Tier | Products | Show in Footer |
|---|-------|------|------|----------|----------------|
| 1 | Versace Home | versace-home | 1 | 94 | Yes |
| 2 | Trussardi Casa | trussardi-casa | 1 | 107 | Yes |
| 3 | Bentley Home | bentley-home | 1 | 136 | Yes |
| 4 | Bugatti Home | bugatti-home | 1 | 0 | Yes |
| 5 | Dolce & Gabbana Casa | dolce-gabbana-casa | 1 | 113 | Yes |
| 6 | Visionnaire | visionnaire | 1 | 78 | Yes |
| 7 | Roberto Cavalli Home Interiors | roberto-cavalli-home-interiors | 1 | 0 | Yes |
| 8 | MisuraEmme | misuraemme | 2 | 3 | No |
| 9 | SCIC Italia | scic-italia | 2 | 18 | Yes |
| 10 | Valcucine | valcucine | 2 | 8 | Yes |
| 11 | Exteta | exteta | 2 | 148 | Yes |
| 12 | Gaggenau | gaggenau | 2 | 0 | Yes |
| 13 | Venicem | venicem | 2 | 100 | Yes |
| 14 | Vanory | vanory | 2 | 0 | No |
| 15 | Noorth | noorth | 2 | 4 | No |
| 16 | Vitage | vitage | 2 | 3 | No |
| 17 | Longhi | longhi | 2 | 1 | No |
| 18 | DV Home | dv-home | 2 | 1 | No |

## Brand Page Template

**Route:** `/brand/[slug]`
**Component:** `src/app/brand/[slug]/page.tsx`

### Page Structure

```
/brand/{slug}
├── Breadcrumb: Strona główna / Nasze marki / {label}
├── H1: Brand name
├── Large logo (360x160)
├── Hero image (2:1 ratio, full width)
├── Intro text (from legacy brand content)
├── CTA: "Poznaj kolekcję" button → /gallery?brand={slug}
└── Product grid (products from this brand)
```

### Data Sources Used

| Data | Source |
|------|--------|
| Brand info | `src/canonical/legacyBrands.ts` |
| Intro text | `src/lib/brands.ts` → `src/data/marki-content.json` |
| Logo | `src/lib/images.ts` → `getBrandLogo()` |
| Hero | `src/lib/images.ts` → `getBrandHero()` |
| Products | `src/lib/products.ts` → `getProductsByBrand()` |

## Brand Gallery Image Sources

```
Logic: getBrandHero(slug) → /media/brands/{slug}-hero.webp
```

### Hero Images Present

| File | Status |
|------|--------|
| bentley-home-hero.webp | ✓ Present |
| bugatti-home-hero.jpg | ✓ Present (also .webp variant) |
| dolce-gabbana-casa-hero.png | ✓ Present (also .webp variant) |
| exteta-hero.webp | ✓ Present |
| flos-hero.jpg | ✓ Present (also .webp variant) |
| gaggenau-hero.webp | ✓ Present |
| roberto-cavalli-hero.png | ✓ Present (also .webp variant) |
| scic-hero.webp | ✓ Present |
| trussardi-casa-hero.webp | ✓ Present |
| valcucine-hero.webp | ✓ Present |
| vanory-hero.jpg | ✓ Present (also .webp variant) |
| venicem-hero.jpg | ✓ Present (also .webp variant) |
| versace-home-hero.webp | ✓ Present |
| visionnaire-hero.jpg | ✓ Present (also .webp variant) |

**Total hero images:** 29 files (includes duplicate formats)

### Brand Gallery Images (Marki Folder)

| Brand Folder | Image Count |
|--------------|-------------|
| bentley-home | 80 |
| bugatti-home | 72 |
| dolce-gabbana-casa | 80 |
| exteta | 80 |
| flos | 80 |
| gaggenau | 48 |
| misuraemme | 80 |
| roberto-cavalli | 80 |
| scic-italia | 80 |
| trussardi-casa | 80 |
| valcucine | 80 |
| vanory | 52 |
| venicem | 68 |
| versace-home | 80 |
| visionnaire | 80 |

**Total marki gallery images:** 1,120

## Brand Logo Sources

```
Logic: getBrandLogo(slug) → /brands/logos-webp/{mapped-name}.webp
```

### Logos Present

| File | For Brand(s) |
|------|--------------|
| bentley.webp | bentley-home |
| bugatti.webp | bugatti-home |
| dolce-gabbana.webp | dolce-gabbana-casa |
| exteta.webp | exteta |
| flos.webp | flos |
| gaggenau.webp | gaggenau |
| misuraemme.webp | misuraemme |
| roberto-cavalli.webp | roberto-cavalli-home-interiors |
| scic-italia.webp | scic-italia |
| trussardi.webp | trussardi-casa |
| valcucine.webp | valcucine |
| vanroy.webp | vanory |
| venicem.webp | venicem |
| versace.webp | versace-home |
| visionnaire.webp | visionnaire |

**Total logo files:** 15

### Missing Logo Mappings

| Brand | Expected | Status |
|-------|----------|--------|
| noorth | noorth.webp or mapped | MISSING |
| vitage | vitage.webp or mapped | MISSING |
| longhi | longhi.webp or mapped | MISSING |
| dv-home | dv-home.webp or mapped | MISSING |

## "Nasze Marki" Page Implementation

**Route:** `/nasze-marki`
**Component:** `src/app/nasze-marki/page.tsx`

### Page Structure

```
/nasze-marki
├── H1: "Nasze marki"
└── Grid of brand cards (all 18 brands)
    └── Each card:
        ├── Background hero image
        ├── Dark overlay
        └── Center logo
        → Links to /brand/{slug}
```

### Implementation Details

| Feature | Status |
|---------|--------|
| Shows all 18 brands | ✓ Yes |
| Sorted by tier then sortOrder | ✓ Yes |
| Card has hero background | ✓ Yes |
| Card has logo overlay | ✓ Yes |
| Links to brand page | ✓ Yes |

## Mismatches vs Legacy

| Feature | Legacy | Current | Status |
|---------|--------|---------|--------|
| Brand count | 15+ visible | 18 defined | ✓ OK |
| Brand page URL | `/marka/{slug}` | `/brand/{slug}` | ✗ DIFFERENT |
| Direct brand gallery | Yes | Via /gallery?brand= filter | ✗ DIFFERENT |
| Brand intro text | Full paragraphs | From marki-content.json | ✓ Partial match |
| Brand products shown | Full gallery | ProductGrid component | ✓ Similar |
| Brand page layout | Custom per brand | Same template all | ✗ DIFFERENT |
| Nasze Marki grid | Logo only cards | Logo on hero bg | ✗ DIFFERENT |

## Known Issues

1. 4 brands missing logo files (noorth, vitage, longhi, dv-home)
2. Brand slug for getBrandHero doesn't match all files exactly (misura-emme vs misuraemme)
3. Footer brand links use incorrect slugs (3 broken)
4. Brands with 0 products still show in all lists
5. No brand-specific description pages (same template for all)
