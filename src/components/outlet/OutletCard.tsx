/**
 * ============================================================================
 * OUTLET CARD COMPONENT
 * ============================================================================
 *
 * Card for displaying outlet items in grid.
 * Shows image, title, brand chip, availability, and price.
 *
 * @component OutletCard
 */

import Image from 'next/image';
import Link from 'next/link';
import type { OutletItem } from '@/data/outlet-data';
import { availabilityLabels, conditionLabels } from '@/data/outlet-data';
import { brands } from '@/data/brands-data';

export interface OutletCardProps {
  readonly item: OutletItem;
}

/**
 * Get brand name by slug
 */
function getBrandName(slug: string): string | undefined {
  const brand = brands.find((b) => b.slug === slug);
  return brand?.name;
}

/**
 * OutletCard - Grid card for outlet item listing
 */
export function OutletCard({ item }: OutletCardProps): JSX.Element {
  const brandName = item.brand ? getBrandName(item.brand) : undefined;

  return (
    <Link href={`/outlet/${item.slug}`} className="outlet-card">
      <div className="outlet-card__image-wrapper">
        <Image
          src={item.primaryImage.src}
          alt={item.primaryImage.alt}
          className="outlet-card__image"
          width={item.primaryImage.width}
          height={item.primaryImage.height}
        />
        {/* Availability Badge */}
        <span
          className={`outlet-card__badge outlet-card__badge--${item.availability}`}
        >
          {availabilityLabels[item.availability]}
        </span>
      </div>

      <div className="outlet-card__content">
        <h3 className="outlet-card__title">{item.title}</h3>

        <div className="outlet-card__meta">
          {brandName && (
            <span className="outlet-card__brand">{brandName}</span>
          )}
          <span className="outlet-card__condition">
            {conditionLabels[item.condition]}
          </span>
        </div>

        <div className="outlet-card__price-block">
          {item.price?.current ? (
            <>
              {item.price.original && item.discountPercent && (
                <span className="outlet-card__price-original">
                  {new Intl.NumberFormat('pl-PL', {
                    style: 'currency',
                    currency: item.price.currency,
                    minimumFractionDigits: 0,
                  }).format(item.price.original)}
                </span>
              )}
              <span className="outlet-card__price-current">
                {new Intl.NumberFormat('pl-PL', {
                  style: 'currency',
                  currency: item.price.currency,
                  minimumFractionDigits: 0,
                }).format(item.price.current)}
              </span>
              {item.discountPercent && (
                <span className="outlet-card__discount">
                  -{item.discountPercent}%
                </span>
              )}
            </>
          ) : (
            <span className="outlet-card__price-inquiry">Zapytaj o cenę</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default OutletCard;
