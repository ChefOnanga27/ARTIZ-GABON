'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Panier() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fonction pour récupérer le panier depuis le backend
  const fetchPanier = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Veuillez vous connecter pour voir votre panier.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://artiz-1ly2.onrender.com/api/panier', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Échec du chargement du panier.');
      }

      const data = await res.json();
      setCart(data.articles || []);
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;

    const token = localStorage.getItem('token');
    try {
      await fetch(`https://artiz-1ly2.onrender.com/api/panier`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity }),
      });
      fetchPanier(); // Refresh
    } catch (err) {
      console.error('Erreur de mise à jour quantité:', err);
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      await fetch(`https://artiz-1ly2.onrender.com/api/panier`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId, quantity: 0 }),
      });
      fetchPanier();
    } catch (err) {
      console.error('Erreur de suppression:', err);
    }
  };

  useEffect(() => {
    fetchPanier();
  }, []);

  const total = cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mon Panier</h1>

      {loading ? (
        <p>Chargement du panier...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Aucun produit ajouté au panier.</p>
          <Link href="/produits" className="text-blue-600 underline">
            Découvrir les produits
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Liste des articles */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center border p-4 rounded-md shadow-sm"
              >
                <div className="relative w-24 h-24 mr-4">
                  <Image
                    src={
                      item.image?.startsWith('http')
                        ? item.image
                        : '/placeholder.jpg'
                    }
                    alt={item.nom}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.nom}</h3>
                  <p className="text-sm text-gray-500">{item.prix} FCFA</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="ml-4 text-red-500 text-xl"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Récapitulatif */}
          <div className="bg-gray-100 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Récapitulatif</h2>
            <div className="flex justify-between mb-2">
              <span>Articles ({cart.length})</span>
              <span>{total} FCFA</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Livraison</span>
              <span>À calculer</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>{total} FCFA</span>
            </div>
            <Link
              href="/commande"
              className="block bg-blue-600 text-white text-center py-2 rounded mt-4"
            >
              Valider la commande
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
