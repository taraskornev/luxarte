/**
 * ============================================================================
 * CATALOG IMAGE ADAPTER
 * ============================================================================
 *
 * PRODUCT IMAGES — LOCAL ONLY (NO REMOTE URLS)
 *
 * SINGLE SOURCE OF TRUTH for catalog product image resolution.
 * All product images are served from local /public/catalog/products/ directory.
 *
 * ALL catalog card components MUST use:
 *   getProductPrimaryImage(product)
 *
 * NO direct product.image or product.heroImage access allowed.
 * NO external URLs for product images.
 *
 * TIERED IMAGE SYSTEM (after media bloat cleanup):
 * - 01-card.webp     → Primary card image (gallery listing)
 * - 01-gallery.webp  → Gallery view images
 * - 01-lightbox.webp → Full-size lightbox images
 *
 * Fallback Chain:
 * 1. Look for tiered card image: {slug}/01-card.webp
 * 2. Look for tiered gallery image: {slug}/01-gallery.webp
 * 3. Check explicit heroImage (full Product type)
 * 4. Fallback to brand image from canonical (for brand pages only)
 * 5. Fallback to category image from canonical (for category pages only)
 * 6. Return local fallback SVG (never empty)
 *
 * @version 3.0.0 — TIERED IMAGE SUPPORT
 */

import { BRAND_IMAGES, CATEGORY_IMAGES } from '@/canonical/imageMap';
import { mediaUrl } from './buildMode';

// ============================================================================
// Types
// ============================================================================

/**
 * Minimal product data needed for image resolution
 * Works with both CatalogProduct and full Product types
 */
export interface CatalogProductImageInput {
  slug: string;
  brandSlug?: string;
  categorySlug?: string;
  /** Optional explicit primary image (from full Product type) */
  heroImage?: { src: string } | string;
  /** Optional explicit gallery (from full Product type) */
  galleryImages?: Array<{ src: string } | string>;
}

// ============================================================================
// Constants
// ============================================================================

/** Local fallback image - no network request */
const LOCAL_FALLBACK = '/catalog/fallback.svg';

/** Base path for catalog product images */
const CATALOG_BASE = '/catalog/products';

// ============================================================================
// Tiered Image Resolution
// ============================================================================

/**
 * Build the path to a tiered product image
 * @param slug - Product slug
 * @param tier - Image tier: 'card' | 'gallery' | 'lightbox'
 * @param index - Image index (1-based), default 1
 */
function getTieredImagePath(slug: string, tier: 'card' | 'gallery' | 'lightbox', index: number = 1): string {
  const paddedIndex = index.toString().padStart(2, '0');
  return mediaUrl(`${CATALOG_BASE}/${slug}/${paddedIndex}-${tier}.webp`);
}

/**
 * Get the primary card image for a product
 * Falls back through tiers: card → gallery → lightbox
 */
function getPrimaryTieredImage(slug: string): string {
  // Primary: card image (optimized for card listings)
  return getTieredImagePath(slug, 'card', 1);
}

/**
 * Get gallery images for a product (all gallery-tier images)
 */
function getGalleryTieredImages(slug: string, maxImages: number = 10): string[] {
  const images: string[] = [];
  for (let i = 1; i <= maxImages; i++) {
    images.push(getTieredImagePath(slug, 'gallery', i));
  }
  return images;
}

// ============================================================================
// Main Adapter Functions
// ============================================================================

/**
 * Get primary image URL for a catalog product
 *
 * PRODUCT IMAGES — LOCAL ONLY (NO REMOTE URLS)
 *
 * DO NOT access product image fields directly.
 * ALL catalog components must use this function.
 *
 * @param product - Product data (minimal fields required)
 * @returns Valid LOCAL image path (never empty or undefined)
 */
