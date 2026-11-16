import { images } from "@/config/images";
import { site } from "@/config/site";

const dayMap = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
} as const;

/** Restaurant structured data — only verified facts are included. */
export function RestaurantJsonLd({ description }: { description: string }) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.legalName,
    alternateName: site.name,
    description,
    url: site.url,
    telephone: site.phone.international,
    email: site.email,
    image: [new URL(images.heroInterior.src, site.url).toString()],
    servesCuisine: site.servesCuisine,
    priceRange: site.priceRange,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: "Κεντρική Μακεδονία",
      addressCountry: site.address.country,
      ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    },
    areaServed: `${site.address.area}, ${site.address.city}`,
    sameAs: Object.values(site.social),
    ...(site.address.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng } }
      : {}),
    ...(site.menu.url ? { hasMenu: new URL(site.menu.url, site.url).toString() } : {}),
  };

  if (site.openingHours.verified) {
    data.openingHoursSpecification = site.openingHours.entries
      .filter((e) => e.opens && e.closes)
      .map((e) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[e.day],
        opens: e.opens,
        closes: e.closes,
      }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
