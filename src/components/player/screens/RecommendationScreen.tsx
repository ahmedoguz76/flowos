import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  flowConfig,
  type ConcernId,
  type DurationId,
} from "@/config/flow";

type RecommendationScreenProps = {
  concern: ConcernId;
  duration: DurationId;
  onContinue: () => void;
};

const durationSummary: Record<DurationId, string> = {
  "less-than-one-month": "Bu durumu yakın zamanda fark ettiniz.",
  "one-to-six-months": "Bu durum bir süredir devam ediyor.",
  "more-than-six-months": "Bu durum uzun zamandır devam ediyor.",
  "not-sure": "Bu durumun ne zaman başladığından emin değilsiniz.",
};

const concernSummary: Record<ConcernId, string> = {
  appearance: "Sizi en çok düşündüren konu görünüm.",
  chewing: "Sizi en çok düşündüren konu çiğneme konforu.",
  speech: "Sizi en çok düşündüren konu konuşma konforu.",
  multiple: "Birden fazla konu günlük yaşamınızı etkiliyor.",
};

export function RecommendationScreen({
  concern,
  duration,
  onContinue,
}: RecommendationScreenProps) {
  const recommendation =
    flowConfig.recommendations[concern] ??
    flowConfig.recommendations.multiple;

  return (
    <PlayerScreen
      screenId="recommendation"
      eyebrow="Size özel özet"
      title="Yanıtlarınıza göre sizin için kısa bir özet hazırladık."
      description="Bu özet yalnızca verdiğiniz cevaplara göre hazırlanmıştır ve tıbbi değerlendirme yerine geçmez."
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
            {concernSummary[concern]}
          </p>
        </Card>

        <Card
          variant="soft"
          className="p-[var(--space-3)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Ne zamandır devam ediyor?
          </p>

          <p className="mt-[var(--space-1)] leading-7 text-[var(--color-text-secondary)]">
            {durationSummary[duration]}
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
          Uzmanla iletişim seçeneklerini gör →
        </Button>
      </div>
    </PlayerScreen>
  );
}