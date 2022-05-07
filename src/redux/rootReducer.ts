import { combineReducers } from 'redux';

import { people } from 'redux/people/reducers';

export function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({ ...injectedReducers, people });

  return rootReducer;
}
