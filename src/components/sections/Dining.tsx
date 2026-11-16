import Image from "next/image";
import { BookOpen, Phone } from "lucide-react";
import { images } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { OliveBranch } from "@/components/ui/OliveBranch";
import { Reveal } from "@/components/ui/Reveal";
import { telHref } from "@/lib/utils";

/**
 * Food & dining + menu call to action.
 * TODO: when the restaurant supplies dish photography, add `food` images to
 * the registry and swap `images.throughWindow` for a dish photo here.
 */
export function Dining({
  content,
  cta,
  menuLink,
}: {
  content: SiteContent["dining"];
  cta: SiteContent["cta"];
  menuLink: { href: string; external: boolean };
}) {
  const img = images.throughWindow;
  const hasMenu = Boolean(site.menu.url);

  return (
    <section id={sectionIds.dining} aria-labelledby="dining-title" className="relative bg-cream-50">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[26rem] sm:min-h-[34rem] lg:min-h-full">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: img.focal }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-900/35 to-transparent" />
        </div>

        <div className="flex items-center px-5 py-20 sm:px-12 sm:py-28 lg:px-16 xl:px-24">
          <Reveal className="max-w-xl">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <SectionTitle id="dining-title" className="mt-6">
              {content.title}
            </SectionTitle>
            <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.8] text-ink/80">
              {content.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            {/* Menu card — styled after a vintage tavern sign */}
            <div
              id={sectionIds.menu}
              className="grain-dark relative mt-12 overflow-hidden rounded-[3px] bg-petrol-900 p-8 text-cream-50 shadow-[0_30px_60px_-35px_rgb(17_42_46/0.9)] sm:p-10"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-2.5 rounded-[2px] border border-brass-300/35" />
              <OliveBranch className="absolute right-7 top-7 hidden w-28 rotate-[-6deg] text-mint-400/35 sm:block" />
              <p className="font-script text-2xl text-brass-300">{content.menuTitle}</p>
              <p className="mt-3 max-w-sm text-[0.98rem] leading-relaxed text-cream-50/80">
                {hasMenu ? content.menuText : content.menuPending}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {hasMenu ? (
                  <ButtonLink
                    href={menuLink.href}
                    external={menuLink.external}
                    variant="brass"
                    size="lg"
                    icon={<BookOpen className="size-[1.05rem]" aria-hidden="true" />}
                  >
                    {cta.menu}
                  </ButtonLink>
                ) : (
                  <ButtonLink
                    href={telHref}
                    variant="brass"
                    size="lg"
                    icon={<Phone className="size-[1.05rem]" aria-hidden="true" />}
                  >
                    {site.phone.display}
                  </ButtonLink>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
