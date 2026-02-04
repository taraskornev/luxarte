/**
 * ============================================================================
 * CATEGORIES INDEX PAGE - /categories
 * ============================================================================
 *
 * Route: /categories
 * Displays all product categories.
 */

import type { Metadata } from 'next';
import { CategoriesPage } from '@/components/categories';
import '@/styles/categories.css';

/**
 * Page Metadata
 */
export const metadata: Metadata = {
  title: 'Kategorie Mebli Luksusowych – Sofy, Kuchnie, Garderoby',
  description:
    'Odkryj kategorie luksusowych mebli i akcesoriów wnętrzarskich. Sofy, kuchnie, garderoby, oświetlenie i więcej od najlepszych włoskich marek.',
  openGraph: {
    title: 'Kategorie Mebli Luksusowych | LuxArte',
    description:
      'Odkryj kategorie luksusowych mebli i akcesoriów wnętrzarskich. Sofy, kuchnie, garderoby, oświetlenie i więcej.',
    url: 'https://www.luxarte.pl/categories',
    siteName: 'LuxArte',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kategorie Mebli Luksusowych | LuxArte',
    description: 'Sofy, kuchnie, garderoby, oświetlenie i więcej od najlepszych włoskich marek.',
  },
  alternates: {
    canonical: 'https://www.luxarte.pl/categories',
  },
};

/**
 * Categories Index Route
 */
export default function CategoriesRoute() {
  return <CategoriesPage />;
}
