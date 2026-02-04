/**
 * ============================================================================
 * PRODUCT PAGE TEMPLATE
 * ============================================================================
 *
 * Main template for /products/[slug] pages.
 * Includes Product schema, breadcrumbs, and all product sections.
 *
 * @version 1.0.0
 */

import type { Product } from '@/data/products-data';
import { getRelatedProducts } from '@/data/products-data';
import { getBrandBySlug } from '@/data/brands-data';
import { getCategoryBySlug } from '@/data/categories-data';
import { getProjectBySlug } from '@/data/projects-data';
import { getOutletItemBySlug } from '@/data/outlet-data';
import ProductHero from './ProductHero';
import ProductGalleryGrid from './ProductGalleryGrid';
import ProductSummary from './ProductSummary';
import ProductMetaPanel from './ProductMetaPanel';
import RelatedProducts from './RelatedProducts';
import Link from 'next/link';
import Image from 'next/image';

interface ProductPageProps {
  readonly product: Product;
}

/**
 * Generate Product schema (safe fields only)
 */
function generateProductSchema(product: Product, brand: ReturnType<typeof getBrandBySlug>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://www.luxarte.pl/products/${product.slug}#product`,
    name: product.name,
    description: product.shortDescription,
    image: product.heroImage.src,
    url: `https://www.luxarte.pl/products/${product.slug}`,
    brand: brand
      ? {
          '@type': 'Brand',
          '@id': `https://www.luxarte.pl/brands/${brand.slug}#brand`,
          name: brand.name,
        }
      : undefined,
    category: product.categorySlug,
    manufacturer: {
      '@id': 'https://www.luxarte.pl/#organization',
    },
  };
}

export default function ProductPage({ product }: ProductPageProps) {
  const brand = getBrandBySlug(product.brandSlug);
  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = getRelatedProducts(product.slug, 4);

  // Get related projects
  const relatedProjects = product.relatedProjectSlugs
    ?.map((slug) => getProjectBySlug(slug))
    .filter(Boolean) ?? [];

  // Get related outlet items
  const relatedOutletItems = product.relatedOutletSlugs
    ?.map((slug) => getOutletItemBySlug(slug))
    .filter(Boolean) ?? [];

  const productSchema = generateProductSchema(product, brand);

  return (
    <article className="product-page">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* Hero Section */}
      <ProductHero product={product} brand={brand} category={category} />

      {/* Main Content */}
      <div className="product-page__layout">
        {/* Left Column - Content */}
        <div className="product-page__content">
          {/* Product Summary */}
          <ProductSummary product={product} />

          {/* Gallery Grid */}
          {product.galleryImages.length > 1 && (
            <ProductGalleryGrid
              images={product.galleryImages}
              productName={product.name}
            />
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section
              className="product-page__related-projects"
              aria-labelledby="related-projects-heading"
            >
              <h2
                id="related-projects-heading"
                className="product-page__section-heading"
              >
                Realizacje z tym produktem
              </h2>
              <div className="product-page__projects-grid">
                {relatedProjects.map((project) => (
                  <Link
                    key={project!.id}
                    href={`/projects/${project!.slug}`}
                    className="product-page__project-card"
                  >
                    <Image
                      src={project!.heroImage.src}
                      alt={project!.heroImage.alt}
                      width={project!.heroImage.width}
                      height={project!.heroImage.height}
                      className="product-page__project-image"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <h3 className="product-page__project-title">
                      {project!.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Outlet Items */}
          {relatedOutletItems.length > 0 && (
            <section
              className="product-page__related-outlet"
              aria-labelledby="related-outlet-heading"
            >
              <h2
                id="related-outlet-heading"
                className="product-page__section-heading"
              >
                Dostępne w Outlet
              </h2>
              <div className="product-page__outlet-grid">
                {relatedOutletItems.map((item) => (
                  <Link
                    key={item!.id}
                    href={`/outlet/${item!.slug}`}
                    className="product-page__outlet-card"
                  >
                    <Image
                      src={item!.primaryImage.src}
                      alt={item!.primaryImage.alt}
                      width={item!.primaryImage.width}
                      height={item!.primaryImage.height}
                      className="product-page__outlet-image"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="product-page__outlet-content">
                      <span className="product-page__outlet-badge">Outlet</span>
                      <h3 className="product-page__outlet-title">
                        {item!.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column - Meta Panel */}
        <ProductMetaPanel product={product} brand={brand} category={category} />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}

      {/* Brand CTA Block */}
      {brand && (
        <section className="product-page__brand-cta" aria-labelledby="brand-cta-heading">
          <h2 id="brand-cta-heading" className="product-page__brand-cta-heading">
            Odkryj więcej z kolekcji {brand.name}
          </h2>
          <p className="product-page__brand-cta-text">
            {brand.shortDescription}
          </p>
          <Link
            href={`/brands/${brand.slug}`}
            className="product-page__brand-cta-button"
          >
            Zobacz wszystkie produkty {brand.name}
          </Link>
        </section>
      )}
    </article>
  );
}
