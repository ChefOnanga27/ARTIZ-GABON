"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Couple floral DOUTSONA",
    images: ["/sc1.png", "/sc1.png", "/sc1.png"],
    price: 1750000,
    oldPrice: 200000,
    reviews: 120,
    whatsappLink: "https://wa.me/+24162635316",
  },
  {
    id: 2,
    name: "Gamme de produits",
    images: ["/g1.png", "/g2.png", "/gin1.png"],
    price: 18500,
    oldPrice: 20000,
    reviews: 85,
    whatsappLink: "https://wa.me/+24162635316",
  },
  {
    id: 3,
    name: "Infusion",
    images: ["/inf1.png", "/inf2.png", "/inf3.png"],
    price: 10000,
    oldPrice: 10999,
    reviews: 60,
    whatsappLink: "https://wa.me/+24162635316",
  },
];

const ProductCard = ({ product, isFeatured }) => {
  return (
    <motion.div
      className={`bg-white shadow-lg mt-7 mb-5 flex flex-col items-center  ${
        isFeatured ? "w-full max-w-md" : "w-full max-w-xs"
      }`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image avec effet de zoom */}
      <div className="relative w-full h-48 overflow-hidden">
        <motion.div className="relative w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Infos produit */}
      <div className="text-center mt-4 px-4 w-full">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
          {Array(5)
            .fill("⭐")
            .map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>
        <p className="text-xl font-bold mt-1">{product.price.toLocaleString()} Fcfa</p>
      </div>

     
      <div className="mb-4 px-2 ml-32 w-full">
        <button
          onClick={() => console.log(`Ajouté ${product.name} au panier`)}
          className="w-44 bg-black text-white py-1 rounded-md hover:bg-gray-800 transition"
        >
          Ajouter au panier
        </button>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  const bestSellingProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <div className="h-full w-full bg-gray-100  flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-10 ">Meilleures Ventes</h2>

      <section className="w-full max-w-6xl">
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="w-80 h-auto">
            <ProductCard product={bestSellingProduct} isFeatured />
          </div>

          {otherProducts.map((product) => (
            <div key={product.id} className="w-80 h-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
