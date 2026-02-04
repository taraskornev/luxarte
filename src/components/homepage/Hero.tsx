/**
 * ============================================================================
 * HERO SECTION COMPONENT
 * ============================================================================
 * 
 * Large editorial hero with H1 brand positioning, supporting copy,
 * two CTAs, and a preloaded hero image.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface HeroProps {
  /** Main headline (H1) - only one per page */
  headline: string;
  /** Supporting paragraph text */
  subheadline: string;
  /** Primary CTA button */
  primaryCta: {
    label: string;
    href: string;
  };
  /** Secondary CTA button */
  secondaryCta: {
    label: string;
    href: string;
  };
  /** Hero background image */
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /** Optional: preload hint for LCP optimization */
  preload?: boolean;
}

/**
 * Hero Section Component
 * 
 * Premium editorial hero for the homepage.
 * Features large whitespace, strong typography hierarchy, and authority positioning.
 */
export const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  image,
  preload = true,
}) => {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      {/* Hero Image with overlay */}
      <div className="hero__media">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="hero__image"
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__inner">
          <h1 id="hero-headline" className="hero__headline">
            {headline}
          </h1>
          <p className="hero__subheadline">{subheadline}</p>
          <div className="hero__actions">
            <a href={primaryCta.href} className="hero__cta hero__cta--primary">
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="hero__cta hero__cta--secondary"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/* Preload link hint (rendered in head via parent) */}
      {preload && (
        <link
          rel="preload"
          as="image"
          href={image.src}
          // @ts-ignore - fetchpriority is valid but not in types
          fetchpriority="high"
        />
      )}
    </section>
  );
};

/**
 * Generate preload link for hero image (use in document head)
 */
export function generateHeroPreloadLink(imageSrc: string): string {
  return `<link rel="preload" as="image" href="${imageSrc}" fetchpriority="high" />`;
}

export default Hero;
