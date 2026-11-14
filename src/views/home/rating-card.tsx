"use client";

import type { Rating } from "@/data";
import { useState } from "react";
import RatingForm from "./rating-form";
import ThankYou from "./thank-you";

export default function RatingCard() {
  const [rating, setRating] = useState<Rating | null>(null);

  return (
    <div className="v-card">
      {rating === null ? (
        <RatingForm onSubmit={setRating} />
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
}
