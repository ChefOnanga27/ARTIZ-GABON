'use client';

import { useState, useRef, useEffect } from "react";
import { X } from 'lucide-react';

export default function CategorieForm({ closeForm }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const modalRef = useRef(null);

  // Gérer la fermeture avec Escape
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeForm();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeForm]);

  // Empêcher le scroll du body quand le modal est ouvert
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory.trim() === "") return;
    console.log("Nouvelle catégorie créée :", selectedCategory);
    setSelectedCategory("");
    closeForm(); // Fermer après soumission
  };

  return (
    <div 
      ref={modalRef}
      onClick={(e) => e.target === modalRef.current && closeForm()}
      className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50"
    >
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative animate-fade-in"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Créer une catégorie</h2>
          <button
            type="button"
            onClick={closeForm}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            required
          >
            <option value="">Sélectionner une catégorie</option>
            <option value="tech">Technologie</option>
            <option value="science">Science</option>
            <option value="art">Art</option>
            <option value="sports">Sports</option>
            <option value="literature">Littérature</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Créer la catégorie
          </button>
        </div>
      </form>
    </div>
  );
}