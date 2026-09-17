import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import QuoteForm from './QuoteForm';

const QuoteSection = () => {
  const { t } = useLanguage();

  return (
    <section className="quote-section" id="contact" aria-labelledby="quote-section-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.quoteSection.label}</span>
          <h2 className="section-title" id="quote-section-heading">
            {t.quoteSection.title}
          </h2>
          <p className="section-subtitle">{t.quoteSection.subtitle}</p>
        </div>
        <div className="quote-section__form-wrapper">
          <QuoteForm formId="section" variant="section" />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
