import { Plan, Screen } from "./types";

export const STEPS_FLOW: Screen[] = ["intro", "upload", "loading", "paywall"];

export const PLANS: Plan[] = [
  {
    id: "1",
    title: "10 Raw AI DATING Photos",
    price: 29,
    oldPrice: 49,
  },
  {
    id: "2",
    title: "40 Raw AI DATING Photos",
    price: 39,
    oldPrice: 69,
    isPopular: true,
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
