import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LEGACY_BRANDS, getBrandBySlug as getCanonicalBrand } from '@/canonical/legacyBrands';
import { getProductsByBrand } from '@/lib/products';
import { getBrandBySlug as getLegacyBrandContent } from '@/lib/brands';
import { getBrandLogo, getBrandHero } from '@/lib/images';
import { ProductGrid } from '@/components/catalog/ProductGrid';

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
  const heroPath = getBrandHero(slug);

  return (
    <div className="brand-page">
      <div className="brand-page-container">
        {/* Breadcrumb */}
        <nav className="brand-breadcrumb">
          <Link href="/">Strona główna</Link>
          <span>/</span>
          <Link href="/nasze-marki">Nasze marki</Link>
          <span>/</span>
          <span>{brand.label}</span>
        </nav>

        {/* 1 — H1 Brand Name */}
        <h1 className="brand-page-title">{brand.label}</h1>

        {/* 2 — Large Brand Logo (2× size) */}
        <div className="brand-logo-large">
          <Image
            src={logoPath}
            alt={`${brand.label} logo`}
            width={360}
            height={160}
            sizes="360px"
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* 3 — Hero Image (2:1 ratio) */}
        <div className="brand-hero">
          <Image
            src={heroPath}
            alt={brand.label}
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* 4 — Intro Text */}
        {legacyContent?.intro && legacyContent.intro.length > 0 && (
          <div className="brand-intro">
            {legacyContent.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* 5 — CTA Button */}
        <div className="brand-cta">
          <Link href="/kontakt" className="brand-cta-btn">
            Zapytaj o produkty {brand.label}
          </Link>
        </div>

        {/* 6 — Brand Product Gallery Grid */}
        {products.length > 0 ? (
          <section className="brand-products-section">
            <h2 className="brand-products-title">Produkty {brand.label}</h2>
            <p className="brand-product-count">{products.length} produktów</p>
            <ProductGrid products={products} />
          </section>
        ) : (
          <div className="brand-no-products">
            <p>Brak produktów dla tej marki.</p>
            <Link href="/gallery" className="brand-browse-link">
              Przeglądaj pełny katalog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
