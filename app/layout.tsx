import type { Metadata } from "next";
import "@fontsource/baloo-2/500.css";
import "@fontsource/baloo-2/600.css";
import "@fontsource/baloo-2/700.css";
import "@fontsource/baloo-2/800.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCallButton } from "@/components/layout/floating-call-button";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CartProvider } from "@/context/cart-context";
import { business } from "@/lib/business";

const siteUrl = "https://www.sherrykidsstore.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Kids Clothes, Shoes & Toys in Kampala`,
    template: `%s | ${business.name}`,
  },
  description:
    "Sherry Kids Store is a trusted children's store in Kampala offering kids clothes, children's shoes and toys at HAM Shopping Grounds, Block S, Room HS001. Shop dresses, sneakers, dolls and more.",
  keywords: [
    "kids clothes Uganda",
    "children's shoes Uganda",
    "kids toys Uganda",
    "children's store Kampala",
    "Sherry Kids Store",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Kids Clothes, Shoes & Toys in Kampala`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Kids Clothes, Shoes & Toys in Kampala`,
    description: business.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-coral focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <CartProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingCallButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
