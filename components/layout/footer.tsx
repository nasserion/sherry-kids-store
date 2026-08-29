import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialIconLinks } from "@/components/shared/social-icons";
import { business } from "@/lib/business";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Clothes", href: "/shop/clothes" },
  { label: "Shoes", href: "/shop/shoes" },
  { label: "Toys", href: "/shop/toys" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coral text-white">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M9 3L6 5L4 9L7 11V20H17V11L20 9L18 5L15 3C15 5.2 13.2 7 11 7C9.5 7 9 5.5 9 3Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="font-display text-lg font-bold text-white">Sherry Kids Store</span>
          </div>
          <p className="font-display text-lg text-sun">&ldquo;{business.tagline}&rdquo;</p>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">{business.shortDescription}</p>
          <SocialIconLinks />
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 transition-colors hover:text-coral">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-white/60">
            <li>
              <a href={`tel:${business.phoneInternational}`} className="flex items-start gap-2.5 transition-colors hover:text-coral">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-start gap-2.5 transition-colors hover:text-coral">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Store Hours</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-white/60">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-white/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sherry Kids Store. All Rights Reserved.</p>
          <p>Kampala, Uganda</p>
        </Container>
      </div>
    </footer>
  );
}
