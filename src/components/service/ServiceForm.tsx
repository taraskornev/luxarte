'use client';

/**
 * ============================================================================
 * SERVICE FORM COMPONENT
 * ============================================================================
 *
 * Multi-step lead capture form for interior design inquiries.
 * Client-side validation, accessible labels, no backend wiring yet.
 *
 * @component ServiceForm
 */

import { useState, useCallback } from 'react';
import { projectTypes, budgetRanges, areaSizes } from '@/data/service-data';

/**
 * Form Data Interface
 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize: string;
  budgetRange: string;
  message: string;
  file: File | null;
}

/**
 * Form Errors Interface
 */
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
}

/**
 * Initial form state
 */
const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  areaSize: '',
  budgetRange: '',
  message: '',
  file: null,
};

/**
 * ServiceForm - Multi-step lead capture form
 */
export function ServiceForm(): JSX.Element {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  /**
   * Validate current step
   */
  const validateStep = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Imię i nazwisko jest wymagane';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email jest wymagany';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Podaj prawidłowy adres email';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Numer telefonu jest wymagany';
      }
    }

    if (step === 2) {
      if (!formData.projectType) {
        newErrors.projectType = 'Wybierz typ projektu';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [step, formData]);

  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  /**
   * Handle file change
   */
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFormData((prev) => ({ ...prev, file }));
    },
    []
  );

  /**
   * Go to next step
   */
  const nextStep = useCallback(() => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  }, [validateStep]);

  /**
   * Go to previous step
   */
  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateStep()) {
        return;
      }

      setIsSubmitting(true);

      // Stub submit handler - simulate network request
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateStep, formData]
  );

  /**
   * Render success state
   */
  if (isSubmitted) {
    return (
      <section
        id="contact-form"
        className="service-form"
        aria-labelledby="form-success-heading"
      >
        <div className="service-form__container">
          <div className="service-form__success">
            <div className="service-form__success-icon" aria-hidden="true">
              ✓
            </div>
            <h2
              id="form-success-heading"
              className="service-form__success-heading"
            >
              Dziękujemy!
            </h2>
            <p className="service-form__success-text">
              Twoje zapytanie zostało wysłane. Skontaktujemy się z Tobą w ciągu
              24 godzin.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="service-form"
      aria-labelledby="form-heading"
    >
      <div className="service-form__container">
        <h2 id="form-heading" className="service-form__heading">
          Zapytaj o projekt
        </h2>
        <p className="service-form__intro">
          Wypełnij formularz, a skontaktujemy się z Tobą w celu omówienia
          szczegółów.
        </p>

        {/* Progress indicator */}
        <div
          className="service-form__progress"
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Krok ${step} z ${totalSteps}`}
        >
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={`service-form__progress-step ${
                i + 1 <= step ? 'service-form__progress-step--active' : ''
              } ${i + 1 < step ? 'service-form__progress-step--completed' : ''}`}
            >
              <span className="service-form__progress-number">{i + 1}</span>
            </div>
          ))}
        </div>

        <form
          className="service-form__form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <div className="service-form__step" data-step="1">
              <h3 className="service-form__step-title">Dane kontaktowe</h3>

              <div className="service-form__field">
                <label htmlFor="name" className="service-form__label">
                  Imię i nazwisko <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`service-form__input ${
                    errors.name ? 'service-form__input--error' : ''
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="service-form__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="service-form__field">
                <label htmlFor="email" className="service-form__label">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`service-form__input ${
                    errors.email ? 'service-form__input--error' : ''
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="service-form__error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="service-form__field">
                <label htmlFor="phone" className="service-form__label">
                  Telefon <span aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`service-form__input ${
                    errors.phone ? 'service-form__input--error' : ''
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className="service-form__error" role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <div className="service-form__step" data-step="2">
              <h3 className="service-form__step-title">Szczegóły projektu</h3>

              <div className="service-form__field">
                <label htmlFor="projectType" className="service-form__label">
                  Typ projektu <span aria-hidden="true">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`service-form__select ${
                    errors.projectType ? 'service-form__select--error' : ''
                  }`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.projectType}
                >
                  <option value="">Wybierz typ projektu</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <span
                    id="projectType-error"
                    className="service-form__error"
                    role="alert"
                  >
                    {errors.projectType}
                  </span>
                )}
              </div>

              <div className="service-form__field">
                <label htmlFor="areaSize" className="service-form__label">
                  Metraż
                </label>
                <select
                  id="areaSize"
                  name="areaSize"
                  value={formData.areaSize}
                  onChange={handleChange}
                  className="service-form__select"
                >
                  <option value="">Wybierz zakres</option>
                  {areaSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="service-form__field">
                <label htmlFor="budgetRange" className="service-form__label">
                  Poziom projektu
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="service-form__select"
                >
                  <option value="">Wybierz poziom</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Message */}
          {step === 3 && (
            <div className="service-form__step" data-step="3">
              <h3 className="service-form__step-title">Wiadomość</h3>

              <div className="service-form__field">
                <label htmlFor="message" className="service-form__label">
                  Opisz swój projekt
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="service-form__textarea"
                  rows={5}
                  placeholder="Opowiedz nam o swoich oczekiwaniach, stylu, inspiracjach..."
                />
              </div>

              <div className="service-form__field">
                <label htmlFor="file" className="service-form__label">
                  Załącznik (opcjonalnie)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  className="service-form__file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                />
                <span className="service-form__file-hint">
                  PDF, JPG, PNG, DOC (maks. 10MB)
                </span>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="service-form__actions">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="service-form__button service-form__button--secondary"
              >
                Wstecz
              </button>
            )}

            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="service-form__button service-form__button--primary"
              >
                Dalej
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="service-form__button service-form__button--primary"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ServiceForm;
