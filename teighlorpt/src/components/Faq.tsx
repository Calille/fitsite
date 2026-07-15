import FadeUp from './FadeUp';
import { INSTAGRAM_HANDLE } from '@/content/site';

const FAQS = [
  {
    q: 'Is this a strict diet plan?',
    a: 'No. There are no calorie targets or restrictive rules, just six sustainable principles that fit around a busy, full life.',
  },
  {
    q: 'How is it delivered?',
    a: 'Instantly, as a PDF, straight after checkout. No waiting, no shipping. Open it on your phone or laptop the moment you buy.',
  },
  {
    q: 'Do I need a gym membership or equipment?',
    a: 'No specific setup is required. The principles apply whether you train at home, in a gym, or in small group sessions.',
  },
  {
    q: "What if it's not right for me?",
    a: `Message ${INSTAGRAM_HANDLE} within 7 days of purchase and you'll be refunded, no questions asked.`,
  },
];

export default function Faq() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 sm:py-24">
        <FadeUp>
          <p className="eyebrow text-gold">Before You Go</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            A few quick questions
          </h2>
        </FadeUp>

        <div className="mt-10 max-w-2xl divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((faq, index) => (
            <FadeUp key={faq.q} delay={index * 0.04}>
              <div className="py-7">
                <h3 className="font-display text-base font-semibold text-ink">{faq.q}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">{faq.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
