import Controller from "./controller";

import type { Plan } from "./types";

// Just imagine it is from API
export const plans: Plan[] = [
  {
    id: "1",
    title: "10 Raw AI DATING Photos",
    price: 29,
    oldPrice: 49,
    features: [],
  },
  {
    id: "2",
    title: "40 Raw AI DATING Photos",
    price: 39,
    oldPrice: 69,
    isPopular: true,
    features: [],
  },
  {
    id: "3",
    title: "10 CURATED Edited AI Photos",
    price: 249,
    oldPrice: 500,
    isBest: true,
    features: [
      "Unlimited Generations",
      "Handpicked Photos",
      "Manual Editing by Experts",
    ],
  },
];

export default function PhotoAppPage() {
  return <Controller plans={plans} />;
}
