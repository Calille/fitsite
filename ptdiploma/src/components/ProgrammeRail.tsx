import FadeUp from './FadeUp';

const weeks = Array.from({ length: 10 }, (_, i) => i + 1);

const phases = [
  {
    range: 'Weeks 1 to 4',
    title: 'Foundations in the studio',
    body: 'In-person weekend sessions at the Harpenden studio, 10am to 2pm, with around 1 hour of online booklets each week in your own time. Your booklets arrive immediately on enrolment and are marked as you go, so there is no end-of-course rush.',
    accent: false,
  },
  {
    range: 'Week 5 onwards',
    title: 'You start shadowing real clients',
    body: 'From Week 5 you observe and assist real client sessions alongside the team. This is the point the course turns practical: hands-on experience in a supported environment, well before you are assessed.',
    accent: true,
  },
  {
    range: 'Weeks 9 and 10',
    title: 'Practical assessment',
    body: 'A 4-hour assessment across the final 2 weeks, split equally: 2 hours covering course content knowledge and 2 hours of practical work within the group using real clients.',
    accent: false,
  },
];

function WeekMarker({ week }: { week: number }) {
  const isMilestone = week === 5;
  const isAssessment = week >= 9;

  return (
    <li className="relative flex flex-col items-center gap-2">
      <span
        className={
          isMilestone
            ? 'relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange font-display text-base font-bold text-white shadow-md sm:h-14 sm:w-14 sm:text-xl'
            : isAssessment
              ? 'relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-white sm:h-11 sm:w-11 sm:text-base'
              : 'relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy/30 bg-white font-display text-xs font-bold text-navy sm:h-11 sm:w-11 sm:text-base'
        }
      >
        {week}
      </span>
      {isMilestone && (
        <span className="absolute -bottom-7 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-orange sm:-bottom-8 sm:text-sm">
          Real clients
        </span>
      )}
    </li>
  );
}

export default function ProgrammeRail() {
  return (
    <section id="programme" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="programme-heading">
      <div className="container-page">
        <FadeUp>
          <h2 id="programme-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            How the 10 weeks run
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate">
            Weekend sessions in the studio, online booklets in your own time, and from Week 5, real
            clients. Here is the shape of the course.
          </p>
        </FadeUp>

        {/* The rail */}
        <FadeUp delay={0.1} className="mt-14">
          <div className="relative pb-10">
            <div aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-5 bg-navy/15 sm:-translate-y-6" />
            <ol className="relative flex items-start justify-between" aria-label="Programme weeks 1 to 10">
              {weeks.map((week) => (
                <WeekMarker key={week} week={week} />
              ))}
            </ol>
          </div>
        </FadeUp>

        {/* Phase cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {phases.map((phase, index) => (
            <FadeUp key={phase.range} delay={0.1 + index * 0.08}>
              <article
                className={`h-full rounded-2xl p-7 ${
                  phase.accent
                    ? 'border-2 border-orange bg-white shadow-md'
                    : 'border border-navy/10 bg-white'
                }`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-wider ${
                    phase.accent ? 'text-orange' : 'text-slate'
                  }`}
                >
                  {phase.range}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy">{phase.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{phase.body}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-slate">
            Cannot make every weekend? You can miss 1 to 2 sessions without falling behind.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
