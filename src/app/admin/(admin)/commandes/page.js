'use client';
import { MoreVertical, CheckCircle, RefreshCw, XCircle, Search, PlusCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function OrdersPage() {
  // État des commandes
  const [orders, setOrders] = useState([
    { id: 1, client: 'Jean Dupont', date: '25/04/2023', amount: 6750, status: 'en cours', items: 3 },
    { id: 2, client: 'Marie Curie', date: '24/04/2023', amount: 12500, status: 'livré', items: 2 },
    { id: 3, client: 'Albert Einstein', date: '23/04/2023', amount: 8500, status: 'annulé', items: 1 },
    { id: 4, client: 'Ada Lovelace', date: '22/04/2023', amount: 15000, status: 'en cours', items: 4 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);

  // Filtrer les commandes
  const filteredOrders = orders.filter(order =>
    order.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Icônes de statut
  const getStatusIcon = (status) => {
    switch (status) {
      case 'livré': return <CheckCircle className="w-4 h-4 mr-1 text-green-500" />;
      case 'annulé': return <XCircle className="w-4 h-4 mr-1 text-red-500" />;
      default: return <RefreshCw className="w-4 h-4 mr-1 text-blue-500" />;
    }
  };

  // Changer le statut
  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
    setActiveMenu(null);
  };

  // Supprimer commande
  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
    setActiveMenu(null);
  };

  // Toggle menu
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* En-tête */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des Commandes</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher commandes..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Tableau principal */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Liste des Commandes ({orders.length})</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
            <PlusCircle size={18} className="mr-2" />
            Nouvelle commande
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Articles</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  {/* Colonnes données */}
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{order.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.items} article(s)</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">{order.amount.toLocaleString()} Fcfa</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center capitalize">
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                  </td>
                  
                  {/* Menu actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-right relative">
                    <button onClick={() => toggleMenu(order.id)} className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={18} />
                    </button>
                    
                    {activeMenu === order.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                        <div className="py-1">
                          <button onClick={() => updateStatus(order.id, 'en cours')} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                            <RefreshCw size={16} className="mr-2 text-blue-500" />
                            En cours
                          </button>
                          <button onClick={() => updateStatus(order.id, 'livré')} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                            <CheckCircle size={16} className="mr-2 text-green-500" />
                            Livré
                          </button>
                          <button onClick={() => updateStatus(order.id, 'annulé')} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                            <XCircle size={16} className="mr-2 text-red-500" />
                            Annuler
                          </button>
                          <button onClick={() => deleteOrder(order.id)} className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full border-t border-gray-200">
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

      {/* Statistiques */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-8">
        <h3 className="text-lg font-medium text-blue-800 mb-4">Résumé des commandes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
            <RefreshCw className="text-blue-500 mr-2" />
            <span>En cours: {orders.filter(o => o.status === 'en cours').length}</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
            <CheckCircle className="text-green-500 mr-2" />
            <span>Livrées: {orders.filter(o => o.status === 'livré').length}</span>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
            <XCircle className="text-red-500 mr-2" />
            <span>Annulées: {orders.filter(o => o.status === 'annulé').length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}