export default function Price({
  value,
  currency = "USD",
  maximumFractionDigits = 0,
  // To prevent safari 12 issue
  minimumFractionDigits = 0,
}: {
  value: number;
  currency?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
}) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);
}
