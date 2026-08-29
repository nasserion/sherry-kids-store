import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Featured Products"
          title="Loved by parents & kids alike"
          description="A hand-picked mix of our most popular clothes, shoes and toys."
          align="left"
          action={
            <Button href="/shop" variant="ghost" icon={<ArrowRight className="h-4 w-4" />}>
              View All
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
