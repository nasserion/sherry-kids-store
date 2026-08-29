"use client";

import { useState } from "react";
import { ProductImage } from "@/components/ui/product-image";
import { CategorySlug } from "@/lib/types";

export function ProductGallery({
  name,
  image,
  gradient,
  category,
}: {
  name: string;
  image?: string;
  gradient: [string, string];
  category: CategorySlug;
}) {
  const [active, setActive] = useState(0);
  const views = 4;

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-blush/40">
        <div
          className="h-full w-full transition-transform duration-300"
          style={{ transform: `rotate(${active * 2 - 3}deg) scale(${1 + active * 0.015})` }}
        >
          <ProductImage image={image} gradient={gradient} icon={category} alt={name} priority sizes="(min-width: 1024px) 40vw, 90vw" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: views }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View ${i + 1} of ${name}`}
            aria-pressed={active === i}
            className={`aspect-square overflow-hidden rounded-2xl transition-all ${
              active === i ? "ring-2 ring-coral ring-offset-2" : "opacity-70 hover:opacity-100"
            }`}
          >
            <ProductImage image={image} gradient={gradient} icon={category} alt={`${name} thumbnail ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
