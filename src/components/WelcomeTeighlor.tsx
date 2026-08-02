'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PT_DIPLOMA_URL = '/level-3-pt-course/';

const WelcomeTeighlor = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid items-start gap-10 md:grid-cols-[minmax(0,400px)_1fr] md:gap-14"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden bg-[#F0F9FA] md:sticky md:top-28">
            <Image
              src="/level3-pt/img/teighlor.webp"
              alt="Teighlor Pengelley, Health and Fitness Coach at TP Health and Fitness"
              fill
              className="object-cover object-top"
              sizes="400px"
              priority={false}
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
              Meet Teighlor
            </h2>
            <p className="mb-6 text-lg font-medium text-gray-700">
              Founder of TP Health &amp; Fitness
            </p>
            <div className="mx-auto mb-8 max-w-2xl space-y-4 text-base leading-relaxed text-gray-600 md:mx-0 md:text-lg">
              <p>
                Whether you&apos;re here for personal training, small group sessions, or simply a
                clearer path forward, you&apos;re in the right place. Come train with a team that
                genuinely cares about sustainable results.
              </p>
              <p>
                Teighlor is the founder of TP Health &amp; Fitness, based in Harpenden. With a
                background in football at a high level and a degree from Loughborough University,
                she brings a real athlete&apos;s mindset to everything TP stands for.
              </p>
              <p>
                Teighlor&apos;s passion lies in functional training for men and women over 40,
                helping clients move better, feel stronger, and build habits that last. Alongside
                the studio, she also works with female footballers, supporting athletes online with
                performance-focused training.
              </p>
              <p>
                By trade, Teighlor is a qualified project manager but in 2021, inspired by her Mum,
                she took the leap and started TP. Since then, it&apos;s grown into so much more than
                a training studio.
              </p>
              <p>
                Teighlor believes prioritising your health isn&apos;t a luxury, it&apos;s the
                foundation for a longer, more active life. That&apos;s why TP was never designed to
                be &quot;just another gym.&quot; It&apos;s a community: an intimate studio setting
                that&apos;s safe, comfortable, and welcoming for absolutely anyone, regardless of
                experience or starting point.
              </p>
              <p>
                Teighlor is also passionate about developing the next generation of trainers,
                teaching students to{' '}
                <Link
                  href={PT_DIPLOMA_URL}
                  className="font-semibold text-[#56b5bd] underline decoration-[#56b5bd]/40 underline-offset-2 transition-colors hover:text-[#45a4ac]"
                >
                  become qualified PTs
                </Link>
                , three of whom are now proud members of her own team.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-lg bg-[#56b5bd] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#45a4ac]"
              >
                Meet the Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-colors hover:border-[#56b5bd] hover:text-[#56b5bd]"
              >
                View Personal Training
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeTeighlor;
