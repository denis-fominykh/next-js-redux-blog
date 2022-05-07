import { createAction } from '@reduxjs/toolkit';

import { API_PATHS } from 'constants/apiPaths';
import { createRequestActions } from 'redux/createRequestAction';

const actionType = '[PEOPLE]';

export const peopleActions = {
  fetchData: createRequestActions<Record<string, never>>(`${actionType}/PEOPLE_FETCH_DATA`, () => ({
    payload: {
      url: API_PATHS.PEOPLE._,
      method: 'get',
    },
  })),
  clearPeopleData: createAction(`${actionType}/CLEAR_PEOPLE_DATA`),
};
