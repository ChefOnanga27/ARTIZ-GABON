'use client';
import { PlusCircle, Edit, Trash2, Search, MoreVertical } from 'lucide-react';
import { useState } from 'react';

import CategorieForm from '../components/CategorieForm'; // Assure-toi que CategorieForm est correctement importé

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Peintures', products: 24, visible: true },
    { id: 2, name: 'Sculptures', products: 15, visible: true },
    { id: 3, name: 'Photographie', products: 8, visible: false },
    { id: 4, name: 'Art Digital', products: 12, visible: true },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // État pour gérer l'affichage de l'overlay

  const toggleVisibility = (id) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, visible: !cat.visible } : cat
    ));
    setActiveMenu(null);
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
    setActiveMenu(null);
  };

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleActionMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des Catégories</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Liste des Catégories</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsOverlayVisible(true)} // Ouvrir l'overlay au clic
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Créer une catégorie
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{category.products}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${category.visible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {category.visible ? 'Visible' : 'Masquée'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                    <button 
                      onClick={() => toggleActionMenu(category.id)}
                      className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      <MoreVertical size={18} />
                    </button>
                    
                    {activeMenu === category.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button 
                            onClick={() => toggleVisibility(category.id)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                          >
                            <Edit size={16} className="mr-2" />
                            {category.visible ? 'Masquer' : 'Afficher'}
                          </button>
                          <button 
                            onClick={() => deleteCategory(category.id)}
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

    
      {/* {isOverlayVisible && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-20"> 
          <CategorieForm />/
        </div>
      )} */}
      {isOverlayVisible && (
  <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-20">
    <CategorieForm closeForm={() => setIsOverlayVisible(false)} />
  </div>
)}

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Conseils</h3>
        <p className="text-blue-700">
          • Organisez vos catégories de manière logique pour vos clients<br />
          • Masquez les catégories vides ou temporairement indisponibles<br />
          • Utilisez des noms courts et descriptifs
        </p>
      </div>
    </div>
  );
}
