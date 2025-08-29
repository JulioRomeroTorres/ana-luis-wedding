import { HORIZONTAL_ORIENTATION_LIST } from "../../lib/Constants";
import type { TimelineItemProps } from "../../lib/entities/TimelineItemProps";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  const timeLineItems: TimelineItemProps[] = [
    {
      description: "Misa",
      date: "02:30 P.M.",
      icon: 'src/assets/timeline/church.png',
    },
    {
      description: "Hora Cocktail",
      date: "04:30 P.M.",
      icon: 'src/assets/timeline/koctail.png'
    },
    {
      description: "Entrada de esposos",
      date: "05:30 P.M.",
      icon: 'src/assets/timeline/rings.png',
    },
    {
      description: "Cena",
      date: "06:15 P.M.",
      icon: 'src/assets/timeline/food.png',
    },
    {
      description: "Fiesta",
      date: "07:15 P.M.",
      icon: 'src/assets/timeline/novios.png',
    },
  ];

  return (
    <div className="timeline">
      {timeLineItems.map((item, idx) => {
        const binaryIdx = idx & 1;
        const orientation = HORIZONTAL_ORIENTATION_LIST[binaryIdx];
        return <TimelineItem key={idx} {...item} orientation={orientation} />;
      })}
    </div>
  );
};
