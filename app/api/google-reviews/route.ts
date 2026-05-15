import { NextResponse } from "next/server";
import {
  googleReviewDisplaySettings,
  googleReviewsEnv,
  placeholderReviewsPayload
} from "@/lib/google-reviews-config";

export async function GET() {
  try {
    const filtered = placeholderReviewsPayload.reviews.filter(
      (review) => review.rating >= googleReviewDisplaySettings.minRating
    );

    const truncated = filtered.map((review) => ({
      ...review,
      text:
        review.text.length > googleReviewDisplaySettings.maxReviewLength
          ? `${review.text.slice(0, googleReviewDisplaySettings.maxReviewLength).trim()}...`
          : review.text
    }));

    const placeholderResponse = {
      ...placeholderReviewsPayload,
      reviews: truncated
    };

    const usingPlaceholders =
      googleReviewsEnv.placeId === "REPLACE_LATER" ||
      googleReviewsEnv.apiKey === "REPLACE_LATER";

    if (usingPlaceholders) {
      return NextResponse.json(placeholderResponse);
    }

    // Google Places API integration will be connected here once real client details are available.
    // For now we return placeholder payload with the same response shape.
    return NextResponse.json(placeholderResponse);
  } catch {
    return NextResponse.json(placeholderReviewsPayload);
  }
}
