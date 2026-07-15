import BuyButton from './BuyButton';
import { CookieSettingsLink } from './CookieConsentBanner';
import FadeUp from './FadeUp';
import { PRICE, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/content/site';

export default function FinalCta() {
  return (
    <section className="bg-coal text-white">
      <div className="container-page py-20 text-center sm:py-28">
        <FadeUp>
          <p className="eyebrow text-gold">Your Next Step</p>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            You don&apos;t need another diet. You need a system you can actually stick to.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/65">
            Six principles. Fourteen pages. Twenty minutes to read, a lifetime to use.
          </p>

          <div className="mt-9">
            <BuyButton location="final_cta" className="btn-gold">
              Get The Guide · {PRICE} <span aria-hidden="true">&rarr;</span>
            </BuyButton>
          </div>
        </FadeUp>
      </div>

      <footer className="border-t border-white/10">
        <div className="container-page py-8 text-center text-[0.8rem] text-white/45">
          StrongHER Accelerator · Teighlor Pengelley, Health &amp; Fitness Coach ·{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-soft"
          >
            {INSTAGRAM_HANDLE}
          </a>{' '}
          · <CookieSettingsLink />
          {' '}
          ·{' '}
          <a
            href="https://tphealthfitness.com/privacy"
            className="underline decoration-white/30 underline-offset-2 transition-colors duration-200 hover:text-white/70"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </section>
  );
}
