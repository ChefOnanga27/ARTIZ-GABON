import ResourceItem from "./ResourceItem";

export default function ResourcesSection() {
  return (
    <section className="relative h-screen bg-black/5 text-white flex items-center">

  <img 
    src="/mariage.jpg" 
    alt="Parcours permanent" 
    className="absolute inset-0 w-full h-full object-cover opacity-80 z-0" 
  />

 
  <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

  <div className="relative z-20 max-w-6xl mx-auto p-6">
    <p className="text-lg uppercase tracking-widest">Parcours permanent</p>
    <h1 className="text-5xl font-bold mt-2 max-w-lg">
      Découvrez les trésors du patrimoine gabonais
    </h1>
    <p className="mt-4 text-lg">
      Entre traditions ancestrales et créations contemporaines, explorez les collections uniques du Musée National du Gabon. Plongez dans l'histoire des peuples gabonais à travers des artefacts, des sculptures, et des récits fascinants.
    </p>
    <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg shadow-lg flex items-center">
      Explorer les collections <span className="ml-2">➝</span>
    </button>
  </div>

  
  <span className="absolute top-4 right-6 text-white text-lg z-20">1/5</span>
</section>

  );
}
