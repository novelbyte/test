"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "449 zł / mies.",
      desc: "Idealny dla małych firm, które chcą rozpocząć przygodę z automatyzacją.",
      features: [
        "Chatbot obsługujący stronę www",
        "Podstawowe automatyzacje",
        "Wsparcie mailowe",
      ],
      cta: "Wybierz Starter",
      highlight: false,
    },
    {
      name: "Pro",
      price: "999 zł / mies.",
      desc: "Najczęściej wybierany – kompleksowe wsparcie i rozwój automatyzacji.",
      features: [
        "Chatbot + social media",
        "Zaawansowane automatyzacje procesów",
        "Integracje z CRM i systemami",
        "Wsparcie mailowe + priorytetowe",
      ],
      cta: "Wybierz Pro",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "indywidualna wycena",
      desc: "Dla firm, które potrzebują pełnej personalizacji i skalowania.",
      features: [
        "Dedykowane rozwiązania AI",
        "Pełna automatyzacja procesów",
        "Integracje pod klienta",
        "Stałe wsparcie i doradztwo",
      ],
      cta: "Skontaktuj się",
      highlight: false,
    },
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
        Wybierz plan dopasowany do Twojej firmy
      </motion.h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 border transition shadow-xl ${
              plan.highlight
                ? "bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 text-white border-purple-700 scale-105"
                : "bg-white/5 border-white/30 text-white hover:bg-white/10"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="mb-4 text-sm opacity-80">{plan.desc}</p>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx} className="text-sm flex items-center gap-2">
                  ✅ {f}
                </li>
              ))}
            </ul>
            <a
              href="/kontakt"
              className={`block w-full text-center rounded-lg px-4 py-2 font-medium transition ${
                plan.highlight
                  ? "bg-white text-purple-700 hover:bg-gray-300"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
