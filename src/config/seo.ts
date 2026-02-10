/**
 * ============================================================================
 * SEO CONFIG - LUXARTE
 * ============================================================================
 * 
 * Centralized SEO metadata and schema configurations.
 * 
 * @version 1.0.0
 */

/**
 * Site-wide SEO defaults
 */
export const siteMetadata = {
  siteName: 'LuxArte - Fashion for Home',
  defaultTitle: 'LuxArte - Fashion for Home | Ekskluzywne Meble Włoskich Marek',
  titleTemplate: '%s | LuxArte - Fashion for Home',
  defaultDescription:
    'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Doradztwo i wsparcie w projektowaniu wnętrz. Zapraszamy do współpracy!',
  siteUrl: 'https://www.luxarte.pl',
  locale: 'pl_PL',
  language: 'pl',
  author: {
    name: 'LuxArte',
    url: 'https://www.luxarte.pl',
  },
  social: {
    facebook: 'https://www.facebook.com/Luxarte1',
    instagram: 'https://www.instagram.com/luxarte/',
  },
} as const;

/**
 * Homepage specific metadata
 */
export const homepageMeta = {
  title: 'LuxArte - Fashion for Home | Ekskluzywne Meble Włoskich Marek',
  description:
    'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Projektowanie wnętrz i kompleksowe realizacje. Showroom w Warszawie.',
  canonical: 'https://www.luxarte.pl/',
  openGraph: {
    type: 'website',
    title: 'LuxArte - Fashion for Home',
    description:
      'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Doradztwo i wsparcie w projektowaniu wnętrz.',
    image: 'https://www.luxarte.pl/media/design/projektowanie-luxarte-hero.webp',
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: 'LuxArte - Luksusowe wnętrza',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxArte - Fashion for Home',
    description:
      'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek.',
  },
} as const;

/**
 * Organization Schema (JSON-LD)
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.luxarte.pl/#organization',
  name: 'LuxArte',
  alternateName: 'LuxArte - Fashion for Home',
  url: 'https://www.luxarte.pl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.luxarte.pl/media/luxarte-logo.png',
    width: 180,
    height: 60,
  },
  image: 'https://www.luxarte.pl/media/design/projektowanie-luxarte-hero.webp',
  description:
    'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Projektowanie wnętrz.',
  address: [
    {
      '@type': 'PostalAddress',
      name: 'LuxArte Warszawa Showroom',
      streetAddress: 'Plac Piłsudskiego 9, Budynek Opery Narodowej',
      addressLocality: 'Warszawa',
      postalCode: '00-078',
      addressCountry: 'PL',
    },
    {
      '@type': 'PostalAddress',
      name: 'LuxArte Wrocław Project Department',
      streetAddress: 'ul. Księcia Witolda 42/1',
      addressLocality: 'Wrocław',
      postalCode: '50-202',
      addressCountry: 'PL',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+48 22 629 04 58',
      contactType: 'sales',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+48 507 047 399',
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English'],
    },
  ],
  sameAs: [
    'https://www.facebook.com/Luxarte1',
    'https://www.instagram.com/luxarte/',
  ],
} as const;

/**
 * WebSite Schema (JSON-LD)
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.luxarte.pl/#website',
  url: 'https://www.luxarte.pl',
  name: 'LuxArte - Fashion for Home',
  description: siteMetadata.defaultDescription,
  publisher: {
    '@id': 'https://www.luxarte.pl/#organization',
  },
  inLanguage: 'pl-PL',
} as const;

/**
 * LocalBusiness Schema (JSON-LD)
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FurnitureStore',
  '@id': 'https://www.luxarte.pl/#localbusiness',
  name: 'LuxArte',
  image: 'https://www.luxarte.pl/media/luxarte-logo.png',
  url: 'https://www.luxarte.pl',
  telephone: '+48 22 629 04 58',
  email: 'warszawa@luxarte.pl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plac Piłsudskiego 9, Budynek Opery Narodowej',
    addressLocality: 'Warszawa',
    postalCode: '00-078',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.2427796,
    longitude: 21.0100078,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  priceRange: '$$$$',
  servesCuisine: 'Luxury Furniture',
  sameAs: [
    'https://www.facebook.com/Luxarte1',
    'https://www.instagram.com/luxarte/',
  ],
} as const;

/**
 * Generate WebPage schema for a specific page
 */
export function generateWebPageSchema(page: {
  url: string;
  title: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}#webpage`,
    url: page.url,
    name: page.title,
    description: page.description,
    isPartOf: {
      '@id': 'https://www.luxarte.pl/#website',
    },
    about: {
      '@id': 'https://www.luxarte.pl/#organization',
    },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    inLanguage: 'pl-PL',
  };
}

/**
 * Contact information for display
 */
export const contactInfo = {
  warszawa: {
    name: 'LuxArte Warszawa Showroom',
    location: 'Budynek Opery Narodowej',
    street: 'Plac Piłsudskiego 9',
    city: '00-078 Warszawa',
    phone: '+48 22 629 04 58',
    email: 'warszawa@luxarte.pl',
    mapUrl:
      'https://www.google.pl/maps/place/LuxArte+-+Showroom+Fendi+Casa,+Bentley+Home/@52.2427796,21.0100078,17z/',
  },
  wroclaw: {
    name: 'LuxArte Wrocław Project Department',
    street: 'ul. Księcia Witolda 42/1',
    city: '50-202 Wrocław',
    phone: '+48 507 047 399',
    email: 'wroclaw@luxarte.pl',
    mapUrl:
      'https://www.google.com/maps/place/Ksi%C4%99cia+Witolda+42,+50-202+Wroc%C5%82aw/',
  },
} as const;
