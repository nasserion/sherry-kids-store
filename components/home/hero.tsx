import { MapPin, ArrowRight, Store } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush via-lilac/60 to-cream pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pt-20">
      {/* Decorative floating blobs — signature ambient motif */}
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-sun/40 blur-3xl animate-float" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-10 top-32 h-64 w-64 rounded-full bg-sky-deep/50 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start gap-6 text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral-dark shadow-sm">
            <Store className="h-3.5 w-3.5" /> Now open in Kampala
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            Little Styles.
            <br />
            <span className="text-coral">Big Smiles.</span>
          </h1>
          <p className="max-w-md text-base text-ink-soft sm:text-lg">
            Discover beautiful children&apos;s clothes, stylish shoes and exciting toys at{" "}
            {business.name}.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/shop" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Shop Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Visit Our Store
            </Button>
          </div>
          <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <MapPin className="h-4 w-4 text-coral-dark" />
            {business.address.line1} &ndash; {business.address.line2}
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute inset-0 rounded-[2.5rem] bg-white/40 backdrop-blur-sm" />
          <div className="absolute inset-4 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(54,46,69,0.35)]">
            <div className="relative h-full w-full bg-gradient-to-br from-blush-deep via-lilac to-sky">
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sun/60 blur-2xl" />
              <div className="absolute bottom-8 left-6 h-24 w-24 rounded-full bg-mint/50 blur-2xl" />
              <div className="flex h-full w-full items-center justify-center">
                <svg viewBox="0 0 200 200" className="h-2/3 w-2/3 text-white/90 drop-shadow-lg" fill="none">
                  <circle cx="100" cy="60" r="34" fill="currentColor" opacity="0.95" />
                  <path
                    d="M50 190 C50 140 75 110 100 110 C125 110 150 140 150 190 Z"
                    fill="currentColor"
                    opacity="0.95"
                  />
                  <circle cx="70" cy="55" r="4" fill="var(--color-ink)" />
                  <circle cx="130" cy="55" r="4" fill="var(--color-ink)" />
                  <path d="M82 72 Q100 84 118 72" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="absolute right-6 top-6 -rotate-6 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-coral-dark shadow-md">
                New Season
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
