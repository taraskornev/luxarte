import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

export const metadata = {
  title: 'Exclusive Home Cinema - Private Screening Room - BENTLEY HOME CINEMA - LuxArte - Fashion for Home',
  description: 'Exclusive home cinema - Private screening room - BENTLEY HOME CINEMA. Showroom furnished with Bentley Home furniture featuring a professional audio-video system by Procella Audio, Sony 4K, Screen Research.',
};

export default function BentleyHomeCinemaPageEN() {
  return (
    <main className="content-page bentley-cinema-page">
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
          <span className="bentley-cinema-showroom-label">WARSAW SHOWROOM</span>
          <h1 className="bentley-cinema-hero-title">BENTLEY HOME CINEMA</h1>
          <Link href="/en/bentley-home-cinema/reservation" className="bentley-cinema-cta-btn">
            BOOK AN APPOINTMENT
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
                Our desire for growth and delivering inspiration to our clients resulted in a new project within the Warsaw showroom of LuxArte.
              </p>
              <p>
                Bentley Home Cinema is a unique place on the map of Europe.
              </p>
              <p>
                In collaboration with Cinematic, a company specializing in professional audio-video equipment, we undertook creating a luxury space furnished with Bentley Home furniture, designed for watching films with the highest quality sound and image.
              </p>
              <p>
                We have created an intimate, exclusive space that speaks to the authenticity of the Bentley brand in its pursuit of luxury and craftsmanship, while delivering a sensory experience. Bentley Home Cinema presents unparalleled clarity of image and sound, while naturally incorporating the brand&apos;s signature design details. Every detail harmoniously contributes to an unforgettable experience.
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
                In a single room, we can experience up to 3 different cinema systems built around the Procella Audio speaker system. Our flagship configuration is a <strong>7.6.4 Dolby Atmos Waveforming system</strong> built with 22 speakers.
              </p>
              <p>
                The visual effects are delivered by the latest <strong>Sony 4K laser projector</strong>. A unique feature of this projector is its very high brightness of 3,400 ANSI Lumens and XR processor. The projector is mounted in the ceiling using a <strong>DT Motorised Mirror Drop</strong> system, equipped with an automated mirror that discreetly conceals the projector when not in use.
              </p>
              <p>
                The image is displayed on a large <strong>Screen Research DecorMask FDM series screen</strong>. It measures 355 cm wide by 200 cm high, giving us a <strong>160-inch diagonal</strong>. Such a large image provides a truly immersive effect – viewers feel &quot;immersed&quot; in the world presented on screen.
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
              alt="Bentley Home Cinema - interior"
              fill
              sizes="(max-width: 999px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
          <div className="bentley-cinema-col bentley-cinema-col--text">
            <div className="bentley-cinema-text-inner">
              <p>
                We invite brand and design enthusiasts to schedule an individual appointment during which we can present the Bentley Home Cinema space and the possibilities we can offer for home cinema projects in both residential and commercial settings.
              </p>
              <p>
                Our showroom is located in the historic National Opera building at Plac Piłsudskiego 9 in Warsaw. At LuxArte, you can experience the true essence of the Bentley Home brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bentley-cinema-cta-section" data-scroll-animate>
        <Link href="/en/bentley-home-cinema/reservation" className="bentley-cinema-cta-btn">
          BOOK AN APPOINTMENT
        </Link>
      </section>

      {/* Partner Section */}
      <section className="bentley-cinema-partner-section" data-scroll-animate>
        <h2 className="bentley-cinema-partner-title">THE PROJECT PARTNER IS</h2>
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
