import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductPurchasePanel } from "@/components/product/product-purchase-panel";
import { RelatedProducts } from "@/components/product/related-products";
import { getAllProducts, getProductBySlug, getRelatedProducts, formatPrice } from "@/lib/products";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.description} ${formatPrice(product.price)} — shop at Sherry Kids Store, Kampala.`,
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const categoryName = product.category === "clothes" ? "Clothes" : product.category === "shoes" ? "Shoes" : "Toys";

  return (
    <>
      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-ink-soft">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/shop" className="hover:text-ink">
              Shop
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/shop/${product.category}`} className="hover:text-ink">
              {categoryName}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="truncate text-ink">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <ProductGallery name={product.name} image={product.image} gradient={product.gradient} category={product.category} />
            <ProductPurchasePanel product={product} />
          </div>

          <div className="max-w-3xl border-t border-ink/10 pt-8">
            <h2 className="mb-3 font-display text-xl font-bold text-ink">Product Details</h2>
            <p className="text-sm leading-relaxed text-ink-soft">{product.longDescription}</p>
          </div>
        </Container>
      </section>

      <RelatedProducts products={related} />
    </>
  );
}
