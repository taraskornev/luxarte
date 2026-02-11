'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { mediaUrl } from '@/lib/buildMode';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

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
        <Breadcrumb items={[{ label: 'Strona główna', href: '/' }, { label: 'Kontakt' }]} />
        <h1 className="content-page-title">ZAPRASZAMY DO KONTAKTU</h1>

        {/* Location 1: Warsaw - Image left, Info right */}
        <section className="contact-location-block">
          <div className="contact-location-image contact-location-image--hover">
            <Image
              src={mediaUrl('/media/pages/kontakt/showroom-warszawa.jpg')}
              alt="LuxArte Warszawa Showroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="contact-location-info">
            <h2 className="contact-location-title">LUXARTE – SHOWROOM WARSZAWA</h2>
            <address className="contact-location-address">
              Budynek Teatru Wielkiego – Opery Narodowej<br />
              Plac Piłsudskiego 9<br />
              00-078 Warszawa
            </address>
            <div className="contact-location-details">
              <p><a href="tel:+48226290458">+48 22 629 04 58</a></p>
              <p><a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a></p>
            </div>
            <div className="contact-location-hours">
              <p><strong>Godziny otwarcia:</strong></p>
              <p>Poniedziałek – Piątek: 10:00 – 18:00</p>
              <p>Sobota: 11:00 – 15:00</p>
            </div>
          </div>
        </section>

        {/* Location 2: Wrocław - Info left, Image right */}
        <section className="contact-location-block contact-location-block--reverse">
          <div className="contact-location-image contact-location-image--hover">
            <Image
              src={mediaUrl('/media/pages/kontakt/showroom-wroclaw.png')}
              alt="LuxArte Wrocław Project Department"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="contact-location-info">
            <h2 className="contact-location-title">LUXARTE – PROJECT DEPARTMENT WROCŁAW</h2>
            <address className="contact-location-address">
              ul. Księcia Witolda 42/1<br />
              50-202 Wrocław
            </address>
            <div className="contact-location-details">
              <p><a href="tel:+48507047399">+48 507 047 399</a></p>
              <p><a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a></p>
            </div>
            <div className="contact-location-hours">
              <p><strong>Godziny otwarcia:</strong></p>
              <p>Poniedziałek – Piątek: 10:00 – 18:00</p>
              <p>Sobota: 11:00 – 15:00</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="contact-form-section">
          {submitted ? (
            <div className="contact-form-success">
              <p>Dziękujemy za wiadomość. Odpowiemy najszybciej jak to możliwe.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <input
                  type="text"
                  id="name"
                  placeholder="Imię i nazwisko"
                  className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-field">
                <input
                  type="email"
                  id="email"
                  placeholder="Adres e-mail"
                  className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Telefon"
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>

              <div className="form-field">
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Wiadomość"
                  className={`form-textarea ${errors.message ? 'form-input-error' : ''}`}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="form-submit form-submit--brand">
                Wyślij wiadomość
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
