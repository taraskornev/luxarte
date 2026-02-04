/**
 * ============================================================================
 * PREMIUM APP SHELL COMPONENT
 * ============================================================================
 * 
 * Upgraded global application shell providing:
 * - Premium Header with mega-menu navigation
 * - Mobile drilldown navigation
 * - Main content area (route outlet)
 * - Footer
 * 
 * Features:
 * - Optional transparent header mode for hero sections
 * - Smooth scroll behavior
 * - Enhanced accessibility
 * 
 * @version 2.0.0
 */

'use client';

import React, { ReactNode } from 'react';
import { HeaderPremium } from './HeaderPremium';
import { Footer } from './Footer';

// ============================================================================
// Types
// ============================================================================

interface AppShellPremiumProps {
  children: ReactNode;
  /** Enable transparent header over hero sections */
  transparentHeader?: boolean;
}

// ============================================================================
// Component
// ============================================================================

export function AppShellPremium({ 
  children, 
  transparentHeader = false 
}: AppShellPremiumProps) {
  return (
    <div className="app-shell">
      {/* Skip to main content - Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Przejdź do treści
      </a>

      {/* Premium Header with Mega-Menu */}
      <HeaderPremium transparentMode={transparentHeader} />

      {/* Main Content Area */}
      <main id="main-content" className="app-shell__main" role="main">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
