import Image from "next/image";
import { FiDownload } from "react-icons/fi";


const cards = [
  {
    title: "Voyager à travers les couleurs du drapeau",
    label: "Artist",
    image: "/gabon.gif",
    featured: true,
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
    title: "Abstract Compositions",
    label: "Theme",
    items: "203 items",
    image: "/abstract.jpg",
  },
  {
    title: "Marché",
    label: "Research",
    items: "92 documents",
    image: "/Marché.jpeg",
  },
  {
    title: "Mangue",
    label: "Exhibition",
    items: "Opens next week",
    image: "/mangue.jpeg",
  },
  {
    title: "Plage de MAYUMBA",
    label: "Artist",
    items: "895 items",
    image: "/plage.jpeg",
    featured: true,
  },
  {
    title: "La fabuleuse Regab",
    label: "Colour explorer",
    items: "174 items",
    image: "/regab.jpeg",
  },
  {
    title: "Tresse au file",
    label: "Artwork",
    items: "Paul Klee's masterpiece",
    image: "/tresse.jpeg",
  },
  {
    title: "10 Dancing Artworks",
    label: "Story",
    items: "Dance like nobody's watching",
    image: "/fille.jpeg",
  },
  {
    title: "9 Provinces",
    label: "Artist",
    items: "78 items",
    image: "/province.jpeg",
  },
  {
    title: "Tenu Myenet",
    label: "Collection",
    items: "320 items",
    image: "/Tenue.jpeg",
  },
  {
    title: "Décoration",
    label: "Art Movement",
    items: "56 items",
    image: "/acc.jpeg",
  },
  {
    title: "Arachide",
    label: "Theme",
    items: "203 items",
    image: "/Arachides.jpeg",
  },
  {
    title: "Color Theory Studies",
    label: "Research",
    items: "92 documents",
    image: "/beauté.jpeg",
  },
  {
    title: "Pont en liane ",
    label: "Exhibition",
    items: "Opens next week",
    image: "/pont.jpeg",
    featured: true,
  },
];

export default function ArtworksPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="relative h-96 md:h-screen max-h-[550px] w-full">
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
              Découvrez   <br /> les richesses culturelles
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto md:mx-0">
              Explorez les traditions, tenues et rituels uniques du mariage coutumier gabonais
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition">
                Explorer les traditions
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium backdrop-blur-sm transition">
                Voir la galerie
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Contenu principal */}
        <div className="container mx-auto p-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Notre Patrimoine en Images
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une collection visuelle des traditions gabonaises à travers les âges
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                card.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${card.featured ? "h-80 md:h-96" : "h-64 md:h-72"}`}>
                {/* image normale */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* icône de téléchargement */}
                <a
                  href={card.image}
                  download
                  className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  title="Télécharger l’image"
                >
                  <FiDownload size={18} />
                </a>

                {/* overlay */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
