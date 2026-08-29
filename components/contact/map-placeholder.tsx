import { MapPin } from "lucide-react";
import { business } from "@/lib/business";

export function MapPlaceholder() {
  return (
    <div className="relative flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-br from-sky via-lilac to-blush text-center">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle, rgba(54,46,69,0.15) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-coral-dark shadow-md">
        <MapPin className="h-7 w-7" />
      </span>
      <div className="relative px-6">
        <p className="font-display text-lg font-bold text-ink">{business.address.line1}</p>
        <p className="text-sm text-ink-soft">{business.address.line2}</p>
      </div>
      <p className="relative max-w-xs px-6 text-xs text-ink-soft/70">
        Map preview — connect a live Google Maps embed here once the exact store pin is confirmed.
      </p>
    </div>
  );
}
