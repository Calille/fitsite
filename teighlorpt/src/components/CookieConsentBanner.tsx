'use client';

import { useConsent } from './ConsentProvider';

export function CookieConsentBanner() {
  const { consent, setConsent } = useConsent();

  if (consent !== 'unknown') {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-coal px-5 py-5 text-white shadow-2xl sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-page flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-[0.85rem] leading-relaxed text-white/75">
          We use analytics cookies to see how the site is used. They stay off until you accept,
          and rejecting keeps them off completely.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent('denied')}
            className="rounded-sm border border-white/25 px-5 py-2.5 font-display text-[0.85rem] font-medium text-white/85 transition-colors duration-200 hover:border-white/50 hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => setConsent('granted')}
            className="rounded-sm bg-sand px-5 py-2.5 font-display text-[0.85rem] font-semibold text-white transition-colors duration-200 hover:bg-sand-dark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/* Small footer link so visitors can change their mind later. */
export function CookieSettingsLink() {
  const { setConsent } = useConsent();

  return (
    <button
      type="button"
      onClick={() => setConsent('unknown')}
      className="underline decoration-white/30 underline-offset-2 transition-colors duration-200 hover:text-white/70"
    >
      Cookie settings
    </button>
  );
}
