'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Menopause Way is paused. Keep the route so old links don't 404,
 * but send visitors straight home.
 */
export default function MenopauseWayRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-white px-6">
      <p className="text-center text-gray-600">
        This page is currently unavailable.{' '}
        <a href="/" className="text-[#56b5bd] underline">
          Continue to the homepage
        </a>
        .
      </p>
    </main>
  );
}
