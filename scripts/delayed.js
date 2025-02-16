import { loadScript } from './aem.js';

// add delayed functionality here
async function loadGoogleAnalytics() {
  const gaId = 'G-LH6VT47EYE';
  const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  await loadScript(gaSrc, {
    type: 'text/javascript',
    async: true,
  });
  // eslint-disable-next-line
  window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', gaId);
}

loadGoogleAnalytics();
