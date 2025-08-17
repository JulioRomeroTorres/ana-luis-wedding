export interface DateTimeParameters {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export type MapperHtmlElements = Record<string, HTMLCollectionOf<Element>>;

export class CounterDown {
  
  private readonly deadline: string;
  private readonly dateDeadline: number;

  constructor(deadline: string) {

    this.deadline = deadline;
    this.dateDeadline = new Date(this.deadline).getTime();
  }

  parseDatetime(): DateTimeParameters {

    const currentDateNumber = new Date().getTime()
    const timeToLive = this.dateDeadline - currentDateNumber;

    let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds
    }

  }

}
