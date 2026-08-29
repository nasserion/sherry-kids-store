import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { InstagramIcon, TikTokIcon } from "@/components/shared/social-icons";
import { business } from "@/lib/business";

const tiles = [
  { gradient: ["#ffe3e9", "#fff0f4"] },
  { gradient: ["#dcefff", "#eaf6ff"] },
  { gradient: ["#eae1fb", "#f4edff"] },
  { gradient: ["#fff2cf", "#fff8e5"] },
];

export function SocialSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-8 text-center">
        <Reveal className="flex flex-col items-center gap-3">
          <span className="inline-flex w-fit items-center rounded-full bg-lilac px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Follow Sherry Kids Store</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={business.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:text-coral-dark"
            >
              <InstagramIcon className="h-5 w-5 text-coral" />
              {business.social.instagram.handle}
            </a>
            <a
              href={business.social.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:text-coral-dark"
            >
              <TikTokIcon className="h-5 w-5 text-coral" />
              {business.social.tiktok.handle}
            </a>
          </div>
        </Reveal>

        <Reveal className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" delay={100}>
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="aspect-square rounded-3xl"
              style={{ background: `linear-gradient(150deg, ${tile.gradient[0]}, ${tile.gradient[1]})` }}
            />
          ))}
        </Reveal>
        <p className="max-w-md text-sm text-ink-soft">
          Follow along for new arrivals, styling ideas and behind-the-scenes moments from the shop floor.
        </p>
      </Container>
    </section>
  );
}
