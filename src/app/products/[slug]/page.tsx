import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import { getBrandBySlug as getCanonicalBrand } from '@/canonical/legacyBrands';
import { getProductGalleryImages, getProductLightboxImages } from '@/lib/images-server';
import { ProductGallery } from '@/components/product';
import { getProductDescription } from '@/lib/descriptions';

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
    title: `${product.name} | LuxArte`,
    description: `${product.name} - ekskluzywny produkt z kolekcji LuxArte.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Use canonical brand source
  const brand = getCanonicalBrand(product.brandSlug);
  const galleryImages = getProductGalleryImages(product.slug);
  const lightboxImages = getProductLightboxImages(product.slug);
  const description = getProductDescription(product.slug);

  // Hero = first image, Gallery = rest
  const heroImage = galleryImages[0] || null;
  const galleryGridImages = galleryImages.slice(1);

  return (
    <div className="pdp-page">
      <div className="pdp-container">
        <nav className="pdp-breadcrumb">
          <Link href="/">Strona główna</Link>
          <span>/</span>
          <Link href="/gallery">Galeria</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        {/* Product Page Blocks (strict order) */}
        
        {/* 1 — Product Name (H1) */}
        <h1 className="pdp-title">{product.name}</h1>

        {/* 2 — Brand Line (linked) */}
        {brand && (
          <Link href={`/brand/${brand.slug}`} className="pdp-brand">
            {brand.label}
          </Link>
        )}

        {/* 3 — Hero Image + 4 — Gallery Grid */}
        <ProductGallery
          heroImage={heroImage}
          galleryImages={galleryGridImages}
          lightboxImages={lightboxImages}
          productName={product.name}
        />

        {/* 5 — Short Description (if exists) */}
        {description && (
          <div className="pdp-description">
            <p>{description}</p>
          </div>
        )}

        {/* 6 — CTA Contact Button */}
        <Link href="/kontakt" className="pdp-contact-btn">
          Zapytaj o produkt
        </Link>
      </div>
    </div>
  );
}
