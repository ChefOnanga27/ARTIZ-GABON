'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CategorieForm({ closeForm }) {
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef(null);

  // Fermer le formulaire avec la touche ESC
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') closeForm();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeForm]);

  // Empêcher le scroll de fond pendant l'affichage du modal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === '') return;

    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setError("Token d'authentification manquant. Veuillez vous connecter.");
        setLoading(false);
        return;
      }

      const response = await fetch('https://artiz-1ly2.onrender.com/api/categorie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Ajout du token ici
        },
        body: JSON.stringify({ nom: categoryName }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || data?.message || 'Erreur lors de la création de la catégorie');
      }

      console.log('Catégorie créée :', data);
      alert('Catégorie créée avec succès !');
      setCategoryName('');
      closeForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={(e) => e.target === modalRef.current && closeForm()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
    >
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md p-8 bg-white rounded-xl shadow-lg animate-fade-in"
      >
        {/* En-tête */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Créer une catégorie</h2>
          <button
            type="button"
            onClick={closeForm}
            aria-label="Fermer"
            className="text-gray-500 transition-colors hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Champ de formulaire + erreurs */}
        <div className="flex flex-col space-y-6">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Nom de la catégorie"
            required
            className="px-4 py-3 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? 'Création en cours…' : 'Créer la catégorie'}
          </button>
        </div>
      </form>
    </div>
  );
}
