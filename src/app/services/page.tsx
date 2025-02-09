'use client'

export default function Services() {
    return (
        <section className="flex justify-center p-8 bg-[radial-gradient(ellipse_100%_50%_at_center_left,#656e92,#EAEEFE_100%)]">
            <div className="max-w-3xl text-center">
                <h2 className="text-3xl font-bold mb-4 text-black">Nasze Usługi</h2>
                <p className="text-lg text-gray-700">
                    Tworzymy inteligentne chatboty, które zwiększają sprzedaż, poprawiają interakcje z klientami i oszczędzają Twój czas. 
                    Nasze rozwiązania są łatwe w obsłudze, szybkie w implementacji i pomagają Twojej firmie działać efektywniej.
                </p>
                <ul className="mt-6 text-lg text-gray-600 space-y-2">
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

