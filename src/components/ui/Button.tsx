import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  fullWidth = false,
  variant = "primary",
  className = "",
  disabled,
  ...buttonProps
}: ButtonProps) {
  const variantClasses = {
    primary: [
      "bg-[var(--accent)]",
      "text-white",
      "shadow-[0_10px_30px_rgba(24,58,52,0.22)]",
      "hover:bg-[var(--accent-hover)]",
      "hover:shadow-[0_14px_36px_rgba(24,58,52,0.28)]",
    ].join(" "),

    secondary: [
      "border border-[var(--border-strong)]",
      "bg-white/75",
      "text-[var(--text-primary)]",
      "hover:border-[var(--accent)]",
      "hover:bg-white",
    ].join(" "),

    ghost: [
      "bg-transparent",
      "text-[var(--text-secondary)]",
      "hover:bg-black/5",
      "hover:text-[var(--text-primary)]",
    ].join(" "),
  };

  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={[
        "group inline-flex min-h-16 items-center justify-center gap-3",
        "rounded-[var(--radius-medium)] px-7 py-4",
        "text-base font-semibold tracking-[-0.01em]",
        "transition-all duration-200",
        "ease-[var(--ease-premium)]",
        "focus-visible:outline-none",
        "focus-visible:ring-4",
        "focus-visible:ring-[rgba(24,58,52,0.15)]",
        "disabled:cursor-not-allowed",
        "disabled:opacity-50",
        !disabled
          ? "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
          : "",
        fullWidth ? "w-full" : "",
        variantClasses[variant],
        className,
      ].join(" ")}
    >
      <span>{children}</span>
    </button>
  );
}