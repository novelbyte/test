"use client";
import { motion } from "framer-motion";

export default function OurProcess() {
  return (
    <section className="pt-8 pb-20 bg-[#0f172a] overflow-x-clip">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        viewport={{ once: true }}
        className="pt-32 flex justify-center text-3xl font-bold tracking-tight text-white"
      >
        Nasz Proces
      </motion.div>
      <ul className="mt-14 divide-y divide-gray-600 h-[450px]">
        {[ 
          { id: "01", title: "Odkrycie", text: "Analizujemy potrzeby Twojej firmy i sposób komunikacji z klientami." },
          { id: "02", title: "Strategia", text: "Projektujemy inteligentne konwersacje, które zwiększają zaangażowanie." },
          { id: "03", title: "Wdrożenie", text: "Tworzymy i integrujemy chatboty na różnych platformach." },
          { id: "04", title: "Rozwój", text: "Monitorujemy wyniki i optymalizujemy interakcje, aby zwiększyć skuteczność." }
        ].map((step, index) => (
          <motion.li 
            key={step.id} 
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]"
          >
            <div className="flex items-center">
              <span className="text-xl font-medium lg:text-2xl text-yellow-400">{step.id}</span>
              <h3 className="ml-5 text-base lg:text-xl text-white">{step.title}</h3>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out"
            >
              {step.text}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}