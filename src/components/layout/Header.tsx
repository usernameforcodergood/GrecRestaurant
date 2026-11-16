"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone, X, BookOpen } from "lucide-react";
import { mainNav, sectionIds } from "@/config/navigation";
import { brand } from "@/config/images";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { cn, telHref } from "@/lib/utils";

interface HeaderProps {
  nav: SiteContent["nav"];
  menuLink: { href: string; external: boolean };
}

export function Header({ nav, menuLink }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;
  const menuAnchorProps = menuLink.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        solid
          ? "bg-cream-50/92 shadow-[0_1px_0_rgb(17_42_46/0.08)] backdrop-blur-md"
          : "bg-gradient-to-b from-petrol-950/60 to-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-cream-50 focus:px-4 focus:py-2 focus:text-sm focus:text-petrol-900"
      >
        {nav.skipToContent}
      </a>

      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href={`#${sectionIds.home}`} className="relative block h-12 w-[4.5rem] shrink-0" aria-label={`${site.name} — ${nav.home}`}>
          <Image
            src={brand.headerLogoCream.src}
            alt=""
            fill
            unoptimized
            priority
            className={cn("object-contain transition-opacity duration-500", solid ? "opacity-0" : "opacity-100")}
          />
          <Image
            src={brand.headerLogo.src}
            alt=""
            fill
            unoptimized
            priority
            className={cn("object-contain transition-opacity duration-500", solid ? "opacity-100" : "opacity-0")}
          />
        </a>

        <nav aria-label="Κύρια πλοήγηση" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "relative py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                    "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
                    solid ? "text-petrol-900 hover:text-petrol-600" : "text-cream-50 hover:text-brass-300",
                  )}
                >
                  {nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telHref}
            aria-label={`${nav.call} ${site.phone.display}`}
            className={cn(
              "inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors",
              solid ? "text-petrol-900 hover:bg-petrol-800/8" : "text-cream-50 hover:bg-cream-50/10",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden xl:inline">{site.phone.display}</span>
          </a>
          <a
            href={menuLink.href}
            {...menuAnchorProps}
            className={cn(
              "inline-flex h-11 items-center gap-2 rounded-full px-4 text-[0.72rem] font-bold uppercase tracking-[0.14em] transition-colors sm:px-5",
              solid ? "bg-petrol-800 text-cream-50 hover:bg-petrol-700" : "bg-cream-50 text-petrol-900 hover:bg-brass-300",
            )}
          >
            <BookOpen className="size-4" aria-hidden="true" />
            {nav.menu}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full transition-colors lg:hidden",
              solid ? "text-petrol-900 hover:bg-petrol-800/8" : "text-cream-50 hover:bg-cream-50/10",
            )}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile navigation — sibling of <header> so the header's backdrop-filter
          doesn't become its containing block */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="paper fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto border-t border-petrol-900/10 lg:hidden"
      >
        <nav aria-label="Κινητή πλοήγηση" className="flex min-h-full flex-col px-6 pb-10 pt-6">
          <ul className="divide-y divide-petrol-900/10">
            {mainNav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-serif text-[1.9rem] text-petrol-900"
                >
                  {nav[item.labelKey]}
                  <span aria-hidden="true" className="text-base text-petrol-500">→</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-10">
            <a
              href={menuLink.href}
              {...menuAnchorProps}
              onClick={() => setOpen(false)}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-petrol-800 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-cream-50"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              {nav.menu}
            </a>
            <a
              href={telHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-petrol-800/30 text-[0.95rem] font-semibold text-petrol-900"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone.display}
            </a>
            <p className="pt-2 text-center font-script text-xl text-petrol-600">{site.slogan}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
