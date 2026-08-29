"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ui/product-image";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { items, subtotal, isDrawerOpen, closeDrawer, updateQuantity, removeItem, isHydrated } = useCart();

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <div className={`fixed inset-0 z-[70] ${isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isDrawerOpen}>
      <div
        onClick={closeDrawer}
        className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-[90%] max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-lg font-bold text-ink">Your Cart {items.length > 0 && `(${items.length})`}</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft hover:bg-ink/5 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isHydrated || items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-coral-dark">
              <ShoppingBag className="h-7 w-7" />
            </span>
            <p className="font-display text-lg font-semibold text-ink">Your cart is empty</p>
            <p className="text-sm text-ink-soft">Looks like you haven&apos;t added anything yet. Let&apos;s fix that!</p>
            <Button href="/shop" onClick={closeDrawer} size="sm">
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <li key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-3 border-b border-ink/5 py-4 first:pt-0">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeDrawer}
                    className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl"
                  >
                    <ProductImage image={item.image} gradient={item.gradient} icon="toys" alt={item.name} className="h-full w-full" />
                  </Link>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={closeDrawer}
                        className="text-sm font-semibold text-ink hover:text-coral-dark"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId, item.size, item.color)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-ink-soft hover:text-coral-dark"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-ink-soft">
                      {item.size} · {item.color}
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-ink/10">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center text-ink-soft disabled:opacity-30"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                          disabled={item.quantity >= 10}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center text-ink-soft disabled:opacity-30"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-ink">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-ink/10 px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-base font-bold text-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex flex-col gap-2.5">
                <Button href="/cart" onClick={closeDrawer} className="w-full">
                  View Cart & Checkout
                </Button>
                <Button href="/shop" onClick={closeDrawer} variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
