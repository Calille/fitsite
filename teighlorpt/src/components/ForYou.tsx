import FadeUp from './FadeUp';

const FOR_YOU = [
  "You're 35+ and your body isn't responding the way it used to",
  "You've tried multiple diets and none of them stuck long-term",
  'You want a plan that fits around a full career and a full life',
  'You want sustainable change, not another 30-day extreme',
];

const NOT_FOR_YOU = [
  'You want a strict meal plan with exact calories and macros',
  "You're looking for a quick fix rather than a sustainable shift",
  "You'd prefer hours of cardio over two focused strength sessions a week",
];

export default function ForYou() {
  return (
    <section className="bg-cream">
      <div className="container-page py-20 sm:py-24">
        <FadeUp>
          <p className="eyebrow text-gold">Is This For You?</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Built for busy women who are done with extremes
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.05}>
            <div className="h-full bg-white p-8 shadow-sm">
              <p className="eyebrow text-gold">This Is For You If</p>
              <ul className="mt-6 space-y-4">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate">
                    <span className="mt-0.5 text-gold" aria-hidden="true">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="h-full bg-white p-8 shadow-sm">
              <p className="eyebrow text-slate/70">This Isn&apos;t For You If</p>
              <ul className="mt-6 space-y-4">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate">
                    <span className="mt-0.5 text-slate/50" aria-hidden="true">
                      -
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
