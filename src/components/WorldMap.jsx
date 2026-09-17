import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import geoUrl from '../data/features.json';
import { useLanguage } from '../context/LanguageContext';

const PARIS_COORDS = [2.3522, 48.8566]; // [lng, lat]

const locations = [
  { name: 'Taiwan', coordinates: [120.9605, 23.6978], count: 82, labelKey: 'missions' },
  { name: 'Lithuania', coordinates: [23.8813, 55.1694], count: 37, labelKey: 'missions' },
  { name: 'Latvia', coordinates: [24.6032, 56.8796], count: 37, labelKey: 'missions' },
  { name: 'Haiti', coordinates: [-72.2852, 18.9712], count: 16, labelKey: 'missions' },
  { name: 'Mongolia', coordinates: [103.8467, 46.8625], count: 12, labelKey: 'missions' },
  { name: 'Moldova', coordinates: [28.3699, 47.4116], count: 11, labelKey: 'missions' },
];

const WorldMap = () => {
  const { t } = useLanguage();
  const [tooltip, setTooltip] = useState(null);

  // Reusable arc function if react-simple-maps doesn't curve natively
  const buildArc = (start, end) => {
    return `M ${start[0]} ${start[1]} Q ${(start[0] + end[0]) / 2} ${(start[1] + end[1]) / 2 - 50} ${end[0]} ${end[1]}`;
  };

  return (
    <div className="world-map-wrapper">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 30] // Centers map slightly
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(255, 255, 255, 0.05)"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "rgba(255, 255, 255, 0.1)" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Lines from Paris */}
        {locations.map((loc, i) => (
          <Line
            key={`line-${i}`}
            from={PARIS_COORDS}
            to={loc.coordinates}
            stroke="var(--gold)"
            strokeWidth={1}
            strokeLinecap="round"
            className="map-line-anim"
            style={{
              strokeDasharray: "4 4",
              opacity: 0.4
            }}
          />
        ))}

        {/* Paris Origin */}
        <Marker coordinates={PARIS_COORDS}>
          <circle r={6} fill="var(--gold)" className="pulse-circle" />
          <circle r={3} fill="#fff" />
        </Marker>

        {/* Destination Markers */}
        {locations.map((loc, i) => (
          <Marker 
            key={`marker-${i}`} 
            coordinates={loc.coordinates}
            onMouseEnter={() => setTooltip(loc)}
            onMouseLeave={() => setTooltip(null)}
            style={{ cursor: "pointer" }}
          >
            <circle r={4} fill="var(--gold)" opacity={0.8} />
            <circle r={8} fill="transparent" /> {/* larger invisible hit area */}
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div className="map-tooltip">
          <strong>{tooltip.name}</strong>
          <div>{tooltip.count} {t.global.missionsLabel || "missions"}</div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
