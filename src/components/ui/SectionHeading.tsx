import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em]",
        tone === "dark" ? "text-petrol-600" : "text-brass-300",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-px w-8", tone === "dark" ? "bg-petrol-500/50" : "bg-brass-300/60")} />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  as: Tag = "h2",
  tone = "dark",
  className,
  id,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-serif font-medium leading-[1.05] tracking-[-0.01em] text-balance",
        "text-[2.35rem] sm:text-5xl lg:text-[3.6rem]",
        tone === "dark" ? "text-petrol-900" : "text-cream-50",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
