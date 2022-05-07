import { takeLatest } from 'redux-saga/effects';

import { peopleActions, peopleItemActions } from 'redux/people/actions';
import {
  getPeopleDataRequestWorker,
  getPeopleItemDataRequestWorker,
} from 'redux/people/saga/workers';

export function* peopleWatcher() {
  yield takeLatest([peopleActions.fetchData.request], getPeopleDataRequestWorker);
  yield takeLatest([peopleItemActions.fetchItemData.request], getPeopleItemDataRequestWorker);
}
