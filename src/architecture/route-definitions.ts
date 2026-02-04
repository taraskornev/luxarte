/**
 * LuxArte Route Definitions
 * 
 * This file defines all routes for the new LuxArte website architecture.
 * Use these definitions for:
 * - Router configuration (Next.js, React Router, etc.)
 * - Static site generation
 * - Sitemap generation
 * - Navigation components
 * 
 * @version 1.0.0
 * @generated 2025-01-01
 */

// ============================================================================
// Type Definitions
// ============================================================================

export type RouteType = 
  | 'homepage'
  | 'collection'
  | 'category'
  | 'brand'
  | 'product'
  | 'service'
  | 'page'
  | 'article'
  | 'legal';

export type Locale = 'pl-PL' | 'en-US';

export interface RouteDefinition {
  /** Route path pattern */
  path: string;
  /** Unique route name for programmatic access */
  name: string;
  /** Route type for layout selection */
  type: RouteType;
  /** Polish title */
  title: string;
  /** English title */
  titleEn?: string;
  /** Whether route has dynamic segments */
  dynamic: boolean;
  /** Parameter names for dynamic routes */
  params?: string[];
  /** Parent route name for breadcrumbs */
  parent?: string;
  /** SEO priority (0.0 - 1.0) */
  priority: number;
  /** Update frequency hint */
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface NavigationItem {
  label: string;
  labelEn?: string;
  path: string;
  routeName: string;
  children?: NavigationItem[];
  icon?: string;
}

// ============================================================================
// Static Routes
// ============================================================================

export const ROUTES: Record<string, RouteDefinition> = {
  // Homepage
  HOME: {
    path: '/',
    name: 'home',
    type: 'homepage',
    title: 'LuxArte - Fashion for Home',
    dynamic: false,
    priority: 1.0,
    changefreq: 'weekly',
  },

  // Brands
  BRANDS_INDEX: {
    path: '/brands',
    name: 'brands',
    type: 'collection',
    title: 'Marki',
    titleEn: 'Brands',
    dynamic: false,
    priority: 0.9,
    changefreq: 'monthly',
  },
  BRAND_DETAIL: {
    path: '/brands/:brandSlug',
    name: 'brand-detail',
    type: 'brand',
    title: 'Marka',
    titleEn: 'Brand',
    dynamic: true,
    params: ['brandSlug'],
    parent: 'brands',
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Categories
  CATEGORIES_INDEX: {
    path: '/categories',
    name: 'categories',
    type: 'collection',
    title: 'Kategorie',
    titleEn: 'Categories',
    dynamic: false,
    priority: 0.9,
    changefreq: 'monthly',
  },
  CATEGORY_DETAIL: {
    path: '/categories/:categorySlug',
    name: 'category-detail',
    type: 'category',
    title: 'Kategoria',
    titleEn: 'Category',
    dynamic: true,
    params: ['categorySlug'],
    parent: 'categories',
    priority: 0.8,
    changefreq: 'weekly',
  },
  PRODUCT_DETAIL: {
    path: '/categories/:categorySlug/:productSlug',
    name: 'product-detail',
    type: 'product',
    title: 'Produkt',
    titleEn: 'Product',
    dynamic: true,
    params: ['categorySlug', 'productSlug'],
    parent: 'category-detail',
    priority: 0.7,
    changefreq: 'weekly',
  },

  // Services
  INTERIOR_DESIGN: {
    path: '/interior-design-service',
    name: 'interior-design',
    type: 'service',
    title: 'Projektowanie Wnętrz',
    titleEn: 'Interior Design Service',
    dynamic: false,
    priority: 0.9,
    changefreq: 'monthly',
  },

  // Projects/Portfolio
  PROJECTS_INDEX: {
    path: '/projects',
    name: 'projects',
    type: 'collection',
    title: 'Realizacje',
    titleEn: 'Projects',
    dynamic: false,
    priority: 0.8,
    changefreq: 'monthly',
  },
  PROJECT_DETAIL: {
    path: '/projects/:projectSlug',
    name: 'project-detail',
    type: 'page',
    title: 'Realizacja',
    titleEn: 'Project',
    dynamic: true,
    params: ['projectSlug'],
    parent: 'projects',
    priority: 0.7,
    changefreq: 'monthly',
  },

  // Outlet
  OUTLET: {
    path: '/outlet',
    name: 'outlet',
    type: 'page',
    title: 'Outlet',
    dynamic: false,
    priority: 0.7,
    changefreq: 'weekly',
  },

  // Showroom / Contact
  SHOWROOM: {
    path: '/showroom',
    name: 'showroom',
    type: 'page',
    title: 'Showroom',
    dynamic: false,
    priority: 0.8,
    changefreq: 'monthly',
  },

  // Knowledge Base / Blog
  KNOWLEDGE_BASE_INDEX: {
    path: '/knowledge-base',
    name: 'knowledge-base',
    type: 'collection',
    title: 'Baza Wiedzy',
    titleEn: 'Knowledge Base',
    dynamic: false,
    priority: 0.7,
    changefreq: 'weekly',
  },
  KNOWLEDGE_BASE_ARTICLE: {
    path: '/knowledge-base/:articleSlug',
    name: 'article-detail',
    type: 'article',
    title: 'Artykuł',
    titleEn: 'Article',
    dynamic: true,
    params: ['articleSlug'],
    parent: 'knowledge-base',
    priority: 0.6,
    changefreq: 'monthly',
  },

  // Legal
  PRIVACY_POLICY: {
    path: '/privacy-policy',
    name: 'privacy-policy',
    type: 'legal',
    title: 'Polityka Prywatności',
    titleEn: 'Privacy Policy',
    dynamic: false,
    priority: 0.3,
    changefreq: 'yearly',
  },
  TERMS_OF_SERVICE: {
    path: '/terms-of-service',
    name: 'terms-of-service',
    type: 'legal',
    title: 'Regulamin',
    titleEn: 'Terms of Service',
    dynamic: false,
    priority: 0.3,
    changefreq: 'yearly',
  },
  COOKIE_POLICY: {
    path: '/cookie-policy',
    name: 'cookie-policy',
    type: 'legal',
    title: 'Polityka Cookies',
    titleEn: 'Cookie Policy',
    dynamic: false,
    priority: 0.3,
    changefreq: 'yearly',
  },
} as const;

// ============================================================================
// Navigation Structure
// ============================================================================

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  {
    label: 'Marki',
    labelEn: 'Brands',
    path: '/brands',
    routeName: 'brands',
  },
  {
    label: 'Kategorie',
    labelEn: 'Categories',
    path: '/categories',
    routeName: 'categories',
    children: [
      { label: 'Sofy', labelEn: 'Sofas', path: '/categories/sofas', routeName: 'category-sofas' },
      { label: 'Kuchnie', labelEn: 'Kitchens', path: '/categories/kitchens', routeName: 'category-kitchens' },
      { label: 'Garderoby', labelEn: 'Wardrobes', path: '/categories/wardrobes', routeName: 'category-wardrobes' },
      { label: 'Łazienki', labelEn: 'Bathrooms', path: '/categories/bathrooms', routeName: 'category-bathrooms' },
      { label: 'Żyrandole', labelEn: 'Chandeliers', path: '/categories/chandeliers', routeName: 'category-chandeliers' },
      { label: 'Meble ogrodowe', labelEn: 'Garden Furniture', path: '/categories/garden-furniture', routeName: 'category-garden' },
    ],
  },
  {
    label: 'Projektowanie Wnętrz',
    labelEn: 'Interior Design',
    path: '/interior-design-service',
    routeName: 'interior-design',
  },
  {
    label: 'Realizacje',
    labelEn: 'Projects',
    path: '/projects',
    routeName: 'projects',
  },
  {
    label: 'Outlet',
    labelEn: 'Outlet',
    path: '/outlet',
    routeName: 'outlet',
  },
  {
    label: 'Showroom',
    labelEn: 'Showroom',
    path: '/showroom',
    routeName: 'showroom',
  },
];

export const FOOTER_NAVIGATION: NavigationItem[] = [
  {
    label: 'Baza Wiedzy',
    labelEn: 'Knowledge Base',
    path: '/knowledge-base',
    routeName: 'knowledge-base',
  },
  {
    label: 'Showroom',
    labelEn: 'Showroom',
    path: '/showroom',
    routeName: 'showroom',
  },
  {
    label: 'Polityka Prywatności',
    labelEn: 'Privacy Policy',
    path: '/privacy-policy',
    routeName: 'privacy-policy',
  },
  {
    label: 'Regulamin',
    labelEn: 'Terms of Service',
    path: '/terms-of-service',
    routeName: 'terms-of-service',
  },
];

// ============================================================================
// Category Slugs (PL → EN mapping)
// ============================================================================

export const CATEGORY_SLUGS = {
  sofas: { pl: 'sofy', en: 'sofas', title: 'Sofy', titleEn: 'Sofas' },
  kitchens: { pl: 'kuchnie', en: 'kitchens', title: 'Kuchnie', titleEn: 'Kitchens' },
  wardrobes: { pl: 'garderoby', en: 'wardrobes', title: 'Garderoby', titleEn: 'Wardrobes' },
  bathrooms: { pl: 'lazienki', en: 'bathrooms', title: 'Łazienki', titleEn: 'Bathrooms' },
  chandeliers: { pl: 'zyrandole', en: 'chandeliers', title: 'Żyrandole', titleEn: 'Chandeliers' },
  'garden-furniture': { pl: 'meble-ogrodowe', en: 'garden-furniture', title: 'Meble ogrodowe', titleEn: 'Garden Furniture' },
} as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Generate a URL from a route definition and params
 */
export function generatePath(route: RouteDefinition, params?: Record<string, string>): string {
  let path = route.path;
  
  if (route.dynamic && params) {
    for (const [key, value] of Object.entries(params)) {
      path = path.replace(`:${key}`, value);
    }
  }
  
  return path;
}

/**
 * Get breadcrumb trail for a route
 */
export function getBreadcrumbs(routeName: string): RouteDefinition[] {
  const breadcrumbs: RouteDefinition[] = [];
  let current = Object.values(ROUTES).find(r => r.name === routeName);
  
  while (current) {
    breadcrumbs.unshift(current);
    current = current.parent 
      ? Object.values(ROUTES).find(r => r.name === current!.parent)
      : undefined;
  }
  
  // Always include home at the start
  if (breadcrumbs[0]?.name !== 'home') {
    breadcrumbs.unshift(ROUTES.HOME);
  }
  
  return breadcrumbs;
}

/**
 * Get all static routes for sitemap generation
 */
export function getStaticRoutes(): RouteDefinition[] {
  return Object.values(ROUTES).filter(route => !route.dynamic);
}

/**
 * Get all dynamic route patterns
 */
export function getDynamicRoutes(): RouteDefinition[] {
  return Object.values(ROUTES).filter(route => route.dynamic);
}

/**
 * Find route by path
 */
export function findRouteByPath(path: string): RouteDefinition | undefined {
  // First check exact matches
  const exactMatch = Object.values(ROUTES).find(route => route.path === path);
  if (exactMatch) return exactMatch;
  
  // Then check dynamic routes (simplified pattern matching)
  for (const route of Object.values(ROUTES)) {
    if (route.dynamic) {
      const pattern = route.path
        .replace(/:[^/]+/g, '[^/]+')
        .replace(/\//g, '\\/');
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(path)) {
        return route;
      }
    }
  }
  
  return undefined;
}

// ============================================================================
// Export all
// ============================================================================

export default {
  ROUTES,
  PRIMARY_NAVIGATION,
  FOOTER_NAVIGATION,
  CATEGORY_SLUGS,
  generatePath,
  getBreadcrumbs,
  getStaticRoutes,
  getDynamicRoutes,
  findRouteByPath,
};
