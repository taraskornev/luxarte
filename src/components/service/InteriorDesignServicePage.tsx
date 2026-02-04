/**
 * ============================================================================
 * INTERIOR DESIGN SERVICE PAGE TEMPLATE
 * ============================================================================
 *
 * High-conversion service landing page template.
 * Features: Hero, value props, process, deliverables, projects, trust, form.
 *
 * @component InteriorDesignServicePage
 */

import { seoData, trustSignals, serviceFAQ } from '@/data/service-data';
import { ServiceHero } from './ServiceHero';
import { ValuePropositions } from './ValuePropositions';
import { ProcessTimeline } from './ProcessTimeline';
import { DeliverablesGrid } from './DeliverablesGrid';
import { BudgetTiers } from './BudgetTiers';
import { CasePreview } from './CasePreview';
import { TrustProof } from './TrustProof';
import { ServiceForm } from './ServiceForm';
import { FAQAccordion } from '@/components/brands/FAQAccordion';

/**
 * Generate Service Schema
 */
function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.luxarte.pl/interior-design-service/#service',
    name: 'Projektowanie Wnętrz',
    description: seoData.description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.luxarte.pl/#organization',
      name: 'LuxArte',
      url: 'https://www.luxarte.pl',
      telephone: trustSignals.contactPhone,
      email: trustSignals.contactEmail,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plac Piłsudskiego 9',
        addressLocality: 'Warszawa',
        postalCode: '00-078',
        addressCountry: 'PL',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    serviceType: 'Interior Design',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'PLN',
    },
  };
}

/**
 * Generate Organization Schema
 */
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.luxarte.pl/#organization',
    name: 'LuxArte',
    alternateName: 'LuxArte - Fashion for Home',
    url: 'https://www.luxarte.pl',
    logo: 'https://www.luxarte.pl/wp-content/uploads/2021/11/Lux-Arte-Logo-2021-2.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: trustSignals.contactPhone,
      email: trustSignals.contactEmail,
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: ['Polish', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plac Piłsudskiego 9',
      addressLocality: 'Warszawa',
      postalCode: '00-078',
      addressCountry: 'PL',
    },
    sameAs: [
      'https://www.facebook.com/Luxarte1/',
      'https://www.instagram.com/luxarte/',
    ],
  };
}

/**
 * Generate BreadcrumbList Schema
 */
function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'LuxArte',
        item: 'https://www.luxarte.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projektowanie Wnętrz',
        item: 'https://www.luxarte.pl/interior-design-service',
      },
    ],
  };
}

/**
 * Generate FAQ Schema
 */
function generateFAQSchema() {
  if (!serviceFAQ || serviceFAQ.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * InteriorDesignServicePage - Full page template
 */
export function InteriorDesignServicePage(): JSX.Element {
  const serviceSchema = generateServiceSchema();
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema();
  const faqSchema = generateFAQSchema();

  const schemas: Record<string, unknown>[] = [
    serviceSchema,
    organizationSchema,
    breadcrumbSchema,
  ];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Convert FAQ data for FAQAccordion component
  const faqItems = serviceFAQ.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. Service Hero */}
      <ServiceHero ctaTargetId="contact-form" />

      {/* 2. Value Propositions */}
      <ValuePropositions />

      {/* 3. Process Timeline */}
      <ProcessTimeline />

      {/* 4. Deliverables Grid */}
      <DeliverablesGrid />

      {/* 5. Budget Tiers / Project Types */}
      <BudgetTiers />

      {/* 6. Case Preview Block */}
      <CasePreview />

      {/* 7. Trust / Proof Block */}
      <TrustProof />

      {/* 8. FAQ Accordion */}
      {faqItems.length > 0 && (
        <section className="service-faq" aria-labelledby="faq-heading">
          <div className="service-faq__container">
            <h2 id="faq-heading" className="service-faq__heading">
              Często zadawane pytania
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      )}

      {/* 9. Lead Form */}
      <ServiceForm />
    </>
  );
}

export default InteriorDesignServicePage;
