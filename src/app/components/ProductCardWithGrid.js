"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCardWithGrid = ({ title = "Nos articles", customProducts = null }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultProducts = [
    {
      id: "masque-bois-001",
      name: "Masque en bois",
      image: "/1.jpg",
      price: 6750,
      oldPrice: 7500,
      discount: 10,
      reviews: 97,
    },
    {
      id: "produit-mystere-002",
      name: "Produit mystère",
      image: "/b3.png",
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 89,
    },
    {
      id: "boisson-003",
      name: "Boisson traditionnelle",
      image: "/boisson1.png",
      price: 2500,
      oldPrice: 3000,
      discount: 17,
      reviews: 110,
    },
    {
      id: "decoration-004",
      name: "Décoration artisanale",
      image: "/d1.png",
      price: 20000,
      oldPrice: 25000,
      discount: 20,
      reviews: 76,
    },
    {
      id: "cosmetique-005",
      name: "Cosmétique naturel",
      image: "/g1.png",
      price: 18500,
      oldPrice: 22000,
      discount: 16,
      reviews: 102,
    },
    {
      id: "huile-006",
      name: "Huile essentielle",
      image: "/h1.png",
      price: 8000,
      oldPrice: 9500,
      discount: 16,
      reviews: 135,
    },
    {
      id: "gingembre-007",
      name: "Gingembre bio",
      image: "/gin1.png",
      price: 10000,
      oldPrice: 12000,
      discount: 17,
      reviews: 92,
    },
    {
      id: "infusion-008",
      name: "Infusion médicinale",
      image: "/inf5.png",
      price: 10000,
      oldPrice: 12000,
      discount: 17,
      reviews: 113,
    },
 
  ];

  const products = customProducts || defaultProducts;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ProductCard = ({ product }) => (
    <Link href={`/produits/${product.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="border-gray-400 shadow-lg rounded-2xl p-6 w-full max-w-[280px] flex flex-col items-center border hover:shadow-xl transition-all cursor-pointer"
      >
        <div className="relative w-full h-[180px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="text-center mt-4 w-full">
          <h3 className="font-semibold text-base">{product.name}</h3>
          <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
          </div>
          <p className="text-xl font-bold mt-1">{product.price} Fcfa</p>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="text-gray-600 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
            <AiOutlineHeart size={20} />
          </button>
          <button className="text-green-600 bg-green-100 p-3 rounded-full hover:bg-green-200 transition">
            <IoLogoWhatsapp size={20} />
          </button>
          <button className="text-blue-600 bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition">
            <FaShoppingCart size={20} />
          </button>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center">
      {title && (
        <motion.h2
          className="text-3xl md:text-4xl font-bold mt-10 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 w-full justify-items-center">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardWithGrid;
