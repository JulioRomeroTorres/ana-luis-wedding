import React from "react";
import type { PhotoCardProps } from "../lib/entities/PhotoCardProps";

export const PhotoCard: React.FC<PhotoCardProps> = (
  { 
    src, alt,
    isHovered,
    isDimmed,
    onHover,
    onLeave
   }) => {
  

  return (
    <div className={`photo-card ${isHovered ? "hovered" : ""} ${isDimmed ? "dimmed" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img src={src} alt={alt || "Foto"} />
    </div>
  );
};

