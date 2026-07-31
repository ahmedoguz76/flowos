import { Check } from "lucide-react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

export function Checkbox({
  checked,
  onChange,
  children,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={[
        "group flex cursor-pointer items-start gap-4",
        disabled ? "cursor-not-allowed opacity-60" : "",
      ].join(" ")}
    >
      <button
        type="button"
        disabled={disabled}
        aria-pressed={checked}
        aria-label="Onay kutusu"
        onClick={() => onChange(!checked)}
        className={[
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center",
          "rounded-lg border-2",
          "transition-all duration-200",
          "ease-[var(--ease-premium)]",
          "focus-visible:outline-none",
          "focus-visible:ring-4",
          "focus-visible:ring-[rgba(24,58,52,0.12)]",

          checked
            ? "border-[var(--accent)] bg-[var(--accent)] text-white shadow-md"
            : "border-[var(--border-strong)] bg-white group-hover:border-[var(--accent)]",
        ].join(" ")}
      >
        <Check
          size={15}
          strokeWidth={3}
          className={[
            "transition-all duration-200",
            checked
              ? "scale-100 opacity-100"
              : "scale-50 opacity-0",
          ].join(" ")}
        />
      </button>

      <span className="flex-1 text-sm leading-6 text-[var(--text-secondary)]">
        {children}
      </span>
    </label>
  );
}