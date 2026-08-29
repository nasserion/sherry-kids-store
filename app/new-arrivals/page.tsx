import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { getNewArrivals } from "@/lib/products";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "The newest kids clothes, children's shoes and toys just landed at Sherry Kids Store, Kampala.",
};

export default function NewArrivalsPage() {
  const arrivals = getNewArrivals();

  return (
    <>
      <PageHeader eyebrow="Just In" title="New Arrivals" description="Fresh styles landing every season — get them before they're gone." />
      <section className="py-12 sm:py-14">
        <Container>
          {arrivals.length === 0 ? (
            <EmptyState
              title="No new arrivals right now"
              description="Check back soon — we restock regularly!"
              action={<Button href="/shop">Browse All Products</Button>}
            />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {arrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
