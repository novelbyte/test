export default function WhyChatbots() {
  return (
    <section className="pt-16 pb-44 bg-[#0f172a] text-white">
      <h2 className="text-center text-3xl font-bold pb-12">Dlaczego Chatboty AI?</h2>
      <div className="mt-10 space-y-8 px-6">
        {[
          { title: "Dostępność 24/7", desc: "Chatboty obsługują klientów całą dobę.", icon: "⏰" },
          { title: "Natychmiastowa Odpowiedź", desc: "Odpowiadają w ułamku sekundy.", icon: "⚡" },
          { title: "Redukcja Kosztów", desc: "Automatyzują obsługę, zmniejszając koszty.", icon: "💰" },
          { title: "Skalowalność", desc: "Obsługują wielu klientów naraz.", icon: "📈" },
        ].map((item, index) => (
          <div key={index} className="p-6 bg-[#1e293b] rounded-2xl text-center shadow-md">
            <span className="text-4xl">{item.icon}</span>
            <h3 className="text-2xl font-semibold mt-3">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
