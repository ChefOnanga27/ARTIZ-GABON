"use client";

import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react"; // ✅ useEffect ajouté ici
import Image from "next/image";


import MuseumPage from "../components/MuseumPage";
import ResourcesSection from "../components/ResourcesSection";
// import HighlightSection from "../components/HighlightSection";
import ArticlesSection from "../components/ArticlesSection";
import EventsSection from "../components/EventsSection";
import Link from "next/link";

// ✅ On sort ce composant d’animation de texte ici
const AnimatedTextOverVideo = () => {
  const texts = [
    "L’art ancestral du Gabon",
    "Chaque masque a une histoire",
    "Découvrez le mystère des artefacts"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl font-bold"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const projects = [
    {
      title: "Histoire du Masque Punu",
      date: "JANVIER 15, 2024",
      description:
        "Le masque Mukudji est un masque traditionnel gabonais, originaire du groupe ethnique Punu dans les régions de la Ngounié et de la Nyanga (Gabon).",
      image: "/punu.jpg",
    },
    {
      title: "Masque Massango",
      date: "JUILLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
    {
      title: "Masque Myene",
      date: "MARS 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas2.jpg",
    },
    {
      title: "Histoire du Masque Punu",
      date: "JANVIER 15, 2024",
      description:
        "Le masque Mukudji est un masque traditionnel gabonais, originaire du groupe ethnique Punu dans les régions de la Ngounié et de la Nyanga (Gabon).",
      image: "/punu.jpg",
    },
    {
      title: "Masque Massango",
      date: "JUILLET 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas.jpg",
    },
    {
      title: "Masque Myene",
      date: "MARS 31, 2023",
      description:
        "Les Myènè sont une population bantoue d'Afrique centrale établie au Gabon, sur le littoral et le long de l'Ogooué jusqu'à Lambaréné .",
      image: "/mas2.jpg",
    },
  ];

  return (
    <div>
      {/* Section vidéo + texte animé */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <AnimatedTextOverVideo />
      </div>

      {/* Section Projets avec animation */}
      <section className="py-8 bg-gray-300">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">
      Histoire des masques Gabonais
    </h2>

    <div className="grid md:grid-cols-2 gap-4 items-start">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-lg shadow-lg overflow-hidden"
      >
        <Image
          src="/pu.jpg"
          alt="Objets Parlants"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-2">
          <h3 className="font-bold text-lg mb-1">
            Histoire du Masque disponible pour vous !
          </h3>
          <p className="text-sm">
            Le masque fang est un masque en bois exotique blanchi au kaolin issu de l'art traditionnel du Gabon.
          </p>
          <button className="mt-2 bg-black text-white px-4 py-1.5 text-sm rounded">
            Voir plus
          </button>
        </div>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex space-x-4 items-start bg-white p-3 rounded-lg shadow hover:scale-[1.02] transition-transform"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={70}
              height={70}
              className="rounded-lg"
            />
            <div className="text-sm">
              <p className="text-gray-500">{project.date}</p>
              <h3 className="font-bold text-base">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Sections supplémentaires */}
      <MuseumPage />
      <div className="mt-6 "> {/* Ajoute un espace vertical de 4rem (~64px) */}
       <ResourcesSection />
      </div>
      
      <ArticlesSection />
      <EventsSection />
    </div>
  );
}
