'use client';

/**
 * ============================================================================
 * SERVICE HERO COMPONENT
 * ============================================================================
 *
 * Hero section for the Interior Design Service page.
 * Features: H1 title, authority paragraph, hero image, primary CTA.
 *
 * @component ServiceHero
 */

import Image from 'next/image';
import { serviceHero } from '@/data/service-data';

export interface ServiceHeroProps {
  readonly ctaTargetId?: string;
}

/**
 * ServiceHero - Premium hero for service page
 */
export function ServiceHero({
  ctaTargetId = 'contact-form',
}: ServiceHeroProps): JSX.Element {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(ctaTargetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="service-hero" aria-labelledby="service-title">
      {/* Breadcrumb Navigation */}
      <nav className="service-hero__breadcrumb" aria-label="Nawigacja okruszkowa">
        <ol
          className="service-hero__breadcrumb-list"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            className="service-hero__breadcrumb-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <a href="/" itemProp="item">
              <span itemProp="name">LuxArte</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li
            className="service-hero__breadcrumb-item service-hero__breadcrumb-item--current"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            aria-current="page"
          >
            <span itemProp="name">Projektowanie Wnętrz</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Hero Content */}
      <div className="service-hero__container">
        <div className="service-hero__content">
          <p className="service-hero__eyebrow">{serviceHero.subtitle}</p>
          <h1 id="service-title" className="service-hero__title">
            {serviceHero.title}
          </h1>
          <p className="service-hero__description">{serviceHero.description}</p>
          <a
            href={`#${ctaTargetId}`}
            className="service-hero__cta"
            onClick={handleCtaClick}
          >
            {serviceHero.ctaText}
          </a>
        </div>

        <div className="service-hero__image-wrapper">
          <Image
            src={serviceHero.image.src}
            alt={serviceHero.image.alt}
            className="service-hero__image"
            width={serviceHero.image.width}
            height={serviceHero.image.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
