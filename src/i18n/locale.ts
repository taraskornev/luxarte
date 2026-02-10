/**
 * ============================================================================
 * LUXARTE I18N — Locale Types & Route Mapping
 * ============================================================================
 */

export type Locale = 'pl' | 'en';

export const defaultLocale: Locale = 'pl';
export const locales: Locale[] = ['pl', 'en'];

/**
 * Route mapping PL ↔ EN
 * Polish routes map to English equivalents under /en/ prefix
 */
export const routeMap: Record<string, string> = {
  // PL slug → EN slug (without prefix)
  '/': '/en',
  '/o-nas': '/en/about',
  '/kontakt': '/en/contact',
  '/oferta': '/en/services',
  '/aktualnosci': '/en/news',
  '/nasze-marki': '/en/our-brands',
  '/design': '/en/design',
  '/gallery': '/en/gallery',
  '/outlet': '/en/outlet',
  '/bentley-home-cinema': '/en/bentley-home-cinema',
  '/bentley-home-cinema/rezerwacja': '/en/bentley-home-cinema/reservation',
};

/**
 * Reverse route mapping EN → PL
 */
export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([pl, en]) => [en, pl])
);

/**
 * Get the equivalent route in the other locale
 */
export function getAlternateRoute(currentPath: string, targetLocale: Locale): string {
  if (targetLocale === 'en') {
    // Check exact match first
    if (routeMap[currentPath]) return routeMap[currentPath];
    
    // Dynamic routes: /brand/X → /en/brand/X
    if (currentPath.startsWith('/brand/')) return `/en${currentPath}`;
    if (currentPath.startsWith('/products/')) return `/en${currentPath}`;
    if (currentPath.startsWith('/aktualnosci/')) {
      const slug = currentPath.replace('/aktualnosci/', '');
      return `/en/news/${slug}`;
    }
    if (currentPath.startsWith('/outlet/')) return `/en${currentPath}`;
    
    // Quick-ship pages have no English equivalent — fall back to gallery
    if (currentPath.startsWith('/quick-ship-')) return '/en/gallery';
    
    return `/en${currentPath}`;
  }
  
  // EN → PL
  if (reverseRouteMap[currentPath]) return reverseRouteMap[currentPath];
  
  // Strip /en prefix and map dynamic routes
  const withoutEn = currentPath.replace(/^\/en/, '');
  if (withoutEn.startsWith('/news/')) {
    const slug = withoutEn.replace('/news/', '');
    return `/aktualnosci/${slug}`;
  }
  if (withoutEn === '/about') return '/o-nas';
  if (withoutEn === '/contact') return '/kontakt';
  if (withoutEn === '/services') return '/oferta';
  if (withoutEn === '/our-brands') return '/nasze-marki';
  if (withoutEn.startsWith('/bentley-home-cinema/reservation')) return '/bentley-home-cinema/rezerwacja';
  
  return withoutEn || '/';
}

/**
 * Detect locale from pathname
 */
export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'pl';
}
