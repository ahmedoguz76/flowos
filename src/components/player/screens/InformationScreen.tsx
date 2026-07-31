import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { flowConfig } from "@/config/flow";

type InformationScreenProps = {
  onContinue: () => void;
};

export function InformationScreen({
  onContinue,
}: InformationScreenProps) {
  const info = flowConfig.information;

  return (
    <PlayerScreen
      screenId="information"
      eyebrow={info.eyebrow}
      title={info.title}
      description={info.body}
    >
      <Card className="p-[var(--space-4)]">
        <div className="space-y-[var(--space-2)]">
          <div className="flex gap-3">
            <span>✓</span>
            <p>Her kişinin durumu farklıdır.</p>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <p>En doğru değerlendirme klinik muayene ile yapılır.</p>
          </div>

          <div className="flex gap-3">
            <span>✓</span>
            <p>Bu içerik yalnızca genel bilgilendirme amaçlıdır.</p>
          </div>
        </div>
      </Card>

      <div className="mt-[var(--space-4)]">
        <Button
          fullWidth
          onClick={onContinue}
        >
          Devam
        </Button>
      </div>
    </PlayerScreen>
  );
}