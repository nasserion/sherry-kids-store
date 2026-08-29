"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { Menu, Phone, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "./logo";
import { navLinks } from "@/lib/nav";
import { useCart } from "@/context/cart-context";
import { business } from "@/lib/business";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { itemCount, openDrawer, isHydrated } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  // Close mobile menu / search whenever the route changes.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting transient UI state on navigation is the standard pattern here
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/shop?q=${encodeURIComponent(trimmed)}` : "/shop");
    setSearchOpen(false);
    setQuery("");
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-blush text-coral-dark"
                  : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="relative hidden sm:block">
            {searchOpen ? (
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-2 rounded-full border-2 border-blush-deep bg-white px-3 py-1.5 shadow-sm"
              >
                <Search className="h-4 w-4 text-ink-soft" aria-hidden="true" />
                <input
                  autoFocus
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products…"
                  aria-label="Search products"
                  className="w-40 bg-transparent text-sm text-ink placeholder:text-ink-soft/70 focus:outline-none md:w-56"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                  className="text-ink-soft hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>

          <a
            href={`tel:${business.phoneInternational}`}
            className="hidden h-10 items-center gap-2 rounded-full border-2 border-ink/10 px-3.5 text-sm font-semibold text-ink transition-colors hover:border-coral hover:text-coral-dark lg:flex"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>

          <button
            type="button"
            onClick={openDrawer}
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <ShoppingBag className="h-5 w-5" />
            {isHydrated && itemCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-coral px-1 text-[0.65rem] font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink xl:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-6 bg-white p-6 shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-ink/5 hover:text-ink"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-full border-2 border-ink/10 px-3.5 py-2.5">
            <Search className="h-4 w-4 text-ink-soft" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </form>

          <nav aria-label="Mobile primary" className="flex flex-1 flex-col gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 text-base font-semibold ${
                  isActive(link.href) ? "bg-blush text-coral-dark" : "text-ink hover:bg-ink/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${business.phoneInternational}`}
            className="flex items-center justify-center gap-2 rounded-full bg-coral px-5 py-3.5 text-base font-bold text-white shadow-[0_8px_20px_-6px_rgba(255,111,97,0.6)]"
          >
            <Phone className="h-5 w-5" />
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
