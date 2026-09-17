import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="mobile-cta" aria-label={t.mobileCta.text}>
      <a href="#contact" className="mobile-cta__btn">
        {t.mobileCta.text} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
};

export default MobileCTA;
