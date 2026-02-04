/**
 * ============================================================================
 * CATEGORIES PAGE TEMPLATE
 * ============================================================================
 *
 * Categories index page displaying all product categories.
 * Features: Hero, category grid, ItemList schema for SEO.
 *
 * @component CategoriesPage
 */

import { categories, getCategoriesCount } from '@/data/categories-data';
import { CategoryCard } from './CategoryCard';

/**
 * Generate ItemList Schema for categories index
 */
function generateItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kategorie produktów LuxArte',
    description: 'Ekskluzywne kategorie mebli i akcesoriów wnętrzarskich',
    url: 'https://www.luxarte.pl/categories',
    numberOfItems: getCategoriesCount(),
    itemListElement: categories.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: category.name,
      url: `https://www.luxarte.pl/categories/${category.slug}`,
    })),
  };
}

/**
 * CategoriesPage - Categories index page template
 */
export function CategoriesPage(): JSX.Element {
  const schema = generateItemListSchema();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="categories-hero" aria-labelledby="categories-title">
        <div className="categories-hero__container">
          <nav
            className="categories-hero__breadcrumb"
            aria-label="Nawigacja okruszkowa"
          >
            <ol className="categories-hero__breadcrumb-list">
              <li className="categories-hero__breadcrumb-item">
                <a href="/">LuxArte</a>
              </li>
              <li
                className="categories-hero__breadcrumb-item categories-hero__breadcrumb-item--current"
                aria-current="page"
              >
                <span>Kategorie</span>
              </li>
            </ol>
          </nav>

          <h1 id="categories-title" className="categories-hero__title">
            Kategorie
          </h1>
          <p className="categories-hero__intro">
            Odkryj nasze kolekcje luksusowych mebli i akcesoriów wnętrzarskich.
            Współpracujemy z najbardziej prestiżowymi włoskimi markami, oferując
            produkty najwyższej jakości.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section
        className="categories-grid"
        aria-label="Wszystkie kategorie produktów"
      >
        <div className="categories-grid__container">
          <div
            className="categories-grid__grid"
            role="list"
            aria-label="Lista kategorii"
          >
            {categories.map((category) => (
              <div key={category.id} role="listitem">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="categories-cta" aria-labelledby="cta-heading">
        <div className="categories-cta__container">
          <h2 id="cta-heading" className="categories-cta__heading">
            Szukasz czegoś wyjątkowego?
          </h2>
          <p className="categories-cta__text">
            Nasi doradcy pomogą dobrać idealne rozwiązania do Twojego wnętrza.
            Zapraszamy do showroomu w Warszawie.
          </p>
          <div className="categories-cta__actions">
            <a
              href="/showroom"
              className="categories-cta__button categories-cta__button--primary"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="/brands"
              className="categories-cta__button categories-cta__button--secondary"
            >
              Zobacz wszystkie marki
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoriesPage;
