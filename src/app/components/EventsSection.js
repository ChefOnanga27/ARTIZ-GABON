"use client";

export default function EventsSection() {
  const events = [
    {
      image: "/fe2.jpg",
      title: "Langues et diversité ethnique",
      description: "Le Gabon est un pays multiethnique où cohabitent plus de 40 groupes ethniques aux cultures variées.",
    },
    {
      image: "/fei.jpg",
      title: "Gastronomie Gabonaise : Saveurs de la Forêt et de l'Océan",
      description: "L'art gabonais est reconnu mondialement, notamment pour ses sculptures et ses masques.",
    },
    {
      image: "/fe1.jpg",
      title: "L'Art et l'Artisanat Gabonais",
      description: "L'art gabonais est reconnu mondialement, notamment pour ses sculptures et ses masques.",
    },
    {
      image: "/fe3.jpg",
      title: "Musique et Danse : L'Âme du Gabon",
      description: "La musique et la danse jouent un rôle clé dans la culture gabonaise, aussi bien dans les cérémonies traditionnelles que dans la scène contemporaine.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Culture gabonaise</h2>
        
        <div className="mt-8 flex gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500 uppercase">Programmation</p>
                <h3 className="font-bold text-md mt-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}