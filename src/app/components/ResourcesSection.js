import ResourceItem from "./ResourceItem";
import Link from "next/link";
import Image from "next/image";

export default function ResourcesSection() {
  return (

<section className="relative h-screen text-white flex items-center">
  {/* ✅ Container image avec taille explicite */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/ele.png"
      alt="éléphant"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-opacity-60 z-10" />
  </div>

  {/* ✅ Contenu textuel au-dessus de l'image */}
  <div className="relative z-20 max-w-6xl mx-auto p-6">
    <p className="text-lg uppercase tracking-widest">Parcours permanent</p>
    <h1 className="text-5xl font-bold mt-2 max-w-lg">
      Découvrez les trésors du patrimoine gabonais
    </h1>
    <p className="mt-4 text-lg">
      Entre traditions ancestrales et créations contemporaines, prolongez dans l'histoire des peuples gabonais à travers des artefacts, des sculptures, et des récits fascinants.
    </p>

    <Link href="/galerie">
      <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-lg flex items-center">
        Explorer les collections <span className="ml-2">➝</span>
      </button>
    </Link>
  </div>

  <span className="absolute top-4 right-6 text-white text-lg z-20">1/5</span>
</section>


  );
}
