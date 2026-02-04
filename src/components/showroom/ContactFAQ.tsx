/**
 * ============================================================================
 * CONTACT FAQ COMPONENT
 * ============================================================================
 *
 * Accordion FAQ section for contact-related questions.
 *
 * @version 1.0.0
 */

'use client';

import { useState, useCallback } from 'react';
import { showroomData } from '@/data/showroom-data';

export default function ContactFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="contact-faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="contact-faq__heading">
        Często zadawane pytania
      </h2>

      <div className="contact-faq__list">
        {showroomData.faq.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`contact-faq__item ${isOpen ? 'contact-faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="contact-faq__trigger"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${item.id}`}
              >
                <span className="contact-faq__question">{item.question}</span>
                <svg
                  className="contact-faq__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points={isOpen ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
                </svg>
              </button>

              <div
                id={`faq-content-${item.id}`}
                className="contact-faq__content"
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
                hidden={!isOpen}
              >
                <p className="contact-faq__answer">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
