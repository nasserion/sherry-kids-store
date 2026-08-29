"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ui/product-image";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  function handleQuickAdd() {
    addItem(product, product.sizes[0], product.colors[0], 1);
  }

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_6px_20px_-10px_rgba(54,46,69,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-12px_rgba(54,46,69,0.25)]">
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-blush/40">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <ProductImage image={product.image} gradient={product.gradient} icon={product.category} alt={product.name} />
        </div>
        {product.badges && product.badges.length > 0 ? (
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        ) : null}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleQuickAdd();
          }}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-coral-dark opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 hover:bg-coral hover:text-white focus-visible:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
          {product.category === "clothes" ? "Clothes" : product.category === "shoes" ? "Shoes" : "Toys"}
        </span>
        <Link href={`/product/${product.slug}`} className="font-display text-base font-semibold text-ink hover:text-coral-dark">
          {product.name}
        </Link>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <span className="text-base font-bold text-ink">{formatPrice(product.price)}</span>
          {product.oldPrice ? (
            <span className="text-sm text-ink-soft/60 line-through">{formatPrice(product.oldPrice)}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
