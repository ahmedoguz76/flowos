import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  flowConfig,
  type ConcernId,
} from "@/config/flow";

type StoryScreenProps = {
  selectedAnswer: ConcernId;
  onContinue: () => void;
};

export function StoryScreen({
  selectedAnswer,
  onContinue,
}: StoryScreenProps) {
  const story =
    flowConfig.stories[selectedAnswer] ??
    flowConfig.stories.multiple;

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