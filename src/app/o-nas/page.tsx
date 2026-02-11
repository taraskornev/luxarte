import Image from 'next/image';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'O nas - LuxArte - Fashion for Home',
  description: 'LUX ARTE – SZTUKA LUKSUSU - Nasza historia zaczęła się 25 lat temu jako autorskie studio projektowe, zrodzone z pasji do architektury wnętrz i świadomego designu.',
};

export default function ONasPage() {
  return (
    <main className="about-page">
      <Breadcrumb items={[{ label: 'Strona główna', href: '/' }, { label: 'O nas' }]} />
      {/* Full-height split: Image left, Text right - matches legacy layout */}
      <section className="about-hero">
        {/* Left: Full-height background image */}
        <div className="about-hero__image">
          <Image
            src={mediaUrl('/media/pages/o-nas/showroom.jpg')}
            alt="LuxArte - showroom Bentley Home"
            fill
            priority
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Right: All text content */}
        <div className="about-hero__content">
          <span className="about-hero__label">O NAS</span>
          <h1 className="about-hero__title">LUX ARTE – SZTUKA LUKSUSU</h1>
          
          <div className="about-hero__text">
            <p>
              Nasza historia zaczęła się <strong>25 lat temu</strong> jako autorskie studio projektowe, zrodzone z pasji do architektury wnętrz i świadomego designu. Od samego początku kierowaliśmy się jednym założeniem: tworzyć przestrzenie, które odpowiadają na realne potrzeby klientów i pozostają aktualne mimo zmieniających się trendów. To właśnie dialog z inwestorami oraz ich oczekiwania wyznaczały kierunek rozwoju firmy.
            </p>
            <p>
              Z czasem naturalnym krokiem stała się współpraca z uznanymi, międzynarodowymi markami z branży wnętrzarskiej. Wieloletnie doświadczenie oraz konsekwentna, staranna selekcja partnerów zaowocowały dzisiejszym kształtem firmy – miejsca, w którym <strong>projektowanie spotyka się z najwyższej klasy wyposażeniem wnętrz</strong>.
            </p>
            <p>
              Właścicielem firmy jest <strong>Marek Cimke</strong>, który od lat z niezmiennym zaangażowaniem dba o to, aby potrzeby klientów były zawsze na pierwszym miejscu. Jego filozofia opiera się na przekonaniu, że prawdziwy luksus to połączenie jakości, funkcjonalności i ponadczasowej estetyki. Dlatego w naszej ofercie znajdują się wyłącznie produkty spełniające najwyższe standardy wykonania i komfortu użytkowania.
            </p>
            <p>
              Jesteśmy wyłącznym przedstawicielem w Polsce prestiżowych marek, takich jak <strong>Bentley Home</strong>, <strong>Versace Home</strong>, <strong>Trussardi Casa</strong>, <strong>Bugatti Home</strong> czy <strong>Visionnaire</strong>. Ich kolekcje stanowią harmonijną symbiozę luksusu, rzemiosła, innowacyjnych technologii i designu, który nie ulega chwilowym modom. W Naszym portfolio nie zabraknie również innych cenionych marek włoskich: <strong>Valcucine, Aster Cucine, MissuraEmme, Scic, Poltrona Frau czy Giorgetti</strong>, a także prekursorem sprzętu AGD w sektorze premium – firmą <strong>Gaggenau</strong>.
            </p>
            <p>
              Sześć lat temu do firmy dołączyła również <strong>Marta</strong>, córka właściciela, wnosząc nowe spojrzenie, świeżą energię oraz kontynuację rodzinnych wartości. Jej obecność pozwoliła połączyć wieloletnie doświadczenie z nowoczesnym podejściem do projektowania i obsługi klienta, wzmacniając fundamenty firmy i przygotowując ją na kolejne lata rozwoju.
            </p>
            <p>
              Dziś oferujemy nie tylko luksusowe wyposażenie wnętrz, ale także <strong>kompleksową obsługę projektową na najwyższym poziomie</strong>. Naszą misją jest tworzenie przestrzeni, które zachwycają estetyką, zapewniają maksymalny komfort użytkowania i pozostają niezmiennie wyjątkowe przez lata.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
