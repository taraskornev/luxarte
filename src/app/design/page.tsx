import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Projektowanie wnętrz - LuxArte - Fashion for Home',
  description: 'Sztuka projektowania wnętrz – LuxArte. Kompleksowe usługi projektowania i aranżacji luksusowych wnętrz.',
};

export default function DesignPage() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <Breadcrumb items={[{ label: 'Strona główna', href: '/' }, { label: 'Projektowanie wnętrz' }]} />
        <h1 className="content-page-title">SZTUKA PROJEKTOWANIA WNĘTRZ</h1>

        <div className="design-hero" data-scroll-animate>
          <Image
            src={mediaUrl('/media/design/moodboard-1.webp')}
            alt="Projektowanie wnętrz LuxArte"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <article className="content-page-body">
          <p>
            Firma LuxArte rozpoczęła swoją działalność jako studio projektowe. Obecnie jest to miejsce, w którym kompleksowo kreujemy luksusowe wnętrza dla najbardziej wymagających Klientów. Pracując z takimi markami jak Versace Home, Dolce&amp;Gabbana Casa, Roberto Cavalli czy Trussardi Casa, w naszym atelier możemy tworzyć wnętrza czerpiące ze świata mody i sygnowane logo największych włoskich domów mody.
          </p>

          <p>
            Bazując na naszym doświadczeniu i wiedzy świadczymy kompleksowe usługi w zakresie projektowania i aranżacji wnętrz oferując również pomoc w zakresie nadzoru wykonawczego. Spotkania z klientami odbywają się w przestrzeni naszego showroomu, gdzie można zanurzyć się w atmosferze włoskiego designu i high fashion. Nasza ekspozycja oraz szeroka paleta materiałów wykończeniowych pomaga nam przedstawić potencjał, jaki możemy przenieść do Państwa wnętrza.
          </p>
        </article>

        <section className="design-gallery" data-scroll-animate>
          <div className="design-gallery-grid">
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-2.webp')}
                alt="Projekty wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/moodboard-3.webp')}
                alt="Projekty wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/projektowanie-1.webp')}
                alt="Projektowanie wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="design-gallery-item">
              <Image
                src={mediaUrl('/media/design/projektowanie-3.webp')}
                alt="Projektowanie wnętrz LuxArte"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        <article className="content-page-body">
          <h2 className="content-page-section-title">ETAPY WSPÓŁPRACY</h2>

          <p>
            <strong>1. WIZJA LOKALNA</strong> — Przeprowadzamy wizję lokalną, by zebrać jak najwięcej danych dotyczących wnętrza. Bierzemy pod uwagę wytyczne od Inwestora i tworzymy ramy do dalszej pracy nad projektem.
          </p>

          <p>
            <strong>2. UKŁAD FUNKCJONALNY</strong> — Stworzenie odpowiedniego układu funkcjonalnego powstaje w konsultacji z Klientem, czego efektem będzie kilka propozycji układów funkcjonalnych.
          </p>

          <p>
            <strong>3. WIZUALIZACJE 3D</strong> — Wizualizacje to narzędzie, które pomaga przedstawić Państwu naszą koncepcję wnętrza. Oprócz wizualizacji prezentujemy również moodboard z sugerowaną kolorystyką i selekcją materiałów wykończeniowych.
          </p>

          <p>
            <strong>4. RYSUNKI WYKONAWCZE</strong> — Podsumowaniem etapu kreacji będzie stworzenie specyfikacji technicznej zawierającej szczegóły wykonawcze projektu. Ważnym elementem jest szczegółowy wykaz wszystkich materiałów wykończeniowych z uwzględnieniem elementów wyposażenia i dekoracji.
          </p>

          <p>
            <strong>5. NADZÓR</strong> — Dajemy Państwu możliwość czerpania z naszego wieloletniego doświadczenia oferując opcję Nadzoru autorskiego. Obejmuje on kontrolę nad wykonawcami prac wykończeniowych na terenie inwestycji, by zachować zgodność z projektem.
          </p>
        </article>

        <section className="content-page-cta" data-scroll-animate>
          <h2>Porozmawiajmy o Twoim projekcie</h2>
          <p>Nasze doświadczenie i podejście holistyczne gwarantują wysoką jakość oraz dopracowane rozwiązania dopasowane do potrzeb i oczekiwań klientów.</p>
          <Link href="/kontakt#contact-form" className="content-cta-button">Zapytaj o ofertę</Link>
        </section>
      </div>
    </main>
  );
}
