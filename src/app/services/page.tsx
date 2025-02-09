'use client'

export default function Services() {
  return (
    <section className="flex justify-center p-8 bg-[#0f172a]">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-4 xl:text-4xl 2xl:text-5xl text-white">
          Nasze Usługi
        </h2>
        <p className="text-lg xl:text-2xl 2xl:text-2xl text-gray-300">
          Tworzymy inteligentne chatboty, które zwiększają sprzedaż, poprawiają interakcje z klientami i oszczędzają Twój czas. 
          Nasze rozwiązania są łatwe w obsłudze, szybkie w implementacji i pomagają Twojej firmie działać efektywniej.
        </p>
        <ul className="mt-6 text-lg text-gray-300 space-y-2">
          <li>✅ Automatyzacja obsługi klienta</li>
          <li>✅ Szybka i intuicyjna komunikacja</li>
          <li>✅ Personalizowane doświadczenie użytkownika</li>
          <li>✅ Integracja z popularnymi platformami</li>
          <li>✅ Oszczędność czasu i zasobów</li>
        </ul>
      </div>
    </section>
  );
};
