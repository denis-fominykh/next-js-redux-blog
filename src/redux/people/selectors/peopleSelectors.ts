import { PeopleStore } from 'redux/people/types';

export const selectPeopleData = (state: PeopleStore) => state.people.peopleData.data;
export const selectPeopleLoader = (state: PeopleStore) => state.people.peopleData.loading;
