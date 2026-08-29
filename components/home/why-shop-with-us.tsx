import { HeartHandshake, MapPin, ShieldCheck, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { business } from "@/lib/business";

const items = [
  {
    icon: ShieldCheck,
    title: "Quality Kids Products",
    description: "Carefully selected products for children.",
  },
  {
    icon: Wallet,
    title: "Affordable Choices",
    description: "Great options for different family budgets.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: `Find us at ${business.address.line1}, ${business.address.line2}.`,
  },
  {
    icon: HeartHandshake,
    title: "Friendly Service",
    description: `Customers can contact ${business.name} directly for assistance.`,
  },
];

export function WhyShopWithUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Why Sherry Kids Store" title="Shopping made simple for parents" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="flex h-full flex-col items-start gap-3 rounded-3xl bg-cream p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-coral-dark">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="text-sm text-ink-soft">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
