/**
 * ============================================================================
 * IMAGES CONFIG - LUXARTE
 * ============================================================================
 * 
 * Centralized image asset configuration.
 * ALL IMAGES USE LOCAL PATHS — no CDN.
 * 
 * @version 2.0.0
 */

/**
 * Site Identity Assets
 */
export const siteAssets = {
  logo: {
    src: '/media/luxarte-logo.png',
    alt: 'LuxArte - Fashion for Home',
    width: 346,
    height: 120,
  },
  favicon: {
    '32': '/media/luxarte-logo.png',
    '180': '/media/luxarte-logo.png',
    '192': '/media/luxarte-logo.png',
    '270': '/media/luxarte-logo.png',
  },
} as const;

/**
 * Hero Section Image
 */
export const heroImage = {
  src: '/media/design/projektowanie-luxarte-hero.webp',
  alt: 'Luksusowe wnętrze zaprojektowane przez LuxArte',
  width: 1920,
  height: 1080,
  srcset: [
    { src: '/media/design/projektowanie-luxarte-hero.webp', width: 1920 },
  ],
} as const;

/**
 * Interior Design Section Images
 */
export const interiorDesignImages = {
  moodboard: {
    src: '/media/design/moodboard-1-hero.webp',
    alt: 'LuxArte Interior Design Moodboard',
    width: 1266,
    height: 1328,
    srcset: [
      { src: '/media/design/moodboard-1-hero.webp', width: 1266 },
      { src: '/media/design/moodboard-1-gallery.webp', width: 976 },
      { src: '/media/design/moodboard-1-card.webp', width: 600 },
    ],
  },
  project: {
    src: '/media/design/projektowanie-3-hero.webp',
    alt: 'Projektowanie wnętrz LuxArte',
    width: 1900,
    height: 1060,
    srcset: [
      { src: '/media/design/projektowanie-3-hero.webp', width: 1900 },
      { src: '/media/design/projektowanie-3-gallery.webp', width: 1024 },
      { src: '/media/design/projektowanie-3-card.webp', width: 600 },
    ],
  },
  background: {
    src: '/media/design/villa-01-hero.webp',
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
    logo: '/brands/logos-webp/versace.webp',
  },
  {
    id: 'dolce-gabbana',
    name: 'Dolce & Gabbana Casa',
    slug: 'meble-dolcegabbana-casa',
    logo: '/brands/logos-webp/dolce-gabbana.webp',
  },
  {
    id: 'bentley-home',
    name: 'Bentley Home',
    slug: 'bentley-home',
    logo: '/brands/logos-webp/bentley.webp',
  },
  {
    id: 'roberto-cavalli',
    name: 'Roberto Cavalli Home Interiors',
    slug: 'roberto-cavalli-home-interiors',
    logo: '/brands/logos-webp/roberto-cavalli.webp',
  },
  {
    id: 'trussardi',
    name: 'Trussardi Casa',
    slug: 'trussardi-casa',
    logo: '/brands/logos-webp/trussardi.webp',
  },
  {
    id: 'bugatti',
    name: 'Bugatti Home',
    slug: 'bugatti_home',
    logo: '/brands/logos-webp/bugatti.webp',
  },
  {
    id: 'visionnaire',
    name: 'Visionnaire',
    slug: 'visionnaire',
    logo: '/brands/logos-webp/visionnaire.webp',
  },
  {
    id: 'valcucine',
    name: 'Valcucine',
    slug: 'valcucine-luksusowe-kuchnie',
    logo: '/brands/logos-webp/valcucine.webp',
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
    image: '/media/design/projektowanie-3-hero.webp',
    description: 'Ekskluzywne sofy włoskich marek',
  },
  {
    id: 'kuchnie',
    name: 'Kuchnie',
    slug: 'kategoria-produktu/kuchnie',
    image: '/media/brands/scic-hero-hero.webp',
    description: 'Luksusowe kuchnie na wymiar',
  },
  {
    id: 'garderoby',
    name: 'Garderoby',
    slug: 'kategoria-produktu/garderoby',
    image: '/media/design/villa-01-hero.webp',
    description: 'Garderoby szyte na miarę',
  },
  {
    id: 'lazienki',
    name: 'Łazienki',
    slug: 'kategoria-produktu/lazienki',
    image: '/media/design/moodboard-1-hero.webp',
    description: 'Luksusowe wyposażenie łazienek',
  },
  {
    id: 'oswietlenie',
    name: 'Oświetlenie',
    slug: 'kategoria-produktu/zyrandole',
    image: '/media/brands/flos-hero-hero.webp',
    description: 'Ekskluzywne lampy i żyrandole',
  },
  {
    id: 'meble-ogrodowe',
    name: 'Ogród & Spa',
    slug: 'kategoria-produktu/meble-ogrodowe',
    image: '/media/brands/exteta-hero-hero.webp',
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
    image: '/media/design/projektowanie-luxarte-hero.webp',
    slug: 'realizacje/apartament-warszawa',
  },
  {
    id: 'projekt-2',
    title: 'Rezydencja Wrocław',
    category: 'Kompleksowa realizacja',
    image: '/media/design/bulwar-drobnera-hero.webp',
    slug: 'realizacje/rezydencja-wroclaw',
  },
  {
    id: 'projekt-3',
    title: 'Penthouse Kraków',
    category: 'Design & Meble',
    image: '/media/design/villa-02-hero.webp',
    slug: 'realizacje/penthouse-krakow',
  },
] as const;

/**
 * Showroom Image
 */
export const showroomImage = {
  src: '/media/oferta/warszawa-adres-hero.webp',
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
