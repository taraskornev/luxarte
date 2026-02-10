/**
 * HomeHeroVideo — English version
 */

import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

const HERO_ENTRIES = [
  {
    label: 'SERVICES',
    heading: 'FURNITURE SALES & CONFIGURATION, INSTALLATION & SERVICE',
    href: '/en/services',
  },
  {
    label: 'DESIGN',
    heading: 'INTERIOR DESIGN',
    href: '/en/design',
  },
  {
    label: 'BRANDS',
    heading: 'OUR BRANDS',
    href: '/en/our-brands',
  },
];

export function HomeHeroVideoEN() {
  return (
    <section className="home-hero">
      <video
        className="home-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={mediaUrl('/media/brands/versace-home-hero.webp')}
      >
        <source src={mediaUrl('/media/hero/hero-video.mp4')} type="video/mp4" />
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
