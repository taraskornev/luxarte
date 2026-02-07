/**
 * ============================================================================
 * IMAGE RESOLVER - LUXARTE
 * ============================================================================
 *
 * Centralized image URL resolution for all site assets.
 * Single source of truth for constructing and resolving image URLs.
 *
 * Features:
 * - Consistent CDN base URL
 * - Fallback images for missing assets
 * - Type-safe resolution functions
 * - Usage-driven derivative resolution (CARD, HERO, GALLERY, LIGHTBOX)
 * - No fragile suffix guessing
 *
 * @version 2.0.0 - Usage-driven derivatives
 */

// ============================================================================
// Types
// ============================================================================

/**
 * Image usage types - determines which derivative to serve
 */
export type ImageUsage = 'card' | 'hero' | 'gallery' | 'lightbox';

/**
 * Sizes attribute presets per usage type
 */
export const SIZES_PRESETS: Record<ImageUsage, string> = {
  card: '(max-width: 768px) 50vw, 33vw',
  hero: '100vw',
  gallery: '(max-width: 768px) 100vw, 50vw',
  lightbox: '90vw',
};

// ============================================================================
// Constants
// ============================================================================

/**
 * Legacy CDN base URL for WordPress uploads
 */
export const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Default fallback images for each type
 */
export const FALLBACK_IMAGES = {
  /** Generic product/furniture image */
  product: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
  /** Generic brand placeholder */
  brand: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  /** Generic category image */
  category: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  /** Generic project image */
  project: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  /** Generic article image */
  article: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  /** Site logo */
  logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  /** Outlet item */
  outlet: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
} as const;

/**
 * SVG placeholder for loading/error states (inline data URI)
 */
export const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='none'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='system-ui' font-size='14'%3EBrak obrazu%3C/text%3E%3C/svg%3E`;

// ============================================================================
// Brand Image Resolver
// ============================================================================

/**
 * Known brand images on the CDN
 */
const BRAND_IMAGES: Record<string, string> = {
  'versace-home': `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
  'dolce-gabbana-casa': `${CDN_BASE}/2025/05/dolce-gabbana-casa-sofa-anemone-luxarte-ekskluzywne-meble-wloskie.webp`,
  'bentley-home': `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
  'roberto-cavalli-home-interiors': `${CDN_BASE}/2022/12/roberto_cavalli_home_interiors_luxarte-ekskluzywne_meble_wloskie-obraz.png`,
  'trussardi-casa': `${CDN_BASE}/2025/05/trussardi-casa-sofa-astract-luxarte-ekskluzywne-meble-wloskie.webp`,
  'bugatti-home': `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
  'visionnaire': `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
  'valcucine': `${CDN_BASE}/2024/03/1356_valcucine_logica_celata_luksusowe_kuchnie_luxarte_meble_wloskie_3.webp`,
  'gaggenau': `${CDN_BASE}/2023/02/22745612_gaggenau-essential-induction-7.webp`,
  'scic-italia': `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  'flos': `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
  'venicem': `${CDN_BASE}/2023/05/Venicem_luxarte.jpg`,
  'vanory': `${CDN_BASE}/2023/05/vanory_Estelle-plumon-pendant-lamp_ambient.jpg`,
  'exteta': `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
  'longhi': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'dv-home': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'misuraemme': `${CDN_BASE}/2023/04/luxarte-luksusowa-garderoba-misuraemme-1536x1023.jpeg`,
};

/**
 * Brand logos on the CDN
 */
const BRAND_LOGOS: Record<string, string> = {
  'versace-home': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'dolce-gabbana-casa': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'bentley-home': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'roberto-cavalli-home-interiors': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'trussardi-casa': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'bugatti-home': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'visionnaire': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'flos': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'venicem': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  'vanory': `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
};

/**
 * Resolve brand hero/featured image
 */
export function resolveBrandImage(brandSlug: string): string {
  return BRAND_IMAGES[brandSlug] || FALLBACK_IMAGES.brand;
}

/**
 * Resolve brand logo image
 */
export function resolveBrandLogo(brandSlug: string): string {
  return BRAND_LOGOS[brandSlug] || FALLBACK_IMAGES.logo;
}

// ============================================================================
// Category Image Resolver
// ============================================================================

/**
 * Known category images on the CDN
 */
const CATEGORY_IMAGES: Record<string, string> = {
  'sofy': `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
  'fotele': `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
  'kuchnie': `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  'garderoby': `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
  'lazienki': `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
  'oswietlenie': `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
  'meble-ogrodowe': `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
  'stoly': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'komody': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'lozka': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'krzesla': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'stoliki-kawowe': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'stoliki-boczne': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'konsole': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'szafki-nocne': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'szezlongi': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'pufy': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'regaly': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'biurka': `${CDN_BASE}/2025/04/bentley-home-president-luxarte-ekskluzywne-meble-do-biura-desk.webp`,
  'lustra': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'dywany': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'akcesoria': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'hokery': `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
  'donice': `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
  'zyrandole': `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
  'kinkiety': `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
  'lampy-stolowe': `${CDN_BASE}/2023/05/vanory_Estelle-plumon-pendant-lamp_ambient.jpg`,
  'lampy-podlogowe': `${CDN_BASE}/2023/05/vanory_Estelle-plumon-pendant-lamp_ambient.jpg`,
  'lampy-wiszace': `${CDN_BASE}/2023/05/Venicem_luxarte.jpg`,
};

