import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'BENTLEY HOME CINEMA - PREMIERA - LuxArte - Fashion for Home',
  description: 'Cieszymy się, że możemy podzielić się z Wami projektem, nad którym pracowaliśmy przez ostatnie miesiące. Nasz warszawski showroom poszerzył ekspozycję o unikatową przestrzeń – Bentley Home Cinema.',
};

const galleryImages = [
  { src: '/media/pages/bentley-home-cinema/image-02.jpg', alt: 'BENTLEY HOME CINEMA – PREMIERA' },
  { src: '/media/pages/bentley-home-cinema/image-03.jpg', alt: 'Bentley Home Cinema - wnętrze showroomu' },
  { src: '/media/pages/bentley-home-cinema/image-04.jpg', alt: 'Bentley Home Cinema - meble' },
  { src: '/media/pages/bentley-home-cinema/image-05.jpg', alt: 'Bentley Home Cinema - detale' },
  { src: '/media/pages/bentley-home-cinema/image-06.jpg', alt: 'Bentley Home Cinema - przestrzeń' },
  { src: '/media/pages/bentley-home-cinema/image-07.jpg', alt: 'Bentley Home Cinema - system AV' },
  { src: '/media/pages/bentley-home-cinema/image-08.jpg', alt: 'Bentley Home Cinema - fotele' },
  { src: '/media/pages/bentley-home-cinema/image-09.jpg', alt: 'Bentley Home Cinema - oświetlenie' },
  { src: '/media/pages/bentley-home-cinema/image-10.jpg', alt: 'Bentley Home Cinema - atmosfera' },
  { src: '/media/pages/bentley-home-cinema/image-13.jpg', alt: 'Bentley Home Cinema - widok' },
];

export default function BentleyHomeCinemaPage() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">BENTLEY HOME CINEMA – PREMIERA</h1>

        <div className="content-page-hero">
          <Image
            src="/media/pages/bentley-home-cinema/image-02.jpg"
            alt="BENTLEY HOME CINEMA – PREMIERA"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <article className="content-page-body">
          <p>
            Cieszymy się, że możemy podzielić się z Wami projektem, nad którym pracowaliśmy przez ostatnie miesiące. Nasz warszawski showroom poszerzył ekspozycję o unikatową przestrzeń – Bentley Home Cinema.
          </p>

          <p>
            We wrześniu miała miejsce uroczysta premiera, podczas której prezentowaliśmy naszym gościom filmy i fragmenty koncertów w najwyższej jakości Audio-Video. Prezentacjom towarzyszyła degustacja whiskey Macallan, a o lifecooaking perfekcyjnie zadbał Witek Iwański z HUB Praga. Magiczny wieczór podkreśliła również obecność partnera Bentley Motors, dzięki któremu możemy zapewnić naszym klientom pełne doświadczenie atmosfery marki.
          </p>

          <p>
            Luxarte jako pierwszy w Polsce showroom z wyposażeniem wnętrz, przedstawia możliwości wyposażenia pomieszczeń Audio-Video najwyższej klasy.
          </p>

          <p>
            Wnętrze zostało wyposażone w meble Bentley Home. Nawiązania do motoryzacji w kolekcji mebli pokazują detale, które zostały przeniesione z charakterystycznych wzorów i form, dobrze znanym fanom marki Bentley. Oryginalna atmosfera i najwyższy kunszt rzemiosła zrobi wrażenie również na osobach ceniących najwyższą jakość i ponadczasowy design. O stronę Audio-Video zadbał nasz partner, firma <a href="https://cinematic.pl/o-nas/" target="_blank" rel="noopener noreferrer">Cinematic</a>, z ponad 20-letnim doświadczeniem w projektowaniu systemów AV dla przestrzeni prywatnych.
          </p>

          <p>
            Magię tego wieczoru będziemy się starać odtworzyć podczas indywidualnych prezentacji przestrzeni Bentley Home Cinema. W celu zapewnienia najwyższej jakości obsługi, wszystkie prezentacje i spotkania w naszym showroomie odbywają się wyłącznie po wcześniejszym umówieniu. Chcemy zagwarantować pełną uwagę i profesjonalne przygotowanie, dopasowane do Państwa potrzeb i oczekiwań. <a href="/kontakt">Zapraszamy do rezerwacji spotkania.</a>
          </p>
        </article>

        <section className="content-page-gallery">
          <div className="content-gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="content-gallery-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="content-page-cta">
          <h2>Umów prezentację</h2>
          <p>
            Zapraszamy do rezerwacji indywidualnej prezentacji przestrzeni Bentley Home Cinema.
          </p>
          <Link href="/kontakt" className="content-cta-button">Kontakt</Link>
        </section>
      </div>
    </main>
  );
}
