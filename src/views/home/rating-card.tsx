"use client";

import type { Rating } from "@/data";
import { useState } from "react";
import RatingForm from "./rating-form";
import ThankYou from "./thank-you";

export default function RatingCard() {
  const [rating, setRating] = useState<Rating | null>(null);

  return (
    <div className="w-full max-w-82 rounded-card bg-radial-[100%_100%_at_top] from-card-glow to-card sm:max-w-103 sm:rounded-card-lg">
      {rating === null ? (
        <RatingForm onSubmit={setRating} />
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
}
