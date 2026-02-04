/**
 * ============================================================================
 * OUTLET INDEX PAGE TEMPLATE
 * ============================================================================
 *
 * Outlet index page showing all available items with filtering.
 * /outlet route.
 *
 * @component OutletPage
 */

import {
  outletItems,
  getAllOutletCategories,
  getAllOutletBrands,
  outletIndexSeo,
} from '@/data/outlet-data';
import { OutletFilter } from './OutletFilter';

/**
 * Generate ItemList schema for outlet
 */
function generateItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Outlet LuxArte - Ekskluzywne Meble',
    description: outletIndexSeo.description,
    numberOfItems: outletItems.length,
    itemListElement: outletItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: `https://www.luxarte.pl/outlet/${item.slug}`,
      image: item.primaryImage.src,
    })),
  };
}

/**
 * OutletPage - Outlet index template
 */
export function OutletPage(): JSX.Element {
  const itemListSchema = generateItemListSchema();
  const availableCategories = getAllOutletCategories();
  const availableBrands = getAllOutletBrands();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="outlet-hero-index" aria-labelledby="outlet-title">
        <div className="outlet-hero-index__container">
          <h1 id="outlet-title" className="outlet-hero-index__title">
            Outlet
          </h1>
          <p className="outlet-hero-index__description">
            Ekskluzywne meble włoskich marek dostępne od ręki. Modele
            ekspozycyjne z naszego showroomu oraz wyjątkowe okazje cenowe.
            Każdy produkt w idealnym stanie, objęty pełną gwarancją producenta.
          </p>
        </div>
      </section>

      {/* Filter and Outlet Grid */}
      <section className="outlet-index" aria-label="Lista produktów outlet">
        <div className="outlet-index__container">
          <OutletFilter
            items={outletItems}
            availableCategories={availableCategories}
            availableBrands={availableBrands}
          />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="outlet-cta" aria-label="Wezwanie do działania">
        <div className="outlet-cta__container">
          <div className="outlet-cta__content">
            <h2 className="outlet-cta__heading">
              Odwiedź nasz showroom
            </h2>
            <p className="outlet-cta__text">
              Wszystkie produkty outlet dostępne są do obejrzenia w naszym
              showroomie w Warszawie. Umów wizytę i przekonaj się o jakości
              osobiście.
            </p>
          </div>
          <div className="outlet-cta__actions">
            <a
              href="/showroom"
              className="outlet-cta__button outlet-cta__button--primary"
            >
              Umów wizytę w showroomie
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default OutletPage;
