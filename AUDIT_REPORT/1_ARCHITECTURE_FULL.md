# ARCHITECTURE FULL AUDIT

Generated: 2026-02-06

## Routing Tree

```
src/app/
├── page.tsx                           → / (homepage)
├── layout.tsx                         → Root layout
├── aktualnosci/
│   ├── page.tsx                       → /aktualnosci (articles list)
│   └── [slug]/page.tsx               → /aktualnosci/{slug} (10 articles)
├── bentley-home-cinema/page.tsx       → /bentley-home-cinema
├── brand/[slug]/page.tsx              → /brand/{slug} (18 brands)
├── design/page.tsx                    → /design
├── gallery/page.tsx                   → /gallery (dynamic route)
├── kontakt/page.tsx                   → /kontakt
├── nasze-marki/page.tsx               → /nasze-marki
├── o-nas/page.tsx                     → /o-nas
├── oferta/page.tsx                    → /oferta
├── outlet/page.tsx                    → /outlet
├── products/[slug]/page.tsx           → /products/{slug} (814 products)
├── quick-ship-luxarte-sofy/page.tsx              → /quick-ship-luxarte-sofy
├── quick-ship-luxarte-fotele/page.tsx            → /quick-ship-luxarte-fotele
├── quick-ship-luxarte-stoliki/page.tsx           → /quick-ship-luxarte-stoliki
├── quick-ship-luxarte-dywany/page.tsx            → /quick-ship-luxarte-dywany
├── quick-ship-luxarte-oswietlenie/page.tsx       → /quick-ship-luxarte-oswietlenie
├── quick-ship-luxarte-stoly-i-krzesla/page.tsx   → /quick-ship-luxarte-stoly-i-krzesla
├── quick-ship-luxarte-regaly-i-komody/page.tsx   → /quick-ship-luxarte-regaly-i-komody
├── quick-ship-luxarte-poduszki-i-pledy/page.tsx  → /quick-ship-luxarte-poduszki-i-pledy
└── quick-ship-luxarte-akcesoria-dekoracyjne/page.tsx → /quick-ship-luxarte-akcesoria-dekoracyjne
```

## Page Types

| Type | Count | Examples |
|------|-------|----------|
| Static | 15 | /, /oferta, /design, /outlet, /o-nas, /kontakt, /nasze-marki, /bentley-home-cinema, 9 quick-ship pages |
| Dynamic SSG | 842 | /products/[slug] (814), /brand/[slug] (18), /aktualnosci/[slug] (10) |
| Dynamic SSR | 1 | /gallery |

## Dynamic Routes

| Route | Parameter | Data Source | Static Generation |
|-------|-----------|-------------|-------------------|
| `/products/[slug]` | slug | `src/data/generated/products-catalog-full.ts` | Yes (generateStaticParams) |
| `/brand/[slug]` | slug | `src/canonical/legacyBrands.ts` | Yes (generateStaticParams) |
| `/aktualnosci/[slug]` | slug | `src/data/articles.ts` | Yes (generateStaticParams) |
| `/gallery` | searchParams | N/A | No (dynamic) |

## Component Hierarchy

```
RootLayout (src/app/layout.tsx)
├── Header (src/components/layout/Header.tsx)
│   ├── Logo (Image)
│   ├── Desktop Nav
│   │   ├── MARKI dropdown → LegacyBrands
│   │   ├── KATEGORIE dropdown → LegacyCategories (grouped by navGroup)
│   │   └── Static links (BENTLEY, OUTLET, AKTUALNOŚCI, O NAS, KONTAKT)
│   ├── Language Switch (PL | EN)
│   └── Mobile Menu Drawer
├── <main>{children}</main>
└── Footer (src/components/layout/Footer.tsx)
    ├── Warszawa address
    ├── Wrocław address
    ├── Brand links
    └── Social links
```

## Template Reuse Map

| Template | Used By |
|----------|---------|
| `content-page` class | /oferta, /design, /outlet, /o-nas, /kontakt, /bentley-home-cinema, /aktualnosci |
| `gallery-page` class | /gallery |
| `brand-page` class | /brand/[slug] |
| `pdp-page` class | /products/[slug] |
| `nasze-marki-page` class | /nasze-marki |
| `outlet-category-page` class | 9 quick-ship-luxarte-* pages |

## Data Sources Used by Each Page

