"use client";
import { motion } from "framer-motion";
import { Users, Rocket, Clock, Workflow, BarChart3, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    { icon: Workflow, title: "Automatyzacja procesów", text: "Od faktur i raportów po obsługę zapytań – system działa samodzielnie, oszczędzając Twój czas." },
    { icon: Users, title: "Lepsza obsługa klientów", text: "Inteligentne chatboty i asystenci wspierają klientów 24/7 na wielu kanałach." },
    { icon: Clock, title: "Oszczędność godzin pracy", text: "Codzienne, powtarzalne zadania wykonują boty, dzięki czemu zespół może skupić się na rozwoju firmy." },
    { icon: Rocket, title: "Szybsza sprzedaż", text: "Automatyczne leady, follow-upy i personalizacja komunikacji zwiększają skuteczność handlową." },
    { icon: BarChart3, title: "Pełna kontrola danych", text: "Raporty i analityka w czasie rzeczywistym wspierają mądre decyzje biznesowe." },
    { icon: TrendingUp, title: "Skalowalny rozwój", text: "System obsłuży 10 czy 1000 klientów bez dodatkowych kosztów i zatrudnień." },
  ];

  return (
    <section className="py-24 bg-[#0f172a]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-white"
      >
        Korzyści dla Twojej firmy
      </motion.h2>

      <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto px-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 p-8 hover:bg-white/10 transition"
          >
            <b.icon className="w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{b.title}</h3>
            <p className="text-white/70 text-sm">{b.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
