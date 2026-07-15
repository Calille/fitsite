'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Consent = 'granted' | 'denied' | 'unknown';

const STORAGE_KEY = 'analytics-consent';

const ConsentContext = createContext<{
  consent: Consent;
  setConsent: (c: Consent) => void;
}>({ consent: 'unknown', setConsent: () => {} });

export function useConsent() {
  return useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  // Starts as 'unknown' so nothing analytics-related runs on first paint.
  const [consent, setConsentState] = useState<Consent>('unknown');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'granted' || saved === 'denied') {
      setConsentState(saved);
    }
  }, []);

  const setConsent = (c: Consent) => {
    if (c === 'unknown') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, c);
    }
    setConsentState(c);
    // Consent Mode v2: tell any already-loaded Google tag about the change.
    window.gtag?.('consent', 'update', {
      analytics_storage: c === 'granted' ? 'granted' : 'denied',
    });
  };

  return (
    <ConsentContext.Provider value={{ consent, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}
