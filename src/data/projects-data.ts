/**
 * ============================================================================
 * PROJECTS DATA - LUXARTE
 * ============================================================================
 *
 * Centralized project data source for /projects index and /projects/[slug] pages.
 * Projects use existing images from the site - no fabricated specifics.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Style Tags
 */
export type StyleTag =
  | 'modern'
  | 'classic'
  | 'minimalist'
  | 'luxury'
  | 'italian'
  | 'contemporary'
  | 'art-deco'
  | 'glamour';

/**
 * Gallery Image Interface
 */
export interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly srcset?: readonly { src: string; width: number }[];
}

/**
 * Project Data Interface
 */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly heroImage: GalleryImage;
  readonly galleryImages: readonly GalleryImage[];
  readonly shortSummary: string;
  readonly tags: {
    readonly categories: readonly string[]; // category slugs
    readonly brands: readonly string[]; // brand slugs
    readonly styles: readonly StyleTag[];
  };
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

/**
 * All Projects Data
 */
export const projects: readonly Project[] = [
  // ============================================================================
  // PROJECT 1: Willa Bentley
  // ============================================================================
  {
    id: 'willa-bentley',
    title: 'Willa z kolekcją Bentley Home',
    slug: 'willa-bentley',
    heroImage: {
      id: 'willa-bentley-hero',
      src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`,
      alt: 'Willa z kolekcją Bentley Home - salon',
      width: 2560,
      height: 1920,
      srcset: [
        { src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`, width: 2560 },
        { src: `${CDN_BASE}/2025/06/BE-villa-01-2048x1536.jpg`, width: 2048 },
        { src: `${CDN_BASE}/2025/06/BE-villa-01-1536x1152.jpg`, width: 1536 },
        { src: `${CDN_BASE}/2025/06/BE-villa-01-1024x768.jpg`, width: 1024 },
      ],
    },
    galleryImages: [
      {
        id: 'willa-bentley-1',
        src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`,
        alt: 'Willa Bentley - salon główny',
        width: 2560,
        height: 1920,
        srcset: [
          { src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`, width: 2560 },
          { src: `${CDN_BASE}/2025/06/BE-villa-01-1024x768.jpg`, width: 1024 },
        ],
      },
      {
        id: 'willa-bentley-2',
        src: `${CDN_BASE}/2025/06/BE-villa-02-scaled.jpg`,
        alt: 'Willa Bentley - strefa wypoczynkowa',
        width: 2560,
        height: 1920,
        srcset: [
          { src: `${CDN_BASE}/2025/06/BE-villa-02-scaled.jpg`, width: 2560 },
          { src: `${CDN_BASE}/2025/06/BE-villa-02-1024x768.jpg`, width: 1024 },
        ],
      },
      {
        id: 'willa-bentley-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
        alt: 'Willa Bentley - detale',
        width: 1900,
        height: 1060,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`, width: 1900 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3-1024x571.webp`, width: 1024 },
        ],
      },
    ],
    shortSummary:
      'Elegancka rezydencja z ekskluzywną kolekcją mebli Bentley Home. Projekt łączy brytyjski luksus z włoskim rzemiosłem.',
    tags: {
      categories: ['sofy', 'oswietlenie'],
      brands: ['bentley-home'],
      styles: ['luxury', 'contemporary'],
    },
    seo: {
      title: 'Willa z kolekcją Bentley Home | Realizacja LuxArte',
      description:
        'Elegancka rezydencja wyposażona w meble Bentley Home. Zobacz naszą realizację z ekskluzywną kolekcją.',
    },
  },

  // ============================================================================
  // PROJECT 2: Apartament Versace
  // ============================================================================
  {
    id: 'apartament-versace',
    title: 'Apartament z kolekcją Versace Home',
    slug: 'apartament-versace',
    heroImage: {
      id: 'apartament-versace-hero',
      src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
      alt: 'Apartament z kolekcją Versace Home',
      width: 1024,
      height: 718,
    },
    galleryImages: [
      {
        id: 'versace-1',
        src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
        alt: 'Sofa Versace Home Zensational',
        width: 1024,
        height: 718,
      },
      {
        id: 'versace-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1.webp`,
        alt: 'Apartament Versace - strefa dzienna',
        width: 1896,
        height: 1062,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1.webp`, width: 1896 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1-1024x574.webp`, width: 1024 },
        ],
      },
      {
        id: 'versace-3',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
        alt: 'Moodboard projektu',
        width: 1266,
        height: 1328,
        srcset: [
          { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`, width: 1266 },
          { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-768x806.webp`, width: 768 },
        ],
      },
    ],
    shortSummary:
      'Luksusowy apartament w stylu glamour z meblami Versace Home. Połączenie złotych akcentów z charakterystycznym designem marki.',
    tags: {
      categories: ['sofy'],
      brands: ['versace-home'],
      styles: ['glamour', 'luxury', 'italian'],
    },
    seo: {
      title: 'Apartament Versace Home | Realizacja LuxArte',
      description:
        'Luksusowy apartament wyposażony w meble Versace Home. Glamour i włoski design w jednym.',
    },
  },

  // ============================================================================
  // PROJECT 3: Przestrzeń Showroom
  // ============================================================================
  {
    id: 'przestrzen-showroom',
    title: 'Przestrzeń ekspozycyjna showroomu',
    slug: 'przestrzen-showroom',
    heroImage: {
      id: 'showroom-hero',
      src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
      alt: 'Showroom LuxArte - przestrzeń ekspozycyjna',
      width: 1920,
      height: 1080,
    },
    galleryImages: [
      {
        id: 'showroom-1',
        src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
        alt: 'Showroom LuxArte - widok główny',
        width: 1920,
        height: 1080,
      },
      {
        id: 'showroom-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
        alt: 'Showroom - strefa kuchni',
        width: 1900,
        height: 1060,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`, width: 1900 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3-1024x571.webp`, width: 1024 },
        ],
      },
      {
        id: 'showroom-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-5.webp`,
        alt: 'Showroom - detale wyposażenia',
        width: 1038,
        height: 1388,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-5.webp`, width: 1038 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-5-766x1024.webp`, width: 766 },
        ],
      },
      {
        id: 'showroom-4',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-6.webp`,
        alt: 'Showroom - strefa sypialnia',
        width: 1042,
        height: 1390,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-6.webp`, width: 1042 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-6-768x1024.webp`, width: 768 },
        ],
      },
    ],
    shortSummary:
      'Przestrzeń ekspozycyjna showroomu LuxArte w Warszawie. Prezentacja kolekcji od wiodących włoskich marek.',
    tags: {
      categories: ['sofy', 'kuchnie', 'oswietlenie'],
      brands: ['visionnaire', 'valcucine-luksusowe-kuchnie'],
      styles: ['modern', 'italian', 'luxury'],
    },
    seo: {
      title: 'Przestrzeń Showroomu LuxArte | Warszawa',
      description:
        'Showroom LuxArte w Warszawie - przestrzeń prezentująca ekskluzywne meble włoskich marek.',
    },
  },

  // ============================================================================
  // PROJECT 4: Projekt Moodboard Klasyczny
  // ============================================================================
  {
    id: 'projekt-moodboard-klasyczny',
    title: 'Projekt koncepcyjny - styl klasyczny',
    slug: 'projekt-moodboard-klasyczny',
    heroImage: {
      id: 'moodboard-klasyczny-hero',
      src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
      alt: 'Projekt koncepcyjny - moodboard klasyczny',
      width: 1266,
      height: 1328,
      srcset: [
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`, width: 1266 },
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-976x1024.webp`, width: 976 },
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25-768x806.webp`, width: 768 },
      ],
    },
    galleryImages: [
      {
        id: 'moodboard-kl-1',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
        alt: 'Moodboard - paleta kolorów',
        width: 1266,
        height: 1328,
      },
      {
        id: 'moodboard-kl-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2.webp`,
        alt: 'Inspiracja - klasyczny salon',
        width: 1042,
        height: 1388,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2.webp`, width: 1042 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2-769x1024.webp`, width: 769 },
        ],
      },
      {
        id: 'moodboard-kl-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte.webp`,
        alt: 'Detale wykończenia',
        width: 1500,
        height: 2000,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte.webp`, width: 1500 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte-768x1024.webp`, width: 768 },
        ],
      },
    ],
    shortSummary:
      'Projekt koncepcyjny wnętrza w stylu klasycznym. Moodboard przedstawia harmonijną paletę kolorów i materiałów.',
    tags: {
      categories: ['sofy'],
      brands: ['roberto-cavalli-home-interiors', 'trussardi-casa'],
      styles: ['classic', 'luxury'],
    },
    seo: {
      title: 'Projekt Koncepcyjny Styl Klasyczny | LuxArte',
      description:
        'Moodboard i projekt koncepcyjny wnętrza w klasycznym stylu. Zobacz proces twórczy LuxArte.',
    },
  },

  // ============================================================================
  // PROJECT 5: Projekt Moodboard Nowoczesny
  // ============================================================================
  {
    id: 'projekt-moodboard-nowoczesny',
    title: 'Projekt koncepcyjny - styl nowoczesny',
    slug: 'projekt-moodboard-nowoczesny',
    heroImage: {
      id: 'moodboard-nowoczesny-hero',
      src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40.webp`,
      alt: 'Projekt koncepcyjny - moodboard nowoczesny',
      width: 1266,
      height: 1330,
      srcset: [
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40.webp`, width: 1266 },
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40-975x1024.webp`, width: 975 },
        { src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40-768x807.webp`, width: 768 },
      ],
    },
    galleryImages: [
      {
        id: 'moodboard-nw-1',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.25.40.webp`,
        alt: 'Moodboard - nowoczesna paleta',
        width: 1266,
        height: 1330,
      },
      {
        id: 'moodboard-nw-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1.webp`,
        alt: 'Nowoczesne wnętrze',
        width: 1896,
        height: 1062,
        srcset: [
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1.webp`, width: 1896 },
          { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-1-1024x574.webp`, width: 1024 },
        ],
      },
      {
        id: 'moodboard-nw-3',
        src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
        alt: 'Inspiracja - minimalizm',
        width: 1920,
        height: 1080,
      },
    ],
    shortSummary:
      'Projekt koncepcyjny wnętrza w stylu nowoczesnym. Minimalistyczna estetyka z ciepłą paletą kolorów.',
    tags: {
      categories: ['sofy', 'oswietlenie'],
      brands: ['visionnaire'],
      styles: ['modern', 'minimalist', 'contemporary'],
    },
    seo: {
      title: 'Projekt Koncepcyjny Styl Nowoczesny | LuxArte',
      description:
        'Moodboard i projekt koncepcyjny wnętrza w nowoczesnym stylu. Minimalizm i elegancja.',
    },
  },

  // ============================================================================
  // PROJECT 6: Apartament Bulwar
  // ============================================================================
  {
    id: 'apartament-bulwar',
    title: 'Apartament nad bulwarem',
    slug: 'apartament-bulwar',
    heroImage: {
      id: 'bulwar-hero',
      src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera.jpg`,
      alt: 'Apartament nad bulwarem',
      width: 1181,
      height: 591,
      srcset: [
        { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera.jpg`, width: 1181 },
        { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-1024x512.jpg`, width: 1024 },
        { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-768x384.jpg`, width: 768 },
      ],
    },
    galleryImages: [
      {
        id: 'bulwar-1',
        src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera.jpg`,
        alt: 'Apartament - widok główny',
        width: 1181,
        height: 591,
        srcset: [
          { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera.jpg`, width: 1181 },
          { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-1024x512.jpg`, width: 1024 },
        ],
      },
      {
        id: 'bulwar-2',
        src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-1.jpg`,
        alt: 'Apartament - strefa dzienna',
        width: 1181,
        height: 591,
        srcset: [
          { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-1.jpg`, width: 1181 },
          { src: `${CDN_BASE}/2025/06/LUXARTE-Bulwar-Drobnera-1-1024x512.jpg`, width: 1024 },
        ],
      },
      {
        id: 'bulwar-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
        alt: 'Apartament - detale',
        width: 1900,
        height: 1060,
      },
    ],
    shortSummary:
      'Elegancki apartament z widokiem na bulwar. Projekt łączy funkcjonalność z luksusowym wyposażeniem.',
    tags: {
      categories: ['sofy', 'kuchnie'],
      brands: ['dolce-gabbana-casa', 'visionnaire'],
      styles: ['modern', 'luxury', 'italian'],
    },
    seo: {
      title: 'Apartament nad Bulwarem | Realizacja LuxArte',
      description:
        'Elegancki apartament z widokiem na bulwar. Luksusowe wnętrze zaprojektowane przez LuxArte.',
    },
  },

  // ============================================================================
  // PROJECT 7: Wnętrze z Visionnaire
  // ============================================================================
  {
    id: 'wnetrze-visionnaire',
    title: 'Wnętrze z kolekcją Visionnaire',
    slug: 'wnetrze-visionnaire',
    heroImage: {
      id: 'visionnaire-hero',
      src: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
      alt: 'Wnętrze z kolekcją Visionnaire',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'visionnaire-1',
        src: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
        alt: 'Sofa Visionnaire Loving Frank',
        width: 1200,
        height: 800,
      },
      {
        id: 'visionnaire-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-5.webp`,
        alt: 'Detale wyposażenia',
        width: 1038,
        height: 1388,
      },
      {
        id: 'visionnaire-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-6.webp`,
        alt: 'Strefa wypoczynkowa',
        width: 1042,
        height: 1390,
      },
      {
        id: 'visionnaire-4',
        src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
        alt: 'Przestrzeń dzienna',
        width: 1920,
        height: 1080,
      },
    ],
    shortSummary:
      'Wnętrze z ekskluzywną kolekcją Visionnaire. Włoski design w najbardziej wyszukanym wydaniu.',
    tags: {
      categories: ['sofy', 'oswietlenie'],
      brands: ['visionnaire'],
      styles: ['luxury', 'italian', 'art-deco'],
    },
    seo: {
      title: 'Wnętrze z Visionnaire | Realizacja LuxArte',
      description:
        'Luksusowe wnętrze z kolekcją Visionnaire. Włoski design i najwyższa jakość wykonania.',
    },
  },

  // ============================================================================
  // PROJECT 8: Rezydencja Roberto Cavalli
  // ============================================================================
  {
    id: 'rezydencja-cavalli',
    title: 'Rezydencja z kolekcją Roberto Cavalli',
    slug: 'rezydencja-cavalli',
    heroImage: {
      id: 'cavalli-hero',
      src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2.webp`,
      alt: 'Rezydencja z kolekcją Roberto Cavalli',
      width: 1042,
      height: 1388,
      srcset: [
        { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2.webp`, width: 1042 },
        { src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2-769x1024.webp`, width: 769 },
      ],
    },
    galleryImages: [
      {
        id: 'cavalli-1',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte_2.webp`,
        alt: 'Rezydencja - salon główny',
        width: 1042,
        height: 1388,
      },
      {
        id: 'cavalli-2',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz_luxarte.webp`,
        alt: 'Detale wykończenia',
        width: 1500,
        height: 2000,
      },
      {
        id: 'cavalli-3',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
        alt: 'Moodboard projektu',
        width: 1266,
        height: 1328,
      },
    ],
    shortSummary:
      'Ekskluzywna rezydencja z meblami Roberto Cavalli Home Interiors. Charakterystyczny styl marki z motywami animalier.',
    tags: {
      categories: ['sofy'],
      brands: ['roberto-cavalli-home-interiors'],
      styles: ['glamour', 'luxury', 'italian'],
    },
    seo: {
      title: 'Rezydencja Roberto Cavalli | Realizacja LuxArte',
      description:
        'Ekskluzywna rezydencja z kolekcją Roberto Cavalli Home Interiors. Luksus i styl w jednym.',
    },
  },
];

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

/**
 * Get related projects (by shared brands or categories)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projects.slice(0, limit);

  const { brands, categories } = current.tags;

  return projects
    .filter((project) => project.slug !== currentSlug)
    .map((project) => {
      let score = 0;
      project.tags.brands.forEach((brand) => {
        if (brands.includes(brand)) score += 2;
      });
      project.tags.categories.forEach((cat) => {
        if (categories.includes(cat)) score += 1;
      });
      return { project, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project);
}

/**
 * Get projects filtered by category
 */
export function getProjectsByCategory(categorySlug: string): Project[] {
  return projects.filter((project) =>
    project.tags.categories.includes(categorySlug)
  );
}

/**
 * Get projects filtered by brand
 */
export function getProjectsByBrand(brandSlug: string): Project[] {
  return projects.filter((project) => project.tags.brands.includes(brandSlug));
}

/**
 * Get projects filtered by style tag
 */
export function getProjectsByStyle(style: StyleTag): Project[] {
  return projects.filter((project) => project.tags.styles.includes(style));
}

/**
 * Get all unique category slugs from projects
 */
export function getAllProjectCategories(): string[] {
  const categories = new Set<string>();
  projects.forEach((project) => {
    project.tags.categories.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories);
}

/**
 * Get all unique brand slugs from projects
 */
export function getAllProjectBrands(): string[] {
  const brands = new Set<string>();
  projects.forEach((project) => {
    project.tags.brands.forEach((brand) => brands.add(brand));
  });
  return Array.from(brands);
}

/**
 * Get all unique style tags from projects
 */
export function getAllStyleTags(): StyleTag[] {
  const styles = new Set<StyleTag>();
  projects.forEach((project) => {
    project.tags.styles.forEach((style) => styles.add(style));
  });
  return Array.from(styles);
}

/**
 * Style tag display names
 */
export const styleTagLabels: Record<StyleTag, string> = {
  modern: 'Nowoczesny',
  classic: 'Klasyczny',
  minimalist: 'Minimalistyczny',
  luxury: 'Luksusowy',
  italian: 'Włoski',
  contemporary: 'Współczesny',
  'art-deco': 'Art Deco',
  glamour: 'Glamour',
};

/**
 * Projects Index SEO
 */
export const projectsIndexSeo = {
  title: 'Realizacje | Portfolio Projektów Wnętrz | LuxArte',
  description:
    'Zobacz nasze realizacje projektów wnętrz. Portfolio luksusowych apartamentów, rezydencji i willi z meblami Versace Home, Bentley Home, Visionnaire.',
};

export default projects;
