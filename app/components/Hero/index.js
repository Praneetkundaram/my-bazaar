"use client";
import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "../Navbar";
import StarRating from "../StarRatings";
import Shoes from "@/public/prod1.png";
import Headphones from "@/public/prod2.png";
import Bag from "@/public/prod3.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Running Shoes",
    price: 120,
    image: Shoes,
    category: "clothing",
  },
  {
    id: 2,
    name: "Headphones",
    price: 25,
    image: Headphones,
    category: "electronics",
  },
  { id: 3, name: "Bag", price: 85, image: Bag, category: "clothing" },
  { id: 4, name: "Toaster", price: 10, image: Shoes, category: "home" },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 75,
    image: Bag,
    category: "electronics",
  },
  { id: 6, name: "Microwave", price: 69, image: Shoes, category: "home" },
  {
    id: 7,
    name: "Laptop",
    price: 500,
    image: Headphones,
    category: "electronics",
  },
  { id: 8, name: "Jacket", price: 170, image: Shoes, category: "clothing" },
  { id: 9, name: "Lamp", price: 40, image: Bag, category: "home" },
];

const CATEGORIES = ["all", "electronics", "clothing", "home"];

export default function Hero() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [price, setPrice] = useState([0, 1000]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    const search = searchParams.get("search") || "";
    const priceParam = searchParams.get("price");
    const priceRange = priceParam
      ? priceParam.split("-").map(Number)
      : [0, 1000];

    setCategory(cat);
    setSearchTerm(search);
    setPrice(priceRange);
  }, [searchParams]);

  const updateFilters = (
    newCat = category,
    newPrice = price,
    newSearch = searchTerm
  ) => {
    const params = new URLSearchParams();
    if (newCat && newCat !== "all") params.set("category", newCat);
    if (newSearch) params.set("search", newSearch);
    if (newPrice) params.set("price", `${newPrice[0]}-${newPrice[1]}`);
    router.push(`?${params.toString()}`);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    updateFilters(cat, price, searchTerm);
  };

  const handlePriceChange = (e, newValue) => {
    setPrice(newValue);
    updateFilters(category, newValue, searchTerm);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    updateFilters(category, price, value);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const inCategory = category === "all" || product.category === category;
    const inPriceRange = product.price >= price[0] && product.price <= price[1];
    return matchesSearch && inCategory && inPriceRange;
  });

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />

      <div className="w-full flex md:flex-row flex-col mt-25 h-full mb-8">
        {/* Filter Sidebar */}
        <div className="relative md:mx-auto md:w-60 lg:w-65 h-85 w-full bg-[#0757A7] text-white p-6 md:rounded-xl space-y-4">
          <h2 className="text-2xl font-semibold">Filters</h2>

          <div>
            <h3 className="text-md font-medium mb-2">Category</h3>
            <div className="space-y-2">
              {CATEGORIES.map((cat) => (
                <label key={cat} className="flex items-center gap-2 capitalize">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-[#0757A7] size-5"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-md font-medium mb-2">Price</h3>
            <Slider
              value={price}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              sx={{
                color: "white",
                "& .MuiSlider-thumb": { backgroundColor: "white" },
                "& .MuiSlider-rail": { backgroundColor: "#ffffff40" },
              }}
            />
            <div className="flex justify-between text-sm">
              <span>{price[0]}</span>
              <span>{price[1]}</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-[90%] mt-5 md:mt-0 lg:w-[80%] md:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full h-[85vh] flex items-center justify-center">
              <p>No Products Found.</p>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#002B60]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <StarRating />
                  <button className="mt-2 w-full bg-[#0757A7] text-white py-2 rounded hover:bg-[#064a8b] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
