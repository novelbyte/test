import { Hero } from "./sections/Hero";
import Company from "./sections/Company";
import OurProcess from "./sections/OurProcess";
import WhyAI from "./sections/WhyAI";
import Chatbot from "./sections/Chatbot";
// src/App.tsx or src/index.tsx (if necessary)

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <OurProcess />
      <WhyAI />
      <Chatbot />
    </>
  );
}
