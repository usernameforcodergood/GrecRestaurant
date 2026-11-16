export const sectionIds = {
  home: "arxiki",
  restaurant: "estiatorio",
  dining: "trapezi",
  menu: "menu",
  music: "zontani-mousiki",
  gallery: "gallery",
  contact: "epikoinonia",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export interface NavItem {
  id: SectionId;
  /** key into content.nav */
  labelKey: "home" | "restaurant" | "music" | "gallery" | "contact";
}

export const mainNav: NavItem[] = [
  { id: sectionIds.home, labelKey: "home" },
  { id: sectionIds.restaurant, labelKey: "restaurant" },
  { id: sectionIds.music, labelKey: "music" },
  { id: sectionIds.gallery, labelKey: "gallery" },
  { id: sectionIds.contact, labelKey: "contact" },
];
