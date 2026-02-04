/**
 * ============================================================================
 * SHOWROOM PAGE TEMPLATE
 * ============================================================================
 *
 * Main template for /showroom page - the conversion hub.
 * Includes LocalBusiness schema and all contact sections.
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import Link from 'next/link';
import { showroomData } from '@/data/showroom-data';
import { brands } from '@/data/brands-data';
import ShowroomHero from './ShowroomHero';
import LocationCard from './LocationCard';
import ShowroomForm from './ShowroomForm';
import ContactFAQ from './ContactFAQ';

/**
 * Generate LocalBusiness + Organization schema
 */
function generateBusinessSchema() {
  const primaryLocation = showroomData.locations[0];

  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': 'https://www.luxarte.pl/#organization',
    name: showroomData.company.name,
    alternateName: showroomData.company.legalName,
    description: showroomData.seo.description,
    url: 'https://www.luxarte.pl',
    logo: 'https://www.luxarte.pl/wp-content/uploads/2024/01/luxarte-logo.png',
    image: showroomData.heroImage.src,
    telephone: primaryLocation.phone,
    email: primaryLocation.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: primaryLocation.address.streetAddress,
      addressLocality: primaryLocation.address.addressLocality,
      postalCode: primaryLocation.address.postalCode,
      addressCountry: primaryLocation.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: primaryLocation.coordinates.lat,
      longitude: primaryLocation.coordinates.lng,
    },
    openingHoursSpecification: primaryLocation.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    sameAs: showroomData.socialLinks.map((link) => link.url),
    priceRange: '$$$$',
  };
}

/**
 * Generate Organization schema
 */
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: showroomData.company.name,
    legalName: showroomData.company.legalName,
    url: 'https://www.luxarte.pl',
    logo: 'https://www.luxarte.pl/wp-content/uploads/2024/01/luxarte-logo.png',
    contactPoint: showroomData.locations.map((loc) => ({
      '@type': 'ContactPoint',
      telephone: loc.phone,
      email: loc.email,
      contactType: loc.type === 'showroom' ? 'sales' : 'customer service',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English'],
    })),
    sameAs: showroomData.socialLinks.map((link) => link.url),
  };
}

// Featured brands for trust strip (subset)
const featuredBrands = brands.slice(0, 8);

export default function ShowroomPage() {
  const businessSchema = generateBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <article className="showroom-page">
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <ShowroomHero />

      {/* Main Content */}
      <div className="showroom-page__content">
        {/* Two Column Layout: Form + Locations */}
        <div className="showroom-page__grid">
          {/* Form Column */}
          <section
            className="showroom-page__form-section"
            aria-labelledby="contact-form-heading"
          >
            <h2 id="contact-form-heading" className="showroom-page__section-heading">
              Wyślij zapytanie
            </h2>
            <p className="showroom-page__section-intro">
              Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
            </p>
            <ShowroomForm />
          </section>

          {/* Locations Column */}
          <section
            className="showroom-page__locations-section"
            aria-labelledby="locations-heading"
          >
            <h2 id="locations-heading" className="showroom-page__section-heading">
              Nasze lokalizacje
            </h2>
            <div className="showroom-page__locations-grid">
              {showroomData.locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>

            {/* Social Links */}
            <div className="showroom-page__social">
              <h3 className="showroom-page__social-heading">Obserwuj nas</h3>
              <div className="showroom-page__social-links">
                {showroomData.socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showroom-page__social-link"
                    aria-label={`${link.label} (otwiera w nowym oknie)`}
                  >
                    {link.platform === 'facebook' && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    )}
                    {link.platform === 'instagram' && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    )}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Trust Block - Brand Logos */}
      <section className="showroom-page__trust" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="showroom-page__trust-heading">
          Autoryzowany dystrybutor
        </h2>
        <div className="showroom-page__brand-strip">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.slug}`}
              className="showroom-page__brand-logo"
              title={brand.name}
            >
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  className="showroom-page__brand-image"
                  width={120}
                  height={60}
                />
              ) : (
                <span className="showroom-page__brand-name">{brand.name}</span>
              )}
            </Link>
          ))}
        </div>
        <Link href="/brands" className="showroom-page__brands-link">
          Zobacz wszystkie marki
        </Link>
      </section>

      {/* FAQ Section */}
      <div className="showroom-page__faq-wrapper">
        <ContactFAQ />
      </div>
    </article>
  );
}
