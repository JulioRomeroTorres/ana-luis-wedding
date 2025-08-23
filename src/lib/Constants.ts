import type { HorizontalOrientation } from "./entities/TimelineItemProps";

export const WEDDING_DAY = "2025-10-25T18:00:00";
export const DEFAULT_HEADERS = {
                                  "Content-Type": "text/plain"
                                }

export const ENDPOINT_DIRECTORY = {
  EXCEL: {
    BASE_URL: "https://script.google.com/macros/s/AKfycbzwdx7XIdwm2euyYJ929hh8vWKlnF8W1cBL4OE7xEoJEswF1gYfysBG4y1-2L0cvphCNA/exec",
    ENDPOINTS: []
  }
}



export const MOVEMENT_HORIZONTAL_SCROLL = {
  LEFT: "left",
  RIGHT: "right"
} as const;

export type MovementHorizontalScrollEnum = (typeof MOVEMENT_HORIZONTAL_SCROLL)[keyof typeof MOVEMENT_HORIZONTAL_SCROLL];

export const REWARD_DEFAULT_MESSAGE = `
Mi número de cuenta BCP Soles es 5154083434026.
Mi número de cuenta interbancaria es 00251500408343402653.
`


export const PERUVIN_PREFIX = "51";

export const YAPE_PHONE_NUMBER = `979040974`;

export const WEDDING_DAY_STRING = `SÁBADO OCTUBRE`;

export const MAPPER_DATETIME_UNITS = {
  days: "Días",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos"
}

export const DATETIME_UNITS = Object.keys(MAPPER_DATETIME_UNITS);

export const DEFAULT_MESSAGE = "Urgente, necesito detalles de la boda, me muerooo";

export const DEFAULT_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  relationship: "",
  attendingCeremony: false,
  attendingParty: false,
  attendingBoth: false
}


export const DEFAULT_WEDDING_EVENT_INFORMATION = {
  text: 'Nuestra Boda',
  details: 'Ven a celebrar con nosotros nuestro día especial!',
  location: 'Plaza Principal, Ciudad Ejemplo'
};

export const HORIZONTAL_ORIENTATION_LIST: HorizontalOrientation[]  = ["right", "left"]