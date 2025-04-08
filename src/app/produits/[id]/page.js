import Image from "next/image";
import { notFound } from "next/navigation";

// Simule un appel API
async function getProductData() {
  return [
    {
      id: "masque-bois-001",
      name: "Masque en bois",
      image: "/cat.jpg",
      price: 6750,
      oldPrice: 7500,
      discount: 10,
      reviews: 97,
      description: "Masque traditionnel gabonais sculpté à la main en bois d'ébène.",
      details: "Fabriqué par des artisans locaux avec des techniques ancestrales."
    },
    // ... autres produits
  ];
}

export async function generateStaticParams() {
  const products = await getProductData();
  return products.map(product => ({ id: product.id }));
}

export default async function ProductPage({ params }) {
  const products = await getProductData();
  const product = products.find(p => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6">
              <div className="relative h-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              
              <div className="flex items-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">({product.reviews} avis)</span>
              </div>

              <div className="mt-6">
                <span className="text-3xl font-bold text-gray-900">{product.price}Fcfa</span>
                {product.oldPrice && (
                  <span className="ml-2 text-lg text-gray-500 line-through">{product.oldPrice}Fcfa</span>
                )}
                {product.discount && (
                  <span className="ml-2 text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <p className="mt-6 text-gray-700">{product.description}</p>
              <p className="mt-4 text-gray-600">{product.details}</p>

              <div className="mt-8 flex space-x-4">
                <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Ajouter au panier
                </button>
                <button className="px-6 py-3 border border-black text-black rounded-lg hover:bg-blue-50 transition">
                  Commander maintenant
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section détails supplémentaires */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Détails du produit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold">Caractéristiques</h3>
              <ul className="mt-2 space-y-2">
                <li>• Matériau: Bois d'ébène</li>
                <li>• Dimensions: 25cm x 15cm</li>
                <li>• Poids: 500g</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Livraison</h3>
              <p className="mt-2">Délai de livraison: 2-5 jours ouvrables</p>
              <p>Frais de port: Offerts à partir de 50.000Fcfa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}