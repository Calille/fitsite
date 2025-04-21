import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          {children}
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  );
}
