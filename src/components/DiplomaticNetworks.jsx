import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { countryStats } from '../data/translations';
import networkImage from '../assets/imageye___-_imgi_11_img-02.jpg';

const DiplomaticNetworks = () => {
  const { t } = useLanguage();

  return (
    <section className="networks" aria-labelledby="networks-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.networks.label}</span>
          <h2 className="section-title section-title--light" id="networks-heading">
            {t.networks.title}
          </h2>
        </div>
        <div className="networks__grid">
          {countryStats.map((c) => (
            <div className="networks__item" key={c.name}>
              <span className="networks__country">{c.name}</span>
              <span className="networks__number">{c.count}</span>
              <span className="networks__unit">{t.networks.countriesUnit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiplomaticNetworks;
