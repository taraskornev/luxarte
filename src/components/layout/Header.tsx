'use client';

import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getAlternateRoute, type Locale } from '@/i18n';
import { mediaUrl } from '@/lib/buildMode';

const navItems = {
  pl: [
    { href: '/gallery', label: 'GALERIA' },
    { href: '/bentley-home-cinema', label: 'BENTLEY\u00A0HOME CINEMA' },
    { href: '/outlet', label: 'OUTLET' },
    { href: '/aktualnosci', label: 'AKTUALNOŚCI' },
    { href: '/o-nas', label: 'O NAS' },
    { href: '/kontakt', label: 'KONTAKT' },
  ],
  en: [
    { href: '/en/gallery', label: 'GALLERY' },
    { href: '/en/bentley-home-cinema', label: 'BENTLEY\u00A0HOME CINEMA' },
    { href: '/en/outlet', label: 'OUTLET' },
    { href: '/en/news', label: 'NEWS' },
    { href: '/en/about', label: 'ABOUT\u00A0US' },
    { href: '/en/contact', label: 'CONTACT' },
  ],
};

export function Header({ locale: _serverLocale = 'pl' }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Derive locale from pathname for reliable SSG hydration
  const locale: Locale = pathname.startsWith('/en') ? 'en' : 'pl';
  const items = navItems[locale];
  const homeHref = locale === 'en' ? '/en' : '/';

  // Compute the link for switching language — stays on the equivalent page
  const plHref = locale === 'pl' ? pathname : getAlternateRoute(pathname, 'pl');
  const enHref = locale === 'en' ? pathname : getAlternateRoute(pathname, 'en');

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <Link href={homeHref} className="logo">
            <Image
              src={mediaUrl('/media/luxarte-logo.png')}
              alt="LuxArte"
              width={180}
              height={60}
              sizes="180px"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav desktop-nav">
            <ul>
              {items.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="header-right">
            <div className="language-switch">
              <Link href={plHref} className={locale === 'pl' ? 'lang-active' : 'lang-inactive'}>PL</Link>
              <span className="lang-separator">|</span>
              <Link href={enHref} className={locale === 'en' ? 'lang-active' : 'lang-inactive'}>EN</Link>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={openMobileMenu}
              aria-label={locale === 'en' ? 'Open menu' : 'Otwórz menu'}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Drawer - 80% viewport, slides from right */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label={locale === 'en' ? 'Close menu' : 'Zamknij menu'}
          >
            ×
          </button>
        </div>

        {/* Mobile Navigation - flat list */}
        <nav className="mobile-nav-panel">
          <ul className="mobile-nav-list">
            {items.map((item) => (
              <li key={item.href}><Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link></li>
            ))}
          </ul>
          <div className="mobile-lang-switch">
            <Link href={plHref} className={locale === 'pl' ? 'lang-active' : 'lang-inactive'} onClick={closeMobileMenu}>PL</Link>
            <span className="lang-separator">|</span>
            <Link href={enHref} className={locale === 'en' ? 'lang-active' : 'lang-inactive'} onClick={closeMobileMenu}>EN</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
