/**
 * ============================================================================
 * OUTLET HIGHLIGHT COMPONENT
 * ============================================================================
 * 
 * Editorial block promoting the outlet section with discounted items.
 * 
 * @version 1.0.0
 */

import React from 'react';

export interface OutletHighlightProps {
  /** Section label */
  label?: string;
  /** Main headline */
  headline: string;
  /** Description text */
  description: string;
  /** Discount highlight text */
  highlight?: string;
  /** CTA configuration */
  cta: {
    label: string;
    href: string;
  };
  /** Optional background image */
  backgroundImage?: string;
}

/**
 * OutletHighlight Component
 * 
 * Premium editorial block for outlet/sale promotion.
 */
export const OutletHighlight: React.FC<OutletHighlightProps> = ({
  label = 'Outlet',
  headline,
  description,
  highlight,
  cta,
  backgroundImage,
}) => {
  return (
    <section
      className="outlet-highlight"
      aria-labelledby="outlet-highlight-title"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="outlet-highlight__container">
        <div className="outlet-highlight__content">
          {label && (
            <span className="outlet-highlight__label">{label}</span>
          )}
          <h2 id="outlet-highlight-title" className="outlet-highlight__headline">
            {headline}
          </h2>
          <p className="outlet-highlight__description">{description}</p>
          {highlight && (
            <p className="outlet-highlight__highlight">{highlight}</p>
          )}
          <a href={cta.href} className="outlet-highlight__cta">
            {cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default OutletHighlight;
