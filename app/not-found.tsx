import { Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-5 py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-coral-dark">
        <Compass className="h-8 w-8" />
      </span>
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Page Not Found</h1>
      <p className="max-w-sm text-base text-ink-soft">
        We couldn&apos;t find the page you were looking for. It may have moved, or the link might be outdated.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/shop" variant="outline">
          Browse the Shop
        </Button>
      </div>
    </Container>
  );
}
