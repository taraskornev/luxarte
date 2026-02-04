/**
 * ============================================================================
 * OUTLET INDEX PAGE
 * ============================================================================
 *
 * Route: /outlet
 * Purpose: Outlet overview with filterable product grid
 */

import type { Metadata } from 'next';
import { OutletPage } from '@/components/outlet';
import { outletIndexSeo } from '@/data/outlet-data';
import '@/styles/outlet.css';

export const metadata: Metadata = {
  title: outletIndexSeo.title,
  description: outletIndexSeo.description,
  openGraph: {
    title: outletIndexSeo.title,
    description: outletIndexSeo.description,
    type: 'website',
    locale: 'pl_PL',
    siteName: 'LuxArte',
    url: '/outlet',
  },
  twitter: {
    card: 'summary_large_image',
    title: outletIndexSeo.title,
    description: outletIndexSeo.description,
  },
  alternates: {
    canonical: '/outlet',
  },
};

export default function OutletRoute(): JSX.Element {
  return <OutletPage />;
}
