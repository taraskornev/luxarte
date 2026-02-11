import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

export const metadata = {
  title: 'Ekskluzywne kino domowe - Prywatna sala kinowa - BENTLEY HOME CINEMA - LuxArte - Fashion for Home',
  description: 'Ekskluzywne kino domowe - Prywatna sala kinowa - BENTLEY HOME CINEMA. Showroom wyposażony w meble Bentley Home z profesjonalnym systemem audio-video Procella Audio, Sony 4K, Screen Research.',
};

export default function BentleyHomeCinemaPage() {
  return (
    <main className="bentley-cinema-page">
      {/* Hero Section with Video Background */}
      <div className="bentley-cinema-hero">
        <video
          className="bentley-cinema-hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={mediaUrl('/media/pages/bentley-home-cinema/baner_short2.mp4')} type="video/mp4" />
        </video>
        <div className="bentley-cinema-hero-overlay" />
        <div className="bentley-cinema-hero-content">
          <span className="bentley-cinema-showroom-label">SHOWROOM WARSZAWA</span>
          <h1 className="bentley-cinema-hero-title">BENTLEY HOME CINEMA</h1>
          <Link href="/bentley-home-cinema/rezerwacja" className="bentley-cinema-cta-btn">
            ZAREZERWUJ TERMIN
          </Link>
        </div>
      </div>

      {/* Section 1: Image left + Text right */}
      <section className="bentley-cinema-section" data-scroll-animate>
        <div className="bentley-cinema-row">
          <div className="bentley-cinema-col bentley-cinema-col--image">
            <Image
              src={mediaUrl('/media/pages/bentley-home-cinema/image-04.jpg')}
              alt="Bentley Home Cinema LuxArte"
              fill
              sizes="(max-width: 999px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
          <div className="bentley-cinema-col bentley-cinema-col--text">
            <div className="bentley-cinema-text-inner">
              <p>
                Nasza chęć rozwoju i dostarczania inspiracji Klientom zaowocowała nowym projektem w przestrzeni warszawskiego showroom'u LuxArte.
              </p>
              <p>
                Bentley Home Cinema jest wyjątkowym miejscem na mapie Europy.
              </p>
              <p>
                We współpracy z firmą Cinematic, specjalizującą się profesjonalnym wyposażeniu audio-video, podjęliśmy się wykreowania luksusowej przestrzeni wyposażonej w meble marki Bentley Home, której przeznaczenie pozwala na oglądanie filmów w najwyższej jakości dźwięku i obrazu.
              </p>
              <p>
                Stworzyliśmy kameralną, ekskluzywną przestrzeń, która mówi o autentyczności marki Bentley w jej realizacji luksusu i rzemiosła, jednocześnie dostarczając wrażenia dla zmysłów. Bentley Home Cinema prezentuje niezrównaną klarowność obrazu i dźwięku, jednocześnie naturalnie włączając charakterystyczne dla marki detale projektowe. Każdy szczegół harmonijnie przyczynia się do niezapomnianych wrażeń.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Text left + Image right */}
      <section className="bentley-cinema-section" data-scroll-animate>
        <div className="bentley-cinema-row bentley-cinema-row--reverse">
          <div className="bentley-cinema-col bentley-cinema-col--text">
            <div className="bentley-cinema-text-inner">
              <p>
                W jednym pomieszczeniu mamy możliwość posłuchania aż 3 różnych systemów kinowych zbudowanych w oparciu o system nagłośnienia Procella Audio. Naszą flagową konfiguracją jest <strong>system 7.6.4 Dolby Atmos Waveforming</strong> zbudowany w oparciu o 22 głośniki.
              </p>
              <p>
                Za efekty wizualne odpowiada najnowszy <strong>projektor laserowy 4K firmy Sony</strong>. Unikalną cechą projektora jest bardzo wysoka jasność wynosząca 3400 ANS Lumenów oraz procesor XR. Projektor został zamontowany w suficie dzięki systemowi <strong>DT Motorised Mirror Drop</strong> który, wyposażony w zautomatyzowane lustro, które dyskretnie ukrywa projektor, gdy nie jest używany.
              </p>
              <p>
                Obraz wyświetlany jest na wielkim <strong>ekranie Screen Research serii DecorMask FDM</strong>. Ma on wymiary 355cm szerokości x 200 cm wysokości, co daje nam <strong>przekątną 160 cali</strong>. Tak duży obraz zapewnia prawdziwie immersyjny efekt, widzowie czują się „zanurzeni" w świecie prezentowanym na ekranie.
              </p>
            </div>
          </div>
          <div className="bentley-cinema-col bentley-cinema-col--image">
            <Image
              src={mediaUrl('/media/pages/bentley-home-cinema/image-05.jpg')}
              alt="Bentley Home Cinema Cinematic"
              fill
              sizes="(max-width: 999px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Image left + Text right */}
      <section className="bentley-cinema-section" data-scroll-animate>
        <div className="bentley-cinema-row">
          <div className="bentley-cinema-col bentley-cinema-col--image">
            <Image
              src={mediaUrl('/media/pages/bentley-home-cinema/image-06.jpg')}
              alt="Bentley Home Cinema - wnętrze"
              fill
              sizes="(max-width: 999px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="bentley-cinema-col bentley-cinema-col--text">
            <div className="bentley-cinema-text-inner">
              <p>
                Fanów marki i designu zapraszamy do umówienia indywidualnego spotkania, podczas którego będziemy mogli zaprezentować przestrzeń Bentley Home Cinema oraz możliwości, jakie możemy zaoferować Państwu przy realizacji kin domowych w projektach indywidualnych i komercyjnych.
              </p>
              <p>
                Nasz showroom mieści się w zabytkowym budynku Opery Narodowej przy Placu Piłsudskiego 9 w Warszawie. W Luxarte możesz uzyskać prawdziwe doświadczenie marki Bentley Home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bentley-cinema-cta-section" data-scroll-animate>
        <Link href="/bentley-home-cinema/rezerwacja" className="bentley-cinema-cta-btn">
          ZAREZERWUJ TERMIN
        </Link>
      </section>

      {/* Partner Section */}
      <section className="bentley-cinema-partner-section" data-scroll-animate>
        <h2 className="bentley-cinema-partner-title">PARTNEREM PROJEKTU JEST FIRMA</h2>
        <a href="https://cinematic.pl/showroom-kino/" target="_blank" rel="noopener noreferrer" className="bentley-cinema-partner-logo">
          <Image
            src={mediaUrl('/media/pages/bentley-home-cinema/cinematic-logo.png')}
            alt="Cinematic"
            width={1728}
            height={307}
            sizes="(max-width: 600px) 80vw, 400px"
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          />
        </a>
      </section>
    </main>
  );
}
