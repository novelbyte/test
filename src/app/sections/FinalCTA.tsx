'use client'
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center px-6 md:px-12 xl:px-[160px] 2xl:px-[240px]"
      >
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white">
          Zacznij automatyzować swoją firmę już dziś!
        </h2>
        <p className="mt-6 text-gray-300 text-sm md:text-lg xl:text-xl max-w-3xl mx-auto">
          Dzięki <span className="text-white font-semibold">NOVELBYTE AI</span> zyskasz więcej czasu, zwiększysz efektywność zespołu i poprawisz doświadczenia klientów. 
          Nasze inteligentne rozwiązania działają 24/7 i mogą być dopasowane do każdego rodzaju biznesu.
        </p>
        <motion.a
          href="/kontakt"
          className="mt-8 inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Skontaktuj się z nami
        </motion.a>
      </motion.div>
    </section>
  );
}
