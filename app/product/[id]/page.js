"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Shoes from "@/public/prod1.png";
import Headphones from "@/public/prod2.png";
import Bag from "@/public/prod3.png";
import StarRating from "../../components/StarRatings";
import { useCartStore } from "@/app/store/CartStore";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Dummy product data (replace with real data fetch)
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 120,
      image: Shoes,
      category: "clothing",
      description: "High-quality running shoes for all terrains.",
    },
    {
      id: 2,
      name: "Headphones",
      price: 25,
      image: Headphones,
      category: "electronics",
      description: "Noise-cancelling headphones with superior sound quality.",
    },
    { id: 3, name: "Bag", price: 85, image: Bag, category: "clothing",description: "Stylish and spacious bag for everyday use." },
    { id: 4, name: "Toaster", price: 10, image: Shoes, category: "home",description: "Compact toaster with multiple settings for perfect toast." },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 75,
      image: Bag,
      category: "electronics",
      description: "Portable Bluetooth speaker with deep bass and clear sound.",
    },
    { id: 6, name: "Microwave", price: 69, image: Shoes, category: "home",description: "Efficient microwave with multiple cooking presets." },
    {
      id: 7,
      name: "Laptop",
      price: 500,
      image: Headphones,
      category: "electronics",
      description: "High-performance laptop with 16GB RAM and 512GB SSD.",
    },
    { id: 8, name: "Jacket", price: 170, image: Shoes, category: "clothing",description: "Warm and stylish jacket for cold weather." },
    { id: 9, name: "Lamp", price: 40, image: Bag, category: "home",description: "Elegant lamp with adjustable brightness." },
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
