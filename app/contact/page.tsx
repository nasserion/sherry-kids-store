import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { MapPlaceholder } from "@/components/contact/map-placeholder";
import { SocialIconLinks } from "@/components/shared/social-icons";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sherry Kids Store in Kampala. Call, email or visit us at HAM Shopping Grounds, Block S, Room HS001.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="We'd love to hear from you" description="Call, message or visit — whichever is easiest for you." />

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal>
            <a
              href={`tel:${business.phoneInternational}`}
              className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-[0_6px_20px_-10px_rgba(54,46,69,0.18)] transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush text-coral-dark">
                <Phone className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink">Call the Store</p>
                <p className="text-sm text-ink-soft">{business.phoneDisplay}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={`mailto:${business.email}`}
              className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-[0_6px_20px_-10px_rgba(54,46,69,0.18)] transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-ink">
                <Mail className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink">Email Us</p>
                <p className="text-sm text-ink-soft">{business.email}</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex h-full flex-col items-center gap-3 rounded-3xl bg-white p-6 text-center shadow-[0_6px_20px_-10px_rgba(54,46,69,0.18)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac text-ink">
                <Clock className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-ink">Store Hours</p>
                {business.hours.map((h) => (
                  <p key={h.days} className="text-sm text-ink-soft">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="flex flex-col gap-6 rounded-3xl bg-white p-6 sm:p-8">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">Send us a message</h2>
              <p className="mt-1 text-sm text-ink-soft">We usually reply within one business day.</p>
            </div>
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <MapPlaceholder />
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-coral-dark" />
                <div>
                  <p className="font-display font-bold text-ink">Visit Our Store</p>
                  <p className="text-sm text-ink-soft">
                    {business.address.line1}
                    <br />
                    {business.address.line2}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold text-ink">Follow us</p>
                <SocialIconLinks variant="light" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
