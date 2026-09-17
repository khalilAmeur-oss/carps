import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhyCarps = () => {
  const { t } = useLanguage();

  return (
    <section className='why-carps' id='why-carps' aria-labelledby='why-heading'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>{t.whyCarps.label}</span>
          <h2 className='section-title' id='why-heading'>{t.whyCarps.title}</h2>
          <p className='section-subtitle'>{t.whyCarps.subtitle}</p>
        </div>
        <div className='why-carps__grid'>
          {t.whyCarps.features.map((f, i) => (
            <div className='feature-block' key={i}>
              <span className='feature-block__number' aria-hidden='true'>{f.num}</span>
              <h3 className='feature-block__title'>{f.title}</h3>
              <p className='feature-block__text'>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCarps;
