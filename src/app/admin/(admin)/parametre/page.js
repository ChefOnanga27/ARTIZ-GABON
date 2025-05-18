'use client';

import { useState } from 'react';

export default function AdminSettings() {
  // États pour gérer les données des utilisateurs et des catégories
  const [userList, setUserList] = useState([
    { id: 1, name: 'Utilisateur 1', email: 'utilisateur1@example.com' },
    { id: 2, name: 'Utilisateur 2', email: 'utilisateur2@example.com' },
  ]);

  const [categoryList, setCategoryList] = useState(["Catégorie A", "Catégorie B", "Catégorie C"]);
  
  // États pour la gestion des paramètres généraux
  const [siteName, setSiteName] = useState('Mon Site');
  const [siteDescription, setSiteDescription] = useState('Description de mon site');

  // Ajouter un utilisateur
  const handleAddUser = (name, email) => {
    const newUser = { id: Date.now(), name, email };
    setUserList([...userList, newUser]);
  };

  // Ajouter une catégorie
  const handleAddCategory = (category) => {
    setCategoryList([...categoryList, category]);
  };

  // Modifier le nom du site
  const handleSiteNameChange = (e) => {
    setSiteName(e.target.value);
  };

  // Modifier la description du site
  const handleSiteDescriptionChange = (e) => {
    setSiteDescription(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Paramètres de l'Administrateur</h1>

      {/* Section: Paramètres du site */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Paramètres du Site</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nom du Site</label>
          <input
            type="text"
            value={siteName}
            onChange={handleSiteNameChange}
            className="mt-1 px-4 py-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description du Site</label>
          <textarea
            value={siteDescription}
            onChange={handleSiteDescriptionChange}
            className="mt-1 px-4 py-2 w-full border rounded-md"
          />
        </div>
      </div>

      {/* Section: Gestion des Utilisateurs */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gestion des Utilisateurs</h2>
        <ul className="space-y-4">
          {userList.map((user) => (
            <li key={user.id} className="flex justify-between items-center">
              <span>{user.name} ({user.email})</span>
              <button className="text-red-600 hover:text-red-800">Supprimer</button>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ajouter un Utilisateur</h3>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Nom de l'utilisateur"
              className="px-4 py-2 border rounded-md"
              id="userName"
            />
            <input
              type="email"
              placeholder="Email de l'utilisateur"
              className="px-4 py-2 border rounded-md"
              id="userEmail"
            />
            <button
              onClick={() => {
                const name = document.getElementById('userName').value;
                const email = document.getElementById('userEmail').value;
                handleAddUser(name, email);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>

      {/* Section: Gestion des Catégories */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Gestion des Catégories</h2>
        <ul className="space-y-4">
          {categoryList.map((category, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{category}</span>
              <button className="text-red-600 hover:text-red-800">Supprimer</button>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Ajouter une Catégorie</h3>
          <input
            type="text"
            placeholder="Nom de la catégorie"
            className="px-4 py-2 border rounded-md"
            id="categoryName"
          />
          <button
            onClick={() => {
              const category = document.getElementById('categoryName').value;
              handleAddCategory(category);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
