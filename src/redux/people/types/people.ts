export interface PeopleData {
  species: [];
  url: string;
  name: string;
  mass: string;
  height: string;
  gender: string;
  edited: string;
  films: string[];
  created: string;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  birthYear: string;
  homeworld: string;
  vehicles: string[];
  starships: string[];
}

export interface PeopleDataResponse {
  count: number;
  next: null | string;
  results: PeopleData[];
  previous: null | string;
}

export interface PeopleDataState {
  loading: boolean;
  succeed: boolean;
  error: null | string;
  data: Record<string, never> | PeopleData[];
}

export interface PeopleItemDataState {
  loading: boolean;
  succeed: boolean;
  error: null | string;
  data: Record<string, never> | PeopleData;
}

export interface PeopleReducer {
  peopleData: PeopleDataState;
  peopleItemData: PeopleItemDataState;
}

export interface FetchPeopleItemUrlParams {
  id: string;
}

export interface PeopleStore {
  people: PeopleReducer;
}
