/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CANONICAL IMAGE MAP — VERIFIED URLs FROM LEGACY SITE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * DO NOT USE COMPUTED SUFFIXES
 * 
 * All URLs extracted from live HTML src/srcset on 2026-02-04.
 * No filename guessing. No heuristic URL construction.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

// ═══════════════════════════════════════════════════════════════════════════
// BRAND IMAGES — VERIFIED FROM LEGACY SITE
// ═══════════════════════════════════════════════════════════════════════════

export interface BrandImageSet {
  /** Hero/banner image for brand page */
  hero: string;
  /** Gallery images (first 3-5 verified) */
  gallery: string[];
  /** Logo if available */
  logo?: string;
}

export const BRAND_IMAGES: Record<string, BrandImageSet> = {
  'versace-home': {
    hero: `${CDN_BASE}/2025/04/fotel_versace_home_luxarte.webp`,
    gallery: [
      `${CDN_BASE}/2025/04/fotel_versace_home_luxarte.webp`,
      `${CDN_BASE}/2025/04/fotel_versace_home__acantho_luxarte_2.webp`,
      `${CDN_BASE}/2025/04/fotel_versace_hone_milady_luxarte.webp`,
      `${CDN_BASE}/2025/04/acantho_szezlong_versace_luxarte.webp`,
      `${CDN_BASE}/2023/04/02_Versace-Home_ZensationalSofa_LuxArte-1-scaled.jpeg`,
    ],
  },
  'trussardi-casa': {
    hero: `${CDN_BASE}/2024/05/trussardi3-3.jpg`,
    gallery: [
      `${CDN_BASE}/2024/05/trussardi3-3.jpg`,
      `${CDN_BASE}/2024/05/trussardi2-1.jpg`,
      `${CDN_BASE}/2024/05/trussardi1-1.jpg`,
      `${CDN_BASE}/2024/05/TRUSSARDI_0076-HDR.jpg`,
      `${CDN_BASE}/2024/05/TRUSSARDI_0061-HDR-1.jpg`,
    ],
  },
  'bentley-home': {
    hero: `${CDN_BASE}/2025/05/BE-Fenton-table-Ridley-chairs_converted-1-scaled.webp`,
    gallery: [
      `${CDN_BASE}/2025/05/BE-Fenton-table-Ridley-chairs_converted-1-scaled.webp`,
      `${CDN_BASE}/2025/05/BE-Elan-leather-bag_converted-scaled.webp`,
      `${CDN_BASE}/2025/05/stol-bentley-aldford-krzeslo-ridley-luxarte_converted.webp`,
      `${CDN_BASE}/2025/05/luxarte-bentley-home-sofa-loftus-luksusowe-meble-do-salonu-kopia_converted.webp`,
      `${CDN_BASE}/2025/05/BE-Loftus-sofa-Harrow-bar-cabinet_01_converted-scaled.webp`,
    ],
  },
  'bugatti-home': {
    hero: `${CDN_BASE}/2024/05/1713436391145.jpeg`,
    gallery: [
      `${CDN_BASE}/2024/05/1713436391145.jpeg`,
      `${CDN_BASE}/2024/05/1713366009075.jpeg`,
      `${CDN_BASE}/2024/05/Snapinsta.app_438990200_1160654744941192_6889977626400489052_n_1080.jpg`,
      `${CDN_BASE}/2024/05/1713365992327-1.jpeg`,
      `${CDN_BASE}/2022/04/Luxarte_Bugatti.png`,
    ],
  },
  'dolce-gabbana-casa': {
    hero: `${CDN_BASE}/2023/03/Snapinsta.app_1080_317497608_5876881682405345_7275071622371395190_n.jpg`,
    gallery: [
      `${CDN_BASE}/2023/03/Snapinsta.app_1080_317497608_5876881682405345_7275071622371395190_n.jpg`,
      `${CDN_BASE}/2023/03/Snapinsta.app_1080_317383680_1349054905863641_2915038354031917588_n.jpg`,
      `${CDN_BASE}/2023/03/Snapinsta.app_1080_317722652_121254024131228_470178570928049270_n.jpg`,
      `${CDN_BASE}/2023/03/DolceGabbana-Casa-@-Miami-Design-District-01.jpg`,
      `${CDN_BASE}/2023/03/DGCasa_Miami_LLGBuilding_SetUp37-771299.jpg`,
    ],
  },
  'visionnaire': {
    hero: `${CDN_BASE}/2021/09/visionnaire-1.jpg`,
    gallery: [
      `${CDN_BASE}/2021/09/visionnaire-1.jpg`,
      `${CDN_BASE}/2021/09/visionnaire-2.jpg`,
      `${CDN_BASE}/2021/09/visionnaire-3.jpg`,
      `${CDN_BASE}/2021/09/visionnaire-4.jpg`,
      `${CDN_BASE}/2021/09/visionnaire-5.jpg`,
    ],
  },
  'roberto-cavalli-home-interiors': {
    hero: `${CDN_BASE}/2025/05/meble-roberto-cavalli-home-luxarte.webp`,
    gallery: [
      `${CDN_BASE}/2025/05/meble-roberto-cavalli-home-luxarte.webp`,
    ],
  },
  'misura-emme': {
    hero: `${CDN_BASE}/2023/06/misuraemme-luxarte-meble.webp`,
    gallery: [
      `${CDN_BASE}/2023/06/misuraemme-luxarte-meble.webp`,
    ],
  },
  'scic': {
    hero: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    gallery: [
      `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    ],
  },
  'valcucine': {
    hero: `${CDN_BASE}/2023/06/valcucine-luxarte-kuchnie.webp`,
    gallery: [
      `${CDN_BASE}/2023/06/valcucine-luxarte-kuchnie.webp`,
    ],
  },
  'exteta': {
    hero: `${CDN_BASE}/2025/07/exteta-hero-exteta-luksusowe-meble-ogrodow-luxarte.webp`,
    gallery: [
      `${CDN_BASE}/2025/07/exteta-hero-exteta-luksusowe-meble-ogrodow-luxarte.webp`,
      `${CDN_BASE}/2025/07/b_Exteta_AMALFI-KITCHEN_luxarte-luksusowa-kuchnia-ogrodowa.webp`,
      `${CDN_BASE}/2025/07/etna-dinner-table-273-luxarte-luksusowe-meble-ogrodowe.webp`,
      `${CDN_BASE}/2025/07/lpidc11-modular-sofa-exteta-luksusowe-meble-ogrodow-luxarte.webp`,
    ],
  },
  'gaggenau': {
    hero: `${CDN_BASE}/2023/06/gaggenau-luxarte-agd.webp`,
    gallery: [
      `${CDN_BASE}/2023/06/gaggenau-luxarte-agd.webp`,
    ],
  },
  'venicem': {
    hero: `${CDN_BASE}/2025/08/Venicem_luxarte.jpg`,
    gallery: [
      `${CDN_BASE}/2025/08/Venicem_luxarte.jpg`,
      `${CDN_BASE}/2025/08/Venicem_luxarte_1.jpg`,
      `${CDN_BASE}/2025/08/Venicem_products_luxarte.jpg`,
      `${CDN_BASE}/2025/07/venicem_luxarte_9.jpeg`,
    ],
  },
  'vanory': {
    hero: `${CDN_BASE}/2023/06/vanory-luxarte-garderoby.webp`,
    gallery: [
      `${CDN_BASE}/2023/06/vanory-luxarte-garderoby.webp`,
    ],
  },
  'flos': {
    hero: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
    gallery: [
      `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY IMAGES — VERIFIED FROM LEGACY SITE
// ═══════════════════════════════════════════════════════════════════════════

export const CATEGORY_IMAGES: Record<string, string> = {
  // Meble
  'akcesoria': `${CDN_BASE}/2025/05/BE-Desmond-vases_converted-scaled.webp`,
  'biuro': `${CDN_BASE}/2025/05/luxarte-bentley-home-biurko-styal-luksusowe-meble-do-gabinetu-.jpg.webp`,
  'dywany': `${CDN_BASE}/2025/05/meble-versace-home_dywany.webp`,
  'fotele': `${CDN_BASE}/2025/04/fotel_versace_home_luxarte.webp`,
  'hokery': `${CDN_BASE}/2025/05/meble-versace-home_hokery.webp`,
  'komody': `${CDN_BASE}/2025/05/komoda-bentley-havergate-luxarte_converted.webp`,
  'konsole': `${CDN_BASE}/2025/05/meble-versace-home_konsole.webp`,
  'krzesla': `${CDN_BASE}/2025/05/krzesla-bentley-ramsey-luxarte_converted.webp`,
  'lustra': `${CDN_BASE}/2025/05/meble-versace-home_lustra.webp`,
  'lozka': `${CDN_BASE}/2025/05/luxarte-bentley-home-luksusowe-meble-do-sypialni-lozko-langport.webp`,
  'pufy': `${CDN_BASE}/2025/05/loveseat-bentley-ramsey-luxarte_converted.webp`,
  'regaly': `${CDN_BASE}/2025/05/meble-versace-home_regaly.webp`,
  'sofy': `${CDN_BASE}/2025/05/sofa-bentley-bampton-luxarte_converted.webp`,
  'stoliki-boczne': `${CDN_BASE}/2025/05/meble-versace-home_stoliki-boczne.webp`,
  'stoliki-kawowe': `${CDN_BASE}/2025/05/meble-versace-home_stoliki-kawowe.webp`,
  'stoly': `${CDN_BASE}/2025/05/stol-bentley-home-luxarte.webp`,
  'szafki-nocne': `${CDN_BASE}/2025/05/meble-versace-home_szafki-nocne.webp`,
  'szezlongi': `${CDN_BASE}/2025/04/acantho_szezlong_versace_luxarte.webp`,

  // Oświetlenie
  'kinkiety': `${CDN_BASE}/2023/03/venicem-luxarte-kinkiety.webp`,
  'lampy-podlogowe': `${CDN_BASE}/2023/03/flos-luxarte-lampy-podlogowe.webp`,
  'lampy-stolowe': `${CDN_BASE}/2023/03/flos-luxarte-lampy-stolowe.webp`,
  'lampy-wiszace': `${CDN_BASE}/2023/03/flos-luxarte-lampy-wiszace.webp`,
  'oswietlenie': `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
  'zyrandole': `${CDN_BASE}/2023/03/venicem-luxarte-zyrandole.webp`,

  // Kuchnie
  'kuchnie': `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,

  // Garderoby
  'garderoby': `${CDN_BASE}/2023/06/vanory-luxarte-garderoby.webp`,

  // Łazienki
  'lazienki': `${CDN_BASE}/2023/06/luxarte-lazienki-luksusowe.webp`,

  // Ogród
  'donice': `${CDN_BASE}/2023/06/donice-luxarte-ogrod.webp`,
  'meble-ogrodowe': `${CDN_BASE}/2025/07/exteta-hero-exteta-luksusowe-meble-ogrodow-luxarte.webp`,
};

// ═══════════════════════════════════════════════════════════════════════════
// SITE ASSETS — VERIFIED FROM LEGACY SITE
// ═══════════════════════════════════════════════════════════════════════════

export const SITE_ASSETS = {
  logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
  logoWhite: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-white.png`,
  favicon: `${CDN_BASE}/2021/11/favicon-luxarte.png`,
  placeholder: `${CDN_BASE}/2021/11/placeholder-luxarte.webp`,
};

// ═══════════════════════════════════════════════════════════════════════════
// FALLBACK SVG — INLINE DATA URI (NO NETWORK REQUEST)
// ═══════════════════════════════════════════════════════════════════════════

export const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f5f5f5' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EBrak obrazu%3C/text%3E%3C/svg%3E`;

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get brand hero image
 * Returns verified URL or fallback
 */
export function getBrandHeroImage(brandSlug: string): string {
  return BRAND_IMAGES[brandSlug]?.hero ?? PLACEHOLDER_SVG;
}

/**
 * Get brand gallery images
 * Returns verified URLs only
 */
export function getBrandGalleryImages(brandSlug: string): string[] {
  return BRAND_IMAGES[brandSlug]?.gallery ?? [];
}

/**
 * Get category image
 * Returns verified URL or fallback
 */
export function getCategoryImage(categorySlug: string): string {
  return CATEGORY_IMAGES[categorySlug] ?? PLACEHOLDER_SVG;
}

/**
 * Check if an image URL is in our verified map
 */
export function isVerifiedImageUrl(url: string): boolean {
  // Check brand images
  for (const brand of Object.values(BRAND_IMAGES)) {
    if (brand.hero === url) return true;
    if (brand.gallery.includes(url)) return true;
  }
  // Check category images
  if (Object.values(CATEGORY_IMAGES).includes(url)) return true;
  return false;
}

/**
 * Get all verified brand image URLs
 */
export function getAllVerifiedBrandImages(): string[] {
  const urls: string[] = [];
  for (const brand of Object.values(BRAND_IMAGES)) {
    urls.push(brand.hero);
    urls.push(...brand.gallery);
  }
  return Array.from(new Set(urls));
}

/**
 * Get all verified category image URLs
 */
export function getAllVerifiedCategoryImages(): string[] {
  return Object.values(CATEGORY_IMAGES);
}

/**
 * Get total count of verified images
 */
export function getVerifiedImageCount(): number {
  return getAllVerifiedBrandImages().length + getAllVerifiedCategoryImages().length;
}
