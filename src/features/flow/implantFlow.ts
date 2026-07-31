import type { FlowDefinition } from "@/types/flow-engine";

export const implantFlow: FlowDefinition = {
  id: "missing-tooth-guide",
  title: "Eksik Diş Rehberi",
  totalSteps: 8,
  startScreen: "welcome",

  steps: [
    {
      id: "welcome",
      order: 1,
      next: "decision",
    },
    {
      id: "decision",
      order: 2,
      next: "story",
    },
    {
      id: "story",
      order: 3,
      next: "duration",
    },
    {
      id: "duration",
      order: 4,
      next: "information",
    },
    {
      id: "information",
      order: 5,
      next: "recommendation",
    },
    {
      id: "recommendation",
      order: 6,
      next: "contact",
    },
    {
      id: "contact",
      order: 7,
      next: "thank-you",
    },
    {
      id: "thank-you",
      order: 8,
    },
  ],
};