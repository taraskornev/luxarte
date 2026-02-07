# BUILD AND DEPLOY STATUS

Generated: 2026-02-06

## Build Status

| Metric | Value |
|--------|-------|
| Build passes | ✓ YES |
| Exit code | 0 |
| Warnings | 0 critical |
| Errors | 0 |
| Static analysis | ✓ Passed |

## Static Page Count Breakdown

| Category | Count |
|----------|-------|
| **Static pages (SSG)** | **864** |
| Content pages | 15 |
| Product pages | 814 |
| Brand pages | 18 |
| Category pages | 30 |
| Outlet pages | ~20 |
| Article pages | ~10 |
| **Dynamic SSR** | **1** |
| Gallery | /gallery (client-side filters) |

**Total routes: 865**

## Build Output Structure

```
.next/
├── static/
│   ├── chunks/           # JS bundles
│   ├── css/              # CSS bundles
│   └── media/            # Fonts
├── standalone/           # Server files
└── server/
    ├── app/              # RSC payloads
    └── pages/            # Rendered HTML
```

## Bundle Analysis

| Bundle Type | Approximate Size |
|-------------|------------------|
| First Load JS | ~100-120 KB |
| Shared chunks | ~200 KB |
| Per-page JS | 5-30 KB |
| CSS total | ~90 KB |
| Fonts (Jost) | ~60 KB |

**Note:** Actual bundle sizes vary by route.

## Public Folder Size

| Folder | Files | Size |
|--------|-------|------|
| `/public` **TOTAL** | **19,658** | **1,373.62 MB** |
| `/public/catalog` | 18,340 | 1,169.51 MB |
| `/public/media` | 1,269 | 203.88 MB |
| `/public/brands` | 29 | 0.23 MB |

### Breakdown by image type

| Type | Count | Estimated Size |
|------|-------|----------------|
| Product card images | 814 | ~50 MB |
| Product gallery images | 9,170 | ~550 MB |
| Product lightbox images | 8,356 | ~550 MB |
| Brand heroes | 18 | ~10 MB |
| Brand logos | 29 | ~0.2 MB |
| Page media | 48 | ~3 MB |
| Marki backgrounds | 1,120 | ~200 MB |

## Vercel Deployment Considerations

| Factor | Status | Notes |
|--------|--------|-------|
| Build time | ~3-5 min | 864 pages to generate |
| Function size | ✓ OK | Static export, minimal functions |
| Image optimization | ⚠ WARNING | 1.3 GB public folder |
| Edge functions | Not used | |
| ISR | Not configured | All static |
| API routes | None | Static site |

## Deployment Risks

### High Priority

| Risk | Impact | Mitigation |
|------|--------|------------|
| Public folder size (1.3 GB) | Slow deploy, bandwidth costs | Move to CDN or external image service |
| No ISR | Rebuild for any content change | Consider ISR for product pages |
| All images local | Vercel bandwidth charges | Use vercel/og or external CDN |

### Medium Priority

| Risk | Impact | Mitigation |
|------|--------|------------|
| No caching headers | Suboptimal performance | Add next.config.js headers |
| No image optimization | Large payloads | Enable next/image optimization |
| Large CSS file | Render blocking | Split or purge unused |

### Low Priority

| Risk | Impact | Mitigation |
|------|--------|------------|
| No dark mode | UX preference | Add if needed |
| No i18n SSG | Single language | Add if multi-lang needed |

## Build Command

```bash
npm run build
# Equivalent to: next build
```

## Environment Variables Required

| Variable | Purpose | Production Status |
|----------|---------|-------------------|
| None | Static site | N/A |

**No environment variables required for static build.**

## Post-Build Checklist

| Check | Status |
|-------|--------|
| All pages render | ✓ 864/864 |
| No build errors | ✓ |
| No TypeScript errors | ✓ |
| No ESLint errors | ✓ |
| Images accessible | ✓ |
| Links valid | ⚠ 3 footer links broken |
| Fonts load | ✓ |
| CSS applied | ✓ |

## Recommended Pre-Deploy Actions

1. **Fix 3 broken footer brand links:**
   - dolce-gabbana → turri
   - roberto-cavalli → rampoldi
   - scic → smania

2. **Verify outlet CDN images resolve:**
   - 86+ images use `luxarte.pl/wp-content` URLs
   - Ensure old domain stays active or migrate images

3. **Add missing brand logos:**
   - noorth.svg
   - vitage.svg
   - longhi.svg
   - dv-home.svg

4. **Consider image CDN migration:**
   - 1.3 GB public folder will incur bandwidth costs
   - Options: Cloudinary, imgix, Vercel Image Optimization
