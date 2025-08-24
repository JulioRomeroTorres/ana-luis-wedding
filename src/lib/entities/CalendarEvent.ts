import { CALENDAR_URL, DEFAULT_WEDDING_EVENT_INFORMATION } from "../Constants";

export class CalendarEvent {
  private readonly eventEntities: Record<string, any>;

  constructor(startDate: string, endDate: string){
    this.eventEntities = {
      ...DEFAULT_WEDDING_EVENT_INFORMATION,
      dates: `${startDate}/${endDate}`
    }
  }


  getLink(): string {
    
    let baseLink = CALENDAR_URL;

    Object.keys(this.eventEntities).forEach(keyEvent => {
      baseLink = `${baseLink}&${keyEvent}=${encodeURIComponent(this.eventEntities[keyEvent])}`
    });

    return baseLink;

  }

}