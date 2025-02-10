"use client";

import React from "react";

export default function ContactPage() {
  const [result, setResult] = React.useState("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Wysyłanie...");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", apiKey as string);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Formularz wysłany pomyślnie");
  
        // Add a null check before calling reset()
        if (event.currentTarget) {
          event.currentTarget.reset();
        }
      } else {
        console.error("Błąd", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Wystąpił błąd:", error);
      setResult("Wystąpił błąd podczas wysyłania formularza.");
    }
  };
  

  return (
    <section className="bg-[#0f172a] py-20">
      <div className="container mx-auto">
        <div className="flex justify-center items-center text-3xl font-bold tracking-tighter text-white md:text-4xl pb-10">
          Skontaktuj się z nami
        </div>

        {/* Formularz kontaktowy */}
        <div>
          <form onSubmit={onSubmit} className="space-y-6 max-w-lg mx-auto px-4 sm:px-6 md:px-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Adres e-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Wpisz swój e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Wiadomość
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="mt-1 block w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Jak możemy Ci pomóc?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black font-medium rounded-lg shadow-lg transition duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>

        {/* Komunikat o wyniku */}
        <div className="pt-4 text-center text-white">
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
}
