# PRODUCT SYSTEM AUDIT

Generated: 2026-02-06

## Product Data Source File(s)

| File | Purpose | Type |
|------|---------|------|
| `src/data/generated/products-catalog-full.ts` | Main product catalog | TypeScript (generated) |
| `src/lib/products.ts` | Product accessor functions | TypeScript |
| `src/data/product-descriptions-map.json` | Product descriptions | JSON |

## Product Count

| Metric | Count |
|--------|-------|
| Total products | 814 |
| Products with descriptions | UNKNOWN (not audited) |
| Products with card images | 814 |
| Products with gallery images | 9170 images across all products |
| Products with lightbox images | 8356 images across all products |

## Product Data Structure

```typescript
interface CatalogProduct {
  id: string;
  name: string;
  slug: string;
  brandSlug: BrandSlug;
  categorySlug: ProductCategorySlug;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  brandSlug: BrandSlug;
  brandName: string;        // resolved from brandNames map
  categorySlug: ProductCategorySlug;
  categoryName: string;     // resolved from categoryNames map
}
```

## Image Folder Pattern

```
public/catalog/products/
└── {product-slug}/
    ├── 01-card.webp         → Card image (400x400)
    ├── 01-gallery.webp      → Gallery image (larger)
    ├── 01-lightbox.webp     → Lightbox image (full size)
    ├── 02-gallery.webp
    ├── 02-lightbox.webp
    └── ... (variable count per product)
```

## Image Tier Summary

| Tier | Pattern | Count | Purpose |
|------|---------|-------|---------|
| Card | `*-card.webp` | 814 | Grid/listing thumbnails |
| Gallery | `*-gallery.webp` | 9,170 | Product page gallery |
| Lightbox | `*-lightbox.webp` | 8,356 | Full-size viewing |

**Total product images: 18,340**

## Gallery / Lightbox Logic

**Product Gallery Component:** `src/components/product/ProductGallery.tsx`

```
Image Resolution (Server-side):
1. getProductGalleryImages(slug) → scans folder for *-gallery.webp
2. getProductLightboxImages(slug) → scans folder for *-lightbox.webp

Display Logic:
- Hero = first gallery image (galleryImages[0])
- Grid = remaining gallery images (galleryImages.slice(1))
- Lightbox = all lightbox images
```

| Feature | Status |
|---------|--------|
| Image zoom | ✓ Lightbox implemented |
| Gallery grid | ✓ Masonry-style layout |
| Thumbnail navigation | ✓ Click to open lightbox |
| Keyboard navigation | UNKNOWN |
| Touch/swipe | UNKNOWN |

## Related Products Logic

| Feature | Status |
|---------|--------|
| Related products section | ✗ NOT IMPLEMENTED |
| "More from brand" | ✗ NOT IMPLEMENTED |
| "Similar products" | ✗ NOT IMPLEMENTED |
| "Recently viewed" | ✗ NOT IMPLEMENTED |

## Product Page Structure

```
/products/{slug}
├── Breadcrumb: Strona główna / Galeria / {name}
├── H1: Product name
├── Brand link → /brand/{brandSlug}
├── Hero image (first gallery image)
├── Gallery grid (remaining images)
├── Description (if exists in descriptions map)
├── CTA: "Zapytaj o produkt" → /kontakt
└── NO related products
```

## Broken Image Count

| Status | Details |
|--------|---------|
| Card images missing | 0 (fallback handles gracefully) |
| Gallery scan errors | UNKNOWN (no error tracking) |
| 404s logged in dev | Yes (console.warn for missing images) |

**Error handling:**
- `ProductCard` component catches image errors
- Falls back to `/catalog/fallback.svg`
- Logs missing images to console (dev only)
- Uses Set to avoid duplicate warnings

## Product Accessor Functions

```typescript
// src/lib/products.ts
getAllProducts(): Product[]
getProductBySlug(slug: string): Product | undefined
getProductsByBrand(brandSlug: string): Product[]
getProductsByCategory(categorySlug: string): Product[]
getProductCount(): number
```

## Brand Distribution (Top 10)

| Brand | Product Count |
|-------|---------------|
| Exteta | 148 |
| Bentley Home | 136 |
| Dolce & Gabbana Casa | 113 |
| Trussardi Casa | 107 |
| Venicem | 100 |
| Versace Home | 94 |
| Visionnaire | 78 |
| SCIC Italia | 18 |
| Dywany | 15 |
| Valcucine | 8 |

## Category Distribution (Sample)

| Category | Product Count |
|----------|---------------|
| Fotele | 100 |
| Sofy | 95 |
| Komody | 45 |
| Stoliki kawowe | 45 |
| Krzesła | 28 |
| Łóżka | 25 |
| Pufy | 23 |
| Stoły | 23 |
| Stoliki boczne | 21 |
| Dywany | 15 |
