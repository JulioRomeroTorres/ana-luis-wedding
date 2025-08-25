import React from "react";
import { MOVEMENT_HORIZONTAL_SCROLL, type MovementHorizontalScrollEnum } from "../../lib/Constants";

interface ArrowButtonProps {
  direction: MovementHorizontalScrollEnum;
  onClick: () => void;
}

export const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  const symbol = direction === MOVEMENT_HORIZONTAL_SCROLL.LEFT ? "‹" : "›";

  return (
    <button
      className={`arrow arrow-${direction}`}
      onClick={onClick}
    >
      {symbol}
    </button>
  );
};