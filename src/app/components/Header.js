'use client';
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link"; // Assurez-vous d'importer Link de next

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simuler un panier avec un tableau d'articles, à remplacer par la gestion réelle de ton panier
  const cart = [1, 2]; // Exemple de tableau d'articles dans le panier (remplace avec ton état réel)

  return (
    <header className="w-full border-b border-gray-200 h-28 bg-white">
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
        <nav className="hidden md:flex justify-center space-x-10 py-4 text-base md:text-lg font-semibold text-gray-900 bg-white">
          <a 
            href="/" 
            className="relative px-4 py-2 transition-all duration-300 hover:text-shadow-slate-600 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            Accueil
          </a>
          <a 
            href="/categorie" 
            className="relative px-4 py-2 transition-all duration-300 hover:text-shadow-slate-600 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            Produits
          </a>
          <a 
            href="/muse" 
            className="relative px-4 py-2 transition-all duration-300 hover:text-shadow-slate-600 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
          >
            Espace Musée
          </a>
        </nav>

        {/* Icônes + menu burger */}
        <div className="flex items-center space-x-6 md:space-x-10 text-2xl md:text-3xl">
          {/* Lien vers le panier avec le nombre d'articles */}
          <Link href="/panier" className="panier-link text-gray-800 flex items-center">
            <FiShoppingCart size={28} />
            <span className="ml-2 text-sm text-gray-600">({cart.length})</span>
          </Link>

          {/* Icône utilisateur */}
          <FaUser className="text-gray-800" size={28} />

          {/* Menu hamburger visible uniquement sur mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <HiX className="text-gray-800" size={30} />
            ) : (
              <HiOutlineMenu className="text-gray-800" size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white text-lg font-semibold text-gray-900 border-t">
          <a href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Accueil</a>
          <a href="/categorie" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Produits</a>
          <a href="/muse" className="hover:underline" onClick={() => setIsMenuOpen(false)}>Espace Musée</a>
        </nav>
      )}
    </header>
  );
}
