import type { ReactNode } from "react";

type PlayerLayoutProps = {
  children: ReactNode;
};

export function PlayerLayout({
  children,
}: PlayerLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)]">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[var(--color-glow-primary)]
          opacity-55
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-44
          -right-28
          h-[420px]
          w-[420px]
          rounded-full
          bg-[var(--color-glow-secondary)]
          opacity-40
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-2xl
          items-center
          px-[var(--space-2)]
          py-[var(--space-4)]
          sm:px-[var(--space-4)]
          sm:py-[var(--space-6)]
        "
      >
        <section
          className="
            w-full
            rounded-[var(--radius-large)]
            border
            border-white/70
            bg-[var(--color-surface)]
            p-[var(--space-3)]
            shadow-[var(--shadow-floating)]
            backdrop-blur-2xl
            sm:p-[var(--space-5)]
          "
        >
          {children}
        </section>
      </div>
    </main>
  );
}