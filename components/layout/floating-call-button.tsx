import { Phone } from "lucide-react";
import { business } from "@/lib/business";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${business.phoneInternational}`}
      aria-label={`Call ${business.name} now`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-[0_10px_24px_-6px_rgba(255,111,97,0.7)] transition-transform hover:scale-105 active:scale-95 sm:hidden"
    >
      <Phone className="h-6 w-6" fill="currentColor" strokeWidth={0} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coral/50" />
    </a>
  );
}
