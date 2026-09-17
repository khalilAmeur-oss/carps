import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function GoogleLocation() {
  const { t } = useLanguage();

  const googleMapsUrl = "https://www.google.com/maps?cid=3470206833618721962";
  const mapEmbedUrl = "https://maps.google.com/maps?q=CARPS%20International,%20168%20Rue%20de%20Grenelle,%2075007%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="google-location section-padding" aria-labelledby="google-location-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.location.label}</span>
          <h2 className="section-title" id="google-location-heading">{t.location.title}</h2>
        </div>

        <div className="google-location__grid">
          {/* Map Column */}
          <div className="google-location__map-col">
            <address className="google-location__address">
              {t.location.address}
            </address>
            <div className="google-location__map-wrapper">
              <iframe 
                src={mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={t.location.title}
                className="google-location__iframe"
              ></iframe>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--outline-gold google-location__btn">
              {t.location.openMap} <span aria-hidden="true" style={{marginLeft: '8px'}}>→</span>
            </a>
          </div>

          {/* Reviews Column */}
          <div className="google-location__reviews-col">
            <div className="google-location__reviews-card">
              <div className="google-location__google-logo" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <h3 className="google-location__reviews-title">{t.location.reviewsTitle}</h3>
              
              <div className="google-location__stars" aria-label={t.location.score}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#FBBC05"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>

              <div className="google-location__score">{t.location.score}</div>
              <p className="google-location__based-on">{t.location.basedOn}</p>

              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn--gold google-location__reviews-btn">
                {t.location.readReviews}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleLocation;
