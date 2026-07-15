'use client';

import type { ReactNode } from 'react';
import { CHECKOUT_URL } from '@/content/site';
import { trackCheckoutClick } from '@/lib/analytics';

interface BuyButtonProps {
  location: 'hero' | 'pricing' | 'final_cta';
  className?: string;
  children: ReactNode;
}

/* Checkout link that reports a begin_checkout event to GA4 when clicked. */
export default function BuyButton({ location, className, children }: BuyButtonProps) {
  return (
    <a href={CHECKOUT_URL} className={className} onClick={() => trackCheckoutClick(location)}>
      {children}
    </a>
  );
}
