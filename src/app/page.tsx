import { Hero } from "./sections/Hero";
import Company from "./sections/Company";
import OurProcess from "./sections/OurProcess";
import WhyAI from "./sections/WhyAI";
import Chatbot from "./sections/Chatbot";
// src/App.tsx or src/index.tsx (if necessary)
import './types/landbot.d.ts'; // Adjust the path according to your file structure


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
