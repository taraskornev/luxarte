'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { OutletProduct } from '@/lib/outlet';
import { getDictionary, type Locale } from '@/i18n';

interface OutletCategoryPageProps {
  title: string;
  description: string;
  products: OutletProduct[];
  locale?: Locale;
}

export function OutletCategoryPage({ title, description, products, locale = 'pl' }: OutletCategoryPageProps) {
  const t = getDictionary(locale);
  const outletHref = locale === 'en' ? '/en/outlet' : '/outlet';
  const contactHref = locale === 'en' ? '/en/contact' : '/kontakt';

  return (
    <main className="outlet-category-page">
      <div className="outlet-category-container">
        <div className="outlet-category-intro">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="outlet-products-grid">
          {products.map((product) => (
            <OutletProductCard key={product.id} product={product} locale={locale} contactHref={contactHref} />
          ))}
        </div>
        
        <Link href={outletHref} className="outlet-back-link">
          {t.common.backToOutlet}
        </Link>
      </div>
    </main>
  );
}

function OutletProductCard({ product, locale, contactHref }: { product: OutletProduct; locale: Locale; contactHref: string }) {
  const t = getDictionary(locale);
  const hasImages = product.images.length > 0;
  const mainImage = hasImages ? product.images[0] : null;
  const secondImage = product.images.length > 1 ? product.images[1] : null;

  return (
    <article className="outlet-product-card">
      {hasImages && (
        <div className="outlet-product-images">
          {mainImage && (
            <div className="outlet-product-image-wrapper">
              <Image
                src={mainImage}
                alt={product.name}
                width={600}
                height={400}
                className="outlet-product-image"
                unoptimized
              />
            </div>
          )}
          {secondImage && (
            <div className="outlet-product-image-wrapper">
              <Image
                src={secondImage}
                alt={`${product.name} - ${t.common.photo2}`}
                width={600}
                height={400}
                className="outlet-product-image"
                unoptimized
              />
            </div>
          )}
        </div>
      )}

      <div className="outlet-product-info">
        <h2 className="outlet-product-name">
          {product.name} – {product.brand} / {product.quantity}
        </h2>
        <p className="outlet-product-description">{product.description}</p>
        <Link href={contactHref} className="outlet-product-cta">
          {t.common.askAboutPrice}
        </Link>
      </div>
    </article>
  );
}
