/**
 * ============================================================================
 * FAQ ACCORDION COMPONENT - LUXARTE
 * ============================================================================
 *
 * Accessible accordion component for FAQ sections.
 * ARIA-compliant with keyboard navigation support.
 *
 * @version 1.0.0
 */

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export interface FAQAccordionProps {
  readonly items: readonly FAQItem[];
  readonly title?: string;
  readonly id?: string;
  readonly defaultOpen?: number;
}

/**
 * Generate FAQ JSON-LD schema
 */
function generateFAQSchema(items: readonly FAQItem[]): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return JSON.stringify(schema);
}

/**
 * Generate unique ID for accordion items
 */
function generateId(prefix: string, index: number): string {
  return `${prefix}-${index}`;
}

/**
 * FAQAccordion Component
 *
 * Renders an accessible accordion with FAQ items.
 * Includes FAQPage schema.org structured data.
 */
export function FAQAccordion({
  items,
  title = 'Często zadawane pytania',
  id = 'faq',
  defaultOpen = -1,
}: FAQAccordionProps): string {
  if (items.length === 0) {
    return '';
  }

  const accordionItems = items
    .map((item, index) => {
      const isOpen = index === defaultOpen;
      const headingId = generateId(`${id}-heading`, index);
      const panelId = generateId(`${id}-panel`, index);

      return `
        <div class="faq-accordion__item" data-accordion-item>
          <h3 class="faq-accordion__heading">
            <button
              type="button"
              class="faq-accordion__trigger${isOpen ? ' faq-accordion__trigger--active' : ''}"
              id="${headingId}"
              aria-expanded="${isOpen}"
              aria-controls="${panelId}"
              data-accordion-trigger
            >
              <span class="faq-accordion__question">${item.question}</span>
              <span class="faq-accordion__icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    class="faq-accordion__icon-line faq-accordion__icon-line--horizontal"
                    d="M4 10h12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    class="faq-accordion__icon-line faq-accordion__icon-line--vertical"
                    d="M10 4v12"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </button>
          </h3>
          <div
            id="${panelId}"
            class="faq-accordion__panel${isOpen ? ' faq-accordion__panel--open' : ''}"
            role="region"
            aria-labelledby="${headingId}"
            ${isOpen ? '' : 'hidden'}
            data-accordion-panel
          >
            <div class="faq-accordion__content">
              <p class="faq-accordion__answer">${item.answer}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <section class="faq-accordion" aria-labelledby="${id}-title" data-accordion>
      <h2 id="${id}-title" class="faq-accordion__title">${title}</h2>
      
      <div class="faq-accordion__list" role="presentation">
        ${accordionItems}
      </div>

      <!-- FAQ Schema -->
      <script type="application/ld+json">
        ${generateFAQSchema(items)}
      </script>
    </section>
  `.trim();
}

/**
 * FAQ Accordion JavaScript (inline for SSR)
 *
 * Include this script on pages with FAQ accordions.
 */
export const FAQAccordionScript = `
<script>
(function() {
  'use strict';

  function initAccordions() {
    const accordions = document.querySelectorAll('[data-accordion]');
    
    accordions.forEach(function(accordion) {
      const triggers = accordion.querySelectorAll('[data-accordion-trigger]');
      
      triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
          const panelId = this.getAttribute('aria-controls');
          const panel = document.getElementById(panelId);
          
          if (!panel) return;
          
          // Toggle current panel
          this.setAttribute('aria-expanded', !isExpanded);
          this.classList.toggle('faq-accordion__trigger--active', !isExpanded);
          panel.classList.toggle('faq-accordion__panel--open', !isExpanded);
          panel.hidden = isExpanded;
        });
        
        // Keyboard navigation
        trigger.addEventListener('keydown', function(e) {
          const triggers = Array.from(accordion.querySelectorAll('[data-accordion-trigger]'));
          const index = triggers.indexOf(this);
          let targetIndex = -1;
          
          switch (e.key) {
            case 'ArrowDown':
              e.preventDefault();
              targetIndex = (index + 1) % triggers.length;
              break;
            case 'ArrowUp':
              e.preventDefault();
              targetIndex = (index - 1 + triggers.length) % triggers.length;
              break;
            case 'Home':
              e.preventDefault();
              targetIndex = 0;
              break;
            case 'End':
              e.preventDefault();
              targetIndex = triggers.length - 1;
              break;
          }
          
          if (targetIndex >= 0) {
            triggers[targetIndex].focus();
          }
        });
      });
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordions);
  } else {
    initAccordions();
  }
})();
</script>
`.trim();

export default FAQAccordion;
