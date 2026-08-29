import { Category, Product } from "./types";

/**
 * DEMO DATA
 * ---------
 * This file is the site's only data source for products and categories.
 * Every page reads from the helper functions below, so swapping this array
 * for a database query, CMS call, or API fetch later requires no changes to
 * any page or component — only to this file.
 */

export const categories: Category[] = [
  {
    slug: "clothes",
    name: "Kids Clothes",
    description:
      "Children's dresses, shirts, trousers, sets, baby clothes and other kids' fashion.",
    ctaLabel: "Shop Clothes",
    gradient: ["#ffd9e3", "#ffe9ee"],
    icon: "clothes",
  },
  {
    slug: "shoes",
    name: "Kids Shoes",
    description:
      "Children's sneakers, sandals, casual shoes, baby shoes and other footwear.",
    ctaLabel: "Shop Shoes",
    gradient: ["#dcefff", "#eef7ff"],
    icon: "shoes",
  },
  {
    slug: "toys",
    name: "Toys",
    description:
      "Educational toys, dolls, cars, games and children's entertainment products.",
    ctaLabel: "Shop Toys",
    gradient: ["#ede3ff", "#f4edff"],
    icon: "toys",
  },
];

export const products: Product[] = [
  {
    id: "p1",
    slug: "sunshine-floral-dress",
    name: "Sunshine Floral Dress",
    category: "clothes",
    price: 65000,
    oldPrice: 85000,
    description: "A twirl-ready cotton dress with a cheerful floral print.",
    longDescription:
      "Made from soft, breathable cotton, the Sunshine Floral Dress keeps little ones comfortable from playground to party. A gentle elastic waist and flutter sleeves make it easy to move in, while the cheerful floral print adds a pop of color to any outfit. Machine washable and built to last through many adventures.",
    badges: ["Sale"],
    sizes: ["1-2Y", "3-4Y", "5-6Y", "7-8Y"],
    colors: ["Pink", "Yellow"],
    inStock: true,
    isFeatured: true,
    gradient: ["#ffd9e3", "#fff0e9"],
  },
  {
    id: "p2",
    slug: "little-explorer-dungarees",
    name: "Little Explorer Dungarees",
    category: "clothes",
    price: 72000,
    description: "Durable denim dungarees built for climbing and play.",
    longDescription:
      "Tough enough for the sandpit and soft enough for a nap, these denim dungarees feature adjustable straps that grow with your child and roomy pockets for treasures collected along the way. Pair with any t-shirt for an easy everyday look.",
    badges: ["New"],
    sizes: ["1-2Y", "3-4Y", "5-6Y"],
    colors: ["Blue", "Khaki"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    gradient: ["#dcefff", "#eaf6ff"],
  },
  {
    id: "p3",
    slug: "cloud-soft-romper",
    name: "Cloud-Soft Baby Romper",
    category: "clothes",
    price: 38000,
    description: "A featherlight romper for the newest members of the family.",
    longDescription:
      "Designed for delicate baby skin, this romper uses a brushed-cotton blend that stays gentle wash after wash. Snap closures along the bottom make nappy changes quick and fuss-free.",
    sizes: ["0-3M", "3-6M", "6-12M"],
    colors: ["Cream", "Sky Blue", "Blush"],
    inStock: true,
    gradient: ["#eae1fb", "#f4edff"],
  },
  {
    id: "p4",
    slug: "rainbow-stripe-tee-set",
    name: "Rainbow Stripe Tee & Shorts Set",
    category: "clothes",
    price: 54000,
    oldPrice: 68000,
    description: "A matching two-piece set for warm, sunny days.",
    longDescription:
      "This breathable cotton tee and shorts set is a warm-weather staple. The relaxed fit is perfect for running around, and the bold stripe pattern makes laundry-day matching effortless.",
    badges: ["Sale"],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    colors: ["Multi", "Blue"],
    inStock: true,
    isFeatured: true,
    gradient: ["#fff2cf", "#fff7e2"],
  },
  {
    id: "p5",
    slug: "starlight-party-dress",
    name: "Starlight Party Dress",
    category: "clothes",
    price: 98000,
    description: "A special-occasion dress with a subtle shimmer overlay.",
    longDescription:
      "Perfect for birthdays and celebrations, the Starlight Party Dress pairs a soft cotton lining with a shimmer tulle overlay. A hidden back zip makes dressing quick, and the flared skirt is made for twirling.",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Lilac", "Pink"],
    inStock: true,
    gradient: ["#ffe3e9", "#fff0f4"],
  },
  {
    id: "p6",
    slug: "everyday-hoodie",
    name: "Everyday Cozy Hoodie",
    category: "clothes",
    price: 60000,
    description: "A brushed-fleece hoodie for cooler evenings.",
    longDescription:
      "Soft on the inside and durable on the outside, this hoodie is built for daily wear. A kangaroo pocket keeps little hands warm, and the ribbed cuffs hold their shape through countless washes.",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    colors: ["Grey", "Coral", "Navy"],
    inStock: true,
    isNewArrival: true,
    gradient: ["#dcefff", "#e8f4ff"],
  },
  {
    id: "p7",
    slug: "bouncy-step-sneakers",
    name: "Bouncy Step Sneakers",
    category: "shoes",
    price: 85000,
    description: "Lightweight sneakers with extra cushioning for active feet.",
    longDescription:
      "Built for busy days, Bouncy Step Sneakers combine a flexible rubber sole with a cushioned footbed to keep up with running, jumping and everything in between. A hook-and-loop strap makes them easy for little ones to put on themselves.",
    badges: ["New"],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    colors: ["White/Pink", "Grey/Blue"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    gradient: ["#dcefff", "#eef7ff"],
  },
  {
    id: "p8",
    slug: "summer-splash-sandals",
    name: "Summer Splash Sandals",
    category: "shoes",
    price: 45000,
    oldPrice: 55000,
    description: "Quick-dry sandals made for water play and warm days.",
    longDescription:
      "With a quick-dry footbed and adjustable straps, these sandals move easily from garden hose to beach shore. A textured sole adds grip on wet surfaces.",
    badges: ["Sale"],
    sizes: ["UK 5", "UK 6", "UK 7", "UK 8"],
    colors: ["Coral", "Aqua"],
    inStock: true,
    gradient: ["#fff2cf", "#fff8e5"],
  },
  {
    id: "p9",
    slug: "first-steps-booties",
    name: "First Steps Booties",
    category: "shoes",
    price: 40000,
    description: "Soft-soled booties designed for a baby's very first steps.",
    longDescription:
      "Flexible, soft-soled and lightweight, these booties support natural foot movement while your little one is learning to walk. An elastic ankle keeps them snugly in place.",
    sizes: ["UK 2", "UK 3", "UK 4"],
    colors: ["Cream", "Grey"],
    inStock: true,
    gradient: ["#eae1fb", "#f4edff"],
  },
  {
    id: "p10",
    slug: "everyday-school-shoes",
    name: "Everyday School Shoes",
    category: "shoes",
    price: 78000,
    description: "Smart, durable shoes built for the school run.",
    longDescription:
      "A polished look with all-day comfort, these school shoes feature a reinforced toe, cushioned insole and an easy buckle closure — built to handle busy classrooms and playgrounds alike.",
    sizes: ["UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    colors: ["Black", "Brown"],
    inStock: true,
    isFeatured: true,
    gradient: ["#dcefff", "#eaf6ff"],
  },
  {
    id: "p11",
    slug: "rainy-day-boots",
    name: "Rainy Day Gumboots",
    category: "shoes",
    price: 42000,
    description: "Waterproof boots for puddle-jumping season.",
    longDescription:
      "Fully waterproof and easy to pull on, these gumboots are made for splashing through puddles with confidence. A textured sole keeps little feet steady on slick paths.",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9"],
    colors: ["Yellow", "Navy"],
    inStock: true,
    isNewArrival: true,
    gradient: ["#fff2cf", "#fff8e5"],
  },
  {
    id: "p12",
    slug: "wooden-shape-sorter",
    name: "Wooden Shape Sorter",
    category: "toys",
    price: 35000,
    description: "A classic wooden toy that builds early problem-solving skills.",
    longDescription:
      "Handcrafted from smooth, child-safe wood, this shape sorter helps toddlers develop fine motor skills, color recognition and shape matching — all through playful, screen-free fun.",
    sizes: ["One Size"],
    colors: ["Natural Wood"],
    inStock: true,
    isFeatured: true,
    gradient: ["#eae1fb", "#f4edff"],
  },
  {
    id: "p13",
    slug: "dream-house-dollset",
    name: "Dream House Doll Set",
    category: "toys",
    price: 120000,
    oldPrice: 145000,
    description: "A three-story dollhouse with furniture and a doll family.",
    longDescription:
      "Complete with furnished rooms, a working elevator and a family of dolls, the Dream House sparks imaginative storytelling for hours. Easy-assembly pieces snap together without tools.",
    badges: ["Sale"],
    sizes: ["One Size"],
    colors: ["Multicolor"],
    inStock: true,
    isFeatured: true,
    gradient: ["#ffe3e9", "#fff0f4"],
  },
  {
    id: "p14",
    slug: "speedster-race-car-set",
    name: "Speedster Race Car Set",
    category: "toys",
    price: 58000,
    description: "A pull-back race car set with a foldable track.",
    longDescription:
      "Four pull-back race cars and a foldable loop track fit neatly into a carry case for on-the-go play. No batteries required — just pull back and let them race.",
    sizes: ["One Size"],
    colors: ["Multicolor"],
    inStock: true,
    isNewArrival: true,
    gradient: ["#dcefff", "#eaf6ff"],
  },
  {
    id: "p15",
    slug: "learning-letters-puzzle",
    name: "Learning Letters Puzzle",
    category: "toys",
    price: 28000,
    description: "A chunky alphabet puzzle for early learners.",
    longDescription:
      "Bright, chunky pieces make this alphabet puzzle easy for small hands to grip while introducing letter shapes and sounds. Finished with a smooth, splinter-free coating.",
    sizes: ["One Size"],
    colors: ["Multicolor"],
    inStock: true,
    gradient: ["#fff2cf", "#fff8e5"],
  },
  {
    id: "p16",
    slug: "cuddle-buddy-bear",
    name: "Cuddle Buddy Bear",
    category: "toys",
    price: 32000,
    description: "An ultra-soft plush bear made for bedtime hugs.",
    longDescription:
      "Finished in hypoallergenic, machine-washable plush, Cuddle Buddy Bear is soft enough for the youngest family members and sized just right for nap-time cuddles.",
    badges: ["New"],
    sizes: ["Small", "Large"],
    colors: ["Honey", "Cream"],
    inStock: true,
    isFeatured: true,
    isNewArrival: true,
    gradient: ["#eae1fb", "#f4edff"],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(amount: number): string {
  return `USh ${amount.toLocaleString("en-UG")}`;
}
