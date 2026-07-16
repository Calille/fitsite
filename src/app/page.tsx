'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WelcomeTeighlor from '@/components/WelcomeTeighlor';
import ServicesFeature from '@/components/ServicesFeature';
import InstagramFeed from '@/components/InstagramFeed';
import MomenceForm from '@/components/MomenceForm';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FadeInWrapper from '@/components/FadeInWrapper';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <FadeInWrapper>
      <Header />
      <main>
        <Hero />

        <AnimatedSection>
          <WelcomeTeighlor />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <ServicesFeature />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <InstagramFeed />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <MomenceForm />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Testimonials />
        </AnimatedSection>
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
