type IconProps = { className?: string };

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 3v13m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5m0 0H7m8 0v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 17V4m0 0L5 9m5-5 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
