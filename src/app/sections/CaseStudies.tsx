"use client";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, Headphones, Share2 } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      icon: ShoppingCart,
      title: "Sklep internetowy",
      text: "Obsługa pytań o produkty i status zamówień w pełni automatycznie. Oszczędność ponad 30h pracy miesięcznie.",
    },
    {
      icon: Headphones,
      title: "Biuro obsługi klienta",
      text: "Chatbot przyjmujący zgłoszenia 24/7 zintegrowany z CRM. Konsultanci odciążeni od prostych pytań.",
    },
    {
      icon: Share2,
      title: "Media społecznościowe",
      text: "Automatyczne odpowiedzi na Facebooku i Instagramie zwiększyły konwersję o 22%.",
    },
    {
      icon: Building2,
      title: "Firma usługowa",
      text: "System rezerwacji online z przypomnieniami SMS zmniejszył nieobecności klientów o 40%.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f172a] to-[#0f172a] relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-white"
      >
        Case Studies
      </motion.h2>

      <div className="relative mt-16 max-w-4xl mx-auto px-6">
        {/* pionowa linia */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-white/20 md:left-1/2" />

        <div className="space-y-16">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                i % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`relative z-10 rounded-2xl bg-white/5 p-6 md:max-w-[45%] ${
                  i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <c.icon className="w-8 h-8 text-yellow-400 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-white/70 text-sm">{c.text}</p>
              </div>

              {/* kropka na osi */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40 -translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
