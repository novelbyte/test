import Hero from "./sections/Hero";
import Company from "./sections/Company";
import OurProcess from "./sections/OurProcess";
import WhyAI from "./sections/WhyAI";
import Chatbot from "./sections/Chatbot";
import CaseStudies from "./sections/CaseStudies";
import Pricing from "./sections/Pricing";
import FinalCTA from "./sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Chatbot />
      <Hero />
      <Company />
      <OurProcess />
      <WhyAI />
      <CaseStudies />
      <Pricing />
      <FinalCTA />
    </>
  );
}
