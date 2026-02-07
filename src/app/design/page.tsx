import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Design - LuxArte - Fashion for Home',
  description: 'DESIGN WEARS FASHION – Artystyczna interpretacja granic mody i designu. Trussardi Casa Milan Design Week.',
};

export default function DesignPage() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">DESIGN WEARS FASHION</h1>
        <p className="content-page-subtitle">Artystyczna interpretacja granic mody i designu</p>

        <div className="design-hero">
          <Image
            src="/media/design/moodboard-1.webp"
            alt="Design Wears Fashion - Trussardi Casa"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <article className="content-page-body">
          <p className="design-date">28 KWIETNIA 2023</p>
          
          <p>
            Fotel Nebula, zaprojektowany przez Francescę Lanzavecchia do kolekcji 2023, został ponownie zinterpretowany w ramach wspólnego projektu projektantki i marki Trussardi Casa. Unikatowe meble zostały zaprezentowane w specjalnej instalacji w Palazzo Trussardi podczas Milan Design Week.
          </p>

          <p>
            Design Wears Fashion tworzy zestawienie i interakcję między dwiema oddzielnymi, ale połączonymi dziedzinami – projektowaniem i modą – poprzez łączną eksplorację ich odpowiednich procesów twórczych, technik i badań materiałowych. Cztery specjalne obiekty zostały opracowane dzięki wspólnemu podejściu polegającemu na demontażu, budowaniu, mieszaniu, reinterpretacji i odkrywaniu na nowo zarówno mody, jak i kryteriów projektowych.
          </p>
        </article>

        <section className="design-gallery">
          <div className="design-gallery-grid">
            <div className="design-gallery-item">
              <Image
                src="/media/design/moodboard-2.webp"
                alt="Design Wears Fashion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src="/media/design/moodboard-3.webp"
                alt="Design Wears Fashion"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src="/media/design/projektowanie-1.webp"
                alt="Projektowanie wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src="/media/design/projektowanie-3.webp"
                alt="Projektowanie wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        <div className="design-tags">
          <span className="design-tag">#MilanDesignWeek</span>
          <span className="design-tag">#SaloneDelMobile</span>
          <span className="design-tag">#TrussardiCasa</span>
        </div>

        <section className="content-page-cta">
          <h2>Zainteresowany naszymi projektami?</h2>
          <p>Skontaktuj się z nami, aby omówić Twoją wizję wnętrza.</p>
          <Link href="/kontakt" className="content-cta-button">Kontakt</Link>
        </section>
      </div>
    </main>
  );
}
