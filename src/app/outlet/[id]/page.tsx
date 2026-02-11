import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getOutletProductById, getAllOutletProducts } from '@/lib/outlet';
import { OutletGallery } from '@/components/outlet/OutletGallery';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllOutletProducts();
  return products.map(({ product }) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const result = getOutletProductById(id);
  if (!result) return { title: 'Produkt nie znaleziony' };
  
  const { product, category } = result;
  return {
    title: `${product.name} | Outlet | LuxArte`,
    description: `${product.name} – ${product.brand}. Produkt outletowy w kategorii ${category.name}. ${product.description?.slice(0, 120) || ''}`,
  };
}

export default async function OutletProductPage({ params }: Props) {
  const { id } = await params;
  const result = getOutletProductById(id);
  
  if (!result) {
    notFound();
  }
  
  const { product, category } = result;
  const images = product.images || [];
  const mainImage = images[0];
  
  // Get related products from same category (excluding current)
  const relatedProducts = category.products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pdp pdp--outlet">
      <div className="pdp__container">
        {/* Breadcrumb */}
        <nav className="pdp__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Strona główna</Link>
          <span aria-hidden="true">/</span>
          <Link href="/outlet">Outlet</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/outlet?category=${category.slug}`}>{category.name}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        {/* Hero Section: Two-column layout */}
        <section className="pdp__hero">
          {/* Left: Gallery */}
          <div className="pdp__gallery-col">
            <OutletGallery images={images} productName={product.name} />
          </div>

          {/* Right: Product Info */}
          <div className="pdp__info-col">
            {/* Brand */}
            <p className="pdp__brand">{product.brand}</p>
            
            {/* Title */}
            <h1 className="pdp__title">{product.name}</h1>

            {/* Quantity */}
            {product.quantity && (
              <p className="pdp__quantity">
                <span className="pdp__quantity-label">Ilość:</span>{' '}
                <span className="pdp__quantity-value">{product.quantity}</span>
              </p>
            )}
            
            {/* Description */}
            {product.description && (
              <div className="pdp__intro">
                <p>{product.description}</p>
              </div>
            )}
            
            {/* Contact CTA */}
            <div className="pdp__cta-wrap">
              <Link 
                href={`/kontakt?product=${encodeURIComponent(product.name)}&outlet=true`}
                className="pdp__cta"
              >
                Zapytaj o cenę
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products from Same Category */}
        {relatedProducts.length > 0 && (
          <section className="pdp__related">
            <h2 className="pdp__related-title">Inne produkty w kategorii {category.name}</h2>
            <div className="pdp__related-grid">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/outlet/${related.id}`}
                  className="pdp__related-card"
                >
                  {related.images[0] && (
                    <div className="pdp__related-card-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={related.images[0]} 
                        alt={related.name}
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="pdp__related-card-info">
                    <span className="pdp__related-card-brand">{related.brand}</span>
                    <span className="pdp__related-card-name">{related.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
