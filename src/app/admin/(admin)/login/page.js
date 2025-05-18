export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-black mb-4">Bienvenue Administrateur</h1>
        <p className="text-center text-gray-600 mb-8">Connectez-vous à votre espace sécurisé</p>

        <form className="space-y-6">
          {/* Champ Nom d'utilisateur */}
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Entrez votre nom d'utilisateur"
              required
            />
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>

          {/* Bouton Se connecter */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
