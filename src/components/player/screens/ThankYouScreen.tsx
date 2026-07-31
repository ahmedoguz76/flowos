import { flowConfig } from "@/config/flow";
import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type ThankYouScreenProps = {
  fullName: string;
  onRestart: () => void;
};

export function ThankYouScreen({
  fullName,
  onRestart,
}: ThankYouScreenProps) {
  const firstName = fullName.trim().split(" ")[0] || "Teşekkürler";
  const screen = flowConfig.thankYou;

  return (
    <PlayerScreen
      screenId="thank-you"
      eyebrow={screen.eyebrow}
      title={`Teşekkürler, ${firstName}.`}
      description={screen.description}
    >
      <Card
        variant="accent"
        className="p-[var(--space-3)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          Bundan sonra ne olacak?
        </p>

        <p className="mt-[var(--space-1)] leading-7 text-[var(--color-text-secondary)]">
          Klinik ekibi uygun olduğunda sizinle iletişime geçebilir.
          Verdiğiniz yanıtlar yalnızca bu bilgilendirme deneyimi
          kapsamında değerlendirilmiştir ve tıbbi tanı niteliğinde değildir.
        </p>
      </Card>

      <div className="mt-[var(--space-4)]">
        <Button
          type="button"
          fullWidth
          onClick={onRestart}
        >
          {screen.restartLabel}
        </Button>
      </div>
    </PlayerScreen>
  );
}