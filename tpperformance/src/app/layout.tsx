import type { Metadata } from "next";
import { Instrument_Serif, Syne, Outfit, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TP Performance — Women's Football S&C Platform",
  description:
    "The strength, conditioning & wellness platform built for female footballers at grassroots and semi-pro level. Expert-led. Science-backed. Designed around you.",
  keywords: [
    "women's football",
    "strength and conditioning",
    "female footballer",
    "grassroots football",
    "sports science",
    "injury prevention",
    "nutrition",
    "TP Performance",
  ],
  openGraph: {
    title: "TP Performance — Women's Football S&C Platform",
    description:
      "Expert-led strength, conditioning & wellness for female footballers. Science-backed. Designed around you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${instrumentSerif.variable} ${syne.variable} ${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
