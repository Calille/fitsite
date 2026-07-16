import BuyButton from './BuyButton';
import CoachPhoto from './CoachPhoto';
import FadeUp from './FadeUp';
import { PRICE } from '@/content/site';

export default function Hero() {
  return (
    <section className="bg-coal text-white">
      <div className="container-page grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-2">
        <FadeUp>
          <p className="eyebrow text-gold">For Women 35+ Who Are Done Starting Over</p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
            6 Principles Every Busy Woman 35+ Needs To Know For Sustainable Fat Loss
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] font-light leading-relaxed text-white/75">
            Simple, sustainable strategies to lose body fat, build lean muscle and boost energy,
            without restrictive diets or hours in the gym. Written by a Health &amp; Fitness Coach,
            designed to actually get used.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <span className="font-display text-4xl font-bold text-gold">{PRICE}</span>
            <span className="text-sm leading-snug text-white/60">
              Instant PDF download
              <br />
              Read in under 20 minutes
            </span>
          </div>

          <div className="mt-9">
            <BuyButton location="hero" className="btn-gold">
              Get The Guide · {PRICE} <span aria-hidden="true">&rarr;</span>
            </BuyButton>
          </div>

          <p className="mt-4 text-[0.8rem] text-white/45">
            Secure checkout via Stripe · Delivered straight to your inbox
          </p>
        </FadeUp>

        <FadeUp delay={0.15} className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <CoachPhoto />
        </FadeUp>
      </div>
    </section>
  );
}
