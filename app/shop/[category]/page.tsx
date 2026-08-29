import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { ShopFilters } from "@/components/product/shop-filters";
import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";
import { filterProducts, SortOption } from "@/lib/filter-products";
import { categories, getCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.description} Shop ${category.name.toLowerCase()} at Sherry Kids Store, Kampala.`,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const sp = await searchParams;
  const results = filterProducts({ category: slug, q: sp.q, sort: sp.sort as SortOption });

  return (
    <>
      <PageHeader eyebrow="Shop" title={category.name} description={category.description} />
      <section className="py-12 sm:py-14">
        <Container className="flex flex-col gap-8">
          <Suspense>
            <ShopFilters activeCategory={category.slug} />
          </Suspense>

          {results.length === 0 ? (
            <EmptyState
              title={`No ${category.name.toLowerCase()} found`}
              description="Try adjusting your search or browse another category."
              action={<Button href="/shop">Browse All Products</Button>}
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
