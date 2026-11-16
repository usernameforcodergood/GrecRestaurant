import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Pre-launch we still allow crawling, so search engines can read the
  // noindex tag/header and drop the site. Blocking crawling here would hide
  // that tag and the bare URL could still show up in results.
  if (!site.indexable) {
    return { rules: { userAgent: "*", allow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
