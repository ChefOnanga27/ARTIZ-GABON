import EventCard from "./EventCard";

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Culture gabonaise</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <EventCard
            image="/fe2.jpg"
            title="Langues et diversité ethnique"
            date="Le Gabon est un pays multiethnique où cohabitent plus de 40 groupes ethniques aux cultures variéesaux cultures variées."
          />
          <EventCard
            image="/fei.jpg"
            title="Gastronomie Gabonaise : Saveurs de la Forêt et de l'Océan"
            date="L'art gabonais est reconnu mondialement, notamment pour ses sculptures et ses masques."
          />
          <EventCard
            image="/fe1.jpg"
            title="L'Art et l'Artisanat Gabonais"
            date="L'art gabonais est reconnu mondialement, notamment pour ses sculptures et ses masques."
          />
          <EventCard
            image="/fe3.jpg"
            title="Musique et Danse : L'Âme du Gabon"
            date="La musique et la danse jouent un rôle clé dans la culture gabonaise, aussi bien dans les cérémonies traditionnelles que dans la scène contemporaine."
          />
        </div>
      </div>
    </section>
  );
}
