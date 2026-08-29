import { CategorySlug } from "@/lib/types";

interface PlaceholderArtProps {
  icon: CategorySlug;
  gradient: [string, string];
  className?: string;
  label?: string;
}

/**
 * Generates a lightweight, on-brand illustration used in place of a real
 * product photo. Swap `Product.image` with a real photo URL and the
 * ProductImage wrapper will render it instead automatically.
 */
export function PlaceholderArt({ icon, gradient, className, label }: PlaceholderArtProps) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className ?? ""}`}
      style={{
        background: `linear-gradient(150deg, ${gradient[0]}, ${gradient[1]})`,
      }}
      role="img"
      aria-label={label ?? "Product illustration"}
    >
      <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-white/30 blur-md" />
      <div className="absolute -bottom-10 -left-6 h-24 w-24 rounded-full bg-white/20 blur-md" />
      <IconGlyph icon={icon} />
    </div>
  );
}

function IconGlyph({ icon }: { icon: CategorySlug }) {
  const common = "h-16 w-16 sm:h-20 sm:w-20 text-white/90 drop-shadow-sm";
  switch (icon) {
    case "clothes":
      return (
        <svg viewBox="0 0 64 64" fill="none" className={common} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 8L14 14L8 24L16 28V56H48V28L56 24L50 14L40 8C40 12.4183 36.4183 16 32 16C27.5817 16 24 12.4183 24 8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "shoes":
      return (
        <svg viewBox="0 0 64 64" fill="none" className={common} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 44C8 40 12 38 16 36L28 28C30 26.5 32 26 34 27L44 32C46 33 48 33 50 32L54 30C56 33 58 38 58 44C58 48 55 50 51 50H12C9.5 50 8 47 8 44Z"
            fill="currentColor"
          />
          <circle cx="20" cy="40" r="2.4" fill="currentColor" opacity="0.5" />
        </svg>
      );
    case "toys":
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" className={common} xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="18" height="18" rx="4" fill="currentColor" />
          <circle cx="42" cy="22" r="10" fill="currentColor" opacity="0.85" />
          <rect x="34" y="38" width="18" height="14" rx="4" fill="currentColor" opacity="0.7" />
        </svg>
      );
  }
}
