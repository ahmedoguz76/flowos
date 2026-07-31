import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: "default" | "soft" | "glass" | "accent";
};

export function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variantClasses = {
    default: [
      "border border-[var(--border)]",
      "bg-white/80",
      "shadow-[0_14px_40px_rgba(18,22,19,0.08)]",
      "backdrop-blur-xl",
    ].join(" "),

    soft: [
      "border border-[var(--border)]",
      "bg-[var(--surface-soft)]",
      "shadow-none",
    ].join(" "),

    glass: [
      "border border-white/70",
      "bg-white/55",
      "shadow-[0_18px_50px_rgba(18,22,19,0.08)]",
      "backdrop-blur-2xl",
    ].join(" "),

    accent: [
      "border border-[var(--accent)]/15",
      "bg-[var(--accent)]/5",
      "shadow-none",
    ].join(" "),
  };

  return (
    <div
      {...props}
      className={[
        "rounded-[var(--radius-medium)]",
        "transition-all duration-300",
        "ease-[var(--ease-premium)]",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}