// app/(dashboard)/categories/page.jsx
// ----------------------------------
"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import CategorieForm from "../admin/(admin)/components/CategorieForm";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://artiz-1ly2.onrender.com";

export default function CategoriesPage() {
  /* ----------------------------- state ----------------------------- */
  const [categories, setCategories] = useState([]);
  const [loading,     setLoading]   = useState(true);
  const [error,       setError]     = useState("");
  const [search,      setSearch]    = useState("");
  const [dropdownIdx, setDropdownIdx] = useState(null);   // index du dropdown ouvert
  const [showForm,    setShowForm]  = useState(false);

  const tableRef = useRef(null);

  /* ------------------------- fetch initial ------------------------ */
  const load = async () => {
    try {
      setLoading(true);
      const r = await fetch(`${API_BASE}/api/categorie`);
      if (!r.ok) throw new Error();
      const d = await r.json();
      setCategories(Array.isArray(d) ? d : d.categories ?? []);
    } catch { setError("Impossible de récupérer les catégories"); }
    finally { setLoading(false); }
  };
  useEffect(() => { load(); }, []);

  /* ---- fermer dropdown au clic extérieur / scroll / resize ------- */
  useEffect(() => {
    const close = (e) => {
      if (tableRef.current && !tableRef.current.contains(e.target)) setDropdownIdx(null);
    };
    document.addEventListener("mousedown", close);
    window.addEventListener("scroll", () => setDropdownIdx(null), { passive: true });
    window.addEventListener("resize", () => setDropdownIdx(null));
    return () => {
      document.removeEventListener("mousedown", close);
      window.removeEventListener("scroll", () => setDropdownIdx(null));
      window.removeEventListener("resize", () => setDropdownIdx(null));
    };
  }, []);

  /* ----------------------- helpers utils -------------------------- */
  const filtered = categories.filter(c => c.nom?.toLowerCase().includes(search.toLowerCase()));

  const toggleVisibility = async (cat) => {
    const id = cat._id || cat.id;
    if (!id) return;
    try {
      const r = await fetch(`${API_BASE}/api/categorie/${id}/toggle-visibility`, { method: "PATCH" });
      const u = await r.json();
      setCategories(p => p.map(c => (c === cat ? { ...c, visible: u.visible } : c)));
    } catch { /* ignore */ }
  };

  const deleteCat = async (cat) => {
    if (!confirm(`Supprimer « ${cat.nom} » ?`)) return;
    const id = cat._id || cat.id;
    if (id) try { await fetch(`${API_BASE}/api/categorie/${id}`, { method: "DELETE" }); } catch {}
    // retire localement par object reference
    setCategories(p => p.filter(c => c !== cat));
  };

  /* --------------------------- render ----------------------------- */
  return (
    <div className="p-6">
      {/* header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Catégories</h1>
        <button onClick={() => setShowForm(true)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus size={18}/> Ajouter
        </button>
      </div>

      {/* search */}
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher…" className="w-full max-w-sm px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500" />

      {/* table */}
      <div className="bg-white shadow rounded-lg overflow-x-auto" ref={tableRef}>
        {loading ? (
          <p className="p-6 text-center text-gray-500">Chargement…</p>
        ) : error ? (
          <p className="p-6 text-center text-red-600">{error}</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 relative">
            <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
              <tr><th className="px-6 py-3 text-left">Nom</th><th className="px-6 py-3 text-left">Produits</th><th className="px-6 py-3 text-left">Statut</th><th className="px-6 py-3 text-right">Actions</th></tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.length === 0 ? (
                <tr><td colSpan={4} className="py-8 text-center text-gray-500">Aucune catégorie</td></tr>
              ) : filtered.map((cat, idx) => (
                <tr key={idx} className="relative hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{cat.nom}</td>
                  <td className="px-6 py-4 text-gray-500">{cat.products ?? 0}</td>
                  <td className="px-6 py-4"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${cat.visible ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>{cat.visible ? "Visible" : "Masquée"}</span></td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => setDropdownIdx(dropdownIdx === idx ? null : idx)} className="text-gray-400 hover:text-gray-600"><MoreVertical size={18}/></button>
                    {dropdownIdx === idx && (
                      <div className="absolute right-4 mt-2 w-48 bg-white shadow-lg border rounded-md z-20">
                        <button onClick={() => { toggleVisibility(cat); setDropdownIdx(null); }} className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100"><Edit size={16} className="mr-2"/>{cat.visible ? "Masquer" : "Afficher"}</button>
                        <button onClick={() => { deleteCat(cat); setDropdownIdx(null); }} className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-t"><Trash2 size={16} className="mr-2"/>Supprimer</button>
                      </div>) }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showForm && <CategorieForm closeForm={() => setShowForm(false)} onSuccess={load} />}
    </div>
  );
}
