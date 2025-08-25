import { CalendarEvent } from "../lib/entities/CalendarEvent"
import { MdOutlineCalendarMonth } from "react-icons/md";
import { handleRedirectLinkClick } from "./Common";
import { CALENDAR_ISO_DATE } from "../lib/Constants";

export const EventReservation = () => {
  
  const calendarEvent = new CalendarEvent( CALENDAR_ISO_DATE.BEGIN, CALENDAR_ISO_DATE.END)
  const calendUrl = calendarEvent.getLink()

  return (
    <div className="event-reservation-container">
      <h1>Reserva nuestra fecha</h1>
      <MdOutlineCalendarMonth />
      <button 
        className="home-button calendar-button" onClick = {() => handleRedirectLinkClick({
          desktopUrl: calendUrl,
          mobileUrl: calendUrl
        })}
       > No te olvides, te esperamos </button>
    </div>
    
  ) 
}