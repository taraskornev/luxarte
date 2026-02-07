/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CANONICAL DATA — SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * 
 * All navigation, filter, and image data MUST be imported from here.
 * 
 * Consumers:
 * - Header dropdowns (desktop + mobile)
 * - Gallery filters (desktop + mobile)
 * - Sidebar navigation
 * - Category/Brand listing pages
 * - Image resolution
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

// Categories
export {
  LEGACY_CATEGORIES,
  LEGACY_CATEGORY_COUNT,
  ALL_CATEGORY_SLUGS,
  NAV_GROUP_LABELS,
  NAV_GROUP_ORDER,
  getCategoriesByNavGroup,
  getCategoryBySlug,
  isValidCategorySlug,
  getCategoryLabel,
  getTotalLegacyProductCount,
  getCategoriesAlphabetically,
  getCategoriesForFilter,
  type LegacyCategory,
  type LegacyCategorySlug,
} from './legacyCategories';

// Brands
export {
  LEGACY_BRANDS,
  LEGACY_BRAND_COUNT,
  ALL_BRAND_SLUGS,
  getBrandsSorted,
  getPremiumBrands,
  getSpecialistBrands,
  getFooterBrands,
  getBrandBySlug,
  isValidBrandSlug,
  getBrandLabel,
  getBrandsForFilter,
  getBrandsByTier,
  type LegacyBrand,
  type LegacyBrandSlug,
} from './legacyBrands';

// Images
export {
  BRAND_IMAGES,
  CATEGORY_IMAGES,
  SITE_ASSETS,
  PLACEHOLDER_SVG,
  getBrandHeroImage,
  getBrandGalleryImages,
  getCategoryImage,
  isVerifiedImageUrl,
  getAllVerifiedBrandImages,
  getAllVerifiedCategoryImages,
  getVerifiedImageCount,
  type BrandImageSet,
} from './imageMap';
