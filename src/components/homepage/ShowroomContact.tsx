/**
 * ============================================================================
 * SHOWROOM CONTACT COMPONENT
 * ============================================================================
 * 
 * Combined showroom image and contact information block.
 * Final section before footer.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface ShowroomLocation {
  name: string;
  location?: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  mapUrl?: string;
}

export interface ShowroomContactProps {
  /** Section title */
  title?: string;
  /** Subtitle */
  subtitle?: string;
  /** Showroom image */
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /** Array of locations (max 2) */
  locations: readonly ShowroomLocation[];
  /** CTA button */
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * ShowroomContact Component
 * 
 * Split layout with showroom image and contact information.
 */
export const ShowroomContact: React.FC<ShowroomContactProps> = ({
  title = 'Odwiedź nas',
  subtitle,
  image,
  locations,
  cta,
}) => {
  return (
    <section
      className="showroom-contact"
      aria-labelledby="showroom-contact-title"
    >
      <div className="showroom-contact__container">
        {/* Image Side */}
        <div className="showroom-contact__media">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            className="showroom-contact__image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Side */}
        <div className="showroom-contact__content">
          <h2 id="showroom-contact-title" className="showroom-contact__title">
            {title}
          </h2>
          {subtitle && (
            <p className="showroom-contact__subtitle">{subtitle}</p>
          )}

          <div className="showroom-contact__locations">
            {locations.map((location, index) => (
              <address
                key={index}
                className="showroom-contact__location"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <strong
                  className="showroom-contact__location-name"
                  itemProp="name"
                >
                  {location.name}
                </strong>
                {location.location && (
                  <span className="showroom-contact__location-detail">
                    {location.location}
                  </span>
                )}
                <span
                  className="showroom-contact__location-address"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <span itemProp="streetAddress">{location.street}</span>
                  <br />
                  <span itemProp="addressLocality">{location.city}</span>
                </span>
                <a
                  href={`tel:${location.phone.replace(/\s/g, '')}`}
                  className="showroom-contact__phone"
                  itemProp="telephone"
                >
                  {location.phone}
                </a>
                <a
                  href={`mailto:${location.email}`}
                  className="showroom-contact__email"
                  itemProp="email"
                >
                  {location.email}
                </a>
                {location.mapUrl && (
                  <a
                    href={location.mapUrl}
                    className="showroom-contact__map-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zobacz na mapie
                  </a>
                )}
              </address>
            ))}
          </div>

          {cta && (
            <a href={cta.href} className="showroom-contact__cta">
              {cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowroomContact;
