import { galleryOrder, images } from "@/config/images";
import { sectionIds } from "@/config/navigation";
import type { SiteContent } from "@/content";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "./GalleryGrid";

export function Gallery({ content }: { content: SiteContent["gallery"] }) {
  const items = galleryOrder.map((key) => ({ key, ...images[key] }));

  return (
    <section id={sectionIds.gallery} aria-labelledby="gallery-title" className="paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <SectionTitle id="gallery-title" className="mt-6">
              {content.title}
            </SectionTitle>
          </div>
        </div>
        <GalleryGrid items={items} labels={content} />
      </div>
    </section>
  );
}
