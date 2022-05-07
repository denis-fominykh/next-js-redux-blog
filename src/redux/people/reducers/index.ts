import { combineReducers } from '@reduxjs/toolkit';

import { peopleItemDataReducer } from 'redux/people/reducers/peopleItemReducer';
import { peopleDataReducer } from 'redux/people/reducers/peopleReducer';

export const people = combineReducers({
  peopleData: peopleDataReducer,
  peopleItemData: peopleItemDataReducer,
});
