import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heritageImage from '../assets/imageye___-_imgi_12_img-01.jpg';
import carpsLogo from '../assets/imageye___-_imgi_1_logo.png';

const Heritage = () => {
  const { t } = useLanguage();

  return (
    <section className='heritage' aria-labelledby='heritage-heading'>
      <div className='heritage__bg-text' aria-hidden='true'>1974</div>
      <div className='container'>
        <div className='heritage__content'>
          <span className='section-label'>{t.heritage.label}</span>
          <h2 className='section-title' id='heritage-heading' style={{whiteSpace: 'pre-line'}}>{t.heritage.title}</h2>
          <div className='heritage__gold-line' aria-hidden='true' />
          <div className='heritage__body' style={{display: 'flex', gap: '48px', alignItems: 'center', marginTop: '32px'}}>
            <div className='heritage__text-col' style={{flex: '1'}}>
              <p className='heritage__text'>{t.heritage.text1}</p>
              <p className='heritage__text'>{t.heritage.text2}</p>
              <a href='#contact' className='btn btn--gold'>{t.heritage.cta} <span aria-hidden='true'>→</span></a>
            </div>
            <div className='heritage__image-col' style={{flex: '0 0 360px'}}>
              <img src={heritageImage} alt='Historic Parisian building entrance' loading='lazy' className='heritage__image' style={{borderRadius: '8px', width: '100%', maxWidth: '360px', objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
