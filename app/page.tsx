import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import CaseStudySpotlight from "@/components/sections/CaseStudySpotlight";
import TechnologyStack from "@/components/sections/TechnologyStack";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Services />
      <CaseStudySpotlight />
      <TechnologyStack />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA />
    </>
  );
}

