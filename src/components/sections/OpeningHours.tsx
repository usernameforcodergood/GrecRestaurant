import { Clock } from "lucide-react";
import { site, type DayKey } from "@/config/site";
import type { SiteContent } from "@/content";

const order: DayKey[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

/**
 * Editable opening hours. Renders the table only when
 * `site.openingHours.verified` is true; otherwise a neutral fallback.
 */
export function OpeningHours({ labels }: { labels: SiteContent["visit"] }) {
  const { verified, entries } = site.openingHours;
  const byDay = new Map(entries.map((e) => [e.day, e]));

  return (
    <div>
      <h3 className="flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-petrol-600">
        <Clock className="size-4" aria-hidden="true" />
        {labels.hoursTitle}
      </h3>
      {verified && entries.length > 0 ? (
        <dl className="mt-4 divide-y divide-petrol-900/10">
          {order.map((day) => {
            const e = byDay.get(day);
            const isOpen = Boolean(e?.opens && e.closes);
            return (
              <div key={day} className="flex justify-between py-2.5 text-[0.98rem]">
                <dt className={isOpen ? "text-ink/80" : "text-ink/45"}>{labels.days[day]}</dt>
                <dd className={isOpen ? "font-semibold text-petrol-900 tabular-nums" : "text-ink/40"}>
                  {isOpen ? `${e!.opens} – ${e!.closes}` : labels.closed}
                </dd>
              </div>
            );
          })}
        </dl>
      ) : (
        <p className="mt-3 max-w-sm leading-relaxed text-ink/70">{labels.hoursPending}</p>
      )}
    </div>
  );
}
