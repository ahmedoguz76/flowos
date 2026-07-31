import { Check, ChevronRight } from "lucide-react";

type OptionCardProps = {
  icon?: string;
  title: string;
  description?: string;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function OptionCard({
  icon,
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
        "group relative w-full overflow-hidden rounded-[28px]",
        "border",
        "px-6 py-5",
        "text-left",
        "transition-all duration-300",
        "ease-[var(--ease-premium)]",
        "focus-visible:outline-none",
        "focus-visible:ring-4",
        "focus-visible:ring-[rgba(24,58,52,0.15)]",

        selected
          ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_20px_60px_rgba(24,58,52,0.28)]"
          : "border-[var(--border)] bg-white/75 backdrop-blur-xl hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_18px_45px_rgba(18,22,19,0.12)]",

        disabled ? "cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      <div className="flex items-center gap-5">
        {icon && (
          <div
            className={[
              "flex h-14 w-14 shrink-0 items-center justify-center",
              "rounded-2xl",
              "text-2xl",
              "transition-all duration-300",

              selected
                ? "bg-white/15"
                : "bg-[var(--surface-soft)]",
            ].join(" ")}
          >
            {icon}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h3
            className={[
              "text-lg",
              "font-semibold",
              "tracking-[-0.03em]",

              selected
                ? "text-white"
                : "text-[var(--text-primary)]",
            ].join(" ")}
          >
            {title}
          </h3>

          {description && (
            <p
              className={[
                "mt-2",
                "text-sm",
                "leading-6",

                selected
                  ? "text-white/80"
                  : "text-[var(--text-secondary)]",
              ].join(" ")}
            >
              {description}
            </p>
          )}
        </div>

        <div
          className={[
            "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300",

            selected
              ? "bg-white text-[var(--accent)]"
              : "bg-black/5 text-[var(--text-muted)] group-hover:translate-x-1",
          ].join(" ")}
        >
          {selected ? (
            <Check size={18} strokeWidth={2.5} />
          ) : (
            <ChevronRight size={18} />
          )}
        </div>
      </div>
    </button>
  );
}