// src/config/tracking.ts
// Configuration centralisée pour les IDs de tracking (GTM, Meta Pixel, Google Ads)

export const trackingConfig = {
  gtmId: 'GTM-XXXXXXX', // [À COMPLÉTER PAR LE CLIENT]
  metaPixelId: 'XXXXXXXXXXXXXXX', // [À COMPLÉTER PAR LE CLIENT]
  googleAdsId: 'AW-XXXXXXXXX', // [À COMPLÉTER PAR LE CLIENT]
};

// Fonctions utilitaires appelées par le code client si nécessaire
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({ event: eventName, ...params });
  }
};
