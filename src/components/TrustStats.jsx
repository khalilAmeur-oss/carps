import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        let startTime;
        const duration = 2000;
        
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          // ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          setCount(Math.floor(easeOut * target));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        requestAnimationFrame(animate);
        observer.disconnect(); // only animate once
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
};

const TrustStats = () => {
  const { t } = useLanguage();

  return (
    <section className="trust-bar" aria-label="Key statistics">
      <div className="trust-bar__container">
        <div className="trust-bar__item">
          <span className="trust-bar__number">1974</span>
          <span className="trust-bar__label">{t.trust.founded}</span>
        </div>
        <div className="trust-bar__divider" aria-hidden="true" />
        
        <div className="trust-bar__item">
          <span className="trust-bar__number"><AnimatedCounter target={110} />+</span>
          <span className="trust-bar__label">{t.trust.countries}</span>
        </div>
        <div className="trust-bar__divider" aria-hidden="true" />
        
        <div className="trust-bar__item">
          <span className="trust-bar__number"><AnimatedCounter target={500} /></span>
          <span className="trust-bar__label">{t.trust.missions}</span>
        </div>
        <div className="trust-bar__divider" aria-hidden="true" />
        
        <div className="trust-bar__item">
          <span className="trust-bar__number"><AnimatedCounter target={40} />+</span>
          <span className="trust-bar__label">{t.trust.networks}</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
