import { loadScript } from './aem.js';
import { processQueue } from './analytics-lib.js';

/**
 * Loads Google Analytics asynchronously and configures it with the provided GA ID.
 * After the script is loaded, it processes any events in the queue.
 * @returns {Promise<void>} Resolves when the Google Analytics script is loaded and initialized
 */
async function loadGoogleAnalytics() {
  const gaId = 'G-LH6VT47EYE';
  const gaSrc = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

  try {
    // Load the Google Analytics script asynchronously
    await loadScript(gaSrc, {
      type: 'text/javascript',
      async: true,
    });

    // eslint-disable-next-line
    window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', gaId);

    // Process any queued events once GA is loaded
    processQueue();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error loading Google Analytics:', error);
  }
}

// Load Google Analytics and handle the event queue
loadGoogleAnalytics();
