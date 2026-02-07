'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products';
import { getProductImage, warnIfBadImagePath } from '@/lib/images';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

// Track logged missing images to avoid console spam
const loggedMissing = new Set<string>();

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const imagePath = getProductImage(product.slug);
  const fallbackPath = '/catalog/fallback.svg';

  // DEV: Warn if image path is wrong tier
  useEffect(() => {
    warnIfBadImagePath(imagePath, `card:${product.slug}`);
  }, [imagePath, product.slug]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    if (!loggedMissing.has(product.slug)) {
      console.warn(`[Image Missing] ${product.slug}: ${imagePath}`);
      loggedMissing.add(product.slug);
    }
    target.src = fallbackPath;
  };

  return (
    <Link href={`/products/${product.slug}`} className="gallery-card">
      <div className="gallery-card-image">
        <Image
          src={imagePath}
          alt={product.name}
          width={400}
          height={400}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImageError}
        />
      </div>
      <span className="gallery-card-brand">{product.brandName}</span>
      <h3 className="gallery-card-title">{product.name}</h3>
    </Link>
  );
}
