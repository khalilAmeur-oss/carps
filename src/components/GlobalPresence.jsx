import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { countryStats } from '../data/translations';
import WorldMap from './WorldMap';

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
        
        <div className='global-presence__map-wrapper'>
          <WorldMap />
        </div>

        {/* Existing stats are now handled by map interaction mostly, but if we need to keep them, we can hide them on desktop or keep them. The prompt said: "Place the new map below this content, using the available empty space intelligently." "Do NOT replace the existing Global Presence text." Let's keep the country stats grid if it existed, but usually the map acts as the visualization of it. 
        Actually, the prompt said: "DO NOT replace the existing Global Presence text... Place the new map below this content, using the available empty space intelligently."
        Let's put the map above the stats or replace the static SVG. */ }
        <div className='global-presence__stats' style={{ marginTop: '32px' }}>
          {countryStats.map(c => (
            <div className='country-stat' key={c.name}>
              <span className='country-stat__name'>{c.name}</span>
              <span className='country-stat__number'>{c.count} <span className='country-stat__unit'>{t.global.countriesUnit || "missions"}</span></span>
            </div>
          ))}
        </div>
        <p className='global-presence__note'>{t.global.note}</p>
      </div>
    </section>
  );
};

export default GlobalPresence;
