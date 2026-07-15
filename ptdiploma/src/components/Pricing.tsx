import FadeUp from './FadeUp';
import { BOOKING_URL } from '@/content/site';

const included = [
  'Study booklets received immediately on enrolment',
  '100% first-time pass rate, every student',
  'Real client shadow sessions from Week 5',
  'Can miss 1 to 2 weekends without falling behind',
  'Direct access to Teighlor and Sam',
  '2 graduates now coaching on the TP team',
];

function Tick() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-4 w-4 flex-shrink-0 text-orange"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="pricing-heading">
      <div className="container-page">
        <FadeUp>
          <h2 id="pricing-heading" className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Course fee and payment plan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate">
            One clear price with VAT included and no hidden extras.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-lg">
            <div className="bg-navy px-8 py-10 text-center text-white">
              <p className="font-display text-5xl font-bold sm:text-6xl">£2,500</p>
              <p className="mt-2 text-white/80">Full course fee, including VAT</p>
            </div>

            <div className="grid gap-px bg-navy/10 sm:grid-cols-3">
              <div className="bg-white px-6 py-6 text-center">
                <p className="font-display text-2xl font-bold text-navy">£250</p>
                <p className="mt-1 text-sm text-slate">deposit to secure your place today</p>
              </div>
              <div className="bg-white px-6 py-6 text-center">
                <p className="font-display text-2xl font-bold text-navy">3 × £750</p>
                <p className="mt-1 text-sm text-slate">instalments spread over the course</p>
              </div>
              <div className="bg-white px-6 py-6 text-center">
                <p className="font-display text-2xl font-bold text-navy">Or upfront</p>
                <p className="mt-1 text-sm text-slate">pay in full at enrolment</p>
              </div>
            </div>

            <div className="bg-white px-8 pb-10 pt-8">
              <p className="text-sm text-slate">
                Your deposit is part of the £2,500 total, so you never pay more than £2,500.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-navy">
                    <Tick />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 text-center">
                <a href="#enquire" className="btn-primary w-full text-base sm:w-auto sm:px-12">
                  Enquire Now
                </a>
                <p className="mt-6 text-sm text-slate">
                  Ready to book now?{' '}
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-navy underline underline-offset-4 hover:text-orange"
                  >
                    Book your place directly
                  </a>
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
