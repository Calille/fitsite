import type { Metadata } from 'next';
import { Outfit, Poppins } from 'next/font/google';
import Script from 'next/script';
import { ConsentProvider } from '@/components/ConsentProvider';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { WebVitals } from '@/components/WebVitals';
import { PRICE } from '@/content/site';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

const SITE_URL = 'https://strongher.tphealthfitness.com';

const TITLE = '6 Principles Every Busy Woman 35+ Needs To Know | Teighlor Pengelley';
const DESCRIPTION =
  `Simple, sustainable strategies to lose body fat, build lean muscle and boost energy, without restrictive diets or hours in the gym. A ${PRICE} guide by Health & Fitness Coach Teighlor Pengelley.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'StrongHER Accelerator',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Consent Mode v2 defaults: everything denied until the visitor accepts. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        {/* Meta Pixel — site-wide. No other pixel ID exists on StrongHER.
            beforeInteractive puts the base code in <head> of the static export. */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1570949691427033');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* Meta requires a raw 1x1 tracking pixel here; next/image cannot run in noscript. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1570949691427033&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${outfit.variable} ${poppins.variable}`}>
        <ConsentProvider>
          {children}
          <GoogleAnalytics />
          <WebVitals />
          <CookieConsentBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
