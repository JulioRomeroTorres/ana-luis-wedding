export type HorizontalOrientation = "left" | "right";

export interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  orientation?: HorizontalOrientation;
}