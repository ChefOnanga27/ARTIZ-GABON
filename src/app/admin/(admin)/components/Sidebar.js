import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8"><Link href="/admin/dashboard">Admin Pane</Link></h2>
  
      <nav className="flex-1">
        <ul className="space-y-6">
          <li><Link href="/admin/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/admin/produi" className="hover:underline">Produits</Link></li>
          <li><Link href="/admin/categorie" className="hover:underline">Catégories</Link></li>
          <li><Link href="/admin/commandes" className="hover:underline">Commandes</Link></li>
          <li><Link href="/admin/parametre" className="hover:underline">Paramètre</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
