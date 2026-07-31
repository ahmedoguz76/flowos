"use client";

import { useState } from "react";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { OptionCard } from "@/components/ui/OptionCard";
import {
  flowConfig,
  type DurationId,
} from "@/config/flow";

type DurationScreenProps = {
  onSelect: (value: DurationId) => void;
};

export function DurationScreen({
  onSelect,
}: DurationScreenProps) {
  const [selectedOption, setSelectedOption] =
    useState<DurationId | null>(null);

  function handleSelect(value: DurationId) {
    if (selectedOption) {
      return;
    }

    setSelectedOption(value);

    window.setTimeout(() => {
      onSelect(value);
    }, 250);
  }

  const screen = flowConfig.duration;

  return (
    <PlayerScreen
      screenId="duration"
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