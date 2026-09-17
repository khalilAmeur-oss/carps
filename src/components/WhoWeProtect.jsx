import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import sectionImage from '../assets/imageye___-_imgi_5_img-assurance-sante.jpg';

const WhoWeProtect = () => {
  const { t } = useLanguage();

  const icons = [
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V9l8-5 8 5v13"></path><path d="M9 22V12h6v10"></path></svg>,
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>
  ];

  return (
    <section className='audience' id='who-we-protect' aria-labelledby='audience-heading'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>{t.audiences.label}</span>
          <h2 className='section-title' id='audience-heading'>{t.audiences.title}</h2>
          <p className='section-subtitle'>{t.audiences.subtitle}</p>
        </div>
        <div className='audience__grid'>
          {t.audiences.cards.map((card, i) => (
            <div className='audience-card' key={i}>
              <div className='audience-card__icon' aria-hidden='true'>
                {icons[i]}
              </div>
              <h3 className='audience-card__title'>{card.title}</h3>
              <p className='audience-card__desc'>{card.desc}</p>
              <ul className='audience-card__list'>
                {card.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href='#contact' className='audience-card__cta'>{card.cta} <span aria-hidden='true'>→</span></a>
            </div>
          ))}
        </div>
        {/* Section image */}
        <div className='audience__image-wrapper' style={{marginTop: '48px', borderRadius: '12px', overflow: 'hidden', maxHeight: '340px'}}>
          <img src={sectionImage} alt='International flags displayed on a European building facade' loading='lazy' style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
      </div>
    </section>
  );
};

export default WhoWeProtect;
