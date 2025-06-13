// 'use client';
// import { ShoppingCart, Heart, Share2, Star, ChevronLeft } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function ProductPage() {
//   const [quantity, setQuantity] = useState(1);
//   const [activeImage, setActiveImage] = useState(0);
//   const [product, setProduct] = useState(null);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         // const res = await fetch('https://artiz-1ly2.onrender.com/api/admin/articles');
//         const res = await fetch(`https://artiz-1ly2.onrender.com/api/admin/articles/id`);

//         const data = await res.json();
//         if (data && data.length > 0) {
//           const mainProduct = data[0];
//           setProduct({
//             id: mainProduct.id || null,
//             name: mainProduct.nom || "Produit sans nom",
//             categorie: mainProduct.categorie || "Inconnue",
//             price: mainProduct.prix || 0,
//             currency: "Fcfa",
//             originalPrice: mainProduct.originalPrice || null,
//             discount: mainProduct.discount || null,
//             description: mainProduct.description || "",
//             details: mainProduct.details || [],
//             images: mainProduct.images && mainProduct.images.length > 0 ? mainProduct.images : ["/placeholder.png"],
//             rating: mainProduct.rating || 0,
//             reviews: mainProduct.reviews || 0,
//             stock: mainProduct.stock || 0,
//           });
//           setRelatedProducts(data.slice(1, 4).map(p => ({
//             id: p.id,
//             name: p.nom || "Produit sans nom",
//             price: p.prix || 0,
//             image: p.images && p.images.length > 0 ? p.images[0] : "/placeholder.png",
//           })));
//         }
//       } catch (error) {
//         console.error("Erreur lors du fetch des produits:", error);
//       }
//     }
//     fetchProducts();
//   }, []);

//   function prepareFormData() {
//     const form = new FormData();
//     form.append('nom', product.name || '');
//     form.append('description', product.description || '');
//     form.append('categorie', product.categorie || '');
//     form.append('prix', product.price?.toString() || '0');
//     // On envoie ici l’URL de la première image (à adapter si backend attend un fichier)
//     if (product.images && product.images.length > 0) {
//       form.append('image', product.images[0]);
//     }
//     return form;
//   }

//   if (!product) {
//     return <div className="p-8 text-center">Chargement du produit...</div>;
//   }

  // return (
  //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  //     {/* Fil d'ariane */}
  //     <div className="flex items-center text-sm text-gray-500 mb-6">
  //       <ChevronLeft size={16} className="mr-1" />
  //       <span className="hover:text-gray-700 cursor-pointer">Artisanat</span>
  //       <span className="mx-2">/</span>
  //       <span className="hover:text-gray-700 cursor-pointer">Masques</span>
  //       <span className="mx-2">/</span>
  //       <span className="text-gray-700 font-medium">{product.name}</span>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
  //       {/* Galerie d'images */}
  //       <div>
  //         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
  //           <div className="relative h-72">
  //             <Image
  //               src={product.images[activeImage]}
  //               alt={product.name}
  //               fill
  //               className="object-contain"
  //               sizes="(max-width: 768px) 100vw, 50vw"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex gap-6 border-none w-96 overflow-x-auto">
  //           {product.images.map((img, index) => (
  //             <button
  //               key={index}
  //               onClick={() => setActiveImage(index)}
  //               className={`border rounded-md overflow-hidden h-20 ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
  //               aria-label={`Voir l'image ${index + 1}`}
  //             >
  //               <Image
  //                 src={img}
  //                 alt={`Vue ${index + 1} du produit`}
  //                 width={80}
  //                 height={80}
  //                 className="object-cover w-full h-full"
  //               />
  //             </button>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Détails du produit */}
  //       <div>
  //         <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

  //         <div className="flex items-center mb-4">
  //           <div className="flex">
  //             {[...Array(5)].map((_, i) => (
  //               <Star
  //                 key={i}
  //                 size={18}
  //                 className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
  //               />
  //             ))}
  //           </div>
  //           <span className="text-sm text-gray-500 ml-2">({product.reviews} avis)</span>
  //         </div>

  //         <div className="mb-6">
  //           <div className="flex items-center">
  //             <span className="text-3xl font-bold text-gray-900 mr-3">
  //               {product.price !== undefined ? product.price.toLocaleString() : "—"} {product.currency || "Fcfa"}
  //             </span>
  //             {product.originalPrice !== undefined && product.originalPrice !== null && (
  //               <span className="text-lg text-gray-500 line-through">
  //                 {product.originalPrice.toLocaleString()} {product.currency || "Fcfa"}
  //               </span>
  //             )}
  //             {product.discount && (
  //               <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
  //                 -{product.discount}%
  //               </span>
  //             )}
  //           </div>
  //           {product.stock > 0 ? (
  //             <span className="text-sm text-green-600">En stock ({product.stock} disponibles)</span>
  //           ) : (
  //             <span className="text-sm text-red-600">Rupture de stock</span>
  //           )}
  //         </div>

  //         <div className="mb-6">
  //           <p className="text-gray-700 mb-4">{product.description}</p>
  //           <ul className="space-y-2">
  //             {product.details && product.details.length > 0 ? product.details.map((detail, i) => (
  //               <li key={i} className="flex items-start">
  //                 <span className="text-gray-500 mr-2">•</span>
  //                 <span className="text-gray-700">{detail}</span>
  //               </li>
  //             )) : <li>Aucun détail disponible.</li>}
  //           </ul>
  //         </div>

  //         <div className="border-t border-b border-gray-200 py-6 mb-6">
  //           <div className="flex items-center gap-4 mb-4">
  //             <span className="text-gray-700 mr-3">Quantité :</span>
  //             <div className="flex border rounded-md">
  //               <button
  //                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
  //                 className="px-3 py-1 text-gray-600 hover:bg-gray-100"
  //               >
  //                 -
  //               </button>
  //               <span className="px-4 py-1 border-x">{quantity}</span>
  //               <button
  //                 onClick={() => setQuantity(quantity + 1)}
  //                 className="px-3 py-1 text-gray-600 hover:bg-gray-100"
  //               >
  //                 +
  //               </button>
  //             </div>
  //             <button
  //               className="bg-black hover:bg-gray-900 text-white py-1 px-3 rounded-md flex items-center justify-center"
  //               onClick={() => {
  //                 const formData = prepareFormData();
  //                 // Affiche dans la console les données du form pour vérification
  //                 for (let [key, value] of formData.entries()) {
  //                   console.log(key, value);
  //                 }
  //                 alert(`FormData prêt à être envoyé pour ${quantity} produit(s)`);
  //                 // Ici tu peux envoyer formData avec fetch POST si besoin
  //               }}
  //             >
  //               Ajouter au panier
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Produits similaires */}
  //     <div className="mt-16">
  //       <h2 className="text-xl font-bold text-gray-900 mb-6">Produits similaires</h2>
  //       <div className="flex w-full gap-6 flex-wrap justify-center">
  //         {relatedProducts.length > 0 ? relatedProducts.map((prod) => (
  //           <div
  //             key={prod.id}
  //             className="w-80 h-[420px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
  //           >
  //             <div className="relative w-full h-56">
  //               <Image
  //                 src={prod.image}
  //                 alt={prod.name}
  //                 fill
  //                 className="object-cover"
  //                 sizes="(max-width: 768px) 100vw, 20vw"
  //               />
  //             </div>
  //             <div className="p-4 flex flex-col flex-1 justify-between">
  //               <h3 className="font-medium text-lg text-gray-900 mb-2">{prod.name}</h3>
  //               <p className="text-gray-900 font-bold text-xl">{prod.price !== undefined ? prod.price.toLocaleString() : "—"} Fcfa</p>
  //             </div>
  //           </div>
  //         )) : (
  //           <p>Aucun produit similaire disponible.</p>
  //         )}
  //       </div>
  //     </div>
  //   </div>
