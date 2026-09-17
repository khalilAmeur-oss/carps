import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FinalCTA = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/33601785792?text=${encodeURIComponent(t.whatsapp.prefilled)}`;

  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container">
        <div className="final-cta__content">
          <h2 className="final-cta__title" id="final-cta-heading">
            {t.finalCta.title}
          </h2>
          <p className="final-cta__subtitle">{t.finalCta.subtitle}</p>
          <div className="final-cta__actions">
            <a href="#contact" className="btn btn--gold btn--lg">
              {t.finalCta.cta} <span aria-hidden="true">→</span>
            </a>
            <a href={whatsappUrl} className="btn btn--outline-gold" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {t.finalCta.whatsapp}
            </a>
          </div>
          <a href="tel:+33148245520" className="final-cta__phone">
            +33 1 48 24 55 20
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
