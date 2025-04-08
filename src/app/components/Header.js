"use client";
import { FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function Header({ setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value); // Met à jour le terme de recherche
  };

  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/LOGO .png"
            alt="Femme Gabonaise"
            width={80}
            height={70}
            className="object-cover drop-shadow-xl"
          />
        </div>

        <div className="relative w-1/3">
          <input
            type="text"
            value={inputValue}
            onChange={handleSearchChange}
            placeholder="Je recherche une création, une boutique, une fourniture..."
            className="w-full px-4 py-2 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>

        <div className="flex items-center space-x-6 text-lg">
          <div className="relative">
            <FiShoppingCart className="text-gray-800" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-2">2</span>
          </div>
          <FaHeart className="text-gray-800" />
          <FaUser className="text-gray-800" />
        </div>
      </div>

      <nav className="flex justify-center space-x-8 py-3 pr-15 text-lg font-semibold text-gray-900">
        <a href="/" className="hover:underline">Accueil</a>
        <a href="/categorie" className="hover:underline">Catégories</a>
        <a href="/muse" className="hover:underline">Espace Musée</a>
      </nav>
    </header>
  );
}
