"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import ProductCardWithGrid from "../components/ProductCardWithGrid";

export default function HomePage() {
  const images = ["/sav.png", "/d1.png", "/savon.png", "/p1.png", "/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const allProducts = [
    { id: "masque-bois-001", name: "Masque en bois", image: "/1.jpg", price: 6750, reviews: 97, category: "Masque en" },
    { id: "produit-mystere-002", name: "Produit mystère", image: "/b3.png", price: 2500, reviews: 89, category: "Gamme de produits" },
    { id: "boisson-003", name: "Boisson traditionnelle", image: "/boisson1.png", price: 2500, reviews: 110, category: "Gamme de produits" },
    { id: "decoration-004", name: "Décoration artisanale", image: "/d1.png", price: 20000, reviews: 76, category: "Decoration" },
    { id: "cosmetique-005", name: "Cosmétique naturel", image: "/g1.png", price: 18500, reviews: 102, category: "Gamme de produits" },
    { id: "huile-006", name: "Huile essentielle", image: "/h1.png", price: 8000, reviews: 135, category: "Huile" },
    { id: "gingembre-007", name: "Gingembre bio", image: "/gin1.png", price: 10000, reviews: 92, category: "Gamme de produits" },
    { id: "infusion-008", name: "Infusion médicinale", image: "/inf5.png", price: 10000, reviews: 113, category: "Infusion" },
    { id: "miel-009", name: "Miel pur", image: "/miel2.png", price: 6500, reviews: 88, category: "Gamme de produits" },
    { id: "epices-010", name: "Épices locales", image: "/p1.png", price: 3900, reviews: 120, category: "Gamme de produits" },
    { id: "savon-011", name: "Savon artisanal", image: "/s1.png", price: 2500, reviews: 140, category: "Gamme de produits" },
    { id: "veilleuse-012", name: "Veilleuse décorative", image: "/v1.jpg", price: 94000, reviews: 80, category: "Decoration" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePagination = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next") return Math.min(prev + 1, totalPages);
      if (direction === "prev") return Math.max(prev - 1, 1);
      return prev;
    });
  };

 


  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Découvrez l'âme du Gabon <br /> à travers des créations uniques
          </h1>
          <input
            type="text"
            placeholder="Recherchez un produit..."
            className="mt-6 w-full max-w-md px-4 py-2 bg-white/80 text-black rounded-md focus:outline-none placeholder-gray-700"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="flex-1">
        <ProductCardWithGrid products={paginatedProducts} />

        <div className="flex justify-center space-x-4 my-6">
          <button
            onClick={() => handlePagination("prev")}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Précédent
          </button>
          <button
            onClick={() => handlePagination("next")}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Suivant
          </button>
        </div>
      </div>

 

        

      
    
      </div>
   
  );
}
