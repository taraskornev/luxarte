/**
 * HomeTripleCTA — Three equal CTA blocks below hero
 * 
 * Legacy parity structure:
 * 1. OFERTA → /oferta
 * 2. DESIGN → /design  
 * 3. NASZE MARKI → /nasze-marki
 * 
 * Each tile: background image + title + text + full-tile clickable
 * Hover: subtle image zoom only (no lift, no shadow)
 */

import Link from 'next/link';
import Image from 'next/image';

interface CTATile {
  id: string;
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
  image: string;
}

const CTA_TILES: CTATile[] = [
  {
    id: 'oferta',
    title: 'Oferta',
    text: 'Kompleksowe wyposażenie wnętrz premium. Luksusowe meble, oświetlenie, kuchnie, garderoby i łazienki od najlepszych włoskich marek.',
    buttonLabel: 'Zobacz ofertę',
    href: '/oferta',
    image: '/media/design/villa-01-hero.webp',
  },
  {
    id: 'design',
    title: 'Design',
    text: 'Autorskie projekty wnętrz i współpraca z architektami. Indywidualne realizacje dla klientów prywatnych i projektów komercyjnych.',
    buttonLabel: 'Projektowanie',
    href: '/design',
    image: '/media/design/projektowanie-luxarte-hero.webp',
  },
  {
    id: 'nasze-marki',
    title: 'Nasze Marki',
    text: 'Oficjalny przedstawiciel w Polsce: Versace Home, Bentley Home, Dolce&Gabbana Casa, Trussardi Casa, Visionnaire i więcej.',
    buttonLabel: 'Poznaj marki',
    href: '/nasze-marki',
    image: '/media/brands/visionnaire-hero.webp',
  },
];

export function HomeTripleCTA() {
  return (
    <section className="home-cta-section">
      <div className="home-cta-grid">
        {CTA_TILES.map((tile, index) => (
          <Link
            key={tile.id}
            href={tile.href}
            className="home-cta-tile"
          >
            <div className="home-cta-bg">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
            <div className="home-cta-overlay" />
            <div className="home-cta-content">
              <h2 className="home-cta-title">{tile.title}</h2>
              <p className="home-cta-text">{tile.text}</p>
              <span className="home-cta-btn">{tile.buttonLabel}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
