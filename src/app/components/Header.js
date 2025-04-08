"use client";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      {/* Première ligne - Logo et icônes */}
      <div className="flex flex-col items-center px-4 py-3 md:flex-row md:justify-between md:px-6 md:py-4">
        {/* Logo centré en haut sur mobile */}
        <div className="mb-3 md:mb-0">
          <Image
            src="/LOGO .png"
            alt="Logo"
            width={80}
            height={70}
            className="object-cover drop-shadow-xl mx-auto md:mx-0"
            priority
          />
        </div>

        {/* Barre de recherche - Centrée sur mobile */}
        <div className="w-full md:w-1/3 mb-3 md:mb-0">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={handleSearchChange}
              placeholder="Rechercher..."
              className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none"
            />
            <FaSearch className="absolute right-4 top-3 text-gray-500" />
          </div>
        </div>

        {/* Icônes - Centrées sur mobile */}
        <div className="flex justify-center space-x-6 text-lg">
          <div className="relative">
            <FiShoppingCart className="text-gray-800" size={18} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </div>
          <FaHeart className="text-gray-800" size={18} />
          <FaUser className="text-gray-800" size={18} />
        </div>
      </div>

      {/* Navigation - Centrée et responsive */}
      <nav className="flex justify-center space-x-4 md:space-x-8 py-3 px-4 text-sm md:text-base font-semibold text-gray-900 bg-white overflow-x-auto">
        <a href="/" className="whitespace-nowrap hover:underline">Accueil</a>
        <a href="/categorie" className="whitespace-nowrap hover:underline">Catégories</a>
        <a href="/muse" className="whitespace-nowrap hover:underline">Espace Musée</a>
      </nav>
    </header>
  );
}