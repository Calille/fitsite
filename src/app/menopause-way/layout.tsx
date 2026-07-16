import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting | TP Health & Fitness',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MenopauseWayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
