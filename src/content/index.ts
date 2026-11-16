import { el } from "./el";
import type { Locale, SiteContent } from "./types";

const dictionaries: Record<Locale, SiteContent> = { el };

export const defaultLocale: Locale = "el";

export function getContent(locale: Locale = defaultLocale): SiteContent {
  return dictionaries[locale];
}

export type { Locale, SiteContent };
