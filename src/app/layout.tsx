import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { AnalyticsProvider } from '@/contexts/AnalyticsContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TP Health & Fitness Coaching | Modern Fitness Studio",
  description: "Experience a modern fitness studio focused on community, strength, and endurance training. Join us for personal training, group classes, and specialized fitness programs.",
  keywords: ["fitness", "gym", "training", "personal trainer", "group classes", "strength training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://momence.com https://*.momence.com https://my.matterport.com https://*.matterport.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://momence.com https://*.momence.com;" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tphealthfitness.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </AnalyticsProvider>
        
        {/* Momence Webchat Plugin */}
        <div 
          dangerouslySetInnerHTML={{
            __html: `
              <script
                async
                type="module"
                host-id="55732"
                token="q27n0m0XWP"
                position="bottom-right"
                src="https://momence.com/u/tp-health-&-fitness-coaching-AZnJNB">
              </script>
            `
          }}
        />
      </body>
    </html>
  );
}
