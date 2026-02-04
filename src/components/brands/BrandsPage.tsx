/**
 * ============================================================================
 * BRANDS INDEX PAGE - LUXARTE
 * ============================================================================
 *
 * Template for /brands page - Brands Index.
 * Includes hero, filter UI, brand grid, and SEO intro.
 *
 * @version 1.0.0
 */

import { brands, brandCategoryLabels, getBrandFirstLetters } from '../../data/brands-data';
import type { Brand, BrandCategory } from '../../data/brands-data';
import { BrandCard, BrandCardGrid } from './BrandCard';

export interface BrandsPageProps {
  readonly title?: string;
  readonly description?: string;
}

/**
 * Generate ItemList JSON-LD schema for all brands
 */
function generateBrandsListSchema(brandsList: readonly Brand[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Luksusowe marki w LuxArte',
    description: 'Kolekcja ekskluzywnych marek mebli i oświetlenia dostępnych w showroomie LuxArte',
    numberOfItems: brandsList.length,
    itemListElement: brandsList.map((brand, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Brand',
        name: brand.name,
        description: brand.shortDescription,
        image: brand.image,
        url: `https://www.luxarte.pl/brands/${brand.slug}`,
      },
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate WebPage JSON-LD schema
 */
function generateWebPageSchema(): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Marki | LuxArte',
    description: 'Odkryj kolekcję luksusowych marek mebli i oświetlenia. Versace Home, Bentley Home, Flos, SCIC i wiele innych. Autoryzowany dealer w Polsce.',
    url: 'https://www.luxarte.pl/brands',
    isPartOf: {
      '@type': 'WebSite',
      name: 'LuxArte',
      url: 'https://www.luxarte.pl',
    },
    breadcrumb: {
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
      ],
    },
  };

  return JSON.stringify(schema);
}

/**
 * Generate category filter buttons
 */
