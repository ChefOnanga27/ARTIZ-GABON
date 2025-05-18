// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-10 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
//         {/* À propos */}
//         <div>
//           <h3 className="text-lg font-semibold">À propos</h3>
//           <ul className="mt-3 space-y-2">
//             <li><a href="#" className="hover:underline">Qui sommes-nous ?</a></li>
//             <li><a href="#" className="hover:underline">Nos créations</a></li>
//             <li><a href="#" className="hover:underline">Équipe Artiz</a></li>
//             <li><a href="#" className="hover:underline">Nous contacter</a></li>
//           </ul>
//         </div>

//         {/* Aide */}
//         <div>
//           <h3 className="text-lg font-semibold">Aide</h3>
//           <ul className="mt-3 space-y-2">
//             <li><a href="#" className="hover:underline">Support client</a></li>
//             <li><a href="#" className="hover:underline">Livraison & retours</a></li>
//             <li><a href="#" className="hover:underline">FAQ</a></li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold">Contact</h3>
//           <ul className="mt-3 space-y-2 text-sm">
//             <li>📍 Libreville, Gabon</li>
//             <li>📞 +241 01 23 45 67</li>
//             <li>📧 contact@artiz.com</li>
//           </ul>
//         </div>

//         {/* Réseaux sociaux */}
//         <div>
//           <h3 className="text-lg font-semibold">Restez connecté</h3>
//           <p className="mt-3 text-gray-400">Suivez Artiz sur les réseaux sociaux.</p>
//           <div className="flex space-x-4 mt-3 text-2xl">
//             <a href="https://facebook.com/artiz" className="hover:text-blue-500" aria-label="Facebook">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="https://twitter.com/artiz" className="hover:text-blue-400" aria-label="Twitter">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="https://instagram.com/artiz" className="hover:text-pink-500" aria-label="Instagram">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="https://linkedin.com/company/artiz" className="hover:text-blue-700" aria-label="LinkedIn">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//       </div>

//       {/* Bas de page */}
      // <div className="text-center text-gray-500 text-sm mt-8">
      //   <p>© 2025 Artiz - Alec & Stevine, Libreville, Gabon. Tous droits réservés.</p>
      //   <p className="mt-2">
      //     <a href="#" className="hover:underline">Politique de confidentialité</a> |
      //     <a href="#" className="hover:underline ml-2">Conditions d'utilisation</a> |
      //     <a href="#" className="hover:underline ml-2">Politique de remboursement</a>
      //   </p>
      // </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:ml-20 ml-4">
          {/* <div className="w-full md:w-1/6 flex justify-center md:justify-start">
            <div className="p-4">
              <Image
                src="/LOGO.png"
                alt="Logo Artiz"
                width={100}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </div>
          </div> */}

          <div className="w-full md:w-1/3">
            <h3 className="text-[#dcdaa4] font-bold text-lg mb-2">Artiz</h3>
            <p className="text-sm">
              Artiz est une plateforme innovante qui met en avant les artisans et créateurs gabonais, leur permettant de vendre et de faire découvrir leur savoir-faire unique.
            </p>
            <ul className="space-y-2 mt-3 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="text-[#b0b08b] underline underline-offset-8 hover:text-white flex items-center"
                >
                  <ChevronLeft /> À propos de nous
                </Link>
              </li>
              <li>
                <Link
                  href="/equipe"
                  className="text-[#b0b08b] underline underline-offset-8 hover:text-white flex items-center"
                >
                  <ChevronLeft /> Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#b0b08b] underline underline-offset-8 hover:text-white flex items-center"
                >
                  <ChevronLeft /> Blog & Actualités
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-[#dcdaa4] font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <a
                  target="_blank"
                  className="hover:underline"
                  href="https://maps.app.goo.gl/example"
                >
                  Quartier Montagne Sainte, Libreville, Gabon
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a className="hover:underline" href="tel:+24101234567">
                  (+241) 01 23 45 67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5" />
                <div className="flex flex-col">
                  <a className="hover:underline" href="mailto:contact@artiz.com">
                    contact@artiz.com
                  </a>
                  {/* <a className="hover:underline" href="mailto:support@artiz.com">
                    support@artiz.com
                  </a> */}
                </div>
              </li>
              <li className="flex items-center gap-2">
                {/* <Globe className="h-4 w-4" /> */}
                {/* <Link
                  target="_blank"
                  className="hover:underline"
                  href="https://www.artiz.com"
                >
                  www.artiz.com
                </Link> */}
              </li>
            </ul>

            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold">Suivez-nous</p>
              <div className="flex space-x-4">
                <Link target="_blank" href="https://www.facebook.com/artizgabon">
                  <Facebook className="hover:scale-125 duration-200 hover:text-[#dcdaa4]" />
                </Link>
                <Link target="_blank" href="https://www.instagram.com/artizgabon">
                  <Instagram className="hover:scale-125 duration-200 hover:text-[#dcdaa4]" />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/company/artizgabon">
                  <Linkedin className="hover:scale-125 duration-200 hover:text-[#dcdaa4]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 id="lien" className="text-[#dcdaa4] font-bold text-lg mb-3">Liens Utiles</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link target="_blank" href="https://www.pme.gouv.ga/" className="flex items-center text-[#b0b08b] underline underline-offset-8 hover:text-white">
                <ChevronLeft /> Ministère de la culture
              </Link>
              <Link target="_blank" href="https://www.industries.gouv.ga" className="flex items-center text-[#b0b08b] underline underline-offset-8 hover:text-white">
                <ChevronLeft /> Ministère de l'Industrie
              </Link>
              {/* <Link target="_blank" href="https://journal-officiel.ga/" className="flex items-center text-[#b0b08b] underline underline-offset-8 hover:text-white">
                <ChevronLeft /> Journal Officiel
              </Link> */}
              {/* <Link target="_blank" href="https://www.anpi-gabon.com/" className="flex items-center text-[#b0b08b] underline underline-offset-8 hover:text-white">
                <ChevronLeft /> ANPI Gabon
              </Link> */}
              <Link target="_blank" href="https://www.cci-gabon.com/" className="flex items-center text-[#b0b08b] underline underline-offset-8 hover:text-white">
                <ChevronLeft /> Chambre de Commerce
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-10 pt-2 text-center text-sm">
        <div className="text-center text-gray-500 text-sm ">
        <p>© 2025 Artiz - Alec & Stevine, Libreville, Gabon. Tous droits réservés.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Politique de confidentialité</a> |
          <a href="#" className="hover:underline ml-2">Conditions d'utilisation</a> |
          <a href="#" className="hover:underline ml-2">Politique de remboursement</a>
        </p>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
