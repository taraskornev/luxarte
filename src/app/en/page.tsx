/**
 * English Homepage
 */

import { HomeHeroVideoEN } from '@/components/hero/HomeHeroVideoEN';

export const metadata = {
  title: 'LuxArte - Fashion for Home | Exclusive Italian Furniture',
  description: 'Exclusive furniture, kitchens and wardrobes from the finest Italian brands. Interior design consulting and comprehensive project support.',
};

export default function HomePageEN() {
  return (
    <div className="home-page">
      <HomeHeroVideoEN />
    </div>
  );
}
