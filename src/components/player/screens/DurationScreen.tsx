"use client";

import { useState } from "react";
import {
  CalendarDays,
  CircleHelp,
  Hourglass,
  Sprout,
} from "lucide-react";

import { PlayerScreen } from "@/components/player/layout/PlayerScreen";
import { OptionCard } from "@/components/ui/OptionCard";

type DurationScreenProps = {
  onSelect: (value: string) => void;
};

const options = [
  {
    id: "less-than-one-month",
    icon: Sprout,
    title: "1 aydan az",
    description: "Bu durumu yakın zamanda fark ettim.",
  },
  {
    id: "one-to-six-months",
    icon: CalendarDays,
    title: "1–6 ay",
    description: "Bir süredir günlük yaşamımı etkiliyor.",
  },
  {
    id: "more-than-six-months",
    icon: Hourglass,
    title: "6 aydan uzun",
    description: "Uzun zamandır devam ediyor.",
  },
  {
    id: "not-sure",
    icon: CircleHelp,
    title: "Emin değilim",
    description: "Ne zaman başladığını tam hatırlamıyorum.",
  },
];

export function DurationScreen({
  onSelect,
}: DurationScreenProps) {
  const [selectedOption, setSelectedOption] =
    useState<string | null>(null);

  function handleSelect(value: string) {
    if (selectedOption) {
      return;
    }

    setSelectedOption(value);

    window.setTimeout(() => {
      onSelect(value);
    }, 250);
  }

  return (
    <PlayerScreen
      screenId="duration"
      eyebrow="Bir kısa soru daha"
      title="Bu durum ne zamandır devam ediyor?"
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