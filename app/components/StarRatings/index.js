"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar
              className={`w-5 h-5 ${
                value <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
