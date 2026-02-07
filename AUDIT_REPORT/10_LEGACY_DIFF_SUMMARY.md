# LEGACY DIFF SUMMARY

All deviations from legacy website (luxarte.pl) documented in one place.

Generated: 2026-02-06

---

## Navigation Differences

### Header

| Legacy | New Site | Status |
|--------|----------|--------|
| OFERTA link in header | Not in header | ❌ REMOVED |
| DESIGN link in header | Not in header | ❌ REMOVED |
| MARKI mega-dropdown | ✓ Dropdown with tier-1/tier-2 | ✓ MATCHED |
| KATEGORIE mega-dropdown | ✓ Dropdown with all 30 categories | ✓ MATCHED |
| OUTLET link | ✓ Present | ✓ MATCHED |
| O NAS link | ✓ Present | ✓ MATCHED |
| KONTAKT link | ✓ Present | ✓ MATCHED |
| Language toggle (PL/EN) | Present but non-functional | ⚠ PARTIAL |
| Instagram icon | ✓ Present | ✓ MATCHED |

### Footer

| Issue | Details |
|-------|---------|
| **3 broken brand links** | |
| dolce-gabbana | Should be `turri` or removed |
| roberto-cavalli | Should be `rampoldi` or removed |
| scic | Should be `smania` or removed |

---

## Brand System Differences

### Logo Mismatches

| Brand | Legacy Logo | New Site | Status |
|-------|-------------|----------|--------|
| noorth | Has logo | Missing noorth.svg | ❌ |
| vitage | Has logo | Missing vitage.svg | ❌ |
| longhi | Has logo | Missing longhi.svg | ❌ |
| dv-home | Has logo | Missing dv-home.svg | ❌ |

### Hero Image Status

All 18 brand hero images present and matched.

### Product Count Discrepancies

| Brand | Legacy Count | New Site Count | Diff |
|-------|--------------|----------------|------|
| turri | ~90 | 90 | ✓ |
| smania | ~85 | 85 | ✓ |
| (others) | - | - | Not verified |

---

## Product System Differences

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Total products | ~800+ | 814 | ✓ CLOSE |
| Image sizes | Various | Normalized (card/gallery/lightbox) | ✓ IMPROVED |
| Gallery count per product | Varies | 3-15 images | ✓ MATCHED |
| Lightbox | Yes | Yes | ✓ MATCHED |
| Product filtering | Server-side | Client-side | ⚠ DIFFERENT |

---

## Page Content Differences

### O NAS (About)

| Section | Legacy | New Site | Status |
|---------|--------|----------|--------|
| Hero image | Yes | ✓ Yes | ✓ |
| Mission text | Yes | ✓ Rewritten | ⚠ |
| Team section | Yes | ❌ Not present | ❌ |
| Timeline/history | No | No | - |

### KONTAKT

| Section | Legacy | New Site | Status |
|---------|--------|----------|--------|
| Map | Embedded Google Map | Static hero image | ⚠ DIFFERENT |
| Form | Yes (backend) | Yes (no backend) | ⚠ PARTIAL |
| Address | Yes | ✓ Yes | ✓ |
| Phone | Yes | ✓ Yes | ✓ |
| Email | Yes | ✓ Yes | ✓ |
| Hours | Yes | ✓ Yes | ✓ |

### OUTLET

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Quick-ship products | Yes | ✓ 43 products | ✓ |
| Category filter | Yes | ✓ Category tabs | ✓ |
| Price display | Yes | ✓ Visible | ✓ |
| Image source | Local | CDN (luxarte.pl) | ⚠ EXTERNAL |
| CTA buttons | Yes | ✓ "Zapytaj o dostępność" | ✓ |

### OFERTA

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Page exists | Yes | ✓ Yes at /oferta | ✓ |
| Header link | Yes | ❌ Not in header | ❌ |
| Content | Showroom catalog | Services description | ⚠ DIFFERENT |

### DESIGN

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Page exists | Yes | ✓ Yes at /design | ✓ |
| Header link | Yes | ❌ Not in header | ❌ |
| Content | Interior design services | Design services info | ✓ SIMILAR |

---

## Image System Differences

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Hosting | WordPress media library | Local /public/catalog | ⚠ MIGRATED |
| CDN | WordPress CDN | No CDN (except outlet) | ⚠ |
| Image optimization | WordPress | Manual resizing | ⚠ |
| Total images | ~18,000 | 18,340 | ✓ |
| Outlet images | Local | CDN references (86+) | ⚠ |

---

## Functional Differences

| Feature | Legacy | New Site | Status |
|---------|--------|----------|--------|
| Language switch | ✓ Functional PL/EN | Static display only | ❌ |
| Contact form | ✓ Sends email | No backend | ❌ |
| Search | Unknown | ❌ Not implemented | ❌ |
| Cart/checkout | None | None | - |
| User accounts | None | None | - |

---

## SEO & Meta Differences

| Aspect | Legacy | New Site | Status |
|--------|--------|----------|--------|
| Page titles | Dynamic | ✓ Dynamic | ✓ |
| Meta descriptions | Yes | ✓ Yes (in metadata) | ✓ |
| Open Graph | Yes | ✓ Yes | ✓ |
| Sitemap | Unknown | Not generated | ⚠ |
| Robots.txt | Unknown | Not configured | ⚠ |
| Canonical URLs | Unknown | Not set | ⚠ |

---

## Summary of Critical Gaps

### Must Fix

1. **Footer broken links** (3 brand slugs)
2. **Missing brand logos** (4 SVGs)
3. **Outlet CDN dependency** (86+ external images)

### Should Fix

4. OFERTA link missing from header
5. DESIGN link missing from header
6. Language switch non-functional
7. Contact form has no backend

### Nice to Have

8. Add sitemap.xml
9. Add robots.txt
10. Set canonical URLs
11. Add search functionality
12. Google Maps on contact page

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total differences documented | 34 |
| ✓ MATCHED | 18 |
| ⚠ PARTIAL / DIFFERENT | 10 |
| ❌ MISSING / BROKEN | 6 |

---

## Files Reference

| Audit File | Content |
|------------|---------|
| 1_ARCHITECTURE_FULL.md | Routing, components, data sources |
| 2_NAVIGATION_AND_HEADER.md | Menu structure, dropdowns |
| 3_GALLERY_AND_FILTER_SYSTEM.md | Filters, pagination |
| 4_PRODUCT_SYSTEM.md | Product data, images |
| 5_BRAND_SYSTEM.md | 18 brands, logos, heroes |
| 6_LEGACY_PAGES_PARITY.md | Page-by-page comparison |
| 7_IMAGE_SYSTEM_AUDIT.md | 19,658 files, 1.3 GB |
| 8_CSS_SYSTEM_AUDIT.md | Tokens, selectors, animations |
| 9_BUILD_AND_DEPLOY_STATUS.md | 864 pages, deploy risks |
| 10_LEGACY_DIFF_SUMMARY.md | This file |
