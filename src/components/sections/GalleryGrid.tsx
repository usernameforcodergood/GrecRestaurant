"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import type { ImageCategory, SiteImage } from "@/config/images";
import type { SiteContent } from "@/content";
import { cn } from "@/lib/utils";

type Item = SiteImage & { key: string };
type Filter = "all" | ImageCategory;

/**
 * Editorial tiling: bands of varied widths on desktop (12 cols),
 * alternating full / half tiles on mobile (2 cols). Repeats every 10.
 */
const desktopTiles = [
  "lg:col-span-5 lg:row-span-3",
  "lg:col-span-3 lg:row-span-3",
  "lg:col-span-4 lg:row-span-3",
  "lg:col-span-7 lg:row-span-3",
  "lg:col-span-5 lg:row-span-3",
  "lg:col-span-3 lg:row-span-3",
  "lg:col-span-5 lg:row-span-3",
  "lg:col-span-4 lg:row-span-3",
  "lg:col-span-12 lg:row-span-3",
];
function tile(i: number) {
  const mobile = i % 3 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-2";
  return `${mobile} ${desktopTiles[i % desktopTiles.length]}`;
}

export function GalleryGrid({ items, labels }: { items: Item[]; labels: SiteContent["gallery"] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const filters = useMemo(() => {
    const present = new Set(items.map((i) => i.category));
    return (["all", "interior", "music", "evenings", "food"] as Filter[]).filter((f) => f === "all" || present.has(f as ImageCategory));
  }, [items]);

  const visible = useMemo(() => (filter === "all" ? items : items.filter((i) => i.category === filter)), [items, filter]);

  const open = (index: number, trigger: HTMLButtonElement) => {
    lastTrigger.current = trigger;
    setActive(index);
  };

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active !== null && !d.open) d.showModal();
    if (active === null && d.open) {
      d.close();
      lastTrigger.current?.focus();
    }
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, step]);

  // basic swipe support for phones
  const touchX = useRef<number | null>(null);

  const current = active !== null ? visible[active] : null;

  return (
    <>
      <div role="group" aria-label="Φίλτρα gallery" className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "h-10 rounded-full border px-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors",
              filter === f
                ? "border-petrol-800 bg-petrol-800 text-cream-50"
                : "border-petrol-800/25 text-petrol-900 hover:border-petrol-800",
            )}
          >
            {labels.filters[f]}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-flow-dense auto-rows-[8.5rem] grid-cols-2 gap-3 sm:auto-rows-[10rem] sm:gap-4 lg:auto-rows-[9.5rem] lg:grid-cols-12">
        {visible.map((img, i) => (
          <li key={img.key} className={cn("relative", tile(i))}>
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              className="group absolute inset-0 block overflow-hidden rounded-[2px] bg-parchment-300"
              aria-label={`${labels.open}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                style={{ objectPosition: img.focal }}
              />
              <span className="absolute inset-0 bg-petrol-950/0 transition-colors duration-500 group-hover:bg-petrol-950/25" />
              <Expand
                aria-hidden="true"
                className="absolute bottom-3 right-3 size-5 text-cream-50 opacity-0 drop-shadow transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={current?.alt ?? "Gallery"}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-petrol-950/96 p-0 text-cream-50 backdrop:bg-petrol-950/80"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-xs tracking-[0.2em] text-cream-50/60" aria-live="polite">
                {active! + 1} / {visible.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex size-11 items-center justify-center rounded-full hover:bg-cream-50/10"
                aria-label={labels.close}
                autoFocus
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="relative flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain px-2 sm:px-20"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-petrol-950/50 hover:bg-cream-50/15 sm:left-5"
                aria-label={labels.previous}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-petrol-950/50 hover:bg-cream-50/15 sm:right-5"
                aria-label={labels.next}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </div>
            <p className="mx-auto max-w-2xl px-6 py-5 text-center text-sm leading-relaxed text-cream-50/75">{current.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
