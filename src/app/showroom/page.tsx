/**
 * ============================================================================
 * SHOWROOM PAGE ROUTE - LUXARTE
 * ============================================================================
 *
 * Conversion hub replacing /kontakt.
 * Handles query params for brand/category/project/outlet/product/intent inquiries.
 *
 * @route /showroom
 * @version 1.0.0
 */

import type { Metadata } from 'next';

import { showroomData } from '@/data/showroom-data';
import ShowroomPage from '@/components/showroom/ShowroomPage';

import '@/styles/showroom.css';

/* -------------------------------------------------------------------------- */
/* METADATA                                                                   */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Showroom Mebli Luksusowych – Warszawa',
  description: showroomData.seo.description,
  alternates: {
    canonical: 'https://www.luxarte.pl/showroom',
  },
  openGraph: {
    title: 'Showroom Mebli Luksusowych | LuxArte',
    description: showroomData.seo.description,
    type: 'website',
    locale: 'pl_PL',
    siteName: 'LuxArte',
    url: 'https://www.luxarte.pl/showroom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showroom Mebli Luksusowych | LuxArte',
    description: 'Odwiedź showroom LuxArte w Warszawie. Umów wizytę i zobacz kolekcje Versace, Bentley, Fendi Casa.',
  },
};

/* -------------------------------------------------------------------------- */
/* PAGE COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

export default function ShowroomRoute() {
  return <ShowroomPage />;
}
