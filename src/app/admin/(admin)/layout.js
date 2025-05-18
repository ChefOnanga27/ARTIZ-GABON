"use client";

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    // 👉 Si c'est la page login, afficher seulement le contenu sans Sidebar ni Topbar
    return (
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    );
  }

  // 👉 Sinon, afficher le layout admin normal
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
