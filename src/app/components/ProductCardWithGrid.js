"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const isImageUrl = (url) =>
  typeof url === "string" &&
  (url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".png") || url.endsWith(".webp"));

const ProductCardWithGrid = ({
  title = "Nos articles",
  customProducts = null,
  selectedProduct = null,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://artiz-1ly2.onrender.com/api/admin/articles");
        const data = await res.json();
        setFetchedProducts(data);
      } catch (error) {
        console.error("Erreur lors du chargement des produits :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const products = customProducts || fetchedProducts || [];

  let filteredProducts = products.filter((product) =>
    product.nom?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedProduct) {
    filteredProducts = products.filter(
      (product) =>
        product.categorie === selectedProduct.categorie &&
        (product._id || product.id) !== (selectedProduct._id || selectedProduct.id)
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

      {loading ? (
        <p>Chargement des produits...</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredProducts.map((product) => {
            const imageUrl =
              isImageUrl(product.images?.[0]) && product.images[0].startsWith("http")
                ? product.images[0]
                : "/placeholder.jpg";

            return (
              <motion.div
                key={product._id || product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-[280px] h-[360px] border border-gray-300 shadow-md flex flex-col bg-white transition-all"
                >
                  <div className="w-[280px] h-[360px] flex flex-col overflow-hidden">
                    <Link href={`/produits/${product._id || product.id}`} className="flex flex-col h-full">
                      <motion.div whileHover={{ scale: 1.05 }} className="relative w-full h-[200px]">
                        <Image
                          src={imageUrl}
                          alt={product.nom || "Produit"}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      <div className="flex flex-col justify-between flex-1 p-4 text-center">
                        <div>
                          <h3 className="font-semibold text-base line-clamp-2">{product.nom}</h3>
                          <div className="flex justify-center gap-1 text-yellow-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>⭐</span>
                            ))}
                            <span className="text-gray-500 text-xs ml-1">
                              ({product.reviews || 0})
                            </span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <p className="font-bold">{product.prix} Fcfa</p>
                        </div>

                        <div className="flex flex-col gap-3 mt-4 items-center">
                          <AddToCartButton onClick={() => console.log(`Ajouté ${product.nom} au panier`)} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductCardWithGrid;
