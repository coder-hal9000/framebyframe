/**
 * Initializes the event queue from localStorage or sets it as an empty array.
 */
export function initializeEventQueue() {
  try {
    if (!window.customAnalyticsQueue) {
      const storedQueue = localStorage.getItem('ga_event_queue');
      window.customAnalyticsQueue = storedQueue ? JSON.parse(storedQueue) : [];
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize event queue from localStorage', error);
    window.customAnalyticsQueue = [];
  }
}

/**
 * Saves the event queue to localStorage to prevent data loss.
 */
function saveQueueToStorage() {
  try {
    localStorage.setItem('ga_event_queue', JSON.stringify(window.customAnalyticsQueue));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to save event queue to localStorage', error);
  }
}

/**
 * Sends event data to Google Analytics using gtag.
 * @param {Object} eventData The event data to be sent to GA (e.g., event name, category, etc.)
 */
function sendEventToGA(eventData) {
  try {
    window.gtag('event', eventData.event_name, {
      event_category: eventData.event_category || 'general',
      event_label: eventData.event_label || '',
      ...eventData,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('GA Event Failed, Requeueing:', eventData, error);
    window.customAnalyticsQueue.push(eventData);
    saveQueueToStorage();
  }
}

/**
 * Adds an event to the queue if GA is not ready, or sends it immediately if GA is available.
 * @param {Object} eventData The event data to be tracked (e.g., event name, category, etc.)
 */
function queueOrSendEvent(eventData) {
  if (window.gtag) {
    sendEventToGA(eventData);
  } else {
    window.customAnalyticsQueue.push(eventData);
    saveQueueToStorage();
  }
}

/**
 * Processes the event queue and sends any pending events to GA if it's available.
 */
export function processQueue() {
  if (!window.gtag || !window.customAnalyticsQueue.length) return;

  const eventQueue = window.customAnalyticsQueue;
  while (eventQueue.length > 0) {
    const eventData = eventQueue.shift();
    sendEventToGA(eventData);
  }

  saveQueueToStorage();
}

/**
 * Tracks a page view event and queues or sends it based on GA availability.
 */
export async function trackPageView() {
  const eventData = {
    event_name: 'page_view',
    page_path: window.location.pathname,
    page_title: document.title,
    page_url: window.location.href,
  };

  queueOrSendEvent(eventData);
}

/**
 * Tracks interaction events (clicks on links, buttons, etc.) and queues or sends them.
 */
export async function trackInteractions() {
  document.addEventListener(
    'click',
    async (event) => {
      const target = event.target.closest('a, button, [role="button"]');
      if (!target) return;

      const eventData = {
        event_name: 'click',
        event_category: 'user_interaction',
        click_text: target.getAttribute('aria-label') || target.innerText.trim() || 'No Text',
        click_url: target.href || 'No URL',
        click_id: target.id || 'No ID',
        click_class: target.className || 'No Class',
      };

      queueOrSendEvent(eventData);
    },
    { passive: true },
  );
}

/**
 * Initializes the queue and tracking of page views and interactions.
 * This function should be called once during lazy load.
 */
export function trackAnalytics() {
  initializeEventQueue();
  trackPageView();
  trackInteractions();
}
