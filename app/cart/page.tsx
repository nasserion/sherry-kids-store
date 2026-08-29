import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { CartPageClient } from "@/components/cart/cart-page-client";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review the items in your Sherry Kids Store cart before checkout.",
};

export default function CartPage() {
  return (
    <>
      <PageHeader eyebrow="Cart" title="Your Shopping Cart" />
      <CartPageClient />
    </>
  );
}
