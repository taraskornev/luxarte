/**
 * ============================================================================
 * BRANDS PAGE CONTENT - LUXARTE
 * ============================================================================
 *
 * Client component for brands index page with interactive filtering.
 *
 * @version 1.0.0
 */

'use client';

import { useState, useMemo } from 'react';
import {
  brands,
  brandCategoryLabels,
  getBrandFirstLetters,
  getBrandsByCategory,
  getBrandsByLetter,
  searchBrands,
  type Brand,
  type BrandCategory,
} from '@/data/brands-data';
import { BrandCard } from '@/components/brands';

// ============================================================================
// Types
// ============================================================================

type FilterCategory = BrandCategory | 'all';
type FilterLetter = string | 'all';

// ============================================================================
// Component
// ============================================================================

export function BrandsPageContent() {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>('all');
  const [letterFilter, setLetterFilter] = useState<FilterLetter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Available letters
  const availableLetters = useMemo(() => getBrandFirstLetters(), []);

  // Filter brands
  const filteredBrands = useMemo(() => {
    let result: readonly Brand[] = brands;

    // Apply category filter
    if (categoryFilter !== 'all') {
      result = getBrandsByCategory(categoryFilter);
    }

    // Apply letter filter
    if (letterFilter !== 'all') {
      result = result.filter(
        (brand) => brand.name.charAt(0).toUpperCase() === letterFilter
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const searchResults = searchBrands(searchQuery);
      const searchIds = new Set(searchResults.map((b) => b.id));
      result = result.filter((brand) => searchIds.has(brand.id));
    }

    return result;
  }, [categoryFilter, letterFilter, searchQuery]);

  return (
    <div className="brands-page">
      {/* Hero Section */}
      <section className="brands-hero" aria-labelledby="brands-title">
        <div className="brands-hero__container">
          <nav className="brands-hero__breadcrumb" aria-label="Ścieżka nawigacji">
            <ol className="breadcrumb">
              <li className="breadcrumb__item">
                <a href="/" className="breadcrumb__link">Strona główna</a>
              </li>
              <li className="breadcrumb__separator" aria-hidden="true">/</li>
              <li className="breadcrumb__item breadcrumb__item--current">
                <span aria-current="page">Marki</span>
              </li>
            </ol>
          </nav>

          <h1 id="brands-title" className="brands-hero__title">Marki</h1>
          <p className="brands-hero__subtitle">
            Odkryj kolekcję luksusowych marek mebli i oświetlenia dostępnych w showroomie LuxArte.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="brands-filter" aria-label="Filtrowanie marek">
        <div className="brands-filter__container">
          {/* Search */}
          <div className="brands-filter__group brands-filter__group--search">
            <label htmlFor="brand-search" className="visually-hidden">
              Szukaj marki
            </label>
            <div className="brands-filter__search-wrapper">
              <svg className="brands-filter__search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="search"
                id="brand-search"
                className="brands-filter__search"
                placeholder="Szukaj marki..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="brands-filter__group brands-filter__group--categories">
            <span className="brands-filter__label">Kategoria:</span>
            <div className="brands-filter__buttons" role="group" aria-label="Filtruj według kategorii">
              <button
                type="button"
                className={`brands-filter__btn ${categoryFilter === 'all' ? 'brands-filter__btn--active' : ''}`}
                onClick={() => setCategoryFilter('all')}
                aria-pressed={categoryFilter === 'all'}
              >
                Wszystkie
              </button>
              {Object.entries(brandCategoryLabels).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className={`brands-filter__btn ${categoryFilter === key ? 'brands-filter__btn--active' : ''}`}
                  onClick={() => setCategoryFilter(key as BrandCategory)}
                  aria-pressed={categoryFilter === key}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Letter Filter */}
          <div className="brands-filter__group brands-filter__group--alpha">
            <span className="brands-filter__label">A-Z:</span>
            <div className="brands-filter__buttons brands-filter__buttons--alpha" role="group" aria-label="Filtruj według litery">
              <button
                type="button"
                className={`brands-filter__btn brands-filter__btn--alpha ${letterFilter === 'all' ? 'brands-filter__btn--active' : ''}`}
                onClick={() => setLetterFilter('all')}
                aria-pressed={letterFilter === 'all'}
              >
                Wszystkie
              </button>
              {availableLetters.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  className={`brands-filter__btn brands-filter__btn--alpha ${letterFilter === letter ? 'brands-filter__btn--active' : ''}`}
                  onClick={() => setLetterFilter(letter)}
                  aria-pressed={letterFilter === letter}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="brands-grid-section" aria-label="Lista marek">
        <div className="brands-grid-section__container">
          <div className="brands-grid-section__count" aria-live="polite">
            Wyświetlamy <strong>{filteredBrands.length}</strong> marek
          </div>

          <div className="brand-grid">
            {filteredBrands.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                priority={index < 6}
              />
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="brands-empty">
              <p>Nie znaleziono marek spełniających kryteria wyszukiwania.</p>
              <button
                type="button"
                className="brands-empty__reset"
                onClick={() => {
                  setCategoryFilter('all');
                  setLetterFilter('all');
                  setSearchQuery('');
                }}
              >
                Wyczyść filtry
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="brands-intro" aria-labelledby="brands-intro-title">
        <div className="brands-intro__container">
          <h2 id="brands-intro-title" className="brands-intro__title">
            Luksusowe marki mebli w LuxArte
          </h2>
          <div className="brands-intro__content">
            <p>
              LuxArte jest autoryzowanym dealerem najbardziej prestiżowych marek mebli i oświetlenia
              na świecie. Nasza kolekcja obejmuje ikoniczne włoskie domy mody jak{' '}
              <a href="/brands/versace-home">Versace Home</a> i{' '}
              <a href="/brands/dolce-gabbana-casa">Dolce &amp; Gabbana Casa</a>,
              legendarne marki motoryzacyjne jak{' '}
              <a href="/brands/bentley-home">Bentley Home</a>,
              a także wiodących producentów luksusowych kuchni i garderobian.
            </p>
            <p>
              Każda marka w naszym portfolio reprezentuje najwyższe standardy jakości,
              rzemiosła i designu. W naszym <a href="/showroom">showroomie w Warszawie</a>{' '}
              możesz doświadczyć tych wyjątkowych kolekcji osobiście i skorzystać
              z profesjonalnego doradztwa naszych konsultantów.
            </p>
          </div>
          <div className="brands-intro__cta">
            <a href="/showroom" className="brands-intro__link brands-intro__link--primary">
              Odwiedź showroom
            </a>
            <a href="/showroom?intent=general" className="brands-intro__link brands-intro__link--secondary">
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Luksusowe marki w LuxArte',
            description: 'Kolekcja ekskluzywnych marek mebli i oświetlenia dostępnych w showroomie LuxArte',
            numberOfItems: brands.length,
            itemListElement: brands.map((brand, index) => ({
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
          }),
        }}
      />
    </div>
  );
}
