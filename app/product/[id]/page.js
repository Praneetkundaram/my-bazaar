"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Shoes from "@/public/prod1.png";
import StarRating from "../../components/StarRatings/page";
import { useCartStore } from "@/app/store/CartStore";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Dummy product data (replace with real data fetch)
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 49.99,
      description:
        "High-performance running shoes with breathable mesh and extra cushioning.",
      category: "Footwear",
      image: Shoes,
    },
    {
      id: 2,
      name: "Sneakers",
      price: 59.99,
      description: "Cool and casual sneakers with modern design.",
      category: "Footwear",
      image: Shoes,
    },
  ];
  const product = products.find((p) => p.id === parseInt(id));
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="max-w-6xl mx-auto h-[100%] p-6 mt-6 flex flex-col justify-center items-center lg:flex-row gap-10">
      {/* Image Section */}
      <div className="md:flex-1">
        <div className="md:w-full size-75 h-[400px] w-full relative">
          <Image
            src={product.image}
            alt={product.name}
            className="rounded-lg object-fit md:h-fit h-full w-fit"
          />
        </div>
      </div>
      {/* Details Section */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-bold text-[#002B60]">{product.name}</h1>
        <p className="text-xl text-[#0757A7] font-semibold">
          ${product.price.toFixed(2)}
        </p>
        <div>
          <StarRating />
        </div>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Category:</span> {product.category}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mt-4">
          <label htmlFor="qty" className="text-sm font-medium">
            Qty:
          </label>
          <input
            id="qty"
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-16 border rounded px-2 py-1"
          />
        </div>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-[#0757A7] text-white py-2 rounded cursor-pointer hover:bg-[#064a8b] transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