//   );
// }
'use client';

import { ShoppingCart, Heart, Share2, Star, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ProductPage() {
  const { id } = useParams(); // ✅ Récupère l'ID dynamique depuis l'URL

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        const res = await fetch(`https://artiz-1ly2.onrender.com/api/admin/articles`);
        const data = await res.json();

        setProduct({
          id: data.id || null,
          name: data.nom || "Produit sans ",
          categorie: data.categorie || "Inconnue",
          price: data.prix || 0,
          currency: "Fcfa",
          originalPrice: data.originalPrice || null,
          discount: data.discount || null,
          description: data.description || "",
          details: data.details || [],
          images: data.images?.length ? data.images : ["/placeholder.png"],
          rating: data.rating || 0,
          reviews: data.reviews || 0,
          stock: data.stock || 0,
        });

        // Tu peux ici aussi charger d'autres produits si besoin
        const relatedRes = await fetch('https://artiz-1ly2.onrender.com/api/admin/articles');
        const relatedData = await relatedRes.json();
        setRelatedProducts(relatedData.filter(p => p._id !== data._id).slice(0, 3).map(p => ({
          id: p._id,
          name: p.nom,
          price: p.prix,
          image: p.images?.[0] || '/placeholder.png',
        })));

      } catch (error) {
        console.error("Erreur lors du fetch du produit:", error);
      }
    }

    fetchProduct();
  }, [id]);

  function prepareFormData() {
    const form = new FormData();
    form.append('nom', product.name || '');
    form.append('description', product.description || '');
    form.append('categorie', product.categorie || '');
    form.append('prix', product.price?.toString() || '0');
    if (product.images?.length > 0) {
      form.append('image', product.images[0]);
    }
    return form;
  }

  if (!product) {
    return <div className="p-8 text-center">Chargement du produit...</div>;
  }

  // 👉 Rendu HTML : inchangé
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex gap-6 border-none w-96 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`border rounded-md overflow-hidden h-20 ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
                  aria-label={`Voir l'image ${index + 1}`}
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
                  {product.price !== undefined ? product.price.toLocaleString() : "—"} {product.currency || "Fcfa"}
                </span>
                {product.originalPrice !== undefined && product.originalPrice !== null && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} {product.currency || "Fcfa"}
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
                {product.details && product.details.length > 0 ? product.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                )) : <li>Aucun détail disponible.</li>}
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
                <button
                  className="bg-black hover:bg-gray-900 text-white py-1 px-3 rounded-md flex items-center justify-center"
                  onClick={() => {
                    const formData = prepareFormData();
                    // Affiche dans la console les données du form pour vérification
                    for (let [key, value] of formData.entries()) {
                      console.log(key, value);
                    }
                    alert(`FormData prêt à être envoyé pour ${quantity} produit(s)`);
                    // Ici tu peux envoyer formData avec fetch POST si besoin
                  }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Produits similaires */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Produits similaires</h2>
          <div className="flex w-full gap-6 flex-wrap justify-center">
            {relatedProducts.length > 0 ? relatedProducts.map((prod) => (
              <div
                key={prod.id}
                className="w-80 h-[420px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <h3 className="font-medium text-lg text-gray-900 mb-2">{prod.name}</h3>
                  <p className="text-gray-900 font-bold text-xl">{prod.price !== undefined ? prod.price.toLocaleString() : "—"} Fcfa</p>
                </div>
              </div>
            )) : (
              <p>Aucun produit similaire disponible.</p>
            )}
          </div>
        </div>
      </div>
  );
}
