import { peopleItemActions } from 'redux/people/actions';
import { createApiRequestSaga } from 'redux/wrapperWorkerSaga';

export const getPeopleItemDataRequestWorker = createApiRequestSaga(peopleItemActions.fetchItemData);
