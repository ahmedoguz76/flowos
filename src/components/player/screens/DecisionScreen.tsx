"use client";

import { useState } from "react";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { OptionCard } from "@/components/ui/OptionCard";
import {
  flowConfig,
  type ConcernId,
} from "@/config/flow";

type DecisionScreenProps = {
  onSelect: (value: ConcernId) => void;
};

export function DecisionScreen({
  onSelect,
}: DecisionScreenProps) {
  const [selectedOption, setSelectedOption] =
    useState<ConcernId | null>(null);

  function handleSelect(value: ConcernId) {
    if (selectedOption) {
      return;
    }

    setSelectedOption(value);

    window.setTimeout(() => {
      onSelect(value);
    }, 250);
  }

  const screen = flowConfig.decision;

  return (
    <PlayerScreen
      screenId="decision"
      eyebrow={screen.eyebrow}
      title={screen.title}
      description={screen.description}
    >
      <div className="grid gap-[var(--space-2)]">
        {screen.options.map((option) => (
          <OptionCard
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            selected={selectedOption === option.id}
            disabled={selectedOption !== null}
            onClick={() => handleSelect(option.id)}
          />
        ))}
      </div>
    </PlayerScreen>
  );
}