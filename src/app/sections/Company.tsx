"use client";
import { motion } from "framer-motion";

export const Company = () => {
  return (
    <section className="pt-10 px-10 pb-24 xl:px-[160px] 2xl:px-[240px] bg-[#0f172a] overflow-x-clip">     
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="max-w-[700px] text-white"
      >
        <h1 className="mt-6 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter">
          Czym się zajmujemy?
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed"
        >
          W <span className="text-white font-semibold">NOVELBYTE AI</span> tworzymy inteligentne chatboty oparte na sztucznej inteligencji, 
          które całkowicie zmieniają sposób, w jaki firmy komunikują się ze swoimi klientami. 
          Nasze rozwiązania nie tylko automatyzują obsługę klienta, ale także usprawniają procesy sprzedażowe i wewnętrzne, 
          zapewniając naturalne, efektywne i angażujące rozmowy.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed"
        >
          <span className="text-white font-semibold">Oferujemy:</span>
        </motion.p>
        <motion.ul 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 list-disc list-inside text-gray-300 text-sm md:text-lg xl:text-lg 2xl:text-xl leading-relaxed"
        >
          <li>Chatboty obsługujące klientów 24/7</li>
          <li>Automatyczne odpowiedzi na maile i zapytania</li>
          <li>Inteligentne systemy do obsługi social mediów</li>
          <li>Automatyzację odpowiedzi na komentarze</li>
          <li>Integracje z istniejącymi systemami firmowymi</li>
        </motion.ul>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed"
        >
          Dzięki naszym rozwiązaniom oszczędzasz czas, zwiększasz efektywność i budujesz lepsze relacje z klientami. 
          Jesteśmy gotowi dostosować nasze narzędzia do Twoich indywidualnych potrzeb, pomagając Ci osiągnąć sukces w erze cyfrowej.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Company;
