/**
 * ============================================================================
 * IMAGES CONFIG - LUXARTE
 * ============================================================================
 * 
 * Centralized image asset configuration.
 * All images reference existing assets from the legacy site.
 * 
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Site Identity Assets
 */
export const siteAssets = {
  logo: {
    src: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`,
    alt: 'LuxArte - Fashion for Home',
    width: 346,
    height: 120,
  },
  favicon: {
    '32': `${CDN_BASE}/2024/02/cropped-LuxArte_Icon_RGB-32x32.jpg`,
    '180': `${CDN_BASE}/2024/02/cropped-LuxArte_Icon_RGB-180x180.jpg`,
    '192': `${CDN_BASE}/2024/02/cropped-LuxArte_Icon_RGB-192x192.jpg`,
    '270': `${CDN_BASE}/2024/02/cropped-LuxArte_Icon_RGB-270x270.jpg`,
  },
} as const;

/**
 * Hero Section Image
 */
export const heroImage = {
  src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  alt: 'Luksusowe wnętrze zaprojektowane przez LuxArte',
  width: 1920,
  height: 1080,
  srcset: [
    { src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`, width: 1920 },
  ],
} as const;

/**
 * Interior Design Section Images
 */
export const interiorDesignImages = {
  moodboard: {
    src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
    alt: 'LuxArte Interior Design Moodboard',
    width: 1266,
    height: 1328,
    srcset: [
      { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`, width: 1266 },
      { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-976x1024.webp`, width: 976 },
      { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-768x806.webp`, width: 768 },
      { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-600x629.webp`, width: 600 },
    ],
  },
  project: {
    src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    alt: 'Projektowanie wnętrz LuxArte',
    width: 1900,
    height: 1060,
    srcset: [
      { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`, width: 1900 },
      { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3-1536x857.webp`, width: 1536 },
      { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3-1024x571.webp`, width: 1024 },
      { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3-768x428.webp`, width: 768 },
    ],
  },
  background: {
    src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
    alt: 'Interior Design Background',
  },
} as const;

/**
 * Brand Logos
 * Grayscale filter applied via CSS, color on hover
 */
export const brandLogos = [
  {
    id: 'versace-home',
    name: 'Versace Home',
    slug: 'versace-home',
    logo: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
  },
  {
    id: 'dolce-gabbana',
    name: 'Dolce & Gabbana Casa',
    slug: 'meble-dolcegabbana-casa',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder - use actual brand logo
  },
  {
    id: 'bentley-home',
    name: 'Bentley Home',
    slug: 'bentley-home',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
  {
    id: 'roberto-cavalli',
    name: 'Roberto Cavalli Home Interiors',
    slug: 'roberto-cavalli-home-interiors',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
  {
    id: 'trussardi',
    name: 'Trussardi Casa',
    slug: 'trussardi-casa',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
  {
    id: 'bugatti',
    name: 'Bugatti Home',
    slug: 'bugatti_home',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
  {
    id: 'visionnaire',
    name: 'Visionnaire',
    slug: 'visionnaire',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
  {
    id: 'valcucine',
    name: 'Valcucine',
    slug: 'valcucine-luksusowe-kuchnie',
    logo: `${CDN_BASE}/2021/11/Lux-Arte-Logo-2021-2.png`, // Placeholder
  },
] as const;

/**
 * Category Images for CategoryGate
 */
export const categoryImages = [
  {
    id: 'sofy',
    name: 'Sofy',
    slug: 'kategoria-produktu/sofy',
    image: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    description: 'Ekskluzywne sofy włoskich marek',
  },
  {
    id: 'kuchnie',
    name: 'Kuchnie',
    slug: 'kategoria-produktu/kuchnie',
    image: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    description: 'Luksusowe kuchnie na wymiar',
  },
  {
    id: 'garderoby',
    name: 'Garderoby',
    slug: 'kategoria-produktu/garderoby',
    image: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
    description: 'Garderoby szyte na miarę',
  },
  {
    id: 'lazienki',
    name: 'Łazienki',
    slug: 'kategoria-produktu/lazienki',
    image: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
    description: 'Luksusowe wyposażenie łazienek',
  },
  {
    id: 'oswietlenie',
    name: 'Oświetlenie',
    slug: 'kategoria-produktu/zyrandole',
    image: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    description: 'Ekskluzywne lampy i żyrandole',
  },
  {
    id: 'meble-ogrodowe',
    name: 'Ogród & Spa',
    slug: 'kategoria-produktu/meble-ogrodowe',
    image: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    description: 'Luksusowe meble ogrodowe',
  },
] as const;

/**
 * Featured Projects for showcase
 */
export const featuredProjects = [
  {
    id: 'projekt-1',
    title: 'Apartament Warszawa',
    category: 'Projektowanie wnętrz',
    image: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
    slug: 'realizacje/apartament-warszawa',
  },
  {
    id: 'projekt-2',
    title: 'Rezydencja Wrocław',
    category: 'Kompleksowa realizacja',
    image: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    slug: 'realizacje/rezydencja-wroclaw',
  },
  {
    id: 'projekt-3',
    title: 'Penthouse Kraków',
    category: 'Design & Meble',
    image: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
    slug: 'realizacje/penthouse-krakow',
  },
] as const;

/**
 * Showroom Image
 */
export const showroomImage = {
  src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
  alt: 'LuxArte Showroom Warszawa - Budynek Opery Narodowej',
  width: 1920,
  height: 1080,
} as const;

/**
 * Generate srcset string from image config
 */
export function generateSrcSet(
  srcset: readonly { src: string; width: number }[]
): string {
  return srcset.map((item) => `${item.src} ${item.width}w`).join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints: Record<string, string>): string {
  return Object.entries(breakpoints)
    .map(([query, size]) => `${query} ${size}`)
    .join(', ');
}
