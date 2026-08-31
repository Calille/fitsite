import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Class Schedule | TP Health & Fitness Coaching',
  description:
    'The class schedule is currently unavailable. Contact TP Health & Fitness for class times and bookings.',
  robots: { index: false, follow: true },
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
