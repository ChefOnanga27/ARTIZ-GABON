'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [formData, setFormData] = useState({
    clientName: '',
    whatsapp: '+241',
    phone: '',
    service: 'Delivery',
    coupon: '',
    items: [{
      name: '',
      quantity: 1,
      price: 0
    }]
  });

  const serviceOptions = [
    { value: 'Delivery', label: 'Livraison (+2 000 FCFA)' },
    { value: 'Self Pick-up', label: 'Retrait sur place' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...formData.items];
    newItems[index] = { ...newItems[index], [name]: name === 'quantity' || name === 'price' ? Number(value) : value };
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { name: '', quantity: 1, price: 0 }]
    }));
  };

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, items: newItems }));
  };

  const calculateTotal = () => {
    const itemsTotal = formData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = formData.service === 'Delivery' ? 2000 : 0;
    return itemsTotal + deliveryFee;
  };

  const sendWhatsApp = () => {
    const deliveryFee = formData.service === 'Delivery' ? 2000 : 0;
    const total = calculateTotal();
    
    let message = `*Nouvelle Commande*\n\n`;
    message += `*Client:* ${formData.clientName}\n`;
    message += `*WhatsApp:* ${formData.whatsapp}\n`;
    message += `*Téléphone:* ${formData.phone}\n\n`;
    message += `*Service:* ${formData.service}${deliveryFee > 0 ? ` (+${deliveryFee} FCFA)` : ''}\n\n`;
    message += `*Articles:*\n`;
    
    formData.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity} x ${item.price} FCFA = ${item.quantity * item.price} FCFA\n`;
    });
    
    message += `\n*Total:* ${total} FCFA\n`;
    
    if (formData.coupon) {
      message += `\n*Code de réduction:* ${formData.coupon}`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${formData.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Formulaire de Commande</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Client *</label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Numéro WhatsApp *</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Service *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Articles *</label>
          {formData.items.map((item, index) => (
            <div key={index} className="mt-2 p-2 border border-gray-200 rounded-md">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <label className="text-xs text-gray-500">Nom</label>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleItemChange(index, e)}
                    className="w-full p-1 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Quantité</label>
                  <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, e)}
                    min="1"
                    className="w-full p-1 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">Prix (FCFA)</label>
                  <input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={(e) => handleItemChange(index, e)}
                    min="0"
                    className="w-full p-1 border border-gray-300 rounded"
                    required
                  />
                </div>
                {formData.items.length > 1 && (
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="text-red-500 text-xs"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-500">
                Total: {item.quantity * item.price} FCFA
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="mt-2 text-sm text-blue-500"
          >
            + Ajouter un article
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Code de réduction</label>
          <input
            type="text"
            name="coupon"
            value={formData.coupon}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-medium">
            <span>Total:</span>
            <span>{calculateTotal()} FCFA</span>
          </div>
          {formData.service === 'Delivery' && (
            <div className="text-sm text-gray-500">
              (Inclut 2 000 FCFA de frais de livraison)
            </div>
          )}
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Passer la commande
        </button>
      </form>
    </div>
  );
}