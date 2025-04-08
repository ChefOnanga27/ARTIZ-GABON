const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          
      
          <div>
            <h3 className="text-lg font-semibold">À propos</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:underline">Qui sommes-nous ?</a></li>
              <li><a href="#" className="hover:underline">Nos services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold">Aide</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:underline">Support client</a></li>
              <li><a href="#" className="hover:underline">Détails de livraison</a></li>
            </ul>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold">Restez connecté</h3>
            <p className="mt-3 text-gray-400">Suivez-nous sur les réseaux sociaux pour ne rien manquer.</p>
            <div className="flex space-x-3 mt-3">
              <a href="#" className="text-blue-400 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-blue-600 hover:text-blue-700"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-pink-500 hover:text-pink-600"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
  
         
          <div>
            <h3 className="text-lg font-semibold">Inscription</h3>
            <p className="mt-3 text-gray-400">Abonnez-vous pour recevoir nos dernières offres et nouveautés.</p>
            <div className="mt-3 flex">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="p-2 bg-foreground w-full text-white rounded-l-md outline-none" 
              />
              <button className="bg-white text-black px-4 rounded-r-md hover:bg-green-600">
                S'abonner
              </button>
            </div>
          </div>
  
        </div>
  
       
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>© 2025 Artiz - Alec & Stevine Libreville Ganon</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Politique de confidentialité</a> |
            <a href="#" className="hover:underline"> Conditions d'utilisation</a> |
            <a href="#" className="hover:underline"> Politique de remboursement</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  