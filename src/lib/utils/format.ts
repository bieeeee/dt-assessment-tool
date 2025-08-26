export function formatCurrency(value: string) {
  if (typeof value === "string" && value.includes("-")) {
    const [min, max] = value
      .split("-")
      .map((v) => parseInt(v.replace(/\D/g, "")));
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  }
  return value;
}
