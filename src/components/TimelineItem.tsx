import React from "react";
import type { TimelineItemProps } from "../lib/entities/TimelineItemProps";

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  date,
  orientation = "left",
}) => {
  return (
    <div className={`timeline-item ${orientation}`}>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="timeline-date">{date}</span>
      </div>
    </div>
  );
};

