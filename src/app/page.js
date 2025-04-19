"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BestSellerCard from "./components/BestSellerCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCardWithGrid from "./components/ProductCardWithGrid";
import { FaTruck, FaCreditCard, FaLock, FaPhone } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import Loader from "./components/Loader";

const categories = [
  { src: "/d1.png", alt: "Décoration" },
  { src: "/sc1.png", alt: "Sculpture" },
  { src: "/g1.png", alt: "Cosmétique" },
  { src: "/inf1.png", alt: "Bien-être" },
  { src: "/p1.png", alt: "Alimentation" },
  { src: "/boisson1.png", alt: "Boisson" },
  { src: "/cat.jpg", alt: "Livre" },
  { src: "/cat.jpg", alt: "Masque" },
  { src: "/cat.jpg", alt: "Décoration" },
  { src: "/cat.jpg", alt: "Accessoires" },
];

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  {
    icon: <FaTruck size={30} />,
    title: "Livraison",
    description: "Offrir des options d'expédition accélérées et assurer une livraison rapide des commandes, avec des informations de suivi disponibles pour les clients.",
  },
  {
    icon: <FaCreditCard size={30} />,
    title: "Commande",
    description: "Vous avez la possibilité de payer une avance avant la livraison et payer le reste plus tard.",
  },
  {
    icon: <FaLock size={30} />,
    title: "Paiement Sécurisé",
    description: "Vous avez la possibilité de payer via Airtel Money, Mobile Cash ou par carte bancaire.",
  },
  {
    icon: <FaPhone size={30} />,
    title: "24/7 Support",
    description: "Phone and Email support",
  },
];

const bestSellers = [
  {
    id: 1,
    name: "Masque Gabonais",
    image: "/sav.png",
    oldPrice: 999,
    price: 899,
    discount: 10,
    reviews: 97,
  },
  {
    id: 2,
    name: "Statue en bois",
    image: "/sav.png",
    oldPrice: 1200,
    price: 950,
    discount: 20,
    reviews: 54,
  },
  {
    id: 3,
    name: "Tissu traditionnel",
    image: "/sav.png",
    oldPrice: 300,
    price: 250,
    discount: 15,
    reviews: 32,
  },
];

const missions = [
  {
    title: "Valoriser l'Artisanat Gabonais",
    description: "👉 Offrir une vitrine numérique aux artisans pour exposer et vendre leurs créations à un public plus large, local et international"
  },
  {
    title: "Faciliter l'accès au marché pour les artisans",
    description: "👉 Simplifier le processus de vente en mettant à disposition une plateforme intuitive et un système de paiement sécurisé.",
  },
  {
    title: "Promouvoir une Consommation Responsable",
    description: "Aku cocok menggunakan produk night cream white secret dari wardah ini. Buat kulit wajahku terasa lem",
  },
  {
    title: "Encourager la consommation locale et responsable",
    description: "👉 Sensibiliser le public à l'importance d'acheter des produits faits main, issus du savoir-faire local, afin de dynamiser l'économie artisanale du Gabon.",
  },
];

const testimonials = [
  {
    name: "Marie N.",
    role: "Artisane",
    content: "Depuis que j'ai rejoint Artiz, mes ventes ont augmenté de 150%. La plateforme est facile à utiliser et m'a permis de toucher des clients dans tout le Gabon.",
    avatar: "/avatar1.jpg"
  },
  {
    name: "Jean K.",
    role: "Client",
    content: "Je suis impressionné par la qualité des produits artisanaux disponibles sur Artiz. Les livraisons sont rapides et le service client est très réactif.",
    avatar: "/avatar2.jpg"
  },
  {
    name: "Amina B.",
    role: "Artisane",
    content: "Artiz m'a donné une visibilité que je n'aurais jamais pu avoir seule. Je recommande cette plateforme à tous les artisans gabonais!",
    avatar: "/avatar3.jpg"
  }
];

const FormOverlay = ({ handleClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 flex items-center justify-center z-50"
  >
    <div className="bg-transparent bg-opacity-20 backdrop-blur-sm p-6 rounded-lg w-full max-w-md">
      <h2 className="font-bold text-3xl text-center mb-4">Formulaire d'inscription</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Soumettre
        </button>
      </form>
      <button
        onClick={handleClose}
        className="mt-4 text-blue-600 underline block mx-auto"
      >
        Fermer
      </button>
    </div>
  </motion.div>
);

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const visibleItems = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayVisible(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-cover bg-center">
  <Image
    src="/image.png"
    alt="Background"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
    <motion.h1
      className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-md"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Bienvenue sur <br />
      <span className="inline-block bg-white text-black px-5 py-2 rounded-md mt-4">
        ARTIZ
      </span>
    </motion.h1>

    <motion.p
      className="mt-6 text-lg md:text-xl lg:text-2xl text-white font-light drop-shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      L'artisanat, une histoire dans chaque pièce. <br />
      Des créations qui parlent du Gabon.
    </motion.p>

    <motion.button
      onClick={handleClick}
      className="mt-8 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      Inscrivez-vous maintenant
    </motion.button>
  </div>
</section>


      {/* Categories Carousel */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Catégories</h2>
            <button className="text-blue-600 hover:underline">Voir plus</button>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${index * (100 / visibleItems)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {categories.map((item, i) => (
                  <div key={i} className="flex-shrink-0 w-1/5">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                      <div className="relative aspect-square">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="p-2 text-center font-medium">{item.alt}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      
      <div className="p-3 bg-stone-600">
        <div className="gap-6 place-items-center flex justify-center">
          <BestSellerCard product={bestSellers[0]} />
        </div>
      </div>

      <ProductCardWithGrid />

      <section className="bg-black text-white py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos d'Artiz</h2>
            <p className="text-lg leading-relaxed">
              Artiz, bien plus qu'une plateforme : une passion pour l'artisanat gabonais.
              <br />
              Chez Artiz, nous croyons en la richesse et la beauté de l'artisanat gabonais. 
              Notre plateforme a été créée avec une mission simple mais puissante : 
              <strong> valoriser et promouvoir</strong> le savoir-faire des artisans locaux, tout en vous offrant 
              des créations uniques et authentiques.
            </p>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-5 w-full h-full border-4 border-white rounded-lg"></div>
              <Image
                src="/groupe.jpg"
                alt="Photo de Artiz"
                width={500}
                height={400}
                className="rounded-lg object-cover relative z-10 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    
      <section className="bg-gray-100 py-10" style={{ backgroundImage: "url('/font.png')" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="text-black">{service.icon}</div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos missions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold">{mission.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{mission.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/tisse.png"
                alt="Artisanat Gabonais"
                className="rounded-lg w-full max-w-sm object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nouvelle Section Témoignages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ce que disent nos clients et artisans
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ContactForm />
      </div>

      {/* Overlay */}
      {isOverlayVisible && <FormOverlay handleClose={handleCloseOverlay} />}
    </div>
  );
}