import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppWidget = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(true);
  
  const whatsappUrl = `https://wa.me/33601785792?text=${encodeURIComponent(t.whatsapp.prefilled)}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`whatsapp-widget ${expanded ? 'expanded' : ''}`} id="whatsappWidget" role="complementary" aria-label="WhatsApp contact">
      <div className="whatsapp-widget__card">
        <button className="whatsapp-widget__close" onClick={() => setExpanded(false)} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <p className="whatsapp-widget__greeting">{t.whatsapp.greeting}</p>
        <p className="whatsapp-widget__message">{t.whatsapp.message}</p>
        <a href={whatsappUrl} className="whatsapp-widget__btn" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px'}}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {t.whatsapp.button}
        </a>
      </div>
      <button className="whatsapp-widget__icon" onClick={() => setExpanded(e => !e)} aria-label="Open WhatsApp chat">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
