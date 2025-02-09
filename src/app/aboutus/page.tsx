export default function AboutUs() {
    return (
      <section className="pt-8 pl-8 pb-20 bg-[radial-gradient(ellipse_50%_50%_at_center,#656e92,#EAEEFE_100%)] overflow-x-clip">
        
        <div className=" max-w-[478px]">
          <h1 className="md:text-3xl text-2xl font-bold tracking-tighter bg-gradient-to-b from-[#22242b] to-[#5e678b] text-transparent bg-clip-text mt-6">
          Czym się zajmujemy?
          </h1>
          <p className="text-sm md:text-lg text-[#000000] tracking-tight mt-6">
            W NOVELBYTE AI specjalizujemy
            się w tworzeniu zaawansowanych 
            chatbotów opartych na sztucznej 
            inteligencji, które rewolucjonizują 
            sposób komunikacji firm z klientami. 
            Nasze rozwiązania automatyzują 
            obsługę klienta, wsparcie sprzedaży 
            i procesy wewnętrzne, zapewniając 
            płynne i naturalne rozmowy. 
            Tworzymy chatboty dopasowane 
            do Twoich potrzeb – inteligentne, 
            skalowalne i gotowe na rozwój 
            Twojego biznesu.
          </p>
        </div>
        <div className="text-2xl flex justify-center font-bold tracking-tight bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text md:text-3xl pt-16">
            Nasze Wartości
          </div>
        <ul className="mt-[54px] divide-y divide-opacity-[0.7] h-[500px]">
            <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
              <div className="flex items-center">
                <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">01</span>
                <h3 className="ml-[20px] text-[13px] text-gray-600 opacity-70 lg:text-[22px]">
                  Innowacja i Kreatywność
                </h3>
              </div>
              <p className="mt-[10px] text-[12px] text-gray-700 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
                Dostarczamy unikalne, nowoczesne rozwiązania, które wyróżniają się na rynku. Innowacyjność pozwala naszym klientom wyprzedzać konkurencję.
              </p>
            </li>
            <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
              <div className="flex items-center">
                <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">02</span>
                <h3 className="ml-[20px] text-[13px] text-gray-700 opacity-70 lg:text-[22px]">
                  Podejście Skoncentrowane na Kliencie
                </h3>
              </div>
              <p className="mt-[10px] text-[12px] text-gray-800 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
                Dostosowujemy strategie do unikalnych celów klientów. Ich sukces buduje długoterminowe relacje i rozwój.
              </p>
            </li>
            <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
              <div className="flex items-center">
                <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">03</span>
                <h3 className="ml-[20px] text-[13px] text-gray-800 opacity-70 lg:text-[22px]">
                  Doskonałość w Realizacji
                </h3>
              </div>
              <p className="mt-[10px] text-[12px] text-gray-900 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
                Precyzja i jakość w każdym projekcie. Perfekcyjne wykonanie buduje wiarygodność i dostarcza mierzalne rezultaty.
              </p>
            </li>
            <li className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-grayLight">
              <div className="flex items-center">
                <span className="text-[18px] font-[500] bg-gradient-to-b from-black to-[#472a5a] text-transparent bg-clip-text opacity-70 lg:text-[26px]">04</span>
                <h3 className="ml-[20px] text-[13px] text-gray-900 opacity-70 lg:text-[22px]">
                  Przejrzystość i Zaufanie
                </h3>
              </div>
              <p className="mt-[10px] text-[12px] text-gray-900 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] overflow-hidden transition-all duration-500 ease-in-out">
                Otwartość i uczciwość budują trwałe, silne relacje. Zaufanie to fundament udanej współpracy.
              </p>
            </li>
          </ul>
      </section>
    )
  }
  