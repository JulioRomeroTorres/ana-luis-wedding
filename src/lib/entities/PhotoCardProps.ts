export interface PhotoCardProps {
  src: string;
  alt?: string;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}