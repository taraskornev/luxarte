'use client';

import { useState, FormEvent } from 'react';

// Note: metadata must be in a separate layout.tsx for client components
// or use generateMetadata in a parent server component

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Adres e-mail jest wymagany';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy adres e-mail';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Local only - no external service
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <main className="content-page">
      <div className="content-page-container">
        <h1 className="content-page-title">NAPISZ, ZADZWOŃ, ODWIEDŹ NAS</h1>

        <p className="contact-intro">
          Zapraszamy do kontaktu. Nasi konsultanci chętnie odpowiedzą na wszystkie pytania 
          dotyczące oferty, projektów oraz dostępności produktów w naszych showroomach.
        </p>

        {/* Contact Info Grid */}
        <section className="contact-info-grid">
          <div className="contact-info-card">
            <h3 className="contact-info-label">Adres - Warszawa</h3>
            <address className="contact-info-value">
              Budynek Opery Narodowej<br />
              Plac Piłsudskiego 9<br />
              00-078 Warszawa
            </address>
          </div>

          <div className="contact-info-card">
            <h3 className="contact-info-label">Adres - Wrocław</h3>
            <address className="contact-info-value">
              ul. Księcia Witolda 42/1<br />
              50-202 Wrocław
            </address>
          </div>

          <div className="contact-info-card">
            <h3 className="contact-info-label">Telefon</h3>
            <p className="contact-info-value">
              <a href="tel:+48226290458">+48 22 629 04 58</a><br />
              <a href="tel:+48507047399">+48 507 047 399</a>
            </p>
          </div>

          <div className="contact-info-card">
            <h3 className="contact-info-label">E-mail</h3>
            <p className="contact-info-value">
              <a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a><br />
              <a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a>
            </p>
          </div>

          <div className="contact-info-card">
            <h3 className="contact-info-label">Godziny otwarcia</h3>
            <p className="contact-info-value">
              Poniedziałek – Piątek: 10:00 – 18:00<br />
              Sobota: po wcześniejszym umówieniu<br />
              Niedziela: nieczynne
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2 className="contact-form-title">Wyślij wiadomość</h2>
          
          {submitted ? (
            <div className="contact-form-success">
              <p>Dziękujemy za wiadomość. Odpowiemy najszybciej jak to możliwe.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Imię i nazwisko <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Adres e-mail <span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="form-label">
                  Wiadomość <span className="form-required">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="form-submit">
                Wyślij wiadomość
              </button>
            </form>
          )}
        </section>

        {/* Note */}
        <article className="content-page-body contact-note">
          <p>
            W celu zapewnienia najwyższej jakości obsługi, wszystkie prezentacje i spotkania 
            w naszym showroomie odbywają się wyłącznie po wcześniejszym umówieniu. 
            Zapraszamy do kontaktu telefonicznego lub mailowego.
          </p>
        </article>
      </div>
    </main>
  );
}
