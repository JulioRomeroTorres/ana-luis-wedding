import type { TimelineItemProps } from "../lib/entities/TimelineItemProps"
import { TimelineItem } from "./TimelineItem"

export const Timeline = () => {

  const timeLineItems: TimelineItemProps[] = [{
    title: "",
    description: "",
    date: "",
    orientation: "left"
  }]

  return (
    <div className="timeline">
      {timeLineItems.map( (item, idx) => <TimelineItem key = {idx} {...item} /> )}
    </div>   
  )
}
