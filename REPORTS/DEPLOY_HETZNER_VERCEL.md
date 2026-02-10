# DEPLOYMENT REPORT — Hetzner + Vercel

**Project:** LuxArte Next.js  
**Date:** 2026-02-10  
**Architecture:** Hetzner (static media) + Vercel (Next.js app)

---

## Summary

Split deployment architecture implemented:
- **Hetzner** → hosts all static media (images, videos) at `https://media.luxarte.pl`
- **Vercel** → hosts Next.js app code, pulls media via absolute URLs from Hetzner

Total media: **12,018 files** / **705 MB**

---

## STEP 1 — Media Inventory

### Scan Results

| Type  | Files  | Size (MB) |
|-------|--------|-----------|
| .webp | 11,622 | 544.10    |
| .jpg  | 217    | 66.49     |
| .png  | 124    | 67.75     |
| .jpeg | 51     | 17.70     |
| .svg  | 2      | 0.00      |
| .mp4  | 2      | 9.04      |
| **TOTAL** | **12,018** | **705.07** |

### Directory Breakdown

| Directory    | Size (MB) |
|--------------|-----------|
| catalog/     | 481.85    |
| media/       | 214.78    |
| preview/     | 8.22      |
| brands/      | 0.23      |
| **TOTAL**    | **705.07** |

### Manifest

Generated: `REPORTS/MEDIA_MANIFEST.json`  
Contains: relative path, size, type for all 12,018 files.

---

## STEP 2 — Hetzner Server Setup

### Script Created

**`scripts/hetzner-setup.sh`** — Complete server provisioning script.

### Packages Installed (via script)

```
nginx
certbot + python3-certbot-nginx
rsync
fail2ban
ufw
```

### Firewall Configuration

