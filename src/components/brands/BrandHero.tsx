/**
 * ============================================================================
 * BRAND HERO COMPONENT - LUXARTE
 * ============================================================================
 *
 * Hero section for brand detail pages.
 * Includes H1, logo, breadcrumb navigation, and category badges.
 *
 * @version 1.0.0
 */

import type { Brand } from '../../data/brands-data';

export interface BrandHeroProps {
  readonly brand: Brand;
}

/**
 * Generate breadcrumb JSON-LD schema
 */
function generateBreadcrumbSchema(brand: Brand): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://www.luxarte.pl/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Marki',
        item: 'https://www.luxarte.pl/brands',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: brand.name,
        item: `https://www.luxarte.pl/brands/${brand.slug}`,
      },
    ],
  };

  return JSON.stringify(schema);
}

/**
 * Generate Brand/Organization JSON-LD schema
 */
function generateBrandSchema(brand: Brand): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `https://www.luxarte.pl/brands/${brand.slug}#brand`,
    name: brand.name,
    description: brand.shortDescription,
    image: brand.image,
    url: `https://www.luxarte.pl/brands/${brand.slug}`,
    ...(brand.externalUrl && { sameAs: brand.externalUrl }),
  };

  return JSON.stringify(schema);
}

/**
 * Render category badges
 */
function renderCategoryBadges(categories: readonly string[]): string {
  const categoryLabels: Record<string, string> = {
    meble: 'Meble',
    oswietlenie: 'Oświetlenie',
    kuchnie: 'Kuchnie',
    garderoby: 'Garderoby',
    lazienki: 'Łazienki',
    'meble-ogrodowe': 'Meble ogrodowe',
    agd: 'AGD Premium',
  };

  return categories
    .map((cat) => `<span class="brand-hero__badge">${categoryLabels[cat] || cat}</span>`)
    .join('');
}

/**
 * BrandHero Component
 *
 * Full-width hero section for brand detail page.
 * Semantic structure with H1, breadcrumbs, and structured data.
 */
export function BrandHero({ brand }: BrandHeroProps): string {
  const showLogo = brand.logo && brand.logo !== brand.image;

  return `
    <section class="brand-hero" aria-labelledby="brand-title">
      <!-- Breadcrumb Navigation -->
      <nav class="brand-hero__breadcrumb" aria-label="Ścieżka nawigacji">
        <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/" itemprop="item" class="breadcrumb__link">
              <span itemprop="name">Strona główna</span>
            </a>
            <meta itemprop="position" content="1" />
          </li>
          <li class="breadcrumb__separator" aria-hidden="true">/</li>
          <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="/brands" itemprop="item" class="breadcrumb__link">
              <span itemprop="name">Marki</span>
            </a>
            <meta itemprop="position" content="2" />
          </li>
          <li class="breadcrumb__separator" aria-hidden="true">/</li>
          <li class="breadcrumb__item breadcrumb__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name" aria-current="page">${brand.name}</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>

      <!-- Hero Content -->
      <div class="brand-hero__container">
        <div class="brand-hero__content">
          <!-- Category Badges -->
          <div class="brand-hero__badges" aria-label="Kategorie marki">
            ${renderCategoryBadges(brand.categories)}
          </div>

          <!-- Brand Title (H1) -->
          <h1 id="brand-title" class="brand-hero__title">${brand.name}</h1>

          <!-- Tagline -->
          <p class="brand-hero__tagline">${brand.shortDescription}</p>

          <!-- CTA Buttons -->
          <div class="brand-hero__actions">
            <a href="/showroom?brand=${brand.slug}" class="brand-hero__cta brand-hero__cta--primary">
              Odwiedź showroom
            </a>
            ${
              brand.externalUrl
                ? `
              <a href="${brand.externalUrl}" class="brand-hero__cta brand-hero__cta--secondary" target="_blank" rel="noopener noreferrer">
                Oficjalna strona
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M10.5 3.5L3.5 10.5M10.5 3.5H5M10.5 3.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            `
                : ''
            }
          </div>
        </div>

        <!-- Hero Image -->
        <figure class="brand-hero__media">
          <img
            src="${brand.image}"
            alt="${brand.name} - kolekcja luksusowych mebli"
            class="brand-hero__image"
            width="800"
            height="600"
            fetchpriority="high"
          />
          ${
            showLogo
              ? `
            <div class="brand-hero__logo-wrap">
              <img
                src="${brand.logo}"
                alt="Logo ${brand.name}"
                class="brand-hero__logo"
                width="200"
                height="80"
                loading="lazy"
                decoding="async"
              />
            </div>
          `
              : ''
          }
        </figure>
      </div>

      <!-- Structured Data -->
      <script type="application/ld+json">
        ${generateBreadcrumbSchema(brand)}
      </script>
      <script type="application/ld+json">
        ${generateBrandSchema(brand)}
      </script>
    </section>
  `.trim();
}

export default BrandHero;
