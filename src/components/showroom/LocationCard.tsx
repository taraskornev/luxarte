/**
 * ============================================================================
 * LOCATION CARD COMPONENT
 * ============================================================================
 *
 * Displays a single showroom/location with address, phone, email, hours.
 *
 * @version 1.0.0
 */

import type { ShowroomLocation } from '@/data/showroom-data';
import { formatOpeningHours, dayTranslations } from '@/data/showroom-data';

interface LocationCardProps {
  readonly location: ShowroomLocation;
}

export default function LocationCard({ location }: LocationCardProps) {
  const hoursDisplay = formatOpeningHours(location.openingHours);

  return (
    <article className="location-card">
      {/* Header */}
      <header className="location-card__header">
        <h3 className="location-card__name">{location.name}</h3>
        {location.type === 'showroom' && (
          <span className="location-card__badge">Showroom</span>
        )}
        {location.type === 'project-department' && (
          <span className="location-card__badge location-card__badge--alt">
            Project Department
          </span>
        )}
      </header>

      {/* Address */}
      <address className="location-card__address">
        {location.address.buildingNote && (
          <span className="location-card__building">
            {location.address.buildingNote}
          </span>
        )}
        <span className="location-card__street">
          {location.address.streetAddress}
        </span>
        <span className="location-card__city">
          {location.address.postalCode} {location.address.addressLocality}
        </span>
      </address>

      {/* Contact Actions */}
      <div className="location-card__contact">
        <a
          href={`tel:${location.phone.replace(/\s/g, '')}`}
          className="location-card__action"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{location.phone}</span>
        </a>

        <a
          href={`mailto:${location.email}`}
          className="location-card__action"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>{location.email}</span>
        </a>
      </div>

      {/* Opening Hours */}
      <div className="location-card__hours">
        <h4 className="location-card__hours-label">Godziny otwarcia</h4>
        <p className="location-card__hours-value">{hoursDisplay}</p>
      </div>

      {/* Map Link */}
      <a
        href={location.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-card__map-link"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Zobacz na mapie
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </article>
  );
}
