"use client";

import { useState } from "react";
import { Minus, Phone, Plus, ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { business } from "@/lib/business";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  function handleAddToCart() {
    addItem(product, size, color, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {product.badges?.map((b) => (
            <Badge key={b} label={b} />
          ))}
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft/70">
            {product.category === "clothes" ? "Clothes" : product.category === "shoes" ? "Shoes" : "Toys"}
          </span>
        </div>
        <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">{product.name}</h1>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-2xl font-bold text-ink">{formatPrice(product.price)}</span>
          {product.oldPrice ? (
            <span className="text-base text-ink-soft/60 line-through">{formatPrice(product.oldPrice)}</span>
          ) : null}
        </div>
        <p
          className={`mt-2 inline-flex items-center gap-1.5 text-sm font-semibold ${
            product.inStock ? "text-mint" : "text-coral-dark"
          }`}
        >
          <span className={`h-2 w-2 rounded-full ${product.inStock ? "bg-mint" : "bg-coral"}`} />
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-ink-soft">{product.description}</p>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-ink">Size</span>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                size === s ? "border-coral bg-blush text-coral-dark" : "border-ink/10 text-ink-soft hover:border-ink/25"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-ink">Color</span>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              aria-pressed={color === c}
              className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                color === c ? "border-coral bg-blush text-coral-dark" : "border-ink/10 text-ink-soft hover:border-ink/25"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-ink">Quantity</span>
        <div className="flex w-fit items-center rounded-full border-2 border-ink/10">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-soft disabled:opacity-30"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-base font-bold" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
            className="flex h-11 w-11 items-center justify-center text-ink-soft disabled:opacity-30"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          size="lg"
          icon={<ShoppingBag className="h-5 w-5" />}
          className="flex-1"
        >
          {justAdded ? "Added to Cart!" : "Add to Cart"}
        </Button>
        <Button href={`tel:${business.phoneInternational}`} variant="outline" size="lg" icon={<Phone className="h-5 w-5" />}>
          Call Store
        </Button>
      </div>
    </div>
  );
}
