/**
 * Utility functions for analytics and campaign tracking
 */

interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  [key: string]: string | undefined;
}

/**
 * Get UTM parameters from the current URL
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UtmParams = {};
  
  // Extract UTM parameters
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      utmParams[param] = value;
    }
  });
  
  return utmParams;
}

/**
 * Store UTM parameters in session storage for attribution across pages
 */
export function storeUtmParams(): void {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUtmParams();
  
  // Only store if we have at least one UTM parameter
  if (Object.keys(utmParams).length > 0) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
}

/**
 * Get stored UTM parameters from session storage
 */
export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  
  try {
    const storedParams = sessionStorage.getItem('utm_params');
    return storedParams ? JSON.parse(storedParams) : {};
  } catch (e) {
    console.error('Error retrieving UTM params:', e);
    return {};
  }
}

/**
 * Track events in Google Tag Manager with UTM attribution
 */
export function trackEvent(eventName: string, eventData: Record<string, any> = {}): void {
  if (typeof window === 'undefined' || !window.dataLayer) return;

  // Add UTM parameters to event data if available
  const utmParams = getStoredUtmParams();
  
  window.dataLayer.push({
    event: eventName,
    ...eventData,
    ...utmParams
  });
}

/**
 * Track a form submission with proper attribution
 */
export function trackFormSubmission(formName: string, formData: Record<string, any> = {}): void {
  trackEvent('form_submission', {
    form_name: formName,
    form_data: formData
  });
}

/**
 * Initialize analytics tracking
 * Call this function once when your app loads
 */
export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return;
  
  // Store UTM parameters from URL in session storage
  storeUtmParams();
  
  // Initialize dataLayer if needed
  window.dataLayer = window.dataLayer || [];
}