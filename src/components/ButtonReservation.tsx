import { CalendarEvent } from "../lib/entities/CalendarEvent";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { handleRedirectLinkClick } from "../components/Common";
import { CALENDAR_ISO_DATE } from "../lib/Constants";

export const ButtonReservation = () => {
  const calendarEvent = new CalendarEvent(
    CALENDAR_ISO_DATE.BEGIN,
    CALENDAR_ISO_DATE.END
  );
  const calendUrl = calendarEvent.getLink();

  return (
    <button
      className="home-button calendar-button"
      onClick={() =>
        handleRedirectLinkClick({
          desktopUrl: calendUrl,
          mobileUrl: calendUrl,
        })
      }
    >
      <p className="calendar-button-content">
        <MdOutlineCalendarMonth />
        Agregar recordatorio
      </p>
    </button>
  );
};
