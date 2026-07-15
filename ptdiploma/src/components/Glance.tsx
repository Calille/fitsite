import FadeUp from './FadeUp';

const glanceItems = [
  { label: 'Duration', value: '10-week course' },
  { label: 'Qualification', value: 'Level 2 & 3 Accredited' },
  { label: 'Location', value: 'Harpenden Studio, Hertfordshire' },
  { label: 'Pass rate', value: '100% first-time pass rate' },
  { label: 'Format', value: 'Hybrid learning (in-person weekends plus online)' },
  { label: 'Experience', value: '10+ years teaching and coaching' },
  { label: 'Price', value: '£2,500 inc. VAT' },
  { label: 'Payments', value: 'Flexible payments available' },
];

export default function Glance() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="glance-heading">
      <div className="container-page">
        <FadeUp>
          <h2 id="glance-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            The course at a glance
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {glanceItems.map((item) => (
              <div key={item.label} className="rounded-2xl bg-mist p-6">
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                  {item.label}
                </dt>
                <dd className="mt-2 font-semibold text-navy">{item.value}</dd>
              </div>
            ))}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
