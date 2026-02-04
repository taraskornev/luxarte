/**
 * ============================================================================
 * TRUST PROOF COMPONENT
 * ============================================================================
 *
 * Displays trust signals: brands used, experience, credentials.
 *
 * @component TrustProof
 */

import Image from 'next/image';
import { trustSignals } from '@/data/service-data';
import { brands } from '@/data/brands-data';

/**
 * Get brand logos for trust display
 */
function getTrustBrands() {
  const trustBrandNames = trustSignals.brands;
  return trustBrandNames
    .map((name) => {
      const brand = brands.find(
        (b) => b.name.toLowerCase() === name.toLowerCase()
      );
      return brand ? { name: brand.name, logo: brand.logo, slug: brand.slug } : null;
    })
    .filter((b): b is NonNullable<typeof b> => b !== null && b.logo !== undefined);
}

/**
 * TrustProof - Credibility and trust signals
 */
export function TrustProof(): JSX.Element {
  const trustBrands = getTrustBrands();

  return (
    <section className="trust-proof" aria-labelledby="trust-heading">
      <div className="trust-proof__container">
        <h2 id="trust-heading" className="trust-proof__heading">
          Współpracujemy z najlepszymi
        </h2>
        <p className="trust-proof__intro">
          Jesteśmy autoryzowanym dealerem wiodących włoskich marek luksusowych.
        </p>

        <div
          className="trust-proof__brands"
          role="list"
          aria-label="Partnerskie marki"
        >
          {trustBrands.map((brand) => (
            <a
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="trust-proof__brand"
              role="listitem"
              title={brand.name}
            >
              {brand.logo && (
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  className="trust-proof__brand-logo"
                  width={120}
                  height={40}
                />
              )}
            </a>
          ))}
        </div>

        <div className="trust-proof__cta">
          <a href="/brands" className="trust-proof__link">
            Zobacz wszystkie marki →
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrustProof;
