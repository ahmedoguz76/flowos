import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[
        "inline-flex min-h-9 items-center gap-2",
        "rounded-full border border-white/70",
        "bg-white/65 px-3.5 py-2",
        "text-sm font-medium",
        "tracking-[-0.01em]",
        "text-[var(--text-secondary)]",
        "shadow-[0_1px_2px_rgba(18,22,19,0.04)]",
        "backdrop-blur-md",
        "transition-all duration-200",
        "ease-[var(--ease-premium)]",
        "hover:-translate-y-0.5",
        "hover:border-[var(--border-strong)]",
        "hover:bg-white/90",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}