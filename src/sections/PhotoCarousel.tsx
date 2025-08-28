import { useRef, useState } from "react";
import { PhotoCard } from "../components/carousel/PhotoCard";
import {
  MOVEMENT_HORIZONTAL_SCROLL,
  type MovementHorizontalScrollEnum,
} from "../lib/Constants";
import { ArrowButton } from "../components/carousel/ArrowButton";

export const CarouselSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: MovementHorizontalScrollEnum) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth;

    container.scrollBy({
      left:
        direction === MOVEMENT_HORIZONTAL_SCROLL.RIGHT
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  const imageList = Object.values(
    import.meta.glob(`/src/assets/photos/carrousel/photo_*.webp`, {
      query: "?url",
      import: "default",
      eager: true,
    })
  ) as string[];

  return (
    <div className="carousel-wrapper">
      <ArrowButton
        direction={MOVEMENT_HORIZONTAL_SCROLL.LEFT}
        onClick={() => scroll(MOVEMENT_HORIZONTAL_SCROLL.LEFT)}
      />
      <div className="carousel-container" ref={scrollRef}>
        {imageList.map((src, idx) => (
          <PhotoCard
            key={idx}
            src={src}
            alt={`Foto ${idx + 1}`}
            isHovered={hoveredIndex === idx}
            isDimmed={hoveredIndex !== null && hoveredIndex !== idx}
            onHover={() => setHoveredIndex(idx)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      <ArrowButton
        direction={MOVEMENT_HORIZONTAL_SCROLL.RIGHT}
        onClick={() => scroll(MOVEMENT_HORIZONTAL_SCROLL.RIGHT)}
      />
    </div>
  );
};
