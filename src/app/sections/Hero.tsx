"use client";

export const Hero = () => {
  return (
    <section className="pt-8 pl-8 xl:pl-[140px] 2xl:pl-[240px] pb-20 bg-[#0f172a] overflow-x-clip">
      <div className="container max-w-[1280px]">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="mt-6 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter text-white">
              Inteligentne rozmowy, automatyzacja i efektywność
            </h1>
            <p className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
              Zwiększ zaangażowanie klientów, usprawnij komunikację i automatyzuj procesy dzięki naszym zaawansowanym chatbotom AI. NOVELBYTE AI dostarcza innowacyjne rozwiązania, które pomagają firmom działać szybciej i skuteczniej.
            </p>
            <div className="mt-8 flex gap-1 items-center">
              <a
                href="/uslugi"
                className="text-xs md:text-sm xl:text-base 2xl:text-lg bg-yellow-400 text-black p-2 rounded-lg font-mono shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
