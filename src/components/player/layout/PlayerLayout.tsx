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
          fixed
          -top-32
          left-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          rounded-full
          bg-[var(--color-glow-primary)]
          opacity-50
          blur-[100px]
          sm:h-[520px]
          sm:w-[520px]
          sm:blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -bottom-40
          -right-32
          h-[320px]
          w-[320px]
          rounded-full
          bg-[var(--color-glow-secondary)]
          opacity-35
          blur-[110px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-2xl
          items-start
          px-3
          py-4
          sm:items-center
          sm:px-[var(--space-4)]
          sm:py-[var(--space-6)]
        "
      >
        <section
          className="
            w-full
            rounded-[24px]
            border
            border-white/70
            bg-[var(--color-surface)]
            p-5
            shadow-[var(--shadow-floating)]
            backdrop-blur-2xl
            sm:rounded-[var(--radius-large)]
            sm:p-[var(--space-5)]
          "
        >
          {children}
        </section>
      </div>
    </main>
  );
}