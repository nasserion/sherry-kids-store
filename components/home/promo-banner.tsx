import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function PromoBanner() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-ink via-[#4a3f5e] to-ink px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 h-48 w-48 rounded-full bg-sun/25 blur-3xl" />
            <div className="relative mx-auto flex max-w-xl flex-col items-center gap-4">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Everything Your Little One Loves
              </h2>
              <p className="text-base text-white/70 sm:text-lg">
                Fashion, footwear and fun — all in one place.
              </p>
              <Button href="/shop" size="lg" className="mt-2" icon={<ArrowRight className="h-5 w-5" />}>
                Explore Collection
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
