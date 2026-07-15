import FadeUp from './FadeUp';

const PRINCIPLES = [
  {
    title: 'Prioritise Protein',
    body: 'Why it matters most after 35, and the simple swaps that make it automatic.',
  },
  {
    title: 'Lift Weights',
    body: 'Why strength training outperforms cardio for shape, confidence and metabolism, in two sessions a week.',
  },
  {
    title: 'Stop Starting Over',
    body: 'Breaking the all-or-nothing cycle that undoes more progress than any missed workout.',
  },
  {
    title: 'Plan Like A CEO',
    body: 'Treat your training and food like fixed appointments, with a mini worksheet to map your week.',
  },
  {
    title: 'Prioritise Recovery',
    body: 'Why sleep and stress quietly undo good training, plus a simple recovery checklist.',
  },
  {
    title: 'Build Habits You Can Sustain',
    body: 'Making this a long-term identity shift, not a six-week push, with journal prompts to make it stick.',
  },
];

export default function Principles() {
  return (
    <section className="bg-white">
      <div className="container-page py-20 sm:py-24">
        <FadeUp>
          <p className="eyebrow text-gold">What&apos;s Inside</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            Six principles. No extremes. Nothing you can&apos;t fit into a full life.
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate">
            Each principle is explained simply, with a Coach&apos;s Tip, a reflection or action
            step, and space to make it your own.
          </p>
        </FadeUp>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {PRINCIPLES.map((principle, index) => (
            <FadeUp key={principle.title} delay={index * 0.04}>
              <div className="grid gap-2 py-8 sm:grid-cols-[6rem_1fr] sm:gap-6">
                <span className="font-display text-2xl font-bold text-gold/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-slate">
                    {principle.body}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
