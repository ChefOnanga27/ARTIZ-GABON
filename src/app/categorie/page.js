"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  /** CAROUSEL **/
  const images = ["/sav.png", "/d1.png", "/savon.png", "/p1.png", "/2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /** PRODUCTS **/
  const allProducts = [
    { id: 1, name: "Masque en bois", image: "/cat.jpg", price: "85 000 FCFA", category: "Masque en" },
    { id: 2, name: "Masque en bois", image: "/cat2.jpg", price: "85 000 FCFA", category: "Masque en" },
    { id: 3, name: "Masque en bois", image: "/cat3.jpg", price: "85 000 FCFA", category: "Masque en" },
    { id: 4, name: "Decoration", image: "/d1.png", price: "38 000 FCFA", category: "Decoration" },
    { id: 5, name: "Decoration", image: "/d2.jpg", price: "37 500 FCFA", category: "Decoration" },
    { id: 6, name: "Decoration", image: "/d3.jpg", price: "42 000 FCFA", category: "Decoration" },
    { id: 7, name: "Gamme de produits", image: "/g1.png", price: "18 500 FCFA", category: "Gamme de produits" },
    { id: 8, name: "Gamme de produits", image: "/g2.png", price: "18 500 FCFA", category: "Gamme de produits" },
    { id: 9, name: "Gingembre", image: "/gin1.png", price: "10 000 FCFA", category: "Gamme de produits" },
    { id: 10, name: "Huile", image: "/h1.png", price: "10 000 FCFA", category: "Huile" },
    { id: 11, name: "Huile", image: "/h2.png", price: "10 000 FCFA", category: "Huile" },
    { id: 12, name: "Huile", image: "/h3.png", price: "10 000 FCFA", category: "Huile" },
    { id: 13, name: "Moringa", image: "/mo1.png", price: "3 500 FCFA", category: "Gamme de produits" },
    { id: 14, name: "Miel", image: "/miel.png", price: "3 000 FCFA", category: "Gamme de produits" },
    { id: 15, name: "Infusion", image: "/inf1.png", price: "10 000 FCFA", category: "Infusion" },
    { id: 16, name: "Infusion", image: "/inf2.png", price: "10 000 FCFA", category: "Infusion" },
    { id: 17, name: "Infusion", image: "/inf3.png", price: "10 000 FCFA", category: "Infusion" },
    { id: 18, name: "Infusion", image: "/inf4.png", price: "10 000 FCFA", category: "Infusion" },
    // Ajoute tes autres produits avec leurs catégories ici...
  ];

  const [selectedCategory, setSelectedCategory] = useState("");  // État pour la catégorie sélectionnée
  const itemsPerPage = 16; // Adjust based on your UI design
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  // Filtrer les produits en fonction de la catégorie
  const filteredProducts = selectedCategory
    ? allProducts.filter((product) => product.category === selectedCategory)
    : allProducts;

  // Paginer les produits filtrés
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePagination = (direction) => {
    setCurrentPage((prev) => {
      if (direction === "next") {
        return Math.min(prev + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prev - 1, 1);
      }
    });
  };

  /** Sorting **/
  const handleSort = (e) => {
    const value = e.target.value;
    if (value === "price-asc") {
      filteredProducts.sort((a, b) => parseFloat(a.price.replace(" FCFA", "").replace(".", "")) - parseFloat(b.price.replace(" FCFA", "").replace(".", "")));
    } else if (value === "price-desc") {
      filteredProducts.sort((a, b) => parseFloat(b.price.replace(" FCFA", "").replace(".", "")) - parseFloat(a.price.replace(" FCFA", "").replace(".", "")));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      

      {/* Carousel */}
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Découvrez l’âme du Gabon <br /> à travers des créations uniques. <br /> Chaque pièce raconte une histoire, <br /> chaque achat soutient un artisan.
          </h1>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition">
            Inscrivez-vous maintenant
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="p-6">
       

        <div className="text-xl flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Nos Produits</h2>
          <select
          className="p-2 border rounded mb-4"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          <option value="Masque en">Masque en bois</option>
          <option value="Decoration">Décoration</option>
          <option value="Gamme de produits">Gamme de produits</option>
          <option value="Huile">Huile</option>
          <option value="Infusion">Infusion</option>
        </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <div className="text-lg font-bold text-red-500 mt-2">{product.price}</div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => handlePagination("prev")}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span className="self-center">{currentPage} / {totalPages}</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => handlePagination("next")}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </div>

    </div>
  );
}
