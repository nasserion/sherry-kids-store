import { ArrowRight } from "lucide-react";
import { Category } from "@/lib/types";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CategoryCard({ category, delay = 0 }: { category: Category; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_6px_20px_-10px_rgba(54,46,69,0.18)] transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-[5/4] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
            <PlaceholderArt icon={category.icon} gradient={category.gradient} label={category.name} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-6">
          <h3 className="font-display text-xl font-bold text-ink">{category.name}</h3>
          <p className="flex-1 text-sm text-ink-soft">{category.description}</p>
          <Button href={`/shop/${category.slug}`} variant="outline" size="sm" icon={<ArrowRight className="h-4 w-4" />} className="mt-2 w-fit">
            {category.ctaLabel}
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
