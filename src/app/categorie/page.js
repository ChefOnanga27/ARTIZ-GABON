"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHeart } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

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
    { id: "masque-bois-001", name: "Masque en bois", image: "/1.jpg", price: 6750, oldPrice: 7500, discount: 10, reviews: 97, category: "Masque en" },
    { id: "produit-mystere-002", name: "Produit mystère", image: "/b3.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 89, category: "Gamme de produits" },
    { id: "boisson-003", name: "Boisson traditionnelle", image: "/boisson1.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 110, category: "Gamme de produits" },
    { id: "decoration-004", name: "Décoration artisanale", image: "/d1.png", price: 20000, oldPrice: 25000, discount: 20, reviews: 76, category: "Decoration" },
    { id: "cosmetique-005", name: "Cosmétique naturel", image: "/g1.png", price: 18500, oldPrice: 22000, discount: 16, reviews: 102, category: "Gamme de produits" },
    { id: "huile-006", name: "Huile essentielle", image: "/h1.png", price: 8000, oldPrice: 9500, discount: 16, reviews: 135, category: "Huile" },
    { id: "gingembre-007", name: "Gingembre bio", image: "/gin1.png", price: 10000, oldPrice: 12000, discount: 17, reviews: 92, category: "Gamme de produits" },
    { id: "infusion-008", name: "Infusion médicinale", image: "/inf5.png", price: 10000, oldPrice: 12000, discount: 17, reviews: 113, category: "Infusion" },
    { id: "miel-009", name: "Miel pur", image: "/miel2.png", price: 6500, oldPrice: 8000, discount: 19, reviews: 88, category: "Gamme de produits" },
    { id: "epices-010", name: "Épices locales", image: "/p1.png", price: 3900, oldPrice: 4500, discount: 13, reviews: 120, category: "Gamme de produits" },
    { id: "savon-011", name: "Savon artisanal", image: "/s1.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 140, category: "Gamme de produits" },
    { id: "veilleuse-012", name: "Veilleuse décorative", image: "/v1.jpg", price: 94000, oldPrice: 110000, discount: 15, reviews: 80, category: "Decoration" },
    // Duplicates intentionally kept
    { id: "masque-bois-001", name: "Masque en bois", image: "/1.jpg", price: 6750, oldPrice: 7500, discount: 10, reviews: 97, category: "Masque en" },
    { id: "produit-mystere-002", name: "Produit mystère", image: "/b3.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 89, category: "Gamme de produits" },
    { id: "boisson-003", name: "Boisson traditionnelle", image: "/boisson1.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 110, category: "Gamme de produits" },
    { id: "decoration-004", name: "Décoration artisanale", image: "/d1.png", price: 20000, oldPrice: 25000, discount: 20, reviews: 76, category: "Decoration" },
    { id: "cosmetique-005", name: "Cosmétique naturel", image: "/g1.png", price: 18500, oldPrice: 22000, discount: 16, reviews: 102, category: "Gamme de produits" },
    { id: "huile-006", name: "Huile essentielle", image: "/h1.png", price: 8000, oldPrice: 9500, discount: 16, reviews: 135, category: "Huile" },
    { id: "gingembre-007", name: "Gingembre bio", image: "/gin1.png", price: 10000, oldPrice: 12000, discount: 17, reviews: 92, category: "Gamme de produits" },
    { id: "infusion-008", name: "Infusion médicinale", image: "/inf5.png", price: 10000, oldPrice: 12000, discount: 17, reviews: 113, category: "Infusion" },
    { id: "miel-009", name: "Miel pur", image: "/miel2.png", price: 6500, oldPrice: 8000, discount: 19, reviews: 88, category: "Gamme de produits" },
    { id: "epices-010", name: "Épices locales", image: "/p1.png", price: 3900, oldPrice: 4500, discount: 13, reviews: 120, category: "Gamme de produits" },
    { id: "savon-011", name: "Savon artisanal", image: "/s1.png", price: 2500, oldPrice: 3000, discount: 17, reviews: 140, category: "Gamme de produits" },
    { id: "veilleuse-012", name: "Veilleuse décorative", image: "/v1.jpg", price: 94000, oldPrice: 110000, discount: 15, reviews: 80, category: "Decoration" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = !searchQuery || product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.category.toLowerCase().includes(searchQuery.toLowerCase());
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

  const ProductCard = ({ product }) => (
    <Link href={`/produits/${product.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="border-gray-200 shadow-2xl rounded-2xl p-6 w-full max-w-[280px] flex flex-col items-center border hover:shadow-xl transition-all cursor-pointer"
      >
        <div className="relative w-[230px] h-[150px]">
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
            <Image src={images[currentImage]} alt={`Image ${currentImage + 1}`} fill style={{ objectFit: "cover" }} priority />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            Découvrez l'âme du Gabon <br /> à travers des créations uniques. <br /> Chaque pièce raconte une histoire, <br /> chaque achat soutient un artisan.
          </h1>
          <input
            type="text"
            placeholder="Recherchez un produit..."
            className="mt-6 w-full max-w-md px-4 py-3 bg-gray-300 rounded-md shadow-md text-black placeholder-gray-950 focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Produits */}
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Nos Produits</h2>
          <select
            className="p-2 border rounded"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Toutes les catégories</option>
            <option value="Masque en">Masque en bois</option>
            <option value="Decoration">Décoration</option>
            <option value="Gamme de produits">Gamme de produits</option>
            <option value="Huile">Huile</option>
            <option value="Infusion">Infusion</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-items-center">
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id + index}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-8">
            <button
              className={`px-4 py-2 rounded-md ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
              onClick={() => handlePagination("prev")}
              disabled={currentPage === 1}
            >
              Précédent
            </button>
            <span className="text-lg font-medium">
              Page {currentPage} sur {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-md ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
              onClick={() => handlePagination("next")}
              disabled={currentPage === totalPages}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
