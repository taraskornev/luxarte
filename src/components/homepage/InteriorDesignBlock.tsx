/**
 * ============================================================================
 * INTERIOR DESIGN BLOCK COMPONENT
 * ============================================================================
 * 
 * Split layout section promoting interior design services.
 * Features image, headline, description, bullet list, and CTA.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface InteriorDesignBlockProps {
  /** Section title */
  title?: string;
  /** Main headline */
  headline: string;
  /** Description paragraph */
  description: string;
  /** List of service deliverables */
  deliverables: readonly string[];
  /** CTA button */
  cta: {
    label: string;
    href: string;
  };
  /** Image configuration */
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /** Layout direction */
  imagePosition?: 'left' | 'right';
}

/**
 * InteriorDesignBlock Component
 * 
 * Premium split-layout section for interior design service promotion.
 */
export const InteriorDesignBlock: React.FC<InteriorDesignBlockProps> = ({
  title = 'Design',
  headline,
  description,
  deliverables,
  cta,
  image,
  imagePosition = 'left',
}) => {
  return (
    <section
      className={`interior-design-block interior-design-block--image-${imagePosition}`}
      aria-labelledby="interior-design-title"
    >
      <div className="interior-design-block__container">
        {/* Image Side */}
        <div className="interior-design-block__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            className="interior-design-block__image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Side */}
        <div className="interior-design-block__content">
          {title && (
            <span className="interior-design-block__label">{title}</span>
          )}
          <h2
            id="interior-design-title"
            className="interior-design-block__headline"
          >
            {headline}
          </h2>
          <p className="interior-design-block__description">{description}</p>

          {/* Deliverables List */}
          <ul className="interior-design-block__list" role="list">
            {deliverables.map((item, index) => (
              <li key={index} className="interior-design-block__list-item">
                <span className="interior-design-block__list-icon" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href={cta.href} className="interior-design-block__cta">
            {cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignBlock;
