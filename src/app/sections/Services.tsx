"use client";

import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  stat: string;
  statLabel: string;
}

const services: Service[] = [
  {
    title: "Automatyzacja Obsługi Klienta",
    description:
      "Chatboty i voiceboty odpowiadające klientom 24/7 na stronie, w social media i w mailu. AI rozpoznaje intencje i kieruje sprawy automatycznie.",
    icon: "🤖",
    stat: "92%",
    statLabel: "spraw obsłużonych automatycznie",
  },
  {
    title: "Generowanie i Kwalifikacja Leadów",
    description:
      "Integracje z formularzami, CRM i narzędziami analitycznymi. AI automatycznie kwalifikuje leady i przypisuje je do odpowiednich przedstawicieli.",
    icon: "📈",
    stat: "30%",
    statLabel: "więcej nowych klientów",
  },
  {
    title: "Analiza Danych i Raportowanie",
    description:
      "AI przetwarza dane z systemów, tworzy raporty i wizualizacje w czasie rzeczywistym, wspierając decyzje biznesowe i marketingowe.",
    icon: "📊",
    stat: "120+ h",
    statLabel: "oszczędności czasu miesięcznie",
  },
  {
    title: "Tworzenie Treści i SEO",
    description:
      "AI generuje treści marketingowe, posty social media i opisy produktów, zoptymalizowane pod SEO i publikowane automatycznie.",
    icon: "📝",
    stat: "25%",
    statLabel: "więcej ruchu organicznego",
  },
  {
    title: "Automatyzacja HR i Rekrutacji",
    description:
      "AI analizuje CV, planuje rozmowy i powiadamia kandydatów. Wszystko automatycznie, aby skrócić czas rekrutacji i zwiększyć efektywność.",
    icon: "👥",
    stat: "50%",
    statLabel: "mniej czasu działu HR",
  },
  {
    title: "Automatyzacja Operacji IT",
    description:
      "Monitorowanie systemów, reagowanie na incydenty i raportowanie w czasie rzeczywistym z pomocą AI i n8n.",
    icon: "💻",
    stat: "40%",
    statLabel: "mniej problemów IT",
  },
];

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] py-20">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-[1280px] px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6"
        >
          Nasze Usługi AI & Automatyzacje
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-300 text-center mb-16 max-w-3xl mx-auto"
        >
          W NOVELBYTE AI łączymy moc n8n i sztucznej inteligencji, aby zautomatyzować każdy
          proces w Twoim biznesie – od obsługi klienta, przez marketing, aż po HR i IT.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#0b1224]/70 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-5 text-sm md:text-base">{service.description}</p>
              <div className="text-indigo-400 font-bold text-lg">
                {service.stat} <span className="text-gray-400 text-sm">{service.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
