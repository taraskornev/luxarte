/**
 * ============================================================================
 * BRANDS INDEX PAGE - LUXARTE
 * ============================================================================
 *
 * Next.js App Router brands index route (/brands).
 *
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { AppShell } from '@/components/layout';
import { BrandsPageContent } from './BrandsPageContent';

// ============================================================================
// Metadata
// ============================================================================

export const metadata: Metadata = {
  title: 'Luksusowe Marki Mebli – Versace, Bentley, Fendi',
  description: 'Odkryj kolekcję luksusowych marek mebli i oświetlenia. Versace Home, Bentley Home, Flos, SCIC i wiele innych. Autoryzowany dealer w Polsce.',
  alternates: {
    canonical: 'https://www.luxarte.pl/brands',
  },
  openGraph: {
    type: 'website',
    title: 'Luksusowe Marki Mebli – Versace, Bentley, Fendi | LuxArte',
    description: 'Odkryj kolekcję luksusowych marek mebli i oświetlenia. Versace Home, Bentley Home, Flos, SCIC i wiele innych.',
    url: 'https://www.luxarte.pl/brands',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luksusowe Marki Mebli | LuxArte',
    description: 'Odkryj kolekcję luksusowych marek mebli i oświetlenia od najlepszych włoskich projektantów.',
  },
};

// ============================================================================
// Page Component
// ============================================================================

export default function BrandsIndexPage() {
  return (
    <AppShell>
      <BrandsPageContent />
    </AppShell>
  );
}
