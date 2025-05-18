export default function Topbar() {
    return (
      <header className="h-16 bg-white flex items-center justify-between px-8 shadow-md">
        <h1 className="text-xl font-semibold">Dashboard Administrateur</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Déconnexion
        </button>
      </header>
    );
  }
  