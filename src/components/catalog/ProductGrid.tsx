import { Product } from '@/lib/products';
import { ProductCard } from './ProductCard';
import type { Locale } from '@/i18n';

interface ProductGridProps {
  products: Product[];
  locale?: Locale;
}

export function ProductGrid({ products, locale = 'pl' }: ProductGridProps) {
  return (
    <div className="gallery-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 6} locale={locale} />
      ))}
    </div>
  );
}
