export const API_PATHS = {
  PEOPLE: {
    _: '/people',
    BY_ID: '/people/:id',
  },
  PLANETS: {
    _: '/planets',
    BY_ID: '/planets/:id',
  },
  STARSHIPS: {
    _: '/starships',
    BY_ID: '/starships/:id',
  },
} as const;
