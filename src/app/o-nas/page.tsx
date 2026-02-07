import Image from 'next/image';

export const metadata = {
  title: 'O nas - LuxArte - Fashion for Home',
  description: 'LUX ARTE – SZTUKA LUKSUSU - Nasza historia zaczęła się 25 lat temu jako autorskie studio projektowe, zrodzone z pasji do architektury wnętrz i świadomego designu.',
};

export default function ONasPage() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">LUX ARTE – SZTUKA LUKSUSU</h1>

        {/* Primary image-text split block */}
        <section className="about-split-block">
          <div className="about-split-image">
            <Image
              src="/media/pages/o-nas/image-01.png"
              alt="LuxArte - showroom"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="about-split-content">
            <p>
              Nasza historia zaczęła się 25 lat temu jako autorskie studio projektowe, zrodzone z pasji do architektury wnętrz i świadomego designu. Od samego początku kierowaliśmy się jednym założeniem: tworzyć przestrzenie, które odpowiadają na realne potrzeby klientów i pozostają aktualne mimo zmieniających się trendów. To właśnie dialog z inwestorami oraz ich oczekiwania wyznaczały kierunek rozwoju firmy.
            </p>
            <p>
              Z czasem naturalnym krokiem stała się współpraca z uznanymi, międzynarodowymi markami z branży wnętrzarskiej. Wieloletnie doświadczenie oraz konsekwentna, staranna selekcja partnerów zaowocowały dzisiejszym kształtem firmy – miejsca, w którym projektowanie spotyka się z najwyższej klasy wyposażeniem wnętrz.
            </p>
          </div>
        </section>

        <article className="content-page-body">
          <p>
            Właścicielem firmy jest <span className="text-emphasis">Marek Cimke</span>, który od lat z niezmiennym zaangażowaniem dba o to, aby potrzeby klientów były zawsze na pierwszym miejscu. Jego filozofia opiera się na przekonaniu, że prawdziwy luksus to połączenie jakości, funkcjonalności i ponadczasowej estetyki. Dlatego w naszej ofercie znajdują się wyłącznie produkty spełniające najwyższe standardy wykonania i komfortu użytkowania.
          </p>

          <p>
            Jesteśmy wyłącznym przedstawicielem w Polsce prestiżowych marek, takich jak <span className="text-emphasis">Bentley Home, Versace Home, Trussardi Casa, Versace Home, Bugatti Home czy Visionnaire</span>. Ich kolekcje stanowią harmonijną symbiozę luksusu, rzemiosła, innowacyjnych technologii i designu, który nie ulega chwilowym modom. W Naszym portfolio nie zabraknie również innych cenionych marek włoskich: <span className="text-emphasis">Valcucine, Aster Cucine, MissuraEmme, Scic, Poltrona Frau czy Giorgetti</span>, a także prekursorem sprzętu AGD w sektorze premium – firmą <span className="text-emphasis">Gaggenau</span>.
          </p>

          <p>
            Sześć lat temu do firmy dołączyła również <span className="text-emphasis">Marta, córka właściciela</span>, wnosząc nowe spojrzenie, świeżą energię oraz kontynuację rodzinnych wartości. Jej obecność pozwoliła połączyć wieloletnie doświadczenie z nowoczesnym podejściem do projektowania i obsługi klienta, wzmacniając fundamenty firmy i przygotowując ją na kolejne lata rozwoju.
          </p>

          <p>
            Dziś oferujemy nie tylko luksusowe wyposażenie wnętrz, ale także kompleksową obsługę projektową na najwyższym poziomie. Naszą misją jest tworzenie przestrzeni, które zachwycają estetyką, zapewniają maksymalny komfort użytkowania i pozostają niezmiennie wyjątkowe przez lata.
          </p>
        </article>

        <section className="content-page-locations">
          <div className="content-location">
            <h2>LUXARTE WARSZAWA SHOWROOM</h2>
            <address>
              Budynek Opery Narodowej<br />
              Plac Piłsudskiego 9<br />
              00-078 Warszawa
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
              50-202 Wrocław
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
