'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals } from '@/lib/analytics';
import { useConsent } from './ConsentProvider';

/* Reports Core Web Vitals to GA4, gated on the same consent as GA itself. */
export function WebVitals() {
  const { consent } = useConsent();

  useReportWebVitals((metric) => {
    if (consent === 'granted') {
      reportWebVitals(metric);
    }
  });

  return null;
}
