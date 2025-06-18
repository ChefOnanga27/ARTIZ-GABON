"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Menu } from "lucide-react"; // Icône de menu (nécessite lucide-react ou remplace par svg)

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isLoginPage) {
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar mobile */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white shadow-lg">
          <Sidebar />
        </div>
        {/* Overlay */}
        <div
          className="flex-1 bg-black bg-opacity-25"
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      {/* Sidebar desktop */}
      <div className="hidden md:block md:w-64 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-600"
            aria-label="Open sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold text-lg">Tableau de bord</span>
        </div>

        <Topbar />

        <main className="flex-1 overflow-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
