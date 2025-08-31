"use client";

import { motion } from "framer-motion";

export const AboutUs = () => {


  return (
    <section className="pt-8 pl-8 pb-20 bg-[#0f172a] overflow-x-clip">
      {/* Gradient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="mx-auto xl:px-[340px] md:px-8 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-white">
              Kim jesteśmy?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                NOVELBYTE AI – automatyzujemy biznes
              </span>
            </h2>

            <p className="mt-6 text-sm md:text-base xl:text-lg text-gray-300 leading-relaxed max-w-[600px]">
              Jesteśmy zespołem specjalistów od sztucznej inteligencji i automatyzacji procesów. 
              Tworzymy rozwiązania, które eliminują powtarzalne zadania, usprawniają obsługę klienta 
              i zwiększają efektywność operacyjną firm.  
              <br /><br />
              Naszą misją jest, aby małe i średnie firmy mogły korzystać z technologii, 
              które jeszcze niedawno były dostępne tylko dla korporacji.
            </p>

            {/* Bullets */}
            <ul className="mt-6 text-gray-300">
              {[
                "Projektujemy chatboty, voiceboty i inteligentne asystenty",
                "Automatyzujemy procesy: od faktur po CRM i ERP",
                "Integrujemy systemy e-commerce, płatności i rezerwacje",
                "Generujemy i kwalifikujemy leady automatycznie",
                "Wdrażamy raportowanie i analitykę w czasie rzeczywistym"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual / Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mx-auto w-full max-w-[480px] rounded-2xl border border-white/10 bg-[#0b1224]/70 p-6 shadow-2xl backdrop-blur">
              <h3 className="text-white/80 text-lg font-semibold mb-6">
                Nasz wpływ w liczbach
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Średnia oszczędność czasu", v: "120+ h/mies." },
                  { k: "Wzrost konwersji", v: "+30%" },
                  { k: "Koszty operacyjne", v: "-40%" },
                  { k: "Zadowolenie klientów", v: "92%" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-transform duration-300 hover:scale-105"
                  >
                    <div className="text-[11px] md:text-xs text-white/60">{s.k}</div>
                    <div className="text-lg md:text-xl font-bold text-white mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values on hover */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <h3 className="text-center text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-10">
            Nasze Wartości
          </h3>

      <ul className="mt-14 divide-y divide-gray-700 h-[500px]">
        {[  
          {
            id: "01",
            title: "Innowacja i Kreatywność",
            desc: "Dostarczamy unikalne, nowoczesne rozwiązania, które wyróżniają się na rynku. Innowacyjność pozwala naszym klientom wyprzedzać konkurencję."
          },
          {
            id: "02",
            title: "Podejście Skoncentrowane na Kliencie",
            desc: "Dostosowujemy strategie do unikalnych celów klientów. Ich sukces buduje długoterminowe relacje i rozwój."
          },
          {
            id: "03",
            title: "Doskonałość w Realizacji",
            desc: "Precyzja i jakość w każdym projekcie. Perfekcyjne wykonanie buduje wiarygodność i dostarcza mierzalne rezultaty."
          },
          {
            id: "04",
            title: "Przejrzystość i Zaufanie",
            desc: "Otwartość i uczciwość budują trwałe, silne relacje. Zaufanie to fundament udanej współpracy."
          }
        ].map((item) => (
          <li
            key={item.id}
            className="group relative flex flex-col justify-between px-[30px] py-[20px] transition-all duration-500 ease-in-out hover:bg-[#27303c]"
          >
            <div className="flex items-center">
              <span className="text-[18px] xl:text-2xl 2xl:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {item.id}
              </span>
              <h3 className="ml-[20px] text-[13px] xl:text-lg 2xl:text-xl text-white opacity-90 lg:text-[22px]">
                {item.title}
              </h3>
            </div>
            <p className="mt-[10px] text-[12px] xl:text-lg 2xl:text-xl text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
