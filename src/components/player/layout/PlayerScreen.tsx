import type { ReactNode } from "react";

import { PlayerHeader } from "@/components/player/layout/PlayerHeader";
import { PlayerLayout } from "@/components/player/layout/PlayerLayout";
import { Hero } from "@/components/player/sections/Hero";
import { implantFlow } from "@/features/flow/implantFlow";
import type { FlowScreenId } from "@/types/flow-engine";

type PlayerScreenProps = {
  screenId: FlowScreenId;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PlayerScreen({
  screenId,
  eyebrow,
  title,
  description,
  children,
}: PlayerScreenProps) {
  const currentStep = implantFlow.steps.find(
    (step) => step.id === screenId,
  );

  if (!currentStep) {
    throw new Error(
      `"${screenId}" ekranı implantFlow içerisinde bulunamadı.`,
    );
  }

  return (
    <PlayerLayout>
      <PlayerHeader
        current={currentStep.order}
        total={implantFlow.totalSteps}
      />

      <div className="mt-[var(--space-5)]">
        <Hero
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </div>

      <div className="mt-[var(--space-4)]">
        {children}
      </div>
    </PlayerLayout>
  );
}