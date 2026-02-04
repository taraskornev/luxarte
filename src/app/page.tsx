/**
 * ============================================================================
 * HOMEPAGE - LUXARTE
 * ============================================================================
 *
 * Next.js App Router homepage route.
 *
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { AppShell } from '@/components/layout';
import { HomePage as HomePageContent } from '@/components/homepage';
import { homepageMeta, websiteSchema, localBusinessSchema } from '@/config/seo';

// ============================================================================
// Metadata
// ============================================================================

export const metadata: Metadata = {
  title: homepageMeta.title,
  description: homepageMeta.description,
  alternates: {
    canonical: homepageMeta.canonical,
  },
  openGraph: {
    type: 'website',
    title: homepageMeta.openGraph.title,
    description: homepageMeta.openGraph.description,
    images: [
      {
        url: homepageMeta.openGraph.image,
        width: homepageMeta.openGraph.imageWidth,
        height: homepageMeta.openGraph.imageHeight,
        alt: homepageMeta.openGraph.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageMeta.twitter.title,
    description: homepageMeta.twitter.description,
  },
};

// ============================================================================
// Page Component
// ============================================================================

export default function HomePage() {
  return (
    <AppShell>
      <HomePageContent />
      
      {/* Homepage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </AppShell>
  );
}
