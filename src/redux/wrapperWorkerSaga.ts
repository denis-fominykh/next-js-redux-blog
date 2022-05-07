/* eslint-disable */
import { Action } from '@reduxjs/toolkit';
import axios from 'axios';
import camelize from 'camelize-ts';
import get from 'lodash/get';
import { call, put, fork } from 'redux-saga/effects';
import snakeCaseKeys from 'snakecase-keys';

import { ObjectGenericValuesType } from 'types';

const baseURL = process.env.NEXT_APP_BASE_URL;

const axiosInstance = (url: string) =>
  axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json, text/plain, */*',
    },
  });

// @ts-ignore
const sendApiRequest = requestConfig => {
  const { customUrl } = requestConfig;
  const url = customUrl || baseURL;

  const reqInstance = axiosInstance(url);

  return reqInstance.request(requestConfig);
};

// @ts-ignore
function* safeDispatch(action, payload) {
  if (!action) return;

  yield put(action(payload));
}

// @ts-ignore
export function* apiRequestSaga(action, options) {
  const { start, success, error } = options || {};
  const { payload } = action;
  // const excludeHeaders = payload?.excludeHeaders;

  payload.headers = {};

  const { data = {} } = payload;
  const payloadData = data instanceof FormData ? data : snakeCaseKeys(data);
  const reqData = { ...payload, data: payloadData };
  yield call(() => safeDispatch(start, reqData));
  try {
    // @ts-ignore
    const response = yield call(() => sendApiRequest(reqData));
    const dataResponse = response.data instanceof Blob ? response : camelize(response.data);
    yield call(() => safeDispatch(success, dataResponse));
    return dataResponse;
  } catch (e) {
    // const status = get(e, 'response.status');
    const errorBody = get(e, 'response.data.data', e);
    const formattedError = camelize(errorBody);
    yield call(() => safeDispatch(error, formattedError));

    if (!options) {
      throw formattedError;
    }
    return null;
  }
}

export const createApiRequestSaga = ({
  start,
  success,
  error,
}: ObjectGenericValuesType<Action>) => {
  return function* handleRequestSaga(action: Action) {
    yield fork(apiRequestSaga, action, { start, success, error });
  };
};
