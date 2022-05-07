import { all, call } from 'redux-saga/effects';

import { peopleWatcher } from 'redux/people/saga/watchers';

export function* rootSaga() {
  yield all([call(peopleWatcher)]);
}
