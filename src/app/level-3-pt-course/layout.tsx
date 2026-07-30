import type { Metadata } from 'next';
import { Outfit, DM_Sans } from 'next/font/google';
import './level3.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const SITE_URL = 'https://www.tphealthfitness.com/level-3-pt-course/';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tphealthfitness.com'),
  title: 'Level 3 PT Diploma in Harpenden | TP Health & Fitness',
  description:
    'Become a qualified personal trainer with our 10-week hybrid Level 3 PT Diploma in Harpenden, Hertfordshire. 100% first-time pass rate, real client experience, flexible payments.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Level 3 PT Diploma in Harpenden | TP Health & Fitness',
    description:
      'A 10-week hybrid Level 3 PT Diploma at our Harpenden studio. 100% first-time pass rate, shadow real clients from Week 5, flexible payments.',
    url: SITE_URL,
    siteName: 'TP Health & Fitness',
    images: [
      {
        url: '/level3-pt/img/logo.png',
        width: 849,
        height: 1024,
        alt: 'TP Health & Fitness',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Level 3 PT Diploma in Harpenden | TP Health & Fitness',
    description:
      'A 10-week hybrid Level 3 PT Diploma at our Harpenden studio. 100% first-time pass rate, shadow real clients from Week 5.',
  },
};

export default function Level3PtCourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`level3-pt ${outfit.variable} ${dmSans.variable}`}>{children}</div>
  );
}
