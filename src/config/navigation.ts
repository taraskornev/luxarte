/**
 * ============================================================================
 * LUXARTE NAVIGATION CONFIGURATION
 * ============================================================================
 * 
 * Single source of truth for all navigation throughout the site.
 * This config drives header, footer, and mobile navigation components.
 * 
 * MENU ORDER (per spec):
 * MARKI | KATEGORIE | BENTLEY HOME CINEMA | OUTLET | AKTUALNOŚCI | O NAS | KONTAKT | EN | PL
 * 
 * @version 2.0.0
 */

import { mediaUrl } from '@/lib/buildMode';

// ============================================================================
// Types
// ============================================================================

export interface NavItem {
  id: string;
  label: string;
  labelEn?: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavItem[];
  isExternal?: boolean;
  icon?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  href: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  companyName: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  hoursEn?: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

// ============================================================================
// Primary Navigation — exact order per spec
// ============================================================================

export const PRIMARY_NAV: NavItem[] = [
  {
    id: 'gallery',
    label: 'GALERIA',
    labelEn: 'GALLERY',
    href: '/gallery',
  },
  {
    id: 'bentley-home-cinema',
    label: 'BENTLEY\u00A0HOME CINEMA',
    labelEn: 'BENTLEY\u00A0HOME CINEMA',
    href: '/bentley-home-cinema',
  },
  {
    id: 'outlet',
    label: 'OUTLET',
    labelEn: 'OUTLET',
    href: '/outlet',
  },
  {
    id: 'aktualnosci',
    label: 'AKTUALNOŚCI',
    labelEn: 'NEWS',
    href: '/aktualnosci',
  },
  {
    id: 'o-nas',
    label: 'O NAS',
    labelEn: 'ABOUT US',
    href: '/o-nas',
  },
  {
    id: 'kontakt',
    label: 'KONTAKT',
    labelEn: 'CONTACT',
    href: '/showroom',
  },
];

// ============================================================================
// Secondary Navigation (Knowledge Base - shown in header if needed)
// ============================================================================

export const SECONDARY_NAV: NavItem[] = [
  {
    id: 'knowledge-base',
    label: 'Baza Wiedzy',
    labelEn: 'Knowledge Base',
    href: '/knowledge-base',
  },
];

// ============================================================================
// Footer Navigation Columns
// ============================================================================

export const FOOTER_NAV_CATEGORIES: NavItem[] = [
  { id: 'sofas', label: 'Sofy', labelEn: 'Sofas', href: '/categories/sofas' },
  { id: 'kitchens', label: 'Kuchnie', labelEn: 'Kitchens', href: '/categories/kitchens' },
  { id: 'wardrobes', label: 'Garderoby', labelEn: 'Wardrobes', href: '/categories/wardrobes' },
  { id: 'bathrooms', label: 'Łazienki', labelEn: 'Bathrooms', href: '/categories/bathrooms' },
  { id: 'chandeliers', label: 'Żyrandole', labelEn: 'Chandeliers', href: '/categories/chandeliers' },
  { id: 'garden', label: 'Meble ogrodowe', labelEn: 'Outdoor furniture', href: '/categories/garden-furniture' },
];

export const FOOTER_NAV_COMPANY: NavItem[] = [
  { id: 'about', label: 'O nas', labelEn: 'About us', href: '/#about' },
  { id: 'showroom', label: 'Showroom', href: '/showroom' },
  { id: 'projects', label: 'Realizacje', labelEn: 'Projects', href: '/projects' },
  { id: 'knowledge-base', label: 'Baza Wiedzy', labelEn: 'Knowledge Base', href: '/knowledge-base' },
];

export const FOOTER_NAV_LEGAL: NavItem[] = [
  { id: 'privacy', label: 'Polityka Prywatności', labelEn: 'Privacy Policy', href: '/privacy-policy' },
  { id: 'terms', label: 'Regulamin', labelEn: 'Terms of Service', href: '/terms-of-service' },
  { id: 'cookies', label: 'Polityka Cookies', labelEn: 'Cookie Policy', href: '/cookie-policy' },
];

// ============================================================================
// Social Links (placeholders - configure URLs when available)
// ============================================================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    platform: 'Facebook',
    href: '', // Configure: https://www.facebook.com/Luxarte1/
    icon: 'facebook',
    label: 'Facebook',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    href: '', // Configure: https://www.instagram.com/luxarte/
    icon: 'instagram',
    label: 'Instagram',
  },
  {
    id: 'pinterest',
    platform: 'Pinterest',
    href: '', // Configure when available
    icon: 'pinterest',
    label: 'Pinterest',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    href: '', // Configure when available
    icon: 'linkedin',
    label: 'LinkedIn',
  },
];

// ============================================================================
// Showroom / Contact Information
// ============================================================================

export const CONTACT_INFO: ContactInfo = {
  companyName: 'LuxArte',
  address: {
    street: 'ul. Przykładowa 123', // Update with actual address
    city: 'Warszawa',
    postalCode: '00-001',
    country: 'Polska',
  },
  phone: '+48 22 XXX XX XX', // Update with actual phone
  email: 'kontakt@luxarte.pl', // Update with actual email
  hours: {
    weekdays: 'Pon-Pt: 10:00 - 18:00',
    saturday: 'Sob: 10:00 - 14:00',
    sunday: 'Nd: Zamknięte',
  },
  hoursEn: {
    weekdays: 'Mon-Fri: 10:00 - 18:00',
    saturday: 'Sat: 10:00 - 14:00',
    sunday: 'Sun: Closed',
  },
};

// ============================================================================
// Brand Assets — LOCAL images only
// ============================================================================

export const BRAND_ASSETS = {
  logo: {
    src: mediaUrl('/media/luxarte-logo.png'),
    alt: 'LuxArte - Fashion for Home',
    width: 346,
    height: 120,
  },
  tagline: 'Fashion for Home',
  companyName: 'LuxArte',
};

// ============================================================================
// Dropdown Items Placeholder (for Brands & Categories)
// ============================================================================

// These are populated from CMS/API but defined here for structure
export const DROPDOWN_BRANDS_PLACEHOLDER: NavItem[] = [
  { id: 'versace', label: 'Versace Home', href: '/brands/versace-home' },
  { id: 'bentley', label: 'Bentley Home', href: '/brands/bentley-home' },
  { id: 'fendi', label: 'Fendi Casa', href: '/brands/fendi-casa' },
  // More items loaded from CMS
];

export const DROPDOWN_CATEGORIES_PLACEHOLDER: NavItem[] = [
  { id: 'sofas', label: 'Sofy', labelEn: 'Sofas', href: '/categories/sofas' },
  { id: 'kitchens', label: 'Kuchnie', labelEn: 'Kitchens', href: '/categories/kitchens' },
  { id: 'wardrobes', label: 'Garderoby', labelEn: 'Wardrobes', href: '/categories/wardrobes' },
  { id: 'bathrooms', label: 'Łazienki', labelEn: 'Bathrooms', href: '/categories/bathrooms' },
  { id: 'chandeliers', label: 'Żyrandole', labelEn: 'Chandeliers', href: '/categories/chandeliers' },
  { id: 'garden', label: 'Meble ogrodowe', labelEn: 'Outdoor furniture', href: '/categories/garden-furniture' },
];

// ============================================================================
// Export all
// ============================================================================

export default {
  PRIMARY_NAV,
  SECONDARY_NAV,
  FOOTER_NAV_CATEGORIES,
  FOOTER_NAV_COMPANY,
  FOOTER_NAV_LEGAL,
  SOCIAL_LINKS,
  CONTACT_INFO,
  BRAND_ASSETS,
};
