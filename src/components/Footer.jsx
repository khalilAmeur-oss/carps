import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/carps-blanc.svg';

const Footer = () => {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/33601785792?text=${encodeURIComponent(t.whatsapp.prefilled)}`;

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="CARPS International">
              <img src={logo} alt="CARPS International" style={{ height: '32px', width: 'auto' }} />
            </a>
            <address className="footer__address">
              168 Rue de Grenelle<br />
              75007 Paris<br />
              France
            </address>
            <div className="footer__contact-info">
              <a href="tel:+33148245520" className="footer__contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +33 1 48 24 55 20
              </a>
              <a href={whatsappUrl} className="footer__contact-link" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +33 6 01 78 57 92
              </a>
            </div>
          </div>
          <div className="footer__nav">
            <h3 className="footer__heading">{t.footer.navigation}</h3>
            <ul className="footer__list">
              <li><a href="#who-we-protect" className="footer__link">{t.nav.whoWeProtect}</a></li>
              <li><a href="#why-carps" className="footer__link">{t.nav.whyCarps}</a></li>
              <li><a href="#global-presence" className="footer__link">{t.nav.globalPresence}</a></li>
              <li><a href="#contact" className="footer__link">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div className="footer__nav">
            <h3 className="footer__heading">{t.footer.resources}</h3>
            <ul className="footer__list">
              <li><a href="https://www.carps.fr/" className="footer__link" target="_blank" rel="noopener noreferrer">{t.footer.officialSite}</a></li>
              <li><a href="#" className="footer__link">{t.footer.privacy}</a></li>
              <li><a href="#" className="footer__link">{t.footer.terms}</a></li>
            </ul>
          </div>
          <div className="footer__cta-col">
            <h3 className="footer__heading">{t.footer.getStarted}</h3>
            <p className="footer__cta-text">{t.footer.getStartedText}</p>
            <a href="#contact" className="btn btn--gold btn--sm">{t.footer.requestQuote}</a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">{t.footer.privacy}</a>
            <span className="footer__legal-sep" aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
