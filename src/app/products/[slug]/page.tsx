import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProductBySlug, getAllProducts, getProductsByBrand } from '@/lib/products';
import { getBrandBySlug as getCanonicalBrand } from '@/canonical/legacyBrands';
import { getProductGalleryImages, getProductLightboxImages } from '@/lib/images-server';
import { PDPGallery } from '@/components/product';
import { getProductDescription, getProductDimensions } from '@/lib/descriptions';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return { title: 'Produkt nie znaleziony | LuxArte' };
  }

  return {
    title: `${product.name} | ${product.brandName} | LuxArte`,
    description: `${product.name} - ekskluzywny produkt marki ${product.brandName}. Dostępny w showroomach LuxArte.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get all product data
  const brand = getCanonicalBrand(product.brandSlug);
  const galleryImages = getProductGalleryImages(product.slug);
  const lightboxImages = getProductLightboxImages(product.slug);
  const description = getProductDescription(product.slug);
  const dimensions = getProductDimensions(product.slug);

  // Get related products (same brand, excluding current, max 3)
  const relatedProducts = getProductsByBrand(product.brandSlug)
    .filter(p => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="pdp">
      <div className="pdp__container">
        {/* Breadcrumb */}
        <nav className="pdp__breadcrumb" aria-label="Ścieżka nawigacji">
          <Link href="/">Strona główna</Link>
          <span aria-hidden="true">/</span>
          <Link href="/gallery">Galeria</Link>
          {brand && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={`/brand/${brand.slug}`}>{brand.label}</Link>
            </>
          )}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        {/* Above the Fold: Two Column Layout */}
        <div className="pdp__hero">
          {/* LEFT: Gallery */}
          <div className="pdp__gallery-col">
            <PDPGallery
              images={galleryImages}
              lightboxImages={lightboxImages}
              productName={product.name}
            />
          </div>

          {/* RIGHT: Product Info */}
          <div className="pdp__info-col">
            {/* Brand */}
            {brand && (
              <Link href={`/brand/${brand.slug}`} className="pdp__brand">
                {brand.label}
              </Link>
            )}

            {/* Product Title (H1) */}
            <h1 className="pdp__title">{product.name}</h1>

            {/* Full Description */}
            {description && (
              <div className="pdp__description">
                <p>{description}</p>
              </div>
            )}

            {/* Dimensions */}
            {dimensions && (
              <div className="pdp__dimensions">
                <span className="pdp__dimensions-label">Wymiary</span>
                <span className="pdp__dimensions-value">{dimensions}</span>
              </div>
            )}

            {/* Decorative accent */}
            <div className="pdp__cta-accent" aria-hidden="true" />

            {/* Primary CTA */}
            <Link 
              href={`/kontakt?product=${encodeURIComponent(product.name)}`} 
              className="pdp__cta"
            >
              Zapytaj o ofertę
            </Link>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pdp__related">
            <h2 className="pdp__related-title">Podobne produkty</h2>
            <div className="pdp__related-grid">
              {relatedProducts.map((relatedProduct) => {
                const relImages = getProductGalleryImages(relatedProduct.slug);
                const mainImage = relImages[0] || null;
                return (
                  <Link 
                    key={relatedProduct.slug} 
                    href={`/products/${relatedProduct.slug}`} 
                    className="pdp__related-card"
                  >
                    <div className="pdp__related-card-image">
                      {mainImage ? (
                        <Image
                          src={mainImage}
                          alt={relatedProduct.name}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          loading="lazy"
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <span className="pdp__related-card-placeholder">Brak zdjęcia</span>
                      )}
                    </div>
                    <div className="pdp__related-card-info">
                      <span className="pdp__related-card-brand">{relatedProduct.brandName}</span>
                      <span className="pdp__related-card-name">{relatedProduct.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
