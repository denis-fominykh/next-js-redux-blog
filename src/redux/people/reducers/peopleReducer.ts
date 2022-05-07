import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { peopleActions } from 'redux/people/actions';
import { PeopleDataState, PeopleDataResponse } from 'redux/people/types';

const initialState: PeopleDataState = {
  data: {},
  error: null,
  loading: true,
  succeed: false,
};

export const peopleDataReducer = createReducer(initialState, {
  [peopleActions.clearPeopleData.toString()]: () => ({
    ...initialState,
  }),
  [peopleActions.fetchData.start.toString()]: () => ({
    ...initialState,
    error: null,
    loading: true,
  }),
  [peopleActions.fetchData.success.toString()]: (
    state: PeopleDataState,
    { payload }: PayloadAction<PeopleDataResponse>,
  ) => ({
    ...state,
    loading: false,
    succeed: true,
    data: payload.results,
  }),
  [peopleActions.fetchData.error.toString()]: (state: PeopleDataState, { payload }: any) => ({
    ...state,
    loading: false,
    error: payload.response.data.detail,
  }),
});
