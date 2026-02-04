/**
 * ============================================================================
 * APP SHELL COMPONENT
 * ============================================================================
 * 
 * Global application shell providing:
 * - Header with navigation
 * - Main content area (route outlet)
 * - Footer
 * - Skip to content link for accessibility
 * 
 * @version 1.0.0
 */

import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

// ============================================================================
// Types
// ============================================================================

interface AppShellProps {
  children: ReactNode;
}

// ============================================================================
// Component
// ============================================================================

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Przejdź do treści
      </a>

      {/* Header with Navigation */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="app-shell__main" role="main">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// ============================================================================
// Head Component for Logo Preload
// ============================================================================

/**
 * Place this in your document head for performance optimization
 * 
 * Usage in Next.js:
 * ```tsx
 * import Head from 'next/head';
 * import { AppShellHead } from '@/components/layout/AppShell';
 * 
 * <Head>
 *   <AppShellHead />
 * </Head>
 * ```
 */
export function AppShellHead() {
  return (
    <>
      {/* Preload logo for faster LCP */}
      <link
        rel="preload"
        href="https://www.luxarte.pl/wp-content/uploads/2021/11/Lux-Arte-Logo-2021-2.png"
        as="image"
        type="image/png"
      />
      
      {/* Preconnect to font provider */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
}

// ============================================================================
// Export
// ============================================================================

export default AppShell;
