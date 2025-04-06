import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesFeature from '@/components/ServicesFeature';
import ClassSchedule from '@/components/ClassSchedule';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
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
        
        <AnimatedSection delay={0.2}>
          <ClassSchedule />
        </AnimatedSection>
        
        <AnimatedSection delay={0.3}>
          <Testimonials />
        </AnimatedSection>
        
        <AnimatedSection delay={0.4}>
          <BlogPreview />
        </AnimatedSection>
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
