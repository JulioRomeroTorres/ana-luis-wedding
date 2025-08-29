import { HORIZONTAL_ORIENTATION_LIST } from "../../lib/Constants";
import type { TimelineItemProps } from "../../lib/entities/TimelineItemProps";
import { TimelineItem } from "./TimelineItem";

export const Timeline: React.FC = () => {

  const photos = Object.values(
    import.meta.glob(`/src/assets/timeline/photo_*.png`, {
      query: '?url',
      import: 'default',
      eager: true
    })
  ) as string[];
  const timeLineItems: TimelineItemProps[] = [
    {
      description: "Misa",
      date: "02:30 P.M.",
      icon: photos[0],
    },
    {
      description: "Hora Cocktail",
      date: "04:30 P.M.",
      icon: photos[1]
    },
    {
      description: "Entrada de esposos",
      date: "05:30 P.M.",
      icon: photos[2]
    },
    {
      description: "Cena",
      date: "06:15 P.M.",
      icon: photos[3]
    },
    {
      description: "Fiesta",
      date: "07:15 P.M.",
      icon: photos[4]
    },
  ];

  return (
    <div className="timeline">
      {timeLineItems.map((item, idx) => {
        const binaryIdx = idx & 1;
        const orientation = HORIZONTAL_ORIENTATION_LIST[binaryIdx];
        return <TimelineItem key={idx} {...item } icon={photos[idx]} orientation={orientation} />;
      })}
    </div>
  );
};
