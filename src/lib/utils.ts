import { site } from "@/config/site";
import { sectionIds } from "@/config/navigation";

/** Minimal className joiner (avoids an extra dependency). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const telHref = `tel:${site.phone.international}`;
export const mailHref = `mailto:${site.email}`;

export const fullAddress = `${site.address.street}, ${site.address.area}, ${site.address.city}`;

export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `Grec, ${site.address.street}, ${site.address.city}`,
)}`;

export const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Grec ${site.address.street} ${site.address.city}`,
)}`;

/** Menu destination: configured URL, or the dining section as fallback. */
export function getMenuLink(): { href: string; external: boolean } {
  if (site.menu.url) {
    const external = site.menu.openInNewTab || /^https?:\/\//.test(site.menu.url);
    return { href: site.menu.url, external };
  }
  return { href: `#${sectionIds.menu}`, external: false };
}
