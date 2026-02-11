import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Interior Design - LuxArte - Fashion for Home',
  description: 'The Art of Interior Design – LuxArte. Comprehensive luxury interior design and furnishing services.',
};

export default function DesignPageEN() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Interior Design' }]} />
        <h1 className="content-page-title">THE ART OF INTERIOR DESIGN</h1>

        <div className="design-hero" data-scroll-animate>
          <Image
            src={mediaUrl('/media/design/moodboard-1.webp')}
            alt="LuxArte Interior Design"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <article className="content-page-body">
          <p>
            LuxArte began its journey as a design studio. Today, it is a place where we comprehensively create luxury interiors for the most discerning clients. Working with brands such as Versace Home, Dolce&amp;Gabbana Casa, Roberto Cavalli, and Trussardi Casa, our atelier creates interiors inspired by the world of fashion, bearing the logos of the greatest Italian fashion houses.
          </p>

          <p>
            Drawing on our experience and expertise, we provide comprehensive interior design and arrangement services, including construction supervision. Client meetings take place in our showroom, where you can immerse yourself in the atmosphere of Italian design and high fashion. Our exhibition and wide range of finishing materials help us showcase the potential we can bring to your interior.
          </p>
        </article>

        <section className="design-gallery" data-scroll-animate>
          <div className="design-gallery-grid">
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-2.webp')}
                alt="LuxArte Interior Projects"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-3.webp')}
                alt="LuxArte Interior Projects"
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

        <article className="content-page-body">
          <h2 className="content-page-section-title">COLLABORATION STAGES</h2>

          <p>
            <strong>1. SITE VISIT</strong> — We conduct a site visit to gather as much data about the interior as possible. We take into account the investor&apos;s guidelines and create a framework for further project development.
          </p>

          <p>
            <strong>2. FUNCTIONAL LAYOUT</strong> — The appropriate functional layout is created in consultation with the client, resulting in several layout proposals.
          </p>

          <p>
            <strong>3. 3D VISUALIZATIONS</strong> — Visualizations are a tool that helps present our interior concept to you. In addition to visualizations, we also present a moodboard with suggested color palettes and a selection of finishing materials.
          </p>

          <p>
            <strong>4. TECHNICAL DRAWINGS</strong> — The culmination of the creative stage is a technical specification containing the project&apos;s execution details. An important element is a detailed list of all finishing materials, including furnishing and decorative elements.
          </p>

          <p>
            <strong>5. SUPERVISION</strong> — We offer you the opportunity to benefit from our years of experience through design supervision. This includes overseeing contractors on site to ensure compliance with the project.
          </p>
        </article>

        <section className="content-page-cta" data-scroll-animate>
          <h2>Let&apos;s talk about your project</h2>
          <p>Our experience and holistic approach guarantee high quality and refined solutions tailored to the needs and expectations of our clients.</p>
          <Link href="/en/contact#contact-form" className="content-cta-button">Ask about our offer</Link>
        </section>
      </div>
    </main>
  );
}
