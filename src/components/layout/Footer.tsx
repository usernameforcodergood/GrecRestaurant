import Image from "next/image";
import { brand } from "@/config/images";
import { mainNav } from "@/config/navigation";
import { site } from "@/config/site";
import type { SiteContent } from "@/content";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";
import { OliveBranch } from "@/components/ui/OliveBranch";
import { mailHref, mapsSearchHref, telHref } from "@/lib/utils";

export function Footer({ content, nav }: { content: SiteContent["footer"]; nav: SiteContent["nav"] }) {
  const socials = [
    { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
    { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
  ];

  return (
    <footer className="grain-dark relative overflow-hidden bg-petrol-900 text-cream-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-20 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image
            src={brand.logoCream.src}
            alt={`${site.name} — ${site.tagline}`}
            width={160}
            height={Math.round((160 * brand.logoCream.height) / brand.logoCream.width)}
            className="w-40"
          />
          <p className="mt-6 font-script text-2xl text-brass-300">{site.slogan}</p>
          <p className="mt-2 text-sm text-cream-50/65">{site.descriptor}</p>
        </div>

        <nav aria-label={content.navTitle} className="lg:col-span-3">
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cream-50/50">{content.navTitle}</h2>
          <ul className="mt-5 space-y-3">
            {mainNav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-cream-50/85 hover:text-brass-300">
                  {nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cream-50/50">{content.contactTitle}</h2>
          <ul className="mt-5 space-y-3 text-cream-50/85">
            <li>
              <a href={mapsSearchHref} target="_blank" rel="noopener noreferrer" className="hover:text-brass-300">
                {site.address.street}, {site.address.area}, {site.address.city}
              </a>
            </li>
            <li>
              <a href={telHref} className="hover:text-brass-300">
                {site.phone.display}
              </a>
            </li>
            <li>
              <a href={mailHref} className="break-all hover:text-brass-300">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cream-50/50">{content.follow}</p>
          <ul className="mt-4 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} στο ${label}`}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-cream-50/25 text-cream-50 transition-colors hover:border-brass-300 hover:text-brass-300"
                >
                  <Icon className="size-[1.1rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-cream-50/12 px-5 py-6 text-xs text-cream-50/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.legalName}. {content.rights}
        </p>
        <OliveBranch className="w-24 text-mint-400/40" />
      </div>
    </footer>
  );
}
