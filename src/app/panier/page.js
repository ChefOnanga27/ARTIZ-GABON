// src/app/panier/page.js
'use client';

import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function Panier() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calcul du total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container">
      <h1>Mon Panier</h1>
      
      {cart.length === 0 ? (
        <div className="empty">
          <p>Votre panier est vide</p>
          <Link href="/produits" className="link">
            Voir nos produits
          </Link>
        </div>
      ) : (
        <div className="grid">
          {/* Liste des articles */}
          <div className="items">
            {cart.map(item => (
              <div key={item.id} className="item">
                <img src={item.image} alt={item.name} className="image" />
                
                <div className="details">
                  <h3>{item.name}</h3>
                  <p>{item.price} FCFA</p>
                  
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          
          {/* Récapitulatif */}
          <div className="summary">
            <h2>Récapitulatif</h2>
            
            <div className="row">
              <span>Articles ({cart.length})</span>
              <span>{total} FCFA</span>
            </div>
            
            <div className="row">
              <span>Livraison</span>
              <span>À calculer</span>
            </div>
            
            <div className="total">
              <span>Total</span>
              <span>{total} FCFA</span>
            </div>
            
            <Link href="/commande" className="button">
              Valider la commande
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
