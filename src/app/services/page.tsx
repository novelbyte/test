'use client';

export default function Services() {
  const services = [
    {
      title: "Automatyzacja obsługi klienta",
      description: "Chatboty obsługują klientów 24/7, odpowiadając na pytania i przyspieszając procesy.",
      icon: "🤖",
    },
    {
      title: "Szybka i intuicyjna komunikacja",
      description: "Rozmowy są natychmiastowe, zrozumiałe i skuteczne dzięki AI.",
      icon: "⚡",
    },
    {
      title: "Personalizowane doświadczenie użytkownika",
      description: "Dostosowujemy chatboty do Twojej marki i klientów.",
      icon: "🎯",
    },
    {
      title: "Integracja z popularnymi platformami",
      description: "Nasze chatboty działają na Messengerze, WhatsAppie, stronach www i innych.",
      icon: "🔗",
    },
    {
      title: "Oszczędność czasu i zasobów",
      description: "Automatyzacja redukuje koszty i pozwala skupić się na ważniejszych zadaniach.",
      icon: "⏳",
    },
    {
      title: "Zwiększenie satysfakcji klientów",
      description: "Nasze chatboty poprawiają doświadczenie użytkownika, co prowadzi do lepszych wyników.",
      icon: "😊",
    },
  ];

  return (
    <section className="flex justify-center p-8 bg-[#0f172a]">
      <div className="max-w-5xl text-center mt-24">
        <h2 className="text-3xl font-bold mb-16 xl:text-4xl 2xl:text-5xl text-white">
          Nasze Usługi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div key={index} className="group relative p-6 bg-[#1e293b] rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#334155] hover:scale-105">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
