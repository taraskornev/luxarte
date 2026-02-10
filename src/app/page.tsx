/**
 * Homepage — Legacy Parity Rebuild (STEP 23)
 * 
 * Structure:
 * - Hero video with 3 entry blocks at bottom (OFERTA, DESIGN, MARKI)
 * 
 * Matches legacy luxarte.pl homepage exactly
 */

import { HomeHeroVideo } from '@/components/hero';

export const metadata = {
  title: 'LuxArte - Fashion for Home | Ekskluzywne Meble Włoskich Marek',
  description: 'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Projektowanie wnętrz i kompleksowe realizacje. Showroom w Warszawie.',
  openGraph: {
    type: 'website',
    title: 'LuxArte - Fashion for Home',
    description: 'Ekskluzywne meble, kuchnie i garderoby najlepszych włoskich marek. Doradztwo i wsparcie w projektowaniu wnętrz.',
    images: [{ url: 'https://www.luxarte.pl/media/design/projektowanie-luxarte-hero.webp', width: 1200, height: 630, alt: 'LuxArte - Luksusowe wnętrza' }],
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHeroVideo />
    </div>
  );
}
