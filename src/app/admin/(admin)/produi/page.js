'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import ProductForm from '../components/ProductForm';

const API_URL = 'https://artiz-1ly2.onrender.com/api/admin/articles';

export default function Dashboard() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const categories = ['Catégorie A', 'Catégorie B', 'Catégorie C'];

  const fetchProducts = async () => {
  setLoading(true);
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log('Réponse API articles:', data);
    setProductsList(data.data || data);
  } catch (error) {
    console.error('Erreur lors du chargement des produits:', error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleMenu = (productId) => {
    setActiveMenu(activeMenu === productId ? null : productId);
  };

  const handleDelete = async (productId) => {
    try {
      await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE',
      });
      await fetchProducts();
      setActiveMenu(null);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
    }
  };

  const handleEdit = (product) => {
    setProductToEdit(product);
    setShowProductForm(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gestion des Produits</h1>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Liste des produits</h2>
        <button
          onClick={() => {
            setProductToEdit(null);
            setShowProductForm(true);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Ajouter un produit
        </button>
      </div>

      {showProductForm && (
        <ProductForm
          closeForm={() => {
            setShowProductForm(false);
            setProductToEdit(null);
          }}
          categories={categories}
          productToEdit={productToEdit}
          onProductSaved={fetchProducts}
        />
      )}

      {loading ? (
        <p className="text-center text-gray-500 mt-10">Chargement des produits...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {productsList.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="relative h-12 w-12 rounded-md overflow-hidden">
                      <Image
                        src={
                          product.image && product.image.startsWith('http')
                            ? product.image
                            : '/images/default.jpg'
                        }
                        alt={product.nom || 'Produit'}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{product.nom}</div>
                  </td>

                  <td className="px-6 py-4 max-w-xs">
                    <div className="text-sm text-gray-500 truncate">{product.description}</div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {product.categorie}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {(Number(product.prix) || 0).toFixed(2)} FCFA
                    </div>
                  </td>

                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => toggleMenu(product.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical size={18} />
                    </button>

                    {activeMenu === product.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button
                            onClick={() => handleEdit(product)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Edit size={16} className="mr-2" />
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                          >
                            <Trash2 size={16} className="mr-2" />
                            Supprimer
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
