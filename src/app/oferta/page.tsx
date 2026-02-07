import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Oferta - LuxArte - Fashion for Home',
  description: 'Kompleksowa oferta LuxArte: doradztwo, sprzedaż, montaż i serwis luksusowych mebli i wyposażenia wnętrz.',
};

export default function OfertaPage() {
  return (
    <main className="content-page oferta-page">
      <div className="content-page-container">
        <h1 className="content-page-title">OFERTA</h1>

        <div className="oferta-services">
          <section className="oferta-service">
            <h2 className="oferta-service-title">DORADZTWO</h2>
            <p className="oferta-service-text">
              <strong>Wierzymy, że doskonałe wnętrze zaczyna się od rozmowy.</strong> Dlatego w LuxArte stawiamy na otwartą i świadomą współpracę projektową – zarówno z klientami indywidualnymi, jak i architektami. Nasz zespół to nie tylko doradcy – to pasjonaci piękna, którzy z precyzją i wyczuciem pomogą Ci zrealizować nawet najbardziej wymagające wizje. Wsłuchujemy się w potrzeby, inspirujemy się Twoim stylem życia i kompleksowo tworzymy wnętrza, które opowiadają Twoją historię.
            </p>
          </section>

          <section className="oferta-service">
            <h2 className="oferta-service-title">SPRZEDAŻ</h2>
            <p className="oferta-service-text">
              <strong>Wybieramy marki, które wyrażają to, co dla nas najważniejsze: elegancję, trwałość i ponadczasową estetykę.</strong> Nasze portfolio to starannie dobrane kolekcje mebli, oświetlenia i dodatków, które wspierają ideę luksusu w subtelnej, ale wyrazistej jakości. Luxarte to nie tylko showroom – to kuratorski wybór marek, które zostają z nami na lata. Wierzymy, że piękno nie przemija – ewoluuje razem z Tobą.
            </p>
          </section>

          <section className="oferta-service">
            <h2 className="oferta-service-title">MONTAŻ</h2>
            <p className="oferta-service-text">
              <strong>Każdy element wnętrza ma znaczenie.</strong> Dlatego dostawę i montaż powierzamy wyłącznie wyszkolonym specjalistom, dla których precyzja to codzienność. Nasz zespół techniczny traktuje każde zlecenie z dbałością, jakiej oczekujesz od usług klasy premium. Niezależnie od skali projektu, masz pewność, że końcowy efekt będzie dokładnie taki, jak zaplanowano – harmonijny, estetyczny, doskonale wykonany.
            </p>
          </section>

          <section className="oferta-service">
            <h2 className="oferta-service-title">SERWIS</h2>
            <p className="oferta-service-text">
              <strong>Nasza relacja nie kończy się po montażu.</strong> LuxArte to partner na lata – i pokolenia. Dzięki regularnemu serwisowi, wsparciu posprzedażowemu i otwartości na przyszłe zmiany, Twoje wnętrze może dojrzewać razem z Tobą. Z dumą wracamy do domów, które tworzyliśmy lata temu, by kontynuować ich historię. Właśnie tak rozumiemy luksus – jako trwałość, dbałość i ciągłość.
            </p>
          </section>
        </div>

        <section className="oferta-cta-section">
          <h2 className="oferta-cta-title">SPOTKAJMY SIĘ</h2>
          <div className="oferta-cta-images">
            <div className="oferta-cta-image">
              <Image
                src="/media/oferta/warszawa-adres.jpg"
                alt="LuxArte Warszawa Showroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="oferta-cta-image">
              <Image
                src="/media/oferta/wroclaw-adres.jpg"
                alt="LuxArte Wrocław Project Department"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <Link href="/kontakt" className="content-cta-button">Zarezerwuj termin</Link>
        </section>

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
