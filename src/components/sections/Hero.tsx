import Image from "next/image";
import { BookOpen, Clock, MapPin, Music2, Phone } from "lucide-react";
import { images } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { telHref } from "@/lib/utils";

interface HeroProps {
  content: SiteContent["hero"];
  cta: SiteContent["cta"];
  menuLink: { href: string; external: boolean };
}

export function Hero({ content, cta, menuLink }: HeroProps) {
  const img = images.heroInterior;

  return (
    <section
      id={sectionIds.home}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-petrol-950 text-cream-50"
    >
      {/* Media */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: img.focal }}
        />
        {site.heroVideo && (
          <video
            className="absolute inset-0 size-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={img.src}
            aria-hidden="true"
          >
            <source src={site.heroVideo.src} type={site.heroVideo.type} />
          </video>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(12_30_33/0.6)_0%,rgb(12_30_33/0.2)_28%,rgb(12_30_33/0.55)_58%,rgb(12_30_33/0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(95%_75%_at_0%_100%,rgb(12_30_33/0.8),transparent)]" />
        <div className="absolute inset-0 bg-petrol-950/30 sm:hidden" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:pb-16">
        <div className="max-w-3xl">
          <p className="font-script text-[1.3rem] leading-tight text-brass-300 drop-shadow-[0_2px_10px_rgb(12_30_33/0.8)] sm:text-3xl">
            {site.slogan}
          </p>

          <h1
            id="hero-title"
            className="mt-4 font-serif text-[2.9rem] font-medium leading-[0.98] tracking-[-0.015em] text-balance sm:text-7xl lg:text-[5.6rem]"
          >
            {content.title}
          </h1>

          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-cream-50/85 sm:text-lg">{content.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={menuLink.href}
              external={menuLink.external}
              variant="brass"
              size="lg"
              icon={<BookOpen className="size-[1.05rem]" aria-hidden="true" />}
            >
              {cta.menu}
            </ButtonLink>
            <ButtonLink href={`#${sectionIds.contact}`} variant="outline-light" size="lg">
              {cta.contact}
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-3 border-t border-cream-50/20 pt-6 text-sm text-cream-50/80 sm:flex sm:flex-wrap">
          <li className="flex items-center gap-2.5">
            <MapPin className="size-4 text-brass-300" aria-hidden="true" />
            {content.facts[0]}
          </li>
          <li className="flex items-center gap-2.5">
            <Music2 className="size-4 text-brass-300" aria-hidden="true" />
            {content.facts[1]}
          </li>
          {content.facts[2] && (
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 text-brass-300" aria-hidden="true" />
              {content.facts[2]}
            </li>
          )}
          <li>
            <a href={telHref} className="flex items-center gap-2.5 underline-offset-4 hover:text-cream-50 hover:underline">
              <Phone className="size-4 text-brass-300" aria-hidden="true" />
              {site.phone.display}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
