import { createAction } from '@reduxjs/toolkit';

import { API_PATHS } from 'constants/apiPaths';
import { createRequestActions } from 'redux/createRequestAction';
import { FetchPeopleItemUrlParams } from 'redux/people/types';

const actionType = '[PEOPLE]';

export const peopleItemActions = {
  fetchItemData: createRequestActions<FetchPeopleItemUrlParams>(
    `${actionType}/PEOPLE_ITEM_FETCH_DATA`,
    ({ id }) => ({
      payload: {
        url: API_PATHS.PEOPLE.BY_ID.replace(':id', id),
        method: 'get',
      },
    }),
  ),
  clearPeopleItemData: createAction(`${actionType}/CLEAR_PEOPLE_ITEM_DATA`),
};
