export type NodeType =
  | "welcome"
  | "question"
  | "story"
  | "info"
  | "result";

export interface FlowOption {
  id: string;
  label: string;
  next: string;
}

export interface FlowNode {
  id: string;
  type: NodeType;
  title: string;
  description?: string;
  next?: string;
  options?: FlowOption[];
}