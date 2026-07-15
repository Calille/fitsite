import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhatsIncluded from "@/components/sections/WhatsIncluded";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import EnquiryForm from "@/components/sections/EnquiryForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <WhatsIncluded />
        <HowItWorks />
        <About />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
