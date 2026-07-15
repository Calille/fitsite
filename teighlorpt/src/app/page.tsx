import Hero from '@/components/Hero';
import ForYou from '@/components/ForYou';
import Principles from '@/components/Principles';
import Included from '@/components/Included';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <ForYou />
      <Principles />
      <Included />
      <Faq />
      <FinalCta />
    </main>
  );
}
