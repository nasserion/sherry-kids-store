export type CategorySlug = "clothes" | "shoes" | "toys";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  ctaLabel: string;
  gradient: [string, string];
  icon: "clothes" | "shoes" | "toys";
}

export interface ProductVariant {
  sizes?: string[];
  colors?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  oldPrice?: number;
  description: string;
  longDescription: string;
  badges?: Array<"New" | "Sale">;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  /** Real product photo URL — leave undefined to use the generated placeholder art. */
  image?: string;
  gradient: [string, string];
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image?: string;
  gradient: [string, string];
  size: string;
  color: string;
  quantity: number;
}
