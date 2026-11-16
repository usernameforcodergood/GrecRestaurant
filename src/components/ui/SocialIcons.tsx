/** Brand marks (lucide no longer ships brand icons). Decorative; label the parent link. */
type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 3c.3 2.3 1.7 3.8 4 4v3c-1.5.1-2.8-.4-4-1.2v6.1c0 3.4-2.6 5.6-5.6 5.6a5.5 5.5 0 0 1-5.6-5.6c0-3.3 2.8-5.9 6.4-5.5v3.2c-1.6-.4-3.2.6-3.2 2.3 0 1.3 1 2.4 2.4 2.4 1.5 0 2.5-1 2.5-2.9V3h3.1z" />
    </svg>
  );
}
