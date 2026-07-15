import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Glance from '@/components/Glance';
import Included from '@/components/Included';
import ProgrammeRail from '@/components/ProgrammeRail';
import Team from '@/components/Team';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';
import EnquiryForm from '@/components/EnquiryForm';
import StickyCta from '@/components/StickyCta';
import Footer from '@/components/Footer';

export default function Home() {
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
