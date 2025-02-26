
"use client";

export default function PolitykaPrywatnosci() {
  return (
    <section className="pt-8 pl-8 pr-8 pb-20 bg-[#0f172a] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Polityka Prywatności</h1>

        <p className="mb-4">
          Niniejsza Polityka Prywatności opisuje, w jaki sposób przetwarzamy dane osobowe użytkowników odwiedzających stronę internetową NOVELBYTE AI oraz korzystających z naszego formularza kontaktowego.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Administrator danych</h2>
        <p className="mb-4">
          Administratorem danych osobowych jest <strong>NOVELBYTE AI</strong>. W razie pytań dotyczących przetwarzania danych osobowych można skontaktować się z nami poprzez formularz kontaktowy na stronie.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Jakie dane zbieramy?</h2>
        <p className="mb-4">
          Podczas korzystania z formularza kontaktowego na naszej stronie możemy zbierać następujące dane:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Treść wiadomości</li>
          <li>Numer telefonu (jeśli podano)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Cel przetwarzania danych</h2>
        <p className="mb-4">
          Twoje dane osobowe są przetwarzane wyłącznie w celu odpowiedzi na Twoje zapytanie oraz ewentualnego dalszego kontaktu biznesowego.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Podstawa prawna przetwarzania</h2>
        <p className="mb-4">
          Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 lit. b RODO – niezbędność do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Okres przechowywania danych</h2>
        <p className="mb-4">
          Dane osobowe przechowujemy przez okres niezbędny do realizacji celu kontaktu, maksymalnie przez **12 miesięcy** od momentu ostatniej interakcji.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Prawa użytkownika</h2>
        <p className="mb-4">
          Masz prawo do:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Dostępu do swoich danych</li>
          <li>Żądania ich sprostowania</li>
          <li>Żądania usunięcia danych („prawo do bycia zapomnianym”)</li>
          <li>Ograniczenia przetwarzania</li>
          <li>Sprzeciwu wobec przetwarzania</li>
          <li>Przeniesienia danych</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Odbiorcy danych</h2>
        <p className="mb-4">
          Nie udostępniamy Twoich danych osobowych osobom trzecim, chyba że jest to wymagane przez prawo lub niezbędne do realizacji naszych usług (np. usługi hostingowe, formularz Web3Forms).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Pliki cookies</h2>
        <p className="mb-4">
          Nasza strona może używać plików cookies w celu analizy ruchu oraz poprawy doświadczenia użytkownika.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Kontakt</h2>
        <p className="mb-4">
          W przypadku pytań dotyczących przetwarzania danych osobowych możesz skontaktować się z nami poprzez formularz na stronie lub wysyłając wiadomość na adres e-mail: <strong>kontakt@novelbyte.eu</strong>.
        </p>

        <p className="text-sm text-gray-400 mt-6">
          Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
        </p>
      </div>
    </section>
  );
}

