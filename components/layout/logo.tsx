import Link from "next/link";
import { business } from "@/lib/business";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label={`${business.name} home`}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-coral text-white shadow-[0_6px_14px_-4px_rgba(255,111,97,0.55)] transition-transform group-hover:-rotate-6 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6">
          <path
            d="M9 3L6 5L4 9L7 11V20H17V11L20 9L18 5L15 3C15 5.2 13.2 7 11 7C9.5 7 9 5.5 9 3Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold text-ink sm:text-xl">Sherry Kids</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-coral-dark">
          Store
        </span>
      </span>
    </Link>
  );
}
