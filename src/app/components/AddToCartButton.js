"use client";

import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({ onClick, label = "Ajouter au panier" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 bg-black text-white font-semibold px-2 py-1 rounded-xl shadow-md hover:bg-gray-900 transition-all"
    >
      <FaShoppingCart size={18} />
      <span>{label}</span>
    </motion.button>
  );
};

export default AddToCartButton;
