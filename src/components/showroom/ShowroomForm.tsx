/**
 * ============================================================================
 * SHOWROOM FORM COMPONENT
 * ============================================================================
 *
 * Contact/inquiry form with validation and prefill from query params.
 * Stubbed submission with success state.
 *
 * @version 1.0.0
 */

'use client';

import { useState, useCallback, type FormEvent, Suspense } from 'react';
import { showroomData } from '@/data/showroom-data';
import ContextSummary, { useInquiryContext, type InquiryContext } from './ContextSummary';

interface FormData {
  name: string;
  email: string;
  phone: string;
  intent: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  intent?: string;
  message?: string;
  consent?: string;
}

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Phone validation (basic Polish format)
 */
const PHONE_REGEX = /^[\d\s\-+()]{9,}$/;

/**
 * Inner form component that uses searchParams
 */
function ShowroomFormInner() {
  const context = useInquiryContext();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    intent: context.intent,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  /**
   * Validate form data
   */
  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Podaj prawidłowy adres email';
    }

    if (formData.phone && !PHONE_REGEX.test(formData.phone)) {
      newErrors.phone = 'Podaj prawidłowy numer telefonu';
    }

    if (!formData.intent) {
      newErrors.intent = 'Wybierz temat zapytania';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana';
    }

    if (!formData.consent) {
      newErrors.consent = 'Zgoda jest wymagana';
    }

    return newErrors;
  }, [formData]);

  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));

      // Clear error on change
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  /**
   * Handle form submission (stubbed)
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success state
      setIsSubmitting(false);
      setIsSuccess(true);

      // Log form data (for development)
      console.log('Form submitted:', { ...formData, context });
    },
    [formData, context, validate]
  );

  // Success state
  if (isSuccess) {
    return (
      <div className="showroom-form__success">
        <div className="showroom-form__success-icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="showroom-form__success-title">Dziękujemy za wiadomość!</h3>
        <p className="showroom-form__success-text">
          Otrzymaliśmy Twoje zapytanie. Nasz zespół skontaktuje się z Tobą najszybciej
          jak to możliwe.
        </p>
        <button
          type="button"
          className="showroom-form__reset-button"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              intent: context.intent,
              message: '',
              consent: false,
            });
          }}
        >
          Wyślij kolejne zapytanie
        </button>
      </div>
    );
  }

  return (
    <form className="showroom-form" onSubmit={handleSubmit} noValidate>
      {/* Context Summary */}
      <ContextSummary context={context} />

      {/* Name */}
      <div className="showroom-form__field">
        <label htmlFor="name" className="showroom-form__label">
          Imię i nazwisko <span className="showroom-form__required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`showroom-form__input ${errors.name ? 'showroom-form__input--error' : ''}`}
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <span id="name-error" className="showroom-form__error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="showroom-form__field">
        <label htmlFor="email" className="showroom-form__label">
          Adres email <span className="showroom-form__required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`showroom-form__input ${errors.email ? 'showroom-form__input--error' : ''}`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <span id="email-error" className="showroom-form__error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone */}
      <div className="showroom-form__field">
        <label htmlFor="phone" className="showroom-form__label">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`showroom-form__input ${errors.phone ? 'showroom-form__input--error' : ''}`}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          aria-invalid={!!errors.phone}
          placeholder="+48 XXX XXX XXX"
        />
        {errors.phone && (
          <span id="phone-error" className="showroom-form__error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Intent */}
      <div className="showroom-form__field">
        <label htmlFor="intent" className="showroom-form__label">
          Temat zapytania <span className="showroom-form__required">*</span>
        </label>
        <select
          id="intent"
          name="intent"
          value={formData.intent}
          onChange={handleChange}
          className={`showroom-form__select ${errors.intent ? 'showroom-form__select--error' : ''}`}
          aria-describedby={errors.intent ? 'intent-error' : undefined}
          aria-invalid={!!errors.intent}
        >
          <option value="">Wybierz temat...</option>
          {showroomData.intentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.intent && (
          <span id="intent-error" className="showroom-form__error" role="alert">
            {errors.intent}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="showroom-form__field showroom-form__field--full">
        <label htmlFor="message" className="showroom-form__label">
          Wiadomość <span className="showroom-form__required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`showroom-form__textarea ${errors.message ? 'showroom-form__textarea--error' : ''}`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          placeholder="Opisz swoje zapytanie..."
        />
        {errors.message && (
          <span id="message-error" className="showroom-form__error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      {/* Consent */}
      <div className="showroom-form__field showroom-form__field--full">
        <label className="showroom-form__checkbox-label">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="showroom-form__checkbox"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            aria-invalid={!!errors.consent}
          />
          <span className="showroom-form__checkbox-text">
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez LuxArte w celu
            obsługi zapytania. <span className="showroom-form__required">*</span>
          </span>
        </label>
        {errors.consent && (
          <span id="consent-error" className="showroom-form__error" role="alert">
            {errors.consent}
          </span>
        )}
      </div>

      {/* Submit */}
      <div className="showroom-form__actions">
        <button
          type="submit"
          className="showroom-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="showroom-form__spinner" aria-hidden="true" />
              Wysyłanie...
            </>
          ) : (
            <>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Wyślij wiadomość
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/**
 * Wrapper with Suspense for useSearchParams
 */
export default function ShowroomForm() {
  return (
    <Suspense
      fallback={
        <div className="showroom-form showroom-form--loading">
          <div className="showroom-form__skeleton" />
        </div>
      }
    >
      <ShowroomFormInner />
    </Suspense>
  );
}
