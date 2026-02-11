import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Services - LuxArte - Fashion for Home',
  description: 'Comprehensive LuxArte services: consulting, sales, installation, and service of luxury furniture and interior furnishings.',
};

export default function ServicesPage() {
  return (
    <main className="content-page oferta-page">
      <div className="content-page-container">
        <Breadcrumb items={[{ label: 'Home', href: '/en' }, { label: 'Services' }]} />
        <h1 className="content-page-title">SERVICES</h1>

        <div className="oferta-services">
          <section className="oferta-service" data-scroll-animate>
            <h2 className="oferta-service-title">CONSULTING</h2>
            <p className="oferta-service-text">
              <strong>We believe that an exceptional interior begins with a conversation.</strong> That is why at LuxArte we prioritize open and informed design collaboration – with both private clients and architects. Our team consists not just of consultants but of beauty enthusiasts who, with precision and sensitivity, will help you bring even the most demanding visions to life. We listen to your needs, draw inspiration from your lifestyle, and comprehensively create interiors that tell your story.
            </p>
          </section>

          <section className="oferta-service" data-scroll-animate>
            <h2 className="oferta-service-title">SALES</h2>
            <p className="oferta-service-text">
              <strong>We choose brands that express what matters most to us: elegance, durability, and timeless aesthetics.</strong> Our portfolio is a carefully curated collection of furniture, lighting, and accessories that embrace the idea of luxury in subtle yet expressive quality. LuxArte is not just a showroom – it is a curated selection of brands that stay with us for years. We believe that beauty does not fade – it evolves with you.
            </p>
          </section>

          <section className="oferta-service" data-scroll-animate>
            <h2 className="oferta-service-title">INSTALLATION</h2>
            <p className="oferta-service-text">
              <strong>Every element of an interior matters.</strong> That is why we entrust delivery and installation exclusively to trained specialists for whom precision is a daily practice. Our technical team approaches every project with the care you expect from premium-class services. Regardless of the project&apos;s scale, you can be assured that the final result will be exactly as planned – harmonious, aesthetic, and flawlessly executed.
            </p>
          </section>

          <section className="oferta-service" data-scroll-animate>
            <h2 className="oferta-service-title">SERVICE</h2>
            <p className="oferta-service-text">
              <strong>Our relationship does not end after installation.</strong> LuxArte is a partner for years – and generations. Through regular servicing, after-sales support, and openness to future changes, your interior can mature alongside you. We proudly return to homes we created years ago to continue their story. This is how we understand luxury – as durability, care, and continuity.
            </p>
          </section>
        </div>

        <section className="oferta-cta-section" data-scroll-animate>
          <h2 className="oferta-cta-title">LET&apos;S MEET</h2>
          <div className="oferta-cta-images">
            <div className="oferta-cta-image">
              <Image
                src={mediaUrl('/media/pages/kontakt/showroom-warszawa.jpg')}
                alt="LuxArte Warsaw Showroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="oferta-cta-image-overlay">
                <h3>WARSAW SHOWROOM</h3>
                <address>Plac Piłsudskiego 9, 00-078 Warsaw</address>
              </div>
            </div>
            <div className="oferta-cta-image">
              <Image
                src={mediaUrl('/media/pages/kontakt/showroom-wroclaw.png')}
                alt="LuxArte Wrocław Project Department"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="oferta-cta-image-overlay">
                <h3>PROJECT DEPARTMENT WROCŁAW</h3>
                <address>ul. Księcia Witolda 42/1, 50-202 Wrocław</address>
              </div>
            </div>
          </div>
          <Link href="/en/contact#contact-form" className="content-cta-button">Book an appointment</Link>
        </section>

        <section className="content-page-locations">
          <div className="content-location">
            <h2>LUXARTE WARSAW SHOWROOM</h2>
            <address>
              National Opera Building<br />
              Plac Piłsudskiego 9<br />
              00-078 Warsaw, Poland
            </address>
            <p className="content-contact">
              <a href="tel:+48226290458">+48 22 629 04 58</a><br />
              <a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a>
            </p>
          </div>

          <div className="content-location">
            <h2>LUXARTE WROCŁAW PROJECT DEPARTMENT</h2>
            <address>
              ul. Księcia Witolda 42/1<br />
              50-202 Wrocław, Poland
            </address>
            <p className="content-contact">
              <a href="tel:+48507047399">+48 507 047 399</a><br />
              <a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
