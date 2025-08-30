'use client'
import Link from 'next/link';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white pb-12 bg-[#0f172a]">
      <div className="container mx-auto px-6 text-center">
        <span className="text-xl font-bold text-white">NOVELBYTE AI</span>
        <p className="mt-2 text-gray-400">Innowacyjne rozwiązania AI i automatyzacja procesów dla firm.</p>

        <div className="mt-6 flex justify-center gap-6">
          <Link
            href="/ofirmie"
            className="text-white transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400"
          >
            O nas
          </Link>
          <Link
            href="/uslugi"
            className="text-white transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400"
          >
            Usługi
          </Link>
          <Link
            href="/blog"
            className="text-white transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400"
          >
            Blog
          </Link>
          <Link
            href="/kontakt"
            className="text-white transition-all duration-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400"
          >
            Kontakt
          </Link>
        </div>




        <div className="mt-6 flex justify-center gap-6 text-xl text-gray-300">
          <a href="https://x.com/novelbyteAI" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/novelbyte/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaInstagram />
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2025 NovelByte. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
