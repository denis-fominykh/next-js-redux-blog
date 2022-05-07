import { createAction } from '@reduxjs/toolkit';

import { PrepareAction } from 'types';

export const createRequestActions = <ParamsType>(
  type: string,
  prepareAction: PrepareAction<ParamsType>,
) => ({
  init: createAction(`${type}__INIT`),
  clear: createAction(`${type}__CLEAR`),
  request: createAction(`${type}_REQUEST`, prepareAction),
  start: createAction(`${type}_REQUEST-START`),
  success: createAction(`${type}_REQUEST-SUCCESS`),
  error: createAction(`${type}_REQUEST-ERROR`),
});
