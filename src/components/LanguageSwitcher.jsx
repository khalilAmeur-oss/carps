import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import flagEn from '../assets/imageye___-_imgi_3_flag-en.png';
import flagFr from '../assets/imageye___-_imgi_4_flag-fr.png';

const LanguageSwitcher = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="lang-switcher" role="group" aria-label="Language selection">
      <button 
        className={`lang-switcher__btn ${language === 'en' ? 'active' : ''}`} 
        onClick={() => setLanguage('en')} 
        aria-pressed={language === 'en'} 
        aria-label={t.lang.switchEn}
      >
        <img src={flagEn} alt="" width="18" height="13" className="lang-switcher__flag" /> EN
      </button>
      <span className="lang-switcher__sep">|</span>
      <button 
        className={`lang-switcher__btn ${language === 'fr' ? 'active' : ''}`} 
        onClick={() => setLanguage('fr')} 
        aria-pressed={language === 'fr'} 
        aria-label={t.lang.switchFr}
      >
        <img src={flagFr} alt="" width="18" height="13" className="lang-switcher__flag" /> FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
