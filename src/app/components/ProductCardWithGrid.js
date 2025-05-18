"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

import AddToCartButton from "./AddToCartButton";

const ProductCardWithGrid = ({ title = "Nos articles", customProducts = null, selectedProduct = null }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const defaultProducts = [
    { id: "masque-bois-001", name: "Masque en bois", category: "masque", image: "/1.jpg", price: 6750, reviews: 97 },
    { id: "produit-mystere-002", name: "Produit mystère", category: "divers", image: "/b3.png", price: 2500, reviews: 89 },
    { id: "boisson-003", name: "Boisson traditionnelle", category: "boisson", image: "/boisson1.png", price: 2500, reviews: 110 },
    { id: "decoration-004", name: "Décoration artisanale", category: "décoration", image: "/d1.png", price: 20000, reviews: 76 },
    { id: "cosmetique-005", name: "Cosmétique naturel", category: "cosmétique", image: "/g1.png", price: 18500, reviews: 102 },
    { id: "huile-006", name: "Huile essentielle", category: "huile", image: "/h1.png", price: 8000, reviews: 135 },
    { id: "gingembre-007", name: "Gingembre bio", category: "épicerie", image: "/gin1.png", price: 10000, reviews: 92 },
    { id: "infusion-008", name: "Infusion médicinale", category: "infusion", image: "/inf5.png", price: 10000, reviews: 113 },
    
  ];

  const products = customProducts || defaultProducts;

  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Si un produit sélectionné est passé, filtrer pour afficher uniquement les produits similaires (même catégorie, autre id)
  if (selectedProduct) {
    filteredProducts = products.filter(
      (product) =>
        product.category === selectedProduct.category &&
        product.id !== selectedProduct.id
    );
  }

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

      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-[280px] h-[360px] border border-gray-300 shadow-md flex flex-col bg-white transition-all"
            >
              <div className="w-[280px] h-[360px] border border-gray-300 shadow-md flex flex-col bg-white transition-all overflow-hidden">
                <Link href={`/produits/${product.id}`} className="flex flex-col h-full">
                  <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-[200px]">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </motion.div>

                  <div className="flex flex-col justify-between flex-1 p-4 text-center">
                    <div>
                      <h3 className="font-semibold text-base line-clamp-2">{product.name}</h3>
                      <div className="flex justify-center gap-1 text-yellow-500 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                        <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="font-bold">{product.price} Fcfa</p>
                    </div>

                    <div className="flex flex-col gap-3 mt-4 items-center">
                      <AddToCartButton onClick={() => console.log(`Ajouté ${product.name} au panier`)} />
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardWithGrid;
