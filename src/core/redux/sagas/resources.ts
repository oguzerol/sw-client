import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_RESOURCES } from "../constants";
import { getRoot } from "../../../api";

import {
  fetchResourcesError,
  fetchResourcesSuccess,
} from "../actions/resources";

export function* watchResourceFetch() {
  yield takeLatest(FETCH_RESOURCES, fetchResources);
}

function* fetchResources(action: any): any {
  try {
    const tabResults = yield call(() => getRoot(action.payload));
    yield put(fetchResourcesSuccess(tabResults));
  } catch (error) {
    yield put(fetchResourcesError(error));
  }
}
