"use client";

export const Hero = () => {
  return (
    <section className="pt-8 pl-8 xl:pl-[140px] 2xl:pl-[240px] pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#656e92,#EAEEFE_100%)] overflow-x-clip">
      <div className="container max-w-[1280px] justify-center">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#656e92] text-transparent bg-clip-text mt-6">
              Inteligentne rozmowy, automatyzacja i efektywność
            </h1>
            <p className="text-sm md:text-lg xl:text-lg 2xl:text-xl text-[#000000] tracking-tight mt-6">
              Zwiększ zaangażowanie klientów, usprawnij 
              komunikację i automatyzuj procesy dzięki 
              naszym zaawansowanym chatbotom AI. 
              NOVELBYTE AI dostarcza innowacyjne 
              rozwiązania, które pomagają firmom 
              działać szybciej i skuteczniej.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="/services" className="text-xs md:text-sm xl:text-base 2xl:text-lg bg-black text-white p-2 rounded-lg font-mono shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
