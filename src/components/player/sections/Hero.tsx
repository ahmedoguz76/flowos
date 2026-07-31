type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
}: HeroProps) {
  return (
    <section>
      {eyebrow && (
        <p
          className="
            text-xs font-semibold uppercase
            tracking-[0.16em]
            text-[var(--accent)]
          "
        >
          {eyebrow}
        </p>
      )}

      <h1
        className="
          mt-4 max-w-xl
          text-4xl font-semibold
          leading-[1.05]
          tracking-[-0.045em]
          text-[var(--text-primary)]
          sm:text-5xl
        "
      >
        {title}
      </h1>

      {description && (
        <p
          className="
            mt-5 max-w-xl
            text-base leading-7
            tracking-[-0.01em]
            text-[var(--text-secondary)]
            sm:text-lg sm:leading-8
          "
        >
          {description}
        </p>
      )}
    </section>
  );
}