/**
 * ============================================================================
 * EDITORIAL BRANDS - LUXARTE
 * ============================================================================
 *
 * Canonical list of 15 editorial brand pages for /marki section.
 * Order matches legacy https://www.luxarte.pl/marki/ exactly.
 *
 * This is SEPARATE from catalog/gallery brands.
 * These are editorial content pages copied from legacy site.
 *
 * @version 2.0.0 - Added cover images
 */

import { mediaUrl } from '@/lib/buildMode';

export interface EditorialBrand {
  readonly name: string;
  readonly slug: string;
  readonly order: number;
  readonly legacyUrl: string;
  readonly logoPath: string;
  readonly coverImage: string;
  readonly coverAlt: string;
  readonly coverAltEn?: string;
}

/**
 * 15 Editorial Brands in Legacy Order
 * Cover images are the first suitable gallery image (>50KB, good aspect ratio)
 */
export const editorialBrands: readonly EditorialBrand[] = [
  {
    name: 'Versace Home',
    slug: 'versace-home',
    order: 1,
    legacyUrl: 'https://www.luxarte.pl/versace-home/',
    logoPath: mediaUrl('/brands/logos-webp/versace.webp'),
    coverImage: mediaUrl('/media/marki/versace-home/gallery-04.jpeg'),
    coverAlt: 'Luksusowe wnętrze Versace Home',
    coverAltEn: 'Luxury Versace Home interior',
  },
  {
    name: 'Trussardi Casa',
    slug: 'trussardi-casa',
    order: 2,
    legacyUrl: 'https://www.luxarte.pl/trussardi-casa/',
    logoPath: mediaUrl('/brands/logos-webp/trussardi.webp'),
    coverImage: mediaUrl('/media/marki/trussardi-casa/gallery-04.jpg'),
    coverAlt: 'Eleganckie meble Trussardi Casa',
    coverAltEn: 'Elegant Trussardi Casa furniture',
  },
  {
    name: 'Bentley Home',
    slug: 'bentley-home',
    order: 3,
    legacyUrl: 'https://www.luxarte.pl/bentley-home/',
    logoPath: '/brands/logos-webp/bentley-home.webp',
    coverImage: mediaUrl('/media/marki/bentley-home/gallery-04.png'),
    coverAlt: 'Ekskluzywne meble Bentley Home',
    coverAltEn: 'Exclusive Bentley Home furniture',
  },
  {
    name: 'Bugatti Home',
    slug: 'bugatti-home',
    order: 4,
    legacyUrl: 'https://www.luxarte.pl/bugatti_home/',
    logoPath: mediaUrl('/brands/logos-webp/bugatti.webp'),
    coverImage: mediaUrl('/media/marki/bugatti-home/gallery-03.png'),
    coverAlt: 'Luksusowe wnętrze Bugatti Home',
    coverAltEn: 'Luxury Bugatti Home interior',
  },
  {
    name: 'Dolce & Gabbana Casa',
    slug: 'dolce-gabbana-casa',
    order: 5,
    legacyUrl: 'https://www.luxarte.pl/meble-dolcegabbana-casa/',
    logoPath: mediaUrl('/brands/logos-webp/dolce-gabbana.webp'),
    coverImage: mediaUrl('/media/marki/dolce-gabbana-casa/gallery-04.jpg'),
    coverAlt: 'Włoskie meble Dolce & Gabbana Casa',
    coverAltEn: 'Italian Dolce & Gabbana Casa furniture',
  },
  {
    name: 'Visionnaire',
    slug: 'visionnaire',
    order: 6,
    legacyUrl: 'https://www.luxarte.pl/visionnaire/',
    logoPath: mediaUrl('/brands/logos-webp/visionnaire.webp'),
    coverImage: mediaUrl('/media/marki/visionnaire/gallery-03.jpeg'),
    coverAlt: 'Luksusowe wnętrze Visionnaire',
    coverAltEn: 'Luxury Visionnaire interior',
  },
  {
    name: 'MisuraEmme',
    slug: 'misuraemme',
    order: 7,
    legacyUrl: 'https://www.luxarte.pl/misura-emme/',
    logoPath: mediaUrl('/brands/logos-webp/misuraemme.webp'),
    coverImage: mediaUrl('/media/marki/misuraemme/gallery-03.jpeg'),
    coverAlt: 'Systemy garderobiane MisuraEmme',
    coverAltEn: 'MisuraEmme wardrobe systems',
  },
  {
    name: 'SCIC Italia',
    slug: 'scic-italia',
    order: 8,
    legacyUrl: 'https://www.luxarte.pl/scic/',
    logoPath: mediaUrl('/brands/logos-webp/scic-italia.webp'),
    coverImage: mediaUrl('/media/marki/scic-italia/gallery-03.jpg'),
    coverAlt: 'Luksusowe kuchnie SCIC Italia',
    coverAltEn: 'Luxury SCIC Italia kitchens',
  },
  {
    name: 'Valcucine',
    slug: 'valcucine',
    order: 9,
    legacyUrl: 'https://www.luxarte.pl/valcucine-luksusowe-kuchnie/',
    logoPath: mediaUrl('/brands/logos-webp/valcucine.webp'),
    coverImage: mediaUrl('/media/marki/valcucine/gallery-03.webp'),
    coverAlt: 'Nowoczesne kuchnie Valcucine',
    coverAltEn: 'Modern Valcucine kitchens',
  },
  {
    name: 'Exteta',
    slug: 'exteta',
    order: 10,
    legacyUrl: 'https://www.luxarte.pl/exteta/',
    logoPath: mediaUrl('/brands/logos-webp/exteta.webp'),
    coverImage: mediaUrl('/media/marki/exteta/gallery-03.webp'),
    coverAlt: 'Luksusowe meble ogrodowe Exteta',
    coverAltEn: 'Luxury Exteta outdoor furniture',
  },
  {
    name: 'Gaggenau',
    slug: 'gaggenau',
    order: 11,
    legacyUrl: 'https://www.luxarte.pl/gaggenau/',
    logoPath: mediaUrl('/brands/logos-webp/gaggenau.webp'),
    coverImage: mediaUrl('/media/marki/gaggenau/gallery-03.webp'),
    coverAlt: 'Profesjonalny sprzęt AGD Gaggenau',
    coverAltEn: 'Professional Gaggenau appliances',
  },
  {
    name: 'Roberto Cavalli Home Interiors',
    slug: 'roberto-cavalli',
    order: 12,
    legacyUrl: 'https://www.luxarte.pl/roberto-cavalli-home-interiors/',
    logoPath: mediaUrl('/brands/logos-webp/roberto-cavalli.webp'),
    coverImage: mediaUrl('/media/marki/roberto-cavalli/gallery-04.jpg'),
    coverAlt: 'Ekskluzywne meble Roberto Cavalli',
    coverAltEn: 'Exclusive Roberto Cavalli furniture',
  },
  {
    name: 'Venicem',
    slug: 'venicem',
    order: 13,
    legacyUrl: 'https://www.luxarte.pl/venicem/',
    logoPath: mediaUrl('/brands/logos-webp/venicem.webp'),
    coverImage: mediaUrl('/media/marki/venicem/gallery-03.webp'),
    coverAlt: 'Oświetlenie Murano Venicem',
    coverAltEn: 'Venicem Murano lighting',
  },
  {
    name: 'Vanory',
    slug: 'vanory',
    order: 14,
    legacyUrl: 'https://www.luxarte.pl/vanory/',
    logoPath: mediaUrl('/brands/logos-webp/vanroy.webp'),
    coverImage: mediaUrl('/media/marki/vanory/gallery-04.jpg'),
    coverAlt: 'Lampy designerskie Vanory',
    coverAltEn: 'Vanory designer lamps',
  },
  {
    name: 'Flos',
    slug: 'flos',
    order: 15,
    legacyUrl: 'https://www.luxarte.pl/flos/',
    logoPath: mediaUrl('/brands/logos-webp/flos.webp'),
    coverImage: mediaUrl('/media/marki/flos/gallery-03.jpg'),
    coverAlt: 'Kultowe lampy Flos',
    coverAltEn: 'Iconic Flos lamps',
  },
] as const;

/**
 * Get brand by slug
 */
export function getEditorialBrandBySlug(slug: string): EditorialBrand | undefined {
  return editorialBrands.find((brand) => brand.slug === slug);
}

/**
 * Get localized cover alt text
 */
export function getBrandCoverAlt(brand: EditorialBrand, locale: 'pl' | 'en' = 'pl'): string {
  return locale === 'en' && brand.coverAltEn ? brand.coverAltEn : brand.coverAlt;
}

/**
 * Get all editorial brand slugs for static generation
 */
export function getAllEditorialBrandSlugs(): string[] {
  return editorialBrands.map((brand) => brand.slug);
}
