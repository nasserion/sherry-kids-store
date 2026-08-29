import { Product } from "./types";
import { products } from "./products";

export type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export interface ProductFilters {
  category?: string;
  q?: string;
  sort?: SortOption;
}

export function filterProducts({ category, q, sort = "featured" }: ProductFilters): Product[] {
  let result: Product[] = [...products];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (q && q.trim()) {
    const needle = q.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(needle) ||
        p.description.toLowerCase().includes(needle) ||
        p.category.toLowerCase().includes(needle)
    );
  }

  switch (sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      result.sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured));
  }

  return result;
}
