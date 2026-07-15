import BuyButton from './BuyButton';
import FadeUp from './FadeUp';
import { PRICE, INSTAGRAM_HANDLE } from '@/content/site';

const ITEMS = [
  { label: 'The full 6 Principles guide (14 pages)', tag: 'Core resource' },
  { label: "Coach's Tips & reflection prompts throughout", tag: 'Included' },
  { label: 'Fillable weekly planning worksheet', tag: 'Included' },
  { label: 'Recovery checklist & journal prompts', tag: 'Included' },
  { label: 'Instant delivery, yours to keep forever', tag: 'Included' },
];

export default function Included() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 sm:py-24">
        <FadeUp>
          <div className="grid gap-12 bg-coal p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:p-16">
            <div>
              <p className="eyebrow text-gold">What You&apos;re Getting</p>
              <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                Everything included for {PRICE}
              </h2>

              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {ITEMS.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <span className="text-[0.95rem] leading-relaxed text-white/85">
                      {item.label}
                    </span>
                    <span className="shrink-0 text-[0.78rem] text-white/45">{item.tag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center rounded-sm bg-coal-card p-8 text-center">
              <p className="text-[0.8rem] text-white/55">Today&apos;s price</p>
              <p className="mt-3 font-display text-5xl font-bold text-gold">{PRICE}</p>
              <p className="mt-3 text-[0.82rem] text-white/55">
                One-time payment · no subscription
              </p>

              <BuyButton location="pricing" className="btn-gold mt-7 w-full">
                Get Instant Access <span aria-hidden="true">&rarr;</span>
              </BuyButton>

              <p className="mt-5 text-[0.78rem] leading-relaxed text-white/45">
                Not useful? Message {INSTAGRAM_HANDLE} within 7 days and I&apos;ll refund you, no
                questions asked.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
