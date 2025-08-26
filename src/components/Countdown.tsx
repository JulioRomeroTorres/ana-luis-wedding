import { useEffect, useState } from "react";
import {
  CounterDown,
  type DateTimeParameters,
} from "../lib/entities/CounterDown";
import { MAPPER_DATETIME_UNITS, WEDDING_DAY } from "../lib/Constants";

type TimeUnit = keyof typeof MAPPER_DATETIME_UNITS;

export const Countdown = () => {
  const [time, setTime] = useState<DateTimeParameters>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const counter = new CounterDown(WEDDING_DAY);

    const interval = setInterval(() => {
      const timeLeft = counter.parseDatetime();
      setTime(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      {(Object.keys(MAPPER_DATETIME_UNITS) as TimeUnit[]).map((unit) => (
        <div key={unit} className="countdown-item">
          <span className="countdown-value" key={unit}>
            {time[unit]}
          </span>
          <span className="countdown-label">{MAPPER_DATETIME_UNITS[unit]}</span>
        </div>
      ))}
    </div>
  );
};
