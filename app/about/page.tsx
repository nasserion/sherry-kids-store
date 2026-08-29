import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { WhyShopWithUs } from "@/components/home/why-shop-with-us";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sherry Kids Store, a children's retail shop in Kampala offering clothes, shoes and toys for kids at HAM Shopping Grounds, Block S, Room HS001.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title={`The story behind ${business.name}`} />

      <section className="py-14 sm:py-16">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-gradient-to-br from-blush-deep via-lilac to-sky shadow-[0_30px_60px_-20px_rgba(54,46,69,0.3)]">
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-sun/50 blur-2xl" />
            <div className="absolute bottom-10 left-6 h-24 w-24 rounded-full bg-mint/45 blur-2xl" />
            <div className="flex h-full w-full items-center justify-center">
              <svg viewBox="0 0 200 200" className="h-1/2 w-1/2 text-white/90" fill="none">
                <path
                  d="M40 30L20 46L14 70L34 78V160H166V78L186 70L180 46L160 30C160 46 146 58 130 58C114 58 100 46 100 30C100 46 86 58 70 58C54 58 40 46 40 30Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-5">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Who We Are</h2>
            <p className="text-base leading-relaxed text-ink-soft">{business.description}</p>
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <MapPin className="h-4 w-4 text-coral-dark" />
              {business.address.line1}, {business.address.line2}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/shop">Browse Our Shop</Button>
              <Button href={`tel:${business.phoneInternational}`} variant="outline" icon={<Phone className="h-4 w-4" />}>
                {business.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <WhyShopWithUs />
    </>
  );
}
