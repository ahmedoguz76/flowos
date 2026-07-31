export type FlowScreenId =
  | "welcome"
  | "decision"
  | "story"
  | "duration"
  | "information"
  | "recommendation"
  | "contact"
  | "thank-you";

export type FlowStep = {
  id: FlowScreenId;
  order: number;
  next?: FlowScreenId;
};

export type FlowDefinition = {
  id: string;
  title: string;
  totalSteps: number;
  startScreen: FlowScreenId;
  steps: FlowStep[];
};