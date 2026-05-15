"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { ReviewCard } from "@/components/review-card";
import {
  googleReviewDisplaySettings,
  placeholderReviewsPayload,
  type ReviewsPayload
} from "@/lib/google-reviews-config";

function getVisibleCount(width: number) {
  if (width < 768) {
    return 1;
  }

  if (width < 1200) {
    return 2;
  }

  return 3;
}

export function GoogleReviewsSection() {
  const [data, setData] = useState<ReviewsPayload>(placeholderReviewsPayload);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          cache: "no-store"
        });

        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as ReviewsPayload;

        if (!payload?.reviews?.length) {
          return;
        }

        setData(payload);
      } catch {
        setData(placeholderReviewsPayload);
      }
    }

    fetchReviews();
  }, []);

  useEffect(() => {
    function onResize() {
      setVisibleCount(getVisibleCount(window.innerWidth));
    }

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (data.reviews.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % data.reviews.length);
    }, googleReviewDisplaySettings.autoplayMs);

    return () => window.clearInterval(timer);
  }, [data.reviews.length]);

  const visibleReviews = useMemo(() => {
    const items = data.reviews;

    if (items.length <= visibleCount) {
      return items;
    }

    return Array.from({ length: visibleCount }, (_, offset) => {
      const index = (activeIndex + offset) % items.length;
      return items[index];
    });
  }, [activeIndex, data.reviews, visibleCount]);

  const canOpenReviews = data.reviewsUrl !== "REPLACE_LATER";
  const reviewsHref = canOpenReviews ? data.reviewsUrl : "#";

  return (
    <section className="google-reviews-section" aria-label="Google customer reviews">
      <div className="google-reviews-head">
        <p className="label">Google Reviews</p>
        <h2>What Clients Are Saying</h2>
        <p>Real feedback from organizations and teams that trust Intelismart.</p>
      </div>

      <div className={`google-reviews-grid count-${visibleReviews.length + 1}`}>
        {visibleReviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}

        <a
          className="google-brand-panel"
          href={reviewsHref}
          target={canOpenReviews ? "_blank" : undefined}
          rel={canOpenReviews ? "noopener noreferrer" : undefined}
          aria-disabled={!canOpenReviews}
          aria-label={`View all Google reviews. Average rating ${data.averageRating} from ${data.totalReviews} reviews`}
        >
          <div className="google-brand-lockup">
            <span className="google-glyph" aria-hidden="true">
              <span className="google-glyph-core" />
            </span>
            <div className="google-brand-copy">
              <span className="google-wordmark" aria-label="Google">
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
              </span>
              <strong>Reviews</strong>
            </div>
          </div>

          <div className="google-brand-score">
            <span>{data.averageRating.toFixed(1)}</span>
            <div className="google-brand-stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={`brand-star-${index}`} size={18} fill="currentColor" />
              ))}
            </div>
            <small>Based on {data.totalReviews} reviews</small>
          </div>

          <span className="google-reviews-link">
            View all reviews
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
