/**
 * ============================================================================
 * BRAND PAGE CONTENT - LUXARTE
 * ============================================================================
 *
 * Client component for brand detail page with interactive FAQ accordion.
 *
 * @version 1.0.0
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Brand } from '@/data/brands-data';
import { brandCategoryLabels } from '@/data/brands-data';

// ============================================================================
// Types
// ============================================================================

interface BrandPageContentProps {
  brand: Brand;
}

// ============================================================================
// FAQ Accordion Component
// ============================================================================

function FAQAccordion({ faq }: { faq: Brand['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faq || faq.length === 0) return null;

  return (
    <section className="brand-faq" aria-labelledby="brand-faq-title">
      <div className="brand-faq__container">
        <h2 id="brand-faq-title" className="brand-faq__title">
          Często zadawane pytania
        </h2>
        <div className="faq-accordion" role="region" aria-label="FAQ">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`faq-accordion__item ${openIndex === index ? 'faq-accordion__item--open' : ''}`}
            >
              <button
                type="button"
                className="faq-accordion__trigger"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="faq-accordion__question">{item.question}</span>
                <svg
                  className="faq-accordion__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className="faq-accordion__panel"
                hidden={openIndex !== index}
              >
                <div className="faq-accordion__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function BrandPageContent({ brand }: BrandPageContentProps) {
  return (
    <article className="brand-page" itemScope itemType="https://schema.org/Brand">
      {/* Hero Section */}
      <section className="brand-hero" aria-labelledby="brand-title">
        <div className="brand-hero__container">
          <nav className="brand-hero__breadcrumb" aria-label="Ścieżka nawigacji">
            <ol className="breadcrumb">
              <li className="breadcrumb__item">
                <a href="/" className="breadcrumb__link">Strona główna</a>
              </li>
              <li className="breadcrumb__separator" aria-hidden="true">/</li>
              <li className="breadcrumb__item">
                <a href="/brands" className="breadcrumb__link">Marki</a>
              </li>
              <li className="breadcrumb__separator" aria-hidden="true">/</li>
              <li className="breadcrumb__item breadcrumb__item--current">
                <span aria-current="page">{brand.name}</span>
              </li>
            </ol>
          </nav>

          <h1 id="brand-title" className="brand-hero__title" itemProp="name">
            {brand.name}
          </h1>
          <p className="brand-hero__tagline" itemProp="description">
            {brand.shortDescription}
          </p>

          {brand.logo && (
            <figure className="brand-hero__logo">
              <Image
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                className="brand-hero__logo-image"
                width={200}
                height={80}
              />
            </figure>
          )}
        </div>

        <figure className="brand-hero__image">
          <Image
            src={brand.image}
            alt={`${brand.name} - kolekcja mebli`}
            className="brand-hero__image-main"
            width={800}
            height={600}
            priority
          />
        </figure>
      </section>

      {/* About Section */}
      <section className="brand-about" aria-labelledby="brand-about-title">
        <div className="brand-about__container">
          <div className="brand-about__content">
            <h2 id="brand-about-title" className="brand-about__title">
              O marce {brand.name}
            </h2>
            <p className="brand-about__description">{brand.fullDescription}</p>
            <p className="brand-about__heritage">{brand.heritage}</p>
          </div>

          <aside className="brand-about__sidebar">
            <h3 className="brand-about__sidebar-title">Styl i materiały</h3>
            <ul className="materials-list">
              {brand.materialsAndStyle.map((item, index) => (
                <li key={index} className="materials-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Categories Section */}
      {brand.productCategories.length > 0 && (
        <section className="brand-categories" aria-labelledby="brand-categories-title">
          <div className="brand-categories__container">
            <h2 id="brand-categories-title" className="brand-categories__title">
              Kategorie produktów {brand.name}
            </h2>
            <div className="category-chips">
              {brand.productCategories.map((category) => (
                <a
                  key={category.id}
                  href={`/produkty/${category.slug}`}
                  className="category-chips__chip category-chips__chip--prominent"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products Section (placeholder) */}
      {brand.featuredProducts && brand.featuredProducts.length > 0 && (
        <section className="brand-products" aria-labelledby="brand-products-title">
          <div className="brand-products__container">
            <h2 id="brand-products-title" className="brand-products__title">
              Wybrane produkty {brand.name}
            </h2>
            <div className="brand-products__grid">
              {brand.featuredProducts.slice(0, 4).map((product) => (
                <article key={product.id} className="product-card">
                  <a href={`/produkty/${product.slug}`} className="product-card__link">
                    <figure className="product-card__media">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="product-card__image"
                        width={400}
                        height={300}
                      />
                    </figure>
                    <h3 className="product-card__title">{product.name}</h3>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <FAQAccordion faq={brand.faq} />

      {/* CTA Section */}
      <section className="brand-cta" aria-labelledby="brand-cta-title">
        <div className="brand-cta__container">
          <h2 id="brand-cta-title" className="brand-cta__title">
            Zainteresowany marką {brand.name}?
          </h2>
          <p className="brand-cta__text">
            Odwiedź nasz showroom i doświadcz jakości {brand.name} osobiście.
            Nasi konsultanci pomogą Ci w doborze idealnych mebli do Twojego wnętrza.
          </p>
          <div className="brand-cta__buttons">
            <a href={`/showroom?brand=${brand.slug}&intent=visit`} className="brand-cta__btn brand-cta__btn--primary">
              Umów wizytę
            </a>
            <a href={`/showroom?brand=${brand.slug}`} className="brand-cta__btn brand-cta__btn--secondary">
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      </section>

      {/* Brand Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Brand',
            name: brand.name,
            description: brand.fullDescription,
            image: brand.image,
            url: `https://www.luxarte.pl/brands/${brand.slug}`,
            ...(brand.externalUrl && { sameAs: brand.externalUrl }),
          }),
        }}
      />
    </article>
  );
}
