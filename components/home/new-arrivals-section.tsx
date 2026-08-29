import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { getNewArrivals } from "@/lib/products";

export function NewArrivalsSection() {
  const arrivals = getNewArrivals();

  return (
    <section className="bg-sky/40 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Just In" title="New Arrivals" description="Fresh styles landing every season." align="left" />
        <div className="scrollbar-none -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {arrivals.map((product, i) => (
            <Reveal key={product.id} delay={i * 60} className="w-[62%] shrink-0 snap-start sm:w-auto">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal className="flex justify-center">
          <Button href="/new-arrivals" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            See All New Arrivals
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
