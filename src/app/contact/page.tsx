'use client'

import React from "react";

export default function ContactPage()  {
  const [result, setResult] = React.useState("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Wysyłanie...");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formularz wysłany pomyślnie");
      event.target.reset();
    } else {
      console.log("Błąd", data);
      setResult(data.message);
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_50%_50%_at_center,#656e92,#EAEEFE_100%)] py-20">
      <div className="container mx-auto">
        <div className="text-3xl justify-center flex items-center font-bold tracking-tighter bg-gradient-to-b from-black to-[#8f52b8] text-transparent bg-clip-text md:text-4xl pb-10">
          Skontaktuj się z nami
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={onSubmit} className="space-y-6 max-w-lg mx-auto px-4 sm:px-6 md:px-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Adres e-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                placeholder="Wpisz swój e-mail"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Wiadomość
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
                placeholder="Jak możemy Ci pomóc?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-medium rounded-lg shadow-lg transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>

        {/* Result Message */}
        <div className="pt-4 text-center">
          <span>{result}</span>
        </div>
      </div>
    </section>
  );
};

