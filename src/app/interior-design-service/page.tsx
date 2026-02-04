/**
 * ============================================================================
 * INTERIOR DESIGN SERVICE PAGE ROUTE
 * ============================================================================
 *
 * /interior-design-service
 * High-conversion service landing page for interior design services.
 *
 * Features:
 * - Service Hero with CTA
 * - Value Propositions
 * - 6-step Process Timeline
 * - Deliverables Grid
 * - Budget Tiers
 * - Featured Projects
 * - Trust/Proof (Brand Logos)
 * - FAQ Accordion
 * - Multi-step Lead Form
 *
 * Schema:
 * - Service
 * - Organization
 * - BreadcrumbList
 * - FAQPage
 */

import type { Metadata } from 'next';
import { InteriorDesignServicePage } from '@/components/service';
import '@/styles/service.css';

/**
 * Page Metadata
 */
export const metadata: Metadata = {
  title: 'Projektowanie Wnętrz | Kompleksowa Usługa | LuxArte',
  description:
    'Profesjonalne projektowanie wnętrz luksusowych. Od koncepcji po nadzór autorski. Współpracujemy z najlepszymi markami: Bentley Home, Fendi Casa, Minotti. Bezpłatna konsultacja.',
  keywords: [
    'projektowanie wnętrz',
    'architekt wnętrz Warszawa',
    'luksusowe wnętrza',
    'projekty wnętrz',
    'meble premium',
    'Bentley Home',
    'Fendi Casa',
    'nadzór autorski',
  ],
  openGraph: {
    title: 'Projektowanie Wnętrz | LuxArte',
    description:
      'Profesjonalne projektowanie wnętrz luksusowych. Od koncepcji po nadzór autorski.',
    type: 'website',
    url: 'https://www.luxarte.pl/interior-design-service',
    images: [
      {
        url: 'https://www.luxarte.pl/wp-content/uploads/2022/10/1.-recepcja-perspektywa-05-1024x683.jpg',
        width: 1024,
        height: 683,
        alt: 'LuxArte - Projektowanie Wnętrz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projektowanie Wnętrz | LuxArte',
    description:
      'Profesjonalne projektowanie wnętrz luksusowych. Od koncepcji po nadzór autorski.',
  },
  alternates: {
    canonical: 'https://www.luxarte.pl/interior-design-service',
  },
};

/**
 * Interior Design Service Page
 */
export default function Page(): JSX.Element {
  return (
    <main className="interior-design-service-page">
      <InteriorDesignServicePage />
    </main>
  );
}