| Page | Data Source(s) |
|------|----------------|
| `/` | None (static hero) |
| `/gallery` | `src/data/generated/products-catalog-full.ts`, `src/canonical/legacyBrands.ts`, `src/canonical/legacyCategories.ts` |
| `/products/[slug]` | `src/data/generated/products-catalog-full.ts`, `src/canonical/legacyBrands.ts`, `src/lib/descriptions.ts`, images-server.ts |
| `/brand/[slug]` | `src/canonical/legacyBrands.ts`, `src/lib/brands.ts`, `src/data/generated/products-catalog-full.ts` |
| `/nasze-marki` | `src/canonical/legacyBrands.ts` |
| `/aktualnosci` | `src/data/articles.ts` |
| `/aktualnosci/[slug]` | `src/data/articles.ts` |
| `/outlet` | Static data in page |
| `/quick-ship-*` | `src/data/outlet-products.json`, `src/lib/outlet.ts` |

## Filter System Wiring

```
Gallery Filter Flow:
┌─────────────────────────────────────────────────────────────────┐
│ URL: /gallery?brand=X,Y&category=Z                              │
└───────────────────────────────────────┬─────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────┐
│ GalleryPage (src/app/gallery/page.tsx)                          │
│ - Parses searchParams server-side                               │
│ - Loads brands from LEGACY_BRANDS                               │
│ - Loads categories from LEGACY_CATEGORIES                       │
│ - Loads products from catalogProducts                           │
└───────────────────────────────────────┬─────────────────────────┘
                                        │
                                        ▼
┌─────────────────────────────────────────────────────────────────┐
│ GalleryClient (src/components/catalog/GalleryClient.tsx)        │
│ - Client-side filter state management                           │
│ - OR logic within same group                                    │
│ - AND logic between groups                                      │
│ - Updates URL via history.replaceState                          │
└───────────────────────────────────────┬─────────────────────────┘
                                        │
            ┌───────────────────────────┼───────────────────────────┐
            ▼                           ▼                           ▼
┌───────────────────────┐  ┌───────────────────────┐  ┌───────────────────────┐
│ GallerySidebar        │  │ ProductGrid           │  │ Pagination            │
│ (Brand/Category       │  │ (Renders cards)       │  │ (24 items/page)       │
│  checkboxes)          │  │                       │  │                       │
└───────────────────────┘  └───────────────────────┘  └───────────────────────┘
```

## Image Resolver System

```
src/lib/images.ts (Client-side)
├── getProductImage(slug) → /catalog/products/{slug}/01-card.webp
├── getBrandLogo(slug) → /brands/logos-webp/{mapped}.webp
├── getBrandHero(slug) → /media/brands/{slug}-hero.webp
├── getBrandGalleryImages(slug) → /media/marki/{slug}/gallery-*.webp
└── getFallbackImage() → /catalog/fallback.svg

src/lib/images-server.ts (Server-side)
├── getProductGalleryImages(slug) → scans /catalog/products/{slug}/*-gallery.webp
└── getProductLightboxImages(slug) → scans /catalog/products/{slug}/*-lightbox.webp

src/lib/image-resolver.ts (Legacy CDN mapping - mostly unused)
├── resolveBrandImage(slug) → CDN URLs (fallback)
├── resolveBrandLogo(slug) → CDN URLs (fallback)
└── FALLBACK_IMAGES constants
```

## CSS Structure

```
src/styles/
├── globals.css          → Entry point (imports below)
├── design-system.css    → CSS custom properties (tokens only)
└── core.css             → All selectors and rules

Import chain:
layout.tsx → globals.css → design-system.css + core.css
```

## Dependency Map

```
Page Dependencies:

/ (homepage)
└── components/hero/HomeHeroVideo.tsx
    └── No external data

/gallery
├── lib/products.ts → data/generated/products-catalog-full.ts
├── canonical/legacyBrands.ts
├── canonical/legacyCategories.ts
└── components/catalog/
    ├── GalleryClient.tsx
    ├── GallerySidebar.tsx
    ├── ProductGrid.tsx
    └── ProductCard.tsx → lib/images.ts

/products/[slug]
├── lib/products.ts → data/generated/products-catalog-full.ts
├── canonical/legacyBrands.ts
├── lib/descriptions.ts → data/product-descriptions-map.json
├── lib/images-server.ts → filesystem scan
└── components/product/ProductGallery.tsx

/brand/[slug]
├── canonical/legacyBrands.ts
├── lib/brands.ts → data/marki-content.json
├── lib/products.ts
├── lib/images.ts
└── components/catalog/ProductGrid.tsx

/nasze-marki
├── canonical/legacyBrands.ts
└── lib/images.ts

/aktualnosci
└── data/articles.ts

/outlet
└── Static data (inline)

/quick-ship-luxarte-*
├── lib/outlet.ts → data/outlet-products.json
└── components/outlet/OutletCategoryPage.tsx
```
