import React from "react";
import type { TimelineItemProps } from "../../lib/entities/TimelineItemProps";

export const TimelineItem: React.FC<TimelineItemProps> = ({
  description,
  date,
  orientation = "left",
}) => {
  return (
    <div className={`timeline-item ${orientation}`}>
      <div className="timeline-content">
        <p className="timeline-description">{description}</p>
        <span className="timeline-date">{date}</span>
      </div>
    </div>
  );
};
