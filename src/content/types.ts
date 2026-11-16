export type Locale = "el";

export interface SiteContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    ogImageAlt: string;
  };
  nav: {
    home: string;
    restaurant: string;
    music: string;
    gallery: string;
    contact: string;
    menu: string;
    openMenu: string;
    closeMenu: string;
    call: string;
    skipToContent: string;
  };
  cta: {
    menu: string;
    contact: string;
    call: string;
    directions: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    facts: string[];
  };
  restaurant: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    pillars: { title: string; text: string }[];
  };
  dining: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    menuTitle: string;
    menuText: string;
    menuPending: string;
  };
  music: {
    script: string;
    title: string;
    lead: string;
    genres: string[];
    paragraphs: string[];
    programmeTitle: string;
    programmeEmpty: string;
    programmeFollow: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    filters: { all: string; interior: string; music: string; evenings: string; food: string };
    close: string;
    previous: string;
    next: string;
    open: string;
  };
  visit: {
    eyebrow: string;
    title: string;
    lead: string;
    addressLabel: string;
    phoneLabel: string;
    reservationTitle: string;
    reservationText: string;
    emailLabel: string;
    hoursTitle: string;
    hoursPending: string;
    days: Record<
      "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday",
      string
    >;
    closed: string;
  };
  footer: {
    rights: string;
    follow: string;
    navTitle: string;
    contactTitle: string;
  };
}
