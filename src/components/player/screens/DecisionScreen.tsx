"use client";

import { useState } from "react";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { OptionCard } from "@/components/ui/OptionCard";

type DecisionScreenProps = {
  onSelect: (value: string) => void;
};

const options = [
  {
    id: "appearance",
    icon: "🙂",
    title: "Görünüm",
    description: "Gülümserken kendinizi rahat hissetmiyor musunuz?",
  },
  {
    id: "chewing",
    icon: "🍽️",
    title: "Çiğneme",
    description: "Yemek yerken zorlanıyor musunuz?",
  },
  {
    id: "speech",
    icon: "💬",
    title: "Konuşma",
    description: "Konuşurken rahatsızlık hissediyor musunuz?",
  },
  {
    id: "multiple",
    icon: "✨",
    title: "Birden fazla durum",
    description: "Birden fazla konu günlük yaşamınızı etkiliyor mu?",
  },
];

export function DecisionScreen({
  onSelect,
}: DecisionScreenProps) {
  const [selectedOption, setSelectedOption] =
    useState<string | null>(null);

  function handleSelect(value: string) {
    if (selectedOption) return;

    setSelectedOption(value);

    window.setTimeout(() => {
      onSelect(value);
    }, 250);
  }

  return (
    <PlayerScreen
      screenId="decision"
      eyebrow="Kısa bir seçim"
      title="Günlük yaşamda sizi en çok hangisi etkiliyor?"
      description="Size en yakın seçeneği seçebilirsiniz."
    >
      <div className="grid gap-[var(--space-2)]">
        {options.map((option) => (
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