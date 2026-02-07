'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { OutletProduct } from '@/lib/outlet';

interface OutletCategoryPageProps {
  title: string;
  description: string;
  products: OutletProduct[];
}

export function OutletCategoryPage({ title, description, products }: OutletCategoryPageProps) {
  return (
    <main className="outlet-category-page">
      <div className="outlet-category-container">
        <div className="outlet-category-intro">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="outlet-products-grid">
          {products.map((product) => (
            <OutletProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <Link href="/outlet" className="outlet-back-link">
          ← Wróć do Outlet
        </Link>
      </div>
    </main>
  );
}

function OutletProductCard({ product }: { product: OutletProduct }) {
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
                alt={`${product.name} - zdjęcie 2`}
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
        <Link href="/kontakt" className="outlet-product-cta">
          ZAPYTAJ O CENĘ
        </Link>
      </div>
    </article>
  );
}
