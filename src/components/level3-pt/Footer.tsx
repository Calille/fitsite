import Image from 'next/image';
import { BOOKING_URL, CONTACT, INSTAGRAM_URL, MAIN_SITE_URL } from '@/content/level3-pt';

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-14 text-white">
      <div className="container-page">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href={MAIN_SITE_URL} className="inline-flex items-center gap-3">
              <Image
                src="/level3-pt/img/logo.png"
                alt="TP Health & Fitness"
                width={48}
                height={58}
                className="h-12 w-auto brightness-0 invert"
              />
              <span className="font-display text-sm font-bold uppercase tracking-widest">
                TP Health &amp; Fitness
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Level 3 PT Diploma at our studio in Harpenden, Hertfordshire. Part of TP Health &amp;
              Fitness Ltd.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-white/85">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white hover:underline">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-white hover:underline">
                  {CONTACT.phone} (call or text Teighlor)
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Links</h3>
            <ul className="mt-4 space-y-2.5 text-white/85">
              <li>
                <a href="#enquire" className="hover:text-white hover:underline">
                  Enquire about the course
                </a>
              </li>
              <li>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Book your place directly
                </a>
              </li>
              <li>
                <a href={MAIN_SITE_URL} className="hover:text-white hover:underline">
                  www.tphealthfitness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} TP Health &amp; Fitness Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
