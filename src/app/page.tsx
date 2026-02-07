/**
 * Homepage — Legacy Parity Rebuild (STEP 23)
 * 
 * Structure:
 * - Hero video with 3 entry blocks at bottom (OFERTA, DESIGN, MARKI)
 * 
 * Matches legacy luxarte.pl homepage exactly
 */

import { HomeHeroVideo } from '@/components/hero';

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHeroVideo />
    </div>
  );
}
