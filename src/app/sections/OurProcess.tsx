'use client'

export default function AboutUs() {
  return (
    <section className="pt-8 pl-8 pb-20  bg-[radial-gradient(ellipse_50%_50%_at_center,#656e92,#EAEEFE_100%)] overflow-x-clip">

      <div className="text-2xl flex justify-center xl:text-3xl 2xl:text-4xl font-bold tracking-tight bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text md:text-3xl pt-32">
          Nasze Wartości
        </div>
      <ul className="mt-[54px] divide-y divide-opacity-[0.7] h-[500px] px-[20px]">
          <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
            <div className="flex items-center">
              <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">01</span>
              <h3 className="ml-[20px] text-[13px] xl:text-lg 2xl:text-lg text-gray-600 opacity-70 lg:text-[22px]">
                Innowacja i Kreatywność
              </h3>
            </div>
            <p className="mt-[10px] text-[12px] xl:text-lg 2xl:text-lg text-gray-700 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
              Dostarczamy unikalne, nowoczesne rozwiązania, które wyróżniają się na rynku. Innowacyjność pozwala naszym klientom wyprzedzać konkurencję.
            </p>
          </li>
          <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
            <div className="flex items-center">
              <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">02</span>
              <h3 className="ml-[20px] text-[13px] xl:text-lg 2xl:text-lg text-gray-700 opacity-70 lg:text-[22px]">
                Podejście Skoncentrowane na Kliencie
              </h3>
            </div>
            <p className="mt-[10px] text-[12px] xl:text-lg 2xl:text-lg text-gray-800 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
              Dostosowujemy strategie do unikalnych celów klientów. Ich sukces buduje długoterminowe relacje i rozwój.
            </p>
          </li>
          <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
            <div className="flex items-center">
              <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">03</span>
              <h3 className="ml-[20px] text-[13px] xl:text-lg 2xl:text-lg text-gray-800 opacity-70 lg:text-[22px]">
                Doskonałość w Realizacji
              </h3>
            </div>
            <p className="mt-[10px] text-[12px] xl:text-lg 2xl:text-lg text-gray-900 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
              Precyzja i jakość w każdym projekcie. Perfekcyjne wykonanie buduje wiarygodność i dostarcza mierzalne rezultaty.
            </p>
          </li>
          <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
            <div className="flex items-center">
              <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">04</span>
              <h3 className="ml-[20px] text-[13px] xl:text-lg 2xl:text-lg text-gray-900 opacity-70 lg:text-[22px]">
                Przejrzystość i Zaufanie
              </h3>
            </div>
            <p className="mt-[10px] text-[12px] xl:text-lg 2xl:text-lg text-gray-900 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
              Otwartość i uczciwość budują trwałe, silne relacje. Zaufanie to fundament udanej współpracy.
            </p>
          </li>
        </ul>
    </section>
  )
}