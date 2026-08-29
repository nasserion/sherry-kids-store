import { business } from "@/lib/business";

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 3v10.5a3 3 0 1 1-2.4-2.94V8.4A5.9 5.9 0 1 0 16.5 14V9.2a6.7 6.7 0 0 0 3.5 1V7.2A4 4 0 0 1 16 3h-2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIconLinks({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const iconClass =
    variant === "dark"
      ? "bg-white/15 text-white hover:bg-coral"
      : "bg-blush text-coral-dark hover:bg-coral hover:text-white";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={business.social.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${business.name} on Instagram`}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${iconClass}`}
      >
        <InstagramIcon />
      </a>
      <a
        href={business.social.tiktok.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${business.name} on TikTok`}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${iconClass}`}
      >
        <TikTokIcon />
      </a>
    </div>
  );
}
