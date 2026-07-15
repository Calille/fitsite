'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID, isAnalyticsEnabled } from '@/lib/analytics';
import { useConsent } from './ConsentProvider';

/*
 * Only mounts once the visitor has explicitly accepted analytics cookies.
 * Until then no GA script is injected and no Google request is made,
 * so "reject" genuinely means no data.
 */
export default function GoogleAnalytics() {
  const { consent } = useConsent();

  if (!isAnalyticsEnabled() || consent !== 'granted') {
    return null;
  }
  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
