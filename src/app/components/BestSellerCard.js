import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const products = [
  {
    id: 1,
    name: "Couple floral DOUTSONA",
    images: ["/sc1.png", "/sc1.png", "/sc1.png"],
    price: 1750000,
    oldPrice: 200000,
    reviews: 120,
    whatsappLink: "https://wa.me/+24162635316",
  },
  {
    id: 2,
    name: "Gamme de produits",
    images: ["/g1.png", "/g2.png", "/gin1.png"],
    price: 18500,
    oldPrice: 20000,
    reviews: 85,
    whatsappLink: "https://wa.me/+24162635316",
  },
  {
    id: 3,
    name: "Infusion",
    images: ["/inf1.png", "/inf2.png", "/inf3.png"],
    price: 10000,
    oldPrice: 10999,
    reviews: 60,
    whatsappLink: "https://wa.me/+24162635316",
  },
];

const ProductCard = ({ product, isFeatured }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className={`bg-white shadow-lg rounded-xl p-4 flex flex-col items-center mt-20 ${isFeatured ? "w-full max-w-md" : "w-full max-w-xs"}`}>
  
      <div className="relative w-40 h-40">
        <Image
          src={selectedImage}
          alt={product.name}
          width={160}
          height={160}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="flex gap-2 mt-3">
        {product.images.map((img, index) => (
          <button key={index} onClick={() => setSelectedImage(img)}>
            <Image
              src={img}
              alt={`Miniature ${index + 1}`}
              width={40}
              height={40}
              className={`rounded-md object-cover border ${selectedImage === img ? "border-blue-500" : "border-gray-300"}`}
            />
          </button>
        ))}
      </div>

      <div className="text-center mt-4 w-full">
        <h3 className="font-semibold text-lg">{product.name}</h3>

     
        <div className="flex items-center justify-center gap-1 text-yellow-500 mt-2">
          {Array(5)
            .fill("⭐")
            .map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>

        <p className="text-xl font-bold mt-1">{product.price} Fcfa</p>
      </div>

     
      <div className="flex gap-3 mt-4">
        <button className="text-gray-600 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
          <AiOutlineHeart size={20} />
        </button>
        <a
          href={product.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 bg-green-100 p-3 rounded-full hover:bg-green-200 transition flex items-center"
        >
          <IoLogoWhatsapp size={20} />
        </a>
      </div>
    </div>
  );
};

export default function ProductsPage() {

  const bestSellingProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <div className="min-h-screen w-full bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Meilleures Ventes</h2>
    
      <section className="w-full max-w-6xl">
        <div className="flex justify-center gap-8 flex-wrap">
        
          <div className="w-80 h-auto">
            <ProductCard product={bestSellingProduct} isFeatured />
          </div>

        
          {otherProducts.map((product) => (
            <div key={product.id} className="w-80 h-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
