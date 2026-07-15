import FadeUp from './FadeUp';
import ImagePlaceholder from './ImagePlaceholder';

export default function Team() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24" aria-labelledby="team-heading">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <ImagePlaceholder
              label="[TEAM_IMAGE] 3:4 Teighlor and Sam"
              aspect="aspect-[3/4]"
              className="mx-auto max-w-md !bg-white/10 !text-white/60"
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 id="team-heading" className="font-display text-3xl font-bold sm:text-4xl">
              Meet Teighlor and Sam
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              The course is led by Teighlor and Sam, who between them bring over 10 years of
              teaching and coaching experience. You learn in a small group with direct access to
              both of them throughout the 10 weeks, in the same Harpenden studio our clients train
              in every day.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Every student we have taught has passed first time, and 2 of our graduates now coach
              on the TP team.
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
