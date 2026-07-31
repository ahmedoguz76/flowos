import { flowConfig } from "@/config/flow";
import type {
  ConcernId,
  DurationId,
} from "@/config/flow";

import { buildJourneySummary } from "@/lib/summary";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type RecommendationScreenProps = {
  concern: ConcernId;
  duration: DurationId;
  onContinue: () => void;
};

export function RecommendationScreen({
  concern,
  duration,
  onContinue,
}: RecommendationScreenProps) {
  const summary = buildJourneySummary({
    concern,
    duration,
  });

  const recommendation =
    flowConfig.recommendations[concern] ??
    flowConfig.recommendations.multiple;

  return (
    <PlayerScreen
      screenId="recommendation"
      eyebrow={summary.eyebrow}
      title={summary.title}
      description={summary.personalSummary}
    >
      <div className="grid gap-[var(--space-2)]">
        <Card
          variant="accent"
          className="p-[var(--space-3)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Sizi en çok düşündüren konu
          </p>

          <p className="mt-[var(--space-1)] text-lg font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
            {summary.concernLabel}
          </p>
        </Card>

        <Card
          variant="soft"
          className="p-[var(--space-3)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Ne zamandır devam ediyor?
          </p>

          <p className="mt-[var(--space-1)] text-lg font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
            {summary.durationLabel}
          </p>
        </Card>

        <Card
          variant="glass"
          className="p-[var(--space-3)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Sonraki adım
          </p>

          <p className="mt-[var(--space-1)] leading-7 text-[var(--color-text-secondary)]">
            {summary.nextStep}
          </p>
        </Card>
      </div>

      <div className="mt-[var(--space-4)]">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          İlginizi çekebilecek içerikler
        </p>

        <div className="mt-[var(--space-2)] grid gap-[var(--space-2)]">
          {recommendation.items.map((item) => (
            <Card
              key={item.title}
              variant="soft"
              className="p-[var(--space-3)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                {item.label}
              </p>

              <h3 className="mt-[var(--space-1)] text-lg font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
                {item.title}
              </h3>

              <p className="mt-[var(--space-1)] text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-[var(--space-4)]">
        <Button
          type="button"
          fullWidth
          onClick={onContinue}
        >
          Uzmanla iletişim seçeneklerini gör
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </PlayerScreen>
  );
}