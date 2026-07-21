import type { Metadata } from 'next';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';
import GuideMockup from '@/components/GuideMockup';
import { GUIDE_PDF_PATH, GUIDE_PDF_FILENAME, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/content/site';

export const metadata: Metadata = {
  title: 'Your Guide Is Ready | StrongHER Fat Loss Guide',
  description:
    'Thank you for your purchase. Download your StrongHER Fat Loss Guide PDF.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <section className="relative flex flex-1 items-center overflow-hidden bg-coal text-white">
        {/* Soft atmospheric wash — same brand teal, not flat */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 20% 40%, rgba(86,181,189,0.18), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(249,115,22,0.12), transparent 55%)',
          }}
        />

        <div className="container-page relative w-full py-16 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-16">
            <FadeUp className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:mx-0 lg:max-w-none">
              <GuideMockup />
            </FadeUp>

            <FadeUp delay={0.1} className="order-1 text-center lg:order-2 lg:text-left">
              <p className="font-display text-xl font-semibold leading-snug text-gold sm:text-2xl">
                You just took the first step. Be proud of that.
              </p>

              <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl">
                Your StrongHER guide is ready
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-[1.05rem] font-light leading-relaxed text-white/75 lg:mx-0">
                Thank you for investing in yourself. Download the PDF below and keep it somewhere
                you&apos;ll actually use it. This is yours forever.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a href={GUIDE_PDF_PATH} download={GUIDE_PDF_FILENAME} className="btn-gold px-10">
                  Download the guide <span aria-hidden="true">&darr;</span>
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-8 py-4 font-display text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:border-gold hover:text-gold"
                >
                  Back to StrongHER
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-md text-[0.8rem] leading-relaxed text-white/45 lg:mx-0">
                Download not working? Message {INSTAGRAM_HANDLE} on Instagram and we&apos;ll sort
                it straight away.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-t border-coal/5 bg-cream">
        <div className="container-page py-14 sm:py-16">
          <FadeUp>
            <p className="text-center eyebrow text-gold">What to do next</p>
            <h2 className="mx-auto mt-3 max-w-xl text-center font-display text-2xl font-bold text-ink sm:text-3xl">
              Make the guide work for you
            </h2>
          </FadeUp>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Download it now',
                body: 'Save it somewhere easy to find — Notes, Files, or print it if that helps you stick with it.',
              },
              {
                step: '02',
                title: 'Read one principle',
                body: 'Don\'t try to overhaul everything tonight. Start with the principle that resonates most.',
              },
              {
                step: '03',
                title: 'Use the worksheet',
                body: 'Fill in this week\'s plan. Small, consistent action beats another perfect restart.',
              },
            ].map((item, index) => (
              <FadeUp key={item.step} delay={0.08 * (index + 1)}>
                <p className="font-display text-sm font-semibold text-gold">{item.step}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{item.body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-coal/10 bg-cream">
        <div className="container-page py-8 text-center text-[0.8rem] text-slate">
          StrongHER Accelerator · Teighlor Pengelley ·{' '}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-soft"
          >
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </footer>
    </main>
  );
}
