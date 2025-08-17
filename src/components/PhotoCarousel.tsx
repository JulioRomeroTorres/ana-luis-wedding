import { useRef, useState } from "react";
import { PhotoCard } from "./PhotoCard"
import { MOVEMENT_HORIZONTAL_SCROLL, type MovementHorizontalScrollEnum } from "../lib/Constants";

export const PhotoCarousel: React.FC = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: MovementHorizontalScrollEnum) => {
    const container = scrollRef.current;
    console.log(`container`, {container})
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.7;

    container.scrollBy(
      { 
        left: direction === MOVEMENT_HORIZONTAL_SCROLL.RIGHT ? scrollAmount : -scrollAmount, 
        behavior: "smooth" 
      });
  };



  const imageList = Object.values(
    import.meta.glob(`/src/assets/photos/carrousel/Photo_*.jpg`, {
      query: '?url',
      import: 'default',
      eager: true
    })
  ) as string[];

  return (

    <div className="carousel-wrapper">

     <button className={`arrow arrow-${MOVEMENT_HORIZONTAL_SCROLL.LEFT}`} onClick={() => scroll(MOVEMENT_HORIZONTAL_SCROLL.LEFT)}>‹</button>

    <div className="carousel-container" ref={scrollRef}>
      {imageList.map((src, idx) => (
        <PhotoCard 
        key={idx} src={src} alt={`Foto ${idx + 1}`} 
        isHovered={hoveredIndex === idx}
        isDimmed={hoveredIndex !== null && hoveredIndex !== idx}
        onHover={() => setHoveredIndex(idx)}
        onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>

     <button className={`arrow arrow-${MOVEMENT_HORIZONTAL_SCROLL.RIGHT}`} onClick={() => scroll(MOVEMENT_HORIZONTAL_SCROLL.RIGHT)}>›</button>

    </div>

    
  );
};

