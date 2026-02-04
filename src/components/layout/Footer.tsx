/**
 * ============================================================================
 * FOOTER COMPONENT
 * ============================================================================
 * 
 * Site footer with:
 * - Brand block with logo
 * - Showroom/contact information
 * - Navigation columns
 * - Legal links
 * - Social links placeholders
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';
import {
  BRAND_ASSETS,
  CONTACT_INFO,
  FOOTER_NAV_CATEGORIES,
  FOOTER_NAV_COMPANY,
  FOOTER_NAV_LEGAL,
  SOCIAL_LINKS,
} from '../../config/navigation';

// ============================================================================
// Types
// ============================================================================

interface FooterProps {
  className?: string;
}

// ============================================================================
// Social Icon Component
// ============================================================================

function SocialIcon({ platform }: { platform: string }) {
  // Simple icon paths for common platforms
  const icons: Record<string, React.ReactNode> = {
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    pinterest: (
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  };

  return (
    <svg
      className="footer__social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[platform] || null}
    </svg>
  );
}

// ============================================================================
// Component
// ============================================================================

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Filter social links that have URLs configured
  const activeSocialLinks = SOCIAL_LINKS.filter(link => link.href);

  return (
    <footer className={`footer ${className}`} role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__grid">
            {/* Brand & Contact Block */}
            <div className="footer__brand">
              {/* Logo */}
              <div className="footer__logo">
                <a href="/" aria-label="LuxArte - Strona główna">
                  <Image
                    src={BRAND_ASSETS.logo.src}
                    alt={BRAND_ASSETS.logo.alt}
                    className="footer__logo-image"
                    width={BRAND_ASSETS.logo.width}
                    height={BRAND_ASSETS.logo.height}
                  />
                </a>
              </div>

              {/* Tagline */}
              <p className="footer__tagline">{BRAND_ASSETS.tagline}</p>

              {/* Contact Info */}
              <address className="footer__contact-info">
                <span className="footer__contact-line">
                  {CONTACT_INFO.address.street}
                </span>
                <span className="footer__contact-line">
                  {CONTACT_INFO.address.postalCode} {CONTACT_INFO.address.city}
                </span>
                <span className="footer__contact-line">
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="footer__contact-link">
                    {CONTACT_INFO.phone}
                  </a>
                </span>
                <span className="footer__contact-line">
                  <a href={`mailto:${CONTACT_INFO.email}`} className="footer__contact-link">
                    {CONTACT_INFO.email}
                  </a>
                </span>
              </address>

              {/* Social Links */}
              {activeSocialLinks.length > 0 && (
                <div className="footer__social">
                  {activeSocialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      className="footer__social-link"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SocialIcon platform={social.icon} />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Column */}
            <nav className="footer__nav-column" aria-label="Kategorie">
              <h3 className="footer__nav-title">Kategorie</h3>
              <ul className="footer__nav-list">
                {FOOTER_NAV_CATEGORIES.map((item) => (
                  <li key={item.id} className="footer__nav-item">
                    <a href={item.href} className="footer__nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Company Column */}
            <nav className="footer__nav-column" aria-label="Firma">
              <h3 className="footer__nav-title">Firma</h3>
              <ul className="footer__nav-list">
                {FOOTER_NAV_COMPANY.map((item) => (
                  <li key={item.id} className="footer__nav-item">
                    <a href={item.href} className="footer__nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Showroom Hours Column */}
            <div className="footer__nav-column">
              <h3 className="footer__nav-title">Showroom</h3>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <span className="footer__nav-link">{CONTACT_INFO.hours.weekdays}</span>
                </li>
                <li className="footer__nav-item">
                  <span className="footer__nav-link">{CONTACT_INFO.hours.saturday}</span>
                </li>
                <li className="footer__nav-item">
                  <span className="footer__nav-link">{CONTACT_INFO.hours.sunday}</span>
                </li>
              </ul>

              {/* Legal Links */}
              <nav aria-label="Linki prawne" style={{ marginTop: 'var(--space-8)' }}>
                <ul className="footer__nav-list">
                  {FOOTER_NAV_LEGAL.map((item) => (
                    <li key={item.id} className="footer__nav-item">
                      <a href={item.href} className="footer__nav-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © {currentYear} {BRAND_ASSETS.companyName}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Footer;
