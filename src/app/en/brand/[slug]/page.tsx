import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LEGACY_BRANDS, getBrandBySlug as getCanonicalBrand } from '@/canonical/legacyBrands';
import { getProductsByBrand } from '@/lib/products';
import { getBrandLogo } from '@/lib/images';
import { getBrandGalleryImages, getBrandLightboxImages } from '@/lib/images-server';
import { getBrandIntro } from '@/canonical/editorialBrandContent';
import { ProductGrid } from '@/components/catalog/ProductGrid';
import { BrandHeroGallery } from '@/components/brand';

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LEGACY_BRANDS.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getCanonicalBrand(slug);
  
  if (!brand) {
    return { title: 'Brand not found | LuxArte' };
  }

  return {
    title: `${brand.label} | LuxArte`,
    description: `${brand.label} product collection at LuxArte.`,
  };
}

export default async function BrandPageEN({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getCanonicalBrand(slug);

  if (!brand) {
    notFound();
  }

  const products = getProductsByBrand(slug, 'en');
  const introParas = getBrandIntro(slug, 'en');
  const logoPath = getBrandLogo(slug);
  const galleryImages = getBrandGalleryImages(slug);
  const lightboxImages = getBrandLightboxImages(slug);

  return (
    <div className="brand-page">
      <div className="brand-page-container">
        <nav className="brand-breadcrumb" aria-label="Breadcrumb">
          <Link href="/en">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/en/our-brands">Our brands</Link>
          <span aria-hidden="true">/</span>
          <h1 className="brand-breadcrumb-title">{brand.label}</h1>
        </nav>

        <div className="brand-logo-large">
          <Image
            src={logoPath}
            alt={`${brand.label} logo`}
            width={420}
            height={180}
            sizes="420px"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {galleryImages.length > 0 && (
          <BrandHeroGallery 
            images={galleryImages} 
            brandName={brand.label}
            lightboxImages={lightboxImages}
            locale="en"
          />
        )}

        {introParas.length > 0 && (
          <div className="brand-intro">
            {introParas.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="brand-cta">
          <Link href="/en/contact#contact-form" className="brand-cta-btn">
            Ask about {brand.label} products
          </Link>
        </div>

        {products.length > 0 && (
          <section className="brand-products-section">
            <h2 className="brand-products-title">{brand.label} Products</h2>
            <ProductGrid products={products.slice(0, 3)} locale="en" />
            {products.length > 3 && (
              <div className="brand-cta" style={{ marginTop: 'var(--space-6)' }}>
                <Link href={`/en/gallery?brand=${slug}`} className="brand-cta-btn">
                  See all products ({products.length})
                </Link>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
