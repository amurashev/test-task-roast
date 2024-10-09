export type Screen = "intro" | "upload" | "loading" | "paywall";

export type TempImage = { src: string };

export type Plan = {
  id: string
  title: string
  price: number,
  oldPrice: number,
  features?: string[]
  isPopular?: boolean
  isBest?: boolean
}