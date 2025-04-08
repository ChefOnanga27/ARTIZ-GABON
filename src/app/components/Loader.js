import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <Image 
        src="/LOGO .png"  // Ton logo
        alt="Chargement..."
        width={400}
        height={400}
        className="animate-pulse" // Tu peux aussi ajouter une animation
      />
    </div>
  );
}
