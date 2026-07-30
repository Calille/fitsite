'use client';

import { useEffect, useState } from 'react';

// Mobile-only bar pinned to the bottom of the viewport.
// Hides itself while the enquiry form is on screen, so it never nags
// someone who is already looking at the form.
export default function StickyCta() {
  const [formInView, setFormInView] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const formSection = document.getElementById('enquire');
    if (!formSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(formSection);

    const onScroll = () => setPastHero(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const visible = pastHero && !formInView;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <a
        href="#enquire"
        tabIndex={visible ? 0 : -1}
        className="btn-primary w-full py-4 text-base shadow-xl"
      >
        Enquire Now
      </a>
    </div>
  );
}
