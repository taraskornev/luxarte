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
  if (!result) return { title: 'Product not found' };
  
  const { product, category } = result;
  return {
    title: `${product.name} | Outlet | LuxArte`,
    description: `${product.name} – ${product.brand}. Outlet product in category ${category.name}. ${product.description?.slice(0, 120) || ''}`,
  };
}

export default async function OutletProductPageEN({ params }: Props) {
  const { id } = await params;
  const result = getOutletProductById(id);
  
  if (!result) {
    notFound();
  }
  
  const { product, category } = result;
  const images = product.images || [];
  
  // Get related products from same category (excluding current)
  const relatedProducts = category.products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pdp pdp--outlet">
      <div className="pdp__container">
        {/* Breadcrumb */}
        <nav className="pdp__breadcrumb" aria-label="Breadcrumb">
          <Link href="/en">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/en/outlet">Outlet</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/en/outlet?category=${category.slug}`}>{category.name}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        {/* Hero Section: Two-column layout */}
        <section className="pdp__hero">
          {/* Left: Gallery */}
          <div className="pdp__gallery-col">
            <OutletGallery images={images} productName={product.name} locale="en" />
          </div>

          {/* Right: Product Info */}
          <div className="pdp__info-col">
            {/* Brand */}
            <p className="pdp__brand">{product.brand}</p>
            
            {/* Title */}
            <h1 className="pdp__title">{product.name}</h1>
            
            {/* Description */}
            {product.description && (
              <div className="pdp__intro">
                <p>{product.description}</p>
              </div>
            )}
            
            {/* Contact CTA */}
            <div className="pdp__cta-wrap">
              <Link 
                href={`/en/contact?product=${encodeURIComponent(product.name)}&outlet=true`}
                className="pdp__cta"
              >
                Ask for price
              </Link>
            </div>
          </div>
        </section>

        {/* Related Products from Same Category */}
        {relatedProducts.length > 0 && (
          <section className="pdp__related">
            <h2 className="pdp__related-title">Other products in {category.name}</h2>
            <div className="pdp__related-grid">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/en/outlet/${related.id}`}
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
