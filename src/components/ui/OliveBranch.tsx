import { cn } from "@/lib/utils";

/**
 * Hand-drawn style olive branch, echoing the branch above the Grec logo.
 * Decorative only.
 */
export function OliveBranch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 70"
      fill="none"
      aria-hidden="true"
      className={cn("text-olive-500", className)}
    >
      <path
        d="M6 52C48 44 96 36 140 30c26-3.5 50-6 74-10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {[
        [30, 48, -28],
        [52, 44, 24],
        [74, 41, -32],
        [96, 37, 20],
        [118, 34, -30],
        [140, 30, 22],
        [162, 27, -28],
        [184, 24, 18],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y + (r < 0 ? -9 : 8)}
          rx="13"
          ry="4.2"
          transform={`rotate(${r} ${x} ${y + (r < 0 ? -9 : 8)})`}
          fill="currentColor"
          opacity={i % 2 ? 0.75 : 0.95}
        />
      ))}
      <circle cx="108" cy="44" r="4.5" className="fill-olive-700" />
      <circle cx="172" cy="34" r="4" className="fill-olive-700" />
    </svg>
  );
}
