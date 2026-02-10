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
    return { title: 'Product not found | LuxArte' };
  }

  return {
    title: `${product.name} | ${product.brandName} | LuxArte`,
    description: `${product.name} - exclusive product by ${product.brandName}. Available at LuxArte showrooms.`,
  };
}

export default async function ProductPageEN({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const brand = getCanonicalBrand(product.brandSlug);
  const galleryImages = getProductGalleryImages(product.slug);
  const lightboxImages = getProductLightboxImages(product.slug);
  const description = getProductDescription(product.slug);
  const dimensions = getProductDimensions(product.slug);

  const relatedProducts = getProductsByBrand(product.brandSlug)
    .filter(p => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="pdp">
      <div className="pdp__container">
        <nav className="pdp__breadcrumb" aria-label="Breadcrumb navigation">
          <Link href="/en">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/en/gallery">Gallery</Link>
          {brand && (
            <>
              <span aria-hidden="true">/</span>
              <Link href={`/en/brand/${brand.slug}`}>{brand.label}</Link>
            </>
          )}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="pdp__hero">
          <div className="pdp__gallery-col">
            <PDPGallery
              images={galleryImages}
              lightboxImages={lightboxImages}
              productName={product.name}
              locale="en"
            />
          </div>

          <div className="pdp__info-col">
            {brand && (
              <Link href={`/en/brand/${brand.slug}`} className="pdp__brand">
                {brand.label}
              </Link>
            )}

            <h1 className="pdp__title">{product.name}</h1>

            {description && (
              <div className="pdp__description">
                <p>{description}</p>
              </div>
            )}

            {dimensions && (
              <div className="pdp__dimensions">
                <span className="pdp__dimensions-label">Dimensions</span>
                <span className="pdp__dimensions-value">{dimensions}</span>
              </div>
            )}

            <div className="pdp__cta-accent" aria-hidden="true" />

            <Link 
              href={`/en/contact?product=${encodeURIComponent(product.name)}`} 
              className="pdp__cta"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="pdp__related">
            <h2 className="pdp__related-title">Similar products</h2>
            <div className="pdp__related-grid">
              {relatedProducts.map((relatedProduct) => {
                const relImages = getProductGalleryImages(relatedProduct.slug);
                const mainImage = relImages[0] || null;
                return (
                  <Link 
                    key={relatedProduct.slug} 
                    href={`/en/products/${relatedProduct.slug}`} 
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
                        <span className="pdp__related-card-placeholder">No photo</span>
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
