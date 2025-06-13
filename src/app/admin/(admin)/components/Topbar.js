'use client';

import { useRouter } from 'next/navigation';

export default function Topbar() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Supprimer le token d’authentification (si utilisé)
    localStorage.removeItem('token'); // adapte selon le nom du token si besoin

    // 2. Rediriger vers la page de login admin
    router.push('/admin/login');
  };

  return (
    <header className="h-16 bg-white flex items-center justify-between px-8 shadow-md">
      <h1 className="text-xl font-semibold">Dashboard Administrateur</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Déconnexion
      </button>
    </header>
  );
}
