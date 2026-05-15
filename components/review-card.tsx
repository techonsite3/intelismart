"use client";

import { Star } from "lucide-react";
import type { ReviewItem } from "@/lib/google-reviews-config";

type ReviewCardProps = {
  review: ReviewItem;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review-card">
      <div className="review-card-top">
        <div className="review-card-author">
          <strong>{review.authorName}</strong>
          <span className="review-card-source">Google Review</span>
        </div>
        <span>{formatDate(review.publishedAt)}</span>
      </div>
      <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={`${review.id}-${index}`}
            size={16}
            fill={index < review.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p>{review.text}</p>
    </article>
  );
}
