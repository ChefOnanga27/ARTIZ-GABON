"use client";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const cards = [
  {
    title: "Voyager à travers les couleurs du drapeau",
    label: "Artist",
    image: "/gabon.gif",
  },
  {
    title: "La danse du Haut Ogooué",
    label: "Art Movement",
    image: "/danse.jpeg",
  },
  {
    title: "Le bonheur",
    label: "Artwork",
    image: "/bébé.jpeg",
  },
  {
    title: "Les plateaux Batéké",
    label: "Story",
    items: "Dance like nobody's watching",
    image: "/plateaux.jpeg",
  },
  {
    title: "Singe Mendril",
    label: "Artist",
    items: "78 items",
    image: "/singe.jpeg",
  },
  {
    title: "l'Art",
    label: "Collection",
    items: "320 items",
    image: "/Art.jpeg",
  },
  {
    title: "The Blue Rider",
    label: "Art Movement",
    items: "56 items",
    image: "/logos.png",
  },
  {
    title: "10 Dancing Artworks",
    label: "Story",
    items: "Dance like nobody's watching",
    image: "/fille.jpeg",
  },
  {
    title: "Singe Mendril",
    label: "Artist",
    items: "78 items",
    image: "/singe.jpeg",
  },
];

const handleDownload = async (imagePath) => {
  const fileName = imagePath.split("/").pop();
  const response = await fetch(imagePath);
  const blob = await response.blob();

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default function ArtworksPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Hero */}
      <div className="relative h-96 md:h-screen max-h-[580px] w-full">
        <Image
          src="/tortue.gif"
          alt="Culture Gabonaise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Découvrez <br /> les richesses culturelles
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto md:mx-0">
              Explorez les traditions, tenues et rituels uniques du mariage coutumier gabonais
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium backdrop-blur-sm transition">
                Explorez
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto p-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Notre Patrimoine en Images
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une collection visuelle des traditions gabonaises à travers les âges
          </p>
        </div>


   <div className="flex flex-wrap gap-4">
  {cards.map((card, index) => (
    <div
      key={index}
      className="w-full sm:w-[48%] md:w-[31%] aspect-[4/3] relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover"
      />

      <button
        onClick={() => handleDownload(card.image)}
        className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
        title="Télécharger l’image"
      >
        <FiDownload size={18} />
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
        <span className="text-xs text-white bg-blue-600 rounded-full px-3 py-1 w-fit mb-2">
          {card.label}
        </span>
        <h2 className="text-white text-lg font-semibold">{card.title}</h2>
        {card.items && (
          <p className="text-sm text-white/80 mt-1">{card.items}</p>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
