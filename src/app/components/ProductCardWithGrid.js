// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { AiOutlineHeart } from "react-icons/ai";

// const ProductCardWithGrid = () => {
//   // Données complètes des produits avec toutes les images
//   const products = [
    // {
    //   name: "Masque en bois",
    //   image: "/1.jpg",
    //   price: 6750,
    //   oldPrice: 7500,
    //   discount: 10,
    //   reviews: 97,
    // },
    // {
    //   name: "Produit mystère",
    //   image: "/b3.png",
    //   price: 2500,
    //   oldPrice: 3000,
    //   discount: 17,
    //   reviews: 89,
    // },
    // {
    //   name: "Boisson traditionnelle",
    //   image: "/boisson1.png", 
    //   price: 2500,
    //   oldPrice: 3000,
    //   discount: 17,
    //   reviews: 110,
    // },
    // {
    //   name: "Décoration artisanale",
    //   image: "/d1.png",
    //   price: 20000,
    //   oldPrice: 25000,
    //   discount: 20,
    //   reviews: 76,
    // },
    // {
    //   name: "Cosmétique naturel",
    //   image: "/g1.png",
    //   price: 18500,
    //   oldPrice: 22000,
    //   discount: 16,
    //   reviews: 102,
    // },
    // {
    //   name: "Huile essentielle",
    //   image: "/h1.png",
    //   price: 8000,
    //   oldPrice: 9500,
    //   discount: 16,
    //   reviews: 135,
    // },
    // {
    //   name: "Gingembre bio",
    //   image: "/gin1.png",
    //   price: 10000,
    //   oldPrice: 12000,
    //   discount: 17,
    //   reviews: 92,
    // },
    // {
    //   name: "Infusion médicinale",
    //   image: "/inf5.png",
    //   price: 10000,
    //   oldPrice: 12000,
    //   discount: 17,
    //   reviews: 113,
    // },
    // {
    //   name: "Miel pur",
    //   image: "/miel2.png",
    //   price: 6500,
    //   oldPrice: 8000,
    //   discount: 19,
    //   reviews: 88,
    // },
    // {
    //   name: "Épices locales",
    //   image: "/p1.png",
    //   price: 3900,
    //   oldPrice: 4500,
    //   discount: 13,
    //   reviews: 120,
    // },
    // {
    //   name: "Savon artisanal",
    //   image: "/s1.png",
    //   price: 2500,
    //   oldPrice: 3000,
    //   discount: 17,
    //   reviews: 140,
    // },
    // {
    //   name: "Veilleuse décorative",
    //   image: "/v1.jpg",
    //   price: 94000,
    //   oldPrice: 110000,
    //   discount: 15,
    //   reviews: 80,
    // }
//   ];

//   // Composant ProductCard interne
//   const ProductCard = ({ product }) => {
//     if (!product) return <p className="text-red-500">Produit non disponible</p>;

//     return (
//       <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-[220px] flex flex-col items-center border hover:shadow-xl transition-shadow">
//         <div className="relative w-full h-[120px]">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="rounded-lg object-cover"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         </div>

//         <div className="text-center mt-3 w-full">
//           <h3 className="font-semibold text-sm">{product.name}</h3>

//           <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
//             {Array(5).fill("⭐").map((star, i) => (
//               <span key={i}>{star}</span>
//             ))}
//             <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
//           </div>

//           <div className="mt-1 flex items-center justify-center gap-2 text-sm">
//             <span className="text-gray-400 line-through">{product.oldPrice}Fcfa</span>
//             <span className="bg-blue-100 text-blue-600 px-2 rounded text-xs">
//               -{product.discount}%
//             </span>
//           </div>
//           <p className="text-lg font-bold mt-1">{product.price}Fcfa</p>
//         </div>

//         <div className="flex gap-3 mt-3">
//           <button className="text-gray-600 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
//             <AiOutlineHeart size={18} />
//           </button>
//           <button className="text-green-600 bg-green-100 p-2 rounded-full hover:bg-green-200 transition">
//             <IoLogoWhatsapp size={18} />
//           </button>
//           <button className="text-blue-600 bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition">
//             <FaShoppingCart size={18} />
//           </button>
//         </div>
//       </div>
//     );
//   };

