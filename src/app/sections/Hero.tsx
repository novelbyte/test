"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f172a]">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(40%_40%_at_80%_10%,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="mx-auto max-w-[1280px] px-12 pt-16 pb-20 xl:px-[60px] 2xl:px-[60px]">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] md:text-xs text-white/70 backdrop-blur">
              Kompleksowa automatyzacja dla firm • Chatboty • Integracje • Leady
            </span>

            <h1 className="mt-5 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white">
              Automatyzujemy Twój biznes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                żeby działał szybciej, taniej i 24/7
              </span>
            </h1>

            <p className="mt-6 text-sm md:text-base xl:text-lg 2xl:text-xl leading-relaxed text-gray-300 max-w-[600px]">
              NOVELBYTE AI projektuje i wdraża inteligentne systemy konwersacyjne oraz
              automatyzacje procesów, które zwiększają sprzedaż, skracają czas obsługi i
              eliminują ręczne, powtarzalne zadania. Ty skupiasz się na rozwoju — resztę bierzemy na siebie.
            </p>

            {/* Value bullets */}
            <ul className="mt-6 space-y-3 text-gray-300">
              {[
                "Obsługa klientów i leady 24/7 na stronie, w mailu i social media",
                "Automatyczne procesy: od zapytań po rezerwacje i płatności",
                "Integracje z Twoimi narzędziami — bez zmiany stacku"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/kontakt"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Umów bezpłatną konsultację
              </Link>

            </div>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs md:text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>Szybkie wdrożenie: od pilota do produkcji</span>
              </div>
              <div className="hidden md:block h-3 w-px bg-white/20" />
              <div>Umowa i pełne wsparcie po starcie</div>
            </div>
          </motion.div>

          {/* Visual / mock panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mx-auto w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#0b1224]/70 p-5 shadow-2xl backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-white/80 text-sm font-semibold">Panel konwersacji</div>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-red-400/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                  <span className="h-2 w-2 rounded-full bg-green-400/80" />
                </div>
              </div>

              <div className="space-y-3">
                {/* Chat bubbles */}
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/10" />
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-white/90">
                    Codziennie dostaję dziesiątki zapytań i nie nadążam z odpowiedziami...
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-500/20 p-3 text-sm text-white">
                    Wyobraź sobie, że każde pytanie klienta dostaje natychmiastową odpowiedź – automatycznie.
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-500/30" />
                </div>
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/10" />
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 p-3 text-sm text-white/90">
                    To znaczy, że nie stracę żadnego klienta?
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-blue-500/20 p-3 text-sm text-white">
                    Dokładnie. Każda rozmowa to szansa na sprzedaż – i Twój chatbot jej nie przegapi 💡
                  </div>
                  <div className="h-8 w-8 rounded-full bg-blue-500/30" />
                </div>
              </div>


              {/* Mini stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { k: "Śr. czas odpowiedzi", v: "0.8 s" },
                  { k: "Automatycznie obsłużone", v: "92%" },
                  { k: "Wzrost konwersji", v: "+28%" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-[10px] md:text-xs text-white/60">{s.k}</div>
                    <div className="text-sm md:text-base font-semibold text-white">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
