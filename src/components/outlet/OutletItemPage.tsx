/**
 * ============================================================================
 * OUTLET ITEM DETAIL PAGE TEMPLATE
 * ============================================================================
 *
 * Detail page for individual outlet item.
 * /outlet/[item-slug] route.
 *
 * @component OutletItemPage
 */

import Image from 'next/image';
import Link from 'next/link';
import type { OutletItem } from '@/data/outlet-data';
import {
  availabilityLabels,
  conditionLabels,
  getRelatedOutletItems,
} from '@/data/outlet-data';
import { categories } from '@/data/categories-data';
import { brands } from '@/data/brands-data';
import { OutletHero } from './OutletHero';

export interface OutletItemPageProps {
  readonly item: OutletItem;
}

/**
 * Get category data by slug
 */
function getCategoryData(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/**
 * Get brand data by slug
 */
function getBrandData(slug: string) {
  return brands.find((b) => b.slug === slug);
}

/**
 * Generate Product schema for SEO
 */
function generateProductSchema(item: OutletItem) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.title,
    description: item.shortDescription,
    image: item.primaryImage.src,
    url: `https://www.luxarte.pl/outlet/${item.slug}`,
    brand: item.brand
      ? {
          '@type': 'Brand',
          name: getBrandData(item.brand)?.name ?? item.brand,
        }
      : undefined,
    offers: {
      '@type': 'Offer',
      availability:
        item.availability === 'available-now'
          ? 'https://schema.org/InStock'
          : 'https://schema.org/PreOrder',
      itemCondition:
        item.condition === 'new'
          ? 'https://schema.org/NewCondition'
          : 'https://schema.org/UsedCondition',
      seller: {
        '@type': 'Organization',
        name: 'LuxArte',
      },
    },
  };

  // Add price if available
  if (item.price?.current) {
    (schema.offers as Record<string, unknown>).price = item.price.current;
    (schema.offers as Record<string, unknown>).priceCurrency =
      item.price.currency;
  }

  return schema;
}

/**
 * OutletItemPage - Outlet item detail template
 */
export function OutletItemPage({ item }: OutletItemPageProps): JSX.Element {
  const productSchema = generateProductSchema(item);
  const categoryData = getCategoryData(item.category);
  const brandData = item.brand ? getBrandData(item.brand) : undefined;
  const relatedItems = getRelatedOutletItems(item, 3);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <OutletHero item={item} />

      {/* Product Info Section */}
      <section className="outlet-info" aria-label="Informacje o produkcie">
        <div className="outlet-info__container">
          <div className="outlet-info__content">
            {/* Description */}
            <div className="outlet-info__description">
              <h2 className="outlet-info__heading">Opis</h2>
              <p className="outlet-info__text">{item.shortDescription}</p>
            </div>

            {/* Details */}
            <div className="outlet-info__details">
              <h2 className="outlet-info__heading">Szczegóły</h2>
              <dl className="outlet-info__list">
                <div className="outlet-info__item">
                  <dt className="outlet-info__term">Kategoria</dt>
                  <dd className="outlet-info__value">
                    {categoryData ? (
                      <Link href={`/categories/${categoryData.slug}`}>
                        {categoryData.name}
                      </Link>
                    ) : (
                      item.category
                    )}
                  </dd>
                </div>

                {brandData && (
                  <div className="outlet-info__item">
                    <dt className="outlet-info__term">Marka</dt>
                    <dd className="outlet-info__value">
                      <Link href={`/brands/${brandData.slug}`}>
                        {brandData.name}
                      </Link>
                    </dd>
                  </div>
                )}

                <div className="outlet-info__item">
                  <dt className="outlet-info__term">Dostępność</dt>
                  <dd className="outlet-info__value">
                    {availabilityLabels[item.availability]}
                  </dd>
                </div>

                <div className="outlet-info__item">
                  <dt className="outlet-info__term">Stan</dt>
                  <dd className="outlet-info__value">
                    {conditionLabels[item.condition]}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Price & CTA Sidebar */}
          <aside className="outlet-info__sidebar">
            <div className="outlet-price-box">
              <div className="outlet-price-box__price">
                {item.price?.current ? (
                  <>
                    {item.price.original && item.discountPercent && (
                      <span className="outlet-price-box__original">
                        {new Intl.NumberFormat('pl-PL', {
                          style: 'currency',
                          currency: item.price.currency,
                          minimumFractionDigits: 0,
                        }).format(item.price.original)}
                      </span>
                    )}
                    <span className="outlet-price-box__current">
                      {new Intl.NumberFormat('pl-PL', {
                        style: 'currency',
                        currency: item.price.currency,
                        minimumFractionDigits: 0,
                      }).format(item.price.current)}
                    </span>
                    {item.discountPercent && (
                      <span className="outlet-price-box__discount">
                        -{item.discountPercent}%
                      </span>
                    )}
                  </>
                ) : (
                  <span className="outlet-price-box__inquiry">
                    Zapytaj o cenę
                  </span>
                )}
              </div>

              <a
                href={`/showroom?item=${item.slug}`}
                className="outlet-price-box__button"
              >
                Zapytaj o produkt
              </a>

              <p className="outlet-price-box__note">
                Produkt dostępny do obejrzenia w showroomie
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Gallery Section (if has gallery images) */}
      {item.galleryImages && item.galleryImages.length > 0 && (
        <section className="outlet-gallery" aria-label="Galeria produktu">
          <div className="outlet-gallery__container">
            <h2 className="outlet-gallery__heading">Galeria</h2>
            <div className="outlet-gallery__grid">
              {item.galleryImages.map((image) => (
                <figure key={image.id} className="outlet-gallery__item">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="outlet-gallery__image"
                    width={image.width}
                    height={image.height}
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="outlet-related" aria-label="Podobne produkty">
          <div className="outlet-related__container">
            <h2 className="outlet-related__heading">Podobne produkty</h2>
            <div className="outlet-related__grid">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  href={`/outlet/${relatedItem.slug}`}
                  className="outlet-related__card"
                >
                  <div className="outlet-related__image-wrapper">
                    <Image
                      src={relatedItem.primaryImage.src}
                      alt={relatedItem.primaryImage.alt}
                      className="outlet-related__image"
                      width={relatedItem.primaryImage.width}
                      height={relatedItem.primaryImage.height}
                    />
                  </div>
                  <div className="outlet-related__content">
                    <h3 className="outlet-related__title">
                      {relatedItem.title}
                    </h3>
                    <span className="outlet-related__availability">
                      {availabilityLabels[relatedItem.availability]}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Block */}
      <section className="outlet-item-cta" aria-label="Wezwanie do działania">
        <div className="outlet-item-cta__container">
          <h2 className="outlet-item-cta__heading">
            Zainteresowany tym produktem?
          </h2>
          <p className="outlet-item-cta__text">
            Odwiedź nasz showroom, aby zobaczyć produkt osobiście i porozmawiać
            z naszymi konsultantami.
          </p>
          <a
            href={`/showroom?item=${item.slug}`}
            className="outlet-item-cta__button"
          >
            Umów wizytę w showroomie
          </a>
        </div>
      </section>
    </>
  );
}

export default OutletItemPage;
