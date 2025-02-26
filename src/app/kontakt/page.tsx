"use client";

import React, { useState } from "react";
import { Mail, User, MessageCircle, Loader2 } from "lucide-react"; // Import ikon
import { motion } from "framer-motion"; // Animacje

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

 const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setResult("Wysyłanie...");

  const form = event.currentTarget; // Przechowujemy referencję do formularza
  const formData = new FormData(form);
  formData.append("access_key", apiKey as string);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Formularz wysłany pomyślnie");

      // Sprawdzamy, czy 'form' nie jest null przed resetem
      if (form) {
        form.reset();
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl pb-10"
        >
          Skontaktuj się z nami
        </motion.div>

        {/* Formularz kontaktowy */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={onSubmit}
          className="space-y-6 max-w-lg mx-auto bg-gray-900 p-6 rounded-xl shadow-lg"
        >
          {/* Pole Imię i Nazwisko */}
          <div>
            <label className="block text-sm font-medium text-white">Imię i Nazwisko</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                className="pl-10 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>
          </div>

          {/* Pole Email */}
          <div>
            <label className="block text-sm font-medium text-white">Adres e-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                className="pl-10 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Wpisz swój e-mail"
                required
              />
            </div>
          </div>

          {/* Pole Wiadomość */}
          <div>
            <label className="block text-sm font-medium text-white">Wiadomość</label>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400" />
              <textarea
                name="message"
                rows={4}
                className="pl-10 w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Jak możemy Ci pomóc?"
                required
              ></textarea>
            </div>
          </div>

          {/* Zgoda na RODO */}
          <div className="flex items-center space-x-2 text-white text-sm">
            <input type="checkbox" name="rodo" required className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-400" />
            <label htmlFor="rodo">
              Akceptuję{" "}
              <a href="/polityka-prywatnosci" className="underline text-blue-400">
                politykę prywatności
              </a>
              .
            </label>
          </div>

          {/* Przycisk wysyłania */}
          <button
            type="submit"
            className="w-full py-3 flex items-center justify-center bg-yellow-400 text-black font-medium rounded-lg shadow-lg transition duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
        </motion.form>

        {/* Komunikat o wyniku */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-4 text-center text-white"
          >
            {result}
          </motion.div>
        )}
      </div>
    </section>
  );
}
