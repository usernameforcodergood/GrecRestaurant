import Image from "next/image";
import { Mail, MapPin, Navigation, Phone } from "lucide-react";
import { images } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { OpeningHours } from "./OpeningHours";
import { mailHref, mapsDirectionsHref, telHref } from "@/lib/utils";

export function Visit({ content, cta }: { content: SiteContent["visit"]; cta: SiteContent["cta"] }) {
  const img = images.ladadikaNight;

  return (
    <section id={sectionIds.contact} aria-labelledby="visit-title" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <SectionTitle id="visit-title" className="mt-6">
            {content.title}
          </SectionTitle>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink/75">{content.lead}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Reservation — the primary action */}
          <div className="grain-dark relative overflow-hidden rounded-[3px] bg-petrol-900 p-8 text-cream-50 sm:p-10 lg:col-span-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brass-300">
              {content.reservationTitle}
            </p>
            <a
              href={telHref}
              className="mt-5 block font-serif text-[2.4rem] leading-none tracking-tight text-cream-50 hover:text-brass-300 sm:text-5xl"
            >
              {site.phone.display}
            </a>
            <p className="mt-5 max-w-sm leading-relaxed text-cream-50/75">{content.reservationText}</p>
            <ButtonLink
              href={telHref}
              variant="brass"
              size="lg"
              className="mt-8 w-full sm:w-auto"
              icon={<Phone className="size-[1.05rem]" aria-hidden="true" />}
            >
              {cta.call}
            </ButtonLink>
          </div>

          {/* Address / email / hours */}
          <div className="grid gap-8 rounded-[3px] border border-petrol-900/12 bg-cream-100/60 p-8 sm:grid-cols-2 sm:p-10 lg:col-span-4 lg:grid-cols-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-petrol-600">
                <MapPin className="size-4" aria-hidden="true" />
                {content.addressLabel}
              </h3>
              <address className="mt-3 font-serif text-2xl not-italic leading-snug text-petrol-900">
                {site.address.street}
                <br />
                {site.address.area}, {site.address.city}
              </address>
              <ButtonLink
                href={mapsDirectionsHref}
                external
                variant="outline"
                className="mt-5"
                icon={<Navigation className="size-4" aria-hidden="true" />}
              >
                {cta.directions}
              </ButtonLink>
            </div>
            <div className="space-y-8">
              <OpeningHours labels={content} />
              <div>
                <h3 className="flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-petrol-600">
                  <Mail className="size-4" aria-hidden="true" />
                  {content.emailLabel}
                </h3>
                <a href={mailHref} className="mt-3 inline-block break-all text-[0.98rem] text-petrol-900 underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          {/* Atmosphere image linking to the map */}
          <a
            href={mapsDirectionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block min-h-[22rem] overflow-hidden rounded-[3px] lg:col-span-3"
            aria-label={`${cta.directions}: ${site.address.street}, ${site.address.city}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
              style={{ objectPosition: img.focal }}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-petrol-950/85 via-petrol-950/10 to-transparent" />
            <span className="absolute inset-x-6 bottom-6 text-cream-50">
              <span className="block font-script text-2xl text-brass-300">Λαδάδικα</span>
              <span className="mt-1 block text-sm text-cream-50/80">Θεσσαλονίκη</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
