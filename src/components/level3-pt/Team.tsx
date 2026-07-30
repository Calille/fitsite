import Image from 'next/image';
import FadeUp from './FadeUp';

export default function Team() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24" aria-labelledby="team-heading">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-2xl bg-white/10">
              <Image
                src="/level3-pt/img/level3team.webp"
                alt="Jo and Ben, Level 3 PT Diploma graduates now coaching at TP Health and Fitness"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 28rem"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 id="team-heading" className="font-display text-3xl font-bold sm:text-4xl">
              Meet Jo and Ben
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Jo and Ben recently completed the Level 3 PT Diploma with us and now coach on the TP
              team. They trained in the same Harpenden studio, shadowed real clients from Week 5,
              and passed first time, just like every student we have taught.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              That is the point of this course: leave qualified, confident, and ready to work with
              real people, not just with a certificate.
            </p>
            <a href="#enquire" className="btn-primary mt-8">
              Speak to Teighlor
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
