import { ShieldCheck, Sparkles, TimerReset } from "lucide-react";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type WelcomeScreenProps = {
  onStart?: () => void;
};

const trustItems = [
  {
    icon: TimerReset,
    title: "Yaklaşık 2 dakika",
    description: "Kısa ve kolay bir deneyim",
  },
  {
    icon: Sparkles,
    title: "Size göre şekillenir",
    description: "Yalnızca ilgili içerikler gösterilir",
  },
  {
    icon: ShieldCheck,
    title: "Bilgilendirme amaçlı",
    description: "Tanı veya tedavi yerine geçmez",
  },
];

export function WelcomeScreen({
  onStart,
}: WelcomeScreenProps) {
  return (
    <PlayerScreen
      screenId="welcome"
      eyebrow="Kişiselleştirilmiş bilgilendirme"
      title="Eksik dişiniz günlük yaşamınızı nasıl etkiliyor?"
      description="Birkaç kısa seçimle yalnızca sizi ilgilendirebilecek içeriklere ulaşın."
    >
      <div className="grid gap-[var(--space-2)]">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              variant="glass"
              className="flex items-center gap-[var(--space-2)] p-[var(--space-2)]"
            >
              <div
                className="
                  flex h-11 w-11 shrink-0 items-center justify-center
                  rounded-[var(--radius-small)]
                  bg-[var(--color-accent-soft)]
                  text-[var(--color-accent)]
                "
              >
                <Icon size={20} strokeWidth={2.2} />
              </div>

              <div>
                <p className="font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {item.title}
                </p>

                <p className="mt-0.5 text-sm leading-5 text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-[var(--space-4)]">
        <Button
          type="button"
          fullWidth
          onClick={onStart}
        >
          Kendime Uygun Bilgileri Gör
          <span aria-hidden="true">→</span>
        </Button>
      </div>

      <p className="mt-[var(--space-2)] text-center text-xs leading-5 text-[var(--color-text-muted)]">
        Başlamak için kişisel bilgi vermeniz gerekmez.
      </p>

      <div className="mt-[var(--space-2)] flex justify-center gap-[var(--space-2)] text-xs text-[var(--color-text-muted)]">
        <a
          href="#"
          className="transition hover:text-[var(--color-text-primary)]"
        >
          KVKK Aydınlatma Metni
        </a>

        <span aria-hidden="true">•</span>

        <a
          href="#"
          className="transition hover:text-[var(--color-text-primary)]"
        >
          Gizlilik
        </a>
      </div>
    </PlayerScreen>
  );
}