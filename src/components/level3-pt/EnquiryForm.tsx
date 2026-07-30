'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import FadeUp from './FadeUp';
import CourseVideo from './CourseVideo';
import { CONTACT, ENQUIRY_ENDPOINT, START_DATE } from '@/content/level3-pt';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClasses =
  'w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy placeholder:text-slate/60 focus:border-navy';

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidationError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();

    if (!name || !email || !phone) {
      setValidationError('Please fill in your name, email, and phone number.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    // Lenient UK phone check: digits, spaces, and common symbols, 10 to 15 digits
    if (!/^\+?[0-9\s().-]{9,18}$/.test(phone) || phone.replace(/\D/g, '').length < 10) {
      setValidationError('Please enter a valid UK phone number.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(ENQUIRY_ENDPOINT, {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="enquire" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="enquire-heading">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeUp>
            <h2 id="enquire-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">
              Enquire about the next intake
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate">
              Leave your details and Teighlor will call you to talk through the course, the
              payment plan, and whether it is the right fit for you. The next course starts{' '}
              {START_DATE}.
            </p>
            <div className="mt-8 hidden lg:block">
              <CourseVideo
                src="/level3-pt/video/standout.webm"
                title="What was the standout for you?"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            {status === 'success' ? (
              <div
                className="rounded-2xl border border-navy/10 bg-mist p-10 text-center"
                role="status"
              >
                <p className="font-display text-2xl font-bold text-navy">
                  Thanks for your interest!
                </p>
                <p className="mt-3 text-lg text-slate">Teighlor will be in touch shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-navy/10 bg-white p-7 shadow-lg sm:p-9"
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block font-semibold text-navy">
                      Full name <span className="text-orange">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block font-semibold text-navy">
                      Email address <span className="text-orange">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block font-semibold text-navy">
                      Phone number <span className="text-orange">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className={inputClasses}
                      placeholder="07123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block font-semibold text-navy">
                      Tell us a bit about yourself <span className="text-slate/60">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={inputClasses}
                      placeholder="Your goals, your background, anything you would like to ask"
                    />
                  </div>

                  {/* Honeypot: hidden from people, tempting to bots */}
                  <div className="absolute -left-[5000px]" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {validationError && (
                    <p className="text-sm font-medium text-orange-dark" role="alert">
                      {validationError}
                    </p>
                  )}

                  {status === 'error' && (
                    <p className="rounded-xl bg-orange/10 p-4 text-sm text-navy" role="alert">
                      Sorry, your enquiry could not be sent. Please call or text Teighlor directly
                      on{' '}
                      <a href={CONTACT.phoneHref} className="font-bold underline underline-offset-2">
                        {CONTACT.phone}
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending your enquiry' : 'Send my enquiry'}
                  </button>
                  <p className="text-center text-sm text-slate">
                    Your details go straight to Teighlor. No mailing lists, no spam.
                  </p>
                </div>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
