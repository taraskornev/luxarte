# LuxArte - Development Guide

## Prerequisites

- **Node.js** 18.17.0 or later
- **npm** 9.x or later

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global styles
│   ├── page.tsx           # Homepage (/)
│   └── brands/
│       ├── page.tsx       # Brands index (/brands)
│       └── [slug]/
│           └── page.tsx   # Brand detail (/brands/[slug])
├── components/
│   ├── layout/            # AppShell, Header, Footer
│   ├── homepage/          # Homepage sections
│   ├── brands/            # Brand-related components
│   └── ui/                # Shared UI components
├── config/
│   ├── images.ts          # Image assets configuration
│   └── seo.ts             # SEO metadata & schemas
├── data/
│   └── brands-data.ts     # Brand data source
└── styles/
    ├── design-system.css  # Design tokens & variables
    ├── layout.css         # Layout styles
    ├── homepage.css       # Homepage styles
    └── brands.css         # Brands pages styles
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Main landing page |
| `/brands` | `BrandsIndexPage` | All brands with filtering |
| `/brands/[slug]` | `BrandDetailPage` | Individual brand page |

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

## Vercel Deployment

The project is configured for automatic deployment on Vercel:

1. Push to `main` branch for production deployment
2. Push to feature branches for preview deployments

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## DEV RUN

```bash
npm install
npm run dev
npm run build
npm run start
```

## Image Optimization

All images are loaded from `www.luxarte.pl` CDN. The Next.js config includes:

- Remote image patterns for luxarte.pl
- AVIF and WebP format support
- Responsive image sizing

## Code Quality

- **TypeScript** - Strict mode enabled
- **ESLint** - Next.js recommended rules
- **PostCSS** - Autoprefixer for browser compatibility

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