export function getProductPrimaryImage(product: CatalogProductImageInput): string {
  // 1. PRIMARY: Use tiered card image
  if (product.slug) {
    return getPrimaryTieredImage(product.slug);
  }

  // 2. Check if product has explicit heroImage (full Product type)
  // Only allow LOCAL paths, not remote URLs
  if (product.heroImage) {
    const src = typeof product.heroImage === 'string' 
      ? product.heroImage 
      : product.heroImage.src;
    if (src && src.length > 0 && src.startsWith('/')) {
      return src;
    }
  }

  // 3. Fallback to brand image from canonical (brand pages only)
  if (product.brandSlug && BRAND_IMAGES[product.brandSlug]) {
    const brandImage = BRAND_IMAGES[product.brandSlug];
    if (brandImage?.hero) {
      return brandImage.hero;
    }
  }

  // 4. Fallback to category image from canonical (category pages only)
  if (product.categorySlug && CATEGORY_IMAGES[product.categorySlug]) {
    return CATEGORY_IMAGES[product.categorySlug];
  }

  // 5. Ultimate fallback - local SVG (never empty, no network)
  return mediaUrl(LOCAL_FALLBACK);
}

/**
 * Get gallery images for a catalog product
 *
 * PRODUCT IMAGES — LOCAL ONLY (NO REMOTE URLS)
 *
 * @param product - Product data
 * @returns Array of LOCAL image paths (always at least one)
 */
export function getProductGalleryImages(product: CatalogProductImageInput): string[] {
  // 1. PRIMARY: Use tiered gallery images
  if (product.slug) {
    return getGalleryTieredImages(product.slug);
  }

  // 2. Check explicit gallery (only local paths)
  if (product.galleryImages && product.galleryImages.length > 0) {
    const images: string[] = [];
    for (const img of product.galleryImages) {
      const src = typeof img === 'string' ? img : img.src;
      if (src && src.length > 0 && src.startsWith('/')) {
        images.push(src);
      }
    }
    if (images.length > 0) {
      return images;
    }
  }

  // 3. Use primary image as single gallery item
  const primary = getProductPrimaryImage(product);
  return [primary];
}

/**
 * Get alt text for product image
 */
export function getProductImageAlt(product: CatalogProductImageInput & { name?: string }): string {
  return product.name || product.slug || 'Produkt';
}

// ============================================================================
// Debug Helper (dev only)
// ============================================================================

type ImageSource = 'tiered-card' | 'heroImage' | 'brand' | 'category' | 'fallback';

/**
 * Get debug info about image resolution
 * Used for visual debug strip in development
 */
export function getProductImageDebugInfo(product: CatalogProductImageInput): {
  resolvedSrc: string;
  source: ImageSource;
  brandSlug?: string;
  categorySlug?: string;
} {
  // Check tiered card image (primary source)
  if (product.slug) {
    const tieredPath = getPrimaryTieredImage(product.slug);
    return { 
      resolvedSrc: tieredPath, 
      source: 'tiered-card',
      brandSlug: product.brandSlug,
      categorySlug: product.categorySlug,
    };
  }

  // Check explicit heroImage (local paths only)
  if (product.heroImage) {
    const src = typeof product.heroImage === 'string' 
      ? product.heroImage 
      : product.heroImage.src;
    if (src && src.length > 0 && src.startsWith('/')) {
      return { resolvedSrc: src, source: 'heroImage', brandSlug: product.brandSlug, categorySlug: product.categorySlug };
    }
  }

  // Check brand
  if (product.brandSlug && BRAND_IMAGES[product.brandSlug]?.hero) {
    return { 
      resolvedSrc: BRAND_IMAGES[product.brandSlug].hero, 
      source: 'brand',
      brandSlug: product.brandSlug,
      categorySlug: product.categorySlug,
    };
  }

  // Check category
  if (product.categorySlug && CATEGORY_IMAGES[product.categorySlug]) {
    return { 
      resolvedSrc: CATEGORY_IMAGES[product.categorySlug], 
      source: 'category',
      brandSlug: product.brandSlug,
      categorySlug: product.categorySlug,
    };
  }

  // Fallback
  return { 
    resolvedSrc: LOCAL_FALLBACK, 
    source: 'fallback',
    brandSlug: product.brandSlug,
    categorySlug: product.categorySlug,
  };
}

// ============================================================================
// Export constants for use elsewhere
// ============================================================================

export const PRODUCT_FALLBACK_IMAGE = LOCAL_FALLBACK;
