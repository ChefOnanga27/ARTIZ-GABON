'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function DashboardPage() {
  const [productCount, setProductCount] = useState(null);


  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://artiz-1ly2.onrender.com/api/admin/articles');
        const data = await res.json();
        setProductCount(data.length); // si la réponse est un tableau d'articles
      } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
      }
    }

    fetchProducts();
  }, []);

  const commandes = [
    { nom: 'Jean Dupont', montant: '120 Fcfa', statut: 'En cours', date: '25/04/2025' },
    { nom: 'Marie Curie', montant: '300 Fcfa', statut: 'Livré', date: '24/04/2025' },
    { nom: 'Albert Einstein', montant: '80 Fcfa', statut: 'Annulé', date: '23/04/2025' },
    { nom: 'Ada Lovelace', montant: '150 Fcfa', statut: 'Livré', date: '22/04/2025' },
  ];

  const getStatusIcon = (statut) => {
    switch (statut) {
      case 'Livré':
        return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 inline mr-1" />;
      case 'Annulé':
        return <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 inline mr-1" />;
      default:
        return <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 inline mr-1" />;
    }
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">
      {/* Statistiques */}
      <div className="flex w-20 gap-4 sm:gap-6">
        <StatCard title="Produits" value={productCount !== null ? productCount.toString() : '...'} icon="📦" />
        <StatCard title="Commandes" value="45" icon="🛒" />
        <StatCard title="Utilisateurs" value="15" icon="👤" />
      </div>

      {/* Commandes */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Dernières Commandes
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-3 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-3 py-2 sm:px-6 sm:py-3 text-center text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commandes.map((commande, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-3 sm:px-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    {commande.nom}
                  </td>
                  <td className="px-3 py-3 sm:px-6 whitespace-nowrap text-sm text-gray-500">
                    {commande.montant}
                  </td>
                  <td className="px-3 py-3 sm:px-6 whitespace-nowrap text-sm text-gray-500">
                    <span className="flex items-center">
                      {getStatusIcon(commande.statut)}
                      <span className="hidden sm:inline">{commande.statut}</span>
                    </span>
                  </td>
                  <td className="hidden sm:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500">
                    {commande.date}
                  </td>
                  <td className="px-3 py-3 sm:px-6 whitespace-nowrap text-center text-sm">
                    <button className="bg-blue-500 text-white py-1 px-2 sm:px-3 rounded-full text-xs hover:bg-blue-600 transition">
                      Voir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
