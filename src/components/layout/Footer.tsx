import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>LUXARTE WARSZAWA SHOWROOM</h3>
          <address>
            Budynek Opery Narodowej<br />
            Plac Piłsudskiego 9<br />
            00-078 Warszawa
          </address>
          <p>
            <a href="tel:+48226290458">+48 22 629 04 58</a><br />
            <a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>LUXARTE WROCŁAW PROJECT DEPARTMENT</h3>
          <address>
            ul. Księcia Witolda 42/1<br />
            50-202 Wrocław
          </address>
          <p>
            <a href="tel:+48507047399">+48 507 047 399</a><br />
            <a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>NASZE MARKI</h3>
          <ul className="footer-brands-list">
            <li><Link href="/brand/dolce-gabbana">Dolce &amp; Gabbana</Link></li>
            <li><Link href="/brand/versace-home">Versace Home</Link></li>
            <li><Link href="/brand/roberto-cavalli">Roberto Cavalli Home Interiors</Link></li>
            <li><Link href="/brand/trussardi-casa">Trussardi Casa</Link></li>
            <li><Link href="/brand/bentley-home">Bentley Home</Link></li>
            <li><Link href="/brand/bugatti-home">Bugatti Home</Link></li>
            <li><Link href="/brand/visionnaire">Visionnaire</Link></li>
            <li><Link href="/brand/valcucine">Valcucine</Link></li>
            <li><Link href="/brand/gaggenau">Gaggenau</Link></li>
            <li><Link href="/brand/scic">SCIC Italia</Link></li>
            <li><Link href="/brand/vanory">Vanory</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>MEDIA SPOŁECZNOŚCIOWE</h3>
          <div className="footer-social">
            <a 
              href="https://www.facebook.com/Luxarte1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/luxarte/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxArte - Fashion for Home. Wszystkie prawa zastrzeżone.</p>
        <p className="footer-credits">Projekt i realizacja: <a href="https://alpacastudio.pl/" target="_blank" rel="noopener noreferrer">Alpaca Studio - Agencja Marketingowa Warszawa</a></p>
      </div>
    </footer>
  );
}
