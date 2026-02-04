/**
 * ============================================================================
 * RELATED PRODUCTS COMPONENT
 * ============================================================================
 *
 * Grid of related products based on same brand or category.
 * Links to other product detail pages.
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products-data';
import { getBrandBySlug } from '@/data/brands-data';

interface RelatedProductsProps {
  readonly products: readonly Product[];
  readonly heading?: string;
}

export default function RelatedProducts({
  products,
  heading = 'Podobne produkty',
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="related-products" aria-labelledby="related-products-heading">
      <h2 id="related-products-heading" className="related-products__heading">
        {heading}
      </h2>

      <div className="related-products__grid">
        {products.map((product) => {
          const brand = getBrandBySlug(product.brandSlug);

          return (
            <article key={product.id} className="related-products__card">
              <Link
                href={`/products/${product.slug}`}
                className="related-products__link"
              >
                <figure className="related-products__image-wrapper">
                  <Image
                    src={product.heroImage.src}
                    alt={product.heroImage.alt}
                    width={product.heroImage.width}
                    height={product.heroImage.height}
                    className="related-products__image"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </figure>

                <div className="related-products__content">
                  {brand && (
                    <span className="related-products__brand">{brand.name}</span>
                  )}
                  <h3 className="related-products__title">{product.name}</h3>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
