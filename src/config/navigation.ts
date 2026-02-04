/**
 * ============================================================================
 * LUXARTE NAVIGATION CONFIGURATION
 * ============================================================================
 * 
 * Single source of truth for all navigation throughout the site.
 * This config drives header, footer, and mobile navigation components.
 * 
 * Features:
 * - Dropdown capability for Brands and Categories
 * - Config-driven navigation items
 * - Social links placeholders
 * - Contact/showroom data
 * 
 * @version 1.0.0
 */

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
}

// ============================================================================
// Primary Navigation
// ============================================================================

export const PRIMARY_NAV: NavItem[] = [
  {
    id: 'brands',
    label: 'Marki',
    labelEn: 'Brands',
    href: '/brands',
    hasDropdown: true,
    children: [], // Populated dynamically from CMS/API
  },
  {
    id: 'categories',
    label: 'Kategorie',
    labelEn: 'Categories',
    href: '/categories',
    hasDropdown: true,
    children: [], // Populated dynamically from CMS/API
  },
  {
    id: 'interior-design',
    label: 'Projektowanie Wnętrz',
    labelEn: 'Interior Design',
    href: '/interior-design-service',
  },
  {
    id: 'projects',
    label: 'Realizacje',
    labelEn: 'Projects',
    href: '/projects',
  },
  {
    id: 'outlet',
    label: 'Outlet',
    labelEn: 'Outlet',
    href: '/outlet',
  },
  {
    id: 'showroom',
    label: 'Showroom',
    labelEn: 'Showroom',
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
  { id: 'sofas', label: 'Sofy', href: '/categories/sofas' },
  { id: 'kitchens', label: 'Kuchnie', href: '/categories/kitchens' },
  { id: 'wardrobes', label: 'Garderoby', href: '/categories/wardrobes' },
  { id: 'bathrooms', label: 'Łazienki', href: '/categories/bathrooms' },
  { id: 'chandeliers', label: 'Żyrandole', href: '/categories/chandeliers' },
  { id: 'garden', label: 'Meble ogrodowe', href: '/categories/garden-furniture' },
];

export const FOOTER_NAV_COMPANY: NavItem[] = [
  { id: 'about', label: 'O nas', href: '/#about' },
  { id: 'showroom', label: 'Showroom', href: '/showroom' },
  { id: 'projects', label: 'Realizacje', href: '/projects' },
  { id: 'knowledge-base', label: 'Baza Wiedzy', href: '/knowledge-base' },
];

export const FOOTER_NAV_LEGAL: NavItem[] = [
  { id: 'privacy', label: 'Polityka Prywatności', href: '/privacy-policy' },
  { id: 'terms', label: 'Regulamin', href: '/terms-of-service' },
  { id: 'cookies', label: 'Polityka Cookies', href: '/cookie-policy' },
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
};

// ============================================================================
// Brand Assets
// ============================================================================

export const BRAND_ASSETS = {
  logo: {
    src: 'https://www.luxarte.pl/wp-content/uploads/2021/11/Lux-Arte-Logo-2021-2.png',
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
  { id: 'sofas', label: 'Sofy', href: '/categories/sofas' },
  { id: 'kitchens', label: 'Kuchnie', href: '/categories/kitchens' },
  { id: 'wardrobes', label: 'Garderoby', href: '/categories/wardrobes' },
  { id: 'bathrooms', label: 'Łazienki', href: '/categories/bathrooms' },
  { id: 'chandeliers', label: 'Żyrandole', href: '/categories/chandeliers' },
  { id: 'garden', label: 'Meble ogrodowe', href: '/categories/garden-furniture' },
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
