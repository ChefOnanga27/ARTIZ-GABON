"use client";
import { motion } from "framer-motion";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  // Variants d'animation pour chaque article
  const articleVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // Alternance gauche-droite
      y: index % 3 === 0 ? -50 : 50,   // Alternance haut-bas
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.2, // Délai progressif pour chaque carte
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  // Liste des articles
  const articles = [
    {
      image: "/wogo.jpg",
      date: "Wongo Le Patriote",
    
      title: "Wongo estun Valeureux guerrier Awandji qui s’imposa au début XXème siècle",
      description:
        "Majestueusement dressée au centre de la commune de Lastourville à un carrefour considérée à juste titre comme la plaque incontournable des rencontres de cette vill",
    },
    {
      image: "/Nyonda.jpg",
      date: "Qui est Nyonda Makita ?",
      
      title: "Nyonda Makita,un resiliant",
      description:
        "Nyonda Makita, de son vrai nom Mavurulu incarne, comme en son temps d’autres leaders, l’insoumission, la dignité et le droit des populations autochtones à disposer d’elles-mêmes. Des sources indiquent qu’il est né vers 1870.",
    },
    {
      image: "/emane.jpg",
      date: "Emane Ntole, le résistant de Ndjolé",

      title: "Écrire, rêver et créer de nouveaux mondes",
      description:
        "L’histoire nous dit qu’à la suite d’un accident de chasse, un Kota de Djambala tua un fang de Nseghe, faisant naître un conflit mortel entre les habitants des deux villages.",
    },
    
   
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Histoire des Guériet
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
          Découvrez l'héritage fascinant des Guériet à travers les archives,
          récits et explorations culturelles.
        </p>
      </div>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={articleVariants}
          >
            <ArticleCard {...article} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
