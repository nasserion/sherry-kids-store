/**
 * Single source of truth for Sherry Kids Store's business information.
 * Update values here and they will be reflected everywhere on the site.
 */
export const business = {
  name: "Sherry Kids Store",
  tagline: "Little Styles. Big Smiles.",
  description:
    "Sherry Kids Store is a children's retail shop offering beautiful clothes, stylish footwear and exciting toys for children. Our goal is to help parents find quality, attractive and affordable products for their little ones in one convenient place.",
  shortDescription:
    "Children's clothes, shoes and toys in Kampala, Uganda.",
  phoneDisplay: "0760 780 999",
  phoneRaw: "0760780999",
  // Uganda country code applied for tel:/wa.me links. Update if the number changes.
  phoneInternational: "+256760780999",
  whatsappNumber: "256760780999",
  email: "myposuganda@gmail.com",
  address: {
    line1: "HAM SHOPPING GOUND",
    line2: "Block S, Room HS001",
    city: "Kampala, Uganda",
    full: "HAM SHOPPING GOUND, Block S, Room HS001, Kampala",
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { days: "Sunday", time: "11:00 AM – 5:00 PM" },
  ],
  social: {
    // TODO: swap in the verified profile URLs once confirmed by the business owner.
    instagram: {
      handle: "Sherry Kids Store",
      url: "https://instagram.com/sherrykidsstore",
    },
    tiktok: {
      handle: "SherryKidsStore",
      url: "https://tiktok.com/@sherrykidsstore",
    },
  },
  // Placeholder coordinates for HAM Shopping Grounds, Kampala — replace with the
  // exact pin once available and swap the embed for a live Google Maps iframe.
  mapQuery: "HAM Shopping Grounds, Kampala, Uganda",
} as const;

export const currency = {
  code: "UGX",
  symbol: "USh",
};
