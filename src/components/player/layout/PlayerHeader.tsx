import { flowConfig } from "@/config/flow";

type PlayerHeaderProps = {
  current: number;
  total: number;
};

export function PlayerHeader({
  current,
  total,
}: PlayerHeaderProps) {
  const safeTotal = Math.max(total, 1);

  const percentage = Math.min(
    100,
    Math.max(0, (current / safeTotal) * 100),
  );

  const clinic = flowConfig.clinic;

  return (
    <header className="mb-[var(--space-5)]">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {clinic.name}
          </p>

          <p className="mt-1 text-sm font-medium leading-5 text-[var(--color-text-secondary)]">
            {clinic.guideTitle}
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
            {current}
            <span className="font-medium text-[var(--color-text-muted)]">
              {" "}
              / {safeTotal}
            </span>
          </p>

          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
            Adım
          </p>
        </div>
      </div>

      <div
        className="mt-[var(--space-2)] h-1.5 overflow-hidden rounded-full bg-black/[0.06]"
        role="progressbar"
        aria-label={`${clinic.guideTitle} ilerlemesi`}
        aria-valuemin={1}
        aria-valuemax={safeTotal}
        aria-valuenow={current}
      >
        <div
          className="
            h-full rounded-full
            bg-[var(--color-accent)]
            transition-[width]
            duration-[var(--duration-slow)]
            ease-[var(--ease-premium)]
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </header>
  );
}