/**
 * Images Data Layer
 * 
 * Handles image path resolution.
 * Uses MEDIA_BASE_URL for external hosting (Hetzner).
 * Falls back to local paths if MEDIA_BASE_URL is not set.
 * 
 * Media structure:
 * - /catalog/products/{slug}/ - Product images
 * - /brands/logos-webp/ - Brand logos
 * - /media/brands/ - Brand hero images
 * - /media/marki/{brand-slug}/ - Brand gallery images
 * 
 * In PREVIEW BUILD mode:
 * - Uses /preview/ prefix for all paths
 * 
 * NOTE: For server-side directory scanning (gallery/lightbox images),
 * use the functions from './images-server.ts' instead.
 */

import { IS_PREVIEW_BUILD, mediaUrl } from './buildMode';

const PREFIX = IS_PREVIEW_BUILD ? '/preview' : '';
const CATALOG_PATH = `${PREFIX}/catalog/products`;
const BRAND_LOGOS_PATH = `${PREFIX}/brands/logos-webp`;
const BRAND_HEROES_PATH = `${PREFIX}/media/brands`;
const FALLBACK_IMAGE = `${PREFIX}/catalog/fallback.svg`;

/**
 * Get the primary image for a product (card view)
 * Uses 01-card.webp pattern
 */
export function getProductImage(slug: string): string {
  return mediaUrl(`${CATALOG_PATH}/${slug}/01-card.webp`);
}

/**
 * Get brand logo image
 */
export function getBrandLogo(brandSlug: string): string {
  const logoMap: Record<string, string> = {
    'versace-home': 'versace.webp',
    'bentley-home': '/logos/bentley.webp',
    'dolce-gabbana-casa': 'dolce-gabbana.webp',
    'trussardi-casa': 'trussardi.webp',
    'visionnaire': 'visionnaire.webp',
    'exteta': 'exteta.webp',
    'venicem': 'venicem.webp',
    'valcucine': 'valcucine.webp',
    'scic-italia': 'scic-italia.webp',
    'bugatti-home': 'bugatti.webp',
    'roberto-cavalli-home-interiors': 'roberto-cavalli.webp',
    'gaggenau': 'gaggenau.webp',
    'vanory': 'vanroy.webp',
    'flos': 'flos.webp',
    'misuraemme': 'misuraemme.webp',
  };

  const logoFile = logoMap[brandSlug] || `${brandSlug}.webp`;
  // Absolute paths (starting with /) are served directly from Vercel public/
  if (logoFile.startsWith('/')) return logoFile;
  return mediaUrl(`${BRAND_LOGOS_PATH}/${logoFile}`);
}

/**
 * Get brand hero image
 */
export function getBrandHero(brandSlug: string): string {
  // Map slugs to actual hero image filenames (handling mismatches and non-webp files)
  const heroMap: Record<string, string> = {
    'bugatti-home': 'bugatti-home-hero.jpg',
    'dolce-gabbana-casa': 'dolce-gabbana-casa-hero.png',
    'visionnaire': 'visionnaire-hero.jpg',
    'roberto-cavalli-home-interiors': 'roberto-cavalli-hero.png',
    'misuraemme': 'misura-emme-hero.jpeg',
    'scic-italia': 'scic-hero.webp',
    'venicem': 'venicem-hero.jpg',
    'vanory': 'vanory-hero.jpg',
    'flos': 'flos-hero.jpg',
  };

  const heroFile = heroMap[brandSlug] || `${brandSlug}-hero.webp`;
  return mediaUrl(`${BRAND_HEROES_PATH}/${heroFile}`);
}

/**
 * Get brand gallery images
 * In PREVIEW mode: returns empty array
 */
export function getBrandGalleryImages(brandSlug: string): string[] {
  if (IS_PREVIEW_BUILD) return [];
  return [mediaUrl(`/media/marki/${brandSlug}/gallery-01.webp`)];
}

/**
 * Get fallback image path
 */
export function getFallbackImage(): string {
  return mediaUrl(FALLBACK_IMAGE);
}

/**
 * DEV ONLY: Warn if image path contains /original/ or ends with .jpg/.jpeg
 * Call this in components to detect incorrect image tier usage
 */
export function warnIfBadImagePath(path: string, context: string): void {
  if (process.env.NODE_ENV !== 'development') return;
  
  const issues: string[] = [];
  
  if (path.includes('/original/')) {
    issues.push('uses /original/ path (should use tiered)');
  }
  if (path.match(/\.(jpg|jpeg)$/i)) {
    issues.push('uses .jpg/.jpeg (should use .webp)');
  }
  if (path.includes('-gallery.webp') && context === 'card') {
    issues.push('uses gallery tier for card (should use -card.webp)');
  }
  if (path.includes('-lightbox.webp') && context !== 'lightbox') {
    issues.push('uses lightbox tier outside lightbox');
  }
  
  if (issues.length > 0) {
    console.warn(`[Image Tier Warning] ${context}: ${path}\n  → ${issues.join(', ')}`);
  }
}
