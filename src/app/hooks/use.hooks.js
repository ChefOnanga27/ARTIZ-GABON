"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useProduct } from "@/hooks";

export default function ProductDetails({ params }) {
  const router = useRouter();
  const { product, loading } = useProduct(params.id);

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    categorie: "",
    prix: "",
    image: null,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        nom: product.nom || "",
        description: product.description || "",
        categorie: product.categorie || "",
        prix: product.prix || "",
        image: null,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("nom", formData.nom);
    form.append("description", formData.description);
    form.append("categorie", formData.categorie);
    form.append("prix", formData.prix);
    if (formData.image) form.append("image", formData.image);

    try {
      const res = await fetch(
        `https://artiz-1ly2.onrender.com/api/admin/articles/${params.id}`,
        {
          method: "PUT",
          body: form,
        }
      );

      if (res.ok) {
        router.push("/dashboard/products");
      } else {
        console.error("Erreur lors de la mise à jour");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (!product) return <div>Produit introuvable</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Modifier le produit</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="text"
          name="categorie"
          placeholder="Catégorie"
          value={formData.categorie}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="number"
          name="prix"
          placeholder="Prix"
          value={formData.prix}
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}
