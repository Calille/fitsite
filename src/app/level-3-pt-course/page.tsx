import Nav from '@/components/level3-pt/Nav';
import Hero from '@/components/level3-pt/Hero';
import Glance from '@/components/level3-pt/Glance';
import Included from '@/components/level3-pt/Included';
import ProgrammeRail from '@/components/level3-pt/ProgrammeRail';
import Team from '@/components/level3-pt/Team';
import Pricing from '@/components/level3-pt/Pricing';
import Faq from '@/components/level3-pt/Faq';
import EnquiryForm from '@/components/level3-pt/EnquiryForm';
import StickyCta from '@/components/level3-pt/StickyCta';
import Footer from '@/components/level3-pt/Footer';

export default function Level3PtCoursePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Glance />
        <Included />
        <ProgrammeRail />
        <Team />
        <Pricing />
        <Faq />
        <EnquiryForm />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
