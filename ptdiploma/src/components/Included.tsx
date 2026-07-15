import FadeUp from './FadeUp';
import ImagePlaceholder from './ImagePlaceholder';

const features = [
  {
    title: 'Hybrid Learning',
    body: 'Weekend in-person sessions at the Harpenden studio (10am to 2pm), plus around 1 hour of online booklets per week in your own time.',
  },
  {
    title: 'Shadow Real Clients',
    body: 'From Week 5 onwards you will observe and assist real client sessions. Hands-on experience before you graduate.',
  },
  {
    title: 'Flexible Attendance',
    body: 'Cannot make every weekend? You can miss 1 to 2 sessions without falling behind on the course.',
  },
  {
    title: 'A Professional Studio',
    body: 'Learn in a fully equipped, professional-grade studio. The same environment you will work in as a PT.',
  },
  {
    title: 'Online Study Booklets',
    body: 'Received immediately on enrolment. Completed and marked online at your own pace throughout.',
  },
  {
    title: 'Expert Mentorship',
    body: 'Led by Teighlor and Sam. Over 10 years of coaching experience, with 2 graduates now on the TP team.',
  },
];

export default function Included() {
  return (
    <section className="bg-mist py-16 sm:py-24" aria-labelledby="included-heading">
      <div className="container-page">
        <FadeUp>
          <h2 id="included-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            What&apos;s included
          </h2>
        </FadeUp>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FadeUp key={feature.title} delay={Math.min(index * 0.06, 0.3)}>
              <article className="h-full rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="font-display text-lg font-bold text-navy">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-slate">{feature.body}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FadeUp>
            <ImagePlaceholder label="[STUDIO_IMAGE] 4:3 Harpenden studio interior" aspect="aspect-[4/3]" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <ImagePlaceholder
              label="[TRAINING_IMAGE_1] 4:3 students in a practical session"
              aspect="aspect-[4/3]"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
