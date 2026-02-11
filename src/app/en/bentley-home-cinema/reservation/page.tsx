'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mediaUrl } from '@/lib/buildMode';

const clientTypes = [
  { value: '', label: 'Select...' },
  { value: 'individual', label: 'Private client' },
  { value: 'contract', label: 'Contract client' },
  { value: 'architect', label: 'Interior architect' },
  { value: 'developer', label: 'Developer' },
];

export default function BentleyReservationPageEN() {
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
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.clientType) {
      newErrors.clientType = 'Please select who you are';
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
          alt="Bentley Home Cinema - Reservation"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="bentley-booking-hero-overlay" />
        <div className="bentley-booking-hero-content">
          <span className="bentley-booking-hero-label">BOOK AN APPOINTMENT</span>
          <h1 className="bentley-booking-hero-title">
            RESERVE YOUR UNIQUE EXPERIENCE<br />
            <span className="bentley-booking-hero-title--gold">AT BENTLEY HOME CINEMA</span>
          </h1>
        </div>
      </div>

      <div className="content-page-container">
        {submitted ? (
          <div className="bentley-booking-success">
            <div className="bentley-booking-success-icon">✓</div>
            <h2>Thank you for your reservation</h2>
            <p>
              A confirmation will be sent to <strong>{formData.email}</strong>.<br />
              Our consultant will contact you to confirm the appointment.
            </p>
            <Link href="/en/bentley-home-cinema" className="content-cta-button content-cta-button--outline">
              Back to Bentley Home Cinema
            </Link>
          </div>
        ) : (
          <form className="bentley-booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <input
                type="text"
                id="name"
                placeholder="Full name"
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
                placeholder="Email address"
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
                placeholder="Phone number"
                className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-field">
              <select
                id="clientType"
                className={`form-input form-select ${errors.clientType ? 'form-input-error' : ''}`}
                value={formData.clientType}
                onChange={(e) => handleChange('clientType', e.target.value)}
              >
                <option value="">Who are you</option>
                {clientTypes.slice(1).map((type) => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.clientType && <span className="form-error">{errors.clientType}</span>}
            </div>

            <div className="form-field">
              <input
                type="text"
                id="date"
                placeholder="Preferred meeting date (optional)"
                className="form-input"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
              />
            </div>

            <div className="bentley-booking-rodo">
              <p>
                We inform you that the administrator of your personal data (name, email address,
                phone number) is LuxArte Marek Cimke, ul. Księcia Witolda 42/1, 50-202
                Wrocław, Poland (NIP: 6911137209). Your personal data will be processed pursuant to
                Art. 6(1)(b) of Regulation (EU) 2016/679 of the European Parliament and of the Council
                of 27 April 2016 on the protection of natural persons with regard to the processing
                of personal data and on the free movement of such data (GDPR), for the purpose of
                informing you about the availability of collections in our offer.
              </p>
            </div>

            <div className="bentley-booking-form-actions">
              <button type="submit" className="form-submit form-submit--brand bentley-booking-submit">
                Submit
              </button>
            </div>
          </form>
        )}

        <div className="bentley-booking-partner">
          <p className="bentley-booking-partner-text">
            THE BENTLEY HOME CINEMA PROJECT WAS REALIZED BY
          </p>
          <div className="bentley-booking-partner-logos">
            <Link href="/en/brand/bentley-home" className="bentley-booking-partner-logo">
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
