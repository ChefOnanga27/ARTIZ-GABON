"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Bienvenue sur ARTIZ",
    subtitle: "L'artisanat, une histoire dans chaque pièce. Des créations qui parlent du Gabon.",
    image: "/image.png",
    cta: "Inscrivez-vous maintenant",
  },
  {
    title: "L'élégance du fait main",
    subtitle: "Explorez des œuvres uniques créées par des artisans gabonais.",
    image: "/image0.png",
    cta: "Voir la collection",
  },
  {
    title: "Soutenez l’art local",
    subtitle: "Chaque achat aide une communauté à prospérer.",
    image: "/img.png",
    cta: "Agir maintenant",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    console.log("CTA clicked");
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slides[current].image}
            alt="Background"
            fill
            className="object-cover object-[50%_30%]"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-6 top-[50%] -translate-y-1/2">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-2xl text-white font-light drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[current].subtitle}
            </motion.p>

            <motion.button
              onClick={handleClick}
              className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[current].cta}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
