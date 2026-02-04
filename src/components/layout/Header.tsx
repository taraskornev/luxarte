'use client';

/**
 * ============================================================================
 * HEADER COMPONENT
 * ============================================================================
 * 
 * Site header with:
 * - Logo (preloaded for performance)
 * - Primary navigation
 * - Sticky behavior with compact mode on scroll
 * - Mobile menu toggle
 * 
 * @version 1.0.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { BRAND_ASSETS } from '../../config/navigation';

// ============================================================================
// Types
// ============================================================================

interface HeaderProps {
  className?: string;
}

// ============================================================================
// Constants
// ============================================================================

const SCROLL_THRESHOLD = 50; // px to trigger compact mode

// ============================================================================
// Component
// ============================================================================

export function Header({ className = '' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
    setIsCompact(scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Build class names
  const headerClasses = [
    'header',
    isScrolled ? 'header--scrolled' : '',
    isCompact ? 'header--compact' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={headerClasses} role="banner">
        <div className="container">
          <div className="header__inner">
            {/* Logo */}
            <div className="header__logo">
              <a href="/" className="header__logo-link" aria-label="LuxArte - Strona główna">
                <Image
                  src={BRAND_ASSETS.logo.src}
                  alt={BRAND_ASSETS.logo.alt}
                  width={BRAND_ASSETS.logo.width}
                  height={BRAND_ASSETS.logo.height}
                  className="header__logo-image"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="header__nav" aria-label="Główna nawigacja">
              <Navigation />
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="header__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              <span className="header__hamburger" aria-hidden="true">
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
                <span className="header__hamburger-line"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Header;
