export const WEDDING_DAY = "2025-10-25T18:00:00";
export const DEFAULT_HEADERS = {
                                  "Content-Type": "application/json"
                                }

export const ENDPOINT_DIRECTORY: Record<string, any> = {
  EXCEL: {
    BASE_URL: "https://script.google.com/macros/s/AKfycbx74r3dLm13n6kqQEn85qOAg-baXbUa1oFxTlylWAJIO-5NQeqfkt-IMn5tRN7_srTt/exec",
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

export const YAPE_PHONE_NUMBER = `979040974`

export const WEDDING_DAY_STRING = `SÁBADO OCTUBRE`;

export const MAPPER_DATETIME_UNITS = {
  days: "Días",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos"
}

export const DATETIME_UNITS = Object.keys(MAPPER_DATETIME_UNITS);