```
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

### fail2ban Configuration

- SSH protection (5 retries, 1h ban)
- nginx HTTP auth protection
- nginx bot search protection

### Directory Structure Created

```
/var/www/luxarte-media/
├── media/       ← /public/media/**
├── catalog/     ← /public/catalog/**
├── brands/      ← /public/brands/**
├── preview/     ← /public/preview/**
└── videos/      ← video assets
```

### Nginx Configuration

**File:** `/etc/nginx/sites-available/luxarte-media`

```nginx
server {
    server_name media.luxarte.pl;
    root /var/www/luxarte-media;

    # CORS headers for Vercel frontend
    add_header Access-Control-Allow-Origin "*" always;

    # Gzip compression enabled
    gzip on;

    # Cache headers: 1 year, immutable
    location /media/   { expires 1y; Cache-Control "public, immutable"; }
    location /catalog/ { expires 1y; Cache-Control "public, immutable"; }
    location /brands/  { expires 1y; Cache-Control "public, immutable"; }
    location /preview/ { expires 1y; Cache-Control "public, immutable"; }
    location /videos/  { expires 1y; Cache-Control "public, immutable"; }

    # Health check endpoint
    location /health { return 200 'OK'; }
}
```

### SSL Status

Certbot configured for automatic HTTPS with Let's Encrypt.
Auto-redirect HTTP → HTTPS.

---

## STEP 3 — Media Upload

### Script Created

**`scripts/upload-media.sh`** — rsync-based upload with verification.

### Commands (to execute)

```bash
# From project root:
bash scripts/upload-media.sh media.luxarte.pl root

# This runs:
rsync -avz public/media/   root@media.luxarte.pl:/var/www/luxarte-media/media/
rsync -avz public/catalog/ root@media.luxarte.pl:/var/www/luxarte-media/catalog/
rsync -avz public/brands/  root@media.luxarte.pl:/var/www/luxarte-media/brands/
rsync -avz public/preview/ root@media.luxarte.pl:/var/www/luxarte-media/preview/
```

### Expected Result URLs

```
https://media.luxarte.pl/media/luxarte-logo.png
https://media.luxarte.pl/media/hero/hero-video.mp4
https://media.luxarte.pl/catalog/products/{slug}/01-card.webp
https://media.luxarte.pl/brands/logos-webp/versace.webp
https://media.luxarte.pl/media/brands/versace-home-hero.webp
```

---

## STEP 4 — Media Path Rewrite

### Architecture

Created centralized `mediaUrl()` function in `src/lib/buildMode.ts`:

```typescript
export const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL || '';

export function mediaUrl(localPath: string): string {
  if (localPath.startsWith('http://') || localPath.startsWith('https://') || localPath.startsWith('data:')) {
    return localPath;
  }
  const normalizedPath = localPath.startsWith('/') ? localPath : `/${localPath}`;
  return `${MEDIA_BASE_URL}${normalizedPath}`;
}
```

### Behavior

| Environment | NEXT_PUBLIC_MEDIA_BASE_URL | Result |
|-------------|---------------------------|--------|
| Development | *(empty)* | `/media/foo.webp` (local) |
| Production  | `https://media.luxarte.pl` | `https://media.luxarte.pl/media/foo.webp` |

### Files Rewritten (26 source files)

#### Core Utilities (6 files)
| File | Changes |
|------|---------|
| `src/lib/buildMode.ts` | Added `MEDIA_BASE_URL`, `mediaUrl()` function |
| `src/lib/images.ts` | Wrapped 5 return paths with `mediaUrl()` |
| `src/lib/images-server.ts` | Wrapped all `.map()` output paths with `mediaUrl()` |
| `src/lib/catalog-image-adapter.ts` | Wrapped `getTieredImagePath()` and fallback with `mediaUrl()` |
| `src/lib/preview-images.ts` | Updated `resolveImagePath()` to chain through `mediaUrl()` |
| `src/config/images.ts` | Wrapped 34 hardcoded paths with `mediaUrl()` |

#### Components (6 files)
| File | Changes |
|------|---------|
| `src/components/hero/HomeHeroVideo.tsx` | Video poster + source (2 paths) |
| `src/components/hero/HomeHeroVideoEN.tsx` | Video poster + source (2 paths) |
| `src/components/layout/Header.tsx` | Logo src (1 path) |
| `src/components/layout/Footer.tsx` | Logo src (1 path) |
| `src/components/home/HomeTripleCTA.tsx` | 3 CTA images |
| `src/components/catalog/ProductCard.tsx` | Fallback path (1 path) |

#### Pages (12 files)
| File | Changes |
|------|---------|
| `src/app/bentley-home-cinema/page.tsx` | 5 media paths |
| `src/app/bentley-home-cinema/rezerwacja/page.tsx` | 3 media paths |
| `src/app/design/page.tsx` | 5 media paths |
| `src/app/kontakt/page.tsx` | 2 media paths |
| `src/app/o-nas/page.tsx` | 1 media path |
| `src/app/oferta/page.tsx` | 2 media paths |
| `src/app/en/about/page.tsx` | 1 media path |
| `src/app/en/bentley-home-cinema/page.tsx` | 5 media paths |
| `src/app/en/bentley-home-cinema/reservation/page.tsx` | 3 media paths |
| `src/app/en/contact/page.tsx` | 2 media paths |
| `src/app/en/design/page.tsx` | 5 media paths |
| `src/app/en/services/page.tsx` | 2 media paths |

#### Data Files (2 files)
| File | Changes |
|------|---------|
| `src/canonical/editorialBrandContent.ts` | 15 media paths |
| `src/canonical/editorialBrands.ts` | 30 media paths |
| `src/data/articles.ts` | 59 media paths |
| `src/config/navigation.ts` | 1 media path (logo only, routes untouched) |

**Total: ~150+ individual media paths wrapped with `mediaUrl()`**

---

## STEP 5 — Next.js Configuration

### `next.config.js` Updated

Added `remotePatterns` to allow `next/image` optimization for Hetzner-hosted images:

```javascript
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  remotePatterns: [
    { protocol: 'https', hostname: 'media.luxarte.pl', pathname: '/media/**' },
    { protocol: 'https', hostname: 'media.luxarte.pl', pathname: '/catalog/**' },
    { protocol: 'https', hostname: 'media.luxarte.pl', pathname: '/brands/**' },
    { protocol: 'https', hostname: 'media.luxarte.pl', pathname: '/preview/**' },
    { protocol: 'https', hostname: 'media.luxarte.pl', pathname: '/videos/**' },
  ],
},
```

---

## STEP 6 — Media Backup (Safe Mode)

Media directories moved to backup:

```
public/media/    → public/_media_backup/
public/catalog/  → public/_catalog_backup/
public/brands/   → public/_brands_backup/
public/preview/  → public/_preview_backup/
```

**NOT deleted.** Will be removed after full verification.

---

## STEP 7 — Build Test

### Result: ✅ SUCCESS

```
Build output:
- All pages compiled successfully
- No TypeScript errors
- No build warnings related to media paths
- 810+ product pages generated
- 15 brand pages generated
- 10 article pages generated
- All quick-ship pages generated
```

### Build Statistics

| Route | Count |
|-------|-------|
| Product pages | 813+ |
| Brand pages | 15 |
| Article pages | 10 |
| Quick-ship pages | 9 |
| Static pages | 20+ |

---

## STEP 8 — Vercel Deployment

### Scripts Created

- `scripts/deploy-vercel.sh` (Linux/Mac)
- `scripts/deploy-vercel.ps1` (Windows)

### Environment Variable

```
NEXT_PUBLIC_MEDIA_BASE_URL=https://media.luxarte.pl
```

Must be set in Vercel project settings (Production environment).

### Deploy Commands

```bash
# Set env var
vercel env add NEXT_PUBLIC_MEDIA_BASE_URL production
# Enter: https://media.luxarte.pl

# Deploy
vercel --prod
```

---

## STEP 9 — Verification Checklist

| Check | URL Pattern | Status |
|-------|-------------|--------|
| Homepage hero video | `/media/hero/hero-video.mp4` | ⏳ Pending deploy |
| Homepage hero poster | `/media/brands/versace-home-hero.webp` | ⏳ Pending deploy |
| Logo (header) | `/media/luxarte-logo.png` | ⏳ Pending deploy |
| Logo (footer) | `/media/luxarte-logo.png` | ⏳ Pending deploy |
| Brand logos (home) | `/brands/logos-webp/*.webp` | ⏳ Pending deploy |
| Brand hero images | `/media/brands/*-hero.webp` | ⏳ Pending deploy |
| Brand gallery images | `/media/marki/*/gallery-*-gallery.webp` | ⏳ Pending deploy |
| Product card images | `/catalog/products/*/01-card.webp` | ⏳ Pending deploy |
| Product gallery images | `/catalog/products/*/*-gallery.webp` | ⏳ Pending deploy |
| Product lightbox images | `/catalog/products/*/*-lightbox.webp` | ⏳ Pending deploy |
| Design page images | `/media/design/*.webp` | ⏳ Pending deploy |
| Article images | `/media/pages/*.webp` | ⏳ Pending deploy |
| Bentley cinema video/images | `/media/pages/bentley-*.webp` | ⏳ Pending deploy |
| Contact page images | `/media/oferta/*.webp` | ⏳ Pending deploy |
| Showroom image | `/media/oferta/warszawa-adres-hero.webp` | ⏳ Pending deploy |

---

## STEP 10 — Cleanup (After Verification)

After all checks pass:

```powershell
# Remove backup folders
Remove-Item -Path "public/_media_backup" -Recurse -Force
Remove-Item -Path "public/_catalog_backup" -Recurse -Force
Remove-Item -Path "public/_brands_backup" -Recurse -Force
Remove-Item -Path "public/_preview_backup" -Recurse -Force

# Commit changes
git add -A
git commit -m "feat: split media to Hetzner, deploy app to Vercel"
git push
```

---

## Files Created

| File | Purpose |
|------|---------|
| `scripts/hetzner-setup.sh` | Server provisioning (nginx, certbot, fail2ban) |
| `scripts/upload-media.sh` | rsync media upload to Hetzner |
| `scripts/deploy-vercel.sh` | Vercel production deployment (bash) |
| `scripts/deploy-vercel.ps1` | Vercel production deployment (PowerShell) |
| `.env.local` | Local dev env (empty MEDIA_BASE_URL) |
| `.env.production` | Production env (Hetzner URL) |
| `REPORTS/MEDIA_MANIFEST.json` | Full media inventory (12,018 files) |
| `REPORTS/DEPLOY_HETZNER_VERCEL.md` | This report |

---

## Execution Order

To complete the deployment:

```
1. ✅ Media scanned and manifested
2. ✅ Code paths rewritten to use mediaUrl()
3. ✅ next.config.js updated with remotePatterns
4. ✅ Build test passed
5. ⏳ Provision Hetzner server:
      ssh root@<IP> 'bash -s' < scripts/hetzner-setup.sh
6. ⏳ Point DNS: media.luxarte.pl → Hetzner IP
7. ⏳ Upload media:
      bash scripts/upload-media.sh media.luxarte.pl root
8. ⏳ Restore media for local dev (rename backups back):
      Rename-Item public/_media_backup media
      Rename-Item public/_catalog_backup catalog
      Rename-Item public/_brands_backup brands
      Rename-Item public/_preview_backup preview
9. ⏳ Deploy to Vercel:
      vercel env add NEXT_PUBLIC_MEDIA_BASE_URL production
      vercel --prod
10. ⏳ Verify all checklist URLs load from Hetzner
11. ⏳ After verification: delete backup folders, commit, push
```

---

## Architecture Diagram

```
┌─────────────────────┐     ┌──────────────────────────┐
│   Browser/Client    │     │     Vercel (CDN Edge)     │
│                     │     │                           │
│  GET luxarte.pl/*   │────>│  Next.js App (SSR/SSG)   │
│                     │     │  - Routes                 │
│                     │     │  - Components             │
│                     │     │  - API Routes             │
│  GET media.*/*.webp │     │                           │
│         │           │     │  NEXT_PUBLIC_MEDIA_BASE_  │
│         │           │     │  URL=https://media.       │
│         │           │     │  luxarte.pl               │
└─────────┼───────────┘     └──────────────────────────┘
          │
          │ HTTPS (1yr cache, immutable)
          v
┌──────────────────────────┐
│  Hetzner (media.luxarte) │
│                          │
│  nginx + certbot         │
│  /var/www/luxarte-media/ │
│  ├── media/              │
│  ├── catalog/            │
│  ├── brands/             │
│  ├── preview/            │
│  └── videos/             │
│                          │
│  12,018 files / 705 MB   │
│  CORS: * (all origins)   │
│  Cache: 1yr immutable    │
│  Gzip: enabled           │
└──────────────────────────┘
```
