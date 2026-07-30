import Image from 'next/image';
import FadeUp from './FadeUp';

export default function Glance() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="coaches-heading">
      <div className="container-page">
        <FadeUp>
          <h2
            id="coaches-heading"
            className="text-center font-display text-3xl font-bold text-navy sm:text-4xl"
          >
            Meet the Coaches
          </h2>
        </FadeUp>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-12">
          <FadeUp>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/level3-pt/img/teighlor.webp"
                alt="Teighlor, Course Lead at TP Health and Fitness"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 20rem, 20rem"
              />
            </div>
            <p className="mt-4 text-center font-display text-lg font-bold text-navy">Teighlor</p>
            <p className="text-center text-sm text-slate">Course Lead</p>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="text-center lg:px-2">
              <p className="text-lg leading-relaxed text-slate">
                The course is led by Teighlor and Sam, who between them bring over 10 years of
                teaching and coaching experience. You learn in a small group with direct access to
                both of them throughout the 10 weeks, in the same Harpenden studio our clients train
                in every day.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate">
                Every student we have taught has passed first time, and graduates like Jo and Ben
                now coach on the TP team.
              </p>
              <a href="#enquire" className="btn-primary mt-8">
                Speak to Teighlor
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/level3-pt/img/sam.webp"
                alt="Sam, Coach and Mentor at TP Health and Fitness"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 20rem, 20rem"
              />
            </div>
            <p className="mt-4 text-center font-display text-lg font-bold text-navy">Sam</p>
            <p className="text-center text-sm text-slate">Coach &amp; Mentor</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
