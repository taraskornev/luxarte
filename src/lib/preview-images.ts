/**
 * Preview Image Resolver
 * 
 * Wraps standard image functions with preview build mode support.
 * In preview mode:
 * - Uses /preview/ prefix for all images
 * - Limits gallery arrays to 1 image
 * - Uses card-size images only
 */

import { IS_PREVIEW_BUILD, previewLimit, mediaUrl } from './buildMode';

const PREVIEW_PREFIX = '/preview';

// ============================================================================
// Path Prefixing
// ============================================================================

/**
 * Apply preview prefix to image path when in preview mode,
 * then resolve through media URL
 */
export function resolveImagePath(path: string): string {
  // Skip external URLs
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Skip data URIs
  if (path.startsWith('data:')) {
    return path;
  }
  
  let resolvedPath = path;
  
  if (IS_PREVIEW_BUILD) {
    // Add preview prefix if not already present
    if (!resolvedPath.startsWith(PREVIEW_PREFIX)) {
      // Ensure path starts with /
      const normalizedPath = resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`;
      resolvedPath = `${PREVIEW_PREFIX}${normalizedPath}`;
    }
  }
  
  return mediaUrl(resolvedPath);
}

// ============================================================================
// Product Images
// ============================================================================

const CATALOG_PATH = '/catalog/products';

/**
 * Get product card image - always uses 01-card.webp
 */
export function getPreviewProductImage(slug: string): string {
  const path = `${CATALOG_PATH}/${slug}/01-card.webp`;
  return resolveImagePath(path);
}

/**
 * Get product gallery images
 * In preview mode: returns only first image
 */
export function getPreviewProductGalleryImages(slug: string, fullPaths: string[]): string[] {
  const limited = previewLimit(fullPaths, 1);
  return limited.map(p => resolveImagePath(p));
}

/**
 * Get product lightbox images
 * In preview mode: returns only first image (card size)
 */
export function getPreviewProductLightboxImages(slug: string, fullPaths: string[]): string[] {
  if (IS_PREVIEW_BUILD) {
    // In preview, just use the card image
    return [getPreviewProductImage(slug)];
  }
  return fullPaths.map(p => resolveImagePath(p));
}

// ============================================================================
// Brand Images
// ============================================================================

const BRAND_LOGOS_PATH = '/brands/logos-webp';
const BRAND_HEROES_PATH = '/media/brands';

/**
 * Get brand logo - always included in preview
 */
export function getPreviewBrandLogo(brandSlug: string): string {
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
  if (logoFile.startsWith('/')) return logoFile;
  const path = `${BRAND_LOGOS_PATH}/${logoFile}`;
  return resolveImagePath(path);
}

/**
 * Get brand hero image
 */
export function getPreviewBrandHero(brandSlug: string): string {
  const path = `${BRAND_HEROES_PATH}/${brandSlug}-hero.webp`;
  return resolveImagePath(path);
}

/**
 * Get brand gallery images
 * In preview mode: returns empty array (no galleries)
 */
export function getPreviewBrandGalleryImages(brandSlug: string, fullPaths: string[]): string[] {
  if (IS_PREVIEW_BUILD) {
    return []; // No brand galleries in preview
  }
  return fullPaths.map(p => resolveImagePath(p));
}

// ============================================================================
// Page Images
// ============================================================================

/**
 * Get page hero image
 */
export function getPreviewPageHero(pagePath: string): string {
  return resolveImagePath(pagePath);
}

/**
 * Get page gallery images
 * In preview mode: returns only hero
 */
export function getPreviewPageGalleryImages(heroPath: string, allPaths: string[]): string[] {
  if (IS_PREVIEW_BUILD) {
    return heroPath ? [resolveImagePath(heroPath)] : [];
  }
  return allPaths.map(p => resolveImagePath(p));
}

// ============================================================================
// Fallback
// ============================================================================

const FALLBACK_IMAGE = '/catalog/fallback.svg';

export function getPreviewFallback(): string {
  return resolveImagePath(FALLBACK_IMAGE);
}
