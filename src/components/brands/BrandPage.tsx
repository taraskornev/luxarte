/**
 * ============================================================================
 * BRAND DETAIL PAGE - LUXARTE
 * ============================================================================
 *
 * Template for /brands/[slug] pages - Individual Brand Detail.
 * Includes hero, about, materials, categories, products, projects, FAQ, and CTA.
 *
 * @version 1.0.0
 */

import type { Brand } from '../../data/brands-data';
import { BrandHero } from './BrandHero';
import { CategoryChips, MaterialsChips } from './RelatedChips';
import { FAQAccordion, FAQAccordionScript } from './FAQAccordion';

export interface BrandPageProps {
  readonly brand: Brand;
}

/**
 * Generate WebPage + Brand JSON-LD schema
 */
function generatePageSchema(brand: Brand): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: brand.seo.title,
    description: brand.seo.description,
    url: `https://www.luxarte.pl/brands/${brand.slug}`,
    about: {
      '@type': 'Brand',
      name: brand.name,
      description: brand.fullDescription,
      image: brand.image,
      ...(brand.externalUrl && { sameAs: brand.externalUrl }),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'LuxArte',
      url: 'https://www.luxarte.pl',
    },
    provider: {
      '@type': 'Organization',
      name: 'LuxArte',
      url: 'https://www.luxarte.pl',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plac Piłsudskiego 9',
        addressLocality: 'Warszawa',
        postalCode: '00-078',
        addressCountry: 'PL',
      },
    },
  };

  return JSON.stringify(schema);
}

/**
 * Render About Section
 */
function renderAboutSection(brand: Brand): string {
  return `
    <section class="brand-about" aria-labelledby="brand-about-title">
      <div class="brand-about__container">
        <div class="brand-about__content">
          <h2 id="brand-about-title" class="brand-about__title">O marce ${brand.name}</h2>
          <p class="brand-about__description">${brand.fullDescription}</p>
          <p class="brand-about__heritage">${brand.heritage}</p>
        </div>
        <aside class="brand-about__sidebar">
          ${MaterialsChips(brand.materialsAndStyle)}
        </aside>
      </div>
    </section>
  `;
}

/**
 * Render Categories Section
 */
function renderCategoriesSection(brand: Brand): string {
  if (brand.productCategories.length === 0) {
    return '';
  }

  return `
    <section class="brand-categories" aria-labelledby="brand-categories-title">
      <div class="brand-categories__container">
        <h2 id="brand-categories-title" class="brand-categories__title">
          Kategorie produktów ${brand.name}
        </h2>
        ${CategoryChips(brand.productCategories, {
          label: 'Przeglądaj kategorie',
          variant: 'prominent',
        })}
      </div>
    </section>
  `;
}

/**
 * Render Featured Products Section (stub)
 */
function renderProductsSection(brand: Brand): string {
  // Stub section - products will be dynamically loaded
  return `
    <section class="brand-products" aria-labelledby="brand-products-title">
      <div class="brand-products__container">
        <header class="brand-products__header">
          <h2 id="brand-products-title" class="brand-products__title">
            Produkty ${brand.name}
          </h2>
          <a href="/produkty?brand=${brand.slug}" class="brand-products__link">
            Zobacz wszystkie
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </header>
        
        <div class="brand-products__grid" data-products-grid>
          <!-- Products will be loaded dynamically or SSR rendered -->
          <div class="brand-products__placeholder">
            <p>Odkryj kolekcję produktów ${brand.name} w naszym <a href="/showroom?brand=${brand.slug}">showroomie</a> lub <a href="/produkty?brand=${brand.slug}">sklepie online</a>.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render Related Projects Section (stub)
 */
function renderProjectsSection(brand: Brand): string {
  return `
    <section class="brand-projects" aria-labelledby="brand-projects-title">
      <div class="brand-projects__container">
        <header class="brand-projects__header">
          <h2 id="brand-projects-title" class="brand-projects__title">
            Realizacje z ${brand.name}
          </h2>
          <a href="/realizacje?brand=${brand.slug}" class="brand-projects__link">
            Zobacz wszystkie realizacje
          </a>
        </header>
        
        <div class="brand-projects__grid" data-projects-grid>
          <!-- Projects will be loaded dynamically or SSR rendered -->
          <div class="brand-projects__placeholder">
            <p>
              Zapoznaj się z naszymi <a href="/realizacje">realizacjami projektowymi</a>, 
              w których wykorzystaliśmy meble i akcesoria marki ${brand.name}.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render FAQ Section
 */
function renderFAQSection(brand: Brand): string {
  if (!brand.faq || brand.faq.length === 0) {
    return '';
  }

  return `
    <section class="brand-faq">
      <div class="brand-faq__container">
        ${FAQAccordion({
          items: brand.faq,
          title: `Często zadawane pytania o ${brand.name}`,
          id: 'brand-faq',
        })}
      </div>
    </section>
  `;
}

/**
 * Render CTA Section
 */
function renderCTASection(brand: Brand): string {
  return `
    <section class="brand-cta" aria-labelledby="brand-cta-title">
      <div class="brand-cta__container">
        <div class="brand-cta__content">
          <h2 id="brand-cta-title" class="brand-cta__title">
            Odkryj ${brand.name} w naszym showroomie
          </h2>
          <p class="brand-cta__description">
            Zapraszamy do showroomu LuxArte w Warszawie, gdzie możesz osobiście 
            doświadczyć wyjątkowych kolekcji ${brand.name}. Nasi konsultanci pomogą 
            dobrać idealne rozwiązania do Twojego wnętrza.
          </p>
        </div>
        <div class="brand-cta__actions">
          <a href="/showroom?brand=${brand.slug}&intent=visit" class="brand-cta__btn brand-cta__btn--primary">
            Umów wizytę w showroomie
          </a>
          <a href="/showroom?brand=${brand.slug}" class="brand-cta__btn brand-cta__btn--secondary">
            Zapytaj o wycenę
          </a>
        </div>
      </div>
    </section>
  `;
}

/**
 * BrandPage Component
 *
 * Full page template for individual brand detail pages.
 */
export function BrandPage({ brand }: BrandPageProps): string {
  return `
    <main id="main-content" class="brand-page">
      <!-- Hero Section -->
      ${BrandHero({ brand })}

      <!-- About Section -->
      ${renderAboutSection(brand)}

      <!-- Categories Section -->
      ${renderCategoriesSection(brand)}

      <!-- Products Section -->
      ${renderProductsSection(brand)}

      <!-- Projects Section -->
      ${renderProjectsSection(brand)}

      <!-- FAQ Section -->
      ${renderFAQSection(brand)}

      <!-- CTA Section -->
      ${renderCTASection(brand)}

      <!-- Page Schema -->
      <script type="application/ld+json">
        ${generatePageSchema(brand)}
      </script>
    </main>

    ${FAQAccordionScript}
  `.trim();
}

/**
 * Generate HTML head meta tags for brand page
 */
export function generateBrandPageMeta(brand: Brand): string {
  return `
    <title>${brand.seo.title}</title>
    <meta name="description" content="${brand.seo.description}" />
    <link rel="canonical" href="https://www.luxarte.pl/brands/${brand.slug}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${brand.seo.title}" />
    <meta property="og:description" content="${brand.seo.description}" />
    <meta property="og:image" content="${brand.image}" />
    <meta property="og:url" content="https://www.luxarte.pl/brands/${brand.slug}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pl_PL" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${brand.seo.title}" />
    <meta name="twitter:description" content="${brand.seo.description}" />
    <meta name="twitter:image" content="${brand.image}" />
  `.trim();
}

export default BrandPage;
