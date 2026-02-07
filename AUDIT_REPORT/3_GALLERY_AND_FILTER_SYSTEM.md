# GALLERY AND FILTER SYSTEM AUDIT

Generated: 2026-02-06

## Gallery Route(s)

| Route | Type | Purpose |
|-------|------|---------|
| `/gallery` | Dynamic (SSR) | Main product catalog |

## Filter Dimensions Implemented

| Dimension | Source | Count | Type |
|-----------|--------|-------|------|
| Brand | `LEGACY_BRANDS` (canonical) | 18 | Multi-select |
| Category | `LEGACY_CATEGORIES` (canonical) | 30 | Multi-select |

## URL Parameter Behavior

| URL Pattern | Behavior |
|-------------|----------|
| `/gallery` | Show all products |
| `/gallery?brand=versace-home` | Single brand filter |
| `/gallery?brand=versace-home,bentley-home` | Multi-brand (OR logic) |
| `/gallery?category=sofy` | Single category filter |
| `/gallery?category=sofy,fotele` | Multi-category (OR logic) |
| `/gallery?brand=X&category=Y` | Combined (AND between groups) |
| `/gallery?mode=brand` | No special handling (just param) |
| `/gallery?mode=category` | No special handling (just param) |

URL sync method: `window.history.replaceState()` (client-side)

## Preset Filter Support

| Feature | Status |
|---------|--------|
| Preset from URL | ✓ Implemented |
| Deep-link sharing | ✓ Works |
| Back/forward navigation | ✓ Handled via popstate listener |
| Initial state from server | ✓ Parsed in server component |

## Filter → Product Matching Logic

```javascript
// OR within same group
if (selectedBrands.length > 0) {
  result = result.filter((p) => selectedBrands.includes(p.brandSlug));
}

// AND with category filter (if both active)
if (selectedCategories.length > 0) {
  result = result.filter((p) => selectedCategories.includes(p.categorySlug));
}
```

**Logic Summary:**
- Multiple brands selected → OR (any brand matches)
- Multiple categories selected → OR (any category matches)
- Brand AND Category → AND (must match both)

## Scroll / Pagination Behavior

| Feature | Implementation |
|---------|----------------|
| Items per page | 24 |
| Pagination type | Client-side (sliced array) |
| Page change | `window.scrollTo({ top: 0, behavior: 'smooth' })` |
| Reset on filter change | ✓ Resets to page 1 |
| Infinite scroll | ✗ Not implemented |
| Load more | ✗ Not implemented |

## Card Component Used

**Component:** `ProductCard` (`src/components/catalog/ProductCard.tsx`)

| Property | Value |
|----------|-------|
| Link target | `/products/{slug}` |
| Image source | `getProductImage(slug)` → `/catalog/products/{slug}/01-card.webp` |
| Image dimensions | 400x400 |
| Image loading | lazy (eager if priority=true) |
| Fallback | `/catalog/fallback.svg` |
| Error handling | ✓ Falls back to SVG |

**Card structure:**
```html
<Link class="gallery-card">
  <div class="gallery-card-image">
    <Image />
  </div>
  <span class="gallery-card-brand">{brandName}</span>
  <h3 class="gallery-card-title">{name}</h3>
</Link>
```

## Image Source Path Pattern

```
Card images: /catalog/products/{slug}/01-card.webp
Gallery images: /catalog/products/{slug}/{NN}-gallery.webp
Lightbox images: /catalog/products/{slug}/{NN}-lightbox.webp
```

## Product Counts

| Metric | Count |
|--------|-------|
| Total products in catalog | 814 |
| Total rendered (unfiltered) | 814 |
| Per page maximum | 24 |
| Total pages (unfiltered) | 34 |

## Sidebar Filter UI

| Element | Behavior |
|---------|----------|
| Brand section | Checkbox list, alphabetically sorted within tier |
| Category section | Checkbox list, grouped by navGroup |
| Counts shown | Yes (dynamic based on cross-filter) |
| Clear all button | ✓ Present |
| Mobile filter | Drawer from left (85vw width, max 360px) |

## Filter State Management

```
State:
- selectedBrands: string[]
- selectedCategories: string[]
- currentPage: number
- mobileFilterOpen: boolean

URL Sync: replaceState on state change
Browser History: popstate event listener
```

## Known Issues

1. `?mode=brand` and `?mode=category` params have no special handling
2. Filter counts recalculate on every filter change (performance OK for 814 products)
3. No search/text filter implemented
4. No sorting options implemented
5. No price filter (no price data)
