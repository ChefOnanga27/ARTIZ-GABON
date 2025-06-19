'use client';

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = [1, 2]; // Exemple panier

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm relative z-50">
      <div className="flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <div>
          <Image
            src="/LOGO .png"
            alt="Logo"
            width={110}
            height={90}
            className="object-cover drop-shadow-xl"
            priority
          />
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex justify-center space-x-10 text-base md:text-lg font-semibold text-gray-900">
          <a href="/" className="hover:text-orange-500 transition">Accueil</a>
          <a href="/categorie" className="hover:text-orange-500 transition">Produits</a>
          <a href="/muse" className="hover:text-orange-500 transition">Espace Musée</a>
        </nav>

        {/* Icônes + menu mobile */}
        <div className="flex items-center gap-4 md:gap-8 text-2xl md:text-3xl">
          <Link href="/panier" className="text-gray-800 relative flex items-center">
            <FiShoppingCart size={26} />
            <span className="ml-1 text-sm text-gray-600">({cart.length})</span>
          </Link>
          <FaUser className="text-gray-800" size={26} />
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <HiOutlineMenu className="text-gray-800" size={30} />
          </button>
        </div>
      </div>

      {/* Menu mobile (réduit, sans fond noir) */}
      {isMenuOpen && (
        <div
          className={`
            fixed top-6 right-4 z-50 
            w-[60%] max-w-[240px] 
            h-[50%] bg-white shadow-xl 
            rounded-xl transition-transform duration-300 
            transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* En-tête du menu */}
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX className="text-gray-800" size={32} />
            </button>
          </div>

          {/* Liens de navigation bien grands */}
          <nav className="flex flex-col px-4 py-6 gap-4 text-2xl font-bold text-gray-800">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 py-4"
            >
              Accueil
            </a>
            <a
              href="/categorie"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 py-4"
            >
              Produits
            </a>
            <a
              href="/muse"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-orange-500 py-4"
            >
              Espace Musée
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
