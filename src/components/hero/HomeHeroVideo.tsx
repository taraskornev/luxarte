/**
 * HomeHeroVideo — Full-screen video hero for homepage
 * 
 * Legacy parity: Video hero with 3 entry blocks at bottom
 * - OFERTA → SPRZEDAŻ I KONFIGURACJA MEBLI, MONTAŻ I SERWIS
 * - DESIGN → PROJEKTOWANIE WNĘTRZ  
 * - MARKI → NASZE MARKI
 */

import Link from 'next/link';

const HERO_ENTRIES = [
  {
    label: 'OFERTA',
    heading: 'SPRZEDAŻ I KONFIGURACJA MEBLI, MONTAŻ I SERWIS',
    href: '/oferta',
  },
  {
    label: 'DESIGN',
    heading: 'PROJEKTOWANIE WNĘTRZ',
    href: '/design',
  },
  {
    label: 'MARKI',
    heading: 'NASZE MARKI',
    href: '/nasze-marki',
  },
];

export function HomeHeroVideo() {
  return (
    <section className="home-hero">
      <video
        className="home-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/brands/versace-home-hero.webp"
      >
        <source src="/media/hero/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="home-hero-overlay" />
      <div className="home-hero-entries">
        {HERO_ENTRIES.map((entry) => (
          <Link key={entry.label} href={entry.href} className="home-hero-entry">
            <span className="home-hero-entry-label">{entry.label}</span>
            <span className="home-hero-entry-heading">{entry.heading}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
