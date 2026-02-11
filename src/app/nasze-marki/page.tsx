import Link from 'next/link';
import Image from 'next/image';
import { LEGACY_BRANDS } from '@/canonical/legacyBrands';
import { getBrandLogo, getBrandHero } from '@/lib/images';
import { getBrandPhotoSet } from '@/lib/images-server';

export const metadata = {
  title: 'Nasze marki | LuxArte',
  description: 'Poznaj ekskluzywne marki mebli i akcesoriów domowych dostępne w LuxArte.',
};

export default function NaszeMarkiPage() {
  // Use canonical brand list, sorted by tier then sortOrder
  const brands = [...LEGACY_BRANDS].sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return a.sortOrder - b.sortOrder;
  });

  return (
    <div className="nasze-marki-page">
      <div className="nasze-marki-container">
        <h1 className="nasze-marki-title">Nasze marki</h1>
        
        <div className="nasze-marki-grid">
          {brands.map((brand) => {
            const logoPath = getBrandLogo(brand.slug);
            // Use shared getBrandPhotoSet for card image (same source as brand page gallery)
            // Falls back to legacy getBrandHero if no gallery photos exist
            const photoSet = getBrandPhotoSet(brand.slug);
            const heroPath = photoSet.hero || getBrandHero(brand.slug);
            
            return (
              <Link 
                key={brand.slug} 
                href={`/brand/${brand.slug}`}
                className="nasze-marki-card"
                data-brand={brand.slug}
              >
                <div className="nasze-marki-card-bg">
                  <Image
                    src={heroPath}
                    alt={brand.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="nasze-marki-card-overlay" />
                <div className="nasze-marki-card-logo">
                  <Image
                    src={logoPath}
                    alt={brand.label}
                    width={420}
                    height={180}
                    sizes="420px"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
