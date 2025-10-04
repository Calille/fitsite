import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesFeature from '@/components/ServicesFeature';
import PremiumStudio from '@/components/PremiumStudio';
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
          <ServicesFeature />
        </AnimatedSection>
        
        <AnimatedSection delay={0.1}>
          <PremiumStudio />
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <MomenceForm />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <Testimonials />
        </AnimatedSection>
        

      </main>
      <Footer />
    </FadeInWrapper>
  );
}
