'use client';

import { useState } from 'react';
import Image from "next/image";
import { MoreVertical, Edit, Trash2 } from "lucide-react";
import ProductForm from '../components/ProductForm';  // Assurez-vous d'importer le formulaire

// Données de produits initiales
const products = [
  {
    id: 1,
    src: "/images/product1.jpeg",
    name: "Produit 1",
    description: "Ceci est une description courte du produit 1.",
    category: "Catégorie A",
    price: 2999,
  },
  {
    id: 2,
    src: "/images/product2.jpeg",
    name: "Produit 2",
    description: "Ceci est une description courte du produit 2.",
    category: "Catégorie B",
    price: 4999,
  },
  {
    id: 3,
    src: "/images/product3.jpeg",
    name: "Produit 3",
    description: "Ceci est une description courte du produit 3.",
    category: "Catégorie C",
    price: 1999,
  },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [productsList, setProductsList] = useState(products);
  const [showProductForm, setShowProductForm] = useState(false);  // Gestion de l'affichage du formulaire

  // Liste des catégories
  const categories = ["Catégorie A", "Catégorie B", "Catégorie C"];

  // Gère l'ouverture/fermeture du menu d'options du produit
  const toggleMenu = (productId) => {
    setActiveMenu(activeMenu === productId ? null : productId);
  };

  // Gère la suppression d'un produit
  const handleDelete = (productId) => {
    setProductsList(productsList.filter(product => product.id !== productId));
    setActiveMenu(null);
  };

  // Gère l'ajout d'un produit (après soumission du formulaire)
  const handleAddProduct = (newProduct) => {
    setProductsList([...productsList, newProduct]);
    setShowProductForm(false); // Ferme le formulaire après l'ajout
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gestion des Produits</h1>
      
      {/* Ligne avec titre à gauche et bouton à droite */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Liste des produits</h2>
        <button
          onClick={() => setShowProductForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Ajouter un produit
        </button>
      </div>

      {/* Formulaire d'ajout de produit en overlay */}
      {showProductForm && (
        <ProductForm
          closeForm={() => setShowProductForm(false)}  // Fonction pour fermer le formulaire
          categories={categories}
          onAddProduct={handleAddProduct}  // Fonction pour ajouter le produit
        />
      )}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productsList.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="relative h-12 w-12 rounded-md overflow-hidden">
                    <Image
                      src={product.src}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 max-w-xs">
                  <div className="text-sm text-gray-500 truncate">{product.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {product.price.toFixed(2)}FCFA
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                  <button 
                    onClick={() => toggleMenu(product.id)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <MoreVertical size={18} />
                  </button>
                  

                  {activeMenu === product.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <div className="py-1">
                        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
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
    </div>
  );
}