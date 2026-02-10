import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LEGACY_BRANDS, getBrandBySlug as getCanonicalBrand } from '@/canonical/legacyBrands';
import { getProductsByBrand } from '@/lib/products';
import { getBrandBySlug as getLegacyBrandContent } from '@/lib/brands';
import { getBrandLogo } from '@/lib/images';
import { getBrandGalleryImages, getBrandLightboxImages } from '@/lib/images-server';
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
    return { title: 'Marka nie znaleziona | LuxArte' };
  }

  return {
    title: `${brand.label} | LuxArte`,
    description: `Kolekcja produktów marki ${brand.label} w LuxArte.`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getCanonicalBrand(slug);

  if (!brand) {
    notFound();
  }

  // Get products for this brand
  const products = getProductsByBrand(slug);
  
  // Get legacy content for intro text (if exists)
  const legacyContent = getLegacyBrandContent(slug);
  
  // Get brand images
  const logoPath = getBrandLogo(slug);
  const galleryImages = getBrandGalleryImages(slug);
  const lightboxImages = getBrandLightboxImages(slug);

  return (
    <div className="brand-page">
      <div className="brand-page-container">
        {/* Breadcrumb with H1 as last item */}
        <nav className="brand-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Strona główna</Link>
          <span aria-hidden="true">/</span>
          <Link href="/nasze-marki">Nasze marki</Link>
          <span aria-hidden="true">/</span>
          <h1 className="brand-breadcrumb-title">{brand.label}</h1>
        </nav>

        {/* Large Brand Logo (centered, enlarged) */}
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

        {/* Hero Image Gallery (2:1 ratio slider with thumbnails) */}
        {galleryImages.length > 0 && (
          <BrandHeroGallery 
            images={galleryImages} 
            brandName={brand.label}
            lightboxImages={lightboxImages}
          />
        )}

        {/* Intro Text */}
        {legacyContent?.intro && legacyContent.intro.length > 0 && (
          <div className="brand-intro">
            {legacyContent.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="brand-cta">
          <Link href="/kontakt" className="brand-cta-btn">
            Zapytaj o produkty {brand.label}
          </Link>
        </div>

        {/* Brand Product Gallery Grid - only if products exist */}
        {products.length > 0 && (
          <section className="brand-products-section">
            <h2 className="brand-products-title">Produkty {brand.label}</h2>
            <p className="brand-product-count">{products.length} produktów</p>
            <ProductGrid products={products} />
          </section>
        )}
      </div>
    </div>
  );
}
