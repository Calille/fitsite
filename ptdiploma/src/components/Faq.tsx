'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import FadeUp from './FadeUp';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  group: string;
  items: FaqItem[];
}

const faqGroups: FaqGroup[] = [
  {
    group: 'Course Overview',
    items: [
      {
        q: 'What qualification will I receive?',
        a: 'You will gain a Level 2 & 3 Personal Training qualification, an industry-recognised, accredited award that allows you to work as a personal trainer anywhere in the UK.',
      },
      {
        q: 'How long is the course?',
        a: 'The course runs over 10 weeks with face-to-face sessions at our Harpenden Studio. It combines hybrid learning, a mix of in-person and online study, so you can fit it around your life.',
      },
      {
        q: 'Where does the course take place?',
        a: 'All practical sessions are held at our TP Health & Fitness studio in Harpenden, Hertfordshire.',
      },
      {
        q: 'Is the course accredited?',
        a: 'Yes. The course is fully accredited at Level 2 & 3, meeting the industry standards required to work as a qualified personal trainer in the UK.',
      },
    ],
  },
  {
    group: 'Cost & Payment',
    items: [
      {
        q: 'How much does the course cost?',
        a: 'The full course fee is £2,500 with VAT included. There are no hidden extras. This covers all your learning materials, assessments, and ongoing support throughout the 10 weeks.',
      },
      {
        q: 'Can I pay in instalments?',
        a: 'Absolutely. We offer a flexible payment plan: a £250 deposit to secure your place, followed by 3 payments of £750. You can spread the cost while you complete the course.',
      },
      {
        q: 'When is my deposit due?',
        a: 'Your £250 deposit is due when you book and secures your place on the course. It is included in the total £2,500 fee, so you will not pay more than £2,500 in total.',
      },
    ],
  },
  {
    group: 'Learning & Coursework',
    items: [
      {
        q: 'What does the learning look like week to week?',
        a: 'The course uses hybrid learning, a blend of in-person studio sessions and online study you can complete in your own time. Each week builds on the last, mixing theory with practical application.',
      },
      {
        q: 'Do I have to do a lot of writing?',
        a: 'No. All your booklets and coursework are completed online, with no handwriting required. Modules are marked as you go, so there is no big end-of-course rush.',
      },
      {
        q: 'How is my coursework assessed?',
        a: 'Your booklets are assessed on an ongoing basis throughout the course, so you always know where you stand. There is no single high-pressure exam moment. Progress is continuous.',
      },
      {
        q: 'When do I start working with real clients?',
        a: 'From Week 5 onwards you will begin shadowing our team, observing real sessions and preparing yourself for your final assessment. This gives you valuable hands-on experience in a supported environment before you are assessed.',
      },
    ],
  },
  {
    group: 'Practical Assessment',
    items: [
      {
        q: 'What does the practical assessment involve?',
        a: 'The practical assessment takes place over the final 2 weeks of the course and lasts 4 hours in total. It is split equally: 2 hours covering course content knowledge and 2 hours of practical work within the group using real clients. This gives you the chance to demonstrate everything you have learned in a realistic setting.',
      },
      {
        q: 'Who are the clients in the practical assessment?',
        a: 'Real clients are involved in your practical assessment, giving you an authentic experience that prepares you for working as a PT from day one.',
      },
      {
        q: 'What if I do not pass first time?',
        a: 'You cannot fail this course. If any part of your coursework or assessment needs further work, you will simply be asked to resubmit that booklet or that specific section of your assessment. So far, 100% of our students have passed first time, a record we are incredibly proud of.',
      },
      {
        q: 'Is there a time limit on resubmissions if needed?',
        a: 'We work with you individually to ensure any resubmissions are completed at a pace that suits you. Our team will guide you through exactly what needs addressing so you can achieve the standard confidently.',
      },
    ],
  },
  {
    group: 'Getting Started',
    items: [
      {
        q: 'Do I need any previous fitness qualifications to join?',
        a: 'No prior qualifications are required. Our course is designed to take you from beginner level right through to a fully qualified Level 3 Personal Trainer.',
      },
      {
        q: 'Why choose TP Health & Fitness?',
        a: 'We have over 10 years of experience in the fitness industry and a 100% pass rate across all students. Our small group environment means you receive genuine, personalised support. This is not just a course, it is a community to launch your new career from.',
      },
    ],
  },
];

function AccordionItem({ item, id }: { item: FaqItem; id: string }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-2xl border border-navy/10 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left"
      >
        <span className="font-semibold text-navy">{item.q}</span>
        <svg
          aria-hidden="true"
          className={`h-5 w-5 flex-shrink-0 text-orange transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8l5 5 5-5" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-relaxed text-slate">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="bg-mist py-16 sm:py-24" aria-labelledby="faq-heading">
      <div className="container-page">
        <FadeUp>
          <h2 id="faq-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Your questions, answered
          </h2>
        </FadeUp>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-x-14">
          {faqGroups.map((group, groupIndex) => (
            <FadeUp key={group.group} delay={Math.min(groupIndex * 0.05, 0.2)}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate">
                {group.group}
              </h3>
              <div className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <AccordionItem key={item.q} item={item} id={`faq-${groupIndex}-${itemIndex}`} />
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
