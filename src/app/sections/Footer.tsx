'use client'

export const Footer = () => {
  return (
    <footer className=" text-white pb-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold text-zinc-600">Skontaktuj się z nami</h2> {/* Darkened the text */}
        <div className="mt-4 space-y-2">
          <p className="text-sm text-zinc-500"> {/* Darkened the text */}
            📞{" "}
            <a
              href="tel:+48572478289"
              className="text-gray font-medium hover:text-gray-300 transition duration-300"
            >
              +48 572 478 289
            </a>
          </p>
          <p className="text-sm text-zinc-500"> {/* Darkened the text */}
            📧{" "}
            <a
              href="mailto:novelbyte@gmail.com"
              className="text-gray font-medium hover:text-gray-300 transition duration-300"
            >
              novelbyte@gmail.com
            </a>
          </p>
        </div>

        <p className="mt-6 text-xs text-gray-400"> {/* Darkened the text */}
          © 2025 NovelByte. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
