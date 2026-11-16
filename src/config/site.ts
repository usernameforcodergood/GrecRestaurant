/**
 * Central business configuration for Grec.
 *
 * Everything factual about the restaurant lives here so it can be edited
 * without touching components. Values marked `verified: false` or set to
 * `null` are intentionally left unpublished until the restaurant confirms them.
 *
 * Sources used for the verified values (checked 16 Nov 2026):
 *  - facebook.com/grecrestaurant (intro, address, phone, email, socials)
 *  - incredible-greece.com/grec-restaurant (address, phone)
 *  - restaurantguru.com listing (phone, address)
 */

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface OpeningHoursEntry {
  day: DayKey;
  /** 24h "HH:MM". `null` means closed that day. */
  opens: string | null;
  closes: string | null;
}

export interface Performance {
  /** ISO date, e.g. "2026-11-20" */
  date: string;
  /** Optional start time "HH:MM" */
  time?: string;
  title: string;
  artists?: string[];
  note?: string;
}

export const site = {
  name: "Grec",
  legalName: "Grec Restaurant",
  tagline: "Creative Greek Cuisine",
  /** Restaurant's own description on its Facebook page */
  descriptor: "Μουσική Ταβέρνα στα Λαδάδικα",
  /** Restaurant's own slogan (Facebook cover) */
  slogan: "Εδώ. Όπως παλιά. Όπως πάντα.",

  /** TODO: set NEXT_PUBLIC_SITE_URL to the final production domain before launch. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address: {
    street: "Αιγύπτου 21",
    area: "Λαδάδικα",
    city: "Θεσσαλονίκη",
    postalCode: null as string | null, // TODO: confirm (likely 546 25)
    country: "GR",
    /** Approximate — TODO: confirm exact pin with the restaurant */
    geo: null as { lat: number; lng: number } | null,
  },

  phone: {
    display: "2316 017 820",
    international: "+302316017820",
  },

  email: "grecthessaloniki@gmail.com",

  social: {
    facebook: "https://www.facebook.com/grecrestaurant/",
    instagram: "https://www.instagram.com/grec_skg/",
    tiktok: "https://www.tiktok.com/@grec_skg",
  },

  /**
   * Menu destination. Set to a PDF in /public (e.g. "/menu/grec-menu.pdf")
   * or to a page / external URL. While `null`, menu buttons scroll to the
   * dining section, which explains the menu is coming soon.
   */
  menu: {
    url: null as string | null,
    openInNewTab: true,
  },

  /**
   * Opening hours — NOT yet verified, so nothing is published.
   * Fill in all seven days and set `verified: true` to show them on the site
   * and in the structured data.
   */
  openingHours: {
    verified: true, // confirmed by the owner, 16 Nov 2026
    entries: [
      { day: "monday", opens: null, closes: null },
      { day: "tuesday", opens: null, closes: null },
      { day: "wednesday", opens: null, closes: null },
      { day: "thursday", opens: "18:00", closes: "02:00" },
      { day: "friday", opens: "18:00", closes: "02:00" },
      { day: "saturday", opens: "18:00", closes: "02:00" },
      { day: "sunday", opens: "18:00", closes: "02:00" },
    ] as OpeningHoursEntry[],
    note: "Οι ώρες λειτουργίας αλλάζουν ανά εποχή — καλέστε μας ή δείτε τις ανακοινώσεις μας.",
  },

  /**
   * Upcoming live-music nights. Leave empty until the restaurant publishes
   * a programme — the section then points visitors to Facebook/Instagram.
   */
  performances: [] as Performance[],

  priceRange: "€€",
  servesCuisine: ["Greek", "Ελληνική κουζίνα"],

  /**
   * Hero media. Add a short muted interior video (mp4/webm in
   * /public/video) to use it as the hero background, like an ambient loop.
   */
  heroVideo: null as { src: string; type: string } | null,
} as const;

export type Site = typeof site;
