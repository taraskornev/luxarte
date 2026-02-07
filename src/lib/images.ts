/**
 * Images Data Layer
 * 
 * Handles local image path resolution.
 * Uses ONLY local paths - no CDN/remote URLs.
 * 
 * Media structure:
 * - /public/catalog/products/{slug}/ - Product images
 * - /public/brands/logos-webp/ - Brand logos
 * - /public/media/brands/ - Brand hero images
 * - /public/media/marki/{brand-slug}/ - Brand gallery images
 * 
 * NOTE: For server-side directory scanning (gallery/lightbox images),
 * use the functions from './images-server.ts' instead.
 */

const CATALOG_PATH = '/catalog/products';
const BRAND_LOGOS_PATH = '/brands/logos-webp';
const BRAND_HEROES_PATH = '/media/brands';
const FALLBACK_IMAGE = '/catalog/fallback.svg';

/**
 * Get the primary image for a product (card view)
 * Uses 01-card.webp pattern
 */
export function getProductImage(slug: string): string {
  return `${CATALOG_PATH}/${slug}/01-card.webp`;
}

/**
 * Get brand logo image
 */
export function getBrandLogo(brandSlug: string): string {
  const logoMap: Record<string, string> = {
    'versace-home': 'versace.webp',
    'bentley-home': 'bentley.webp',
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
  return `${BRAND_LOGOS_PATH}/${logoFile}`;
}

/**
 * Get brand hero image
 */
export function getBrandHero(brandSlug: string): string {
  return `${BRAND_HEROES_PATH}/${brandSlug}-hero.webp`;
}

/**
 * Get brand gallery images
 */
export function getBrandGalleryImages(brandSlug: string): string[] {
  return [`/media/marki/${brandSlug}/gallery-01.webp`];
}

/**
 * Get fallback image path
 */
export function getFallbackImage(): string {
  return FALLBACK_IMAGE;
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
