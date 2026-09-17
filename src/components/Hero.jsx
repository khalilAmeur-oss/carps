import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import QuoteForm from './QuoteForm';
import heroImage from '../assets/imageye___-_imgi_22_first-img.jpg';

const Hero = () => {
  const { t } = useLanguage();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Simple reveal effect after mount
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`hero ${revealed ? 'revealed' : ''}`} id="hero" aria-labelledby="hero-heading">
      <div className="hero__bg" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
        <img 
          src={heroImage} 
          alt="" 
          className="hero__bg-image" 
          loading="eager" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, mixBlendMode: 'luminosity' }}
        />
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero__title" id="hero-heading">{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <p className="hero__description">{t.hero.description}</p>
          
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">{t.hero.yearsNum}</span>
              <span className="hero__stat-label">{t.hero.yearsLabel}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">{t.hero.countriesNum}</span>
              <span className="hero__stat-label">{t.hero.countriesLabel}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">{t.hero.missionsNum}</span>
              <span className="hero__stat-label">{t.hero.missionsLabel}</span>
            </div>
          </div>
          
          <div className="hero__actions">
            <a href="#contact" className="btn btn--gold btn--lg">{t.hero.cta} <span aria-hidden="true">→</span></a>
            <div className="hero__secondary">
              <span className="hero__secondary-text">{t.hero.secondaryText}</span>
              <a href="tel:+33148245520" className="hero__phone-link">+33 1 48 24 55 20</a>
            </div>
          </div>
        </div>
        
        <div className="hero__form-wrapper">
          <QuoteForm formId="hero" variant="hero" />
          
          <div className="hero__reassurance">
            <span className="hero__reassurance-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b08b57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {t.hero.reassurance1}
            </span>
            <span className="hero__reassurance-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b08b57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {t.hero.reassurance2}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
