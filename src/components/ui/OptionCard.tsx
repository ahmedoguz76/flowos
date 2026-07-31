import type { LucideIcon } from "lucide-react";
import { Check, ChevronRight } from "lucide-react";

type OptionCardProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function OptionCard({
  icon: Icon,
  title,
  description,
  selected = false,
  disabled = false,
  onClick,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={[
        "group relative w-full overflow-hidden",
        "rounded-[var(--radius-medium)] border",
        "px-5 py-5 text-left",
        "transition-all duration-300",
        "ease-[var(--ease-premium)]",
        "focus-visible:outline-none",
        "focus-visible:ring-4",
        "focus-visible:ring-[rgba(24,58,52,0.15)]",
        selected
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[var(--shadow-accent)]"
          : "border-[var(--color-border)] bg-white/80 text-[var(--color-text-primary)] hover:-translate-y-0.5 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-small)]",
        disabled ? "cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <div
            className={[
              "flex h-12 w-12 shrink-0 items-center justify-center",
              "rounded-[var(--radius-small)]",
              "transition-all duration-300",
              selected
                ? "bg-white/15 text-white"
                : "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
            ].join(" ")}
          >
            <Icon size={21} strokeWidth={2.2} />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-[-0.025em]">
            {title}
          </h3>

          {description && (
            <p
              className={[
                "mt-1.5 text-sm leading-6",
                selected
                  ? "text-white/80"
                  : "text-[var(--color-text-secondary)]",
              ].join(" ")}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            "transition-all duration-300",
            selected
              ? "bg-white text-[var(--color-accent)]"
              : "bg-black/[0.04] text-[var(--color-text-muted)] group-hover:translate-x-0.5",
          ].join(" ")}
        >
          {selected ? (
            <Check size={17} strokeWidth={2.6} />
          ) : (
            <ChevronRight size={18} />
          )}
        </div>
      </div>
    </button>
  );
}