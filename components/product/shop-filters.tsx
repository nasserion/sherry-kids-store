"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal } from "lucide-react";
import { categories } from "@/lib/products";
import { SortOption } from "@/lib/filter-products";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
];

export function ShopFilters({ activeCategory }: { activeCategory?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = (searchParams.get("sort") as SortOption) ?? "featured";
  const query = searchParams.get("q");

  function handleSortChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  const tabs = [{ slug: undefined, name: "All" }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
        {tabs.map((tab) => {
          const href = tab.slug ? `/shop/${tab.slug}` : "/shop";
          const isActive = tab.slug === activeCategory;
          return (
            <Link
              key={tab.name}
              href={href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive ? "bg-coral text-white" : "bg-white text-ink-soft hover:text-ink"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        {query ? (
          <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-ink-soft">
            Results for &ldquo;{query}&rdquo;
          </span>
        ) : null}
        <label className="flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-sm">
          <SlidersHorizontal className="h-4 w-4 text-ink-soft" />
          <select
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            aria-label="Sort products"
            className="bg-transparent focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}
