"use client";
import { motion } from "framer-motion";
import { Search, Brain, Wrench, LineChart, Rocket } from "lucide-react";

export default function OurProcess() {
  const steps = [
    { icon: Search, title: "Analiza potrzeb", text: "Rozmawiamy z Tobą, poznajemy firmę i procesy, aby zrozumieć gdzie automatyzacja przyniesie największe korzyści." },
    { icon: Brain, title: "Projekt rozwiązania", text: "Tworzymy indywidualny plan automatyzacji: chatboty, integracje, raporty, przepływy pracy." },
    { icon: Wrench, title: "Wdrożenie", text: "Budujemy i uruchamiamy rozwiązania dopasowane do Twojej firmy – bez zbędnej teorii, tylko działające systemy." },
    { icon: LineChart, title: "Optymalizacja", text: "Śledzimy wyniki, analizujemy dane i poprawiamy procesy, aby były jeszcze szybsze i tańsze." },
    { icon: Rocket, title: "Skalowanie", text: "Kiedy firma rośnie, system rośnie razem z nią – bez dodatkowych kosztów i chaosu." },
  ];

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-white"
      >
        Jak działamy
      </motion.h2>

      <div className="mt-16 flex flex-col gap-12 max-w-5xl mx-auto px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-start gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse text-right"}`}
          >
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-yellow-400/20 flex items-center justify-center">
              <s.icon className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
