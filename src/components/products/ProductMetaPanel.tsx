/**
 * ============================================================================
 * PRODUCT META PANEL COMPONENT
 * ============================================================================
 *
 * Sidebar panel with brand, category, tags, and CTA buttons.
 * Includes links to showroom and interior design service.
 *
 * @version 1.0.0
 */

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/data/products-data';
import type { Brand } from '@/data/brands-data';
import type { Category } from '@/data/categories-data';

interface ProductMetaPanelProps {
  readonly product: Product;
  readonly brand: Brand | undefined;
  readonly category: Category | undefined;
}

export default function ProductMetaPanel({
  product,
  brand,
  category,
}: ProductMetaPanelProps) {
  return (
    <aside className="product-meta" aria-label="Informacje o produkcie">
      {/* Brand Card */}
      {brand && (
        <div className="product-meta__brand-card">
          <span className="product-meta__label">Marka</span>
          <Link
            href={`/brands/${brand.slug}`}
            className="product-meta__brand-link"
          >
            {brand.logo && (
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={40}
                className="product-meta__brand-logo"
              />
            )}
            <span className="product-meta__brand-name">{brand.name}</span>
          </Link>
        </div>
      )}

      {/* Category */}
      {category && (
        <div className="product-meta__category">
          <span className="product-meta__label">Kategoria</span>
          <Link
            href={`/categories/${category.slug}`}
            className="product-meta__category-link"
          >
            {category.name}
          </Link>
        </div>
      )}

      {/* Tags */}
      {product.tags.length > 0 && (
        <div className="product-meta__tags">
          <span className="product-meta__label">Tagi</span>
          <ul className="product-meta__tag-list">
            {product.tags.map((tag) => (
              <li key={tag} className="product-meta__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Buttons */}
      <div className="product-meta__cta">
        <Link
          href={`/showroom?product=${product.slug}`}
          className="product-meta__button product-meta__button--primary"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Zapytaj o produkt
        </Link>

        <Link
          href={`/interior-design-service?product=${product.slug}`}
          className="product-meta__button product-meta__button--secondary"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Projekt z tym produktem
        </Link>
      </div>

      {/* Contact Info */}
      <div className="product-meta__contact">
        <p className="product-meta__contact-text">
          Masz pytania? Skontaktuj się z nami:
        </p>
        <a
          href="tel:+48226290458"
          className="product-meta__contact-link"
        >
          +48 22 629 04 58
        </a>
        <a
          href="mailto:warszawa@luxarte.pl"
          className="product-meta__contact-link"
        >
          warszawa@luxarte.pl
        </a>
      </div>
    </aside>
  );
}
