import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CategoryCard } from "@/components/category-card";
import { categories } from "@/lib/products";

export function CategorySection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Shop by Category"
          title="Everything for your little one"
          description="From everyday outfits to playtime favorites — find it all in one place."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.slug} category={category} delay={i * 90} />
          ))}
        </div>
      </Container>
    </section>
  );
}
