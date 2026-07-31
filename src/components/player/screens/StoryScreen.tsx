import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type StoryScreenProps = {
  selectedAnswer: string;
  onContinue: () => void;
};

const storyByAnswer: Record<
  string,
  {
    eyebrow: string;
    title: string;
    description: string;
    insight: string;
  }
> = {
  appearance: {
    eyebrow: "Görünüm",
    title: "Bu konuda yalnız değilsiniz.",
    description:
      "Birçok kişi eksik dişi nedeniyle gülümserken kendini daha çekingen hissedebiliyor.",
    insight:
      "Bu durumun günlük yaşam üzerindeki etkisi kişiden kişiye değişebilir.",
  },

  chewing: {
    eyebrow: "Çiğneme",
    title: "Günlük konfor zamanla değişebilir.",
    description:
      "Bazı kişiler eksik diş nedeniyle çiğneme alışkanlıklarının değiştiğini fark edebiliyor.",
    insight:
      "Durumun doğru değerlendirilebilmesi için klinik muayene gerekir.",
  },

  speech: {
    eyebrow: "Konuşma",
    title: "Küçük değişiklikler fark edilebilir.",
    description:
      "Eksik dişin bulunduğu bölgeye göre bazı kişiler konuşurken farklılık hissedebilir.",
    insight:
      "Her durum kişinin ağız yapısına göre ayrı değerlendirilmelidir.",
  },

  multiple: {
    eyebrow: "Birden fazla durum",
    title: "Etkiler tek bir alanla sınırlı olmayabilir.",
    description:
      "Görünüm, çiğneme ve günlük konfor bazı kişilerde birlikte etkilenebilir.",
    insight:
      "Uygun seçenekler ancak profesyonel değerlendirme sonrasında belirlenebilir.",
  },
};

export function StoryScreen({
  selectedAnswer,
  onContinue,
}: StoryScreenProps) {
  const story =
    storyByAnswer[selectedAnswer] ?? storyByAnswer.multiple;

  return (
    <PlayerScreen
      screenId="story"
      eyebrow={story.eyebrow}
      title={story.title}
      description={story.description}
    >
      <Card
        variant="accent"
        className="p-[var(--space-3)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          Kısa bilgi
        </p>

        <p className="mt-[var(--space-1)] leading-7 text-[var(--color-text-secondary)]">
          {story.insight}
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