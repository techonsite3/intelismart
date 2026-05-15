export type ReviewItem = {
  id: string;
  authorName: string;
  rating: number;
  text: string;
  publishedAt: string;
};

export type ReviewsPayload = {
  averageRating: number;
  totalReviews: number;
  sourceLabel: string;
  reviewsUrl: string;
  businessProfileUrl: string;
  reviews: ReviewItem[];
};

const defaultGoogleReviewsUrl =
  "https://www.google.com/search?sca_esv=0d82fdce82ae5c26&sxsrf=ANbL-n7qfRaBUaUAJA5iowWInUVZaT-fEw:1778871907972&q=intelismart+llc+houston+reviews&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcw4ncZkyleYZL78l6cs8B3lLxKoN87To2bqKRPaW3-wZnjMBA1GUEEsfAQ_9SsrXaB6izDSnSRKlyb-ikN3Vh7q-J_ykD16iZz2YrEUlwpKLlkUdg%3D%3D&sa=X&ved=2ahUKEwibxbOh_ruUAxWKmmoFHTK2JA8Q9qsLegQIGBAG&biw=411&bih=850&dpr=3.5#ebo=2";

export const googleReviewsEnv = {
  placeId: process.env.GOOGLE_PLACE_ID || "REPLACE_LATER",
  apiKey: process.env.GOOGLE_PLACES_API_KEY || "REPLACE_LATER",
  businessProfileUrl: process.env.GOOGLE_BUSINESS_PROFILE_URL || defaultGoogleReviewsUrl,
  reviewsUrl: process.env.GOOGLE_REVIEWS_URL || defaultGoogleReviewsUrl
};

export const googleReviewDisplaySettings = {
  minRating: 4,
  maxReviewLength: 240,
  autoplayMs: 5000
};

export const placeholderReviews: ReviewItem[] = [
  {
    id: "placeholder-1",
    authorName: "In His Hand Co",
    rating: 5,
    publishedAt: "2025-09-15",
    text:
      "Outstanding experience working with Intelismart LLC. Their team was extremely professional, knowledgeable, and attentive to our specific needs. From the initial consultation, they provided expert guidance and consistently delivered high-quality work. Good job."
  },
  {
    id: "placeholder-2",
    authorName: "Marlos Bar",
    rating: 5,
    publishedAt: "2025-09-10",
    text:
      "Great job. The technician (Charles) was very patient and made sure the job was done. Got my systems back up and running fairly quickly and I am super excited."
  },
  {
    id: "placeholder-3",
    authorName: "Nisa Fred",
    rating: 5,
    publishedAt: "2025-09-07",
    text:
      "Thoroughly impressed with Intelismart and their outstanding team. They consistently exceed expectations by swiftly and effectively troubleshooting with precision, but they also take the extra step to explain insights for future prevention. Intelismart LLC truly sets the standard for exceptional service."
  },
  {
    id: "placeholder-4",
    authorName: "Jacob Lindsay",
    rating: 5,
    publishedAt: "2025-09-03",
    text:
      "Awesome work. Did above and beyond work. Highly recommend."
  },
  {
    id: "placeholder-5",
    authorName: "Agboola Olomola",
    rating: 5,
    publishedAt: "2023-05-14",
    text:
      "Intelismart has a great team of techs that attends to your need not just as quick as possible but with confidence that your request will be resolved. Quick customer and field supports always coming to our rescue whenever we call."
  },
  {
    id: "placeholder-6",
    authorName: "Houston Floorcovering Store",
    rating: 5,
    publishedAt: "2025-09-01",
    text:
      "They got everything repaired in a timely fashion."
  },
  {
    id: "placeholder-7",
    authorName: "Mylanna Jeffery",
    rating: 5,
    publishedAt: "2025-09-09",
    text:
      "Quick and efficient."
  },
  {
    id: "placeholder-8",
    authorName: "maha dahu",
    rating: 5,
    publishedAt: "2025-09-08",
    text:
      "Great service."
  },
  {
    id: "placeholder-9",
    authorName: "Royal Ursin",
    rating: 5,
    publishedAt: "2025-09-07",
    text:
      "Great service."
  },
  {
    id: "placeholder-10",
    authorName: "Rita Grant",
    rating: 5,
    publishedAt: "2025-09-05",
    text:
      "Great and fast service."
  },
  {
    id: "placeholder-11",
    authorName: "Michael",
    rating: 5,
    publishedAt: "2025-09-04",
    text:
      "Excellent support and service."
  },
  {
    id: "placeholder-12",
    authorName: "Pedro Colindres",
    rating: 5,
    publishedAt: "2025-09-06",
    text:
      "Highly recommended."
  },
  {
    id: "placeholder-13",
    authorName: "Stella",
    rating: 5,
    publishedAt: "2025-09-11",
    text:
      "Great service."
  },
  {
    id: "placeholder-14",
    authorName: "Jacob Lindsay",
    rating: 5,
    publishedAt: "2025-09-03",
    text:
      "Awesome work and very professional team."
  },
  {
    id: "placeholder-15",
    authorName: "Agboola Olomola",
    rating: 5,
    publishedAt: "2023-05-14",
    text:
      "Quick customer and field support. They always come to our rescue whenever we call."
  },
  {
    id: "placeholder-16",
    authorName: "Nisa Fred",
    rating: 5,
    publishedAt: "2025-09-07",
    text:
      "Highly recommend Intelismart for exceptional service."
  },
  {
    id: "placeholder-17",
    authorName: "Marlos Bar",
    rating: 5,
    publishedAt: "2025-09-10",
    text:
      "Patient technician and fast turnaround."
  },
  {
    id: "placeholder-18",
    authorName: "In His Hand Co",
    rating: 5,
    publishedAt: "2025-09-15",
    text:
      "Professional and knowledgeable team. Delivered high-quality work."
  },
  {
    id: "placeholder-19",
    authorName: "Houston Floorcovering Store",
    rating: 5,
    publishedAt: "2025-09-01",
    text:
      "Timely service and great troubleshooting."
  },
  {
    id: "placeholder-20",
    authorName: "Mylanna Jeffery",
    rating: 5,
    publishedAt: "2025-09-09",
    text:
      "Quick, efficient, and dependable."
  }
];

export const placeholderReviewsPayload: ReviewsPayload = {
  averageRating: 5.0,
  totalReviews: 20,
  sourceLabel: "Google",
  reviewsUrl: googleReviewsEnv.reviewsUrl,
  businessProfileUrl: googleReviewsEnv.businessProfileUrl,
  reviews: placeholderReviews
};
