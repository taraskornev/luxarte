import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

export const metadata = {
  title: 'Design - LuxArte - Fashion for Home',
  description: 'DESIGN WEARS FASHION – An artistic interpretation of the boundaries between fashion and design. Trussardi Casa Milan Design Week.',
};

export default function DesignPageEN() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">DESIGN WEARS FASHION</h1>
        <p className="content-page-subtitle">An artistic interpretation of the boundaries between fashion and design</p>

        <div className="design-hero">
          <Image
            src={mediaUrl('/media/design/moodboard-1.webp')}
            alt="Design Wears Fashion - Trussardi Casa"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <article className="content-page-body">
          <p className="design-date">APRIL 28, 2023</p>
          
          <p>
            The Nebula armchair, designed by Francesca Lanzavecchia for the 2023 collection, was reinterpreted as part of a joint project between the designer and Trussardi Casa. The unique furniture pieces were presented in a special installation at Palazzo Trussardi during Milan Design Week.
          </p>

          <p>
            Design Wears Fashion creates a juxtaposition and interaction between two distinct yet connected disciplines – design and fashion – through a joint exploration of their respective creative processes, techniques, and material research. Four special objects were developed through a shared approach of deconstruction, building, blending, reinterpretation, and rediscovery of both fashion and design criteria.
          </p>
        </article>

        <section className="design-gallery">
          <div className="design-gallery-grid">
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-2.webp')}
                alt="Design Wears Fashion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-3.webp')}
                alt="Design Wears Fashion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/projektowanie-1.webp')}
                alt="LuxArte Interior Design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/projektowanie-3.webp')}
                alt="LuxArte Interior Design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        <section className="content-page-cta">
          <h2>Interested in our projects?</h2>
          <p>Contact us to discuss your interior vision.</p>
          <Link href="/en/contact" className="content-cta-button">Contact</Link>
        </section>
      </div>
    </main>
  );
}
