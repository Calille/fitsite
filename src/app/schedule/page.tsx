'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Class schedule route taken down. public/.htaccess also 301s /schedule to
 * /contact/. This page overwrites the old static export on deploy and is a
 * fallback if Apache rewrites are not applied. Restore ClassSchedule.tsx and
 * the previous page from git to bring the timetable back.
 */
export default function ScheduleRedirectPage() {
  useEffect(() => {
    window.location.replace('/contact/');
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-[50vh] flex items-center justify-center px-4 py-20">
        <p className="text-gray-600 text-center max-w-md">
          The class schedule is currently unavailable.{' '}
          <Link href="/contact" className="text-[#56b5bd] hover:underline">
            Contact us
          </Link>{' '}
          for class times.
        </p>
      </main>
      <Footer />
    </>
  );
}
