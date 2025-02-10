'use client'

export default function OurProcess() {
  return (
    <section className="pt-8 pb-20 bg-[#0f172a] overflow-x-clip">
      <div className="pt-32 flex justify-center text-3xl font-bold tracking-tight text-white">
        Nasz Proces
      </div>
      <ul className="mt-14 divide-y divide-gray-600 h-[450px]">
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">01</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">Odkrycie</h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Analizujemy potrzeby Twojej firmy i sposób komunikacji z klientami.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">02</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">Strategia</h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Projektujemy inteligentne konwersacje, które zwiększają zaangażowanie.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">03</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">Wdrożenie</h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Tworzymy i integrujemy chatboty na różnych platformach.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">04</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">Rozwój</h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Monitorujemy wyniki i optymalizujemy interakcje, aby zwiększyć skuteczność.
          </p>
        </li>
      </ul>
    </section>
  );
}
