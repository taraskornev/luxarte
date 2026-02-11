'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

const clientTypes = [
  { value: '', label: 'Wybierz...' },
  { value: 'individual', label: 'Klient indywidualny' },
  { value: 'contract', label: 'Klient kontraktowy' },
  { value: 'architect', label: 'Architekt wnętrz' },
  { value: 'developer', label: 'Deweloper' },
];

export default function BentleyRezerwacjaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clientType: '',
    date: '',
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany';
    }

    if (!formData.clientType) {
      newErrors.clientType = 'Wybierz typ klienta';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log('Reservation submitted:', formData);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <main className="content-page bentley-booking-page">
      {/* Hero Section */}
      <div className="bentley-booking-hero">
        <Image
          src={mediaUrl('/media/pages/bentley-home-cinema/reservation-hero.jpg')}
          alt="Bentley Home Cinema - Rezerwacja"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="bentley-booking-hero-overlay" />
        <div className="bentley-booking-hero-content">
          <span className="bentley-booking-hero-label">REZERWACJA TERMINU</span>
          <h1 className="bentley-booking-hero-title">
            ZAREZERWUJ SWOJE WYJĄTKOWE DOŚWIADCZENIE<br />
            <span className="bentley-booking-hero-title--gold">W BENTLEY HOME CINEMA</span>
          </h1>
        </div>
      </div>

      <div className="content-page-container">
        {submitted ? (
          <div className="bentley-booking-success">
            <div className="bentley-booking-success-icon">✓</div>
            <h2>Dziękujemy za rezerwację</h2>
            <p>
              Potwierdzenie zostanie wysłane na adres <strong>{formData.email}</strong>.<br />
              Nasz konsultant skontaktuje się z Tobą w celu potwierdzenia terminu.
            </p>
            <Link href="/bentley-home-cinema" className="content-cta-button content-cta-button--outline">
              Powrót do Bentley Home Cinema
            </Link>
          </div>
        ) : (
          <form className="bentley-booking-form" onSubmit={handleSubmit} noValidate>
            {/* Field 1: Name */}
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

            {/* Field 2: Email */}
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

            {/* Field 3: Phone */}
            <div className="form-field">
              <input
                type="tel"
                id="phone"
                placeholder="Numer telefonu"
                className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Field 4: Client Type (Kim jesteś) */}
            <div className="form-field">
              <select
                id="clientType"
                className={`form-input form-select ${errors.clientType ? 'form-input-error' : ''}`}
                value={formData.clientType}
                onChange={(e) => handleChange('clientType', e.target.value)}
              >
                <option value="">Typ klienta</option>
                {clientTypes.slice(1).map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.clientType && <span className="form-error">{errors.clientType}</span>}
            </div>

            {/* Field 5: Preferred Date (optional) */}
            <div className="form-field">
              <input
                type="text"
                id="date"
                placeholder="Preferowany termin spotkania (opcjonalnie)"
                className="form-input"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
              />
            </div>

            {/* RODO Privacy Text */}
            <div className="bentley-booking-rodo">
              <p>
                Informujemy, że administratorem Pana/Pani danych osobowych w zakresie: imię i nazwisko, 
                adres e-mail, numer telefonu jest LuxArte Marek Cimke ul. Księcia Witolda 42/1, 50-202 
                Wrocław (NIP: 6911137209). Pana/Pani dane osobowe będą przetwarzane na podstawie art. 6 
                ust. 1 lit. b) Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 
                kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych 
                osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 
                95/46/WE (RODO), w celu poinformowania Pana/Panią o dostępności kolekcji w naszej ofercie.
              </p>
            </div>

            {/* CTA Button */}
            <div className="bentley-booking-form-actions">
              <button type="submit" className="form-submit form-submit--brand bentley-booking-submit">
                Wyślij
              </button>
            </div>
          </form>
        )}

        {/* Partner Logos Section */}
        <div className="bentley-booking-partner">
          <p className="bentley-booking-partner-text">
            PROJEKT BENTLEY HOME CINEMA ZOSTAŁ ZREALIZOWANY PRZEZ
          </p>
          <div className="bentley-booking-partner-logos">
            <Link href="/brand/bentley-home" className="bentley-booking-partner-logo">
              <Image
                src={mediaUrl('/media/pages/bentley-home-cinema/bentley-home-logo.png')}
                alt="Bentley Home"
                width={200}
                height={36}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            <a href="https://cinematic.pl/showroom-kino/" target="_blank" rel="noopener noreferrer" className="bentley-booking-partner-logo">
              <Image
                src={mediaUrl('/media/pages/bentley-home-cinema/cinematic-logo.png')}
                alt="Cinematic"
                width={200}
                height={36}
                style={{ objectFit: 'contain' }}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
