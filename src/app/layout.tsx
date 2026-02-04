/**
 * ============================================================================
 * ROOT LAYOUT - LUXARTE
 * ============================================================================
 *
 * Next.js App Router root layout.
 * Provides global styles, fonts, and metadata.
 *
 * @version 1.0.0
 */

import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

// Global styles
import '@/styles/design-system.css';
import '@/styles/layout.css';
import '@/styles/typography.css';
import '@/styles/main.css';
import '@/styles/homepage.css';
import '@/styles/brands.css';
import '@/styles/categories.css';
import '@/styles/service.css';
import '@/styles/projects.css';
import '@/styles/outlet.css';
import '@/styles/knowledge.css';

// SEO Config
import { siteMetadata, organizationSchema } from '@/config/seo';

// ============================================================================
// Fonts
// ============================================================================

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  variable: '--font-serif',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

// ============================================================================
// Metadata
// ============================================================================

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.defaultTitle,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.defaultDescription,
  authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
  creator: siteMetadata.author.name,
  publisher: siteMetadata.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    siteName: siteMetadata.siteName,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://www.luxarte.pl/wp-content/uploads/2024/02/cropped-LuxArte_Icon_RGB-32x32.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: 'https://www.luxarte.pl/wp-content/uploads/2024/02/cropped-LuxArte_Icon_RGB-192x192.jpg', sizes: '192x192', type: 'image/jpeg' },
    ],
    apple: [
      { url: 'https://www.luxarte.pl/wp-content/uploads/2024/02/cropped-LuxArte_Icon_RGB-180x180.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#967f65',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ============================================================================
// Root Layout Component
// ============================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        {/* Preconnect to image CDN */}
        <link rel="preconnect" href="https://www.luxarte.pl" />
        <link rel="dns-prefetch" href="https://www.luxarte.pl" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        {/* Skip to main content - Accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Przejdź do treści
        </a>

        {children}
      </body>
    </html>
  );
}
