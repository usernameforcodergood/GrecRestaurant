import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { images, type SiteImage } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function Photo({ img, sizes, className }: { img: SiteImage; sizes: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2px] bg-petrol-900", className)}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-soft)] hover:scale-[1.03]"
        style={{ objectPosition: img.focal }}
      />
    </div>
  );
}

const dateFmt = new Intl.DateTimeFormat("el-GR", { weekday: "long", day: "numeric", month: "long" });

export function LiveMusic({ content }: { content: SiteContent["music"] }) {
  const upcoming = site.performances
    .filter((p) => new Date(`${p.date}T23:59:59`) >= new Date())
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section
      id={sectionIds.music}
      aria-labelledby="music-title"
      className="grain-dark relative overflow-hidden bg-petrol-950 py-24 text-cream-50 sm:py-32"
    >
      {/* warm stage glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(224_72_47/0.16),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading block */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="neon-glow font-script text-3xl text-[#ff8a6e] sm:text-4xl">{content.script}</p>
          <h2
            id="music-title"
            className="mt-4 font-serif text-[2.6rem] font-medium leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl lg:text-7xl"
          >
            {content.title}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl font-serif text-xl italic leading-relaxed text-cream-50/80 sm:text-2xl">
            «{content.lead}»
          </p>
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brass-300">
            {content.genres.map((g, i) => (
              <li key={g} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-brass-300/60" />}
                {g}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mosaic */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[repeat(2,minmax(0,17rem))]">
          <Photo
            img={images.bandStage}
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="col-span-2 aspect-[4/3] lg:col-span-5 lg:row-span-2 lg:aspect-auto"
          />
          <Photo
            img={images.bouzouki}
            sizes="(min-width: 1024px) 24vw, 50vw"
            className="aspect-[4/5] lg:col-span-3 lg:aspect-auto"
          />
          <Photo
            img={images.zeibekiko}
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="aspect-[4/5] lg:col-span-4 lg:row-span-2 lg:aspect-auto"
          />
          <Photo
            img={images.guestBaglamas}
            sizes="(min-width: 1024px) 24vw, 100vw"
            className="col-span-2 aspect-[16/10] lg:col-span-3 lg:aspect-auto"
          />
        </div>

        {/* Copy + programme */}
        <div className="mt-16 grid gap-12 sm:mt-20 lg:grid-cols-12 lg:gap-10">
          <Reveal className="space-y-5 text-[1.05rem] leading-[1.85] text-cream-50/78 lg:col-span-6">
            {content.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
            <div className="relative rounded-[3px] border border-brass-300/30 bg-petrol-900/70 p-7 sm:p-9">
              <h3 className="flex items-center gap-3 font-serif text-2xl text-cream-50">
                <CalendarDays className="size-5 text-brass-300" aria-hidden="true" />
                {content.programmeTitle}
              </h3>

              {upcoming.length > 0 ? (
                <ul className="mt-6 divide-y divide-cream-50/10">
                  {upcoming.map((p) => (
                    <li key={`${p.date}-${p.title}`} className="py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass-300">
                        {dateFmt.format(new Date(`${p.date}T12:00:00`))}
                        {p.time && ` · ${p.time}`}
                      </p>
                      <p className="mt-1 font-serif text-xl">{p.title}</p>
                      {p.artists && <p className="mt-1 text-sm text-cream-50/70">{p.artists.join(" · ")}</p>}
                      {p.note && <p className="mt-1 text-sm text-cream-50/55">{p.note}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 leading-relaxed text-cream-50/75">{content.programmeEmpty}</p>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink
                  href={site.social.facebook}
                  external
                  variant="outline-light"
                  icon={<FacebookIcon className="size-4" />}
                  aria-label={`${content.programmeFollow} — Facebook`}
                >
                  Facebook
                </ButtonLink>
                <ButtonLink
                  href={site.social.instagram}
                  external
                  variant="outline-light"
                  icon={<InstagramIcon className="size-4" />}
                  aria-label={`${content.programmeFollow} — Instagram`}
                >
                  Instagram
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
