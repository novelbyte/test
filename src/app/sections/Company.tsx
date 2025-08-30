"use client";
import { motion } from "framer-motion";

export const Company = () => {
  return (
    <section className="pt-10 pb-24 pl-[260px] bg-[#0f172a] overflow-x-clip">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="max-w-3xl text-white"
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
            W <span className="text-white font-semibold">NOVELBYTE AI</span> 
            automatyzujemy procesy w firmach – od obsługi klienta, po sprzedaż, marketing i operacje wewnętrzne. 
            Nasze inteligentne rozwiązania eliminują powtarzalne zadania, zwiększają efektywność 
            i pozwalają Twojemu biznesowi działać w tle 24/7.
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
            <li>Automatyzację obsługi klienta 24/7</li>
            <li>Inteligentne odpowiedzi na maile i zapytania</li>
            <li>Integracje systemów i aplikacji w jeden ekosystem</li>
            <li>Automatyzację procesów sprzedażowych i marketingowych</li>
            <li>Obsługę social mediów i komentarzy w pełni automatycznie</li>
          </motion.ul>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed"
          >
            Dzięki naszym automatyzacjom oszczędzasz czas, redukujesz koszty i zyskujesz przewagę konkurencyjną. 
            Tworzymy rozwiązania szyte na miarę Twojego biznesu – tak, aby działały skutecznie już od pierwszego dnia.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