/**
 * Resolve category hero/featured image
 */
export function resolveCategoryImage(categorySlug: string): string {
  return CATEGORY_IMAGES[categorySlug] || FALLBACK_IMAGES.category;
}

// ============================================================================
// Product Image Resolver
// ============================================================================

/**
 * Product data for image resolution
 */
export interface ProductImageData {
  slug: string;
  brandSlug?: string;
  categorySlug?: string;
  primaryImage?: string;
  galleryImages?: string[];
}

/**
 * Resolve primary product image
 * Uses explicit primaryImage if available, otherwise constructs from slug
 */
export function resolveProductPrimaryImage(product: ProductImageData): string {
  // If explicit image URL provided, use it
  if (product.primaryImage) {
    return product.primaryImage;
  }

  // Construct image URL from product slug using known pattern
  // Pattern: /2025/10/{slug}-luxarte-ekskluzywne-meble-do-salonu.webp
  return `${CDN_BASE}/2025/10/${product.slug}-luxarte-ekskluzywne-meble-do-salonu.webp`;
}

/**
 * Resolve product gallery images
 * Returns array of gallery image URLs
 */
export function resolveProductGalleryImages(product: ProductImageData): string[] {
  // If explicit gallery provided, use it
  if (product.galleryImages && product.galleryImages.length > 0) {
    return [...product.galleryImages];
  }

  // Default: return primary image only
  return [resolveProductPrimaryImage(product)];
}

// ============================================================================
// Project Image Resolver
// ============================================================================

/**
 * Known project images on the CDN
 */
const PROJECT_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  'willa-bentley': {
    hero: `${CDN_BASE}/2025/06/BE-villa-salotto-luxarte-projektowanie-wnetrz-1.jpg`,
    gallery: [
      `${CDN_BASE}/2025/06/BE-villa-salotto-luxarte-projektowanie-wnetrz-1.jpg`,
      `${CDN_BASE}/2025/06/BE-villa-study-luxarte-projektowanie-wnetrz.jpg`,
    ],
  },
  'apartament-versace': {
    hero: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
    gallery: [
      `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
    ],
  },
  'przestrzen-showroom': {
    hero: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    gallery: [
      `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    ],
  },
};

/**
 * Resolve project hero image
 */
export function resolveProjectImage(projectSlug: string): string {
  return PROJECT_IMAGES[projectSlug]?.hero || FALLBACK_IMAGES.project;
}

/**
 * Resolve project gallery images
 */
export function resolveProjectGalleryImages(projectSlug: string): string[] {
  return PROJECT_IMAGES[projectSlug]?.gallery || [FALLBACK_IMAGES.project];
}

// ============================================================================
// Outlet Image Resolver
// ============================================================================

/**
 * Resolve outlet item image
 * Uses product slug pattern
 */
export function resolveOutletImage(itemSlug: string): string {
  // Outlet items follow similar pattern to products
  return `${CDN_BASE}/2025/10/${itemSlug}-luxarte-ekskluzywne-meble-do-salonu.webp`;
}

// ============================================================================
// Article Image Resolver
// ============================================================================

/**
 * Known article images on the CDN
 */
