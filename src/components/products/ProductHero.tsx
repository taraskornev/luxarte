/**
 * ============================================================================
 * PRODUCT HERO COMPONENT
 * ============================================================================
 *
 * Hero section for product detail pages with breadcrumb, title, brand link.
 * Includes BreadcrumbList schema for SEO.
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Product, ProductGalleryImage } from '@/data/products-data';
import type { Brand } from '@/data/brands-data';
import type { Category } from '@/data/categories-data';

interface ProductHeroProps {
  readonly product: Product;
  readonly brand: Brand | undefined;
  readonly category: Category | undefined;
}

/**
 * Generate BreadcrumbList schema
 */
function generateBreadcrumbSchema(
  product: Product,
  brand: Brand | undefined,
  category: Category | undefined
) {
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona główna',
      item: 'https://www.luxarte.pl',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Produkty',
      item: 'https://www.luxarte.pl/produkty',
    },
  ];

  if (category) {
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: category.name,
      item: `https://www.luxarte.pl/categories/${category.slug}`,
    });
  }

  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: product.name,
    item: `https://www.luxarte.pl/products/${product.slug}`,
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export default function ProductHero({
  product,
  brand,
  category,
}: ProductHeroProps) {
  const breadcrumbSchema = generateBreadcrumbSchema(product, brand, category);

  return (
    <section className="product-hero" aria-labelledby="product-title">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="product-hero__breadcrumb" aria-label="Ścieżka nawigacji">
        <ol className="product-hero__breadcrumb-list">
          <li className="product-hero__breadcrumb-item">
            <Link href="/" className="product-hero__breadcrumb-link">
              Strona główna
            </Link>
          </li>
          {category && (
            <li className="product-hero__breadcrumb-item">
              <Link
                href={`/categories/${category.slug}`}
                className="product-hero__breadcrumb-link"
              >
                {category.name}
              </Link>
            </li>
          )}
          <li
            className="product-hero__breadcrumb-item product-hero__breadcrumb-item--current"
            aria-current="page"
          >
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Hero Content */}
      <div className="product-hero__content">
        {/* Text Content */}
        <div className="product-hero__text">
          {/* Brand Link */}
          {brand && (
            <Link
              href={`/brands/${brand.slug}`}
              className="product-hero__brand-link"
            >
              {brand.name}
            </Link>
          )}

          {/* Product Title */}
          <h1 id="product-title" className="product-hero__title">
            {product.name}
          </h1>

          {/* Category Tag */}
          {category && (
            <p className="product-hero__category">
              <Link
                href={`/categories/${category.slug}`}
                className="product-hero__category-link"
              >
                {category.name}
              </Link>
            </p>
          )}
        </div>

        {/* Hero Image */}
        <figure className="product-hero__image-wrapper">
          <Image
            src={product.heroImage.src}
            alt={product.heroImage.alt}
            width={product.heroImage.width}
            height={product.heroImage.height}
            className="product-hero__image"
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </figure>
      </div>
    </section>
  );
}
