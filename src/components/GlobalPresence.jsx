import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { countryStats } from '../data/translations';
import globalImage from '../assets/imageye___-_imgi_13_img-03.jpg';

const GlobalPresence = () => {
  const { t } = useLanguage();

  return (
    <section className='global-presence' id='global-presence' aria-labelledby='global-heading'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>{t.global.label}</span>
          <h2 className='section-title section-title--light' id='global-heading'>{t.global.title}</h2>
          <p className='section-subtitle section-subtitle--light'>{t.global.subtitle}</p>
        </div>
        <div className='global-presence__map' aria-label='World map showing CARPS global coverage'>
          <svg viewBox="0 0 1000 500" fill="none" stroke="#C9A45C" strokeWidth="1" opacity="0.5">
            <path d="M200 150 Q 250 100 300 150 T 400 150 M450 120 Q 500 80 550 120 T 650 120 M700 180 Q 750 130 800 180 T 900 180 M200 300 Q 250 350 300 300 T 400 300 M500 350 Q 550 400 600 350 T 700 350" strokeDasharray="5,5" />
            <circle cx="510" cy="120" r="4" fill="#C9A45C" opacity="1">
              <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className='global-presence__stats'>
          {countryStats.map(c => (
            <div className='country-stat' key={c.name}>
              <span className='country-stat__name'>{c.name}</span>
              <span className='country-stat__number'>{c.count} <span className='country-stat__unit'>{t.global.countriesUnit}</span></span>
            </div>
          ))}
        </div>
        <p className='global-presence__note'>{t.global.note}</p>
      </div>
    </section>
  );
};

export default GlobalPresence;
