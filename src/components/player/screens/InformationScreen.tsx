import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type InformationScreenProps = {
  concern: string;
  duration: string;
  onContinue: () => void;
};

const concernLabels: Record<string, string> = {
  appearance: "görünüm",
  chewing: "çiğneme",
  speech: "konuşma",
  multiple: "birden fazla durum",
};

const durationLabels: Record<string, string> = {
  "less-than-one-month": "yakın zamanda",
  "one-to-six-months": "bir süredir",
  "more-than-six-months": "uzun zamandır",
  "not-sure": "belirsiz bir süredir",
};

export function InformationScreen({
  concern,
  duration,
  onContinue,
}: InformationScreenProps) {
  const concernLabel = concernLabels[concern] ?? "bu konu";
  const durationLabel = durationLabels[duration] ?? "bir süredir";

  return (
    <PlayerScreen
      screenId="information"
      eyebrow="Kısa bir bilgilendirme"
      title="Eksik dişlerin etkisi kişiden kişiye değişebilir."
      description={`Yanıtlarınıza göre ${concernLabel} konusu sizi ${durationLabel} etkiliyor olabilir.`}
    >
      <Card
        variant="soft"
        className="p-[var(--space-3)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          Bilmeniz gereken
        </p>

        <p className="mt-[var(--space-1)] leading-7 text-[var(--color-text-secondary)]">
          Eksik dişler bazı kişilerde görünüm, çiğneme veya konuşma
          konforunu etkileyebilir. Uygun seçeneklerin belirlenebilmesi için
          klinik değerlendirme gerekir.
        </p>
      </Card>

      <div className="mt-[var(--space-4)]">
        <Button
          type="button"
          fullWidth
          onClick={onContinue}
        >
          Devam →
        </Button>
      </div>
    </PlayerScreen>
  );
}