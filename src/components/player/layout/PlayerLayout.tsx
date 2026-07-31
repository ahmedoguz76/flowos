import type { ReactNode } from "react";

type PlayerLayoutProps = {
  children: ReactNode;
};

export function PlayerLayout({
  children,
}: PlayerLayoutProps) {
  return (
    <main
      className="
        relative
        min-h-[100svh]
        overflow-x-hidden
        bg-[var(--color-background)]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_0%,rgba(216,240,229,0.65),transparent_38%),radial-gradient(circle_at_100%_100%,rgba(221,233,255,0.45),transparent_34%)]
        "
      />

      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[100svh]
          w-full max-w-2xl
          items-start
          px-3 py-4
          sm:items-center
          sm:px-[var(--space-4)]
          sm:py-[var(--space-6)]
        "
      >
        <section
          className="
            w-full
            rounded-[24px]
            border border-white/80
            bg-white
            p-5
            shadow-[0_12px_40px_rgba(15,23,42,0.07)]
            sm:rounded-[var(--radius-large)]
            sm:bg-[var(--color-surface)]
            sm:p-[var(--space-5)]
            sm:shadow-[var(--shadow-floating)]
            sm:backdrop-blur-xl
          "
        >
          {children}
        </section>
      </div>
    </main>
  );
}