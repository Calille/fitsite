/*
 * Google Analytics 4 utilities, built on @next/third-parties.
 * The GA script itself is only mounted after cookie consent is granted
 * (see components/GoogleAnalytics.tsx), so these helpers stay quiet
 * until then: sendGAEvent just pushes to a dataLayer nobody reads.
 */

import { sendGAEvent } from '@next/third-parties/google';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

/** GA is off in development and until a real measurement ID is configured. */
export const isAnalyticsEnabled = (): boolean => {
  return process.env.NODE_ENV !== 'development' && GA_MEASUREMENT_ID.startsWith('G-');
};

export interface WebVitalsMetric {
  id: string;
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  label?: string;
}

/** Reports Core Web Vitals to GA4. */
export function reportWebVitals(metric: WebVitalsMetric): void {
  if (!isAnalyticsEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.info('Web Vitals (dev):', metric);
    }
    return;
  }

  // CLS is a fraction; scale it so GA's integer `value` keeps precision.
  const value = Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value);

  sendGAEvent('event', 'web_vitals', {
    event_category: 'Web Vitals',
    event_label: metric.name,
    value,
    metric_id: metric.id,
    metric_rating: metric.rating,
    non_interaction: true,
  });
}

/** Sends a custom event to GA4. */
export function trackEvent(
  action: string,
  params: Record<string, unknown> = {},
): void {
  if (!isAnalyticsEnabled()) {
    return;
  }
  sendGAEvent('event', action, params);
}

/** The one conversion this page cares about: a click on a buy button. */
export function trackCheckoutClick(location: 'hero' | 'pricing' | 'final_cta'): void {
  trackEvent('begin_checkout', {
    event_category: 'ecommerce',
    event_label: location,
    cta_location: location,
  });
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
