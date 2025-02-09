'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // For client-side logic after mount

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  // Prevent menu open effect until component has mounted
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden', 'w-screen');
    } else {
      document.body.classList.remove('overflow-hidden', 'w-screen');
    }
  }, [menuOpen]);

  // If not mounted, return null to avoid rendering mismatched content between server and client
  if (!mounted) return null;

  return (
    <header className="sticky top-0 backdrop-blur-lg z-20 shadow-md">
      {/* Top Notification Bar */}
      <div className="flex justify-center items-center text-[8px] md:text-[15px] bg-black text-white py-2">
        <p className="text-white/60 md:block">
          Innowacyjne rozwiązania AI i chatboty dla rozwijających się firm
        </p>
      </div>
      {/* Main Navigation */}
      <div className="py-5">
        <div className="container max-w-screen mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" passHref>
            <span className="text-black/80 text-xl xl:text-2xl 2xl:text-2xl font-bold pl-4 transform hover:text-gray-400 transition duration-150 cursor-pointer">
              NOVELBYTE AI
            </span>
          </Link>



          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-black/60 items-center text-xs xl:text-lg 2xl:text-lg">
            <Link href="/aboutus" passHref>
              <span className="hover:text-gray-400 cursor-pointer">O nas</span>
            </Link>
            <Link href="/services" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Usługi</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="hover:text-gray-400 cursor-pointer">Kontakt</span>
            </Link>

            {/* Social Media Links */}
            <a
              href="https://x.com/novelbyteAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/novelbyte.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400 transition"
            >
              <FaInstagram />
            </a>

            {/* Call-to-Action Button */}
            <Link href="/services" passHref>
              <span className="text-xs xl:text-lg 2xl:text-lg bg-black text-white p-2 rounded-lg font-mono shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
                Dowiedz się więcej
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Covers Full Screen */}
      <div
        className={`fixed inset-0 bg-[radial-gradient(ellipse_500%_50%_at_top_center,#656e92,#EAEEFE_100%)] h-[420px] z-30 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-3xl text-black"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-6 items-center text-lg text-black/70">
          <Link href="/aboutus" passHref>
            <span className="hover:text-gray-600 cursor-pointer" onClick={() => setMenuOpen(false)}>
              O nas
            </span>
          </Link>
          <Link href="/services" passHref>
            <span className="hover:text-gray-600 cursor-pointer" onClick={() => setMenuOpen(false)}>
              Usługi
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-gray-600 cursor-pointer" onClick={() => setMenuOpen(false)}>
              Kontakt
            </span>
          </Link>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="https://x.com/novelbyteAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/novelbyte.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600 transition"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Call-to-Action Button */}
          <Link href="/services" passHref>
            <span
              className="bg-black text-white px-4 py-2 rounded-lg font-mono shadow-md transition-all duration-300 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Dowiedz się więcej
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
