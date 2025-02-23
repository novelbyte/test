"use client";
import { motion } from "framer-motion";

export default function WhyChatbots() {
  return (
    <section className="pt-16 pb-44 bg-[#0f172a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl font-bold pb-12"
      >
        Dlaczego Chatboty AI?
      </motion.h2>
      <div className="mt-10 space-y-8 px-6 2xl:px-[240px] xl:px-[160px]">
        {[
          { title: "Dostępność 24/7", desc: "Chatboty obsługują klientów całą dobę.", icon: "⏰" },
          { title: "Natychmiastowa Odpowiedź", desc: "Odpowiadają w ułamku sekundy.", icon: "⚡" },
          { title: "Redukcja Kosztów", desc: "Automatyzują obsługę, zmniejszając koszty.", icon: "💰" },
          { title: "Skalowalność", desc: "Obsługują wielu klientów naraz.", icon: "📈" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-[#1e293b] rounded-2xl text-center shadow-md"
          >
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-2xl font-semibold mt-3">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="max-w-[908px] pl-8 xl:pl-[160px] 2xl:pl-[240px] mt-[200px] mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter text-white"
        >
          Dlaczego Chatboty Są Przyszłością?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight"
        >
          Chatboty to nie tylko przyszłość – to rewolucja w komunikacji z klientami. Wykorzystując sztuczną inteligencję, możemy zapewnić natychmiastową, personalizowaną obsługę, która nie tylko oszczędza czas, ale także buduje głębokie więzi z użytkownikami. Działają 24/7, nigdy się nie męczą, a ich zdolność do rozwiązywania problemów w czasie rzeczywistym sprawia, że stają się niezastąpionym narzędziem w każdej firmie.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight"
        >
          Dzięki naszym chatbotom, które rozwijają się z każdą rozmową, firmy mogą stawić czoła wyzwaniom przyszłości – skutecznej obsłudze klienta, zwiększaniu sprzedaży i automatyzacji procesów. To inwestycja, która zapewnia długoterminowy rozwój i przewagę konkurencyjną.
        </motion.p>
      </div>
    </section>
  );
}
