import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helperText?: string;
};

export function Input({
  label,
  error,
  helperText,
  id,
  className = "",
  disabled,
  ...props
}: InputProps) {
  const message = error || helperText;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold tracking-[-0.01em] text-[var(--text-primary)]"
      >
        {label}
      </label>

      <input
        id={id}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={message && id ? `${id}-message` : undefined}
        className={[
          "min-h-16 w-full rounded-[var(--radius-medium)]",
          "border bg-white/75 px-5",
          "text-base text-[var(--text-primary)]",
          "shadow-[0_1px_2px_rgba(18,22,19,0.03)]",
          "outline-none backdrop-blur-xl",
          "transition-all duration-200",
          "ease-[var(--ease-premium)]",
          "placeholder:text-[var(--text-muted)]",
          "hover:bg-white",
          "focus:-translate-y-0.5",
          "focus:bg-white",
          "focus:ring-4",
          error
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-[var(--border)] focus:border-[var(--accent)] focus:ring-[rgba(24,58,52,0.12)]",
          disabled
            ? "cursor-not-allowed bg-black/5 opacity-60"
            : "",
          className,
        ].join(" ")}
        {...props}
      />

      {message && (
        <p
          id={id ? `${id}-message` : undefined}
          className={[
            "text-sm leading-6",
            error
              ? "font-medium text-red-600"
              : "text-[var(--text-muted)]",
          ].join(" ")}
        >
          {message}
        </p>
      )}
    </div>
  );
}