const ARTICLE_IMAGES: Record<string, string> = {
  'venicem-nowoczesne-oblicze-oswietlenia-z-murano': `${CDN_BASE}/2023/05/Venicem_luxarte.jpg`,
  'moda-w-designie-kolekcji-mebli-versace-home': `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
  'archigraphica-nowoczesna-kuchnia-bliska-naturze': `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  'exteta-luksusowe-meble-ogrodowe': `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
};

/**
 * Resolve article hero image
 */
export function resolveArticleImage(articleSlug: string): string {
  return ARTICLE_IMAGES[articleSlug] || FALLBACK_IMAGES.article;
}

// ============================================================================
// Site Assets Resolver
// ============================================================================

/**
 * Get site logo URL
 */
export function getSiteLogo(): string {
  return FALLBACK_IMAGES.logo;
}

/**
 * Get site favicon URL
 */
export function getSiteFavicon(): string {
  return `${CDN_BASE}/2024/02/cropped-LuxArte_Icon_RGB-192x192.jpg`;
}

// ============================================================================
// Image URL Validation
// ============================================================================

/**
 * Check if URL is a valid CDN URL
 */
export function isValidCdnUrl(url: string): boolean {
  return url.startsWith(CDN_BASE) || url.startsWith('https://luxarte.pl/wp-content/uploads');
}

/**
 * Normalize CDN URL (ensure www prefix)
 */
export function normalizeCdnUrl(url: string): string {
  if (url.startsWith('https://luxarte.pl/')) {
    return url.replace('https://luxarte.pl/', 'https://www.luxarte.pl/');
  }
  return url;
}

// ============================================================================
// Usage-Driven Derivative Resolver
// ============================================================================

/**
 * Derivative suffix map
 */
const DERIVATIVE_SUFFIXES: Record<ImageUsage, string> = {
  card: '-card',
  hero: '-hero',
  gallery: '-gallery',
  lightbox: '-lightbox',
};

/**
 * Resolve local image path to usage-specific derivative
 * 
 * @param originalPath - Original image path (e.g., /media/brands/bentley-home-hero.webp)
 * @param usage - Target usage context (card, hero, gallery, lightbox)
 * @returns Derivative path with .webp extension
 * 
 * @example
 * resolveDerivative('/media/brands/bentley-home-hero.webp', 'hero')
 * // Returns: '/media/brands/bentley-home-hero-hero.webp'
 */
export function resolveDerivative(originalPath: string, usage: ImageUsage): string {
  // Handle CDN URLs - return as-is (already optimized)
  if (originalPath.startsWith('http://') || originalPath.startsWith('https://')) {
    return originalPath;
  }
  
  // Extract path components
  const lastDot = originalPath.lastIndexOf('.');
  if (lastDot === -1) {
    // No extension - return original
    return originalPath;
  }
  
  const basePath = originalPath.substring(0, lastDot);
  const suffix = DERIVATIVE_SUFFIXES[usage];
  
  // Return derivative path (always .webp)
  return `${basePath}${suffix}.webp`;
}

/**
 * Get sizes attribute for a usage type
 * 
 * @param usage - Image usage context
 * @returns Appropriate sizes attribute string
 */
export function getSizesForUsage(usage: ImageUsage): string {
  return SIZES_PRESETS[usage];
}

/**
 * Image with usage context - combines path resolution with sizes
 */
export interface UsageImage {
  src: string;
  sizes: string;
}

/**
 * Resolve image for specific usage context
 * Returns both the derivative path and appropriate sizes attribute
 * 
 * @param originalPath - Original image path
 * @param usage - Target usage context
 * @returns Object with src and sizes
 */
export function resolveImageForUsage(originalPath: string, usage: ImageUsage): UsageImage {
  return {
    src: resolveDerivative(originalPath, usage),
    sizes: getSizesForUsage(usage),
  };
}

/**
 * Check if a derivative exists for given path and usage
 * Note: This is a static check based on naming convention
 */
export function hasDerivative(originalPath: string, usage: ImageUsage): boolean {
  // CDN images don't have local derivatives
  if (originalPath.startsWith('http://') || originalPath.startsWith('https://')) {
    return false;
  }
  // Local images should have derivatives based on usage map
  return true;
}

export default {
  CDN_BASE,
  FALLBACK_IMAGES,
  PLACEHOLDER_SVG,
  SIZES_PRESETS,
  resolveBrandImage,
  resolveBrandLogo,
  resolveCategoryImage,
  resolveProductPrimaryImage,
  resolveProductGalleryImages,
  resolveProjectImage,
  resolveProjectGalleryImages,
  resolveOutletImage,
  resolveArticleImage,
  getSiteLogo,
  getSiteFavicon,
  isValidCdnUrl,
  normalizeCdnUrl,
  resolveDerivative,
  getSizesForUsage,
  resolveImageForUsage,
  hasDerivative,
};
