import { PeopleStore } from 'redux/people/types';

export const selectPeopleItemData = (state: PeopleStore) => state.people.peopleItemData.data;
export const selectPeopleItemLoader = (state: PeopleStore) => state.people.peopleItemData.loading;
