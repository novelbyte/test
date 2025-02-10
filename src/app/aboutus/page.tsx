"use client";

export default function AboutUs() {
  return (
    <section className="pt-8 pl-8 pb-20 bg-[#0f172a] overflow-x-clip">
      <div className="max-w-[908px] xl:pl-[100px] 2xl:pl-[210px] mt-32 mb-12">
        <h1 className="mt-6 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter text-white">
          Czym się zajmujemy?
        </h1>
        <p className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
          W NOVELBYTE AI specjalizujemy się w tworzeniu zaawansowanych chatbotów opartych na sztucznej inteligencji, które rewolucjonizują sposób komunikacji firm z klientami. Nasze rozwiązania automatyzują obsługę klienta, wsparcie sprzedaży i procesy wewnętrzne, zapewniając płynne i naturalne rozmowy. Tworzymy chatboty dopasowane do Twoich potrzeb – inteligentne, skalowalne i gotowe na rozwój Twojego biznesu.
        </p>
      </div>
      <div className="pt-32 flex justify-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter text-white">
        Nasze Wartości
      </div>
      <ul className="mt-14 divide-y divide-gray-700 h-[500px] xl:px-[200px] 2xl:px-[300px]">
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
            className="group relative flex flex-col justify-between px-[30px] py-[20px] lg:px-[120px] transition-all duration-500 ease-in-out hover:bg-[#27303c]"
          >
            <div className="flex items-center">
              <span className="text-[18px] xl:text-2xl 2xl:text-3xl font-medium text-yellow-400">
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
      <div className="mt-32 max-w-[908px] xl:pl-[100px] 2xl:pl-[210px]">
        <h2 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tighter text-white">
          Tworzymy chatboty, które sprzedają, pomagają i budują relacje
        </h2>
        <p className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
          W NovelByte AI wierzymy, że chatbot to coś więcej niż narzędzie do automatyzacji – to sposób na stworzenie prawdziwej, ludzkiej relacji między Twoją marką a klientami.
        </p>
        <p className="mt-4 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
          Nasi inteligentni asystenci AI sprawiają, że zakupy online stają się czymś więcej niż tylko klikaniem i szukaniem produktów. Każdy klient otrzymuje spersonalizowane doświadczenie, które buduje zaufanie, lojalność i zamienia zwykłych odwiedzających w prawdziwych ambasadorów Twojej marki.
        </p>
        <p className="mt-4 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
          Tak, nasze chatboty redukują liczbę zapytań do obsługi klienta nawet o <span className="text-yellow-400 font-bold">80%</span>, przyspieszając i ułatwiając cały proces. Ale dla nas to coś więcej – to <span className="text-yellow-400 font-bold">tworzenie realnej więzi z każdym klientem</span>, dawanie mu poczucia, że jest wysłuchany i doceniony.
        </p>
        <p className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-gray-300 tracking-tight">
          Jeśli chcesz, aby Twoja firma działała szybciej, sprzedawała więcej i jednocześnie budowała trwałe relacje z klientami, jesteś we właściwym miejscu.
        </p>
        <p className="mt-6 text-sm md:text-lg xl:text-lg 2xl:text-xl text-yellow-400 font-bold tracking-tight">
          🚀 Sprawdź, jak możemy pomóc Twojej marce!
        </p>
      </div>
    </section>
  );
}
