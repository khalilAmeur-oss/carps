import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import bgImage from '../assets/imageye___-_imgi_28_bg-espace-adh.jpg';

const ClaimsProcess = () => {
  const { t } = useLanguage();

  return (
    <section className='claims' aria-labelledby='claims-heading'>
      <div className='container'>
        <div className='section-header'>
          <span className='section-label'>{t.claims.label}</span>
          <h2 className='section-title' id='claims-heading'>{t.claims.title}</h2>
        </div>
        <div className='claims__steps'>
          {t.claims.steps.map((step, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className='claims__connector' aria-hidden='true' />}
              <div className='claims__step'>
                <div className='claims__step-number' aria-hidden='true'>{step.num}</div>
                <h3 className='claims__step-title'>{step.title}</h3>
                <p className='claims__step-text'>{step.text}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className='claims__highlight' style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '32px',
          borderRadius: '12px',
          marginTop: '48px'
        }}>
          <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 0}}></div>
          <div className='claims__highlight-icon' aria-hidden='true' style={{position: 'relative', zIndex: 1, marginBottom: '16px'}}>
            <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='#C9A45C' strokeWidth='1.5'><path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/></svg>
          </div>
          <div className='claims__highlight-content' style={{position: 'relative', zIndex: 1}}>
            <h3 className='claims__highlight-title' style={{color: '#fff', fontSize: '1.25rem', marginBottom: '8px'}}>{t.claims.hospitalTitle}</h3>
            <p className='claims__highlight-text' style={{color: '#f0f0f0', margin: 0}}>{t.claims.hospitalText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsProcess;
