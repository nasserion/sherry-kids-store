import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { ShopFilters } from "@/components/product/shop-filters";
import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { filterProducts, SortOption } from "@/lib/filter-products";

export const metadata: Metadata = {
  title: "Shop All Products",
  description: "Browse all kids clothes, children's shoes and toys at Sherry Kids Store, Kampala.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const results = filterProducts({ q: params.q, sort: params.sort as SortOption });

  return (
    <>
      <PageHeader eyebrow="Shop" title="All Products" description="Everything for your little one, in one place." />
      <section className="py-12 sm:py-14">
        <Container className="flex flex-col gap-8">
          <Suspense>
            <ShopFilters />
          </Suspense>

          {results.length === 0 ? (
            <EmptyState
              title="No products found"
              description="Try a different search term or browse a category instead."
              action={<Button href="/shop">Clear Search</Button>}
            />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
