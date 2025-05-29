import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsProvider>
          <AuthProvider>
            {children}
            <ChatBot />
          </AuthProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
