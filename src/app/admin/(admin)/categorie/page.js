// 'use client';
// import { PlusCircle, Edit, Trash2, Search, MoreVertical } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import CategorieForm from '../components/CategorieForm';

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isOverlayVisible, setIsOverlayVisible] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   const fetchCategories = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch('https://artiz-1ly2.onrender.com/api/categorie');
//       const data = await res.json();
//       if (!res.ok) throw new Error(data?.message || 'Erreur de chargement');
//       setCategories(data);
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'Une erreur est survenue');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const toggleVisibility = (id) => {
//     setCategories(prev =>
//       prev.map(cat =>
//         cat._id === id ? { ...cat, visible: !cat.visible } : cat
//       )
//     );
//     setActiveMenu(null);
//   };

//   const deleteCategory = (id) => {
//     setCategories(prev => prev.filter(cat => cat._id !== id));
//     setActiveMenu(null);
//   };

//   const toggleActionMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const filteredCategories = categories.filter(cat =>
//     cat.nom.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">Gestion des Catégories</h1>
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Rechercher..."
//             className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
//         <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Liste des Catégories</h2>
//           <button
//             onClick={() => setIsOverlayVisible(true)}
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Créer une catégorie
//           </button>
//         </div>

//         {loading ? (
//           <div className="p-4 text-center text-gray-500">Chargement des catégories...</div>
//         ) : error ? (
//           <div className="p-4 text-center text-red-500">{error}</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produits</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
//                   <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredCategories.map((category) => (
//                   <tr key={category._id} className="hover:bg-gray-50 transition-colors">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">{category.nom}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-500">{category.products || 0}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${category.visible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
//                         {category.visible ? 'Visible' : 'Masquée'}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
//                       <button 
//                         onClick={() => toggleActionMenu(category._id)}
//                         className="text-gray-400 hover:text-gray-600 focus:outline-none"
//                       >
//                         <MoreVertical size={18} />
//                       </button>
//                       {activeMenu === category._id && (
//                         <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
//                           <div className="py-1">
//                             <button 
//                               onClick={() => toggleVisibility(category._id)}
//                               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                             >
//                               <Edit size={16} className="mr-2" />
//                               {category.visible ? 'Masquer' : 'Afficher'}
//                             </button>
//                             <button 
//                               onClick={() => deleteCategory(category._id)}
//                               className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
//                             >
//                               <Trash2 size={16} className="mr-2" />
//                               Supprimer
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {isOverlayVisible && (
//         <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-20">
//           <CategorieForm 
//             closeForm={() => setIsOverlayVisible(false)} 
//             onSuccess={fetchCategories} 
//           />
//         </div>
//       )}

//       <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//         <h3 className="text-lg font-medium text-blue-800 mb-2">Conseils</h3>
//         <p className="text-blue-700">
//           • Organisez vos catégories de manière logique pour vos clients<br />
//           • Masquez les catégories vides ou temporairement indisponibles<br />
//           • Utilisez des noms courts et descriptifs
//         </p>
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit, Trash2, MoreVertical } from 'lucide-react';
// import CategorieForm from './CategorieForm';
import CategorieForm from '../components/CategorieForm';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://artiz-1ly2.onrender.com';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error,   setError]     = useState('');

  /* ─────────── Récupération des catégories ─────────── */
  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res  = await fetch(`${API_BASE}/api/categorie`);
      const data = await res.json();
      console.log('Réponse API :', data);          // ← pour debug

      // Accepte 2 formats possibles
      const cats = Array.isArray(data) ? data : data.categories || [];
      setCategories(cats);
      setError('');
    } catch (err) {
      console.error('Erreur de chargement :', err);
      setError("Impossible de récupérer les catégories");
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  /* ─────────── Filtres de recherche ─────────── */
  const filteredCategories = categories.filter(cat =>
    typeof cat.nom === 'string' &&
    cat.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  /* ─────────── Menu d’action ─────────── */
  const toggleActionMenu = (id) => setActiveMenu(prev => (prev === id ? null : id));

  const toggleVisibility = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/api/categorie/${id}/toggle-visibility`, { method: 'PATCH' });
      const updated = await res.json();
      setCategories(prev => prev.map(cat => cat._id === id ? { ...cat, visible: updated.visible } : cat));
    } catch (err) { console.error(err); }
    setActiveMenu(null);
  };

  const deleteCategory = async (id) => {
    if (!confirm('Supprimer cette catégorie ?')) return;
    try {
      await fetch(`${API_BASE}/api/categorie/${id}`, { method: 'DELETE' });
      setCategories(prev => prev.filter(cat => cat._id !== id));
    } catch (err) { console.error(err); }
  };

  return (
    <div className="p-6">
      {/* ---------- En-tête ---------- */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Catégories</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une catégorie
        </button>
      </div>

      {/* ---------- Barre de recherche ---------- */}
      <input
        type="text"
        placeholder="Rechercher une catégorie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-sm px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      {/* ---------- Tableau ---------- */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        {loading ? (
          <p className="p-6 text-center text-gray-500">Chargement…</p>
        ) : error ? (
          <p className="p-6 text-center text-red-600">{error}</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Produits</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
                <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCategories.length ? (
                filteredCategories.map((cat) => (
                  <tr key={cat._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{cat.nom}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{cat.products ?? 0}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs font-semibold rounded-full
                        ${cat.visible ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {cat.visible ? 'Visible' : 'Masquée'}
                      </span>
                    </td>
                    <td className="relative px-6 py-4 text-right text-sm">
                      <button onClick={() => toggleActionMenu(cat._id)} className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={18} />
                      </button>

                      {activeMenu === cat._id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                          <button
                            onClick={() => toggleVisibility(cat._id)}
                            className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Edit size={16} className="mr-2" />
                            {cat.visible ? 'Masquer' : 'Afficher'}
                          </button>
                          <button
                            onClick={() => deleteCategory(cat._id)}
                            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            <Trash2 size={16} className="mr-2" />
                            Supprimer
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-6 text-center text-gray-500">
                    Aucune catégorie trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* ---------- Formulaire ---------- */}
      {showForm && (
        <CategorieForm
          closeForm={() => setShowForm(false)}
          onSuccess={fetchCategories}  /* rafraîchir après ajout */
        />
      )}
    </div>
  );
}
