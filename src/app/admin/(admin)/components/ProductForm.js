'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Upload } from 'lucide-react';

export default function ProductForm({ closeForm, productToEdit = null, onProductSaved }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    categorie: '',
    prix: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  const priceInputRef = useRef(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('https://artiz-1ly2.onrender.com/api/categorie');
        if (!res.ok) throw new Error('Erreur lors du chargement des catégories');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError('Impossible de charger les catégories');
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        nom: productToEdit.nom || '',
        description: productToEdit.description || '',
        categorie: productToEdit.categorie || '',
        prix: String(productToEdit.prix || ''),
        image: null,
      });
      setPreviewImage(productToEdit.image || null);
    }
  }, [productToEdit]);

  const formatPrice = (value) => {
    if (!value) return '';
    const numeric = value.replace(/\D/g, '');
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const parsePrice = (value) => value.replace(/\s/g, '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'prix' ? parsePrice(value) : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData(prev => ({ ...prev, image: file }));
    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const prixNumber = parseInt(formData.prix, 10);
    if (isNaN(prixNumber) || prixNumber <= 0) {
      setError('Veuillez entrer un prix valide supérieur à 0');
      setLoading(false);
      return;
    }

    const form = new FormData();
    form.append('nom', formData.nom);
    form.append('description', formData.description);
    form.append('categorie', formData.categorie);
    form.append('prix', formData.prix);
    if (formData.image) form.append('image', formData.image);

    try {
      const method = productToEdit ? 'PUT' : 'POST';
      const url = productToEdit
        ? `https://artiz-1ly2.onrender.com/api/admin/articles/${productToEdit.id}`
        : `https://artiz-1ly2.onrender.com/api/admin/articles`;

      const res = await fetch(url, { method, body: form });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || 'Erreur lors de l’enregistrement');

      alert(productToEdit ? 'Produit modifié avec succès !' : 'Produit ajouté avec succès !');

      // ======= CORRECTION IMPORTANTE =======
      if (onProductSaved) {
        await onProductSaved();  // On recharge la liste complète des produits
      }
      closeForm();
      // ======================================

    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceFocus = () => {
    const input = priceInputRef.current;
    if (input) input.selectionStart = input.selectionEnd = input.value.length;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeForm}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {productToEdit ? 'Modifier le produit' : 'Ajouter un produit'}
            </h2>
            <button type="button" onClick={closeForm} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          {/* Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image du produit
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400"
              onClick={() => fileInputRef.current.click()}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="mx-auto h-40 object-contain mb-2 rounded"
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <Upload className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500">Cliquez pour sélectionner une image</p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                required={!productToEdit}
              />
            </div>
          </div>

          {/* Nom */}
          <div className="mb-4">
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
              Nom du produit
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Catégorie */}
          <div className="mb-4">
            <label htmlFor="categorie" className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie
            </label>
            <select
              id="categorie"
              name="categorie"
              value={formData.categorie}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">-- Sélectionnez une catégorie --</option>
              {categories.length > 0 ? (
                categories.map((cat) =>
                  typeof cat === 'string' ? (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ) : (
                    <option key={cat.id || cat._id || cat.nom} value={cat.nom}>
                      {cat.nom}
                    </option>
                  )
                )
              ) : (
                <option disabled>Chargement...</option>
              )}
            </select>
          </div>

          {/* Prix */}
          <div className="mb-4">
            <label htmlFor="prix" className="block text-sm font-medium text-gray-700 mb-1">
              Prix (FCFA)
            </label>
            <div className="relative">
              <input
                type="text"
                id="prix"
                name="prix"
                ref={priceInputRef}
                value={formatPrice(formData.prix)}
                onChange={handleChange}
                onFocus={handlePriceFocus}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 pr-10"
                inputMode="numeric"
                required
              />
              <span className="absolute right-3 top-2 text-gray-500">FCFA</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Entrez un prix entier, sans points ni virgules.</p>
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            {loading ? (productToEdit ? 'Modification...' : 'Création...') : productToEdit ? 'Modifier' : 'Créer'}
          </button>
        </div>
      </form>
    </div>
  );
}
