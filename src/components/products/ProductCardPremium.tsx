/**
 * ============================================================================
 * PREMIUM PRODUCT CARD COMPONENT
 * ============================================================================
 *
 * Enhanced product card with:
 * - Hover image zoom
 * - Optional secondary image reveal
 * - Hover action buttons
 * - Brand → Title → Meta hierarchy
 * - Card lift animation
 *
 * @version 1.0.0
 */

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products-data';
import { getBrandBySlug } from '@/data/brands-data';

// ============================================================================
// Types
// ============================================================================

interface ProductCardPremiumProps {
  readonly product: Product;
  /** Show hover action buttons */
  readonly showActions?: boolean;
  /** Image loading priority */
  readonly priority?: boolean;
  /** CSS animation delay class */
  readonly animationDelay?: 1 | 2 | 3 | 4 | 5;
}

// ============================================================================
// Component
// ============================================================================

export function ProductCardPremium({
  product,
  showActions = true,
  priority = false,
  animationDelay,
}: ProductCardPremiumProps) {
  const brand = getBrandBySlug(product.brandSlug);
  const productUrl = `/products/${product.slug}`;
  
  // Get secondary image if available
  const secondaryImage = product.galleryImages?.[0];

  const delayClass = animationDelay ? `animate-delay-${animationDelay}` : '';

  return (
    <article 
      className={`product-card-premium animate-fade-up ${delayClass}`}
    >
      {/* Image Frame */}
      <div className="product-card-premium__image-frame">
        {/* Primary Image */}
        <Image
          src={product.heroImage.src}
          alt={product.heroImage.alt}
          width={product.heroImage.width}
          height={product.heroImage.height}
          className="product-card-premium__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />

        {/* Secondary Image (hover reveal) */}
        {secondaryImage && (
          <Image
            src={secondaryImage.src}
            alt={secondaryImage.alt}
            width={secondaryImage.width}
            height={secondaryImage.height}
            className="product-card-premium__image product-card-premium__image--secondary"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Hover Actions */}
        {showActions && (
          <div className="product-card-premium__actions">
            <Link
              href={productUrl}
              className="product-card-premium__action product-card-premium__action--primary"
            >
              Zobacz szczegóły
            </Link>
            <button
              type="button"
              className="product-card-premium__action"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add to wishlist or inquiry
              }}
            >
              Zapytaj
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="product-card-premium__content">
        {brand && (
          <span className="product-card-premium__brand">{brand.name}</span>
        )}
        <h3 className="product-card-premium__title">{product.name}</h3>
        {product.categorySlug && (
          <span className="product-card-premium__meta">
            {getCategoryLabel(product.categorySlug)}
          </span>
        )}
      </div>

      {/* Full Card Link (for accessibility) */}
      <Link 
        href={productUrl} 
        className="product-card-premium__link"
        aria-label={`Zobacz ${product.name} ${brand ? `od ${brand.name}` : ''}`}
      >
        <span className="sr-only">Zobacz produkt</span>
      </Link>
    </article>
  );
}

// ============================================================================
// Helpers
// ============================================================================

function getCategoryLabel(slug: string): string {
  const labels: Record<string, string> = {
    'sofy': 'Sofa',
    'fotele': 'Fotel',
    'kuchnie': 'Kuchnia',
    'lazienki': 'Łazienka',
    'oswietlenie': 'Oświetlenie',
    'lozka': 'Łóżko',
    'stoly': 'Stół',
    'krzesla': 'Krzesło',
    'garderoby': 'Garderoba',
    'spa': 'Spa & Wellness',
  };
  return labels[slug] || slug;
}

// ============================================================================
// Grid Component
// ============================================================================

interface ProductGridPremiumProps {
  readonly products: readonly Product[];
  readonly showActions?: boolean;
}

export function ProductGridPremium({
  products,
  showActions = true,
}: ProductGridPremiumProps) {
  return (
    <div className="catalog-grid">
      {products.map((product, index) => (
        <ProductCardPremium
          key={product.id}
          product={product}
          showActions={showActions}
          priority={index < 6}
          animationDelay={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}
        />
      ))}
    </div>
  );
}
