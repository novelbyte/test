'use client'

export default function AboutUs() {
  return (
    <section className="pt-8 pl-8 pb-20 bg-[#0f172a] overflow-x-clip">
      <div className="pt-32 flex justify-center text-3xl font-bold tracking-tight text-white">
        Nasze Wartości
      </div>
      <ul className="mt-14 divide-y divide-gray-600 h-[500px] px-5">
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">01</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">
              Innowacja i Kreatywność
            </h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Dostarczamy unikalne, nowoczesne rozwiązania, które wyróżniają się na rynku. Innowacyjność pozwala naszym klientom wyprzedzać konkurencję.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">02</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">
              Podejście Skoncentrowane na Kliencie
            </h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Dostosowujemy strategie do unikalnych celów klientów. Ich sukces buduje długoterminowe relacje i rozwój.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">03</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">
              Doskonałość w Realizacji
            </h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Precyzja i jakość w każdym projekcie. Perfekcyjne wykonanie buduje wiarygodność i dostarcza mierzalne rezultaty.
          </p>
        </li>
        <li className="group flex flex-col justify-between px-8 py-5 lg:px-32 transition-all duration-500 ease-in-out hover:bg-[#27303c]">
          <div className="flex items-center">
            <span className="text-xl font-medium lg:text-2xl text-yellow-400">04</span>
            <h3 className="ml-5 text-base lg:text-xl text-white">
              Przejrzystość i Zaufanie
            </h3>
          </div>
          <p className="mt-2 text-sm lg:text-base text-gray-300 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
            Otwartość i uczciwość budują trwałe, silne relacje. Zaufanie to fundament udanej współpracy.
          </p>
        </li>
      </ul>
    </section>
  )
}
