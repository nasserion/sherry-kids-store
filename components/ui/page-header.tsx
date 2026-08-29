import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-b from-blush via-lilac/50 to-cream py-12 sm:py-16">
      <Container className="flex flex-col items-center gap-3 text-center">
        {eyebrow ? (
          <span className="inline-flex w-fit items-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-coral-dark">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h1>
        {description ? <p className="max-w-xl text-base text-ink-soft">{description}</p> : null}
      </Container>
    </section>
  );
}
