'use client';
import { ShoppingCart, Heart, Share2, Star, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';


export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Données du produit (à adapter avec vos données réelles)
  const product = {
    name: "Masque en bois artisanal",
    price: 6750,
    currency: "Fcfa",
    originalPrice: 8500,
    discount: "97",
    description: "Masque traditionnel sculpté à la main en bois d'ébène. Pièce unique réalisée par un artisan local.",
    details: [
      "Dimensions : 25cm x 18cm",
      "Poids : 450g",
      "Matériau : Bois d'ébène massif",
      "Origine : Artisanat local",
      "Livraison : 3-5 jours ouvrés"
    ],
    images: [
      "/masque-1.jpg",
      "/masque-2.jpg",
      "/masque-3.jpg",
      "/masque-details.jpg"
    ],
    rating: 4.7,
    reviews: 24,
    stock: 5
  };

  const relatedProducts = [
    { id: 2, name: "Statue en bois", price: 12500, image: "/statue-bois.jpg" },
    { id: 3, name: "Tableau mural", price: 8900, image: "/tableau-mural.jpg" },
    { id: 4, name: "Vase céramique", price: 5500, image: "/vase-ceramique.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Fil d'ariane */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <ChevronLeft size={16} className="mr-1" />
        <span className="hover:text-gray-700 cursor-pointer">Artisanat</span>
        <span className="mx-2">/</span>
        <span className="hover:text-gray-700 cursor-pointer">Masques</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Galerie d'images */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <div className="relative h-72">
              <Image 
                src={product.images[activeImage]} 
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex gap-6 border-none w-96">
            {product.images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setActiveImage(index)}
                className={`border rounded-md overflow-hidden h-20 ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
              >
                <Image 
                  src={img}
                  alt={`Vue ${index + 1} du produit`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Détails du produit */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  size={18}
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews} avis)</span>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gray-900 mr-3">
                {product.price.toLocaleString()} {product.currency}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice.toLocaleString()} {product.currency}
                </span>
              )}
              {product.discount && (
                <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>
            {product.stock > 0 ? (
              <span className="text-sm text-green-600">En stock ({product.stock} disponibles)</span>
            ) : (
              <span className="text-sm text-red-600">Rupture de stock</span>
            )}
          </div>

          <div className="mb-6">
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-700 mr-3">Quantité :</span>
              <div className="flex border rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
                
              </div>
              <button className=" bg-black hover:bg-gray-900 text-white py-1 px-3 rounded-md flex items-center justify-center">
                Ajouter au panier
              </button>
            </div>

            <div className="flex ">
             
              {/* <button className="p-3 border rounded-md text-gray-700 hover:bg-gray-50">
                <Heart size={20} />
              </button>
              <button className="p-3 border rounded-md text-gray-700 hover:bg-gray-50">
                <Share2 size={20} />
              </button> */}
            </div>
          </div>

          {/* <div className="text-sm text-gray-500">
            <p>Livraison gratuite à partir de 20.000 Fcfa</p>
            <p>Retours acceptés sous 14 jours</p>
          </div> */}
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-16">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Produits similaires</h2>
        <div className="flex w-full gap-6 flex-wrap justify-center">
  {relatedProducts.map((product) => (
    <div 
      key={product.id} 
      className="w-80 h-[420px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
    >
      <div className="relative w-full h-56">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between">
        <h3 className="font-medium text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-900 font-bold text-xl">{product.price.toLocaleString()} Fcfa</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}