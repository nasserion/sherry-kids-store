import { Hero } from "@/components/home/hero";
import { CategorySection } from "@/components/home/category-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { NewArrivalsSection } from "@/components/home/new-arrivals-section";
import { PromoBanner } from "@/components/home/promo-banner";
import { WhyShopWithUs } from "@/components/home/why-shop-with-us";
import { SocialSection } from "@/components/home/social-section";
import { ScallopDivider } from "@/components/ui/scallop-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScallopDivider color="var(--color-cream)" className="-mt-1" />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivalsSection />
      <PromoBanner />
      <WhyShopWithUs />
      <SocialSection />
    </>
  );
}