function renderCategoryFilters(): string {
  const categories = Object.entries(brandCategoryLabels);

  return `
    <div class="brands-filter__group brands-filter__group--categories">
      <span class="brands-filter__label">Kategoria:</span>
      <div class="brands-filter__buttons" role="group" aria-label="Filtruj według kategorii">
        <button
          type="button"
          class="brands-filter__btn brands-filter__btn--active"
          data-filter-category="all"
          aria-pressed="true"
        >
          Wszystkie
        </button>
        ${categories
          .map(
            ([value, label]) => `
          <button
            type="button"
            class="brands-filter__btn"
            data-filter-category="${value}"
            aria-pressed="false"
          >
            ${label}
          </button>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

/**
 * Generate alphabetical filter
 */
function renderAlphabeticalFilter(): string {
  const letters = getBrandFirstLetters();

  return `
    <div class="brands-filter__group brands-filter__group--alpha">
      <span class="brands-filter__label">A-Z:</span>
      <div class="brands-filter__buttons brands-filter__buttons--alpha" role="group" aria-label="Filtruj według litery">
        <button
          type="button"
          class="brands-filter__btn brands-filter__btn--alpha brands-filter__btn--active"
          data-filter-letter="all"
          aria-pressed="true"
        >
          Wszystkie
        </button>
        ${letters
          .map(
            (letter) => `
          <button
            type="button"
            class="brands-filter__btn brands-filter__btn--alpha"
            data-filter-letter="${letter}"
            aria-pressed="false"
          >
            ${letter}
          </button>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

/**
 * Generate search input
 */
function renderSearchInput(): string {
  return `
    <div class="brands-filter__group brands-filter__group--search">
      <label for="brand-search" class="brands-filter__label visually-hidden">
        Szukaj marki
      </label>
      <div class="brands-filter__search-wrapper">
        <svg class="brands-filter__search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M13.5 13.5L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <input
          type="search"
          id="brand-search"
          class="brands-filter__search"
          placeholder="Szukaj marki..."
          aria-label="Wyszukaj markę"
          data-brand-search
        />
      </div>
    </div>
  `;
}

/**
 * BrandsPage Component
 *
 * Full page template for the brands index.
 */
export function BrandsPage({
  title = 'Marki',
  description = 'Odkryj kolekcję luksusowych marek mebli i oświetlenia dostępnych w showroomie LuxArte.',
}: BrandsPageProps = {}): string {
  return `
    <main id="main-content" class="brands-page">
      <!-- Hero Section -->
      <section class="brands-hero" aria-labelledby="brands-title">
        <div class="brands-hero__container">
          <nav class="brands-hero__breadcrumb" aria-label="Ścieżka nawigacji">
            <ol class="breadcrumb">
              <li class="breadcrumb__item">
                <a href="/" class="breadcrumb__link">Strona główna</a>
              </li>
              <li class="breadcrumb__separator" aria-hidden="true">/</li>
              <li class="breadcrumb__item breadcrumb__item--current">
                <span aria-current="page">Marki</span>
              </li>
            </ol>
          </nav>

          <h1 id="brands-title" class="brands-hero__title">${title}</h1>
          <p class="brands-hero__subtitle">${description}</p>
        </div>
      </section>

      <!-- Filter Section -->
      <section class="brands-filter" aria-label="Filtrowanie marek">
        <div class="brands-filter__container">
          ${renderSearchInput()}
          ${renderCategoryFilters()}
          ${renderAlphabeticalFilter()}
        </div>
      </section>

      <!-- Brands Grid -->
      <section class="brands-grid-section" aria-label="Lista marek">
        <div class="brands-grid-section__container">
          <div class="brands-grid-section__count" aria-live="polite" data-brand-count>
            Wyświetlamy <strong>${brands.length}</strong> marek
          </div>
          
          <div id="brands-grid" data-brands-container>
            ${BrandCardGrid(brands)}
          </div>
        </div>
      </section>

      <!-- SEO Intro Section -->
      <section class="brands-intro" aria-labelledby="brands-intro-title">
        <div class="brands-intro__container">
          <h2 id="brands-intro-title" class="brands-intro__title">
            Luksusowe marki mebli w LuxArte
          </h2>
          <div class="brands-intro__content">
            <p>
              LuxArte jest autoryzowanym dealerem najbardziej prestiżowych marek mebli i oświetlenia 
              na świecie. Nasza kolekcja obejmuje ikoniczne włoskie domy mody jak 
              <a href="/brands/versace-home">Versace Home</a> i 
              <a href="/brands/dolce-gabbana-casa">Dolce & Gabbana Casa</a>, 
              legendarne marki motoryzacyjne jak 
              <a href="/brands/bentley-home">Bentley Home</a>, 
              a także wiodących producentów luksusowych kuchni i garderobian.
            </p>
            <p>
              Każda marka w naszym portfolio reprezentuje najwyższe standardy jakości, 
              rzemiosła i designu. W naszym <a href="/showroom">showroomie w Warszawie</a> 
              możesz doświadczyć tych wyjątkowych kolekcji osobiście i skorzystać 
              z profesjonalnego doradztwa naszych konsultantów.
            </p>
          </div>
          <div class="brands-intro__cta">
            <a href="/showroom" class="brands-intro__link brands-intro__link--primary">
              Odwiedź showroom
            </a>
            <a href="/showroom?intent=general" class="brands-intro__link brands-intro__link--secondary">
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>

      <!-- Structured Data -->
      <script type="application/ld+json">
        ${generateWebPageSchema()}
      </script>
      <script type="application/ld+json">
        ${generateBrandsListSchema(brands)}
      </script>
    </main>
  `.trim();
}

/**
 * Brands Filter Script (client-side filtering)
 */
export const BrandsFilterScript = `
<script>
(function() {
  'use strict';

  const brandsData = ${JSON.stringify(
    brands.map((b) => ({
      id: b.id,
      name: b.name,
      slug: b.slug,
      categories: b.categories,
      letter: b.name.charAt(0).toUpperCase(),
    }))
  )};

  let currentCategory = 'all';
  let currentLetter = 'all';
  let searchQuery = '';

  function filterBrands() {
    const cards = document.querySelectorAll('.brand-card');
    let visibleCount = 0;

    cards.forEach(function(card) {
      const link = card.querySelector('.brand-card__link');
      if (!link) return;

      const slug = link.getAttribute('href').split('/').pop();
      const brand = brandsData.find(function(b) { return b.slug === slug; });
      
      if (!brand) return;

      const matchesCategory = currentCategory === 'all' || brand.categories.includes(currentCategory);
      const matchesLetter = currentLetter === 'all' || brand.letter === currentLetter;
      const matchesSearch = !searchQuery || 
        brand.name.toLowerCase().includes(searchQuery.toLowerCase());

      const isVisible = matchesCategory && matchesLetter && matchesSearch;
      card.style.display = isVisible ? '' : 'none';
      
      if (isVisible) visibleCount++;
    });

    // Update count
    const countEl = document.querySelector('[data-brand-count]');
    if (countEl) {
      countEl.innerHTML = 'Wyświetlamy <strong>' + visibleCount + '</strong> marek';
    }
  }

  function initFilters() {
    // Category buttons
    document.querySelectorAll('[data-filter-category]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentCategory = this.dataset.filterCategory;
        
        document.querySelectorAll('[data-filter-category]').forEach(function(b) {
          b.classList.remove('brands-filter__btn--active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('brands-filter__btn--active');
        this.setAttribute('aria-pressed', 'true');
        
        filterBrands();
      });
    });

    // Letter buttons
    document.querySelectorAll('[data-filter-letter]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentLetter = this.dataset.filterLetter;
        
        document.querySelectorAll('[data-filter-letter]').forEach(function(b) {
          b.classList.remove('brands-filter__btn--active');
          b.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('brands-filter__btn--active');
        this.setAttribute('aria-pressed', 'true');
        
        filterBrands();
      });
    });

    // Search input
    const searchInput = document.querySelector('[data-brand-search]');
    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
          searchQuery = searchInput.value;
          filterBrands();
        }, 200);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }
})();
</script>
`.trim();

export default BrandsPage;
