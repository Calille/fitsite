import type { Metadata } from 'next';
import { Outfit, Poppins } from 'next/font/google';
import Script from 'next/script';
import { ConsentProvider } from '@/components/ConsentProvider';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MetaPixel from '@/components/MetaPixel';
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
        <MetaPixel />
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
