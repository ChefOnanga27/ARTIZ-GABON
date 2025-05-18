"use client";
import { motion } from "framer-motion";
import { GiSwordman, GiShield, GiFire } from "react-icons/gi"; // Icônes guerriers

export default function ArticlesSection() {
  const articleVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: index % 3 === 0 ? -50 : 50,
    }),
    visible: (index) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const articles = [
    {
      image: "/wogo.jpg",
      date: "Wongo Le Patriote",
      title: "Wongo est un valeureux guerrier Awandji",
      description:
        "Majestueusement dressée au centre de la commune de Lastourville à un carrefour considéré à juste titre comme la plaque incontournable des rencontres de cette ville.",
    },
    {
      image: "/Nyonda.jpg",
      date: "Qui est Nyonda Makita ?",
      title: "Nyonda Makita, un résilient",
      description:
        "Nyonda Makita, de son vrai nom Mavurulu, incarne l’insoumission, la dignité et le droit des populations autochtones à disposer d’elles-mêmes.",
    },
    {
      image: "/emane.jpg",
      date: "Emane Ntole, le résistant de Ndjolé",
      title: "Écrire, rêver et créer de nouveaux mondes",
      description:
        "L’histoire nous dit qu’à la suite d’un accident de chasse, un Kota de Djambala tua un Fang de Nseghe, faisant naître un conflit mortel entre les habitants des deux villages.",
    },
  ];

  const ArticleCard = ({ image, date, title, description }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs text-gray-500 uppercase">{date}</p>
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Icônes décoratives React Icons */}
      <GiSwordman className="text-gray-400 opacity-10 text-[120px] absolute top-10 left-10 rotate-12 pointer-events-none" />
      <GiShield className="text-gray-400 opacity-10 text-[150px] absolute bottom-10 right-10 rotate-45 pointer-events-none" />
      <GiFire className="text-orange-300 opacity-10 text-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Histoire des Guerriers
        </h2>
        <p className="mt-3 text-lg text-gray-700 max-w-3xl mx-auto">
          Découvrez l'héritage fascinant des héros gabonais à travers les récits et explorations culturelles.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex gap-6 px-4">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={articleVariants}
            className="h-full"
          >
            <ArticleCard {...article} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
