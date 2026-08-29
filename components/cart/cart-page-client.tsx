"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Minus, Phone, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ui/product-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { business } from "@/lib/business";

export function CartPageClient() {
  const { items, subtotal, updateQuantity, removeItem, isHydrated } = useCart();

  if (!isHydrated) {
    return (
      <Container className="py-16">
        <div className="h-64 animate-pulse rounded-3xl bg-white" />
      </Container>
    );
  }

  if (items.length === 0) {
    return (
      <Container className="py-14 sm:py-16">
        <EmptyState
          icon={<ShoppingBag className="h-7 w-7" />}
          title="Your cart is empty"
          description="Browse our clothes, shoes and toys to find something your little one will love."
          action={<Button href="/shop">Start Shopping</Button>}
        />
      </Container>
    );
  }

  const orderSummaryText = items
    .map((i) => `• ${i.name} (${i.size}, ${i.color}) x${i.quantity} — ${formatPrice(i.price * i.quantity)}`)
    .join("\n");
  const whatsappMessage = encodeURIComponent(
    `Hi ${business.name}! I'd like to order:\n\n${orderSummaryText}\n\nSubtotal: ${formatPrice(subtotal)}`
  );
  const emailBody = encodeURIComponent(
    `Hi ${business.name},\n\nI'd like to order the following:\n\n${orderSummaryText}\n\nSubtotal: ${formatPrice(subtotal)}\n\nMy name:\nMy phone:\nDelivery/pickup preference:`
  );

  return (
    <Container className="py-10 sm:py-14">
      <Link href="/shop" className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Your Cart ({items.length})</h1>
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.size}-${item.color}`}
                className="flex gap-4 rounded-3xl bg-white p-4 shadow-[0_6px_20px_-12px_rgba(54,46,69,0.18)] sm:p-5"
              >
                <Link href={`/product/${item.slug}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-28 sm:w-28">
                  <ProductImage image={item.image} gradient={item.gradient} icon="toys" alt={item.name} />
                </Link>
                <div className="flex flex-1 flex-col justify-between gap-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link href={`/product/${item.slug}`} className="font-display font-bold text-ink hover:text-coral-dark">
                        {item.name}
                      </Link>
                      <p className="text-sm text-ink-soft">
                        {item.size} · {item.color}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.productId, item.size, item.color)}
                      aria-label={`Remove ${item.name} from cart`}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:bg-blush hover:text-coral-dark"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center rounded-full border-2 border-ink/10">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Decrease quantity"
                        className="flex h-9 w-9 items-center justify-center text-ink-soft disabled:opacity-30"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-bold" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                        aria-label="Increase quantity"
                        className="flex h-9 w-9 items-center justify-center text-ink-soft disabled:opacity-30"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-base font-bold text-ink">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="flex h-fit flex-col gap-5 rounded-3xl bg-white p-6 shadow-[0_6px_20px_-12px_rgba(54,46,69,0.18)]">
          <h2 className="font-display text-lg font-bold text-ink">Order Summary</h2>
          <div className="flex flex-col gap-2 border-b border-ink/10 pb-4 text-sm text-ink-soft">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery / Pickup</span>
              <span className="font-semibold text-ink">Discussed at checkout</span>
            </div>
          </div>
          <div className="flex justify-between text-lg font-bold text-ink">
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <p className="text-xs text-ink-soft">
            {business.name} doesn&apos;t process online payments yet — confirm your order with us directly and we&apos;ll
            arrange payment and delivery or pickup.
          </p>

          <div className="flex flex-col gap-3">
            <Button
              href={`https://wa.me/${business.whatsappNumber}?text=${whatsappMessage}`}
              external
              size="lg"
              className="w-full"
            >
              Checkout via WhatsApp
            </Button>
            <Button
              href={`mailto:${business.email}?subject=${encodeURIComponent("Order Request — " + business.name)}&body=${emailBody}`}
              variant="outline"
              size="lg"
              icon={<Mail className="h-5 w-5" />}
              className="w-full"
            >
              Email This Order
            </Button>
            <Button href={`tel:${business.phoneInternational}`} variant="ghost" icon={<Phone className="h-4 w-4" />} className="w-full">
              Or call {business.phoneDisplay}
            </Button>
          </div>
        </aside>
      </div>
    </Container>
  );
}
