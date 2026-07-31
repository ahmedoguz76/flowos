type ProgressProps = {
  current: number;
  total: number;
};

export function Progress({ current, total }: ProgressProps) {
  return (
    <div
      className="flex items-center gap-2"
      aria-label={`${current}. adım, toplam ${total} adım`}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isCompleted = index < current;

        return (
          <span
            key={index}
            className={[
              "h-2 rounded-full transition-all duration-300",
              isCompleted
                ? "w-6 bg-[var(--accent)]"
                : "w-2 bg-[var(--border)]",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}