import HighlightItem from "./HighlightItem";

export default function HighlightSection() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">US et Coutume</h2>
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <HighlightItem 
          image="/bwiti.jpg"
          organization="Le Bwiti"
          title="DLe Bwiti est une pratique spirituelle et philosophique centrale sur la connaissance de soi"
          description="Il permet la connexion avec les ancêtres et la compréhension du monde invisible. Il est souvent associé à l'iboga, une plante sacrée utilisée pour les initiations. Déroulement du Rite. Le Bwiti permet à l'initié d'accéder à une nouvelle compréhension de son existence et de renforcer son lien avec le monde spirituel et la nature."
        />
        <HighlightItem 
          image="/mikuyi.jpg"
          organization="Le Mukuyi "
          title="Le Mukuyi est un rite de passage pratiqué par l'ethnie Punu. Il est célèbre pour ses masques blancs aux traits raffinés."
          description="Le Mukuyi est un rituel de passage à l'âge adulte pour les jeunes filles. Il est également lié à la protection des ancêtres et aux esprits bienveillants.Le Mukuyi marque l’entrée dans la maturité et prépare la jeune fille à son rôle futur dans la société."
        />
      </div>
    </section>
  );
}