//   // Rendu de la grille de produits
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
//       <motion.h2
//         className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         Nos articles
//       </motion.h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 w-full place-items-center">
//         {products.map((product, index) => (
//           <motion.div
//             key={`${product.name}-${index}`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             viewport={{ once: true }}
//             className="w-full max-w-[250px]"
//           >
//             <ProductCard product={product} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCardWithGrid;
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCardWithGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Données des produits avec IDs uniques
  const products = [
    {
      id: "masque-bois-001",
      name: "Masque en bois",
      image: "/cat.jpg",
      price: 6750,
      oldPrice: 7500,
      discount: 10,
      reviews: 97,
      description: "Masque traditionnel gabonais sculpté à la main en bois d'ébène."
    },
    {
      id: "produit-mystere-002",
      name: "Produit mystère",
      image: "/b3.png",
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 89,
      description: "Découvrez notre sélection surprise d'artisanat local."
    },
    {
      name: "Masque en bois",
      image: "/1.jpg",
      price: 6750,
      oldPrice: 7500,
      discount: 10,
      reviews: 97,
    },
    {
      name: "Produit mystère",
      image: "/b3.png",
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 89,
    },
    {
      name: "Boisson traditionnelle",
      image: "/boisson1.png", 
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 110,
    },
    {
      name: "Décoration artisanale",
      image: "/d1.png",
      price: 20000,
      oldPrice: 25000,
      discount: 20,
      reviews: 76,
    },
    {
      name: "Cosmétique naturel",
      image: "/g1.png",
      price: 18500,
      oldPrice: 22000,
      discount: 16,
      reviews: 102,
    },
    {
      name: "Huile essentielle",
      image: "/h1.png",
      price: 8000,
      oldPrice: 9500,
      discount: 16,
      reviews: 135,
    },
    {
      name: "Gingembre bio",
      image: "/gin1.png",
      price: 10000,
      oldPrice: 12000,
      discount: 17,
      reviews: 92,
    },
    {
      name: "Infusion médicinale",
      image: "/inf5.png",
      price: 10000,
      oldPrice: 12000,
      discount: 17,
      reviews: 113,
    },
    {
      name: "Miel pur",
      image: "/miel2.png",
      price: 6500,
      oldPrice: 8000,
      discount: 19,
      reviews: 88,
    },
    {
      name: "Épices locales",
      image: "/p1.png",
      price: 3900,
      oldPrice: 4500,
      discount: 13,
      reviews: 120,
    },
    {
      name: "Savon artisanal",
      image: "/s1.png",
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 140,
    },
    {
      name: "Veilleuse décorative",
      image: "/v1.jpg",
      price: 94000,
      oldPrice: 110000,
      discount: 15,
      reviews: 80,
    }
    // ... ajoutez les autres produits avec le même format
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProductCard = ({ product }) => {
    return (
      <Link href={`/produits/${product.id}`} passHref>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-xl p-4 w-full max-w-[220px] flex flex-col items-center border hover:shadow-xl transition-all cursor-pointer"
        >
          <div className="relative w-full h-[120px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="text-center mt-3 w-full">
            <h3 className="font-semibold text-sm">{product.name}</h3>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
              <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-2 text-sm">
              <span className="text-gray-400 line-through">{product.oldPrice}Fcfa</span>
              <span className="bg-blue-100 text-blue-600 px-2 rounded text-xs">
                -{product.discount}%
              </span>
            </div>
            <p className="text-lg font-bold mt-1">{product.price}Fcfa</p>
          </div>

          <div className="flex gap-3 mt-3">
            <button className="text-gray-600 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
              <AiOutlineHeart size={18} />
            </button>
            <button className="text-green-600 bg-green-100 p-2 rounded-full hover:bg-green-200 transition">
              <IoLogoWhatsapp size={18} />
            </button>
            <button className="text-blue-600 bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition">
              <FaShoppingCart size={18} />
            </button>
          </div>
        </motion.div>
      </Link>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* Barre de recherche */}
      {/* <input
        type="text"
        placeholder="Rechercher un produit..."
        className="w-full max-w-md p-3 mb-8 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      <motion.h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nos articles
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardWithGrid;