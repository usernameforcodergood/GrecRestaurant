import Image from "next/image";
import { images, brand } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import type { SiteContent } from "@/content";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { OliveBranch } from "@/components/ui/OliveBranch";
import { Reveal } from "@/components/ui/Reveal";

export function Restaurant({ content }: { content: SiteContent["restaurant"] }) {
  const main = images.salonPosters;
  const side = images.musiciansStairs;

  return (
    <section
      id={sectionIds.restaurant}
      aria-labelledby="restaurant-title"
      className="paper relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Copy */}
        <Reveal className="lg:col-span-5">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <SectionTitle id="restaurant-title" className="mt-6">
            {content.title}
          </SectionTitle>
          <OliveBranch className="mt-7 w-40" />
          <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.8] text-ink/80">
            {content.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 border-t border-petrol-900/12 pt-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {content.pillars.map((pillar) => (
              <div key={pillar.title}>
                <dt className="font-serif text-xl text-petrol-800">{pillar.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink/65">{pillar.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Editorial image composition */}
        <Reveal className="relative lg:col-span-7" delay={120}>
          <div className="relative ml-auto aspect-[1010/901] w-full overflow-hidden rounded-[2px] shadow-[0_40px_80px_-40px_rgb(43_28_18/0.6)] sm:w-[88%]">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 1024px) 52vw, (min-width: 640px) 80vw, 100vw"
              className="object-cover"
              style={{ objectPosition: main.focal }}
            />
          </div>
          <figure className="relative -mt-24 ml-0 w-[46%] max-w-[17rem] sm:-mt-40 sm:w-[38%]">
            <div className="relative aspect-[4/5] overflow-hidden border-[6px] border-cream-50 shadow-[0_30px_60px_-30px_rgb(43_28_18/0.7)] sm:border-8">
              <Image
                src={side.src}
                alt={side.alt}
                fill
                sizes="(min-width: 1024px) 18rem, 46vw"
                className="object-cover"
                style={{ objectPosition: side.focal }}
              />
            </div>
          </figure>
          <Image
            src={brand.logo.src}
            alt=""
            width={176}
            height={Math.round((176 * brand.logo.height) / brand.logo.width)}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-0 hidden w-44 opacity-[0.16] sm:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
