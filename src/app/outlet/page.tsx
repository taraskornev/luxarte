import Link from 'next/link';

export const metadata = {
  title: 'Outlet - LuxArte - Fashion for Home',
  description: 'ZOBACZ MEBLE NAJLEPSZYCH MAREK DOSTĘPNE OD RĘKI W SHOWROOM\'ACH LUXARTE! CENY OBNIŻONE NAWET DO – 60 %.',
};

const outletCategories = [
  { name: 'SOFY', slug: '/quick-ship-luxarte-sofy' },
  { name: 'FOTELE', slug: '/quick-ship-luxarte-fotele' },
  { name: 'STOLIKI', slug: '/quick-ship-luxarte-stoliki' },
  { name: 'DYWANY', slug: '/quick-ship-luxarte-dywany' },
  { name: 'OŚWIETLENIE', slug: '/quick-ship-luxarte-oswietlenie' },
  { name: 'STOŁY I KRZESŁA', slug: '/quick-ship-luxarte-stoly-i-krzesla' },
  { name: 'REGAŁY I KOMODY', slug: '/quick-ship-luxarte-regaly-i-komody' },
  { name: 'PODUSZKI I PLEDY', slug: '/quick-ship-luxarte-poduszki-i-pledy' },
  { name: 'AKCESORIA', slug: '/quick-ship-luxarte-akcesoria-dekoracyjne' },
];

export default function OutletPage() {
  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">OUTLET</h1>

        <article className="content-page-body outlet-hero">
          <h2 className="outlet-headline">ZOBACZ MEBLE NAJLEPSZYCH MAREK DOSTĘPNE OD RĘKI W SHOWROOM'ACH LUXARTE!</h2>
          <p className="outlet-discount">CENY OBNIŻONE NAWET DO – 60 %.</p>
          <p className="outlet-cta-text">ZAPYTAJ O CENĘ I UMÓW DOGODNY TERMIN DOSTAWY!</p>
        </article>

        <section className="outlet-categories">
          <div className="outlet-categories-grid">
            {outletCategories.map((cat, index) => (
              <Link key={index} href={cat.slug} className="outlet-category-btn">
                {cat.name}
              </Link>
            ))}
          </div>
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

        <section className="content-page-cta">
          <h2>Zapytaj o ofertę</h2>
          <p>
            Skontaktuj się z nami, aby poznać aktualną ofertę outletową.
          </p>
          <Link href="/kontakt" className="content-cta-button">Kontakt</Link>
        </section>
      </div>
    </main>
  );
}
