'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { mediaUrl } from '@/lib/buildMode';

export default function ContactPage() {
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
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
        <h1 className="content-page-title">WRITE, CALL, OR VISIT US</h1>

        {/* Location 1: Warsaw */}
        <section className="contact-location-block">
          <div className="contact-location-image contact-location-image--hover">
            <Image
              src={mediaUrl('/media/pages/kontakt/showroom-warszawa.jpg')}
              alt="LuxArte Warsaw Showroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="contact-location-info">
            <h2 className="contact-location-title">LUXARTE – WARSAW SHOWROOM</h2>
            <address className="contact-location-address">
              National Opera Building<br />
              Plac Piłsudskiego 9<br />
              00-078 Warsaw, Poland
            </address>
            <div className="contact-location-details">
              <p><a href="tel:+48226290458">+48 22 629 04 58</a></p>
              <p><a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a></p>
            </div>
            <div className="contact-location-hours">
              <p><strong>Opening hours:</strong></p>
              <p>Monday – Friday: 10:00 – 18:00</p>
              <p>Saturday: 11:00 – 15:00</p>
            </div>
          </div>
        </section>

        {/* Location 2: Wrocław */}
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
              50-202 Wrocław, Poland
            </address>
            <div className="contact-location-details">
              <p><a href="tel:+48507047399">+48 507 047 399</a></p>
              <p><a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a></p>
            </div>
            <div className="contact-location-hours">
              <p><strong>Opening hours:</strong></p>
              <p>Monday – Friday: 10:00 – 18:00</p>
              <p>Saturday: 11:00 – 15:00</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <h2 className="contact-form-title">Send a message</h2>
          
          {submitted ? (
            <div className="contact-form-success">
              <p>Thank you for your message. We will respond as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Full name <span className="form-required">*</span>
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
                  Email address <span className="form-required">*</span>
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
                  Phone
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
                  Message <span className="form-required">*</span>
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

              <button type="submit" className="form-submit form-submit--brand">
                Send message
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
