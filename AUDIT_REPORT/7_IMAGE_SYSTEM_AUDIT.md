# IMAGE SYSTEM AUDIT

Generated: 2026-02-06

## Total Image Files in Project

| Location | File Count | Size |
|----------|------------|------|
| public/catalog/products/ | 18,340 | 1,169.51 MB |
| public/media/ | 1,300 | 203.88 MB |
| public/brands/logos-webp/ | 15 | 0.23 MB |
| **TOTAL** | **19,655** | **1,373.62 MB** |

## Folder Structure

```
public/
├── brands/
│   └── logos-webp/                 # 15 files, 0.23 MB
│       ├── bentley.webp
│       ├── bugatti.webp
│       ├── dolce-gabbana.webp
│       ├── exteta.webp
│       ├── flos.webp
│       ├── gaggenau.webp
│       ├── misuraemme.webp
│       ├── roberto-cavalli.webp
│       ├── scic-italia.webp
│       ├── trussardi.webp
│       ├── valcucine.webp
│       ├── vanroy.webp
│       ├── venicem.webp
│       ├── versace.webp
│       └── visionnaire.webp
├── catalog/
│   ├── fallback.svg               # Placeholder for missing images
│   └── products/                   # 18,340 files, 1,169.51 MB
│       └── {product-slug}/
│           ├── 01-card.webp
│           ├── 01-gallery.webp
│           ├── 01-lightbox.webp
│           ├── 02-gallery.webp
│           ├── 02-lightbox.webp
│           └── ...
├── media/
│   ├── brands/                     # 29 files, 6 MB (hero images)
│   ├── design/                     # 48 files, 7.06 MB
│   ├── hero/                       # 1 file, 7.17 MB
│   ├── marki/                      # 1,120 files, 161.06 MB
│   │   ├── bentley-home/          # 80 files
│   │   ├── bugatti-home/          # 72 files
│   │   ├── dolce-gabbana-casa/    # 80 files
│   │   ├── exteta/                # 80 files
│   │   ├── flos/                  # 80 files
│   │   ├── gaggenau/              # 48 files
│   │   ├── misuraemme/            # 80 files
│   │   ├── roberto-cavalli/       # 80 files
│   │   ├── scic-italia/           # 80 files
│   │   ├── trussardi-casa/        # 80 files
│   │   ├── valcucine/             # 80 files
│   │   ├── vanory/                # 52 files
│   │   ├── venicem/               # 68 files
│   │   ├── versace-home/          # 80 files
│   │   └── visionnaire/           # 80 files
│   ├── oferta/                     # 6 files, 1.08 MB
│   ├── pages/                      # 96 files, 21.5 MB
│   │   ├── aktualnosci/
│   │   ├── bentley-home-cinema/
│   │   └── o-nas/
│   └── luxarte-logo.png            # Site logo
└── robots.txt
```

## Image Size Tiers

| Tier | Pattern | Count | Purpose | Typical Size |
|------|---------|-------|---------|--------------|
| Card | `*-card.webp` | 814 | Grid thumbnails | ~400x400px |
| Gallery | `*-gallery.webp` | 9,170 | Product page gallery | ~800-1200px |
| Lightbox | `*-lightbox.webp` | 8,356 | Full-size viewing | ~1600-2400px |

## next/image Usage Coverage

| Component | Uses next/image | Optimization |
|-----------|-----------------|--------------|
| ProductCard | ✓ Yes | sizes, loading="lazy" |
| ProductGallery | ✓ Yes | fill, sizes |
| BrandPage hero | ✓ Yes | fill, priority |
| BrandPage logo | ✓ Yes | width/height |
| NaszeMarki cards | ✓ Yes | fill |
| HomeHeroVideo | ✗ No | Video element |
| OutletCategoryPage | ✓ Yes | unoptimized=true |
| Article images | ✓ Yes | sizes |
| Content page images | ✓ Yes | fill |

## CDN References Remaining

| File | Line | URL Pattern |
|------|------|-------------|
| `src/data/outlet-products.json` | 14-478 | `https://www.luxarte.pl/wp-content/uploads/...` |
| `src/lib/image-resolver.ts` | 45-150 | `CDN_BASE`, `BRAND_IMAGES`, `CATEGORY_IMAGES` (fallback maps) |
| `src/preview/shell-preview.html` | 11+ | Multiple CDN references |
| `src/preview/homepage.html` | 20+ | Multiple CDN references |

**CDN URL Count by File:**
- `outlet-products.json`: 86+ URLs (all outlet product images)
- `image-resolver.ts`: ~30 URLs (fallback mappings, not actively used)
- Preview HTML files: ~40 URLs (dev-only files)

**Total active CDN references in production code: ~86 (all in outlet-products.json)**

## Broken Paths Count

| Issue | Count | Details |
|-------|-------|---------|
| Missing card images | 0 | All 814 products have card images |
| Missing brand logos | 4 | noorth, vitage, longhi, dv-home |
| Missing brand heroes | 0 | All mapped brands have heroes |
| File not found at runtime | UNKNOWN | Graceful fallback hides errors |

## Oversized Images Detected

| Threshold | Analysis |
|-----------|----------|
| Images > 500KB | UNKNOWN (no scan performed) |
| Images > 1MB | UNKNOWN (no scan performed) |
| Unoptimized formats | 0 in catalog (all .webp) |
| Mixed formats in media/ | Yes (jpg, jpeg, png, webp mixed) |

**Average sizes by tier (estimated):**
- Card: ~20-50KB
- Gallery: ~50-150KB
- Lightbox: ~150-400KB

## Image Loading Patterns

| Pattern | Implementation |
|---------|----------------|
| Lazy loading | Default for all non-priority images |
| Priority loading | Hero images, first cards |
| Placeholder | blur not configured |
| Error fallback | `/catalog/fallback.svg` |
| sizes attribute | Responsive across breakpoints |

## Image Resolution Functions

```typescript
// Client-side (src/lib/images.ts)
getProductImage(slug)         → /catalog/products/{slug}/01-card.webp
getBrandLogo(slug)            → /brands/logos-webp/{mapped}.webp
getBrandHero(slug)            → /media/brands/{slug}-hero.webp
getBrandGalleryImages(slug)   → /media/marki/{slug}/gallery-*.webp
getFallbackImage()            → /catalog/fallback.svg

// Server-side (src/lib/images-server.ts)
getProductGalleryImages(slug) → scans /catalog/products/{slug}/*-gallery.webp
getProductLightboxImages(slug) → scans /catalog/products/{slug}/*-lightbox.webp
```

## Known Issues

1. Outlet product images use external CDN URLs (not local)
2. 4 brand logos missing from local assets
3. Mixed image formats in media/ folder (not fully converted to webp)
4. No blur placeholder configured for progressive loading
5. image-resolver.ts CDN fallbacks may load if local fails
