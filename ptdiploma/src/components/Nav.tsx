import Image from 'next/image';
import { MAIN_SITE_URL } from '@/content/site';

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex items-center justify-between py-5">
        <a
          href={MAIN_SITE_URL}
          className="flex items-center gap-3"
          aria-label="TP Health & Fitness main website"
        >
          <Image
            src="/img/logo.png"
            alt="TP Health & Fitness"
            width={56}
            height={68}
            priority
            className="h-14 w-auto brightness-0 invert"
          />
          <span className="hidden font-display text-sm font-bold uppercase tracking-widest text-white sm:block">
            TP Health &amp; Fitness
          </span>
        </a>
        <a href="#enquire" className="btn-primary !px-5 !py-2.5 text-sm">
          Enquire Now
        </a>
      </div>
    </header>
  );
}
