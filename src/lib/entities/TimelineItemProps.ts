export type HorizontalOrientation = "left" | "right";

export interface TimelineItemProps {
  description: string;
  date: string;
  orientation?: HorizontalOrientation;
  icon?: string;
}